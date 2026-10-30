---
title: Strong poison
categories: [Items, Potions, Combat]
aliases: [Vial of strong poison, Vials of strong poison, Strongly poisoned]
summary: A vial of strong poison brewed at a cauldron from wolfsbane and grave moss; never drunk, it coats a blade or makes strongly poisoned arrows, and drains twice as fast as ordinary poison.
numbersOk: true
---

<!-- typed: the game's own line quoted with its count ("You coat 5 arrows with strong poison."), which is combat.poison.arrows written into the words -->
{{infobox-item strong_poison}}

**Strong poison**, a vial of it, is brewed at a [[Cauldron]] from two [[Wolfsbane]], one [[Grave moss]], a [[Clay vial]], and a draught of clean water, over the cauldron's lit fire (see [[Potions]]). It is the stronger of the two poisons; [[Poison]] is the other. It stacks to {{n items.strong_poison.stack}} in one cell and may ride the [[Belt]]. Its vial has a black seal and a darker green glazed band.

## Effects

It is **never drunk**. It is used as ordinary poison is (see [[Poison]] for the whole of it):

- [[Use|Used]] on a blade (the [[Arming sword]], the [[Dirk]], the [[Hatchet]], the [[Scythe]], or the [[Throwing spear]]), it coats it for {{n combat.poison.hits}} landed hits: "You coat the dirk with strong poison." The card of a coated blade says "Strongly poisoned:" and the hits left.
- Used on plain arrows, it makes up to {{n combat.poison.arrows}} [[Strongly poisoned arrow|strongly poisoned arrows]]: "You coat 5 arrows with strong poison."
- The empty vial comes back, as from a drink.
- Held in the main hand and thrown from the middle button or Q, it shatters where it lands and strongly poisons every one of the dead and every wild animal within {{n items.strong_poison.thrown.splash.radius tiles}}, never a player, a villager, or a tame animal; the vial is gone (see [[Poison#Throwing it|Poison]]).

What it hits drains faster: {{n combat.poison.dpsByStacks.strong.0}}, {{n combat.poison.dpsByStacks.strong.1}}, or {{n combat.poison.dpsByStacks.strong.2}} health a second for one, two, or three stacks, against ordinary poison's {{n combat.poison.dpsByStacks.ordinary.0}}, {{n combat.poison.dpsByStacks.ordinary.1}}, or {{n combat.poison.dpsByStacks.ordinary.2}}, for {{n combat.poison.duration seconds}} after the last hit. A strong hit on a body that is already poisoned makes the whole of it strong, and an ordinary hit after that adds its stack and leaves it strong. A strongly poisoned body is drawn a darker green.

Its card reads "Strong poison", its kind "Poison", "Strong poison: never drunk.", what a vial coats, "Strongly poisons the dead and game it hits: ...", and "**Use** on a blade or arrows: coat."; on a belt slot it leads with "carried only". Its key in the utility slot, or a double-click on it in your own bag, says "Poison isn't for drinking. Use it on a blade or on arrows."; a hand slot's key draws it, to throw.

{{item-sections strong_poison}}

## With friends

As for [[Poison#With friends|ordinary poison]]: a guest coats with their own Use, carried out by the host, and every screen draws the same darker green.

## Sources

<!-- sources at 307ed34 -->
- `data/items.json:142` `hands`, `thrown`, `src/archery.js:313-322`, `src/archery.js:631-642`, `src/inventory.js:456-459` (at 8d361e5): held and thrown, the splash's strong stacks on the dead and wild game alone; the utility slot's line and a hand slot's draw (game #586)
- `data/items.json:144`: the item, `poison: { tier: 2 }`, "a vial of", its stack, `belt`, its black seal and darker band
- `data/recipes.json`: two wolfsbane, a grave moss, a clay vial, water, at the cauldron
- `data/interactions.json:22-25`, `src/poison.js:146-188`: the `coat` rows and verb, the lines (game #496)
- `data/combat.json:6` `poison.dpsByStacks.strong`, `src/poison.js:93-105`: the strong drain; a strong hit lifting the status, an ordinary one keeping it strong
- `src/poison.js:133-142`: the darker green for the strong tier
- `src/poison.js:69-80`, `src/item-info.js:271-274`, `src/item-info.js:321`: the card's lines; `src/inventory.js:343`: the line for its key and its double-click

{{navbox items}}
