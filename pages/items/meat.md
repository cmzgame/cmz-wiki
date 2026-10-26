---
title: Meat
categories: [Items, Food]
aliases: [Raw meat, Meats, Venison, Beef, Mutton, Pork]
summary: The six raw meats (hen, rabbit, venison, beef, mutton, and pork) and bacon, butchered from a carcass with a dirk carried; cooked alone at a fire, or used in the pottage, the stew, a pie, smoked meat, and pemmican.
---

**Meat** comes from butchering a carcass with a [[Dirk]] carried (see [[Hunting]]). There are six raw meats, one for each kind of animal but the boar, which gives pork as the pig does, and bacon from a pig. Each is food: it can be eaten from the bag as it is, raw, and heals a little, but cooked it fills and heals far more.

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

## Cooking it

Each raw meat cooks alone at a lit fire into its own dish (see [[Cooking]]):

| Raw | Cooked | Hunger | Heals |
|---|---|---|---|
| [[Raw hen]] | [[Roast hen]] | +{{n items.hen_cooked.hunger}} | +{{n items.hen_cooked.heal}} |
| [[Raw rabbit]] | [[Roast rabbit]] | +{{n items.rabbit_cooked.hunger}} | +{{n items.rabbit_cooked.heal}} |
| [[Raw venison]] | [[Venison steak]] | +{{n items.venison_cooked.hunger}} | +{{n items.venison_cooked.heal}} |
| [[Raw beef]] | [[Beef steak]] | +{{n items.beef_cooked.hunger}} | +{{n items.beef_cooked.heal}} |
| [[Raw mutton]] | [[Roast mutton]] | +{{n items.mutton_cooked.hunger}} | +{{n items.mutton_cooked.heal}} |
| [[Raw pork]] | [[Roast pork]] | +{{n items.pork_cooked.hunger}} | +{{n items.pork_cooked.heal}} |

A recipe that asks for "any meat" takes any of the six raw meats, the kinds mixed as you like; bacon is not one of them, and goes into [[Eggs and bacon]] alone. Raw meat goes into:

- the [[Meat pottage]], beside the meatless [[Plain pottage]], at a fire;
- the [[Hearty stew]], two meats, at a fire;
- a [[Meat pie]], with flour, at the [[Oven]];
- [[Smoked meat]], with a log, at a [[Smoking rack]];
- [[Pemmican]], with a plant and a binder, at a fire.

A meat on your [[Belt]] or in a hand counts and is spent, as one in the bag is.

{{planned doc=45 note="Rot (game #264): raw meat with a short life."}}

## With friends

Butchering is the host's, run by the carcass's id, so a guest who butchers gets the meat in their own bag. Eating is each player's own.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:53-59`: the six raw meats and bacon: food, their hunger and heal, one a cell, placeholder art (game #456)
- `data/animals.json:11-17`: each species' `butcher` yields and their counts
- `src/entities/animal.js:737-822`: a yield's count times the kill's share by expected value; butchering, a dirk carried; to the bag or the feet
- `src/item-info.js:218-226`: the card's line, butchered from which kinds, a dirk carried
- `data/items.json:70-75`, `data/recipes.json:1130-1231`: each raw meat cooked alone at a fire, the cooked meats' numbers (game #462, at d625844)
- `data/recipes.json:1232-1348`, `data/recipes.json:1400-1420`, `data/recipes.json:1554-1573`: the dishes that take the `meat` tag; bacon left out of the tag (game #462, at d625844)
- `src/stations.js:111-146`: a tagged ingredient spent from the belt and a hand as it is counted (the review of #462)

{{navbox items}}
