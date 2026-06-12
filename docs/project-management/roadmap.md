# Roadmap

Project: `trevis-portfolio`
Owner: `Trevis Cleary / Codex-assisted`
Last Updated: `2026-06-11`

## MVP Phase

| ID | Title | Status | Target | Dependencies | Source |
| --- | --- | --- | --- | --- | --- |
| RM-001 | Maintain public portfolio SPA and case-study experience | in-progress | Current portfolio release | BL-002, BL-005, BUG-001 | `README.md`; `src/App.jsx`; `src/pages/Home.jsx`; `src/pages/Projects.jsx`; `src/pages/projects/DischargeTracker.jsx`; `src/pages/projects/SNFPolicySystem.jsx`; `src/pages/projects/POCWeeklyCompliance.jsx`; `vercel.json` |

## Near-Term Phase

| ID | Title | Status | Target | Dependencies | Source |
| --- | --- | --- | --- | --- | --- |
| RM-002 | Close public-release governance gaps before broader distribution | in-validation | Next release-readiness pass | BUG-001, BL-001, BL-006 | `portfolio-intake/power-automate/README.md`; `.gitignore`; deleted raw PAD export pending commit; owner content/security review remains |
| RM-003 | Establish route and asset regression confidence | in-progress | Next QA sprint | BL-002, BL-005 | `package.json`; `scripts/smoke-test.js`; `src/App.jsx`; `public/images/`; `npm.cmd test`; protected Vercel route checks |
| RM-004 | Align documentation and source structure with current app scope | done | Next maintenance pass | BL-003, BL-004 | `README.md`; `src/App.jsx`; removed unused `src/pages/ProjectDetail.jsx`; `src/pages/Projects.jsx` |

## Future Phase

| ID | Title | Status | Target | Dependencies | Source |
| --- | --- | --- | --- | --- | --- |
| RM-005 | Expand portfolio case studies through a repeatable intake-to-publication workflow | in-progress | Future portfolio updates | BL-007 | `docs/project-management/intake-to-case-study-workflow.md`; `portfolio-intake/power-automate/README.md`; existing case-study page pattern under `src/pages/projects/` |

## Deferred Opportunities

- Add GitHub issue mirrors for backlog and bug items after the local Markdown project-management package is stable.
- Add an Epic register if RidgePath Forge or the Operations Library workflow begins requiring project-level Epic source files for this portfolio.

## Risks

- `BUG-001` remains in validation until the current deletion is committed and owner credential/history decisions are recorded.
- Release readiness is not public-complete while Vercel Deployment Protection blocks unauthenticated access.
- Browser-level visual coverage remains manual; smoke tests now cover route fallback and representative asset availability.
