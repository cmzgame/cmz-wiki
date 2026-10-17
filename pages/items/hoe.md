---
title: Hoe
categories: [Items, Tools]
summary: A farming tool made at the workbench that tills grass or dirt into soil for planting; it fights as a weak weapon.
---

{{infobox-item hoe}}

The **hoe** is a tool made at the [[Workbench]] from a [[Stick]] and a [[Plank]], both of which can be had in play. Held in either hand, it adds **Till the soil** to the menu of a tile of bare grass or dirt, which turns it into farm soil for planting (see [[Farming]]); a [[Use]] of the hoe on grass or dirt does the same. Tilling does not wear it. It can also be swung as a weak weapon that breaks after about {{n items.hoe.weapon.kills}} kills.


{{item-sections hoe}}

## Sources

<!-- sources at 8e7538f -->
- `data/recipes.json:38-56`: the hoe from a stick and a plank
- `data/recipes.json:23-37`: sticks from a plank
- `data/items.json:4`: planks from a log
- `data/items.json:38`: the hoe: either hand, a weapon, its kills, its verb `till`
- `src/farming.js:109-116`, `src/farming.js:148-165`, `src/interact.js:555-579`, `data/interactions.json:16-17`: Till the soil with any item in a hand that lists `till`, by the menu or Use (game #206)
- `src/items.js:27-37`: durability per hit from kills

{{navbox items}}
