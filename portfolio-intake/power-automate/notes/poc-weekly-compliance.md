# POC Weekly Compliance

## Export

`exports/ExportPOCWeeklyCompliance_20260514180109.zip`

Desktop flow source:

`exports/ExportPOCWeeklyCompliance_PAD.txt`

## Initial Read

This flow is a weekly scheduled compliance distribution workflow.

## Systems Involved

- Power Automate cloud flow
- Power Automate Desktop flow
- Office 365 Outlook
- OneDrive for Business
- Email distribution groups by state

## Workflow Summary

1. Runs every Wednesday.
2. Initializes testing mode and BCC variables.
3. Runs an attended desktop flow that launches Firefox and signs into a clinical reporting portal.
4. Runs the POC documentation compliance report for two reporting databases.
5. Uses a seven-day reporting period with an ending date based on the run date minus three days.
6. Downloads Excel report output and renames each file by source database.
7. Opens the Excel output, reads all cells, and derives the report date range.
8. Builds state-specific HTML table rows for Tennessee, Indiana, and Illinois.
9. Flags daily and grand-total compliance values under the 95 percent target.
10. Retrieves a POC documentation worksheet PDF from OneDrive.
11. Builds introduction and recommendations HTML content.
12. Sends state-specific compliance emails for Tennessee, Indiana, and Illinois.
13. Sends a high-importance failure notification if the Illinois email path fails, is skipped, or times out.
14. Terminates the flow as failed after sending the failure notification.

## Desktop Flow Findings

- Uses Power Automate Desktop web automation against Firefox.
- Uses local OneDrive-synced folders for downloads and generated email body text files.
- Reads `poc_documentation_compliance_report_<database>.xls` files from the automation download folder.
- Builds `Email Body - Illinois.txt`, `Email Body - Indiana.txt`, and `Email Body - Tennessee.txt` for return to the cloud flow.
- Uses a 95 percent threshold for daily values and grand-total compliance.
- Includes disabled or legacy logic for SharePoint Facility Master lookup and local CSV caching.
- Includes retry handling around browser launch, facility selection, and login state.
- Contains sensitive credential material in the PAD source and should not be published directly.

## Portfolio Angle

This is a good example of operational reporting automation because it combines a scheduled trigger, desktop automation, generated report content, state-specific distribution, reusable email content blocks, and failure alerting.

## Potential Case Study Framing

Possible title:

**Weekly Clinical Compliance Reporting Automation**

Possible short description:

Automated weekly POC compliance reporting by running a desktop reporting process, composing state-specific emails, attaching/supporting documentation from OneDrive, and routing failure alerts for intervention.

## Portfolio Entry

Added as:

`/projects/poc-weekly-compliance`

Public framing uses generalized terms for the clinical reporting portal, state distributions, and operational recipients. Internal email addresses, hostnames, tenant IDs, flow IDs, paths, and credentials are intentionally omitted.

## Sensitive Details To Scrub

- Internal email addresses and distribution groups
- Desktop flow machine/host names
- Tenant IDs, subscription IDs, connection names, and flow IDs
- OneDrive folder paths
- Hard-coded credentials from the PAD source
- Reporting database names if they are considered internal identifiers
- Any compliance output containing facility-level or resident-level information

## Follow-Up Questions

- What did the desktop flow do before handing data back to Power Automate?
- How long did this take manually before automation?
- Who consumed the weekly state emails?
- Did this reduce missed compliance follow-up or standardize reporting?
- Is there a screenshot of the final email output with sensitive details scrubbed?
