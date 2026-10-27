---
title: Hatchet
categories: [Items, Weapons, Tools]
aliases: [Hatchets, Axe]
summary: A one-handed tool that fells trees, splits logs, and notches log walls, and a solid weapon; one waits in your cottage's chest.
---

{{infobox-item hatchet}}

The **Hatchet** is a one-handed tool, and a solid weapon in either hand. It is the tool for wood: held in a hand, it chops down a tree for its [[Log|logs]], leaving a [[Stump]] and sometimes a [[Sapling]], and chops up the stump for one more log (see [[Trees]]). Without one, a tree's menu reads "Chop down (need a hatchet)". Chopping does not wear it.

Carried anywhere on you (a hand, the belt, or the bag), it also does the hatchet's other work: **splitting** a [[Log]] into [[Plank|planks]] from the bag's menu, cutting [[Stick|sticks]] from a plank at the [[Workbench]], and **notching** a log wall when you build one (see [[Building]]). Without one, those read "(need a hatchet)" and refuse with "You need a hatchet."

## Where to find one

- **The chest in the living room of [[Your cottage]]** holds a hatchet, with a [[Shovel]], a [[Loaf of bread]], and a [[Bucket]], every time: it has a table of its own rather than a chest's random roll.
- **The chest in [[The joiner]]'s workshop** holds a second, likewise, with a [[Smith's hammer]].
- Any other chest may roll one (the Item sources table below).
- The [[Anvil]] makes one from [[Iron bar|iron bars]] and a [[Stick]], with a [[Smith's hammer]] in hand (see [[Iron bar]] for the bars).

## Combat

Left swings it. It has no other mode.

- It does {{n items.hatchet.weapon.damage}} damage, with a reach of {{n items.hatchet.weapon.range tiles}} and an arc of {{n items.hatchet.weapon.arc}} degrees.
- Swing {{n items.hatchet.weapon.swing seconds}}, stamina {{n items.hatchet.weapon.stamina}}.
- Stagger chance {{n items.hatchet.weapon.staggerChance}}; it never floors (see [[Stagger and knockdown]]).
- It lasts about {{n items.hatchet.weapon.kills}} kills (see [[Durability]]). Only fighting wears it.

Its arc is narrower than the [[Arming sword]]'s.

**Poison:** it is a blade, so a [[Poison]] or [[Strong poison]] [[Use|used]] on it coats it for {{n combat.poison.hits}} landed hits. A swing that lands spends one hit, however many bodies it strikes, and poisons every one of them; a miss spends none. See [[Poison#Coating a blade|Poison]].

{{item-sections hatchet}}

## With friends

A guest chops with the hatchet in their own hands: the menu choice goes to the host, which checks that player's hands and reach.

## Sources

<!-- sources at 37e8726 -->
- `data/items.json` `tags` `blade`, `src/combat.js:392-435` (at 307ed34): a blade, coated by a poison; a landed swing spends one hit and poisons every body it strikes (game #496)
- `data/items.json:6`: the hatchet: either hand, its verbs `chop`, `notch`, and `split`, its `weapon` block (the last two game #222)
- `src/inventory.js:89-108`, `data/tuning.json:153`, `src/interact.js:1371-1387`, `src/stations.js:149`, `src/placement.js:176-191`, `data/recipes.json:200-215`, `data/build.json:2-10`: carried anywhere, it splits a log, cuts sticks from a plank, and notches a log wall; without one, "(need a hatchet)" and "You need a hatchet."
- `src/chop.js:16-53`: a hatchet in a hand chops a tree or a stump; nothing in the chop wears it; a felled tree sometimes drops a sapling (game #461, at 6e3ab37)
- `src/interact.js:737-759`: "Chop down (need a hatchet)" greyed without one
- `data/loot.json:7-8`, `data/maps/valley.json:1423` (at 393acaf), `data/maps/valley.json:3578`, `src/map.js:1974`: the cottage's chest and the joiner's name their own tables, each with a fixed hatchet (and the cottage's a loaf) (game #207)
- `data/loot.json:2`: the hatchet in the `chest` table
- `data/recipes.json:544-563`: the hatchet at the anvil from two iron bars and a stick, the hammer in hand
- `src/items.js:24-37`, `src/combat.js:390`: wear comes only from a weapon's hits
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: no `knockdown` of its own, so the default chance, 0: it never floors

{{navbox weapons}}
