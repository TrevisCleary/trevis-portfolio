# Bugs

Project: `trevis-portfolio`
Last Updated: `2026-06-11`

## Summary

- Open Bugs: `1`
- Critical Bugs: `0`
- High Severity Bugs: `1`
- Blocked Bugs: `0`

## Open Bugs

| ID | Title | Severity | Priority | Status | Affected Workflow | Reproduction | Validation Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BUG-001 | Tracked Power Automate Desktop source export is documented as containing sensitive credential material | high | high | reported | Portfolio intake and release readiness | Reproduced by repository evidence without exposing contents: `portfolio-intake/power-automate/notes/poc-weekly-compliance.md` states the PAD source contains sensitive credential material, and `git ls-files` confirms `portfolio-intake/power-automate/exports/ExportPOCWeeklyCompliance_PAD.txt` is tracked. | PM initialization review on 2026-06-11; remediation required through `BL-001`. |

## In Validation

| ID | Title | Severity | Priority | Status | Affected Workflow | Validation Evidence |
| --- | --- | --- | --- | --- | --- | --- |

## Closed Bugs

| ID | Title | Severity | Closed Date | Validation Evidence |
| --- | --- | --- | --- | --- |

## Deferred, Duplicate, Or Out Of Scope

| ID | Title | Disposition | Rationale |
| --- | --- | --- | --- |
