---
title: Mageroot
categories: [Items, Materials, Herbs]
aliases: [Mana herb, Mana herbs]
summary: Mageroot, an herb that grows only by water, grows wild by water and is gathered by hand; it is brewed into the mana potion.
---

{{infobox-item mana_herb}}

**Mageroot** is an herb that grows only by water, one of the eleven [[Herbs]]. It was the mana herb until Michael named it on 2026-10-25 ("Mana herb is Mageroot for now"); the game keeps its old id, `mana_herb`, so a save, the map, and the data still call it that. It grows within {{n valley.resources.mana_herb.water tiles}} of water, along the river and the brook west of [[Long Acre]], one plant here and there, never in a patch: the valley keeps about {{n valley.resources.mana_herb.count}}. The plant is drawn small, with blue-teal leaves with a glowing point, and its art has a dark outline all the way round; it sways when clicked or walked through, and does not block anyone. It is brewed at a [[Cauldron]] into the [[Mana potion]], two to a potion, with one [[Mushroom]] (see [[Potions]]); the herb tea and seasoning are not built.

## Gathering

Right-click the plant and choose **Gather mageroot**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.herb_mana_herb.gather.seconds seconds}} and gives {{n sprites.herb_mana_herb.gather.count.0}} mageroot, into the bag, or at your feet when the bag is full. No tool is needed. The plant is then gone, and another grows elsewhere in its area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (see [[Herbs#Coming back|Herbs]]).

Its card reads "Mageroot", its kind "Herb", "Grows wild near water; gathered by hand.", and "Goes into: mana potion." The game's data records Herbalism {{n sprites.herb_mana_herb.gather.level}} for it; the skills are not built, so no one is refused.

{{planned doc=39 note="The herb tea and seasoning from the herbs."}}

{{item-sections mana_herb}}

## With friends

A guest gathers it through the same menu entry, sent to the host with the plant's id; the herb goes into the guest's bag, and the plant's going reaches every player with its part of the map.

## Sources

<!-- sources at dc10b81 -->
- `data/items.json`: the item, named Mageroot, its id `mana_herb` kept, its tags (`herb`, `raw`), its icon drawn from `herb_mana_herb`'s design (game #457, renamed in game #475)
- `data/sprites/herb_mana_herb.json`: the node's `gather` block (item, count, seconds, level), its `name` "mageroot", `interactable`, its design
- `data/maps/valley.json` `resources.mana_herb`, `tools/mapgen/valley.py:635-643`: its count and where it grows
- `src/map.js:630-656`: where a node may stand
- `src/gather.js:44-47`: the menu's words, the verb and the item's name in lower case ("Gather mageroot")
- `src/gather.js:32-84`, `src/gather.js:86-115`: the gather, its reach, the bag or the feet, the node gone and owed back
- `src/resources.js:35-45`, `src/resources.js:52-89`: back elsewhere in its area after its days
- `src/item-info.js:78-101`, `src/item-info.js:220`: the card's kind and where it grows
- `data/recipes.json:1661-1790`, `src/item-info.js:322-324`: brewed into the mana potion at the cauldron; the card's Goes into (game #491, at 0fa02e5)

{{navbox items}}
