---
title: The tall house
categories: [Places]
aliases: [Tall house, Two-storey house]
summary: A two-storey wooden house east of your cottage, the valley's first upper floor: a stair up to a bedroom with five windows.
---

{{infobox-place "the tall house"}}

**The tall house** is a two-storey wooden house in [[The valley]], east of [[Your cottage]], between the cottage's garden fence and the river. It is the valley's first house with an [[Upper floors|upper floor]]: a stair inside climbs to a first floor over the whole house. Its ground floor is {{n valley.sets.2.buildings.0.rect.2}} by {{n valley.sets.2.buildings.0.rect.3}} tiles inside, and the first floor covers all of it.

## What is there

**The ground floor** has its door on the south side, a window on the west and one on the north, a table with a chair, a chest in the north-east corner, and a lantern in a bracket on the inside of the west wall. A wooden stair climbs west along the middle of the room, away from the camera: its foot is by the east wall, and the way from the door to it runs east of the table. It is a drawn wooden staircase, and its landing upstairs is toward the west end of the first floor.

**The first floor** has five windows, two on the north side and one each on the east, the south, and the west; a bed along the west end of the south wall, a chest in the south-east corner, and a lantern in a bracket on the inside of the north wall.

The chests are searched like any [[Containers|container]]. The bed is one to [[Sleep]] in.

From outside, both storeys stand. Its two storeys' walls are drawn as one face, with no ledge between them, and the corner posts run on in plain wood from one storey to the next. Walk behind the house, north or west of it, and its first floor fades while it covers you, so you are seen through it; in front of it, south or east, it stays solid. A tile or two behind the house, its ground floor still hides you, as any house does. Inside, the first floor is hidden over the house while you are on the ground floor, so you see into the room; walk up the stair and you are on the first floor, the camera following you up (see [[Upper floors]]).

## The dead

None are placed in or round it. The dead that see you go up the stair follow you up it.

## Sources

<!-- sources at a0cf5a2 -->
- `src/render/storeys.js:60-130`, `src/render/walls.js:495-520` (at 6eba9c1): the first floor faded while it covers a player behind the house; a post on a post with no stone foot (game #546)
- `tools/mapgen/valley.py:210-228`: the tall house east of your cottage, between its fence and the river: the ground floor's door, windows, table, chair, chest, and lantern; the first floor's five windows, bed, chest, and lantern; the stair along the middle row climbing west from beside the east wall, the way to its foot east of the table (games #534, #540)
- `src/render/walls.js:290-307`: the two storeys' walls drawn as one face (game #540)
- `src/render/storeys.js:143-238`, `data/sprites/stair_wood.json`: the drawn wooden stair (game #541)
- `data/maps/valley.json` (the set "the tall house"): the building, its `floors`, and its `stairs`
- `src/render/storeys.js:44-57`: the floors above yours hidden over the building you stand in, every storey shown from outside (game #534)
- `src/entities/zombie.js:389-405`: the dead follow by the stair (game #534)

{{navbox places}}
