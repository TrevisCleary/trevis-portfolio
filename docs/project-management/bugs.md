# Bugs

Project: `trevis-portfolio`
Last Updated: `2026-06-11`

## Summary

- Open Bugs: `0`
- In Validation Bugs: `1`
- Critical Bugs: `0`
- High Severity Bugs: `1`
- Blocked Bugs: `0`

## Open Bugs

| ID | Title | Severity | Priority | Status | Affected Workflow | Reproduction | Validation Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |

## In Validation

| ID | Title | Severity | Priority | Status | Affected Workflow | Validation Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-001 | Tracked Power Automate Desktop source export is documented as containing sensitive credential material | high | high | in-validation | Portfolio intake and release readiness | This change set deletes `portfolio-intake/power-automate/exports/ExportPOCWeeklyCompliance_PAD.txt` without opening its contents and expands `.gitignore` to ignore future raw exports. Final closure still requires commit evidence plus owner confirmation on credential rotation/invalidity and any repository history rewrite decision. |

## Closed Bugs

| ID | Title | Severity | Closed Date | Validation Evidence |
| --- | --- | --- | --- | --- |

## Deferred, Duplicate, Or Out Of Scope

| ID | Title | Disposition | Rationale |
| --- | --- | --- | --- |
