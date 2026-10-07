# piyush4u.github.io

A scroll-driven 3D story: a 1967 Camaro drives through Kolkata, past Piyush Pandey's career, from a mountain of invoices in 2016 to the bots on the night shift at a steel plant, and ends on a lit-up cantilever bridge at night.

Inspired by the storytelling format of Sébastien Lempens' award-winning portfolio. The story landmarks, bridge and parked Ambassador taxis are modelled in code with Three.js. The street-front buildings, side streets, lamps, signals, signs, bus shelters and wind-animated trees come from CC BY 4.0 Sketchfab assets (see Credits), split into individual prefabs and instanced along the route.

How it gets its realism:
- **Lighting:** four real HDRI skies from Poly Haven (CC0, via the `@pmndrs/assets` npm package) are cross-faded with the time of day and used for reflections and ambient light.
- **Materials:** physically based texture sets (colour, normal, AO/roughness/metal) for plaster, asphalt, pavers, rusted corrugated metal, painted steel, concrete, bark, foliage and wood. `tools/gen_textures.py` synthesises them from noise, so they're reproducible and licence-free.
- **Detail:** 3D window frames with reflective glass, louvred shutters, balconies with laundry, AC units, shop signs, a taxi with a full cabin and driver, leaf-card trees, and a river with real-time reflections.
- **Post-processing:** ambient occlusion (GTAO), 4× MSAA, bloom, filmic tone mapping, lens vignette, grain and subtle chromatic aberration. On slower GPUs the site automatically drops resolution, AO, then bloom.

## Credits

- Hero car: [“1967 Chevrolet Camaro SS 350 Coupe”](https://sketchfab.com/3d-models/1967-chevrolet-camaro-ss-350-coupe-37ecedd9b5284cbfae74956eea2ad3fd) by [Ddiaz Design](https://sketchfab.com/ddiaz-design), licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Changes: re-compressed with gltf-transform (meshopt geometry, 1024px WebP textures). `assets/models/camaro.glb` is shared under the same licence. Non-commercial use only.
- Buildings: [“Buildings”](https://sketchfab.com/3d-models/buildings-53fdd165f327434e9a88873253f710a5) by [Elbolillo](https://sketchfab.com/Elbolilloduro) and [“Building”](https://sketchfab.com/3d-models/building-961d85bf1b894bf38f6c343e67a0ec24) by [mortalityrexotable](https://sketchfab.com/mortalityrexotable), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- Street pieces, lamps, signals, signs and bus shelter: [“Road Modular”](https://sketchfab.com/3d-models/road-modular-74f74f8569ac410f80266d3f1603bffd) by [mortalityrexotable](https://sketchfab.com/mortalityrexotable), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- Trees: [“Tree Animate”](https://sketchfab.com/3d-models/tree-animate-f0f9eb5e6c104bbb8e1f41c97019e6f2) by [RandyGF](https://sketchfab.com/RandyGF), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- Changes to all four: re-compressed with gltf-transform (meshopt geometry, WebP textures; the tree's spec-gloss materials converted to metal-rough). At runtime each file is split into individual prefabs (single buildings, road pieces, props, three separate trees), the bus-shelter poster is replaced, and night-window glow masks are derived from the facade photos.
- Skies: Poly Haven HDRIs (CC0), via `@pmndrs/assets`.

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
