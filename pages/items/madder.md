---
title: Madder
categories: [Items, Materials, Herbs]
summary: Madder, a dye plant, gathered as an herb, grows wild anywhere about the valley and is gathered by hand; nothing uses it yet.
---

{{infobox-item madder}}

**Madder** is a dye plant, gathered as an herb, one of the eleven [[Herbs]]. It grows wild on open grass anywhere about [[The valley]], one plant here and there, never in a patch: the valley keeps about {{n valley.resources.madder.count}}. The plant is drawn small, a green clump with tiny yellow flowers and its red roots showing at its foot, and its art has a dark outline all the way round; it sways when clicked or walked through, and does not block anyone. Nothing uses it yet: the [[Dye vat]] costs nothing, and no colour asks for a dye plant.

## Gathering

Right-click the plant and choose **Gather madder**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.herb_madder.gather.seconds seconds}} and gives {{n sprites.herb_madder.gather.count.0}} madder, into the bag, or at your feet when the bag is full. No tool is needed. The plant is then gone, and another grows elsewhere in its area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (see [[Herbs#Coming back|Herbs]]).

Its card reads "Madder", its kind "Dye plant", and "Grows wild in the valley; gathered by hand." The game's data records Herbalism {{n sprites.herb_madder.gather.level}} for it; the skills are not built, so no one is refused.

{{planned doc=43 note="A dye at the dye vat that costs a dye plant (woad, madder, weld)."}}

{{item-sections madder}}

## With friends

A guest gathers it through the same menu entry, sent to the host with the plant's id; the herb goes into the guest's bag, and the plant's going reaches every player with its part of the map.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json`: the item, its tags (`herb`, `raw`, `dye`), its icon and its picture in the hand drawn in art round 5 as the picked herb, in place of the icon generated from `herb_madder`'s design (game #519, at ece297c; first game #457)
- `data/sprites/herb_madder.json`: the node's `gather` block (item, count, seconds, level), `interactable`, the plant drawn in art round 5, outlined (game #519, at ece297c)
- `data/maps/valley.json` `resources.madder`, `tools/mapgen/valley.py:635-643`: its count and where it grows
- `src/map.js:619-653`: where a node may stand
- `src/gather.js:41-85`, `src/gather.js:92-119`: the gather, its reach, the bag or the feet, the node gone and owed back
- `src/resources.js:36-45`, `src/resources.js:52-90`: back elsewhere in its area after its days
- `src/item-info.js:72-98`, `src/item-info.js:135-139`: the card's kind and where it grows

{{navbox items}}
