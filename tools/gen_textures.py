"""Bakes the tileable PBR texture sets used by the site into assets/tex/.

Run:  python3 tools/gen_textures.py
Every texture is synthesised from noise (no photos are downloaded), so the
output is reproducible and free of licensing questions.

Per material we write:
  <name>_col.jpg   albedo (sRGB)
  <name>_nor.jpg   OpenGL tangent-space normal map
  <name>_orm.jpg   R = ambient occlusion, G = roughness, B = metalness
"""
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

OUT = os.path.join(os.path.dirname(__file__), '..', 'assets', 'tex')
os.makedirs(OUT, exist_ok=True)


# ----------------------------------------------------------------- noise kit
def fbm(n, beta=2.0, seed=0, kmin=0.0, kmax=1.0, ax=1.0, ay=1.0):
    """Tileable fractal noise by spectral synthesis, normalised to 0..1."""
    rng = np.random.default_rng(seed)
    white = rng.standard_normal((n, n))
    fy = np.fft.fftfreq(n)[:, None] * ay
    fx = np.fft.fftfreq(n)[None, :] * ax
    k = np.sqrt(fx * fx + fy * fy) * 2
    k[0, 0] = 1
    amp = k ** (-beta / 2)
    amp[(k < kmin) | (k > kmax)] = 0
    amp[0, 0] = 0
    out = np.fft.ifft2(np.fft.fft2(white) * amp).real
    return norm(out)


def norm(a):
    a = a - a.min()
    m = a.max()
    return a / m if m > 0 else a


def voronoi(n, count, seed=0, jitter=1.0, grid=False):
    """Tileable F1/F2 distances and cell id (in units of the tile)."""
    rng = np.random.default_rng(seed)
    if grid:
        # jittered grid: only the 3x3 neighbouring cells can hold the nearest points
        g = int(round(np.sqrt(count)))
        jit = 0.5 + (rng.random((g, g, 2)) - 0.5) * jitter
        ys, xs = np.mgrid[0:n, 0:n] / n * g
        cx, cy = np.floor(xs).astype(int), np.floor(ys).astype(int)
        f1 = np.full((n, n), 9.0)
        f2 = np.full((n, n), 9.0)
        cid = np.zeros((n, n), np.int32)
        for oy in (-1, 0, 1):
            for ox in (-1, 0, 1):
                nx, ny = cx + ox, cy + oy
                j = jit[ny % g, nx % g]
                d = np.sqrt((nx + j[..., 0] - xs) ** 2 + (ny + j[..., 1] - ys) ** 2) / g
                ids = (ny % g) * g + (nx % g)
                closer = d < f1
                f2 = np.where(closer, f1, np.minimum(f2, d))
                cid = np.where(closer, ids, cid)
                f1 = np.where(closer, d, f1)
        return f1, f2, cid
    if False:
        g = int(round(np.sqrt(count)))
        gy, gx = np.mgrid[0:g, 0:g]
        pts = (np.stack([gx.ravel(), gy.ravel()], 1) + 0.5 + (rng.random((g * g, 2)) - 0.5) * jitter) / g
    else:
        pts = rng.random((count, 2))
    ys, xs = np.mgrid[0:n, 0:n] / n
    f1 = np.full((n, n), 9.0)
    f2 = np.full((n, n), 9.0)
    cid = np.zeros((n, n), np.int32)
    for i, (px, py) in enumerate(pts):
        dx = np.abs(xs - px)
        dx = np.minimum(dx, 1 - dx)
        dy = np.abs(ys - py)
        dy = np.minimum(dy, 1 - dy)
        d = np.sqrt(dx * dx + dy * dy)
        closer = d < f1
        f2 = np.where(closer, f1, np.minimum(f2, d))
        cid = np.where(closer, i, cid)
        f1 = np.where(closer, d, f1)
    return f1, f2, cid


def box_blur(a, r, axis=None):
    """Wrapping separable box blur (repeated thrice ~ gaussian)."""
    out = a.copy()
    axes = (0, 1) if axis is None else (axis,)
    for _ in range(3):
        for ax in axes:
            acc = np.zeros_like(out)
            for s in range(-r, r + 1):
                acc += np.roll(out, s, axis=ax)
            out = acc / (2 * r + 1)
    return out


