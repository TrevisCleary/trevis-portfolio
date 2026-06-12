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

The site is deployed on Vercel. The `vercel.json` file includes an SPA fallback rewrite for extensionless client routes while allowing static assets such as `/favicon.ico`, `/images/...`, and `/assets/...` to serve normally.

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
