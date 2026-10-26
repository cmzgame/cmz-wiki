---
title: Mining
categories: [Mechanics, The world]
aliases: [Mine, Mine stone, Mine iron ore, Ore rock, Ore rocks, Mined out]
summary: With a pickaxe in hand, mine a rock for stone, an ore rock for iron ore, or a salt rock for salt; the rock is gone, and another rises out of the ground elsewhere in its area a game day or two later.
---

**Mining** takes stone, iron ore, and salt out of rocks with a [[Pickaxe]] in hand. A plain rock gives [[Stone]], an ore rock [[Iron ore]], and a salt rock [[Salt]], and each is then gone. Inside [[The valley]], another rises out of the ground somewhere else in its area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later, so the valley keeps about the same number of each and none runs out.

## How it works

### Mining a rock

With a pickaxe in a hand, right-click a rock: **Mine stone**, on an ore rock **Mine iron ore**, or on a salt rock **Mine salt**. Without a pickaxe the entry is greyed, "Mine stone (need a pickaxe)". You must stand within {{n tuning.world.pickReach tiles}} of the rock, with nothing that blocks sight between you (a wall, a shut door, or closed shutters; a fence or an open window does not), so a sealed room stays a cell. The work takes {{n sprites.rock_0.mine.seconds seconds}}. What you mine goes into your bag ("You mine ... stone."), and what does not fit falls at your feet.

| Rock | Gives | Then |
|---|---|---|
| A rock | {{n sprites.rock_0.mine.count.0}} [[Stone]] | It is gone, and the tile is clear. |
| An ore rock | {{n sprites.ore_rock.mine.count.0}} [[Iron ore]] | It is gone, and the tile is clear. |
| A salt rock | {{n sprites.salt_rock.mine.count.0}} [[Salt]], in {{n sprites.salt_rock.mine.seconds seconds}} | It is gone, and the tile is clear. |

An ore rock no longer stands mined out and comes back in place: a mined one goes like any rock.

### Coming back

