import { Schema, model, Types } from "mongoose";

export type ReviewStatus = "pending" | "approved" | "rejected";

interface AnnotationDoc {
  taskId: Types.ObjectId;
  label: string;
  confidence: number;
  annotatedBy: string;
  reviewStatus: ReviewStatus;
  reviewedBy?: string;
}

const annotationSchema = new Schema<AnnotationDoc>(
  {
    taskId: { type: Schema.Types.ObjectId, ref: "Task", required: true, unique: true },
    label: { type: String, required: true },
    confidence: { type: Number, min: 0, max: 1, required: true },
    annotatedBy: { type: String, required: true },
    reviewStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    },
    reviewedBy: { type: String }
  },
  { timestamps: true }
);

export const AnnotationModel = model<AnnotationDoc>("Annotation", annotationSchema);
