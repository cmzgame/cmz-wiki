---
title: Farming
categories: [Mechanics, The world]
aliases: [Farm, Till, Tilling, Till the soil, Plant, Planting, Watering crops, Harvest, Harvesting, Growing]
summary: Till grass or dirt with a hoe, plant a seed, keep it watered, and harvest it with E when it is ready, with the crop's tool on you, for seeds back.
---

**Farming** is growing [[Crops|crops]]: till bare ground with a [[Hoe]], plant a seed in the soil, keep it watered from a [[Waterskin]] or a [[Bucket]], and harvest it when it is ready, for its food and {{n crops.crops.potato.seeds}} seeds back. Crops grow on the world's clock, and only while their soil is wet; dry soil pauses them and never kills them. The plot by [[Your cottage]] has potatoes and cabbages already growing, some of them ready.

## How it works

### Tilling

With a hoe in a hand, right-click a tile of bare grass or dirt with nothing on it: **Till the soil**. It turns the tile into furrowed farm soil, the furrows running the way you face the tile. Without a hoe there is no Till the soil. Refusals: "You need a hoe in hand.", "It is already tilled.", "Nothing grows there: it wants bare grass or dirt."

### Planting

On tilled soil with nothing on it, the menu offers **Plant** for each kind of seed you carry: "Plant potato", "Plant cabbage", and so on. One seed goes in, and the crop starts at its first stage with its soil wet, its rows along the furrows: "You plant potato seed." A [[Use]] of a seed on soil does the same.

There are six seeds: [[Potato seed]], [[Cabbage seed]], [[Garlic seed]], [[Pumpkin seed]], [[Rye seed]], and [[Flax seed]]. Rye's harvest is [[Grain]], and flax's is [[Flax]], for the [[Loom]].

**Every crop can be grown in play.** The granaries of [[Hollow Farm]] and [[The mill]] each hold seed of every crop, and are never refilled; after that, each harvest gives its seeds back. The plot by [[Your cottage]] has potatoes and cabbages, [[Hollow Farm]]'s fields pumpkins, potatoes, cabbages, and garlic, and [[Long Acre]]'s rye and flax, all growing from the start, and the weaver's chest holds flax seed too. The great barn at Hollow Farm has a hoe on its rack.

### Watering and growing

A crop's soil stays wet for {{n crops.soil.wetDays}} days after it is planted or watered. Growth runs only while the soil is wet: a crop with dry soil stops where it is, its menu says "Dry: waiting for water", and it waits as long as it must. Nothing kills it.

**Water** on a crop's menu, or a [[Use]] of a waterskin on it, takes {{n crops.soil.fillCost}} of the water from a skin you carry, the fullest that has enough, and wets the soil again: "The water soaks in." With no skin that has enough, the entry reads "Water (no water in a skin)", greyed. A [[Bucket]] waters every crop in the three by three round where you pour it, in one go.

Each crop has three stages: young, growing, and ready. While it grows, its menu says how long it has to go: "Growing (ready in about N days)". Time asleep counts, since sleep runs the clock fast.

### Harvesting

A ready crop's menu offers **Harvest** with the crop's name, "Harvest potatoes", and E does it, with the crop's tool anywhere on you (a hand, the belt, or the bag): a [[Scythe]] for rye, a [[Shovel]] for potatoes and garlic, a [[Dirk]] for cabbages and pumpkins, and nothing for flax (the table below). Without the tool, the entry reads "Harvest potatoes (need a shovel)", or whichever crop and tool it is, greyed, and E passes it by. Your cottage's chest holds a shovel from the start, so its potatoes can be dug on day one; its cabbages wait for a dirk. A harvest gives the crop's food and {{n crops.crops.potato.seeds}} of its seeds into your bag ("You harvest potato x3 and potato seed x2."), with anything that does not fit falling at your feet. The tile stays tilled soil, ready for the next seed. A [[Scythe]] harvests the ready grain on the three tiles ahead at a swing.

### Inspect

Every crop's menu has **Inspect**: a line saying what it is, whether it is ready or how many days it has left, whether it is watered or dry, whether it is fertilized (nothing fertilizes yet, so never), and what harvests it; for example "Cabbage: ready to harvest; watered; not fertilized; harvest with a dirk." While the line shows, the crop's tile is outlined in gold on the ground, so you can tell which of a row of crops it speaks of. It works on any crop you can see within {{n census.constants.interact.INSPECT_RANGE tiles}}, without walking there, and only you see it.

