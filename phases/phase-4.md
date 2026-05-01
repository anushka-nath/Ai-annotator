# Phase 4 - Metrics Dashboard + Robust UX States

## Scope
- Backend API: `GET /metrics` for total tasks, completed tasks, completion rate, approval rate, average confidence.
- Frontend overview screen bound to live metrics data.
- Add loading, empty, and error states across annotator/reviewer/overview screens.
- Ensure navigation/layout consistency with all exported Stitch screens.
- Add unit tests for derived metric calculations and formatter helpers.

## Manual Verification
- Confirm metrics change after annotation and review actions.
- Confirm error messages render for API failures.
- Confirm empty states for no tasks / no pending reviews are clear and non-breaking.
- Validate responsive behavior on desktop and mobile widths.

## Prompt
Implement Phase 4: metrics API and stitched overview dashboard with live data bindings, plus robust loading/empty/error states throughout annotator/reviewer/dashboard pages. Add unit tests for metric calculations.
