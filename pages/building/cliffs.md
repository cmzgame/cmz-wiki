---
title: Cliffs
categories: [Building, Mechanics]
aliases: [Cliff, Cliff wall, Grassy cliff wall, Cliff top, Grassy cliff top, Stone ramp, Ramp, Hill, Hills, Plateau]
summary: Cliff walls, cliff tops, and the stone ramp, built only with Free building for experimenting: a hill made of a ring of cliff walls with a floor laid over it a storey up, climbed by a ramp.
---

{{devonly note="Cliffs are not in the game yet: their five rows are listed in the build palette only while Free building is on, for experimenting with Michael's cliff art (art round 10)."}}

**Cliffs** are rock faces a storey tall, built with **Free building** on to try out hills. A hill is made of three pieces: **cliff walls** standing on the tile edges round it, a **cliff top** laid a storey up over the tiles inside them, and a **stone ramp** that climbs onto it. Each comes bare (rock) or grassy (turf rolled over the lip). Nothing on the map is a cliff yet; the plan for a bounded world with cliffs at its edge (the game's `docs/29-world/10`) is not built.

## How it works

### The pieces

With Free building on, the build palette (N) has five more rows (see [[Building]]):

- **Cliff wall** and **Grassy cliff wall**: a cliff face on a tile's edge, built as any wall.
- **Cliff top** and **Grassy cliff top**: a floor, laid a tile at a time or by a drag, on the ground or a storey up, as a [[Upper floors#Building floors and stairs|built floor]] is.
- **Stone ramp**: a sloped slab of rock three tiles long climbing one storey, built as a stair.

Without Free building they are not listed, and are refused if asked for (a guest's command too): "Cliffs are not in the game yet" for the walls, "Floors are not in the game yet" for the tops, "Stairs are not in the game yet" for the ramp.

### Cliff walls

A cliff wall is a [[Walls|wall]] of rock, {{n sprites.wall_cliff.wall.height}} pixels tall, a house wall's height, so a storey. It blocks bodies and [[Sight|sight]] as a stone wall does, bounds a room as any wall does, and nothing breaks it: [[The dead|the dead]] break no plain wall. It is bare rock:

- no door or window is built over it ("Not in a cliff");
- no [[Paintings|painting]] is hung on it and no [[Torch]] put on it ("Not on a cliff");
- it has no menu, as a plain wall has none.

The Take apart tool (X) takes one apart only while Free building is on; without it, "Cliffs come apart only in Free building". Built while Free building is on, it cost nothing and gives nothing back.

### Making a hill

A cliff's **plateau** is the tiles with a floor on the storey above it: a cliff top, or any floor. To make a hill, stand a ring of cliff walls on the ground, build a stone ramp climbing north or west beside it, and from the ramp's landing lay cliff top out over the tiles inside the ring, a tile at a time, as an upper floor grows from a landing (see [[Upper floors#Building floors and stairs|Upper floors]]). The plateau is walked as any upper floor: its open edge holds you, and nothing falls.

The walls are drawn by where the plateau is:

- **A face** with its plateau behind it is the cliff's rock face, its top cut along the edge so the plateau's floor shows over the rock's flat top; the lip is the wall's own picture, with no cap. A straight face takes one of a few variants of its picture, picked by its place, so a long cliff does not repeat.
- **A back**, a cliff whose plateau is on the camera's side, shows only its far side, behind the plateau's floor.
- **A corner**, where two cliff edges meet at a turn of the plateau, is drawn as one corner piece in place of both edges and the post between them, outer where the plateau turns out and inner at a notch. A grass lip meets a rock lip with no post between them.
- **A buried cliff**, one with plateau on both its sides (a hill widened past it), is drawn as nothing.

Nothing of a cliff is outlined.

### The stone ramp

A stone ramp is a stair of rock: it is built as a [[Upper floors#Stairs|stair]] is, by the same rules and refusals, three tiles from the cursor climbing one storey, north or west only ("Stairs climb away from the camera"). It has no treads: a body walks up it on a smooth slope, rising evenly from its foot to its top, and crosses its top edge onto the landing. Building it lays its landing as a cliff top, unless a floor is laid there already. Like every stair, it is never taken apart.

### What is not built yet

Cliffs in the ordinary game, cliffs placed by the map, and a cliff-edged world are not built. Seen from the ground, a plateau over a hill's sealed inside takes the ground's fog under it, so its tiles are dimmed in patches; from the plateau itself it is all lit. A body behind a hill is not faded, as one behind an upper storey is.

## Numbers

- A cliff wall: {{n sprites.wall_cliff.wall.height}} pixels tall, {{n sprites.wall_cliff.wall.thickness}} thick.
- Cliff wall and Grassy cliff wall: {{n build.wall_cliff.cost.stone}} [[Stone|stone]] each, {{n build.wall_cliff.seconds seconds}}.
- Cliff top and Grassy cliff top: {{n build.floor_cliff_top.cost.stone}} stone a tile, {{n build.floor_cliff_top.seconds second}} a tile.
- Stone ramp: {{n build.stair_ramp_stone.cost.stone}} stone and {{n build.stair_ramp_stone.cost.plank}} [[Plank|plank]], {{n build.stair_ramp_stone.seconds seconds}}; three tiles, one storey.
- These costs are placeholders, copied from the stone pieces, never charged while cliffs are built only with Free building.

## With friends

A guest builds cliff walls, cliff tops, and the ramp through the same build command as the host, and the host checks them by the same rules; without Free building the host refuses them. A guest walks up a ramp with their own keys, and their game reckons the slope as the host's does. Cliffs, their tops, and the ramp travel in the map's chunks as walls, floors, and stairs do, so every player draws the same corners and faces, and they are kept in the save.

## Settings that change it

- **Free building** (default Off): lists the five cliff pieces in the palette and lets them be built, and lets a cliff wall be taken apart. See [[World rules]].

## See also

- [[Walls]]
- [[Upper floors]]
- [[Building]]

## Sources

<!-- sources at 3233696 -->
- `data/build.json:209-270`: the Cliff wall, the Grassy cliff wall, the Cliff top, the Grassy cliff top, and the Stone ramp, each `dev`, its cost a placeholder, its seconds (game #561)
- `data/sprites/wall_cliff.json`, `data/sprites/wall_cliff_grass.json`: `wall.cliff`, the height and thickness, the corner pieces' definition, the face variants and the backs (game #561)
- `data/sprites/stair_ramp_stone.json`: the ramp's drawings north and west, its `ramp` table, its landing a cliff top (game #561)
- `src/placement.js:591`, `src/placement.js:635-636`, `src/placement.js:1091`: "Cliffs are not in the game yet", "Not in a cliff", "Cliffs come apart only in Free building" (game #561)
- `src/map.js:1164`, `src/map.js:2543`: no door or window stamped over a cliff; a wall's `cliff` rule (game #561)
- `src/paintings.js:57`, `src/setdown.js:269`: "Not on a cliff" for a painting and a torch's bracket (game #561)
- `src/map.js:2651-2664`, `src/map.js:2769-2771`: a stair's material wood, stone, or one with its own definition; a ramp walked on a smooth slope; its landing the floor its definition names (game #561)
- `src/cliffs.js:1-94`: the plateau the floored tiles a storey up; a buried cliff drawn as nothing; the corners, outer and inner, and their halves; the face variant by the edge, the back (game #561)
- `src/render/walls.js:822-860`: a cliff's face cut under its plateau's floor, its back, its corner pieces (game #561)
- `src/render/scene.js:206-235` (at 7925955): an upper storey also draws the first row and column of a chunk it does not hold beside one it does, so a corner piece at a chunk's corner on a storey is drawn (game #564; before it, the corner and both its edges drew as nothing)
- `src/render/storeys.js:273-300`, `src/render/storeys.js:413`: the ramp drawn on its planes (game #561)
- The game's pull request #561: the guest's side, the limits (the plateau's fog from the ground, no fade behind a hill), the plan of `docs/29-world/10` not built
