---
title: Farming
categories: [Mechanics, The world]
aliases: [Farm, Till, Tilling, Till the soil, Plant, Planting, Watering crops, Harvest, Harvesting, Growing]
summary: Till grass or dirt with a hoe, plant a seed, keep it watered, and harvest it with E when it is ready, with seeds back.
---

**Farming** is growing [[Crops|crops]]: till bare ground with a [[Hoe]], plant a seed in the soil, keep it watered from a [[Waterskin]], and harvest it when it is ready, for its food and {{n crops.crops.potato.seeds}} seeds back. Crops grow on the world's clock, and only while their soil is wet; dry soil pauses them and never kills them. The plot by [[Your cottage]] has potatoes and cabbages already growing, some of them ready.

## How it works

### Tilling

With a hoe in a hand, right-click a tile of bare grass or dirt with nothing on it: **Till the soil**. It turns the tile into furrowed farm soil, the furrows running the way you face the tile. Without a hoe there is no Till the soil. Refusals: "You need a hoe in hand.", "It is already tilled.", "Nothing grows there: it wants bare grass or dirt."

### Planting

On tilled soil with nothing on it, the menu offers **Plant** for each kind of seed you carry: "Plant potato", "Plant cabbage", and so on. One seed goes in, and the crop starts at its first stage with its soil wet, its rows along the furrows: "You plant potato seed." A [[Use]] of a seed on soil does the same.

There are five seeds: [[Potato seed]], [[Cabbage seed]], [[Garlic seed]], [[Pumpkin seed]], and [[Rye seed]]. Rye's harvest is [[Grain]].

**Only potatoes and cabbages can be grown in play today.** Their seeds come from harvesting the crops in your cottage's plot, the only crops the valley places; nothing gives a garlic, pumpkin, or rye seed yet.

{{planned doc=30 note="Seeds for every crop, from the granaries, the storehouse, and the farms (game issue 201)."}}

### Watering and growing

A crop's soil stays wet for {{n crops.soil.wetDays}} days after it is planted or watered. Growth runs only while the soil is wet: a crop with dry soil stops where it is, its menu says "Dry: waiting for water", and it waits as long as it must. Nothing kills it.

**Water** on a crop's menu, or a [[Use]] of a waterskin on it, takes {{n crops.soil.fillCost}} of the water from a skin you carry, the fullest that has enough, and wets the soil again: "The water soaks in." With no skin that has enough, the entry reads "Water (no water in a skin)", greyed.

Each crop has three stages: young, growing, and ready. While it grows, its menu says how long it has to go: "Growing (ready in about N days)". Time asleep counts, since sleep runs the clock fast.

### Harvesting

A ready crop's menu offers **Harvest**, and E does it. It gives the crop's food and {{n crops.crops.potato.seeds}} of its seeds into your bag ("You harvest potato x3 and potato seed x2."), with anything that does not fit falling at your feet. The tile stays tilled soil, ready for the next seed.

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

- [[Crops]], [[Hoe]], [[Waterskin]], [[Food]], [[Cooking]]
- [[Your cottage]]

## Sources

<!-- sources at 8e7538f -->
- `src/farming.js:1-11`, `data/crops.json`: growth derived from the clock while wet, never stepped; a dry crop pauses and never dies; each crop's stage days, harvest, seed, and seeds back; the soil's wet days, the water a watering takes, the actions' seconds (game #206)
- `src/farming.js:148-165`, `src/interact.js:555-579`: Till the soil with a hoe in a hand on bare grass or dirt, the furrows by the way you face it; its refusals
- `src/farming.js:167-190`, `data/items.json:58-62`: Plant for each seed carried, on empty soil; the crop starts wet; the five seeds
- `src/farming.js:204-225`, `src/farming.js:128-137`, `src/interact.js:532-553`: Water, from the fullest skin with enough; greyed without; "The water soaks in."
- `src/farming.js:62-93`, `src/interact.js:545-548`: the stage and the days left read from the growth; "Growing (ready in about N days)", "Dry: waiting for water"
- `src/farming.js:227-251`: Harvest: the food and the seeds into the bag, the rest at your feet, the tile left as soil
- `src/farming.js:99-106`, `data/tuning.json:95`: every farming verb within `pickReach` and with a clear line (game #206)
- `src/farming.js:253-274`, `src/game.js:527`: the crops' pictures follow their stages at each check
- `tools/mapgen/valley.py:190`, `tools/mapgen/mapgen.py:196-205`: the cottage's plot, potatoes and cabbages at the middle and last stages, the valley's only crops
- `data/loot.json`: no table gives a seed
- `data/interactions.json:16-22`: the Use rows: the hoe on grass or dirt, a seed on soil, the waterskin on a crop or soil
- `src/map.js:1898-1899`: a crop the map placed settled live at its stage the first time it is looked at

{{navbox making}}
