import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="pill">Introducing Batch v2.4</p>
        <h1>AI-Assisted Human-in-the-Loop Annotation Platform</h1>
        <p>Scale your AI development with multi-modal annotation and review workflows.</p>
        <div className="row">
          <Link className="btn primary" to="/role">Start Annotating</Link>
          <Link className="btn" to="/overview">View Dashboard</Link>
        </div>
      </section>
      <section className="grid three">
        <article className="card"><h3>Multi-modal annotation</h3><p>Text and image tasks in one workflow.</p></article>
        <article className="card"><h3>AI-assisted labeling</h3><p>Seeded suggestions with confidence scores.</p></article>
        <article className="card"><h3>Review pipeline</h3><p>Approve/reject flow with quality control.</p></article>
      </section>
    </main>
  );
}
