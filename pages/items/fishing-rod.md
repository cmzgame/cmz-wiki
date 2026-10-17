---
title: Fishing rod
categories: [Items, Tools]
aliases: [Rod, Fishing pole]
summary: A tool made at the workbench from a stick and cloth; held in hand, it casts a line at the water for fish, and fights as a poor weapon.
---

{{infobox-item fishing_rod}}

The **fishing rod** is a tool made at the [[Workbench]] from a [[Stick]] and any cloth (a piece of [[Clothing]] with the cloth tag), both of which can be had in play, with a [[Belt knife]] on you. Held in either hand, it adds **Cast the line** to the menu of a water tile within reach, which after a short wait catches a [[Perch]], a [[Trout]], or a [[Carp]], or nothing (see [[Fishing]]). Casting does not wear it.

## Combat

It can be swung as a weapon, but a poor one: {{n items.fishing_rod.weapon.damage}} damage, and it breaks after about {{n items.fishing_rod.weapon.kills}} kills. It has no alternate mode.

{{item-sections fishing_rod}}

## With friends

A guest's rod casts through the host like any menu action; see [[Fishing]].

## Sources

<!-- sources at 0e765f7 -->
- `data/recipes.json:256-275`: the rod from a stick and one cloth at the workbench, with `cut`, a knife, carried (game #222)
- `data/items.json:40`: the rod: either hand, its verb `fish`, its weapon block and kills
- `src/fishing.js:25-32`, `src/interact.js:719-742`: any item in a hand that lists `fish` is a rod; with one, a water tile offers Cast the line
- `src/items.js:24-37`: a weapon's wear comes only from its hits, by its kills; a cast costs none
- `data/items.json`: the items tagged cloth are the clothes

{{navbox items}}
