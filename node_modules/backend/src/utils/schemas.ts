import { z } from "zod";

export const taskQuerySchema = z.object({
  status: z.enum(["unassigned", "in_progress", "submitted", "reviewed"]).optional(),
  type: z.enum(["text", "image"]).optional(),
  assignee: z.string().min(1).optional()
});

export const claimSchema = z.object({
  userName: z.string().min(1)
});

export const annotateSchema = z.object({
  taskId: z.string().min(1),
  label: z.string().min(1),
  confidence: z.number().min(0).max(1),
  annotatedBy: z.string().min(1)
});

export const reviewSchema = z.object({
  taskId: z.string().min(1),
  decision: z.enum(["approved", "rejected"]),
  reviewedBy: z.string().min(1)
});
