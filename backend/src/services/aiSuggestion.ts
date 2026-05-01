import type { TaskType } from "../models/Task.js";

const textLabels = ["Spam", "Not Spam", "Positive", "Negative"] as const;
const imageLabels = ["Cat", "Dog", "Other"] as const;

function hash(input: string): number {
  let value = 0;
  for (let i = 0; i < input.length; i += 1) {
    value = (value * 31 + input.charCodeAt(i)) % 1000000;
  }
  return value;
}

export function getAiSuggestion(taskId: string, type: TaskType, content: string) {
  const basis = `${taskId}:${type}:${content}`;
  const h = hash(basis);
  const labels = type === "text" ? textLabels : imageLabels;
  const label = labels[h % labels.length];
  const confidence = 0.6 + (h % 35) / 100;

  return {
    label,
    confidence: Number(confidence.toFixed(2))
  };
}
