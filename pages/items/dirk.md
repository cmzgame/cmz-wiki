---
title: Dirk
aliases: [Belt knife, Knife, Hunting knife]
categories: [Items, Tools]
summary: A cutting tool: carried, it skins and butchers a carcass, tears a garment into rags, and makes bows, arrows, rods, snares, and leads at the workbench; the weaver's chest holds one, and the anvil makes more.
---

{{infobox-item knife}}

The **dirk** (the belt knife until 2026-10-19, and the knife before the names were made specific) is a small tool made at the [[Anvil]] from an [[Iron bar]] and a [[Stick]], with a [[Smith's hammer]] in hand. The chest in [[The weaver]] holds one. Carried anywhere, in a hand, on the belt, or in the bag, it cuts: it is what tearing a garment into [[Rag|rags]] at the [[Workbench]] asks for, and making a [[Hunting bow]], [[Arrow|arrows]], a [[Fishing rod]], a [[Snare]], or a [[Lead]] there, and what a ripe [[Cabbage]] or [[Pumpkin]] crop asks for at harvest (see [[Farming]]). Without one, those read "(need a dirk)" or "needs a dirk on you", and refuse with "You need a dirk." It can be held in either hand and swung as a weak weapon that breaks after about {{n items.knife.weapon.kills}} kills.

## Skinning and butchering

Carried, the dirk also skins and butchers an animal's carcass (see [[Hunting]]): **Skin the deer** ({{n animals.work.skin seconds}}) gives its [[Hide]], then **Butcher the deer** ({{n animals.work.butcher seconds}}) its [[Meat|meat]], and a pig's [[Lard]] or a hen's [[Feather|feathers]]. Without a dirk on you both are greyed "(you need a dirk)".

{{item-sections knife}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/recipes.json:738-757`: the knife from a bar and a stick, with a hammer
- `data/loot.json:13`: the weaver's chest's knife (game #216)
- `data/recipes.json:23-124`, `data/recipes.json:271-326`, `src/stations.js:150-160`, `src/inventory.js:88-108`: the tear, the rod, the bow, and the arrows use `cut`, a knife carried (game #222)
- `data/crops.json`, `src/farming.js:236-246`: cabbages and pumpkins harvested with `cut`, carried (game #222)
- `data/items.json:72`: the knife: either hand, a weapon, its kills, its verbs `butcher`, `skin`, and `cut`
- `data/recipes.json:327-364`: the snare and the lead use `cut` (game #456, #460)
- `src/entities/animal.js:773-822`, `src/interact.js:1945-1968`, `data/animals.json:6`: Skin and Butcher, a dirk carried, timed, greyed without one (game #456)
- `src/items.js:27-37`: durability per hit from kills

{{navbox items}}
