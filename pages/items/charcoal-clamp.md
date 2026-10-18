---
title: Charcoal clamp
categories: [Stations, Crafting]
aliases: [Clamp, Clamps, Charcoal clamps]
summary: A mound of logs under turf that burns slowly: fed with logs and lit, it turns logs into charcoal over half a day.
---

{{infobox-station clamp}}

A **charcoal clamp** is a station with a slow fire of its own: a mound of logs that burns for a day on one log and gives almost no light. Its one recipe turns [[Log|logs]] into [[Charcoal]], the [[Forge]]'s fuel, over a long time, so it is fed, lit, and left. One stands in the yard of [[The smithy]], and three at [[The charcoal burners]] in the east woods.

## Using it

Feed it a log from its menu and light it with a flame on you, a [[Tinderbox]] or a lit [[Torch]], as any fire (see [[Fire]]): it holds {{n sprites.charcoal_clamp.fire.maxFuel}} log and burns one every {{n sprites.charcoal_clamp.fire.hoursPerUnit}} game hours, with light out to only {{n sprites.charcoal_clamp.fire.radius tiles}}. Then open its panel and pick the recipe (see [[Crafting]]). The job runs only while the fire burns, and the charcoal goes into the clamp's output box. No smoke is drawn on it yet.

## Recipes

{{recipes clamp}}

{{where charcoal_clamp}}

## With friends

A guest feeds, lights, and uses a clamp through the host like any station; the fire and the job are the same for every player.

## Sources

<!-- sources at 29a9f8e -->
- `data/sprites/charcoal_clamp.json`: the clamp: a station `clamp`, its fire (fuel, hours per unit, the most it holds, its small radius), not carried (game #210)
- `data/recipes.json:473-488`: logs to charcoal, the fire lit
- `src/interact.js:361-401`, `src/stations.js:145-154`, `src/stations.js:205-225`: fed and lit like any fire; a job needs its station's fire burning
- `tools/mapgen/valley.py:374`, `tools/mapgen/valley.py:563-564`: one in the smithy's yard, three at the burners

{{navbox making}}
