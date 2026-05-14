# Power Automate Portfolio Intake

Use this folder to collect Power Automate flows that may become portfolio case studies.

## Where To Put Exports

Place exported flow packages here:

```text
portfolio-intake/power-automate/exports/
```

Exported `.zip` files are ignored by Git because they may contain tenant-specific URLs, connection references, user IDs, site names, email addresses, or other private implementation details.

## Suggested Supporting Notes

For each flow, add a short Markdown note beside the export when possible:

```text
portfolio-intake/power-automate/notes/flow-name.md
```

Use this template:

```md
# Flow Name

## Business Problem

What manual process, compliance gap, reporting issue, or operational pain did this solve?

## Systems Involved

Power Automate, SharePoint, Outlook, Teams, Forms, Entra ID, Excel, Power Apps, HTTP endpoints, etc.

## Workflow Summary

1. Trigger
2. Main validation or branching logic
3. Data updates
4. Notifications
5. Logging/error handling

## My Role

Designed, built, tested, maintained, migrated, troubleshot, etc.

## Portfolio Angle

Why this is worth showing publicly.

## Sensitive Details To Scrub

Tenant names, user names, emails, patient/resident details, API URLs, secrets, site paths, or internal IDs.
```

## Review Process

1. Drop exported flow ZIPs into `exports/`.
2. I will extract them into `extracted/` for local analysis.
3. We will identify the strongest workflows for portfolio projects.
4. Public case studies should use scrubbed screenshots and plain-English workflow summaries rather than raw flow exports.
