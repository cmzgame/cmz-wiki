---
title: Smoking rack
categories: [Stations, Crafting]
aliases: [Smoker, Smoking racks]
summary: A station of your own, made at the workbench: it smokes raw meat over a log into smoked meat, with no fire to light.
---

{{infobox-station smoking_rack}}

The **smoking rack** smokes raw [[Meat|meat]] over a [[Log]] into [[Smoked meat]]. The valley has none: it is made at the [[Workbench]] from sticks and planks, with a [[Smith's hammer]] on you, and set down on free tiles near the bench (see [[Crafting#The output|Crafting]]). It needs no lighting: the log is an ingredient, spent when the job starts. It is fixed where it stands once made, and cannot be picked up and carried; one a player made can be taken apart again (see [[Building]]).

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick the recipe in the panel (see [[Crafting]]). The meat and the log may come from your bag, your [[Belt]], a hand, or a searched container within reach. What it makes goes into the rack's output box.

## Recipes

{{recipes smoking_rack}}

{{prop-sections smoking_rack}}

## With friends

A guest makes a rack and smokes meat through the host like any station; the made rack is part of the map, so every player sees it, and the queue and the output box are shared.

## Sources

<!-- sources at d625844 -->
- `data/sprites/smoking_rack.json`: the smoking rack, a station, not carried, on placeholder art (game #462)
- `data/recipes.json:402-421`: made at the workbench from sticks and planks, a hammer carried (`uses: build`)
- `data/recipes.json:1554-1573`: smoked meat from a raw meat and a log, with no fire
- `src/stations.js:208-259`, `src/stations.js:296-320`: a made prop set down on free tiles near its station (game #466)
- `src/placement.js:104-117`: the sprite's `carry` flag decides
- `src/host.js`, `src/net.js`: a guest's Make run on the host; the queues in each frame

{{navbox making}}
