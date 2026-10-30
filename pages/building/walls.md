---
title: Walls
categories: [Building, Mechanics]
aliases: [Wall, Log wall, Wood wall, Stone wall, Wall materials]
summary: Walls sit on the edges between tiles; their materials, heights, and thickness.
---

**Walls** in the game sit on the edges between tiles, not on the tiles themselves. Each tile can hold a wall on its north edge and on its west edge; its other two sides belong to its neighbours. Doors and windows are walls of another kind (see [[Openings]]). Each floor of a building has walls of its own: a wall stands on one floor, and an [[Upper floors|upper floor]]'s walls stand a storey up, on its own tiles' edges.

## How it works

### Edges

On screen the north edge is the upper-right side of a tile's diamond, and the west edge is the upper-left side. A wall blocks bodies and [[Sight|sight]] across its edge. A plain wall of wood, stone, or logs cannot be damaged by anything: [[The dead|the dead]] never attack one. The one wall that breaks is a [[Fences|fence]], which the dead strike down. Every door and window, whatever its wall is made of, can be broken (see [[Breaking in]]).

### Materials

Every wall has a material, which is its art. The corner posts take the heaviest material that meets there: stone over log over wood.

- **Wood**: {{n sprites.wall_wood.wall.height}} pixels tall, {{n sprites.wall_wood.wall.thickness}} thick, in six kinds: oak, spruce, mahogany, and daub, which the village's cottages and most houses are built in, mixed, and Winter Pine and Bloodbark from beyond the valley. See [[Woods]].
- **Stone**: {{n sprites.wall_stone.wall.height}} pixels tall, {{n sprites.wall_stone.wall.thickness}} thick. The manor, the crypt, and other stone buildings.
- **Log**: {{n sprites.wall_log.wall.height}} pixels tall, {{n sprites.wall_log.wall.thickness}} thick.
- **Fence**: {{n sprites.wall_fence.wall.height}} pixels tall, {{n sprites.wall_fence.wall.thickness}} thick, and see-through. See [[Fences]].
- **Cliff**, bare or grassy: {{n sprites.wall_cliff.wall.height}} pixels tall, {{n sprites.wall_cliff.wall.thickness}} thick, a rock face built only with Free building on, for experimenting with hills. It blocks bodies and sight as stone, and takes no door or window ("Not in a cliff") and no painting or torch ("Not on a cliff"). It is drawn by the plateau a storey up: a face, a back, a corner piece, or nothing where plateau lies on both its sides. See [[Cliffs]].

- **Castle gate**, stone: {{n sprites.wall_stone_gate_2.wall.height}} pixels tall, a stone wall's, two or three tiles wide with a portcullis in an arch, built only with Free building over a plain stone wall's edges. It is a door in each edge of its run, shut or raised; the dead cannot break it. See [[Castle gates]].
- **Battlement**, stone: {{n sprites.wall_battlement.wall.height}} pixels tall, a short parapet with merlons on the outer edge of a wall walk upstairs, standing wholly outside its edge line, built only with Free building. Sight and light pass over it, bodies do not, nothing breaks it, and it takes no door, window, painting, or torch. See [[Battlements]].

A building may mix materials, with a different wall on each side. A door or a window built into a wall is made of that wall's material; in a wall of wood its leaves and shutters may be of another wood (see [[Woods]]).

A house wall of any material is about twice a person's height. Doors and windows sit at the same heights in every wall, whatever its material: a door's top is {{n census.constants.placeholders.DOOR_TOP}} pixels up, clear over a person's head, and a window runs from {{n census.constants.placeholders.WINDOW_SILL}} pixels, about the waist, to {{n census.constants.placeholders.WINDOW_TOP}}, over the head (see [[Openings]]).

An arrow or a throw in flight is stopped by a wall only below that wall's own height: a house wall's, or a fence's much lower one, which an arc can pass over (see [[Archery#What stops a shot|Archery]]). A thrown knife or axe clears a fence and never a house wall, as Michael ruled he prefers (2026-10-27).

### Round walls

