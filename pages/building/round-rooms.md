---
title: Round rooms
categories: [Building, Mechanics]
aliases: [Round room, Round stone wall, Round wall, Round walls, Ring, Round tower, Door point, Door points]
numbersOk: true
summary: Round stone rooms, 5 or 7 tiles across: a circle drawn round stepped tile walls, doors and windows only at its four door points, on the map and built only with Free building for now.
---

<!-- typed: a round room's inside, 21 tiles at 5 across and 37 at 7, its outline's 20 and 28 edges, and its eight curve-crossed tiles are its geometry (`src/round.js` `shape`), not named numbers; the 5 and the 7 are `round.SIZES`, a list a lookup cannot name; the build's two fifths longer at 7 is a factor typed in `src/placement.js` -->

A **round room** is a room with a circular stone wall, 5 or 7 tiles across, drawn as a ring round a square of tiles. On the map, [[Hollow Farm's dovecote]] is one, and the proving ground has a 7 by 7 room and a two-storey round tower. Players can build them only with **Free building** on: round walls are stone only, a few on the map, and not in the game's normal build menu until their cost is settled (Michael, 2026-10-27).

## How it works

### The shape

A round room is a circle inside a square of 5 or 7 tiles. Its floor is the tiles whose centres lie inside the circle: 21 of a 5 by 5 (the square less its four corner tiles) and 37 of a 7 by 7 (less three at each corner). The outer edges of those tiles, 20 at 5 and 28 at 7, are the room's walls: stone walls on tile edges, like any other (see [[Walls]]), so the room is a room, sight and light stop at it, and the dead path in only by its door. The left-over corner tiles are outdoors.

The wall is drawn as a smooth ring as tall and as thick as a straight stone wall, round the stepped edges. Bodies are stopped by both, the stepped edges and the drawn curve, so nobody stands in the drawn wall. While you are inside, the ring's near half fades as a room's near walls do (see [[Rooms]]).

**The four door points** are the middles of the square's four sides, where the circle touches it. A door or a window goes only there ("Only at a door point of the curve"); a door point with nothing in it is wall. Taking a door or a window out of a door point leaves the ring's wall, never a hole and never a straight wall.

### What goes inside

- **No furniture on the eight tiles the curve crosses** (the ends of the outer rows and columns): set-down, a carried piece, a made piece's spot, and the palette's pieces are refused there ("Not against the curve"). Things on the floor and rugs may lie there.
- **No wall inside**: a wall between two of the room's tiles is refused ("Not inside a round room").
- **A torch** may go on the ring with **Place torch**, at its point on the curve, on a face the camera sees; on a face turned away it is refused ("Not on that side of the curve"). See [[Torch posts and brackets#A torch on a wall|Torch posts and brackets]].
- **No painting** hangs on the ring ("It would not hang flat on the curve"). See [[Paintings]].
- **No fireplace** stands against the ring: a [[Fireplace]] needs a flat wall ("Against a wall"). A round room's fire is a [[Fire pit]], which fits inside one, a 7 by 7 with room to spare.
- In a 7 by 7, eight tiles just inside the corners cannot be walked to: nobody's path ends there, nothing wanders there, and nothing is set down there.

A round room with its door shut is as safe as any room: nothing breaks the ring, and [[The dead]] break in only at a door point's door or window, as at any other (see [[Breaking in]]).

### Building one

{{devonly note="Round walls are not in the game yet: the Round stone wall is listed in the build palette only while Free building is on, until their cost is settled."}}

With **Free building** on, the build palette (N) has a **Round stone wall** row. Press on a tile to start the room's square at that corner and drag outward: the ghost is a circle in its square, 5 across, growing to 7 once the drag covers seven tiles either way. Release to build. A timed bar runs, as for any wall ("Building round stone wall"), {{n build.round_stone.seconds seconds}} for a 5 by 5 and two fifths longer for a 7 by 7. Without Free building the round stone wall is refused: "Round walls are not in the game yet".

The ghost is red, with the reason, unless:

- every tile of the room is open floor, not water ("Not on water or empty ground"), with nothing standing on it ("Something is in the way"), nothing lying on it ("Clear the floor first"), and no wall between two of its tiles ("A wall is in the way");
- no other round room's square overlaps it ("Another round room is there");
- every edge of its outline is empty, a plain wall, or a door or a window already at a door point: a fence refuses it ("Not over a fence"), as does a door or a window anywhere else on the outline ("A door or a window is in the way") and a lantern in a bracket ("A lantern is in the way");
- its nearest edge is within reach ("Too far"), and nobody stands across its outline ("Someone is in the way"; "Step back" when it is you).

A plain wall already on the outline is taken into the ring: a round room can stand against a house as an apse, the house's wall drawn as the curve. A torch on that wall falls to the floor, put out, and a painting falls whole. A door or a window already at a door point stays where it is.

### Taking one apart

The Take apart tool (X) takes a round room you built **whole**, never one edge alone: pointing at any edge of it lights up the whole ring. A wall or a door it took in when it was built is left as it was, straight again. A ring built with Free building gives nothing back. A round room that is part of the map cannot be taken apart ("That is the village's.").

{{planned doc=50 step=4 note="Rounded corners: a quarter circle joining two straight walls at a room's corner."}}
{{planned doc=50 step=3 note="A straight wall meeting a ring: its picture run on to the curve, and the build rule that it ends at a corner of the stepped outline."}}

## Numbers

- Sizes: 5 or 7 tiles across.
- The round stone wall's cost: {{n build.round_stone.cost.stone}} [[Stone|stone]] an edge it lays, never charged while it is buildable only with Free building.
- Its time: {{n build.round_stone.seconds seconds}} for a 5 by 5, two fifths more for a 7 by 7.
- The curve for bodies: a straight piece every {{n census.constants.round.CHORD_DEG}} degrees; the drawn ring: {{n census.constants.render_rings.SEGMENTS}} segments.

## With friends

A guest builds a round room through the same path as the host: their drag sends a build command naming the square's corner and its size, which the host checks and builds on the guest's own character; Take apart works the same way, a command naming the ring. The ring travels as its walls in the map's chunks, so a guest's game rebuilds the room and its curve from them, and each player draws it for themselves.

## Settings that change it

- **Free building** (default Off): lists the Round stone wall in the palette and lets it be built; without it a round room cannot be built at all. See [[World rules]].

## See also

- [[Hollow Farm's dovecote]]
- [[Walls]], [[Building]], [[Rooms]], [[Openings]]
- [[Upper floors]]

## Sources

<!-- sources at da57a57 -->
- `data/build.json:146-157`: the Round stone wall, stone, its cost an edge, its seconds, `dev` (game #536)
- `src/round.js:8-11`, `src/round.js:77-114`: the sizes, the stepped tiles, the outline, the door points, the curve's chords
- `src/map.js:1308-1319`: the curve-crossed tiles, "Not against the curve"
- `src/map.js:1444-1452`: a door or a window only at a door point, no wall inside a round room
- `src/map.js:1458-1481`: what refuses a ring: its size, another ring, its tiles, its outline (a fence, an opening off a door point, a lantern)
- `src/map.js:1485-1513`: a ring built: a plain wall on the outline taken in, a torch on it falling, a painting released, a door at a door point kept
- `src/map.js:1518-1555`: a ring taken down whole, what it took in left as it was
- `src/placement.js:80-200`: the palette's round stone wall only with Free building, "Round walls are not in the game yet", the drag (7 once it covers seven tiles), the reach, the timed build, two fifths longer at 7
- `src/placement.js:296-300`, `src/placement.js:198-212`: no cost with Free building, nothing back for a free ring
- `src/placement.js:693-696`, `src/placement.js:800-860`: a ring's edge is the whole ring for Take apart; the map's refused, "That is the village's."
- `src/setdown.js:39-40`, `src/setdown.js:62`, `src/setdown.js:265-267`, `src/paintings.js:57`: no furniture on the crossed tiles, no fireplace against the ring, a torch only on a face the camera sees, no painting
- `src/render/rings.js:1-22`: the ring drawn in two halves, the near half fading with the near walls
- `tools/mapgen/valley.py:635-638`, `tools/mapgen/proving.py`: the dovecote, the proving ground's room and tower
- `docs/02-decisions.md` (2026-10-27, Round walls are stone only): stone only, a few on the map, built with Free building alone
