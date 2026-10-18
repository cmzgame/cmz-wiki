---
title: Mining
categories: [Mechanics, The world]
aliases: [Mine, Mine stone, Mine iron ore, Ore rock, Ore rocks, Mined out]
summary: With a pickaxe in hand, mine a rock for stone (the rock is gone) or an ore rock for iron ore (it stands mined out for days, then comes back).
---

**Mining** takes stone and iron ore out of rocks with a [[Pickaxe]] in hand. A plain rock gives [[Stone]] and is gone for good; an ore rock gives [[Iron ore]] and stands mined out for some days of the world's clock, then comes back, so iron never runs out.

## How it works

### Mining a rock

With a pickaxe in a hand, right-click a rock: **Mine stone**, or on an ore rock **Mine iron ore**. Without a pickaxe the entry is greyed, "Mine stone (need a pickaxe)". You must stand within {{n tuning.world.pickReach tiles}} of the rock, with nothing that blocks sight between you (a wall, a shut door, or closed shutters; a fence or an open window does not), so a sealed room stays a cell. The work takes {{n sprites.rock_0.mine.seconds seconds}}. What you mine goes into your bag ("You mine ... stone."), and what does not fit falls at your feet.

| Rock | Gives | Then |
|---|---|---|
| A rock | {{n sprites.rock_0.mine.count.0}} [[Stone]] | It is gone, and the tile is clear. |
| An ore rock | {{n sprites.ore_rock.mine.count.0}} [[Iron ore]] | It stands mined out, its menu saying "Mined out (more in about N days)", for {{n sprites.ore_rock.mine.days}} days, then bears ore again. |

A spent ore rock comes back at the same check of the clock that bears a picked apple tree again; time asleep counts.

### Where the rocks are

- **Ore rocks** stand only at [[The iron workings]] in the east woods, six of them about the mine's mouth.
- **Rocks** stand in [[The quarry]] in the north-east, eight of them, and here and there in [[The wild]] (see [[Rocks]]).

The first pickaxes are in the chests of the miners' hut by the iron workings and the quarryman's hut by the quarry; the [[Anvil]] makes more.

## With friends

A guest mines through the same menu entry, sent to the host with the rock, and checked there against that player's hands, reach, and line of sight; the stone or ore goes into the guest's bag. A rock's going, and an ore rock's mined-out state and the day it comes back, reach every player with the changed part of the map and are saved with the world.

## See also

- [[Pickaxe]], [[Stone]], [[Iron ore]], [[Rocks]]
- [[The iron workings]], [[The quarry]], [[Forge]]

## Sources

<!-- sources at 29a9f8e -->
- `src/mining.js:1-56`: a pickaxe is any item in a hand listing `mine`; the verb's reach and clear line; the count rolled into the bag or at the feet; a rock gone, an ore rock restaged spent with its day (game #210)
- `data/sprites/rock_0.json` (and `rock_1` to `rock_3`), `data/sprites/ore_rock.json`, `data/sprites/ore_rock_spent.json`: each `mine` block (item, count, seconds, gone or spent and days); the spent kind ripens back
- `src/interact.js:626-651`: Mine stone or Mine iron ore, greyed without a pickaxe; "Mined out (more in about N days)"
- `src/fruit.js`: the spent rock turned back on its day, as a picked tree is
- `tools/mapgen/valley.py:525-558`: the iron workings' six ore rocks, the quarry's eight rocks, the two huts' chests
- `data/loot.json:12-13`: a pickaxe in each hut's chest
- `data/tuning.json`: `world.pickReach`

{{navbox making}}
