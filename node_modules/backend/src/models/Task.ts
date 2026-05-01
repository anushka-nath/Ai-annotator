import { Schema, model } from "mongoose";

export type TaskType = "text" | "image";
export type TaskStatus = "unassigned" | "in_progress" | "submitted" | "reviewed";

interface TaskDoc {
  type: TaskType;
  content: string;
  status: TaskStatus;
  assignedTo?: string;
}

const taskSchema = new Schema<TaskDoc>(
  {
    type: { type: String, enum: ["text", "image"], required: true },
    content: { type: String, required: true },
    status: {
      type: String,
      enum: ["unassigned", "in_progress", "submitted", "reviewed"],
      default: "unassigned"
    },
    assignedTo: { type: String }
  },
  { timestamps: true }
);

export const TaskModel = model<TaskDoc>("Task", taskSchema);
