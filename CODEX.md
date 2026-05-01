# CODEX Engineering Contract

## Product Scope Guardrails
- Implement only PRD-approved modalities and labels: text (`Spam/Not Spam/Positive/Negative`) and image (`Cat/Dog/Other`).
- Enforce lifecycle: `unassigned -> in_progress -> submitted -> reviewed` with strict transition checks.
- Keep no-auth mode: role + display name only.
- Do not add non-goal features: real-time collaboration, RBAC auth, real ML model, large-scale batching.

## Engineering Standards
- TypeScript strict mode for frontend and backend.
- Validate all API inputs at request boundaries.
- Use deterministic seeded pseudo-random AI suggestions (repeatable by task identity).
- Treat lifecycle invariants as domain rules backed by unit tests.
- Keep API error format stable: `{ message: string }`.

## Delivery Standards
- Every change must check impact on both backend and frontend.
- Unit tests are mandatory for new domain logic.
- Each phase must include manual verification checklist and expected results.
- Keep docs updated when API contracts or workflow behavior change.

## UI Conformance Rules
- Stitch exports in `dox/screens/screens.md` are visual source of truth.
- React adaptation is allowed, but preserve token palette, hierarchy, and spacing intent.
- All exported screens are required: landing, role selection, annotator, reviewer, overview.

## Ops and Release Rules
- Use `.env.example` for required variables and keep secrets out of git.
- Final deployment targets: Render (backend), Vercel (frontend).
- Include rollback note in release PR: previous backend image and previous frontend deployment id.
- Public smoke checks required before marking release complete.
