# Intake To Case Study Workflow

Project: `trevis-portfolio`
Last Updated: `2026-10-16`

## Purpose

Use this workflow when a raw automation, app, or internal project artifact may become a public portfolio project or case-study page.

## Workflow

1. Capture raw source material in the appropriate `portfolio-intake/` subfolder.
2. Keep raw exports, extracted packages, local screenshots, credentials, and tenant-specific source files out of Git unless they have been scrubbed and approved for publication.
3. Add or update a Markdown note that summarizes the business problem, systems involved, workflow shape, owner role, portfolio angle, and sensitive details to scrub.
4. Create draft portfolio content in `src/data/projectIdeas.json` with `publish: false`.
5. Review draft copy, screenshots, and claims against the publication checklist before making anything public.
6. Promote only public-safe media into `public/images/<case-study>/` and reference those assets from source.
7. Add a reviewed entry to `src/data/projectCaseStudies.js` when the project is ready for a permanent `/projects/:slug` route through the shared case-study layout.
8. Set `publish: true` only after owner review confirms the content is public-safe.
9. Run `npm.cmd run lint`, `npm.cmd test`, and any deployment validation required for the release.

## Public-Safe Review Checklist

- No credentials, connection strings, tokens, API keys, or password material.
- No tenant names, private hostnames, private URLs, site paths, or internal identifiers.
- No resident, patient, employee, customer, or facility-specific private data.
- No screenshots showing private records, emails, user accounts, or operational dashboards that have not been scrubbed.
- Claims are accurate, supportable, and phrased at the right level for a public portfolio.

## Storage Map

| Material | Location | Git Policy |
| --- | --- | --- |
| Raw Power Automate exports | `portfolio-intake/power-automate/exports/` | Ignored; do not commit raw exports. |
| Intake notes | `portfolio-intake/power-automate/notes/` | Commit only scrubbed Markdown notes. |
| Local generated screenshots | `public/portfolio-drafts/` | Ignored; review before promotion. |
| Public case-study images | `public/images/<case-study>/` | Commit only approved public-safe media. |
| Draft project records | `src/data/projectIdeas.json` | Commit with `publish: false` until approved. |
| Permanent case-study content | `src/data/projectCaseStudies.js` | Commit after source and media review. |
