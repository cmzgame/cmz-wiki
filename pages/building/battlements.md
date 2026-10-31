---
title: Battlements
categories: [Building, Mechanics]
aliases: [Battlement, Castle battlement, Castle battlements, Parapet, Parapets, Merlon, Merlons, Wall walk, Wall walks]
numbersOk: true
summary: The castle battlement, a short stone parapet with merlons on the outer edge of a wall walk upstairs, built only with Free building: placed at once and free, wholly outside the walkway; sight, light, and high shots pass it, bodies and the dead do not, and the dead cannot strike it down.
---

<!-- typed: the art round's number and its pieces' counts are the names and counts of Michael's art, not the game's numbers -->

{{devonly note="Battlements are not in the game yet: the Battlement row is listed in the build palette only while Free building is on, for experimenting with Michael's art round 13, and the village has none."}}

A **battlement** is a castle's parapet: a short stone wall with **merlons**, the teeth along its top, standing on the outer edge of a **wall walk**, a floor laid a storey up (see [[Upper floors]]), usually over a run of stone [[Walls|wall]]. The whole of it stands outside the walkway's edge, so the walkway keeps its whole tile to walk on. It is a low wall for the rules: you see and light comes through over it, and a high shot passes over it, but no body crosses its edge, and [[The dead]] can neither break it nor strike it down. It is the [[Castle gates|castle gates]]' sibling, from the art round after theirs.

## How it works

### Building one

