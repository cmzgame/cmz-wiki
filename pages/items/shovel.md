---
title: Shovel
categories: [Items, Tools]
summary: A digging tool made at the workbench: carried, it is what potatoes and garlic are harvested with; one waits in your cottage's chest, and it fights as a weak weapon.
---

{{infobox-item shovel}}

The **shovel** digs. Carried anywhere on you (a hand, the belt, or the bag), it is what a ripe [[Potato]] or [[Garlic]] crop asks for at harvest: without one, the crop's menu reads "Harvest (need a shovel)" and the harvest refuses with "You need a shovel." (see [[Farming]]). It can be held in either hand and swung as a weak weapon that breaks after about {{n items.shovel.weapon.kills}} kills.

## Where to find one

- **The chest in the main room of [[Your cottage]]** holds one, every time, so the potatoes in your own plot can be dug on the first day.
- The [[Workbench]] makes one from a [[Stick]] and a [[Plank]], with a [[Smith's hammer]] on you.

{{planned doc=30 step=4 note="The shovel's own digging: a grave and its goods, the buried chest, a plot dug up."}}

{{item-sections shovel}}

## Sources

<!-- sources at 015eabc -->
- `data/items.json:48`: the shovel: either hand, its verb `dig`, a weapon, its kills
- `data/crops.json`, `src/farming.js:233-243`, `src/interact.js:550-563`: potatoes and garlic harvested with `dig`, carried; "Harvest (need a shovel)" greyed without one (game #222)
- `src/inventory.js:88-108`: a tool carried in a hand, on the belt, or in the bag, found by its verb
- `data/loot.json:6`: a shovel in your cottage's chest (game #222)
- `data/recipes.json:236-255`: the shovel from a stick and a plank, with `build` (a hammer) on you
- `src/items.js:27-37`: durability per hit from kills

{{navbox items}}
