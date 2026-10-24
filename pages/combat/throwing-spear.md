---
title: Throwing spear
categories: [Items, Weapons]
aliases: [Spear, Spears]
summary: A main-hand spear that stabs at long reach, or is thrown with the bow's draw.
---

{{infobox-item spear}}

The **Throwing spear** is held in the main hand only, and never beside another weapon (a [[Wooden shield]] or a [[Torch]] is fine; a torch beside it is only a light and never swings). It stabs at a long, narrow reach, or it can be thrown.

## Combat

- **Left** stabs: {{n items.spear.weapon.damage}} damage, a reach of {{n items.spear.weapon.range tiles}}, an arc of {{n items.spear.weapon.arc}} degrees, swing {{n items.spear.weapon.swing seconds}}, stagger chance {{n items.spear.weapon.staggerChance}}. It never floors.
- **Middle** or **Q** throws it, with the bow's draw: hold, aim, release (see [[Archery]]). The spear itself flies and the hand is left empty. A full throw draws in {{n items.spear.thrown.drawTime seconds}}, reaches {{n items.spear.thrown.range tiles}}, and does {{n items.spear.thrown.damage}} damage at a full draw, enough to kill a fresh zombie outright. A partial draw does less. A throw always staggers, never floors, and cannot be braced.

Each time a thrown spear comes down, hit or miss, it breaks with a chance of {{n items.spear.thrown.breakChance}} and is gone. Otherwise it lodges in the body it hit (and comes out when the body is searched, see [[Corpses]]) or lies where it fell. Like an arrow, it never hits one of the dead with a wall or a closed door between the body and where it came down.

The stab lasts about {{n items.spear.weapon.kills}} kills (see [[Durability]]); a thrown spear that falls to the ground keeps its wear, and one pulled from a body after the kill comes back as a fresh spear.

{{item-sections spear}}

## Sources

<!-- sources at 37e8726 -->
- `src/combat.js:115-126`: nothing in the off hand swings beside it
- `data/items.json:22`: the spear: main hand, `noDual`, the stab's `weapon` block, the `thrown` block
- `src/items.js:117-138`: refused beside another weapon; a shield or torch allowed
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: the stab has no `knockdown` of its own, so it takes the default chance, 0
- `src/player-controller.js:40-52`: middle or Q throws; no brace
- `src/archery.js:585-603`, `src/archery.js:701-704`, `src/archery.js:292-293`: the spear thrown with the bow's draw, leaving the hand empty, the spear keeping its durability
- `src/archery.js:270-293`: damage by draw, never a knockdown, the break roll, lodging or lying where it fell
- `data/items.json:22` `spear.thrown.damage`, `src/archery.js:276`, `data/tuning.json:18` `zombie.hp`: a full throw's damage equals a fresh zombie's health
- `data/items.json:22` `spear.thrown.staggerChance`, `src/entities/zombie.js:149-160`: a throw always staggers
- `src/entities/character.js:165-170`, `src/archery.js:291-293`: a lodged spear comes out on the search, made afresh by its id, so its wear is not kept; one that lands is the thrown entry itself, its wear kept
- `src/archery.js:271`, `src/archery.js:306-345`: the landing's hit never through a wall or a closed door

{{navbox weapons}}
