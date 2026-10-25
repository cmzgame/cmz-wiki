---
title: Mushroom
categories: [Items, Materials, Gatherables]
aliases: [Foraged mushroom]
summary: A mushroom foraged by hand from the mushrooms that grow near trees; nothing uses it yet.
---

{{infobox-item mushroom}}

A **mushroom** is what foraging gives: any of the small [[Mushrooms]] that grow near trees in [[The valley]] and [[The wild]] can be foraged by hand for one. It is a material, kind "Forage" on its card, and nothing uses it yet: it is not food, and potions and cooking with it are not built. Its icon is a small mushroom drawn in the colours of the ones on the ground.

## Foraging

Right-click a mushroom and choose **Forage mushroom**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.mushroom_0.gather.seconds seconds}} and gives {{n sprites.mushroom_0.gather.count.0}} mushroom ("You forage ... mushroom."), into the bag, or at your feet when the bag is full. No tool is needed, and the mushroom on the ground is then gone. Inside the valley another grows elsewhere near trees {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (see [[Mushrooms#Coming back|Mushrooms]]); one foraged in the wild, past the valley's edge, is not owed back. A small Herbalism number floats up over you as you forage.

Its card reads "Mushroom", its kind "Forage", and "Forage under trees." The game's data records Herbalism {{n sprites.mushroom_0.gather.level}} for foraging; the skills are not built, so no one is refused.

{{planned doc=39 note="Mushrooms for potions and cooking; whether one is eaten raw, and for how much, is not decided."}}

{{item-sections mushroom}}

## With friends

A guest forages through the same menu entry, sent to the host with the mushroom's id; the mushroom goes into the guest's bag, and the one on the ground goes for every player with its part of the map.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json`: the mushroom: a material tagged `mushroom`, its icon generated from a mushroom design in the drawn mushrooms' colours (game #457)
- `data/sprites/mushroom_0.json` (and `mushroom_1` to `mushroom_4`): the `gather` block (item, count, seconds, level, the word "Forage")
- `src/gather.js:41-85`, `src/gather.js:92-119`, `src/interact.js:994`, `src/interact.js:1149-1171`: Forage mushroom, its reach, the bag or the feet, the node gone and owed back; a simple action, so `E` runs it
- `src/item-info.js:72-98`, `src/item-info.js:135-139`: the card's kind, Forage, and "Forage under trees."
- `data/maps/valley.json` `resources.mushrooms`, `src/resources.js:36-45`: owed back inside the valley only
- `data/tuning.json:115-123` `floaters.gathers`: the Herbalism number

{{navbox items}}
