---
title: Meat
categories: [Items, Food]
aliases: [Raw meat, Meats, Venison, Beef, Mutton, Pork]
summary: The six raw meats (hen, rabbit, venison, beef, mutton, and pork) and bacon, butchered from a carcass with a dirk carried and eaten raw for now.
---

**Meat** comes from butchering a carcass with a [[Dirk]] carried (see [[Hunting]]). There are six raw meats, one for each kind of animal but the boar, which gives pork as the pig does, and bacon from a pig. Each is food: it is eaten from the bag as it is, raw, and heals a little. Nothing cooks it yet, and no recipe takes it.

| Item | Butchered from | Count, a whole yield | Hunger | Heals |
|---|---|---|---|---|
| [[Raw hen]] | A hen | {{n animals.species.hen.yields.butcher.0.count.0}} | +{{n items.hen_raw.hunger}} | +{{n items.hen_raw.heal}} |
| [[Raw rabbit]] | A rabbit, or a [[Snare]]'s catch | {{n animals.species.rabbit.yields.butcher.0.count.0}} | +{{n items.rabbit_raw.hunger}} | +{{n items.rabbit_raw.heal}} |
| [[Raw venison]] | A deer | {{n animals.species.deer.yields.butcher.0.count.0}}–{{n animals.species.deer.yields.butcher.0.count.1}} | +{{n items.venison_raw.hunger}} | +{{n items.venison_raw.heal}} |
| [[Raw beef]] | A cow | {{n animals.species.cow.yields.butcher.0.count.0}}–{{n animals.species.cow.yields.butcher.0.count.1}} | +{{n items.beef_raw.hunger}} | +{{n items.beef_raw.heal}} |
| [[Raw mutton]] | A sheep | {{n animals.species.sheep.yields.butcher.0.count.0}}–{{n animals.species.sheep.yields.butcher.0.count.1}} | +{{n items.mutton_raw.hunger}} | +{{n items.mutton_raw.heal}} |
| [[Raw pork]] | A boar | {{n animals.species.boar.yields.butcher.0.count.0}}–{{n animals.species.boar.yields.butcher.0.count.1}} | +{{n items.pork_raw.hunger}} | +{{n items.pork_raw.heal}} |
| | A pig | {{n animals.species.pig.yields.butcher.0.count.0}}–{{n animals.species.pig.yields.butcher.0.count.1}} | | |
| [[Bacon]] | A pig | {{n animals.species.pig.yields.butcher.1.count.0}}–{{n animals.species.pig.yields.butcher.1.count.1}} | +{{n items.bacon.hunger}} | +{{n items.bacon.heal}} |

A count is a whole yield. What a carcass gives is that roll times the share the kill left: the whole of it from a bow's kill, less from a melee or thrown weapon or a spell, and nothing from a [[Halberd]]'s (see [[Hunting#What each kind gives|Hunting]]). Butchered meat goes to the bag, or falls at your feet when the bag is full.

Each is one cell of the bag and does not stack. Its hover card gives its name, the kind Food, what eating it heals and fills, and where it comes from: "Butchered from a deer, a dirk carried." All of them are on placeholder art.

{{planned doc=45 step=4 note="Cooking meat: each raw meat cooked alone at a fire into its cooked meat, and raw meat in recipes (a pottage with meat beside the plain one, the hearty stew, eggs and bacon, a meat pie, smoked meat at a smoking rack, pemmican); rot giving raw meat a short life."}}

## With friends

Butchering is the host's, run by the carcass's id, so a guest who butchers gets the meat in their own bag. Eating is each player's own.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:53-59`: the six raw meats and bacon: food, their hunger and heal, one a cell, placeholder art (game #456)
- `data/animals.json:11-17`: each species' `butcher` yields and their counts
- `src/entities/animal.js:737-822`: a yield's count times the kill's share by expected value; butchering, a dirk carried; to the bag or the feet
- `src/item-info.js:214-222`: the card's line, butchered from which kinds, a dirk carried

{{navbox items}}
