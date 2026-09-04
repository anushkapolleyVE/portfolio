# Anushka Polley — Portfolio (React + Vite)

## Run it locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Adding your real deployed links

Open `src/data/projects.js`. Each project object has a `liveUrl` field with a
placeholder marked `// TODO: replace with real deployed URL`. Swap those four
placeholders for your actual Vercel deployment URLs.

Once set:
- Clicking anywhere on a project's visual, or its **View live** link, opens
  that project's `liveUrl` in a new tab.
- **Read the case study** opens the in-page detail modal instead — it no
  longer navigates away.

## Structure

```
src/
  App.jsx          — page layout and components
  App.css          — design system (paper/ink spec-sheet theme)
  data/projects.js — project content + live URLs, edit this file
  main.jsx         — React entry point
```
