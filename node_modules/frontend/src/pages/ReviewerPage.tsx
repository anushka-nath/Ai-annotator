import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { readIdentity } from "../lib/identity";
import type { Annotation, Task } from "../types";

export function ReviewerPage() {
  const identity = readIdentity();
  const isReviewer = identity?.role === "reviewer";
  const [rows, setRows] = useState<Annotation[]>([]);
  const [error, setError] = useState("");

  async function load() {
    try {
      setRows(await api.submittedAnnotations());
    } catch (e) {
      setError((e as Error).message);
    }
  }

  useEffect(() => { void load(); }, []);

  async function decide(taskId: string, decision: "approved" | "rejected") {
    if (!identity?.name || !isReviewer) return;
    await api.review({ taskId, decision, reviewedBy: identity.name });
    await load();
  }

  return (
    <main className="container">
      <h1>Reviewer Workspace</h1>
      {!isReviewer && <p className="error">Read-only view. Switch role to Reviewer to approve/reject.</p>}
      {error && <p className="error">{error}</p>}
      <div className="card">
        {rows.length === 0 ? <p>No submitted annotations pending review.</p> : rows.map((row) => {
          const task = row.taskId as Task;
          return (
            <article key={row._id} className="review-item">
              <h3>{task.type.toUpperCase()} Task</h3>
              {task.type === "image" ? <img className="preview" src={task.content} alt="submitted" /> : <p>{task.content}</p>}
              <p>Label: {row.label} ({row.confidence}) by {row.annotatedBy}</p>
              <div className="row">
                <button className="btn primary" type="button" onClick={() => decide(task._id, "approved")} disabled={!isReviewer}>Approve</button>
                <button className="btn" type="button" onClick={() => decide(task._id, "rejected")} disabled={!isReviewer}>Reject</button>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
