import { useEffect, useState } from "react";
import { api } from "../lib/api";
import type { Metrics } from "../types";

const emptyMetrics: Metrics = {
  totalTasks: 0,
  completedTasks: 0,
  completionRate: 0,
  approvalRate: 0,
  averageConfidence: 0
};

export function OverviewPage() {
  const [metrics, setMetrics] = useState<Metrics>(emptyMetrics);
  const [error, setError] = useState("");

  useEffect(() => {
    api.metrics().then(setMetrics).catch((e) => setError((e as Error).message));
  }, []);

  return (
    <main className="container">
      <h1>Overview Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <section className="grid four">
        <article className="card"><h3>Total Tasks</h3><p className="metric">{metrics.totalTasks}</p></article>
        <article className="card"><h3>Completed Tasks</h3><p className="metric">{metrics.completedTasks}</p></article>
        <article className="card"><h3>Completion Rate</h3><p className="metric">{metrics.completionRate}%</p></article>
        <article className="card"><h3>Approval Rate</h3><p className="metric">{metrics.approvalRate}%</p></article>
      </section>
      <section className="card">
        <h3>Average Confidence</h3>
        <p className="metric">{metrics.averageConfidence}</p>
      </section>
    </main>
  );
}
