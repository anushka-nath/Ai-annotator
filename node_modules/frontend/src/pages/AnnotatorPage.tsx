import { useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";
import { readIdentity } from "../lib/identity";
import type { Task } from "../types";

const textLabels = ["Spam", "Not Spam", "Positive", "Negative"];
const imageLabels = ["Cat", "Dog", "Other"];

export function AnnotatorPage() {
  const identity = readIdentity();
  const isAnnotator = identity?.role === "annotator";
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<string>("");
  const [label, setLabel] = useState("");
  const [confidence, setConfidence] = useState(0.8);
  const [submitInlineMessage, setSubmitInlineMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadTasks() {
    setLoading(true);
    try {
      const data = await api.tasks();
      setTasks(data);
      if (!selectedTaskId && data[0]) setSelectedTaskId(data[0]._id);
    } catch (e) {
      setSubmitInlineMessage((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void loadTasks(); }, []);

  const selectedTask = useMemo(() => tasks.find((t) => t._id === selectedTaskId), [tasks, selectedTaskId]);
  const canClaim = Boolean(selectedTask && selectedTask.status === "unassigned" && identity?.name && isAnnotator);
  const canSubmit = Boolean(selectedTask && identity?.name && label && isAnnotator);

  async function seedTasks() {
    setSubmitInlineMessage("");
    try {
      await api.seed();
      setSubmitInlineMessage("Seeded 40 tasks.");
      await loadTasks();
    } catch (e) {
      setSubmitInlineMessage((e as Error).message);
    }
  }

  async function resetTasks() {
    setSubmitInlineMessage("");
    try {
      await api.resetTasks();
      setSubmitInlineMessage("All tasks reset to unassigned and annotations cleared.");
      await loadTasks();
    } catch (e) {
      setSubmitInlineMessage((e as Error).message);
    }
  }

  async function claimTask() {
    if (!selectedTask) return;
    if (!isAnnotator) {
      setSubmitInlineMessage("Read-only view. Switch role to Annotator to claim tasks.");
      return;
    }
    if (!identity?.name) {
      setSubmitInlineMessage("Set role and name in the Role page before claiming tasks.");
      return;
    }
    setSubmitInlineMessage("");
    try {
      await api.claim(selectedTask._id, identity.name);
      setSubmitInlineMessage("Task claimed successfully.");
      await loadTasks();
    } catch (e) {
      setSubmitInlineMessage((e as Error).message);
    }
  }

  async function submitAnnotation() {
    if (!selectedTask) return;
    setSubmitInlineMessage("");
    if (!isAnnotator) {
      setSubmitInlineMessage("Read-only view. Switch role to Annotator to submit.");
      return;
    }
    if (!identity?.name) {
      setSubmitInlineMessage("Set role and name in the Role page before submitting.");
      return;
    }
    if (!label) {
      setSubmitInlineMessage("Select a label before submitting.");
      return;
    }
    if (selectedTask.status === "submitted") {
      setSubmitInlineMessage("Already submitted. Wait for reviewer approval/rejection.");
      return;
    }
    if (selectedTask.status === "reviewed") {
      setSubmitInlineMessage("Task already reviewed. If reviewer rejected it, resubmission is allowed.");
      return;
    }
    if (selectedTask.status !== "in_progress" || selectedTask.assignedTo !== identity.name) {
      setSubmitInlineMessage("Claim this task first. Only your in-progress task can be submitted.");
      return;
    }
    setSubmitInlineMessage("");
    try {
      await api.annotate({ taskId: selectedTask._id, label, confidence, annotatedBy: identity.name });
      setSubmitInlineMessage("Annotation submitted.");
      await loadTasks();
    } catch (e) {
      setSubmitInlineMessage((e as Error).message);
    }
  }

  const allowedLabels = selectedTask?.type === "text" ? textLabels : imageLabels;
  const submitHint = !selectedTask
    ? null
    : selectedTask.status === "unassigned"
      ? { kind: "warn", text: "⚠ Claim required before submit." }
      : selectedTask.status === "submitted"
        ? null
        : selectedTask.status === "reviewed"
          ? { kind: "warn", text: "⚠ Reviewed. Resubmit only if reviewer rejected." }
          : selectedTask.assignedTo === identity?.name
            ? { kind: "ok", text: "✓ Ready to submit." }
            : { kind: "warn", text: "⚠ Claimed by another user." };

  return (
    <main className="container">
      <div className="row spaced">
        <h1>Annotator Workspace</h1>
        <div className="row">
          <button className="btn" onClick={seedTasks} type="button" disabled={!isAnnotator}>Seed 40 Tasks</button>
          <button className="btn" onClick={resetTasks} type="button" disabled={!isAnnotator}>Reset Tasks</button>
        </div>
      </div>
      <div className="grid two">
        <section className="card">
          <h3>Tasks</h3>
          {loading ? <p>Loading...</p> : tasks.map((task) => (
            <button type="button" key={task._id} className={`task ${selectedTaskId === task._id ? "active" : ""}`} onClick={() => { setSelectedTaskId(task._id); setLabel(task.suggestion.label); setConfidence(task.suggestion.confidence); setSubmitInlineMessage(""); }}>
              <span>{task.type.toUpperCase()} - {task.status}</span>
              <small>{task.assignedTo ?? "unassigned"}</small>
            </button>
          ))}
        </section>
        <section className="card">
          <h3>Task Viewer</h3>
          {!selectedTask ? <p>Select a task.</p> : (
            <>
              {selectedTask.type === "text" ? <p>{selectedTask.content}</p> : <img src={selectedTask.content} alt="Task" className="preview" />}
              <p>AI Suggestion: <strong>{selectedTask.suggestion.label}</strong> ({selectedTask.suggestion.confidence})</p>
              <div className="row">
                <button className="btn" type="button" onClick={claimTask} disabled={!canClaim}>Claim</button>
                <select value={label} onChange={(e) => setLabel(e.target.value)}>
                  <option value="">Select label</option>
                  {allowedLabels.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
                <input type="number" min={0} max={1} step={0.01} value={confidence} onChange={(e) => setConfidence(Number(e.target.value))} />
                <button className="btn primary" type="button" onClick={submitAnnotation} disabled={!canSubmit}>Submit</button>
              </div>
              {submitHint && (
                <p className={submitHint.kind === "ok" ? "" : "error"}>{submitHint.text}</p>
              )}
              {submitInlineMessage && <p className="error">{submitInlineMessage}</p>}
              {!isAnnotator && <p className="error">Read-only view. Switch role to Annotator to take actions.</p>}
              {!identity?.name && <p className="error">No identity set. Go to Role page and click Continue.</p>}
            </>
          )}
        </section>
      </div>
    </main>
  );
}
