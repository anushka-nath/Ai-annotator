export function notFound(_req, res) {
    res.status(404).json({ message: "Not found" });
}
export function errorHandler(err, _req, res, _next) {
    if (err instanceof Error) {
        res.status(400).json({ message: err.message });
        return;
    }
    res.status(500).json({ message: "Unexpected server error" });
}
