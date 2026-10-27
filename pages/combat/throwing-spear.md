---
title: Throwing spear
categories: [Items, Weapons]
aliases: [Spear, Spears]
summary: A main-hand spear that stabs at long reach, or is thrown with the bow's draw.
numbersOk: true
---

<!-- typed: the hover card's own figures quoted: 74 is the damage at the least draw that flies, worked out from the data (game #471); 10 in the coat's line is the card's own words for a fresh coat, combat.poison.hits (game #496) -->
{{infobox-item spear}}

The **Throwing spear** is held in the main hand only, and never beside another weapon, a tool that swings (a [[Shovel]], a [[Smith's hammer]], a [[Dirk]]) included; a [[Wooden shield]] or a [[Torch]] is fine, and a torch beside it is only a light and never swings. Putting a weapon beside it, by a drag, a belt key, or a menu's Equip, is refused with the reason: "The throwing spear can't be held beside the shovel: it is never dual wielded." It stabs at a long, narrow reach, or it can be thrown.

## Combat

- **Left** stabs: {{n items.spear.weapon.damage}} damage, a reach of {{n items.spear.weapon.range tiles}}, an arc of {{n items.spear.weapon.arc}} degrees, swing {{n items.spear.weapon.swing seconds}}, stagger chance {{n items.spear.weapon.staggerChance}}. It never floors.
- **Middle** or **Q** throws it, with the bow's draw: hold, aim, release (see [[Archery]]). The spear itself flies and the hand is left empty. A full throw draws in {{n items.spear.thrown.drawTime seconds}}, reaches {{n items.spear.thrown.range tiles}}, and does {{n items.spear.thrown.damage}} damage at a full draw, enough to kill a fresh zombie outright. A partial draw does less, down to 74 at the least draw that flies (see [[Archery#Damage by the draw|Archery]]). A throw always staggers, never floors, and cannot be braced.

Each time a thrown spear comes down, hit or miss, it breaks with a chance of {{n items.spear.thrown.breakChance}} and is gone, and the thrower is told "The throwing spear breaks." Otherwise it lodges in the body it hit (and comes out when the body is searched, see [[Corpses]]) or lies where it fell. Like an arrow, it never hits one of the dead with a wall or a closed door between the body and where it came down.

Its hover card says: "Throw (middle button or Q): 74 to {{n items.spear.thrown.damage}} damage by the draw, up to {{n items.spear.thrown.range}} tiles.", "Every hit staggers the dead.", and "It lands to be picked up again, or stays in the body it hits; it may break ({{pct items.spear.thrown.breakChance}})." The card replaced "150 damage at full draw" (game #471), and the stagger line came with game #494; the spear's data had always said it.

The stab lasts about {{n items.spear.weapon.kills}} kills (see [[Durability]]); a thrown spear keeps its wear, whether it falls to the ground or stays in a body and comes out of the search.

### Poison

The spear is a blade, so a [[Poison]] or [[Strong poison]] [[Use|used]] on it coats it for {{n combat.poison.hits}} landed hits (see [[Poison#Coating a blade|Poison]]). A stab that lands spends one hit; so does a thrown spear's landing hit, and a spear that lodges or lands carries the rest of its coat with it. A miss spends none. While coated its card says "Poisoned: 10 hits left." (or "Strongly poisoned"), counting down.

{{item-sections spear}}

## See also

- [[Throwing knife]], [[Throwing axe]]: the two thrown on the left button
- [[Levers]]: the spear's break, still being balanced

## Sources

<!-- sources at 125bffb -->
- `src/combat.js:115-126`: nothing in the off hand swings beside it
- `src/item-info.js` `shotLines` (at dc10b81): the card's throw lines, read from the `thrown` block
- `data/items.json:22`: the spear: main hand, `noDual`, the stab's `weapon` block, the `thrown` block
- `src/items.js:178-205`, `src/inventory.js:347-375`, `src/ui/inventory-actions.js:202` (at d7cf736): refused beside anything that swings, shoots, or is thrown, a shield or torch allowed; the refusal's words (game #507)
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: the stab has no `knockdown` of its own, so it takes the default chance, 0
- `src/player-controller.js:40-52`: middle or Q throws; no brace
- `src/archery.js:589-607`, `src/archery.js:705-708`, `src/archery.js:296-297`: the spear thrown with the bow's draw, leaving the hand empty, the spear keeping its durability
- `src/archery.js:270-297`: damage by draw, never a knockdown, the break roll, lodging or lying where it fell
- `data/items.json:22` `spear.thrown.damage`, `src/archery.js:276`, `data/tuning.json:18` `zombie.hp`: a full throw's damage equals a fresh zombie's health
- `data/items.json:22` `spear.thrown.staggerChance`, `src/entities/zombie.js:149-160`: a throw always staggers
- `src/item-info.js:180` (at 307ed34): "Every hit staggers the dead.", from `thrown.staggerChance` (game #494)
- `data/items.json:23` `tags` `blade`, `src/combat.js:392-435`, `src/archery.js:298-305`, `src/poison.js:55-73` (at 307ed34): the coat on the spear, spent by a landed stab or a thrown spear's landing hit, carried by the spear that lodges or lands, the card's line (game #496)
- `src/archery.js:281-288`, `src/entities/character.js:166-176`, `src/archery.js:296-297`: a spear that stays in a body lodges as itself and comes out of the search with its wear; one that lands is the thrown entry itself, its wear kept
- `src/archery.js:273`, `src/main.js:1751-1754`, `src/host.js:230-234`: a break rolled on every landing, hit or miss; the thrower told "The throwing spear breaks.", a guest's by the host
- `src/archery.js:271`, `src/archery.js:310-349`: the landing's hit never through a wall or a closed door

{{navbox weapons}}
