# piyush4u.github.io

A scroll-driven 3D story: a yellow Kolkata taxi drives through Piyush Pandey's career, from a mountain of invoices in 2016 to the bots on the night shift at a steel plant, and ends on a lit-up cantilever bridge at night.

Inspired by the storytelling format of Sébastien Lempens' award-winning portfolio. Every object (taxi, buildings, steel plant, bridge) is modelled in code with Three.js, so there are no 3D model files to download.

## Edit the content

- **Text**: `index.html`. Each `<section class="panel" data-stop="N">` is one chapter.
- **Billboards and crates**: the `PROJECTS` and `TOOLS` arrays at the top of `src/main.js`.
- **Camera angles, chapter positions and time of day**: the `STOPS` and `TOD` tables in `src/main.js`.

## Build

```bash
npm install
npm run build   # bundles src/ into assets/app.js
npm run dev     # local server with rebuild on save at http://localhost:8000
```

`assets/app.js` is committed so GitHub Pages can serve the site with no build step.
