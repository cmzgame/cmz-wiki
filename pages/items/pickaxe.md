---
title: Pickaxe
categories: [Items, Tools]
aliases: [Pickaxes, Pick]
summary: A tool for mining: in hand, it mines rocks for stone and ore rocks for iron ore; found in the miners' and the quarryman's huts, and made at the anvil.
---

{{infobox-item pickaxe}}

The **pickaxe** is the tool for [[Mining]]. Held in either hand, it adds **Mine stone** to a rock's menu and **Mine iron ore** to an ore rock's: a rock gives [[Stone]] and is gone, an ore rock gives [[Iron ore]] and stands mined out for some days. Mining does not wear it. It can also be swung as a weak weapon that breaks after about {{n items.pickaxe.weapon.kills}} kills.

## Where to find one

- The chest in the miners' hut by [[The iron workings]], with some iron ore.
- The chest in the quarryman's hut by [[The quarry]], with a [[Smith's hammer]].
- The [[Anvil]] makes one from [[Iron bar|iron bars]] and a [[Stick]], with a hammer in hand.

{{item-sections pickaxe}}

## Sources

<!-- sources at 0e765f7 -->
- `data/items.json:38`: the pickaxe: either hand, its verb `mine`, its weapon block
- `src/mining.js:20-27`, `src/interact.js:623-648`: a pickaxe in a hand mines; without one the entries are greyed (game #210)
- `data/loot.json:12-13`, `tools/mapgen/valley.py:535-537`, `tools/mapgen/valley.py:553-556`: the miners' hut's chest and the quarryman's
- `data/recipes.json`: the pickaxe at the anvil, the hammer in hand

{{navbox items}}
