import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveIdentity } from "../lib/identity";
import type { Role } from "../types";

export function RolePage() {
  const [role, setRole] = useState<Role>("annotator");
  const [name, setName] = useState("");
  const [showLaunchPopup, setShowLaunchPopup] = useState(false);
  const navigate = useNavigate();

  function submit() {
    if (!name.trim()) return;
    saveIdentity({ role, name: name.trim() });
    setShowLaunchPopup(true);
    setTimeout(() => {
      navigate(role === "annotator" ? "/annotator" : "/reviewer");
    }, 750);
  }

  return (
    <main className="container narrow">
      <h1>Role Selection</h1>
      <div className="card form">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter display name" />
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value as Role)}>
          <option value="annotator">Annotator</option>
          <option value="reviewer">Reviewer</option>
        </select>
        <button className="btn primary" onClick={submit} type="button">Continue</button>
      </div>
      {showLaunchPopup && (
        <div className="launch-overlay">
          <div className="launch-card">
            <div className="launch-badge">{role === "annotator" ? "ANNOTATOR" : "REVIEWER"}</div>
            <h2>Launching Workspace</h2>
            <p>Setting up the flow for {name.trim()}...</p>
          </div>
        </div>
      )}
    </main>
  );
}
