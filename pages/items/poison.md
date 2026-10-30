---
title: Poison
categories: [Items, Potions, Combat]
aliases: [Vial of poison, Vials of poison, Ordinary poison, Poisoned, Poisoning, Coat, Coating a blade, Blade, Blades]
summary: A vial of poison brewed at a cauldron from nightshade and grave moss; never drunk, it is Used on a blade to coat it for ten landed hits, or on arrows to make five poisoned arrows, and what they hit loses health a second for a while.
numbersOk: true
---

<!-- typed: the game's own lines quoted with their counts ("You coat 5 arrows with poison.", "Poisoned: 10 hits left."), which are combat.poison.arrows and combat.poison.hits written into the words -->
{{infobox-item poison}}

**Poison**, a vial of it, is brewed at a [[Cauldron]] from two [[Nightshade]], one [[Grave moss]], a [[Clay vial]], and a draught of clean water, over the cauldron's lit fire (see [[Potions]]). It is the ordinary of the two poisons; [[Strong poison]] is the other. It stacks to {{n items.poison.stack}} in one cell and may ride the [[Belt]]. Its vial has a green seal and a green glazed band. Grave moss grows only in the graveyard of [[The chapel]], so poison is scarce.

It is **never drunk**. [[Use|Used]] on a blade it coats it, and used on arrows it makes [[Poisoned arrow|poisoned arrows]]; either way the dead and the animals they hit are poisoned, losing health every second for a while. Held in the main hand it is thrown, and splashes its poison on everything of the dead and the wild game where it shatters.

## Coating a blade

The blades are the edged weapons: the [[Arming sword]], the [[Dirk]], the [[Hatchet]], the [[Scythe]], and the [[Throwing spear]]. Pick the poison with Use and click the blade, in a hand, on the belt, or in your bag. The vial must be carried as well. The blade is coated for {{n combat.poison.hits}} landed hits, and the chat log says "You coat the arming sword with poison." A new coat replaces the old one, whatever was left of it.

- A swing that lands spends one hit of the coat, however many bodies it strikes, and poisons every one of them. A miss spends none.
- A thrown spear's landing hit spends one; the spear that lodges or lands carries the rest.
- The last hit takes the coat off.
- A body the hit kills is not poisoned.

While a blade is coated its hover card says how much is left: "Poisoned: 10 hits left.", counting down with each hit.

## Poisoned arrows

Use the poison on plain [[Arrow|arrows]] you carry: up to {{n combat.poison.arrows}} of the stack become [[Poisoned arrow|poisoned arrows]], and the chat log says "You coat 5 arrows with poison." A smaller stack is coated whole, and the whole vial is spent either way. When the stack is bigger, the rest stay plain and the new ones go into your bag; what the bag has no room for falls at your feet: "Your bag is full: the arrows are at your feet."

Poison and fire do not mix. A poison on a [[Fire arrow]], or a poisoned arrow on a fire, does nothing: "Nothing interesting happens."

## Throwing it

