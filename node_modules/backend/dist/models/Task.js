import { Schema, model } from "mongoose";
const taskSchema = new Schema({
    type: { type: String, enum: ["text", "image"], required: true },
    content: { type: String, required: true },
    status: {
        type: String,
        enum: ["unassigned", "in_progress", "submitted", "reviewed"],
        default: "unassigned"
    },
    assignedTo: { type: String }
}, { timestamps: true });
export const TaskModel = model("Task", taskSchema);