With Free building on, the build palette (N) has a **Castle** heading on its Build tab, with the two castle gates and the **Battlement** (see [[Building]]). Click the row, then click a tile edge of the floor you stand on, upstairs: the battlement stands on that click, at once and for free, with no bar, no cost, and no tool, as the gates and the [[Cliffs#The stone ramp|Stone ramp]] do. It is a click per edge, like any wall; there is no drag that stamps a run. The row's tooltip reads "Click an edge of a wall walk's floor, upstairs: a parapet with merlons stands on the edge outside the walkway, which stays whole".

A battlement needs **a wall walk to stand on**: an edge on the first storey or higher with a floor of that storey on one side of the edge and none on the other. The side with the floor is the walkway, and the stone stands wholly on the other side, over the drop. A stair's hole counts as the walkway's own, so a battlement may stand along the edge of a stairwell, as its rail: beside a stair built against the wall, the battlements run on unbroken over its top (until game #619 the general rule that a storey's wall stands by a floor refused it there, "No floor there"). The ghost is green where it can go and red where it cannot, with the reason:

- "It needs a wall walk to stand on": the edge is on the ground, or neither side of it has a floor.
- "Only along the outer edge of a wall walk": both sides of the edge have a floor, so the edge is inside the walkway.
- "Already a wall": the edge holds a wall, a door, or a window already. A battlement is never stamped over anything, and nothing is stamped over it.
- "Too far", "Step back", and "Someone is in the way", as for any wall (see [[Building#Laying a piece|Building]]); with Free building on, which a battlement always has, the reach is {{n census.constants.placement.FREE_REACH tiles}}.
- "Not in the game yet": Free building is off. A guest's command is refused the same way.

### What it stops

A battlement is a wall on its edge, {{n sprites.wall_battlement.wall.height}} pixels tall, less than a third of a house wall:

- **It stops bodies**: yours, a friend's, a villager's, and the dead's, at the edge line, as any wall does. An edge with no battlement is an open edge, and holds you as any upper floor's edge does.
- **It passes sight and light**, like a [[Fences|fence]]: you see over it from the walk, and the dead below see you. See [[Sight]] and [[Light]].
- **It passes a shot above its height**: an arrow, a thrown thing, or a spell flying higher than {{n sprites.wall_battlement.wall.height}} pixels clears it, and one lower is stopped by it (see [[Archery#What stops a shot|Archery]]). From the walk a shot that clears it comes down on the ground where you aim (see [[Archery#Between floors|Archery]]).
- **It bounds no room**: like a fence, a ring of battlements is outdoors, and a wall walk is no room.
- **The dead cannot strike it down.** It has no hit points, they never target it, and it is not a fence they batter. One of the dead on the walk with you is stopped at it as you are.
- **It takes no door, window, painting, or torch**: a door or a window on its edge is refused, "Not in a battlement"; a painting or Place torch on it, "Nothing to hang it on".

### Which way it faces

Which side the stone is on is not chosen and not saved: it is read from the floors. The floor of the battlement's own storey on one side of the edge makes that side the walkway, and the stone stands on the other. Lay a floor on the far side later and the battlement has a walkway on both sides and nothing to stand over: it is drawn as nothing until one floor is taken up again; take up the walkway's own floor and the picture flips to the other side. Every player's game reads the same floors, so every player sees the same side.

The pieces are chosen at draw time from the neighbouring edges too: an outer corner where two runs meet round a corner of the walkway, an inner corner at a notch, a half merlon at a run's free end, and three plain pictures a side, by the edge, with an arrow loop in about {{pct sprites.wall_battlement.special.chance}} of them. A run turns, ends, and meets a stairwell with no post and no cap.

### Near battlements

A battlement on the camera's side of you, where you stand on the walkway just behind it or on the tile either side, is cut down to a stub at its foot, so it never hides your own character. A wall walk is no room, so this is its own rule, the same cut as a room's near walls (see [[Rooms#Near walls|Rooms]]).

### Taking one apart

The Take apart tool (X) takes a battlement as it takes any built wall: it lights up green under the cursor and one click removes it, with no tool asked for. Nothing comes back, since nothing was spent. See [[Building#Taking apart|Building]].

## Numbers

- Height: {{n sprites.wall_battlement.wall.height}} pixels; a shot above it passes. It has no thickness of its own: it stands wholly outside its edge line.
- Cost, time, and tool: none; placed at once (Free building only).
- The arrow loop: {{pct sprites.wall_battlement.special.chance}} of the straight pieces, spread evenly: one in each run of ten along a line, at a different place in each run.

## With friends

A guest builds a battlement through the same build command as the host, naming the edge, and the host checks the same refusals, Free building and the wall walk included; a guest takes one apart by the edge, as any wall. The battlement is a wall in the chunk record, so every player sees it built, and it is kept in the save; its side and its pieces are read from the floors and the neighbouring edges on every machine alike, and nothing about them travels the wire. The network protocol did not change for it.

## Settings that change it

- **Free building** (default Off): lists the Battlement in the palette and lets it be built. Without it the row is not offered and a build is refused. A battlement already standing is taken apart with it off. See [[World rules]].

## See also

- [[Castle gates]]
- [[Walls]], [[Upper floors]], [[Building]]
- [[Fences]], the other wall that sight passes
- [[Levers]]

## Sources

<!-- sources at 8d361e5 -->
- `data/build.json` (`battlement_stone`): the row, `kind` wall, `sprite` wall_battlement, `dev`, group Castle, its hint, no cost, time, or tool (game #574)
- `data/sprites/wall_battlement.json`, `data/sprites/wall_battlement_vertices.json`: `wall.battlement`, `height` 28, `thickness` 0, `seeThrough`, `corners`; `faces`, `special.loop` and `special.chance`; the corner and end pieces (game #574)
- `src/battlements.js:19-26`, `src/battlements.js:29-45`: `floored` (a stairwell counts as the walkway's, game #576), `sideOf`, `problem` ("It needs a wall walk to stand on", "Only along the outer edge of a wall walk") (games #574, #576)
- `src/battlements.js:56-120`: `cornerAt`, `endAt`, `vertexAt`, `edgeFrame`: the corners, the ends, the plain variants by the edge's hash, the arrow loop by `special.chance`, the cuts beside an inner corner (game #574)
- `src/placement.js:48`, `src/placement.js:812-817`: a battlement's refusals in order; "Not in the game yet" without Free building; "Not in a battlement" for a door or a window on one; the reach with Free building (games #574, #575)
- `src/map.js:1200`, `src/map.js:2762`: nothing stamped over a battlement; `wallRule(...).battlement` (game #574)
- `src/map.js:1617`, `src/map.js:2664`: a see-through wall passes sight and light and bounds no room
- `src/paintings.js:56`: "Nothing to hang it on" for a painting or a torch on a see-through wall
- `src/archery.js:194-205`: a flight stopped below a wall's own height, a battlement's 28
- `src/render/walls.js:867-874`, `src/render/walls.js` `makeBattlement`, `makeBattlementVertex`: the pieces chosen at draw time, no post or cap, the near battlement translucent where the viewer stands behind it or beside that tile (game #574)
- `docs/02-decisions.md` (2026-10-29, Castle battlements): Michael's brief ("margin not padding") and the four rulings
- The game's pull requests #574 and #576: what was and was not built (no drag that stamps a run; the artist's depth maps not read); a battlement beside a stairwell