A [[Round rooms|round room]]'s wall is stone, drawn as a ring round a square of five or seven tiles, but in the world it is ordinary walls on the edges of the tiles inside the circle: it stops bodies, sight, and light as any stone wall does, and nothing breaks it. Bodies are also held off the drawn curve. Doors and windows go only at its four door points. [[Hollow Farm's dovecote]] is one; players build them only with Free building on. A straight wall built up to a round room ends at a step of the ring's stepped outline, never in one of the square's corner pockets ("Start it at a step of the round wall"; a wall through a pocket is built from the step corner outward), and its picture runs on from the step to the curve, with no post where it runs straight into the curve and a corner post where it turns down the step's edge; fences, bars, cliffs, and battlements keep their own ends. See [[Round rooms#A straight wall meeting a ring|Round rooms]].

### Building and taking apart walls

You can build log walls, walls of each wood, fences, gates, doors, and windows from the palette on N (and, with Free building on, straight stone walls, round stone rooms, castle gates, and battlements), and take apart what you built with X, for half its cost back. A door or a window can be built into any plain wall but a cliff, the village's own included, and a door into a fence as a gate; taking it apart puts the wall back. Walls that are part of the map cannot be taken apart, and a cliff wall is taken apart only while Free building is on. See [[Building]].

### Brackets

Some walls carry a bracket on one side. Most hold one of the village's lanterns, which burn nothing, can be put out and lit again, and cannot be taken. A few hold a [[Torch]], which lights the area while it is lit and burns down; E takes the torch or mounts one you carry. You can put a torch of your own on any plain wall's face but a cliff's with **Place torch**, and it brings its own bracket, which goes when the torch is picked up (see [[Torch posts and brackets#A torch on a wall|Torch posts and brackets]]). When a wall is taken apart, or a door or a window is built into it, its bracket goes: a torch in it falls to the floor, put out, and a lantern goes with the wall.

### Near walls

While you are inside a room, its walls on the camera's side are cut down to a stub at their foot, a door or a window in them drawn whole and faint. See [[Rooms]]. While you are on a stair, the walls along its sides on the camera's side are cut too, on its own floor and round its stairwell above, though both sides of them are one room; those on its far side stand. No wall is built across a stair's run or its top (see [[Upper floors]]).

### Storeys

A wall standing on a wall of the floor below is drawn with it as one face, two storeys tall, and a corner post on a post below runs on into it with no stone foot at the seam. A wall under a floor of the storey above shows no top through that floor while the floor is drawn over it: from upstairs, or from outside, the ground floor's walls stay under the upper floor, and at a stairwell's edge a wall's top meets the floor's edge flush. From inside below, where the floor above is hidden, walls show their tops as before. Upstairs a wall is built only beside a floor ("No floor there"). See [[Upper floors]].

## Numbers

- Wood wall: {{n sprites.wall_wood.wall.height}} tall, {{n sprites.wall_wood.wall.thickness}} thick.
- Stone wall: {{n sprites.wall_stone.wall.height}} tall, {{n sprites.wall_stone.wall.thickness}} thick.
- Log wall: {{n sprites.wall_log.wall.height}} tall, {{n sprites.wall_log.wall.thickness}} thick.
- Fence: {{n sprites.wall_fence.wall.height}} tall, {{n sprites.wall_fence.wall.thickness}} thick.
- Cliff: {{n sprites.wall_cliff.wall.height}} tall, {{n sprites.wall_cliff.wall.thickness}} thick.
- Battlement: {{n sprites.wall_battlement.wall.height}} tall, no thickness of its own.
- Top of a door: {{n census.constants.placeholders.DOOR_TOP}} pixels up.
- Window: from {{n census.constants.placeholders.WINDOW_SILL}} to {{n census.constants.placeholders.WINDOW_TOP}} pixels up.
- A bracket: {{n census.constants.placeholders.BRACKET_UP}} pixels up.
- An arrow or a throw is stopped below a wall's own height; a wall with no height of its own stops it below {{n combat.bow.wallHeight}} pixels.

## See also

- [[Openings]]
- [[Fences]]
- [[Round rooms]]
- [[Cliffs]]
- [[Castle gates]]
- [[Battlements]]
- [[Upper floors]]
- [[Woods]]
- [[Rooms]]
- [[Building]]

## Sources

