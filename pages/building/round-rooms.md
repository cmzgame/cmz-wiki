---
title: Round rooms
categories: [Building, Mechanics]
aliases: [Round room, Round stone wall, Round wall, Round walls, Ring, Round tower, Door point, Door points]
numbersOk: true
summary: Round stone rooms, 5 or 7 tiles across: a circle drawn round stepped tile walls, doors and windows only at its four door points, on the map and built only with Free building for now.
---

<!-- typed: a round room's inside, 21 tiles at 5 across and 37 at 7, its outline's 20 and 28 edges, and its eight curve-crossed tiles are its geometry (`src/round.js` `shape`), not named numbers; the 5 and the 7 are `round.SIZES`, a list a lookup cannot name; the build's two fifths longer at 7 is a factor typed in `src/placement.js`; how far a straight wall's filler runs along the outline (half a tile, about a third, almost nothing) is the curve's crossing, worked out in `src/round.js` `base`, not a named number -->

A **round room** is a room with a circular stone wall, 5 or 7 tiles across, drawn as a ring round a square of tiles. On the map, [[Hollow Farm's dovecote]] is one, and the proving ground has a 7 by 7 room and a two-storey round tower. Players can build them only with **Free building** on: round walls are stone only, a few on the map, and not in the game's normal build menu until their cost is settled (Michael, 2026-10-27).

## How it works

### The shape

A round room is a circle inside a square of 5 or 7 tiles. Its floor is the tiles whose centres lie inside the circle: 21 of a 5 by 5 (the square less its four corner tiles) and 37 of a 7 by 7 (less three at each corner). The outer edges of those tiles, 20 at 5 and 28 at 7, are the room's walls: stone walls on tile edges, like any other (see [[Walls]]), so the room is a room, sight and light stop at it, and the dead path in only by its door. The left-over corner tiles are outdoors.

The wall is drawn as a smooth ring as tall and as thick as a straight stone wall, round the stepped edges, with nothing on the ground past it. Bodies are stopped by both, the stepped edges and the drawn curve, so nobody stands in the drawn wall. Inside a 7 by 7 a step's edge reaches a little inside the curve, so a body sliding along the inside of the wall can catch at the corner where the two meet. Inside, a stone skirt runs round the foot of the wall, from where the stepped floor ends to the wall's inner face, so the floor meets the curve in a smooth line with no grass showing between the steps; it is outlined on its inner edge, lit by the room, and drawn on the floor of every storey, under bodies and furniture.

**From inside**, the ring's near half is drawn as a clean cutaway, as a square room's near walls fade (see [[Rooms]]). The stretch that stands between you and the room is cut away to one faded face along the wall's inner line; the two flanks of the near half, which hide none of the room, keep their solid outer face, as from outside. The cut's two ends are closed by the wall's thickness seen end on, in the same stone, so the cut meets the flanks with no step or gap, and the top of the wall runs on over both. On the floor, the cut wall's footprint and the corners of the stepped floor just past it are one stone base with the skirt, outlined on its outer edge; it is drawn only while you are inside. A torch on the cut stretch's outer face is not drawn while you are inside; one on a flank is. From outside nothing of this changes.

**The four door points** are the middles of the square's four sides, where the circle touches it. A door or a window goes only there ("Only at a door point of the curve"); a door point with nothing in it is wall. A door or a window at a door point is drawn in the curve itself, from drawn art (Michael's art round 9, 2026-10-27), with no square posts: the opening is cut in the ring's face, the top of the wall runs on unbroken over it, and an arched frame of dressed stone, lighter than the ring's stone, stands round it, with the wall's thickness showing in the opening. A door is curved to the wall, drawn shut, open, or broken; at the east door point it is hinged at its other end, so it swings open clear of its doorway. A window's arched shutters are drawn shut, open (folded back on the outer face, seen at the east and south door points; at the north and west their open shutters lie on the face turned away), or broken. Boards nailed across are drawn on the face the camera sees, as many as the more boarded side holds. From inside, the near door points' doors and windows fade with the cut stretch. The skirt runs on under a door point as a narrow threshold. Taking a door or a window out of a door point leaves the ring's wall, never a hole and never a straight wall.

### What goes inside

- **No furniture on the eight tiles the curve crosses** (the ends of the outer rows and columns): set-down, a carried piece, a made piece's spot, and the palette's pieces are refused there ("Not against the curve"). Things on the floor and rugs may lie there.
- **No wall inside**: a wall between two of the room's tiles is refused ("Not inside a round room").
- **A floor** may be laid on its tiles with Free building on (see [[Upper floors#Building floors and stairs|Upper floors]]); where the curve crosses a tile, the laid floor is drawn inside the curve alone, and the floor it was laid over outside it. On a storey only the tiles the ring steps over are clipped so: a floor laid in the ring's square beyond them, the corners of a wall walk round a tower, stays whole.
- **A torch** may go on the ring with **Place torch**, at its point on the curve, on a face the camera sees; on a face turned away it is refused ("Not on that side of the curve"). See [[Torch posts and brackets#A torch on a wall|Torch posts and brackets]].
- **No painting** hangs on the ring ("It would not hang flat on the curve"). See [[Paintings]].
- **No fireplace** stands against the ring: a [[Fireplace]] needs a flat wall ("Against a wall"). A round room's fire is a [[Fire pit]], which fits inside one, a 7 by 7 with room to spare.
- In a 7 by 7, eight tiles just inside the corners cannot be walked to: nobody's path ends there, nothing wanders there, and nothing is set down there.

A round room with its door shut is as safe as any room: nothing breaks the ring, and [[The dead]] break in only at a door point's door or window, as at any other (see [[Breaking in]]).

### Building one

{{devonly note="Round walls are not in the game yet: the Round stone wall is listed in the build palette only while Free building is on, until their cost is settled."}}

With **Free building** on, the build palette (N) has a **Round stone wall** row. Press on a tile to start the room's square at that corner and drag outward: the ghost is a circle in its square, 5 across, growing to 7 once the drag covers seven tiles either way. Release to build. A timed bar runs, as for any wall ("Building round stone wall"), {{n build.round_stone.seconds seconds}} for a 5 by 5 and two fifths longer for a 7 by 7. Without Free building the round stone wall is refused: "Round walls are not in the game yet".

The ghost is red, with the reason, unless:

- every tile of the room is open floor, not water ("Not on water or empty ground"); upstairs, with a floor under every one of them ("A round room upstairs needs a floor under all of it") and none over a stair's hole ("A stairwell is under it: keep the ring off the stair's hole"); with nothing standing on it ("Something is in the way"), nothing lying on it ("Clear the floor first"), and no wall between two of its tiles ("A wall is in the way");
- no other round room's square overlaps it ("Another round room is there");
- every edge of its outline is empty, a plain wall, or a door or a window already at a door point: a fence refuses it ("Not over a fence"), as does a door or a window anywhere else on the outline ("A door or a window is in the way") and a lantern in a bracket ("A lantern is in the way");
- its nearest edge is within reach ("Too far"; with Free building on, which a round room always has, that is {{n census.constants.placement.FREE_REACH tiles}}), and nobody living stands across its outline ("Someone is in the way"; "Step back" when it is you), a corpse lying across it not counting;
- its outline crosses no stair's run or top ("Not across a stair", "Not across a stair's top"); nor may a stair be built with a ring's curve over its stairwell or its landing (see [[Upper floors]]).

A plain wall already on the outline is taken into the ring: a round room can stand against a house as an apse, the house's wall drawn as the curve. A torch on that wall falls to the floor, put out, and a painting falls whole. A door or a window already at a door point stays where it is. A straight wall that already ends in one of the square's corner pockets refuses the ring ("A wall ends in its corner: start it at a step"; see below); a house's corner standing on the square's own corner, or a wall running on through it, does not.

### A straight wall meeting a ring

A straight wall built up to a round room ends at a **step of the ring's outline**: a corner of the stepped outline, where the join is a wall corner and the rooms on either side are closed by the ring's own edges. It may not end in a **corner pocket**, the tiles of the square outside the circle: a wall whose end nearer the ring's centre would be the square's own corner, or on a 7 by 7 the pocket corner on either side of it, with no other wall already standing there, is refused, "Start it at a step of the round wall". Walls go up an edge at a time, so a wall that runs through a pocket is built **from the ring outward**: its first edge from the step corner, each later edge against the one before. That is how a wall along the square's side is built (from the step corner out), and on a 7 by 7 a wall through its pocket to the diagonal corner. A wall square to the ring's side, coming in from outside toward a step corner, is built edge by edge as usual, since each edge ends on the outline or against the edge before it. A wall may run outward from the ring as far as you like, and a wall to a door point's end is a wall to a step like any other. Fences follow the same rule. A door or a window stamped over a wall already standing is not checked, since no wall's end changes; the rule is asked when a wall is built, so taking down the edge nearest the ring leaves the rest standing where it is. A building whose corner would land on the square's own corner, built after the ring, has its first wall refused there, since the rule sees one wall at a time; the second would have closed the corner.

Where the wall meets the ring, its own picture **runs on to the curve**: from the step corner along the outline's edge to where the curve crosses it, and no further (half a tile on a 5 by 5's step corners, about a third of a tile on a 7 by 7's, and almost nothing at a 7 by 7's diagonal corners). A wall square to the ring runs on along its own line into the curve; a wall along the square's side, tangent to the curve, turns down the step edge to it. At a door point's ends, where the curve touches the square, there is nothing to fill. The filler is a picture alone, drawn by each player's game from the walls that stand: nothing is saved or sent. It fades with its wall when that wall is a near wall (see [[Rooms]]), and a faded filler stops at the face of a faded post. The post at the join follows the straight walls' rule with the filler counted as a piece of the joining wall: a wall running on into the curve has no post at the join; a wall along the side, turning down the step edge, gets a corner post there; a plain wall ending at a door point's end gets no post, its end in the curve. A [[Fences|fence]], bars, a [[Cliffs|cliff]], a stone ramp's side, and a [[Battlements|battlement]] take no filler and keep their own ends, a lone fence at a door point's end its end post among them; a [[Castle gates|castle gate]]'s run gets its plain stone wall's.

### Taking one apart

The Take apart tool (X) takes a round room you built **whole**, never one edge alone: pointing at any edge of it lights up the whole ring. A wall or a door it took in when it was built is left as it was, straight again. A ring built with Free building gives nothing back. A round room that is part of the map cannot be taken apart ("That is the village's.").

{{planned doc=50 step=4 note="Rounded corners: a quarter circle joining two straight walls at a room's corner."}}

## Numbers

- Sizes: 5 or 7 tiles across.
- The round stone wall's cost: {{n build.round_stone.cost.stone}} [[Stone|stone]] an edge it lays, never charged while it is buildable only with Free building.
- Its time: {{n build.round_stone.seconds seconds}} for a 5 by 5, two fifths more for a 7 by 7.
- The curve for bodies: a straight piece every {{n census.constants.round.CHORD_DEG}} degrees; the drawn ring: {{n census.constants.render_rings.SEGMENTS}} segments.

## With friends

A guest builds a round room through the same path as the host: their drag sends a build command naming the square's corner and its size, which the host checks and builds on the guest's own character; Take apart works the same way, a command naming the ring. The ring travels as its walls in the map's chunks, so a guest's game rebuilds the room and its curve from them, and each player draws it for themselves. A guest's straight wall toward a ring goes through the same build command and is refused by the host with the same words; the filler at a join is each player's own drawing from the walls they already have, so nothing new travels for it.

## Settings that change it

- **Free building** (default Off): lists the Round stone wall in the palette and lets it be built; without it a round room cannot be built at all. See [[World rules]].

## See also

- [[Hollow Farm's dovecote]]
- [[Walls]], [[Building]], [[Rooms]], [[Openings]]
- [[Upper floors]]

## Sources

<!-- sources at a0cf5a2 -->
- `src/map.js:1580-1646`, `src/round.js:68-100`, `src/round.js:199-232` (at bdaae90): a straight wall toward a ring ends at a vertex of the stepped outline, never at a corner pocket's with no other wall there, "Start it at a step of the round wall"; the outline's and the pockets' vertices; where the curve crosses each outline edge from a vertex (half a tile at most), nothing at a door point's ends (game #589, issue #588)
- `src/map.js:1708-1721` (at bdaae90): a ring refused over a straight wall already ending in one of its corner pockets, "A wall ends in its corner: start it at a step" (game #589)
- `src/map.js:1648-1678`, `src/render/walls.js:464-485`, `src/render/walls.js:496-625`, `src/render/walls.js:826-830` (at bdaae90): the filler, the joining wall's own picture on the outline edge from the vertex to the curve, a picture alone, faded with its wall and cut at a faded post's face; no filler for a fence, bars, a cliff, a ramp's side, or a battlement, a gate's run's plain wall; the post at the join: none where the wall runs on into the curve, the corner's where it turns down the step edge, none for a plain wall at a door point's end, a lone fence there keeping its own (game #589)
- `src/map.js:1229`, `src/placement.js:823` (at bdaae90): `canBuildWall`, the ghost, and a guest's build command meet the rule through the one hook, `map.ringWallProblem` (game #589)
- `src/map.js:1598-1603` (at 8d361e5): upstairs, a void tile under the ring says "A round room upstairs needs a floor under all of it", or over a stair's hole "A stairwell is under it: keep the ring off the stair's hole" (game #576)
- `src/render/storeys.js:457-462` (at 8d361e5): a storey's floor clipped to the curve only on the ring's stepped tiles, the square's corners whole (game #577)
- `src/placement.js:43-50`, `src/placement.js:185-187` (at 8d361e5): a ring's reach with Free building (game #575)
- `src/stations.js:245-248`, `src/placement.js:130` (at 26a0a8f): a body across the outline refuses the ring, a corpse never (game #556, as a straight wall since #553)
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
- `src/render/rings.js:96-258`, `src/render/rings.js:306-352`, `src/round.js:122-140` (at 6eba9c1): from inside, the near half's stretch over the room one faded face at the inner line, the flanks their solid outer face, the cut's ends closed by the wall's thickness, the cap over both, one stone base under the cut and the steps' corners past it (`round.floorReach`), a torch on the cut stretch not drawn (game #545)
- `src/render/rings.js:354-418`, `data/sprites/round_openings_5.json`, `data/sprites/round_openings_7.json` (at 6eba9c1): the doors and windows at the door points from art round 9: the reveal and the frame always, a door shut, open (at e hinged at its other end, `open_a0`), or broken, a window's shutters shut, open (the near points only), or broken, the boards on the face seen, faded with the cut from inside (game #550)
- `src/ground.js:606-697`, `src/map.js:1049-1091`, `src/map.js:1555-1575`, `src/map.js:2675-2680` (at 6eba9c1): a laid floor drawn inside a ring's curve; a ring refused across a stair, a stair refused under a ring's curve (game #549)
- Game #545's pull request: the snag where a step's edge meets the curve inside a 7 by 7, measured on the proving ground and left as it is (the bodies' steps and curve, option A, ruled)
- `src/render/rings.js:1-8`, `src/render/rings.js:96-232` (at a0cf5a2): the ring drawn in two halves, no footing on the ground; a door or a window at a door point cut in the curve and drawn on it, the cap unbroken (game #537)
- `src/map.js:1284-1288`, `src/render/walls.js:273`, `src/render/walls.js:485-491`: a ring's edges and the openings at its door points drawn by the ring, no straight frame and no post (game #537)
- `src/render/rings.js:235-283`, `src/round.js:94-120`: the inside skirt, from where the floor ends to under the inner face, a threshold at a door point, outlined, lit inside the floor's end, on every storey's floor (game #539)
- `tools/mapgen/valley.py:635-638`, `tools/mapgen/proving.py`: the dovecote, the proving ground's room and tower
- `docs/02-decisions.md` (2026-10-27, Round walls are stone only): stone only, a few on the map, built with Free building alone
