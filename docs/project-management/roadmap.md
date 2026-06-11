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
| RM-002 | Close public-release governance gaps before broader distribution | ready | Next release-readiness pass | BUG-001, BL-001, BL-006 | `portfolio-intake/power-automate/README.md`; `portfolio-intake/power-automate/notes/poc-weekly-compliance.md`; tracked `portfolio-intake/power-automate/exports/ExportPOCWeeklyCompliance_PAD.txt` |
| RM-003 | Establish route and asset regression confidence | proposed | Next QA sprint | BL-002, BL-005 | `package.json`; `src/App.jsx`; `public/images/`; validation run `npm.cmd run lint`; validation run `npm.cmd run build`; `npm.cmd test --if-present` found no configured test script |
| RM-004 | Align documentation and source structure with current app scope | proposed | Next maintenance pass | BL-003, BL-004 | `README.md`; `src/App.jsx`; `src/pages/ProjectDetail.jsx`; `src/pages/Projects.jsx` |

## Future Phase

| ID | Title | Status | Target | Dependencies | Source |
| --- | --- | --- | --- | --- | --- |
| RM-005 | Expand portfolio case studies through a repeatable intake-to-publication workflow | proposed | Future portfolio updates | BL-007 | `portfolio-intake/power-automate/README.md`; `portfolio-intake/power-automate/notes/poc-weekly-compliance.md`; existing case-study page pattern under `src/pages/projects/` |

## Deferred Opportunities

- Add GitHub issue mirrors for backlog and bug items after the local Markdown project-management package is stable.
- Add an Epic register if RidgePath Forge or the Operations Library workflow begins requiring project-level Epic source files for this portfolio.

## Risks

- `BUG-001` is release-blocking until the tracked Power Automate Desktop source export is removed, scrubbed, or otherwise governed.
- Release readiness is not complete until the live Vercel deployment is verified after these project-management updates.
- Automated behavior coverage is missing; lint and build passing do not prove route-level behavior, modal behavior, asset availability, or responsive rendering.
