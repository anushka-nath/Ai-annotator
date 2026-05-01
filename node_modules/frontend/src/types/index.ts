export type Role = "annotator" | "reviewer";

export interface UserIdentity {
  role: Role;
  name: string;
}

export type TaskType = "text" | "image";
export type TaskStatus = "unassigned" | "in_progress" | "submitted" | "reviewed";

export interface Suggestion {
  label: string;
  confidence: number;
}

export interface Task {
  _id: string;
  type: TaskType;
  content: string;
  status: TaskStatus;
  assignedTo?: string;
  suggestion: Suggestion;
}

export interface Annotation {
  _id: string;
  taskId: Task | string;
  label: string;
  confidence: number;
  annotatedBy: string;
  reviewStatus: "pending" | "approved" | "rejected";
  reviewedBy?: string;
}

export interface Metrics {
  totalTasks: number;
  completedTasks: number;
  completionRate: number;
  approvalRate: number;
  averageConfidence: number;
}