The valley keeps a count of each kind: {{n valley.resources.stone.count}} rocks across the valley, {{n valley.resources.ore.count}} ore rocks in the ore area, [[The iron workings]] and the woods round them, and {{n valley.resources.salt.count}} salt rocks in the same ore area. Each rock mined inside its area is owed back: {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (the time is rolled for each), a new one rises at a random spot elsewhere in the same area, never on the tile the last one was taken from. The game looks for rocks that are due every {{n tuning.resources.checkSeconds seconds}} of its clock; time asleep counts. If none of its {{n tuning.resources.tries}} tries finds a free spot, the rock waits for the next look.

A new rock or ore rock grows only on natural ground:

- **Stone** on plain grass anywhere in the valley, and on the dirt floor of [[The quarry]].
- **Ore** and **salt** on plain grass in the ore area, inside the iron workings too.
- Never on a road, water, a built floor, tilled soil, or a rug; never under anything, on things lying on the ground, against a wall, inside a room, or inside a fenced yard or pen (a player's own fenced yard too); never on the huts and buildings or the ground kept clear round them; and never under anyone, living or dead, or an animal.

It **rises out of the ground** over {{n tuning.resources.riseSeconds seconds}}: it comes up through the ground line from below, whole, with a little soil at its foot that fades and a puff of dust thrown up and out as it starts. It **shudders** as it rises, a few sideways jolts of a pixel or two, easing to still as it settles, as if the ground had shifted and forced it to the surface (Michael, 2026-10-25: a cinematic entrance, with no lore behind it). The soil stays still while the rock jolts. A rock, an ore rock, and a salt rock all rise this way. It rises whether anyone is watching or not, and is outlined by Object Highlight once it is up.

A rock mined in [[The wild]], past the valley's edge, is not owed back: it is gone for good.

### Where the rocks are

- **Ore rocks** stand at [[The iron workings]] in the east woods, six of them about the mine's mouth at first; new ones rise anywhere in the ore area.
- **Salt rocks**, {{n valley.resources.salt.count}} of them, stand at spots chosen at random in the same ore area, the same in every new world.
- **Rocks:** the valley starts with {{n valley.resources.stone.count}}, eight of them in [[The quarry]] in the north-east and the rest at spots chosen at random on natural ground about the valley, the quarry's floor included, the same spots in every new world. More stand here and there in [[The wild]] (see [[Rocks]]).

The first pickaxes are in the chests of the miners' hut by the iron workings and the quarryman's hut by the quarry; the [[Anvil]] makes more.

## Numbers

- Stone in the valley: {{n valley.resources.stone.count}} rocks.
- Ore rocks: {{n valley.resources.ore.count}}.
- Salt rocks: {{n valley.resources.salt.count}}.
- A mined rock's replacement: {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days.
- The look for rocks that are due: every {{n tuning.resources.checkSeconds seconds}}, {{n tuning.resources.tries}} tries each.
- The rise: {{n tuning.resources.riseSeconds seconds}}, with its shudder.

## With friends

A guest mines through the same menu entry, sent to the host with the rock, and checked there against that player's hands, reach, and line of sight; the stone or ore goes into the guest's bag. A rock's going reaches every player with the changed part of the map. The rocks still owed are the host's and are saved with the world; a new rock reaches every player with its part of the map, and every screen draws it rising from the same moment, with the same shudder: it is worked out from the rock's id and that moment, so nothing about it is sent.

## See also

- [[Pickaxe]], [[Stone]], [[Iron ore]], [[Salt]], [[Rocks]]
- [[Clay]], dug with a shovel rather than mined
- [[The iron workings]], [[The quarry]], [[Forge]]
- [[Levers]]

## Sources

<!-- sources at dc10b81 -->
- `src/mining.js:19-55`: a pickaxe is any item in a hand listing `mine`; the verb's reach and clear line; the count rolled into the bag or at the feet; the rock owed to its area, then gone (games #210 and #453)
- `data/sprites/rock_0.json` (and `rock_1` to `rock_3`), `data/sprites/ore_rock.json`: each `mine` block (item, count, seconds, `gone`); the spent ore rock retired (game #453, at 261cd7a)
- `src/interact.js:851-871`: Mine stone, Mine iron ore, or Mine salt, greyed without a pickaxe
- `data/maps/valley.json` `resources`, `src/map.js:691-725`: each kind's count, area, and floors; the areas clipped to the valley's bounds (game #453)
- `src/resources.js:35-89`, `data/tuning.json` `resources`: a take inside its area owed back after `days`, rolled; the look every `checkSeconds`, `tries` spots, never the tile it was taken from, never under a body (game #453)
- `src/map.js:630-656`: where a node may stand: its area, its floors and its own place's, nothing on the tile, no wall, not in a room or a fenced yard, no body (game #453)
- `src/map.js:2680-2714`: the valley's count made up at the load, on the authored tiles, by hash; the huts kept clear in the open places (game #453)
- `src/resources.js:91-101`, `src/render/props.js:122-149`, `src/render/props.js:212`, `data/tuning.json` `resources.riseSeconds`: the rise from below the ground line, the soil and dust, outlined once up (game #453, at 261cd7a)
- `src/resources.js:103-123`, `src/render/props.js:122-149`, `src/render/props.js:212`: the shudder: whole pixels to one side, a few beats alternating and easing to still, from the sim clock and the prop's id; the soil still, the dust one puff (game #475)
- `data/sprites/salt_rock.json`, `data/maps/valley.json` `resources.salt`, `tools/mapgen/valley.py:645`: the salt rock's `mine` block, its count in the ore area, the iron workings open to them, rising (game #457)
- `tools/mapgen/valley.py:526-559`: the iron workings' six ore rocks, the quarry's eight rocks, the two huts' chests
- `data/loot.json:12-13`: a pickaxe in each hut's chest
- `data/tuning.json`: `world.pickReach`

{{navbox making}}
