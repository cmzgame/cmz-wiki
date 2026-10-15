---
title: Fences
categories: [Building, Mechanics]
aliases: [Fence, Gate, Gates, See-through walls]
summary: Fences are low walls you can see and light through; they bound no room, and their gates are doors.
---

**Fences** are low [[Walls|walls]] you cannot walk through but can see through. Light passes them too, and they never make a [[Rooms|room]]: a fenced yard or field stays outdoors. A **gate** is a door in a fence.

## How it works

### See-through walls

A fence blocks bodies like any wall, but [[Sight|sight]] and [[Light|light]] pass over it. Because it is see-through, the room fill passes it, so whatever it closes in is outdoors. A fenced plot is not somewhere to [[Sleep|sleep]].

A fence is {{n sprites.wall_fence.wall.height}} pixels tall and {{n sprites.wall_fence.wall.thickness}} thick. It is still placeholder art.

### Gates

A gate is a door in a fence. Tap E to open or close it, as with any door (see [[Openings]]). A shut gate blocks bodies, but you can still see through it.

### Where they are

The valley has fences round the graveyard, your cottage's garden, the inn's yard, the manor's garden, and the merchant's yard. Some houses also use a fence as a partition inside.

Fences cannot be built.

## Numbers

- Height: {{n sprites.wall_fence.wall.height}} pixels.
- Thickness: {{n sprites.wall_fence.wall.thickness}} pixels.

## See also

- [[Walls]]
- [[Rooms]]
- [[Openings]]
- [[Sight]]

## Sources

<!-- sources at 9205ad7 -->
- `data/sprites/wall_fence.json`: the fence's height, thickness, and `seeThrough`
- `src/map.js:1103-1112`: a see-through wall passes sight and light and bounds no room
- `src/map.js:1341-1393`: the room fill passes a see-through wall
- `src/entities/player.js:201`: a bed outdoors says "Not out here."
- `src/map.js:568-573`: a shut gate blocks bodies as a door does
- `src/map.js:1021-1028`: a shut gate in a see-through fence still passes sight
- `data/maps/valley.json:1110-1124`: the graveyard's fence feature and its gate
- `data/maps/valley.json:1279-1290`, `data/maps/valley.json:2042-2053`, `data/maps/valley.json:2779-2790`, `data/maps/valley.json:3147-3158`: the fences of your cottage, the inn, the manor, and the merchant's house
- `data/maps/valley.json:4099-4113`, `data/maps/valley.json:4655-4669`: fence partitions inside the cooper's long house and the second cottage on the lane
- `data/build.json`: only the log wall, door, and window can be built
