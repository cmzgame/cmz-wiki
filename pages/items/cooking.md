---
title: Cooking
categories: [Stations, Crafting]
aliases: [Cook, Cook here]
summary: Any lit campfire, hearth, or fireplace, and the oven, is a station for cooking (roast potatoes, stew, porridge, and grilled fish) and boils tainted water clean.
---

{{infobox-station cooking}}

**Cooking** is done at any lit fire that cooks: a [[Campfire]], a hearth, a fireplace, or the [[Oven]]. A campfire's, a hearth's, or a fireplace's menu has **Cook here**, which opens the station panel with the cooking recipes; the oven's panel lists its own recipes and then these. The [[Forge]] does not offer them. Fish can be cooked: a [[Perch]], a [[Trout]], or a [[Carp]] caught by [[Fishing]] grills into its grilled kind. A [[Potato]] grown by [[Farming]] roasts, and every cooking recipe's ingredients can be grown: garlic for the stew, rye's grain for the porridge.

## Using it

Light the fire, and keep a campfire or the oven fed (a hearth or a fireplace burns nothing; see [[Fire]]), then choose **Cook here** or press `E` beside it, and pick a recipe (see [[Crafting]]). What is cooked goes into the fire's output box. If the fire goes out during a job, the job waits until it is fed again.

## Boiling water

A lit cooking fire also boils a [[Waterskin]] of tainted water clean. [[Use]] the skin on the fire, choose **Boil water** on the skin's menu in the bag or on the belt, or choose **Boil water** on the fire's menu, which takes the fullest tainted skin you carry. The fire's entry is greyed "Boil water (no tainted water carried)" with none, and the skin's "Boil water (no lit fire in reach)" with no lit cooking fire in reach. A bar runs for {{n tuning.water.boilSeconds}} seconds within {{n tuning.water.boilReach}} tiles of the fire, and at its end the water is clean, its fill kept. It burns no extra fuel, but the fire must stay lit. An unlit fire offers nothing, and a fire that does not cook, the [[Forge]] or a [[Charcoal clamp]], refuses: "That is no cooking fire." See [[Water#Boiling|Water]].

## Recipes

{{recipes cooking}}

{{where fireplace}}

## With friends

A guest cooks through the host like any station; the fire and the queue are the same for every player. A guest's boil is run on the host too, by the fire and the skin it names.

## Sources

<!-- sources at 3c0a243 -->
- `data/sprites/campfire.json`: the campfire cooks
- `data/sprites/hearth.json`: the hearth cooks
- `data/sprites/fireplace.json:30-34`: the fireplace cooks
- `src/interact.js:788-805`: Cook here on a cooking fire's menu
- `src/stations.js:46-53`: the oven's own station wins; the forge does not cook
- `data/recipes.json:664-767`: the cooking recipes, each needing fire, the grilled fish among them (game #193)
- `data/fishing.json`: the fish caught at the waters
- `data/loot.json`: no table gives potatoes, cabbages, garlic, or grain
- `src/farming.js:233-259`, `data/loot.json:9-10`: crops harvested (game #206); the granaries' seed of every crop (game #219)
- `src/interact.js:361-394`: lighting and feeding a fire
- `src/stations.js:168-204`: what is made goes to the output box
- `src/stations.js:205-225`: a job waits while the fire is out
- `data/maps/valley.json`: where the fireplaces are
- `src/host.js:183-189`: a guest's Make runs on the host
- `src/water.js:51-148`, `src/interact.js:975`, `src/interact.js:983-1006`, `data/interactions.json:37`, `data/tuning.json`, `data/sprites/forge.json`, `data/sprites/charcoal_clamp.json`: Boil water at a lit cooking fire, its three ways in, greyed labels, the bar and its reach, no extra fuel, the refusal at a fire that does not cook (game #435, at fa2997f)
- `src/stations.js:47-55`, `src/ui/station-panel.js`: a prop's stations as a list, the oven its own and cooking, its panel both lists (game #421, at 1bcb6ed)

{{navbox making}}
