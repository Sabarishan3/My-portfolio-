# Sabarishan E N — personal site

A personal intro site built around a grabbable, stretchy WebGL portrait. React + Vite + Tailwind CSS. The expression set was cut from the supplied character sheet and registered to a single square bust framing, so the faces swap in place while the taffy spring does its thing.

## Run it

```bash
cd sab
npm install
npm run dev
```

Vite prints a local URL (usually http://localhost:5173/).

## Build / deploy

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

Deploy `dist/` to any static host:

- **Vercel** — import the repo, framework preset **Vite**, build `npm run build`, output `dist`.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — `npm run build`, then publish `dist/` (set Vite's `base` if it is served from a subpath).

## Where things live

| Path | What it is |
| --- | --- |
| `src/content.ts` | All resume content, the face map, release faces, and the face rig landmarks. |
| `src/App.tsx` | Header, hero, selected work, CV, footer. |
| `src/face/FaceCanvas.tsx` | Pointer handling, expression director, grab/tap logic. |
| `src/face/engine.ts` | WebGL taffy renderer. |
| `src/index.css` | Theme tokens, type scale, marker/highlighter, grab ring. |
| `public/faces/` | Eleven registered expression cut-outs (`base`, looks, reactions). |
| `index.html` | Title, description, OG text, favicon, font loading. |

## Interaction

- Drag the face to stretch it. Release to see how it feels about it; patience drains as you pull.
- Move the cursor around the hero — the eyes follow, and hovering the nose crosses them.
- Tap the face for a startled reaction.
- The theme toggle persists in localStorage (`sab-theme`).

## Content / design source

- Resume details: Sabarishan E N (frontend, data science, AI-assisted workflow).
- Portrait/expression art: cut from `sab character sheet.png` supplied with the project.
- Interaction and page scaffolding: adapted from the sibling Otis project.
