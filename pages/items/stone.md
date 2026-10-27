---
title: Stone
categories: [Items, Materials]
aliases: [Stones, Cut stone]
summary: Mined from a rock with a pickaxe, or taken from the quarry's stacks of cut stone; nothing uses it yet.
---

{{infobox-item stone}}

**Stone** is mined from a rock with a [[Pickaxe]] in hand, which gives {{n sprites.rock_0.mine.count.0}} and leaves nothing of the rock; inside the valley another rock rises elsewhere on natural ground {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later, so the valley keeps about {{n valley.resources.stone.count}} (see [[Mining]]). [[The quarry]] has rocks to mine, more stand about the valley, and the quarry has four stacks of cut stone that are searched like a chest. It {{stack stone}}. A [[Campfire]] is made with it at the [[Workbench]] (see Uses below), a [[Fireplace]] is built from {{n build.fireplace.cost.stone}} and a [[Fire pit]] from {{n build.fire_pit.cost.stone}} on the build palette, and it is the material stone walls will be built from.

{{planned doc=30 note="Building stone walls from stone, with a hammer in hand (game issue 104)."}}

{{item-sections stone}}

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:53`: stone, its stack, its note
- `data/sprites/rock_0.json`, `src/mining.js:41-55`: a rock mined for stone, then gone (game #210)
- `data/maps/valley.json` `resources.stone`, `data/tuning.json` `resources.days`, `src/resources.js:33-64`: the valley's count of rocks, and another elsewhere after the days (game #453, at 261cd7a)
- `data/sprites/stone_stack.json`, `data/loot.json:15`, `tools/mapgen/valley.py:546-547`: the quarry's stacks of cut stone, a container with stone
- `data/recipes.json:789-808`: the campfire's make, stone among it; `data/build.json:112-133`: the Fireplace's and the fire pit's stone (game #527, at c3cb736)

{{navbox items}}
