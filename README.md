# Orbit Agent Lab

A static control-room interface for exploring LangGraph-style agent workflows.

## Run locally

Open `index.html` directly in a browser, or serve the folder with Python:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy with Vercel

This project is Vercel-ready as a static site. Import the repository in Vercel and use these settings:

- Framework preset: `Other`
- Build command: leave empty
- Output directory: `.`
- Install command: leave empty

Vercel will serve `index.html` from the project root.

## Deploy with GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` publishes the same static assets through GitHub Actions.

## Files

- `index.html` - page structure and content
- `style.css` - responsive layout and visual styling
- `script.js` - workflow interactions, activity updates, and theme toggle
- `vercel.json` - static Vercel deployment settings
