---
title: Tanning vat
categories: [Stations, Crafting]
aliases: [Tanning vats, Tanning]
summary: A station made at the workbench: it tans a hide into leather.
---

{{infobox-station tanning_vat}}

The **tanning vat** tans a [[Hide]] into [[Leather]]. The valley has none: it is made at the [[Workbench]] from planks and an [[Iron bar]], with a [[Smith's hammer]] on you, and set down on free tiles near the bench (see [[Crafting#The output|Crafting]]). It needs no fire and no tool. It is fixed where it stands once made, and cannot be picked up and carried; one a player made can be taken apart again (see [[Building]]).

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick the recipe in the panel (see [[Crafting]]). What it makes goes into the vat's output box.

## Recipes

{{recipes tanning_vat}}

{{prop-sections tanning_vat}}

{{planned doc=39 note="The tannery, downstream of the village, where a tanning vat stands."}}

## With friends

A guest makes a vat and tans hides through the host like any station; the made vat is part of the map, so every player sees it, and the queue and the output box are shared.

## Sources

<!-- sources at d625844 -->
- `data/sprites/tanning_vat.json`: the tanning vat, a station, not carried, on placeholder art (game #462)
- `data/recipes.json:422-441`: made at the workbench from planks and an iron bar, a hammer carried (`uses: build`)
- `data/recipes.json:1574-1589`: leather from a hide
- `src/stations.js:208-259`, `src/stations.js:296-320`: a made prop set down on free tiles near its station (game #466)
- `src/placement.js:104-117`: the sprite's `carry` flag decides

{{navbox making}}
