---
title: Pickaxe
categories: [Items, Tools]
aliases: [Pickaxes, Pick]
summary: A tool for mining: in hand, it mines rocks for stone and ore rocks for iron ore; found in the miners' and the quarryman's huts, and made at the anvil.
---

{{infobox-item pickaxe}}

The **pickaxe** is the tool for [[Mining]]. Held in either hand, it adds **Mine stone** to a rock's menu and **Mine iron ore** to an ore rock's: a rock gives [[Stone]] and an ore rock [[Iron ore]], and either is gone; a new one rises elsewhere in its area a game day or two later. Mining does not wear it. It can also be swung as a weak weapon that breaks after about {{n items.pickaxe.weapon.kills}} kills.

## Where to find one

- The chest in the miners' hut by [[The iron workings]], with some iron ore.
- The chest in the quarryman's hut by [[The quarry]], with a [[Smith's hammer]].
- The [[Anvil]] makes one from [[Iron bar|iron bars]] and a [[Stick]], with a hammer in hand.

{{item-sections pickaxe}}

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:38`: the pickaxe: either hand, its verb `mine`, its weapon block
- `src/mining.js:20-26`, `src/interact.js:808-827`: a pickaxe in a hand mines; without one the entries are greyed (game #210)
- `src/mining.js:41-55`, `src/resources.js:33-64`: a mined rock or ore rock gone, and owed back elsewhere in its area (game #453, at 261cd7a)
- `data/loot.json:12-13`, `tools/mapgen/valley.py:536-538`, `tools/mapgen/valley.py:554-557`: the miners' hut's chest and the quarryman's
- `data/recipes.json`: the pickaxe at the anvil, the hammer in hand

{{navbox items}}
