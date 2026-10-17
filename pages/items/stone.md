---
title: Stone
categories: [Items, Materials]
aliases: [Stones, Cut stone]
summary: Mined from a rock with a pickaxe, or taken from the quarry's stacks of cut stone; nothing uses it yet.
---

{{infobox-item stone}}

**Stone** is mined from a rock with a [[Pickaxe]] in hand, which gives {{n sprites.rock_0.mine.count.0}} and leaves nothing of the rock (see [[Mining]]). [[The quarry]] has rocks to mine and four stacks of cut stone that are searched like a chest. It stacks to {{n items.stone.stack}}. Nothing in the game uses it yet: it is the material stone walls will be built from.

{{planned doc=30 note="Building stone walls from stone, with a hammer in hand (game issue 104)."}}

{{item-sections stone}}

## Sources

<!-- sources at 3f11fdb -->
- `data/items.json:53`: stone, its stack, its note
- `data/sprites/rock_0.json`, `src/mining.js:42-55`: a rock mined for stone, then gone (game #210)
- `data/sprites/stone_stack.json`, `data/loot.json:15`, `tools/mapgen/valley.py:545-546`: the quarry's stacks of cut stone, a container with stone
- `data/recipes.json`, `data/build.json`: nothing takes stone yet

{{navbox items}}
