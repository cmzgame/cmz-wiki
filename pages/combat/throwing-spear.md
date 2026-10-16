---
title: Throwing spear
categories: [Items, Weapons]
aliases: [Spear, Spears]
summary: A main-hand spear that stabs at long reach, or is thrown with the bow's draw.
---

{{infobox-item spear}}

The **Throwing spear** is held in the main hand only, and never beside another weapon (a [[Shield]] or a [[Torch]] is fine; a torch beside it is only a light and never swings). It stabs at a long, narrow reach, or it can be thrown.

## Combat

- **Left** stabs: {{n items.spear.weapon.damage}} damage, a reach of {{n items.spear.weapon.range tiles}}, an arc of {{n items.spear.weapon.arc}} degrees, swing {{n items.spear.weapon.swing seconds}}, stagger chance {{n items.spear.weapon.staggerChance}}. It floors on the default chance.
- **Middle** or **Q** throws it, with the bow's draw: hold, aim, release (see [[Archery]]). The spear itself flies and the hand is left empty. A full throw draws in {{n items.spear.thrown.drawTime seconds}}, reaches {{n items.spear.thrown.range tiles}}, and does {{n items.spear.thrown.damage}} damage, enough to kill a fresh zombie outright. A partial draw does less. A throw always staggers and interrupts a bite, never floors, and cannot be braced.

Each time a thrown spear comes down, hit or miss, it breaks with a chance of {{n items.spear.thrown.breakChance}} and is gone. Otherwise it lodges in the body it hit (and comes out when the body is searched, see [[Corpses]]) or lies where it fell. Like an arrow, it never hits one of the dead with a wall or a closed door between the body and where it came down.

The stab lasts about {{n items.spear.weapon.kills}} kills (see [[Durability]]); a thrown spear keeps its wear.

{{item-sections spear}}

## Sources

<!-- sources at 3b7cb9a -->
- `src/combat.js:113-122`: nothing in the off hand swings beside it
- `data/items.json`: the spear: main hand, `noDual`, the stab's `weapon` block, the `thrown` block
- `src/items.js:112-133`: refused beside another weapon; a shield or torch allowed
- `data/combat.json` `blow.knockdownChance`, `src/combat.js:355`: the stab's default knockdown chance
- `src/player-controller.js:39-45`: middle or Q throws; no brace
- `src/archery.js:573`, `src/archery.js:673-676`: the spear thrown with the bow's draw, leaving the hand empty with its wear
- `src/archery.js:266-282`: damage by draw, never a knockdown, the break roll, lodging or lying where it fell
- `src/entities/character.js:139-162`: a lodged spear comes out on the search
- `src/archery.js:264`, `src/archery.js:295-334`: the landing's hit never through a wall or a closed door

{{navbox weapons}}
