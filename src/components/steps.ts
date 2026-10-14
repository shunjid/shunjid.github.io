export const stepTones = [
  { background: "bg-step-1", text: "text-step-1-ink" },
  { background: "bg-step-2", text: "text-step-1-ink" },
  { background: "bg-step-3", text: "text-white" },
  { background: "bg-ink", text: "text-white" },
];

export function stepTone(indexFromBottom: number, total: number) {
  const offset = stepTones.length - total;
  return stepTones[Math.max(0, offset + indexFromBottom)];
}