### Reach and walls

Every farming action needs you within {{n tuning.world.pickReach tiles}} of the tile, with a clear line to it: a wall, a shut door, or closed shutters stop it, while a fence or an open window does not. So a sealed room is still a cell; you cannot farm a plot through its wall. The same rule holds for picking apples (see [[Trees]]).

## Numbers

{{crops-table}}

The days count only while the soil is wet.

- Soil stays wet after planting or watering: {{n crops.soil.wetDays}} days.
- A watering takes {{n crops.soil.fillCost}} of a waterskin's water.
- Tilling takes {{n crops.soil.seconds.till seconds}}, planting {{n crops.soil.seconds.plant seconds}}, watering {{n crops.soil.seconds.water seconds}}, harvesting {{n crops.soil.seconds.harvest seconds}}.
- Reach: {{n tuning.world.pickReach tiles}}.

## With friends

A guest tills, plants, waters, and harvests through the same menu entries and Use, sent to the host with the tile or the crop, and checked there against that player's hands, reach, and line of sight. The seed and the water come out of the guest's own bag, and the harvest goes into it. A crop's growth is kept on the crop itself, so the soil, the crops, and their stages reach every player with the changed part of the map and are saved with the world.

## See also

- [[Crops]], [[Hoe]], [[Waterskin]], [[Bucket]], [[Scythe]], [[Food]], [[Cooking]]
- [[Your cottage]]

## Sources

<!-- sources at 3c0a243 -->
- `data/crops.json`, `src/interact.js:551-611`, `src/inspect-mark.js`, `src/render/marks.js`: the Harvest label names the crop; Inspect's line and its gold tile, this client's own, never sent (game #302, at ea2bba7)
- `src/farming.js:1-11`, `data/crops.json`: growth derived from the clock while wet, never stepped; a dry crop pauses and never dies; each crop's stage days, harvest, seed, and seeds back; the soil's wet days, the water a watering takes, the actions' seconds (game #206)
- `src/farming.js:160-177`, `src/interact.js:573-597`: Till the soil with a hoe in a hand on bare grass or dirt, the furrows by the way you face it; its refusals
- `src/farming.js:179-202`, `data/items.json:60-65`: Plant for each seed carried, on empty soil; the crop starts wet; the six seeds
- `src/farming.js:216-231`, `src/farming.js:102-109`, `src/interact.js:550-571`: Water, from the fullest skin with enough; greyed without; "The water soaks in."
- `src/farming.js:64-95`, `src/interact.js:562-567`: the stage and the days left read from the growth; "Growing (ready in about N days)", "Dry: waiting for water"
- `src/farming.js:233-259`, `src/farming.js:261-296`: Harvest: the food and the seeds into the bag, the rest at your feet, the tile left as soil; the scythe's swing
- `data/crops.json`, `src/farming.js:240-241`, `src/interact.js:560-562`, `src/inventory.js:88-108`: each crop's `tool`, a verb, carried: rye `harvest` (a scythe), potato and garlic `dig` (a shovel), cabbage and pumpkin `cut` (a knife), flax none; "Harvest (need a ...)" greyed without it (game #222)
- `src/farming.js:111-118`, `data/tuning.json:116`: every farming verb within `pickReach` and with a clear line (game #206)
- `src/farming.js:298-319`, `src/game.js:558`: the crops' pictures follow their stages at each check
- `tools/mapgen/valley.py:191`, `tools/mapgen/mapgen.py:216-231`: the cottage's plot, potatoes and cabbages at the middle and last stages
- `data/loot.json:8-11`: the barn rack's hoe and the two granaries' seed of every crop (game #219), the weaver's chest's flax seed (game #216)
- `tools/mapgen/valley.py:408-523`: Hollow Farm's and Long Acre's fields at mixed stages
- `src/bucket.js:1-126`: the bucket's fill and pour (game #211)
- `data/interactions.json:16-22`: the Use rows: the hoe on grass or dirt, a seed on soil, the waterskin on a crop or soil
- `src/map.js:1928-1929`: a crop the map placed settled live at its stage the first time it is looked at

{{navbox making}}
