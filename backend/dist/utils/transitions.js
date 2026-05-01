const allowed = {
    unassigned: ["in_progress"],
    in_progress: ["submitted"],
    submitted: ["reviewed"],
    reviewed: []
};
export function canTransition(from, to) {
    return allowed[from].includes(to);
}
