---
title: Mushroom
categories: [Items, Materials, Gatherables]
aliases: [Foraged mushroom]
summary: A mushroom foraged by hand from the mushrooms that grow near trees; it is brewed into the mana potion.
---

{{infobox-item mushroom}}

A **mushroom** is what foraging gives: any of the small [[Mushrooms]] that grow near trees in [[The valley]] and [[The wild]] can be foraged by hand for one. It is a material, kind "Forage" on its card, and it goes into one thing, the [[Mana potion]], one to a potion, with two [[Mageroot]], brewed at a [[Cauldron]] (see [[Potions]]). It is not food, and cooking with it is not built. It is drawn as a pair of small brown-capped mushrooms, in the bag, in the hand, and on the floor.

## Foraging

Right-click a mushroom and choose **Forage mushroom**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.mushroom_0.gather.seconds seconds}} and gives {{n sprites.mushroom_0.gather.count.0}} mushroom ("You forage ... mushroom."), into the bag, or at your feet when the bag is full. No tool is needed, and the mushroom on the ground is then gone. Inside the valley another grows elsewhere near trees {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later (see [[Mushrooms#Coming back|Mushrooms]]); one foraged in the wild, past the valley's edge, is not owed back. A small Herbalism number floats up over you as you forage.

Its card reads "Mushroom", its kind "Forage", "Forage under trees.", and "Goes into: mana potion." The game's data records Herbalism {{n sprites.mushroom_0.gather.level}} for foraging; the skills are not built, so no one is refused.

{{planned doc=39 note="Mushrooms for cooking; whether one is eaten raw, and for how much, is not decided."}}

{{item-sections mushroom}}

## With friends

A guest forages through the same menu entry, sent to the host with the mushroom's id; the mushroom goes into the guest's bag, and the one on the ground goes for every player with its part of the map.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json`: the mushroom: a material tagged `mushroom` (game #457); its icon and picture drawn in art round 5, in place of the generated one (game #519, at ece297c)
- `data/sprites/mushroom_0.json` (and `mushroom_1` to `mushroom_4`): the `gather` block (item, count, seconds, level, the word "Forage")
- `src/gather.js:41-85`, `src/gather.js:92-119`, `src/interact.js:994`, `src/interact.js:1149-1171`: Forage mushroom, its reach, the bag or the feet, the node gone and owed back; a simple action, so `E` runs it
- `src/item-info.js:72-98`, `src/item-info.js:135-139`: the card's kind, Forage, and "Forage under trees."
- `data/maps/valley.json` `resources.mushrooms`, `src/resources.js:36-45`: owed back inside the valley only
- `data/tuning.json:115-123` `floaters.gathers`: the Herbalism number
- `data/recipes.json:1661-1790`, `src/item-info.js:322-324`: brewed into the mana potion at the cauldron; the card's Goes into (game #491, at 0fa02e5)

{{navbox items}}
