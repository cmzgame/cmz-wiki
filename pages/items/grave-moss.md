---
title: Grave moss
categories: [Items, Materials, Herbs]
summary: Grave moss, the graveyard's herb, grows wild among the headstones and is gathered by hand only at night; nothing uses it yet.
---

{{infobox-item grave_moss}}

**Grave moss** is the graveyard's herb, one of the eleven [[Herbs]]. It grows only inside the graveyard's wall at [[The chapel]], among the headstones, one plant here and there, never in a patch, and is gathered only at night: the valley keeps about {{n valley.resources.grave_moss.count}}. The plant is drawn small, a pale tuft, and its art has a dark outline all the way round; it sways when clicked or walked through, and does not block anyone. Nothing uses it yet: potions, the herb tea, and seasoning are not built.

## Gathering

Right-click the plant and choose **Gather grave moss**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.herb_grave_moss.gather.seconds seconds}} and gives {{n sprites.herb_grave_moss.gather.count.0}} grave moss, into the bag, or at your feet when the bag is full. No tool is needed. The plant is then gone, and another grows elsewhere in its area {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (see [[Herbs#Coming back|Herbs]]).

By day the entry is greyed, "Gather grave moss (only at night)", and the gather is refused: "It can be gathered only at night." Night is between {{n census.constants.clock.NIGHT_START}} and {{n census.constants.clock.NIGHT_END}} o'clock. One gathered comes back only at night too. "Grave moss" is a placeholder name and kind until the game names the graveyard's herbs.

Its card reads "Grave moss", its kind "Herb", and "Grows wild in the graveyard; gathered by hand, only at night." The game's data records Herbalism {{n sprites.herb_grave_moss.gather.level}} for it; the skills are not built, so no one is refused.

{{planned doc=39 note="Potions, the herb tea, and seasoning from the herbs."}}

{{item-sections grave_moss}}

## With friends

A guest gathers it through the same menu entry, sent to the host with the plant's id; the herb goes into the guest's bag, and the plant's going reaches every player with its part of the map.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json`: the item, its tags (`herb`, `raw`), its icon drawn from `herb_grave_moss`'s design (game #457)
- `data/sprites/herb_grave_moss.json`: the node's `gather` block (item, count, seconds, level, night), `interactable`, its design
- `data/maps/valley.json` `resources.grave_moss`, `tools/mapgen/valley.py:635-643`: its count and where it grows
- `src/map.js:619-653`: where a node may stand
- `src/gather.js:41-85`, `src/gather.js:92-119`: the gather, its reach, the bag or the feet, the node gone and owed back; only at night
- `src/resources.js:36-45`, `src/resources.js:52-90`: back elsewhere in its area after its days, only at night
- `src/item-info.js:72-98`, `src/item-info.js:135-139`: the card's kind and where it grows

{{navbox items}}
