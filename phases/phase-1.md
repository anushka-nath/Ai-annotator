# Phase 1 - Foundation + Theme + Role Entry

## Scope
- Create monorepo structure with `frontend` and `backend`.
- Backend: Express TS scaffold, Mongo connection module, health route, env validation, base error middleware.
- Frontend: React TS scaffold, Stitch-aligned theme tokens/styles, route skeletons for all exported screens.
- Implement role + display name entry persisted in localStorage.
- Add initial unit tests (env parsing, identity storage, base route rendering).

## Manual Verification
- Start backend and frontend locally.
- Confirm landing and role pages render.
- Enter role and name, refresh page, confirm identity persists.
- Hit `/api/health` and confirm `{ status: "ok" }`.

## Prompt
Implement Phase 1 exactly: create monorepo (`frontend`,`backend`), wire TS/Tailwind/Express, add stitched theme tokens, route skeletons for all exported screens, and role+name selection persisted in localStorage with unit tests. Do not add business workflow yet.
