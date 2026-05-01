# AI Annotator - Local Run and Phase QA Guide

## Prerequisites
- Node.js 20+ and npm
- MongoDB Atlas cluster reachable from your network
- Backend env configured in `backend/.env`
- Frontend env configured in `frontend/.env` (or default local API URL)

## Environment Files
- Backend: `backend/.env`
  - `NODE_ENV=development`
  - `PORT=4000`
  - `MONGODB_URI=<your atlas uri>`
  - `DB_NAME=annotateai`
  - `FRONTEND_ORIGIN=http://localhost:5175`
- Frontend: `frontend/.env`
  - `VITE_API_BASE_URL=http://localhost:4000/api`

## Install
```bash
npm install
```

## Local Run
```bash
npm run dev
```
- Frontend: `http://localhost:5175`
- Backend: `http://localhost:4000`
- Health check: `http://localhost:4000/api/health`

## Verification Commands
```bash
npm run test
npm run lint
npm run build
```

## Manual QA by Phase

### Phase 1 - Foundation + Theme + Role Entry
1. Open `http://localhost:5175` and verify landing page renders.
2. Go to `/role`, enter name + role, continue.
3. Refresh and verify identity persists in top nav.
4. Open `http://localhost:4000/api/health` and verify `{ "status": "ok" }`.

### Phase 2 - Task Ingestion + Annotator Flow
1. Go to `/annotator`.
2. Click `Seed 40 Tasks`.
3. Verify mixed `text` and `image` tasks are listed.
4. Select an unassigned task, click `Claim`.
5. Verify task status updates to `in_progress` and assignee is set.
6. Verify AI suggestion label and confidence are visible.

### Phase 3 - Annotation + Reviewer Workflow
1. In `/annotator`, claim a task and submit annotation.
2. Verify task status becomes `submitted`.
3. Open `/reviewer`, verify pending annotation appears.
4. Click `Approve` and verify it disappears from pending queue.
5. Repeat with another task and click `Reject`.
6. Return to `/annotator`, resubmit rejected task, verify it re-enters review flow.

### Phase 4 - Metrics Dashboard + UX Robustness
1. Open `/overview`.
2. Verify cards show: total tasks, completed tasks, completion rate, approval rate, average confidence.
3. Perform annotate/review actions and refresh `/overview`.
4. Verify metrics update consistently with actions.
5. Temporarily stop backend and verify UI shows non-breaking error states.

### Phase 5 - Hardening + Final Readiness
1. Run `npm run test`, `npm run lint`, `npm run build` and confirm all pass.
2. Verify mobile/desktop layouts for `/`, `/role`, `/annotator`, `/reviewer`, `/overview`.
3. Confirm CORS origin in backend env matches frontend origin.
4. Confirm no flow breaks across full lifecycle:
   - `unassigned -> in_progress -> submitted -> reviewed`

## Quick API Smoke (optional)
- `GET /api/tasks`
- `POST /api/tasks/seed`
- `GET /api/annotations/submitted`
- `GET /api/metrics`

