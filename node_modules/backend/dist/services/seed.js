const textSamples = [
    "Limited-time offer, click to win now.",
    "Please review the attached invoice by EOD.",
    "Your account is locked, confirm password urgently.",
    "Happy birthday, hope you have a great day.",
    "Congratulations! You won a free vacation package."
];
const imageSamples = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    "https://images.unsplash.com/photo-1545249390-6bdfa286032f"
];
export function buildSeedTasks(total = 40) {
    const rows = [];
    for (let i = 0; i < total; i += 1) {
        const type = i % 2 === 0 ? "text" : "image";
        const content = type === "text"
            ? textSamples[i % textSamples.length]
            : `${imageSamples[i % imageSamples.length]}?sig=${i + 1}`;
        rows.push({ type, content });
    }
    return rows;
}
