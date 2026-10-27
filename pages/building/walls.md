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

A building may mix materials, with a different wall on each side. A door or a window built into a wall is made of that wall's material; in a wall of wood its leaves and shutters may be of another wood (see [[Woods]]).

A house wall of any material is about twice a person's height. Doors and windows sit at the same heights in every wall, whatever its material: a door's top is {{n census.constants.placeholders.DOOR_TOP}} pixels up, clear over a person's head, and a window runs from {{n census.constants.placeholders.WINDOW_SILL}} pixels, about the waist, to {{n census.constants.placeholders.WINDOW_TOP}}, over the head (see [[Openings]]).

An arrow or a throw in flight is stopped by a wall only below that wall's own height: a house wall's, or a fence's much lower one, which an arc can pass over (see [[Archery#What stops a shot|Archery]]). A thrown knife or axe clears a fence and never a house wall, as Michael ruled he prefers (2026-10-27).

### Round walls

A [[Round rooms|round room]]'s wall is stone, drawn as a ring round a square of five or seven tiles, but in the world it is ordinary walls on the edges of the tiles inside the circle: it stops bodies, sight, and light as any stone wall does, and nothing breaks it. Bodies are also held off the drawn curve. Doors and windows go only at its four door points. [[Hollow Farm's dovecote]] is one; players build them only with Free building on.

### Building and taking apart walls

You can build log walls, walls of each wood, fences, gates, doors, and windows from the palette on N (and, with Free building on, round stone rooms), and take apart what you built with X, for half its cost back. A door or a window can be built into any plain wall, the village's own included, and a door into a fence as a gate; taking it apart puts the wall back. Walls that are part of the map cannot be taken apart. See [[Building]].

### Brackets

Some walls carry a bracket on one side. Most hold one of the village's lanterns, which burn nothing, can be put out and lit again, and cannot be taken. A few hold a [[Torch]], which lights the area while it is lit and burns down; E takes the torch or mounts one you carry. You can put a torch of your own on any plain wall's face with **Place torch**, and it brings its own bracket, which goes when the torch is picked up (see [[Torch posts and brackets#A torch on a wall|Torch posts and brackets]]). When a wall is taken apart, or a door or a window is built into it, its bracket goes: a torch in it falls to the floor, put out, and a lantern goes with the wall.

### Near walls

While you are inside a room, its walls on the camera's side are drawn faded. See [[Rooms]].

## Numbers

- Wood wall: {{n sprites.wall_wood.wall.height}} tall, {{n sprites.wall_wood.wall.thickness}} thick.
- Stone wall: {{n sprites.wall_stone.wall.height}} tall, {{n sprites.wall_stone.wall.thickness}} thick.
- Log wall: {{n sprites.wall_log.wall.height}} tall, {{n sprites.wall_log.wall.thickness}} thick.
- Fence: {{n sprites.wall_fence.wall.height}} tall, {{n sprites.wall_fence.wall.thickness}} thick.
- Top of a door: {{n census.constants.placeholders.DOOR_TOP}} pixels up.
- Window: from {{n census.constants.placeholders.WINDOW_SILL}} to {{n census.constants.placeholders.WINDOW_TOP}} pixels up.
- A bracket: {{n census.constants.placeholders.BRACKET_UP}} pixels up.
- An arrow or a throw is stopped below a wall's own height; a wall with no height of its own stops it below {{n combat.bow.wallHeight}} pixels.

## See also

- [[Openings]]
- [[Fences]]
- [[Round rooms]]
- [[Upper floors]]
- [[Woods]]
- [[Rooms]]
- [[Building]]

## Sources

<!-- sources at 3c0a243 -->
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
