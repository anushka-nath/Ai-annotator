import { Router } from "express";
import { AnnotationModel } from "../models/Annotation.js";
import { TaskModel } from "../models/Task.js";
import { getAiSuggestion } from "../services/aiSuggestion.js";
import { buildSeedTasks } from "../services/seed.js";
import { annotateSchema, claimSchema, reviewSchema, taskQuerySchema } from "../utils/schemas.js";
import { canTransition } from "../utils/transitions.js";
export const apiRouter = Router();
apiRouter.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});
apiRouter.get("/tasks", async (req, res, next) => {
    try {
        const q = taskQuerySchema.parse(req.query);
        const filters = {};
        if (q.status)
            filters.status = q.status;
        if (q.type)
            filters.type = q.type;
        if (q.assignee)
            filters.assignedTo = q.assignee;
        const tasks = await TaskModel.find(filters).lean();
        const withSuggestions = tasks.map((task) => ({
            ...task,
            suggestion: getAiSuggestion(String(task._id), task.type, task.content)
        }));
        res.json(withSuggestions);
    }
    catch (err) {
        next(err);
    }
});
apiRouter.post("/tasks/seed", async (_req, res, next) => {
    try {
        await TaskModel.deleteMany({});
        await AnnotationModel.deleteMany({});
        const tasks = buildSeedTasks(40).map((t) => ({ ...t, status: "unassigned" }));
        const created = await TaskModel.insertMany(tasks);
        res.status(201).json({ inserted: created.length });
    }
    catch (err) {
        next(err);
    }
});
apiRouter.post("/tasks/:taskId/claim", async (req, res, next) => {
    try {
        const { taskId } = req.params;
        const { userName } = claimSchema.parse(req.body);
        const task = await TaskModel.findById(taskId);
        if (!task)
            return res.status(404).json({ message: "Task not found" });
        if (!canTransition(task.status, "in_progress")) {
            return res.status(400).json({ message: "Task cannot be claimed in current state" });
        }
        task.status = "in_progress";
        task.assignedTo = userName;
        await task.save();
        return res.json(task);
    }
    catch (err) {
        return next(err);
    }
});
apiRouter.post("/annotate", async (req, res, next) => {
    try {
        const input = annotateSchema.parse(req.body);
        const task = await TaskModel.findById(input.taskId);
        if (!task)
            return res.status(404).json({ message: "Task not found" });
        if (!["in_progress", "reviewed"].includes(task.status)) {
            return res.status(400).json({ message: "Task is not ready for annotation" });
        }
        if (task.status === "reviewed") {
            const existing = await AnnotationModel.findOne({ taskId: task._id });
            if (!existing || existing.reviewStatus !== "rejected") {
                return res.status(400).json({ message: "Only rejected annotations can be resubmitted" });
            }
        }
        const annotation = await AnnotationModel.findOneAndUpdate({ taskId: task._id }, {
            taskId: task._id,
            label: input.label,
            confidence: input.confidence,
            annotatedBy: input.annotatedBy,
            reviewStatus: "pending",
            reviewedBy: undefined
        }, { upsert: true, new: true });
        if (canTransition(task.status, "submitted")) {
            task.status = "submitted";
        }
        await task.save();
        return res.status(201).json(annotation);
    }
    catch (err) {
        return next(err);
    }
});
apiRouter.get("/annotations/submitted", async (_req, res, next) => {
    try {
        const annotations = await AnnotationModel.find({ reviewStatus: "pending" }).populate("taskId").lean();
        res.json(annotations);
    }
    catch (err) {
        next(err);
    }
});
apiRouter.post("/review", async (req, res, next) => {
    try {
        const input = reviewSchema.parse(req.body);
        const task = await TaskModel.findById(input.taskId);
        if (!task)
            return res.status(404).json({ message: "Task not found" });
        if (!canTransition(task.status, "reviewed")) {
            return res.status(400).json({ message: "Task is not ready for review" });
        }
        const annotation = await AnnotationModel.findOne({ taskId: task._id });
        if (!annotation)
            return res.status(404).json({ message: "Annotation not found" });
        annotation.reviewStatus = input.decision;
        annotation.reviewedBy = input.reviewedBy;
        await annotation.save();
        task.status = "reviewed";
        await task.save();
        return res.json(annotation);
    }
    catch (err) {
        return next(err);
    }
});
apiRouter.get("/metrics", async (_req, res, next) => {
    try {
        const [totalTasks, completedTasks, reviewed, approved, confidenceAgg] = await Promise.all([
            TaskModel.countDocuments(),
            TaskModel.countDocuments({ status: "reviewed" }),
            AnnotationModel.countDocuments({ reviewStatus: { $in: ["approved", "rejected"] } }),
            AnnotationModel.countDocuments({ reviewStatus: "approved" }),
            AnnotationModel.aggregate([{ $group: { _id: null, avgConfidence: { $avg: "$confidence" } } }])
        ]);
        const approvalRate = reviewed === 0 ? 0 : Number(((approved / reviewed) * 100).toFixed(2));
        const averageConfidence = confidenceAgg[0]?.avgConfidence ?? 0;
        res.json({
            totalTasks,
            completedTasks,
            completionRate: totalTasks === 0 ? 0 : Number(((completedTasks / totalTasks) * 100).toFixed(2)),
            approvalRate,
            averageConfidence: Number(averageConfidence.toFixed(2))
        });
    }
    catch (err) {
        next(err);
    }
});
