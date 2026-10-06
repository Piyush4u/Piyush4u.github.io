# piyush4u.github.io

A scroll-driven 3D story: a yellow Kolkata taxi drives through Piyush Pandey's career, from a mountain of invoices in 2016 to the bots on the night shift at a steel plant, and ends on a lit-up cantilever bridge at night.

Inspired by the storytelling format of Sébastien Lempens' award-winning portfolio. Every object (taxi, buildings, steel plant, bridge) is modelled in code with Three.js, so there are no 3D model files to download.

How it gets its realism:
- **Lighting:** four real HDRI skies from Poly Haven (CC0, via the `@pmndrs/assets` npm package) are cross-faded with the time of day and used for reflections and ambient light.
- **Materials:** physically based texture sets (colour, normal, AO/roughness/metal) for plaster, asphalt, pavers, rusted corrugated metal, painted steel, concrete, bark, foliage and wood. `tools/gen_textures.py` synthesises them from noise, so they're reproducible and licence-free.
- **Detail:** 3D window frames with reflective glass, louvred shutters, balconies with laundry, AC units, shop signs, a taxi with a full cabin and driver, leaf-card trees, and a river with real-time reflections.
- **Post-processing:** ambient occlusion (GTAO), 4× MSAA, bloom, filmic tone mapping, lens vignette, grain and subtle chromatic aberration. On slower GPUs the site automatically drops resolution, AO, then bloom.

## Edit the content

- **Text**: `index.html`. Each `<section class="panel" data-stop="N">` is one chapter.
- **Billboards and crates**: the `PROJECTS` and `TOOLS` arrays at the top of `src/main.js`.
- **Camera angles, chapter positions and time of day**: the `STOPS` and `TOD` tables in `src/main.js`.

## Regenerate textures

```bash
python3 tools/gen_textures.py            # all sets, written to assets/tex/
python3 tools/gen_textures.py asphalt    # just one
```

## Build

```bash
npm install
npm run build   # bundles src/ into assets/app.js
npm run dev     # local server with rebuild on save at http://localhost:8000
```

`assets/app.js` is committed so GitHub Pages can serve the site with no build step.
