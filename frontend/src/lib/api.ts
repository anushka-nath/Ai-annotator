import type { Annotation, Metrics, Task } from "../types";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(data.message ?? "Request failed");
  }

  return response.json() as Promise<T>;
}

export const api = {
  tasks: (params = "") => request<Task[]>(`/tasks${params ? `?${params}` : ""}`),
  seed: () => request<{ inserted: number }>("/tasks/seed", { method: "POST" }),
  resetTasks: () => request<{ reset: number }>("/tasks/reset", { method: "POST" }),
  claim: (taskId: string, userName: string) =>
    request<Task>(`/tasks/${taskId}/claim`, {
      method: "POST",
      body: JSON.stringify({ userName })
    }),
  annotate: (input: { taskId: string; label: string; confidence: number; annotatedBy: string }) =>
    request<Annotation>("/annotate", { method: "POST", body: JSON.stringify(input) }),
  submittedAnnotations: () => request<Annotation[]>("/annotations/submitted"),
  review: (input: { taskId: string; decision: "approved" | "rejected"; reviewedBy: string }) =>
    request<Annotation>("/review", { method: "POST", body: JSON.stringify(input) }),
  metrics: () => request<Metrics>("/metrics")
};
