import type { TaskStatus } from "../models/Task.js";

const allowed: Record<TaskStatus, TaskStatus[]> = {
  unassigned: ["in_progress"],
  in_progress: ["submitted"],
  submitted: ["reviewed"],
  reviewed: []
};

export function canTransition(from: TaskStatus, to: TaskStatus): boolean {
  return allowed[from].includes(to);
}
