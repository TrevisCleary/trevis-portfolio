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
- Executive-style Home, About, Resume, Projects, and Contact pages
- Dedicated Discharge Tracker project case study
- Screenshot gallery with full-image viewer
- SEO page titles and metadata
- Mobile browser theme-color metadata
- Vercel SPA rewrite support for direct route access and refreshes

## Project Structure

```text
src/
  components/
    Navbar.jsx
  pages/
    About.jsx
    Contact.jsx
    Home.jsx
    Projects.jsx
    Resume.jsx
    projects/
      DischargeTracker.jsx
public/
  images/
    discharge-tracker/
    trevis-cleary.jpg
  favicon.ico
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

Run lint checks:

```bash
npm run lint
```

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
- `/projects/discharge-tracker`
- `/resume`
- `/contact`

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
