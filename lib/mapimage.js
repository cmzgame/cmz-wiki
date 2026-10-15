// The valley drawn from its map file, at the screen's angle (the game's own
// projection, iso.toScreen: x = (gx - gy) * w/2, y = (gx + gy) * h/2), so map
// north is up and to the right as in the game. One colour a tile, walls dark.
// The PNG is written with Node's zlib: no canvas, no dependency.

import { deflateSync } from "node:zlib";

const COLOURS = {
  grass: [95, 122, 62], floor_grass: [95, 122, 62], floor_dirt: [138, 106, 68], floor_cobble: [150, 145, 135],
  floor_water: [52, 96, 130], floor_water_shallow: [104, 150, 165], floor_stone: [165, 160, 150], floor_wood: [140, 98, 56],
  floor_farm: [100, 70, 42], floor_farm_y: [100, 70, 42], wall: [43, 37, 34], fence: [120, 100, 72], outside: [40, 52, 30],
};

// The grid of colours, tile by tile, from the features, the places, their floors, buildings, and fences.
export function valleyGrid(valley) {
  const [, , W, H] = valley.bounds || [0, 0, 256, 256];
  const grid = Array.from({ length: H }, () => Array(W).fill(COLOURS[valley.floor] || COLOURS.grass));
  const fill = ([x, y, w, h], c) => { for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (grid[j] && i >= 0 && i < W) grid[j][i] = c; };
  const outline = ([x, y, w, h], c) => { for (let i = x; i < x + w; i++) { if (grid[y]) grid[y][i] = c; if (grid[y + h - 1]) grid[y + h - 1][i] = c; } for (let j = y; j < y + h; j++) if (grid[j]) { grid[j][x] = c; grid[j][x + w - 1] = c; } };
  const order = ["bank", "water", "road", "bridge"];
  const feats = (valley.features || []).slice().sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));
  for (const f of feats) {
    if (!f.rect) continue;
    if (f.kind === "fence") outline(f.rect, COLOURS.fence);
    else fill(f.rect, COLOURS[f.sprite] || COLOURS.floor_dirt);
  }
  for (const s of valley.sets || []) {
    const [sx, sy] = s.rect;
    for (const r of s.floorRects || []) fill([sx + r.rect[0], sy + r.rect[1], r.rect[2], r.rect[3]], COLOURS[r.sprite] || COLOURS.floor_dirt);
    for (const f of s.fences || []) outline([sx + f.rect[0], sy + f.rect[1], f.rect[2], f.rect[3]], COLOURS.fence);
    for (const b of s.buildings || []) {
      const r = [sx + b.rect[0], sy + b.rect[1], b.rect[2], b.rect[3]];
      fill(r, COLOURS[b.floor] || COLOURS.floor_wood);
      outline([r[0] - 1, r[1] - 1, r[2] + 1, r[3] + 1], COLOURS.wall);
    }
  }
  return grid;
}

// Tile diamonds `tw` pixels wide, tw/2 tall. Returns { png, width, height, toPx(gx, gy) }.
export function valleyPng(valley, tw = 4, crop = null) {
  const full = valleyGrid(valley);
  const [cx, cy, cw, ch] = crop || [0, 0, full[0].length, full.length];
  const grid = full.slice(cy, cy + ch).map((row) => row.slice(cx, cx + cw));
  const H = grid.length, W = grid[0].length;
  const hw = tw / 2, hh = tw / 4;
  const width = (W + H) * hw, height = (W + H) * hh;
  const ox = H * hw; // the projection's x for (0, H)
  const px = Buffer.alloc((width * 4 + 1) * height);
  const bg = [0, 0, 0, 0];
  for (let y = 0; y < height; y++) {
    px[y * (width * 4 + 1)] = 0;
    for (let x = 0; x < width; x++) {
      // invert x = (gx - gy) * hw + ox, y = (gx + gy) * hh
      const a = (x - ox) / hw, b = y / hh;
      const gx = Math.floor((a + b) / 2), gy = Math.floor((b - a) / 2);
      const c = gx >= 0 && gy >= 0 && gx < W && gy < H ? [...grid[gy][gx], 255] : bg;
      const o = y * (width * 4 + 1) + 1 + x * 4;
      px[o] = c[0]; px[o + 1] = c[1]; px[o + 2] = c[2]; px[o + 3] = c[3];
    }
  }
  return { png: encodePng(width, height, px), width, height, toPx: (gx, gy) => [((gx - cx) - (gy - cy)) * hw + ox, ((gx - cx) + (gy - cy)) * hh] };
}

const CRC = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
function crc32(buf) { let c = -1; for (const b of buf) c = CRC[(c ^ b) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; }
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function encodePng(w, h, raw) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", deflateSync(raw)), chunk("IEND", Buffer.alloc(0))]);
}
