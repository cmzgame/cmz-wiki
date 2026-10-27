---
title: Clay vial
categories: [Items, Materials]
aliases: [Clay vials, Vial, Vials, Empty vial]
summary: The empty vial: an unfired vial fired in an oven; every potion is brewed into one, and drinking a potion gives it back.
---

{{infobox-item clay_vial}}

A **clay vial** is the empty vial. An [[Unfired vial]] fired in an [[Oven]] over its lit fire becomes one. Every one of the [[Potions]], and both poisons, is brewed into a clay vial at a [[Cauldron]], and drinking a potion gives the empty vial back, so a vial is refilled, not made again. It stacks to {{n items.clay_vial.stack}} in one cell and may ride the [[Belt]], where its key does nothing but say it is not held in a hand.

It is bare earthenware, with an open mouth and no seal or glaze; a filled vial has its potion's colour on its seal and a band round its shoulder (see [[Potions#The look|Potions]]). Its card reads "Clay vial", its kind "Material", that it is made at an oven, and the potions it goes into.

## Getting it back

A drunk potion leaves its vial where the potion was when that was the last of its stack (its belt slot or its bag cell), else in the bag, else at your feet: "Your bag is full: the vial is at your feet." See [[Potions#The empty vial|Potions]].

{{item-sections clay_vial}}

## With friends

A guest fires vials at an oven through the station panel's commands, and a vial given back from a guest's drink goes to that guest's own slot or bag, on the host, and reaches them with their record.

## Sources

<!-- sources at 0fa02e5 -->
- `data/items.json:137`: the item, its stack, `belt`; its icon and picture drawn in art round 5 (game #519, at ece297c)
- `data/recipes.json:1627-1643`, `data/recipes.json:1661-1790`: fired from an unfired vial at the oven; one in every brew at the cauldron
- `src/potions.js:28`, `src/potions.js:79-128`: the vial a drink leaves, and where it goes
- `src/inventory.js:348-366`: its belt key: "The clay vial is not held in a hand."
- `src/item-info.js:322-324`: the card's Made at and Goes into

{{navbox items}}
