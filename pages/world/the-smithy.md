---
title: The smithy
categories: [Places]
aliases: [Smithy, Blacksmith]
summary: The smithy south-east of the square by the river, with the forge and the anvil.
---

{{infobox-place "the smithy"}}

**The smithy** stands south-east of the square, near the river. The forge room has a stone floor, the [[Forge]], the [[Anvil]], a [[Grindstone]], a barrel, a shelf, and a chest that holds the first [[Iron bar|iron bars]] and some [[Charcoal]]. The grindstone sharpens worn blades for nothing and the anvil repairs any worn weapon or tool for a bar or a plank, a few times each (see [[Durability#Repairs|Durability]]). Its two doors on the south side stand open at the start. The forge starts unlit; it burns [[Charcoal]], not logs (see [[Fire]]). Beside it is the smith's home, a small room with a bed, a chest, and a cupboard. Outside are a woodpile, a cart, and a [[Charcoal clamp]] for burning logs into the forge's charcoal.

{{place-contents "the smithy"}}

## The dead

One of the dead stands outside the smithy's open doors at the start.

## Sources

<!-- sources at 3c0a243 -->
- `tools/mapgen/valley.py:365-375`: the smithy south-east of the square by the river, the forge room and the home beside it
- `data/maps/valley.json:3864-3949`, `data/loot.json:16`: the forge room's stone floor, forge, anvil, grindstone, barrel, shelf, and chest, the chest's own table iron bars and charcoal (game #210); its two south doors authored open
- `data/maps/valley.json:3893-3903`, `data/sprites/forge.json`: the forge starts unlit and burns charcoal
- `data/sprites/grindstone.json`, `data/sprites/anvil.json`, `src/repair.js:1-10`: the grindstone sharpens and the anvil repairs, on one count per item (game #416, at 31d330a)
- `data/maps/valley.json:3950-3998`: the home's bed, chest, and cupboard
- `data/maps/valley.json:4002-4032`, `tools/mapgen/valley.py:373-375`: the woodpile, the clamp, and the cart outside
- `tools/mapgen/valley.py:594`, `data/maps/valley.json:11810-11813`: one of the dead outside the open doors

{{navbox places}}