<!-- sources at 3c0a243 -->
- `src/map.js:1580-1646`, `src/render/walls.js:464-485`, `src/render/walls.js:496-625` (at bdaae90): a straight wall toward a ring ends at a step of its outline, "Start it at a step of the round wall"; its picture run on to the curve, the post at the join (game #589)
- `data/sprites/wall_battlement.json`, `src/battlements.js`, `src/map.js:1200`, `src/map.js:2762` (at 8d361e5): the battlement, a see-through wall of height 28 and no thickness on a wall walk's outer edge, nothing stamped over it (game #574)
- `data/build.json` (`wall_stone`) (at 8d361e5): the straight stone wall in the palette with Free building (game #573)
- `data/sprites/wall_stone_gate_2.json`, `data/sprites/wall_stone_gate_3.json`, `src/map.js:1691-1845` (at 77fee9d): the castle gate is a stone-height wall of kind door on each edge of its run (game #570)
- `data/sprites/wall_cliff.json`, `src/map.js:1164`, `src/paintings.js:57`, `src/placement.js:636`, `src/placement.js:1091`, `src/cliffs.js:1-94` (at 3233696): the cliff wall, its height and thickness, no opening or painting or torch on it, taken apart only with Free building, drawn by its plateau (game #561)
- `src/render/walls.js:268-294`, `src/render/walls.js:355-395`, `src/render/walls.js:495-520`, `src/map.js:1175-1203`, `src/placement.js:638` (at 6eba9c1): the walls along a stair faded for a body on it; a wall or a post under a floor of the storey above with no cap, flush at a stairwell's edge; a post on a post with no stone foot; no wall across a stair; "No floor there" (games #546, #549, #551)
- `src/map.js:61-67`, `src/map.js:1444-1513`, `docs/02-decisions.md` (2026-10-27, Thrown things clear fences, not walls) (at da57a57): walls on each layer; a ring's edges walls of stone, doors only at its door points; the thrown-things ruling (games #533, #536)
- `data/sprites/wall_spruce.json`, `data/sprites/wall_mahogany.json`, `data/sprites/wall_daub.json`, `data/sprites/wall_winterpine.json`, `data/sprites/wall_bloodbark.json`, `data/build.json`, `src/woods.js`: the six woods, each buildable, and a door's or window's own wood (game #348, #351, at 9d1681f)
- `src/map.js:1-6`, `src/map.js:1345-1351`: walls on the `n` and `w` edges of a tile
- `src/map.js:733-744`: doors and windows are walls with a kind
- `src/map.js:1363-1376`, `src/map.js:1522-1576`: a wall blocks sight and bodies
- `src/map.js:733-744`: a plain wall has unending health, a door and a window always health whatever their material; `src/map.js:843-878`: the dead breach only openings
- `src/map.js:678-744`: a fence, alone among walls, has hit points the dead strike away (game #185)
- `src/render/walls.js`: corner posts take the heaviest material
- `data/sprites/wall_wood.json`, `data/sprites/wall_stone.json`, `data/sprites/wall_log.json`, `data/sprites/wall_fence.json`: each material's height and thickness
- `data/maps/valley.json:1295-5226`: which buildings are wood and which stone
- `data/build.json`: the log wall is the only wall you can build
- `src/map.js:2100`, `data/maps/valley.json:5109-5114`: a material per side
- `src/placeholders.js:91-94`, `data/sprites/wall_wood.json` (at 91bafc1): openings and the bracket at fixed heights, the door's top over a player's head and the window from the waist to over the head; the house walls' height, a player about half of it (game #529, the game's docs/52)
- `src/archery.js:179-199` (at 91bafc1): a flight stopped by a wall below the wall's own height, `bow.wallHeight` for a wall with none (game #529)
- `src/placement.js:330-379`, `src/map.js:651`: only built walls can be removed
- `src/map.js:596-606`, `src/map.js:631-676`, `src/placement.js:435`: a door or window built into a plain wall, of its material, a door into a fence; removal puts the wall back
- `src/map.js:262-275`, `src/map.js:1027`, `src/map.js:1097`, `src/setdown.js:234-318` (at 91bafc1): a wall that goes drops its bracket's torch to the floor, put out, a lantern going with it; a torch put on a wall with its own bracket, which goes with it (game #532)
- `src/map.js:137-283`, `src/interact.js:413-473`: brackets, a lantern or a torch; a lantern never out and not taken; E to take or mount a torch, which burns down
- `data/items.json`: the torch's `fire`; `data/sprites/lantern_post.json`; `src/light.js:61-71`: a lantern's light, and a mounted torch's only while lit
- `src/map.js:2149-2155`, `src/map.js:2230`: the village's brackets where the map authors them
- `src/render/walls.js:164-170`, `src/render/walls.js:314-316`: near walls faded
- `src/placement.js:518-576`: what a player built is taken apart with X for half its cost, a door or window leaving the wall again (game #413, at 31d330a)
