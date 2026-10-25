---
title: Mana herb
categories: [Items, Materials, Herbs]
summary: Mana herb, an herb that grows only by water, grows wild by water and is gathered by hand; nothing uses it yet.
---

{{infobox-item mana_herb}}

**Mana herb** is an herb that grows only by water, one of the eleven [[Herbs]]. It grows within {{n valley.resources.mana_herb.water tiles}} of water, along the river and the brook west of [[Long Acre]], one plant here and there, never in a patch: the valley keeps about {{n valley.resources.mana_herb.count}}. The plant is drawn small, with blue-teal leaves with a glowing point, and its art has a dark outline all the way round; it sways when clicked or walked through, and does not block anyone. Nothing uses it yet: potions, the herb tea, and seasoning are not built.

## Gathering

Right-click the plant and choose **Gather mana herb**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.herb_mana_herb.gather.seconds seconds}} and gives {{n sprites.herb_mana_herb.gather.count.0}} mana herb, into the bag, or at your feet when the bag is full. No tool is needed. The plant is then gone, and another grows elsewhere in its area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (see [[Herbs#Coming back|Herbs]]).

"Mana herb" is a placeholder name until the game names it.

Its card reads "Mana herb", its kind "Herb", and "Grows wild near water; gathered by hand." The game's data records Herbalism {{n sprites.herb_mana_herb.gather.level}} for it; the skills are not built, so no one is refused.

{{planned doc=39 note="Potions, the herb tea, and seasoning from the herbs."}}

{{item-sections mana_herb}}

## With friends

A guest gathers it through the same menu entry, sent to the host with the plant's id; the herb goes into the guest's bag, and the plant's going reaches every player with its part of the map.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json`: the item, its tags (`herb`, `raw`), its icon drawn from `herb_mana_herb`'s design (game #457)
- `data/sprites/herb_mana_herb.json`: the node's `gather` block (item, count, seconds, level), `interactable`, its design
- `data/maps/valley.json` `resources.mana_herb`, `tools/mapgen/valley.py:635-643`: its count and where it grows
- `src/map.js:619-653`: where a node may stand
- `src/gather.js:41-85`, `src/gather.js:92-119`: the gather, its reach, the bag or the feet, the node gone and owed back
- `src/resources.js:36-45`, `src/resources.js:52-90`: back elsewhere in its area after its days
- `src/item-info.js:72-98`, `src/item-info.js:135-139`: the card's kind and where it grows

{{navbox items}}
