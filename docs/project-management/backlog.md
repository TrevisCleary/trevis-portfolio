# Backlog

Project: `trevis-portfolio`
Last Updated: `2026-06-11`

## Backlog Summary

- Open Items: `3`
- Ready Items: `0`
- In Validation Items: `2`
- Completed Items: `4`
- Blocked Items: `0`
- Manual Review Items: `1`

## Items

| ID | Title | Type | Priority | Status | Phase | Source | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BL-001 | Remove, scrub, or formally govern the tracked Power Automate Desktop source export | governance | high | in-validation | near-term | This change set deletes `portfolio-intake/power-automate/exports/ExportPOCWeeklyCompliance_PAD.txt` without opening its contents and updates `.gitignore` to ignore future raw exports. | Commit the deletion; owner rotates or confirms invalid any credential material that may have been exposed; owner decides whether repository history rewrite/force-push is required; PM bug `BUG-001` can close after that evidence is recorded. |
| BL-002 | Add route and asset smoke tests for the portfolio SPA | test | high | done | near-term | Added `scripts/smoke-test.js`; `package.json` now has `test` and `test:smoke`; `README.md` documents the command. | `npm.cmd test` builds the app and verified 9 SPA routes plus 6 representative static assets on 2026-06-11. |
| BL-003 | Update README to reflect current routes, case studies, scripts, and project structure | documentation | medium | done | near-term | README now documents current case studies, draft project/blog routes, content authoring scripts, smoke tests, and project structure. | README route list, features, and structure match current source; validation commands are documented. |
| BL-004 | Reconcile unused generic `ProjectDetail.jsx` with the current dedicated case-study routing model | technical-debt | low | done | near-term | Removed unused `src/pages/ProjectDetail.jsx`; `rg` found no active import or route for it before removal. | No dead generic detail route remains; lint and smoke tests pass. |
| BL-005 | Verify production deployment and direct SPA route refresh behavior on Vercel | release | medium | in-validation | near-term | Vercel CLI found ready production deployment `https://trevis-portfolio-9weh2qlrw-treviscleary-2506s-projects.vercel.app`; unauthenticated browser requests are blocked by Vercel Deployment Protection. | Authenticated `vercel curl` verified required SPA routes and representative static assets return HTTP 200 with expected content types; owner must disable/bypass deployment protection before this is public-release complete. |
| BL-006 | Complete public content and media review for resume, contact, screenshots, and case-study claims | governance | medium | needs-manual-review | near-term | Public assets include `public/Resume_Trevis_Cleary.pdf`, contact links in `src/pages/Contact.jsx`, screenshots under `public/images/`, and portfolio-sensitive intake notes. | Owner confirms public-safe content; screenshots and case-study copy contain no private, resident, tenant, credential, or internal operational details; manual approval is recorded. |
| BL-007 | Document the repeatable intake-to-case-study promotion workflow | documentation | low | done | future | Added `docs/project-management/intake-to-case-study-workflow.md`. | Workflow describes raw intake storage, scrubbed notes, draft JSON records, public-safe media promotion, final case-study source changes, and validation. |

## Technical Follow-Ups

| ID | Title | Priority | Status | Source |
| --- | --- | --- | --- | --- |
| TF-001 | Keep `scripts/serve-dist.js` aligned with Vite preview or document why both preview paths exist. | low | done | `scripts/serve-dist.js` now returns 404 for missing static assets while preserving SPA fallback for extensionless routes; `scripts/smoke-test.js` uses the same behavior. |
| TF-002 | Review tracked Windows/system and media artifacts for intentional publication. | low | proposed | `public/desktop.ini`; `public/images/Screen Recording 2026-05-08 at 8.21.36 AM.mov.mp4`; `git ls-files public` |

## Deferred Items

| ID | Title | Reason | Revisit Trigger |
| --- | --- | --- | --- |
| DEF-001 | Create GitHub issues for local backlog items | Local Markdown is the current source of truth per Operations Library contract. | Revisit when the owner wants GitHub issue mirroring or milestones. |
