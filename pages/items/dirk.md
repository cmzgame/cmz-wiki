---
title: Dirk
aliases: [Belt knife, Knife]
categories: [Items, Tools]
summary: A cutting tool: carried, it lets you tear a garment into rags at the workbench; the weaver's chest holds one, and the anvil makes more.
---

{{infobox-item knife}}

The **dirk** (the belt knife until 2026-10-19, and the knife before the names were made specific) is a small tool made at the [[Anvil]] from an [[Iron bar]] and a [[Stick]], with a [[Smith's hammer]] in hand. The chest in [[The weaver]] holds one. Carried anywhere, in a hand, on the belt, or in the bag, it cuts: it is what tearing a garment into [[Rag|rags]] at the [[Workbench]] asks for, and making a [[Hunting bow]], [[Arrow|arrows]], or a [[Fishing rod]] there, and what a ripe [[Cabbage]] or [[Pumpkin]] crop asks for at harvest (see [[Farming]]). Without one, those read "(need a dirk)" or "needs a dirk on you", and refuse with "You need a dirk." It can be held in either hand and swung as a weak weapon that breaks after about {{n items.knife.weapon.kills}} kills.

{{planned doc=30 note="The knife's other verbs, butchering and skinning, with the animals."}}

{{item-sections knife}}

## Sources

<!-- sources at 3c0a243 -->
- `data/recipes.json:505-524`: the knife from a bar and a stick, with a hammer
- `data/loot.json:11`: the weaver's chest's knife (game #216)
- `data/recipes.json:23-124`, `data/recipes.json:256-311`, `src/stations.js:145-154`, `src/inventory.js:88-108`: the tear, the rod, the bow, and the arrows use `cut`, a knife carried (game #222)
- `data/crops.json`, `src/farming.js:233-243`: cabbages and pumpkins harvested with `cut`, carried (game #222)
- `data/items.json:49`: the knife: either hand, a weapon, its kills, its verbs `butcher`, `skin` (not built), and `cut`
- `src/items.js:27-37`: durability per hit from kills

{{navbox items}}
