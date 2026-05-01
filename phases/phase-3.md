# Phase 3 - Annotation + Reviewer Workflow

## Scope
- Backend APIs: `POST /annotate`, `GET /annotations/submitted`, `POST /review`.
- Annotation behavior: single annotation record per task (upsert); resubmission updates same record.
- Review behavior: reviewer approves/rejects latest pending submission and task becomes `reviewed`.
- Frontend: wire annotation submission in annotator UI and reviewer queue/actions in reviewer UI.
- Add unit tests for annotation state rules and review transition guards.

## Manual Verification
- Annotate an `in_progress` task and confirm task status moves to `submitted`.
- Open reviewer screen and confirm submitted annotation appears.
- Approve path: status becomes `reviewed`, queue item disappears.
- Reject path: annotation marked rejected; task can be re-annotated and resubmitted.

## Prompt
Implement Phase 3: annotation submit/upsert and review APIs, reviewer workspace UI from Stitch, and complete end-to-end manual flow unassigned?in_progress?submitted?reviewed with unit tests for state rules.
