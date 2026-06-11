# Backlog

Project: `trevis-portfolio`
Last Updated: `2026-06-11`

## Backlog Summary

- Open Items: `7`
- Ready Items: `3`
- Blocked Items: `0`
- Manual Review Items: `1`

## Items

| ID | Title | Type | Priority | Status | Phase | Source | Acceptance Criteria |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BL-001 | Remove, scrub, or formally govern the tracked Power Automate Desktop source export | governance | high | ready | near-term | `portfolio-intake/power-automate/notes/poc-weekly-compliance.md` states the PAD source contains sensitive credential material; `git ls-files` shows `portfolio-intake/power-automate/exports/ExportPOCWeeklyCompliance_PAD.txt` is tracked. | Sensitive source export is removed from public-tracked history or replaced with a scrubbed artifact; any exposed credential material is rotated or confirmed invalid; `.gitignore` covers future raw PAD/source exports; PM bug `BUG-001` is closed with evidence. |
| BL-002 | Add route and asset smoke tests for the portfolio SPA | test | high | proposed | near-term | `package.json` has `lint` and `build` scripts only; `rg` found no test framework usage; routes are defined in `src/App.jsx`; case studies depend on static images in `public/images/`. | Automated smoke coverage verifies `/`, `/about`, `/projects`, all three case-study routes, `/resume`, `/contact`, and representative image/PDF assets; test command is documented in `README.md`; CI or local validation instructions are clear. |
| BL-003 | Update README to reflect current routes, case studies, scripts, and project structure | documentation | medium | ready | near-term | `README.md` lists only the Discharge Tracker case study while `src/App.jsx` routes also include SNF Policy System and Weekly Clinical Compliance. | README route list, features, and structure match current source; case-study pages and intake folder are documented at the right level; validation commands remain accurate. |
| BL-004 | Reconcile unused generic `ProjectDetail.jsx` with the current dedicated case-study routing model | technical-debt | low | proposed | near-term | `src/pages/ProjectDetail.jsx` exists and is tracked, but `src/App.jsx` routes directly to dedicated case-study components. | Either remove the unused component or wire it intentionally; no dead route assumptions remain; lint/build still pass. |
| BL-005 | Verify production deployment and direct SPA route refresh behavior on Vercel | release | medium | ready | near-term | `vercel.json` includes SPA rewrite; `README.md` states Vercel deployment; local build passed on 2026-06-11. | Live production URL loads; direct refresh works for `/projects/discharge-tracker`, `/projects/snf-policy-system`, `/projects/poc-weekly-compliance`, `/resume`, and `/contact`; representative static assets load; evidence is recorded in `codex-activity.md`. |
| BL-006 | Complete public content and media review for resume, contact, screenshots, and case-study claims | governance | medium | needs-manual-review | near-term | Public assets include `public/Resume_Trevis_Cleary.pdf`, contact links in `src/pages/Contact.jsx`, screenshots under `public/images/`, and portfolio-sensitive intake notes. | Owner confirms public-safe content; screenshots and case-study copy contain no private, resident, tenant, credential, or internal operational details; manual approval is recorded. |
| BL-007 | Document the repeatable intake-to-case-study promotion workflow | documentation | low | proposed | future | `portfolio-intake/power-automate/README.md` defines a review process; POC Weekly Compliance has already been promoted to `/projects/poc-weekly-compliance`. | A short workflow describes how raw intake artifacts become scrubbed public case studies, including where to store raw exports, notes, images, and final source changes. |

## Technical Follow-Ups

| ID | Title | Priority | Status | Source |
| --- | --- | --- | --- | --- |
| TF-001 | Keep `scripts/serve-dist.js` aligned with Vite preview or document why both preview paths exist. | low | proposed | `scripts/serve-dist.js`; `package.json` preview script |
| TF-002 | Review tracked Windows/system and media artifacts for intentional publication. | low | proposed | `public/desktop.ini`; `public/images/Screen Recording 2026-05-08 at 8.21.36 AM.mov.mp4`; `git ls-files public` |

## Deferred Items

| ID | Title | Reason | Revisit Trigger |
| --- | --- | --- | --- |
| DEF-001 | Create GitHub issues for local backlog items | Local Markdown is the current source of truth per Operations Library contract. | Revisit when the owner wants GitHub issue mirroring or milestones. |