def normal_from_height(h, strength):
    dx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * strength
    dy = (np.roll(h, -1, 0) - np.roll(h, 1, 0)) * strength
    nz = np.ones_like(h)
    l = np.sqrt(dx * dx + dy * dy + nz * nz)
    # OpenGL convention: +Y up in texture space (rows go down, so flip dy)
    return np.stack([-dx / l, dy / l, nz / l], -1) * 0.5 + 0.5


def ao_from_height(h, r=6, k=2.5):
    return np.clip(1 - (box_blur(h, r) - h) * k, 0, 1)


def save(name, arr, q=88):
    arr = np.nan_to_num(np.clip(arr, 0, 1))
    if arr.ndim == 2:
        img = Image.fromarray((arr * 255).astype(np.uint8), 'L')
    else:
        img = Image.fromarray((arr * 255).astype(np.uint8), 'RGB' if arr.shape[2] == 3 else 'RGBA')
    name = name.rsplit('.', 1)[0] + '.webp'
    img.save(os.path.join(OUT, name), 'WEBP', quality=q, method=6)
    print('wrote', name, img.size)


def half(a):
    return (a[0::2, 0::2] + a[1::2, 0::2] + a[0::2, 1::2] + a[1::2, 1::2]) / 4


def write_set(name, col, height, strength, rough, metal=None, ao=None, q=86):
    save(f'{name}_col.jpg', col, q)
    nor = normal_from_height(height, strength)
    if nor.shape[0] > 1024:
        nor = half(nor)
        rough, height = half(rough), half(height)
        if metal is not None:
            metal = half(metal)
    save(f'{name}_nor.jpg', nor, 82)
    if ao is None:
        ao = ao_from_height(height)
    if metal is None:
        metal = np.zeros_like(rough)
    save(f'{name}_orm.jpg', np.stack([ao, rough, metal], -1), 88)


def lerp(a, b, t):
    t = t[..., None] if np.ndim(t) == 2 and np.ndim(a) == 3 else t
    return a + (b - a) * t


def rgb(hexstr):
    h = hexstr.lstrip('#')
    return np.array([int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)])


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


# ----------------------------------------------------------------- materials
def plaster(n=1024):
    """Old lime-plastered wall, 3 m tile. Albedo is near-neutral; buildings tint it."""
    grain = fbm(n, 1.2, 1, kmin=0.05)
    mottle = fbm(n, 3.2, 2)
    stains = smoothstep(0.55, 0.85, fbm(n, 3.0, 3))
    streak = fbm(n, 2.2, 4, ax=0.35, ay=6.0)  # long vertical runs
    streaks = smoothstep(0.62, 0.9, streak) * smoothstep(0.3, 0.7, fbm(n, 2.6, 5))
    peel_n = fbm(n, 2.8, 6) * 0.75 + fbm(n, 1.4, 7, kmin=0.02) * 0.25
    peel = smoothstep(0.75, 0.77, peel_n)
    f1, f2, _ = voronoi(n, 70, 8)
    crack = (1 - smoothstep(0.0, 0.0025, f2 - f1)) * smoothstep(0.6, 0.75, fbm(n, 2.4, 9))

    base = rgb('#ece6da')
    col = np.ones((n, n, 3)) * base
    col = col * (0.9 + 0.12 * mottle[..., None]) * (0.96 + 0.06 * grain[..., None])
    damp = rgb('#8d8a78')
    col = lerp(col, col * damp * 1.2, (stains * 0.28)[..., None])
    col = lerp(col, col * rgb('#5b5548') * 1.4, (streaks * 0.3)[..., None])
    brick = rgb('#9a6a52') * (0.8 + 0.3 * fbm(n, 1.0, 10)[..., None])
    under = lerp(np.ones((n, n, 3)) * rgb('#b9b2a4'), brick, smoothstep(0.5, 0.8, fbm(n, 2.5, 11))[..., None])
    col = lerp(col, under, peel[..., None])
    col = col * (1 - crack[..., None] * 0.6)

    height = grain * 0.25 + mottle * 0.25 - peel * 0.35 - crack * 0.5
    rough = 0.82 + 0.1 * grain - stains * 0.12 + peel * 0.05
    write_set('plaster', col, height, 7.0, rough)


