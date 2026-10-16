# Trevis Cleary Portfolio

Personal portfolio website for Trevis Cleary, focused on healthcare technology leadership, automation engineering, analytics, infrastructure modernization, and enterprise systems work.

The site is built as a modern React single-page application with a dark executive visual style, responsive layouts, animated interactions, project case studies, and SEO metadata.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- React Helmet Async
- Lucide React
- React Icons
- Vercel

## Features

- Responsive portfolio layout for desktop and mobile
- Executive-style Home, About, Resume, Projects, Blog, and Contact pages
- Dedicated case studies for Discharge Tracker, SNF Policy System, and Weekly Clinical Compliance Reporting Automation
- Local-only draft project and blog review pages for generated portfolio intake
- Screenshot gallery with full-image viewer
- SEO page titles and metadata
- Mobile browser theme-color metadata
- Vercel SPA rewrite support for direct route access and refreshes

## Project Structure

```text
src/
  components/
    LocalPublishButton.jsx
    Navbar.jsx
  data/
    blogPosts.json
    featuredProjects.js
    projectIdeas.json
  pages/
    About.jsx
    Blog.jsx
    BlogPost.jsx
    Contact.jsx
    Home.jsx
    ProjectIdeaDetail.jsx
    Projects.jsx
    Resume.jsx
    projects/
      DischargeTracker.jsx
      POCWeeklyCompliance.jsx
      SNFPolicySystem.jsx
scripts/
  content-server.js
  serve-dist.js
  smoke-test.js
  start-content-workspace.js
public/
  images/
    discharge-tracker/
    poc-weekly-compliance/
    snf-policy-system/
    trevis-cleary.jpg
  favicon.ico
portfolio-intake/
  power-automate/
    notes/
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Start the local authoring workspace for draft publish/unpublish controls:

```bash
npm run dev:content
```

Run lint checks:

```bash
npm run lint
```

Run the production smoke suite:

```bash
npm test
```

`npm test` builds the Vite app, starts a temporary local static server against `dist`, verifies the primary SPA routes, and verifies representative image/PDF assets return their expected content types.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Routing

This is a React Router SPA. Key routes include:

- `/`
- `/about`
- `/projects`
- `/projects/ideas/:slug` for local generated project drafts and reviewed published ideas
- `/projects/discharge-tracker`
- `/projects/snf-policy-system`
- `/projects/poc-weekly-compliance`
- `/blog`
- `/blog/:slug`
- `/resume`
- `/contact`

Draft project ideas and blog posts are hidden in production unless their JSON records have `publish: true`. Local publish controls render only during Vite development and call the local content API started by `npm run dev:content`.

## Deployment

Cloudflare hosting is prepared on Workers with Static Assets, in the RidgePath
Technologies account. The Cloudflare deployment has passed route and asset
checks. **The live domains remain on Vercel until the conflicting DNS records
are removed and the custom-domain deployment succeeds.** `wrangler.jsonc`
configures the `trevis-portfolio` Worker, the `dist` asset directory, and both
intended production domains:

- https://treviscleary.com
- https://www.treviscleary.com
- Cloudflare deployment URL: https://trevis-portfolio.ridgepath-technologies.workers.dev

Deploy from an authenticated Cloudflare CLI session:

```bash
npm ci
npm test
npm run lint
npm run deploy:cloudflare
SMOKE_BASE_URL=https://www.treviscleary.com npm run test:smoke
```

`worker/index.js` preserves the previous extensionless SPA fallback. Existing
assets are served directly by Cloudflare; missing asset files return HTTP 404.
The local content editing API remains development-only.

For automatic Git deployment, connect `TrevisCleary/trevis-portfolio` in the
Worker's **Settings → Builds**, using production branch `main`, build command
`npm run build`, and deploy command `npx wrangler deploy` (Node.js 24).
The initial migration used Wrangler; the Git build connection requires separate
account access and must be verified before relying on automatic deployments.

The previous Vercel project and `vercel.json` are retained for rollback. Before
switching back, verify the intended release on Vercel, remove the Cloudflare
custom domains, and restore the previous DNS targets (`treviscleary.com` A
`76.76.21.21`; `www.treviscleary.com` CNAME
`6184994a62a83660.vercel-dns-017.com`, DNS-only). Remove the custom-domain routes
from `wrangler.jsonc` as part of rollback so a later deploy does not reclaim them.

The retained Vercel rewrite is:

```json
{
  "rewrites": [
    {
      "source": "/((?!.*\\..*).*)",
      "destination": "/index.html"
    }
  ]
}
```

## Notes

Static assets are stored in `public/` and referenced with root-relative paths, such as:

```jsx
src="/images/trevis-cleary.jpg"
```

Favicons can be aggressively cached by browsers. After deployment, test `/favicon.ico` directly or use an incognito window if the browser does not immediately show the updated icon.