A vial of poison is held in either hand (Equip on its menu, a drag onto a hand, or a main-hand or off-hand belt slot's key) and thrown from the main hand's other mode, the middle button or Q, with the bow's draw, as a potion is (see [[Potions#Holding and throwing one|Potions]]). It shatters where it lands, the vial gone, and every one of [[The dead]] and every wild [[Animals|animal]] within {{n items.poison.thrown.splash.radius tiles}} takes one poisoned hit of its tier: a stack each, as below. It never touches a player, a [[Villagers|villager]], or a tame animal. The left button swings nothing with it in hand. Its card says: "Throw (middle button or Q): shatters where it lands, up to {{n items.poison.thrown.range}} tiles, splashing ... across." and "Splashes every one of the dead and every wild animal within reach; never a player, a villager, or a tame animal."

## The empty vial

Coating spends the vial and gives back an empty [[Clay vial]], as a drink does: where the poison was if it was the last of its stack, else into your bag, else at your feet. See [[Potions#The empty vial|Potions]].

## The refusals

- A poison in an open chest or a body: "Take the poison out first."
- Arrows not on you: "Take the arrows out first."
- A blade not on you: "Take the blade out first."
- Anything that is not a blade or plain arrows: "Nothing interesting happens."

## Poisoned

A poisoned hit on one of [[The dead]] or an [[Animals|animal]], a thrown vial's splash included, adds a stack of poison, up to {{n combat.poison.max}}, and sets its timer back to {{n combat.poison.duration seconds}}. While it lasts the body loses health every second, more for more stacks:

- ordinary poison: {{n combat.poison.dpsByStacks.ordinary.0}}, {{n combat.poison.dpsByStacks.ordinary.1}}, or {{n combat.poison.dpsByStacks.ordinary.2}} a second, for one, two, or three stacks;
- strong poison: {{n combat.poison.dpsByStacks.strong.0}}, {{n combat.poison.dpsByStacks.strong.1}}, or {{n combat.poison.dpsByStacks.strong.2}} a second.

The loss comes once a second, the first a second after the first hit, each shown as a floating number over the body; a fresh hit does not move the tick. It runs out by itself {{n combat.poison.duration seconds}} after the last hit, and a tick can kill. A strong hit makes the poison strong; an ordinary hit on a strongly poisoned body adds its stack and leaves it strong.

A poisoned body is drawn tinted green, pulsing deeper and quicker with more stacks, and darker for strong poison.

Poison never spreads, never lights anything, and stands beside a [[Burning|burn]], each its own. It never touches a player or a [[Villagers|villager]]. An animal killed by the poison gives what the weapon that poisoned it would have given (see [[Hunting]]).

## The card

Its card reads "Poison", its kind "Poison", "Ordinary poison: never drunk.", "A vial coats a blade for {{n combat.poison.hits}} landed hits, or {{n combat.poison.arrows}} arrows; the empty vial is kept.", "Poisons the dead and game it hits: a stack a hit, up to {{n combat.poison.max}}, draining {{n combat.poison.dpsByStacks.ordinary.0}}, {{n combat.poison.dpsByStacks.ordinary.1}}, or {{n combat.poison.dpsByStacks.ordinary.2}} a second for {{n combat.poison.duration}} seconds after the last.", and "**Use** on a blade or arrows: coat.", the word Use in the Use mode's gold; on a belt slot it leads with "carried only". Its key in the utility slot, or a double-click on it in your own bag, says "Poison isn't for drinking. Use it on a blade or on arrows." and does nothing else; a main-hand or off-hand slot's key draws it into that hand. The herbs that are poisonous, nightshade and wolfsbane, are not poisons themselves and coat nothing.

{{item-sections poison}}

## With friends

A guest coats with their own Use, which the host carries out by the vial's and the blade's or arrows' places in that guest's bag, belt, or hands. The coat travels with the weapon wherever it goes, into a chest, a body, or the save. The host keeps the poison on the bodies and ticks it; each frame tells guests the tier and the stacks of every poisoned body, so a guest draws the same green, and the ticks show as floating numbers on every screen.

## See also

- [[Strong poison]], [[Poisoned arrow]], [[Strongly poisoned arrow]]
- [[Potions]], [[Cauldron]], [[Use]]
- [[Burning]], the other harm that runs on by itself

## Sources

<!-- sources at 307ed34 -->
- `data/items.json:141` `hands`, `thrown` (at 8d361e5): held in either hand, thrown on the other mode, `splash.radius` (game #586)
- `src/archery.js:313-322`, `src/archery.js:631-642`, `src/poison.js` `apply` (at 8d361e5): the splash poisons every one of the dead and every wild animal within the radius, as one hit of the tier; never a player, a villager, or a tame animal; the vial gone (game #586)
- `src/inventory.js:456-459`, `src/item-info.js:187-197` (at 8d361e5): the utility slot's line, a hand slot's draw; the card's throw lines (game #586)
- `data/items.json:143`: the item, `poison: { tier: 1 }`, "a vial of", its stack, `belt`, its green seal and band
- `data/recipes.json`: two nightshade, a grave moss, a clay vial, water, at the cauldron
- `data/interactions.json:22-25`: the four `coat` rows, `exact` so the herbs tagged `poison` never match (game #496)
- `data/items.json:6`, `data/items.json:8`, `data/items.json:23`, `data/items.json:88`, `data/items.json:90`: the `blade` tag on the hatchet, the sword, the spear, the scythe, and the dirk
- `src/poison.js:146-188`: the `coat` verb: the vial carried, a blade's coat of `hits`, a new coat replacing the old, up to `arrows` arrows, the rest and the feet, the lines and refusals
- `src/potions.js:124-150` `placeOf`, `spendVial`: the empty vial back as from a drink
- `src/combat.js:392-435`: a swing that lands poisons every body it strikes and spends one hit; a miss none; a killed body not poisoned
- `src/archery.js:298-313`: a thrown spear's landing hit spends one; a poisoned arrow's hit poisons
- `src/poison.js:55-73`: the coat spent, the last hit taking it off, the card's "Poisoned: ... hits left."
- `data/combat.json:6` `poison`, `src/poison.js:85-129`: a stack a hit to `max`, the timer back to `duration`, `dpsByStacks`, the tick once a second as a floating number, a strong hit lifting it, never a player or villager, the carcass's class
- `src/game.js:835`: the step ticks the poison beside the burn, on the host
- `src/poison.js:133-142`, `src/render/entities.js:197-201`: the green tint, pulsing with the stacks, darker for strong
- `src/item-info.js:271-274`, `src/item-info.js:321`: the card's lines; `src/inventory.js:343`: the line for its key and its double-click
- `src/net.js:790-816`, `src/net.js:1353-1367`: the dead's and the animals' tier and stacks in each frame, drawn by the guest

{{navbox items}}
