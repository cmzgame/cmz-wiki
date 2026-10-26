---
title: Wolfsbane
categories: [Items, Materials, Herbs]
summary: Wolfsbane, a poisonous herb, grows wild near trees and is gathered by hand; it is brewed into strong poison.
---

{{infobox-item wolfsbane}}

**Wolfsbane** is a poisonous herb, one of the eleven [[Herbs]]. It grows within {{n valley.resources.wolfsbane.near tiles}} of a tree, which in the wooded valley is most of its open ground, one plant here and there, never in a patch: the valley keeps about {{n valley.resources.wolfsbane.count}}. The plant is drawn small, with blue-violet hoods, and its art has a dark outline all the way round; it sways when clicked or walked through, and does not block anyone. It is brewed at a [[Cauldron]] into [[Strong poison]], two to a vial, with one [[Grave moss]] (see [[Potions]]); the herb tea and seasoning are not built.

## Gathering

Right-click the plant and choose **Gather wolfsbane**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.herb_wolfsbane.gather.seconds seconds}} and gives {{n sprites.herb_wolfsbane.gather.count.0}} wolfsbane, into the bag, or at your feet when the bag is full. No tool is needed. The plant is then gone, and another grows elsewhere in its area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (see [[Herbs#Coming back|Herbs]]).

Its card reads "Wolfsbane", its kind "Herb", "Grows wild near trees; gathered by hand.", and "Goes into: strong poison." The game's data records Herbalism {{n sprites.herb_wolfsbane.gather.level}} for it; the skills are not built, so no one is refused.

{{planned doc=39 note="The herb tea and seasoning from the herbs."}}

{{item-sections wolfsbane}}

## With friends

A guest gathers it through the same menu entry, sent to the host with the plant's id; the herb goes into the guest's bag, and the plant's going reaches every player with its part of the map.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json`: the item, its tags (`herb`, `raw`, `poison`), its icon drawn from `herb_wolfsbane`'s design (game #457)
- `data/sprites/herb_wolfsbane.json`: the node's `gather` block (item, count, seconds, level), `interactable`, its design
- `data/maps/valley.json` `resources.wolfsbane`, `tools/mapgen/valley.py:635-643`: its count and where it grows
- `src/map.js:619-653`: where a node may stand
- `src/gather.js:41-85`, `src/gather.js:92-119`: the gather, its reach, the bag or the feet, the node gone and owed back
- `src/resources.js:36-45`, `src/resources.js:52-90`: back elsewhere in its area after its days
- `src/item-info.js:72-98`, `src/item-info.js:135-139`: the card's kind and where it grows
- `data/recipes.json:1661-1790`, `src/item-info.js:322-324`: brewed into strong poison at the cauldron; the card's Goes into (game #491, at 0fa02e5)

{{navbox items}}
