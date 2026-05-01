# Phase 2 - Task Ingestion + Annotator Flow

## Scope
- Backend APIs: `GET /tasks`, `POST /tasks/seed`, `POST /tasks/:taskId/claim`.
- Add strict lifecycle transition guards for claiming.
- Add deterministic seeded AI suggestion service per task.
- Frontend annotator workspace: task list, task viewer, suggestion panel, claim action, label selector scaffolding.
- Seed 40 mixed tasks (text/image) with deterministic testability.
- Add unit tests for transition logic and suggestion determinism.

## Manual Verification
- Seed tasks and confirm exactly 40 created.
- View mixed text and image tasks in annotator workspace.
- Claim unassigned task and confirm status updates to `in_progress`.
- Confirm AI suggestion label+confidence is visible and stable for same task.

## Prompt
Implement Phase 2: task seeding/listing/claim APIs with strict lifecycle guards, seeded random AI suggestions, and annotator workspace connected to these APIs following Stitch layout. Add unit tests for transition logic and suggestion determinism.
