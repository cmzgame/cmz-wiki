---
title: Hatchet
categories: [Items, Weapons, Tools]
aliases: [Hatchets, Axe]
summary: A one-handed tool that fells trees and chops up stumps, and a solid weapon; one waits in your cottage's chest.
---

{{infobox-item hatchet}}

The **Hatchet** is a one-handed tool, and a solid weapon in either hand. It is the tool for wood: held in a hand, it chops down a tree for its [[Log|logs]], leaving a [[Stump]], and chops up the stump for one more log (see [[Trees]]). Without one, a tree's menu reads "Chop down (need a hatchet)". Chopping does not wear it.

## Where to find one

- **The chest in the main room of [[Your cottage]]** holds a hatchet, and a [[Loaf of bread]], every time: it has a table of its own rather than a chest's random roll.
- **The chest in [[The joiner]]'s workshop** holds a second, likewise.
- Any other chest may roll one (the Item sources table below).
- The [[Anvil]] makes one from [[Iron bar|iron bars]] and a [[Stick]], with a [[Hammer]] in hand, though nothing in the valley gives iron bars yet.

## Combat

Left swings it. It has no other mode.

- It does {{n items.hatchet.weapon.damage}} damage, with a reach of {{n items.hatchet.weapon.range tiles}} and an arc of {{n items.hatchet.weapon.arc}} degrees.
- Swing {{n items.hatchet.weapon.swing seconds}}, stamina {{n items.hatchet.weapon.stamina}}.
- Stagger chance {{n items.hatchet.weapon.staggerChance}}; it floors on the default chance (see [[Stagger and knockdown]]).
- It lasts about {{n items.hatchet.weapon.kills}} kills (see [[Durability]]). Only fighting wears it.

Its arc is narrower than the [[Sword]]'s.

{{item-sections hatchet}}

## With friends

A guest chops with the hatchet in their own hands: the menu choice goes to the host, which checks that player's hands and reach.

## Sources

<!-- sources at 8e7538f -->
- `data/items.json`: the hatchet: either hand, its verb `chop`, its `weapon` block
- `src/chop.js:13-50`: a hatchet in a hand chops a tree or a stump; nothing in the chop wears it
- `src/interact.js:608-630`: "Chop down (need a hatchet)" greyed without one
- `data/loot.json:6-7`, `data/maps/valley.json:1277`, `data/maps/valley.json:3431`, `src/map.js:1885`: the cottage's chest and the joiner's name their own tables, each with a fixed hatchet (and the cottage's a loaf) (game #207)
- `data/loot.json:2`: the hatchet in the `chest` table
- `data/recipes.json:321-340`: the hatchet at the anvil from an iron bar and a stick, the hammer in hand
- `src/items.js:24-37`: wear comes only from a weapon's hits
- `data/combat.json` `blow.knockdownChance`, `src/combat.js:348`: the default knockdown chance

{{navbox weapons}}
