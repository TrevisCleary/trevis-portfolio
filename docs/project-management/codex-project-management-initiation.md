# Codex Project Management Initiation

Repository: `C:\Development\Projects\trevis-portfolio`
Project: `trevis-portfolio`
Operations Library: `C:\Development\Shared\codex-operations-library`

Use the Codex Operations Library as the source of truth. RidgePath Forge initialized starter files only; Codex owns repository analysis and population.

## Objective

Review this repository and populate the Project Management package under `docs/project-management/`.

## Required Work

1. Review the repository structure, package metadata, README files, source code, tests, scripts, and existing documentation.
2. Populate `docs/project-management/roadmap.md` with roadmap items grounded in repository evidence.
3. Populate `docs/project-management/backlog.md` with actionable backlog items, priorities, statuses, source notes, and acceptance criteria.
4. Populate `docs/project-management/sprint-current.md` if current sprint scope can be inferred; otherwise mark it `Needs manual review`.
5. Populate `docs/project-management/bugs.md` with known or discovered defects; do not invent defects without evidence.
6. Populate `docs/project-management/lifecycle-status.md` by determining the current lifecycle phase and governance gates.
7. Populate `docs/project-management/codex-activity.md` with this initialization activity and validation evidence.
8. Update `docs/project-management/project-dashboard.json` after Markdown updates so the RidgePath Forge dashboard reflects current state.

## Governance Requirements

- Determine lifecycle phase from repository evidence.
- Populate governance status for security, data, testing, and release readiness.
- Use `Needs manual review` for unknown, stale, conflicting, or incomplete information.
- Keep Markdown files as the source of truth and `project-dashboard.json` as the RidgePath Forge read model.

## Validation

- Verify all Project Management files exist.
- Verify `project-dashboard.json` is valid JSON and follows the Operations Library dashboard schema.
- Verify dashboard `metadata.sourceFiles` references the Markdown source files.
- Verify the RidgePath Forge dashboard loads without manual restart.