def asphalt(n=2048):
    """9 m x 9 m of worn Kolkata road with markings baked in (u: across, v: along)."""
    # chip-seal aggregate: every voronoi cell is a stone, tar shows at the edges
    f1, f2, cid = voronoi(n, (n // 3) ** 2, 21, grid=True)
    rng = np.random.default_rng(22)
    edge = smoothstep(0.0, 0.0011, f2 - f1)
    tone_c = rng.random(cid.max() + 1)
    stone_tone = tone_c[cid]
    stones = edge * smoothstep(0.25, 0.6, stone_tone + 0.2 * rng.random())
    fine = fbm(n, 0.6, 23, kmin=0.08)
    mid = fbm(n, 2.6, 24)
    big = fbm(n, 3.4, 25)
    worn = smoothstep(0.3, 0.75, fbm(n, 2.2, 30))  # where traffic has polished the binder off

    tar = rgb('#2a2a2b')
    col = np.ones((n, n, 3)) * tar * (0.85 + 0.3 * fine[..., None]) * (0.92 + 0.16 * mid[..., None])
    stone_col = lerp(np.ones((n, n, 3)) * rgb('#55524e'), np.ones((n, n, 3)) * rgb('#8f8a82'), stone_tone)
    col = lerp(col, stone_col, (stones * (0.35 + 0.5 * worn))[..., None])

    # repair patches (newer, darker asphalt rectangles)
    patch = np.zeros((n, n))
    for i in range(4):
        x0, y0 = rng.integers(0, n, 2)
        w, h = rng.integers(n // 14, n // 5, 2)
        ys = (np.arange(n)[:, None] - y0) % n
        xs = (np.arange(n)[None, :] - x0) % n
        patch = np.maximum(patch, ((xs < w) & (ys < h)).astype(float))
    patch = box_blur(patch, 1)
    seam = np.clip(box_blur(patch, 3) - box_blur(patch, 1), 0, 1) * 6
    col = lerp(col, col * 0.8, (patch * 0.9)[..., None]) * (1 - np.clip(seam, 0, 1)[..., None] * 0.4)

    # cracks
    c1, c2, _ = voronoi(n, 40, 26)
    cr = (1 - smoothstep(0.0, 0.0018, c2 - c1)) * smoothstep(0.55, 0.7, fbm(n, 2.2, 27)) * (1 - patch)
    col = col * (1 - cr[..., None] * 0.75)

    # tyre polish lanes & oil drips in the middle of each lane
    u = np.arange(n)[None, :] / n
    lanes = np.exp(-((u - 0.28) / 0.07) ** 2) + np.exp(-((u - 0.72) / 0.07) ** 2)
    lanes = np.repeat(lanes, n, 0)
    col = col * (1 - 0.18 * lanes[..., None])
    oil_core = np.exp(-((u - 0.25) / 0.03) ** 2) + np.exp(-((u - 0.75) / 0.03) ** 2)
    oil = smoothstep(0.6, 0.8, fbm(n, 2.8, 28, ay=1.0, ax=1.0)) * np.repeat(oil_core, n, 0)
    col = col * (1 - 0.35 * oil[..., None])

    # puddles near the gutters (wet = dark & glossy)
    gutter = np.repeat(np.exp(-((u - 0.02) / 0.06) ** 2) + np.exp(-((u - 0.98) / 0.06) ** 2), n, 0)
    puddle = smoothstep(0.62, 0.7, big * 0.75 + gutter * 0.35)
    col = lerp(col, col * 0.7, (puddle * 0.7)[..., None])

    # markings: edge lines + yellow centre dashes, worn
    paint = np.zeros((n, n))
    ycol = np.zeros((n, n))
    px = lambda m: m / 9.0 * n
    def band(cx, w):
        return ((u >= cx - w / 2) & (u <= cx + w / 2)).astype(float)
    edge = band(px(0.42) / n, px(0.13) / n) + band(1 - px(0.42) / n, px(0.13) / n)
    paint += np.repeat(edge, n, 0)
    v = np.arange(n)[:, None] / n
    dash = ((v % 0.5) < 0.28).astype(float)
    ycol = np.repeat(band(0.5, px(0.13) / n), n, 0) * dash
    wear = smoothstep(0.35, 0.6, fbm(n, 1.6, 29) * 0.6 + fine * 0.4)
    paint *= wear
    ycol *= wear
    col = lerp(col, np.ones((n, n, 3)) * rgb('#d9d6cb') * (0.85 + 0.15 * fine[..., None]), (paint * 0.95)[..., None])
    col = lerp(col, np.ones((n, n, 3)) * rgb('#e2b021') * (0.85 + 0.15 * fine[..., None]), (ycol * 0.95)[..., None])
    col = col * (1 - cr[..., None] * 0.6)

    height = stones * 0.5 * worn + fine * 0.25 - cr * 0.8 + (paint + ycol) * 0.15 - puddle * 0.3
    rough = 0.9 - stones * 0.08 - puddle * 0.6 - oil * 0.25 - lanes * 0.08 - (paint + ycol) * 0.25
    write_set('asphalt', col, height, 5.0, np.clip(rough, 0.22, 1), q=82)


def pavers(n=1024):
    """2.4 m of concrete footpath slabs, chipped and dirty."""
    s = 4  # slabs per tile
    ys, xs = np.mgrid[0:n, 0:n] / n * s
    rng = np.random.default_rng(31)
    offs = rng.random(s)
    row = np.floor(ys).astype(int) % s
    xs2 = xs + offs[row] * 0.5
    gx = np.abs(xs2 - np.round(xs2))
    gy = np.abs(ys - np.round(ys))
    joint = 1 - smoothstep(0.004, 0.018, np.minimum(gx, gy))
    slab_id = (np.floor(xs2).astype(int) * 7 + row * 13) % 97
    tone = rng.random(97)[slab_id]
    grain = fbm(n, 0.9, 32, kmin=0.05)
    dirt = fbm(n, 3.0, 33)
    chips = smoothstep(0.78, 0.8, fbm(n, 2.0, 34)) * smoothstep(0.03, 0.0, np.minimum(gx, gy))
    gum = smoothstep(0.0025, 0.0, voronoi(n, 60, 35)[0])

    col = np.ones((n, n, 3)) * rgb('#a29d93')
    col = col * (0.85 + 0.2 * tone[..., None]) * (0.92 + 0.12 * grain[..., None])
    col = lerp(col, col * rgb('#6e675c') * 1.25, (smoothstep(0.45, 0.85, dirt) * 0.6)[..., None])
    col = lerp(col, np.ones((n, n, 3)) * rgb('#3a3631'), (joint * 0.8)[..., None])
    col = lerp(col, col * 0.7, chips[..., None])
    col = lerp(col, np.ones((n, n, 3)) * rgb('#4b4740'), (gum * 0.7)[..., None])
    height = grain * 0.2 - joint * 0.9 - chips * 0.4 + tone * 0.08
    rough = 0.88 + grain * 0.08 - dirt * 0.06
    write_set('pavers', col, height, 6.0, rough)


def curb(w=1024, h=128):
    """2 m of curb face painted in the black/yellow stripes Indian roads use."""
    n = w
    big = fbm(n, 1.4, 41, kmin=0.05)[:h, :]
    dirt = fbm(n, 2.8, 42)[:h, :]
    x = np.arange(w)[None, :] / w
    stripe = ((x * 4) % 1 < 0.5).astype(float)
    stripe = np.repeat(stripe, h, 0)
    wear = smoothstep(0.35, 0.55, big)
    yellow = rgb('#e3b316')
    black = rgb('#1b1b1a')
    concrete = rgb('#a19b90')
    paint = lerp(np.ones((h, w, 3)) * black, np.ones((h, w, 3)) * yellow, stripe)
    col = lerp(np.ones((h, w, 3)) * concrete * (0.85 + 0.2 * big[..., None]), paint, wear[..., None])
    y = np.arange(h)[:, None] / h
    col = col * (0.7 + 0.3 * smoothstep(1.0, 0.4, np.repeat(y, w, 1)))[..., None] * (0.85 + 0.15 * dirt[..., None])
    save('curb_col.jpg', col)


def corrugated(n=1024):
    """2 m of painted, rusting corrugated sheet. Corrugation runs vertically."""
    x = np.arange(n)[None, :] / n
    wave = (np.sin(x * np.pi * 2 * 26) * 0.5 + 0.5)
    wave = np.repeat(wave, n, 0)
    rust_n = fbm(n, 2.4, 51) * 0.7 + fbm(n, 1.2, 52, kmin=0.03) * 0.3
    runs = smoothstep(0.55, 0.85, fbm(n, 2.0, 53, ax=0.3, ay=8))
    rust = np.clip(smoothstep(0.62, 0.72, rust_n) + runs * 0.6 * smoothstep(0.4, 0.6, rust_n), 0, 1)
    seam = np.repeat(((np.arange(n)[:, None] / n * 2) % 1 < 0.006).astype(float), n, 1)
    paint = np.ones((n, n, 3)) * rgb('#d6d6d0')  # neutral, tinted in-engine
    paint = paint * (0.9 + 0.1 * fbm(n, 1.0, 55, kmin=0.05)[..., None])
    rust_col = lerp(np.ones((n, n, 3)) * rgb('#7a3b1c'), np.ones((n, n, 3)) * rgb('#b5652c'), fbm(n, 1.5, 56))
    col = lerp(paint, rust_col, rust[..., None])
    col = col * (0.75 + 0.25 * wave[..., None])
    col = col * (1 - seam[..., None] * 0.5)
    height = wave * 1.0 + rust * 0.08 * fbm(n, 0.8, 57, kmin=0.1)
    rough = 0.45 + rust * 0.45 + 0.05 * wave
    metal = 0.55 * (1 - rust)
    write_set('corrugated', col, height, 3.5, rough, metal)


def steel(n=1024):
    """Painted structural steel with rivet rows, chipped paint & rust bleed. 2 m tile."""
    base = fbm(n, 1.1, 61, kmin=0.05)
    ys, xs = np.mgrid[0:n, 0:n] / n
    pitch = 1 / 16
    rx = np.abs(((xs + pitch / 2) % pitch) - pitch / 2)
    rows = [0.12, 0.88]
    rivet = np.zeros((n, n))
    for r0 in rows:
        d = np.sqrt(rx ** 2 + (ys - r0) ** 2)
        rivet = np.maximum(rivet, smoothstep(0.009, 0.004, d) * np.clip(1 - d / 0.009, 0, 1) ** 0.3)
    chip = smoothstep(0.73, 0.76, fbm(n, 2.6, 62))
    bleed = smoothstep(0.6, 0.9, fbm(n, 2.0, 63, ax=0.3, ay=7)) * smoothstep(0.4, 0.7, fbm(n, 2.6, 64))
    col = np.ones((n, n, 3)) * rgb('#d0d0cc') * (0.88 + 0.12 * base[..., None])
    rust_col = np.ones((n, n, 3)) * rgb('#7c3e1d') * (0.8 + 0.4 * fbm(n, 1.2, 65)[..., None])
    col = lerp(col, rust_col, np.clip(chip + bleed * 0.55, 0, 1)[..., None])
    col = col * (0.9 + 0.1 * rivet[..., None])
    height = base * 0.15 + rivet * 1.0 - chip * 0.2
    rough = 0.55 + base * 0.1 + chip * 0.35 + bleed * 0.2
    metal = (1 - chip) * 0.25
    write_set('steel', col, height, 6.0, rough, metal)


def concrete(n=1024):
    """Weathered cast concrete with form-tie holes, 4 m tile."""
    grain = fbm(n, 0.9, 71, kmin=0.06)
    mottle = fbm(n, 3.0, 72)
    streak = smoothstep(0.55, 0.9, fbm(n, 2.0, 73, ax=0.3, ay=7))
    ys, xs = np.mgrid[0:n, 0:n] / n
    pitch = 0.25
    hx = np.abs(((xs + pitch / 2) % pitch) - pitch / 2)
    hy = np.abs(((ys + pitch / 2) % pitch) - pitch / 2)
    ties = smoothstep(0.006, 0.003, np.sqrt(hx ** 2 + hy ** 2))
    seams = 1 - smoothstep(0.0, 0.003, np.minimum(xs % 0.5, ys % 0.5))
    col = np.ones((n, n, 3)) * rgb('#a9a59d') * (0.85 + 0.2 * mottle[..., None]) * (0.93 + 0.1 * grain[..., None])
    col = lerp(col, col * 0.62, (streak * 0.6)[..., None])
    col = col * (1 - ties[..., None] * 0.6) * (1 - seams[..., None] * 0.35)
    height = grain * 0.3 + mottle * 0.1 - ties * 0.6 - seams * 0.3
    rough = 0.9 - streak * 0.1
    write_set('concrete', col, height, 5.0, rough)


def ground(n=1024):
    """Dusty urban verge: dry grass, bare earth and grit. 10 m tile."""
    blades = fbm(n, 0.4, 81, kmin=0.15)
    clumps = fbm(n, 2.8, 82)
    patches = smoothstep(0.42, 0.62, fbm(n, 3.2, 83))
    grit_f1, _, gid = voronoi(n, 3000, 84, grid=True)
    grit = smoothstep(0.003, 0.001, grit_f1)
    grass = lerp(np.ones((n, n, 3)) * rgb('#4f5a2c'), np.ones((n, n, 3)) * rgb('#7d7a3e'), clumps)
    grass = grass * (0.7 + 0.5 * blades[..., None])
    earth = np.ones((n, n, 3)) * rgb('#7a6a52') * (0.85 + 0.25 * fbm(n, 1.2, 85, kmin=0.05)[..., None])
    col = lerp(earth, grass, patches[..., None])
    col = lerp(col, np.ones((n, n, 3)) * rgb('#9a9286'), (grit * (1 - patches) * 0.6)[..., None])
    height = blades * patches * 0.6 + grit * 0.4 + clumps * 0.2
    rough = 0.95 - grit * 0.1
    write_set('ground', col, height, 4.0, rough)


def bark(n=512):
    """Rain-tree bark: deep vertical fissures."""
    fiss = fbm(n, 2.2, 91, ax=0.5, ay=5.0)
    ridges = 1 - np.abs(fiss * 2 - 1)
    ridges = ridges ** 2
    detail = fbm(n, 1.0, 92, kmin=0.05)
    lichen = smoothstep(0.65, 0.8, fbm(n, 2.8, 93))
    col = lerp(np.ones((n, n, 3)) * rgb('#2e241c'), np.ones((n, n, 3)) * rgb('#6b5a48'), ridges)
    col = col * (0.85 + 0.25 * detail[..., None])
    col = lerp(col, np.ones((n, n, 3)) * rgb('#7d8a5a'), (lichen * 0.5)[..., None])
    height = ridges * 0.8 + detail * 0.2
    write_set('bark', col, height, 9.0, 0.92 + 0 * height)


def leaves(n=1024):
    """Alpha-cut foliage card: clusters of tropical leaves (rain tree / neem)."""
    rng = np.random.default_rng(101)
    S = 2
    big = n * S
    img = Image.new('RGBA', (big, big), (0, 0, 0, 0))
    nrm = Image.new('RGB', (big, big), (128, 128, 255))
    d = ImageDraw.Draw(img)
    dn = ImageDraw.Draw(nrm)
    cx, cy = big / 2, big / 2
    for i in range(1400):
        # leaves gather in a rough disc, denser in the middle
        a = rng.random() * np.pi * 2
        r = (rng.random() ** 0.6) * big * 0.46
        x, y = cx + np.cos(a) * r, cy + np.sin(a) * r * 0.9
        L = (0.035 + rng.random() * 0.03) * big
        W = L * (0.32 + rng.random() * 0.12)
        ang = rng.random() * np.pi * 2
        shade = 0.55 + 0.45 * rng.random()
        depth = r / (big * 0.46)
        g = np.array([0.20, 0.36, 0.12]) * (0.7 + 0.6 * shade) * (1.1 - depth * 0.35)
        if rng.random() < 0.12:
            g = np.array([0.42, 0.45, 0.16]) * shade  # yellowing leaf
        pts = []
        for t in np.linspace(0, 1, 14):
            w = np.sin(t * np.pi) ** 0.8 * W / 2
            pts.append((t * L, w))
        for t in np.linspace(1, 0, 14):
            w = np.sin(t * np.pi) ** 0.8 * W / 2
            pts.append((t * L, -w))
        ca, sa = np.cos(ang), np.sin(ang)
        poly = [(x + px * ca - py * sa, y + px * sa + py * ca) for px, py in pts]
        c = tuple(int(v * 255) for v in np.clip(g, 0, 1)) + (255,)
        d.polygon(poly, fill=c)
        vein = [(x, y), (x + L * ca, y + L * sa)]
        d.line(vein, fill=tuple(int(v * 255 * 1.35) for v in np.clip(g, 0, 0.74)) + (255,), width=max(1, int(W * 0.08)))
        # a fake normal per leaf, tilted by its orientation
        tilt = 0.35 * rng.random()
        nx, ny = np.cos(ang + np.pi / 2) * tilt, np.sin(ang + np.pi / 2) * tilt
        nz = np.sqrt(max(0.0, 1 - nx * nx - ny * ny))
        dn.polygon(poly, fill=(int((nx * 0.5 + 0.5) * 255), int((-ny * 0.5 + 0.5) * 255), int((nz * 0.5 + 0.5) * 255)))
    img = img.resize((n, n), Image.LANCZOS)
    nrm = nrm.resize((n, n), Image.LANCZOS)
    a = np.asarray(img).astype(float) / 255
    rgbc = a[..., :3] / np.maximum(a[..., 3:4], 1e-3)
    out = np.concatenate([np.clip(rgbc, 0, 1), a[..., 3:4]], -1)
    # bleed colour into transparent texels so mip-maps don't fringe black
    col = out[..., :3]
    mask = out[..., 3] > 0.05
    fill = col.copy()
    for _ in range(8):
        fill = np.where(mask[..., None], col, box_blur(fill, 2))
    out[..., :3] = np.where(mask[..., None], col, fill)
    save('leaves_col.png', out)
    save('leaves_nor.jpg', np.asarray(nrm).astype(float) / 255, 90)


def louver(w=256, h=512):
    """Wooden louvred shutter (neutral; tinted in-engine)."""
    y = np.arange(h)[:, None] / h
    slat = ((y * 18) % 1)
    prof = np.repeat(smoothstep(0.0, 0.25, slat) * smoothstep(1.0, 0.75, slat), w, 1)
    frame = np.zeros((h, w))
    xs = np.arange(w)[None, :] / w
    frame = np.maximum(np.repeat((xs < 0.1) | (xs > 0.9), h, 0), np.repeat((y < 0.05) | (y > 0.95), w, 1)).astype(float)
    big = fbm(512, 2.2, 111)[:h, :w]
    peel = smoothstep(0.66, 0.7, big)
    wood = rgb('#6d5338')
    paint = rgb('#e8e8e2')
    col = lerp(np.ones((h, w, 3)) * paint, np.ones((h, w, 3)) * wood, peel[..., None])
    col = col * (0.55 + 0.45 * np.maximum(prof, frame)[..., None])
    save('louver_col.jpg', col)
    hgt = np.maximum(prof * 0.7, frame)
    n = normal_from_height(np.pad(hgt, ((0, 0), (0, 0)), mode='wrap'), 4.0)
    save('louver_nor.jpg', n)


def rail(w=512, h=256):
    """Wrought-iron balcony grille (alpha)."""
    img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    c = (38, 38, 36, 255)
    d.rectangle([0, 0, w, 10], fill=c)
    d.rectangle([0, h - 12, w, h], fill=c)
    d.rectangle([0, int(h * 0.52), w, int(h * 0.52) + 5], fill=c)
    for i in range(16):
        x = int(i * w / 16 + w / 32)
        d.rectangle([x - 2, 0, x + 2, h], fill=c)
    for i in range(8):
        x = int(i * w / 8 + w / 16)
        d.ellipse([x - 22, 22, x + 22, int(h * 0.48)], outline=c, width=4)
        d.arc([x - 14, int(h * 0.56), x + 14, h - 20], 0, 360, fill=c, width=4)
    save('rail_col.png', np.asarray(img).astype(float) / 255)


def wood(n=512):
    """Rough-sawn crate planks, 1.5 m tile."""
    g = fbm(n, 2.0, 121, ax=8.0, ay=0.15)  # long grain along x
    knots = smoothstep(0.004, 0.0, voronoi(n, 12, 122)[0])
    y = np.arange(n)[:, None] / n
    plank = np.repeat(((y * 5) % 1 < 0.02).astype(float), n, 1)
    col = lerp(np.ones((n, n, 3)) * rgb('#8a6440'), np.ones((n, n, 3)) * rgb('#c39a66'), g)
    col = col * (1 - plank[..., None] * 0.7) * (1 - knots[..., None] * 0.5)
    height = g * 0.5 - plank - knots * 0.3
    write_set('wood', col, height, 5.0, 0.85 + 0 * g)


if __name__ == '__main__':
    import sys
    which = sys.argv[1:] or ['plaster', 'asphalt', 'pavers', 'curb', 'corrugated', 'steel', 'concrete', 'ground', 'bark', 'leaves', 'louver', 'rail', 'wood']
    for name in which:
        globals()[name]()
