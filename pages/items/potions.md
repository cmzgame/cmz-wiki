---
title: Potions
categories: [Items, Crafting, Mechanics]
aliases: [Potion, Brewing, Brew, Drinking potions, Drink a potion, Poisons]
summary: Potions are brewed at a cauldron over a lit fire from two herbs of one kind, a second ingredient, a clay vial, and clean water; three are drunk (healing, stamina, mana), with ten seconds between one and the next, and two poisons are never drunk but Used on a blade or arrows; any of the five is held and thrown from the main hand's other mode, shattering in a splash.
numbersOk: true
---

<!-- typed: a brew's draught of clean water, 10 of a skin's fill, is each cauldron row's `water` in data/recipes.json, which no lookup reads; "about a tile and a half across" is Michael's own measure of the splash, whose data is its radius -->

**Potions** are brewed at a [[Cauldron]] over a lit fire and drunk from the bag, the [[Belt]], or a hand, or held and thrown to splash. There are five brews: three potions that are drunk, the [[Healing potion]], the [[Stamina potion]], and the [[Mana potion]], and two poisons, [[Poison]] and [[Strong poison]], which are never drunk but coat a blade or arrows. Each is a [[Clay vial]] filled at the cauldron, and drinking one gives the empty vial back, so a vial is refilled rather than made again.

## Making one

A potion asks for the whole chain:

1. **Clay**, dug from a clay bank by the river with a [[Shovel]] carried (see [[Clay]]).
2. **An unfired vial**: one clay is shaped into two at the [[Workbench]] (see [[Unfired vial]]).
3. **A clay vial**: an unfired vial is fired in an [[Oven]] over its lit fire (see [[Clay vial]]).
4. **Clean water** in a [[Waterskin]] you carry: water from a well, the river, or a pond is tainted until it is boiled at a lit fire (see [[Water]]). The starting skin holds clean water.
5. **Herbs**, gathered across the valley: two of the potion's own herb and one of a second ingredient (see [[Herbs]]).
6. **A brew** at a cauldron with its fire lit.

### Brewing

There are two cauldrons: the witch's, at the north end of the lane to the mere (see [[The witch's cauldron]]), which anyone may use, and your own, the [[Cauldron]] item, made at the [[Anvil]] and set down anywhere there is open floor. Light the cauldron's fire with a [[Log]] and a flame (a [[Tinderbox]] or a lit [[Torch]]), open it with **Use the cauldron**, pick a brew, and press **Make**.

{{recipes cauldron}}

Every brew also takes **a draught of clean water**: 10 of a waterskin's fill (a full skin holds {{n items.waterskin.capacity}}), drawn from the clean skins you carry, in your bag, on your belt, or in your hands, the emptiest first. A tainted skin never counts, and nor does a skin in a chest nearby. The panel lists "clean water" among the ingredients with how much you carry against how much the brew needs, in red when you are short; without enough, the Make is refused: "Potions need clean water." The herbs and the vial may come from a container within reach, as any station's ingredients may; the water may not.

The herbs, the vial, and the water are all taken when the brew starts. A brew needs the fire lit to start ("The fire is out."); if the fire goes out during one, it waits until the fire is lit again. The finished potion goes into the cauldron's output, to be taken out.

Which herb goes into which potion:

- [[Yarrow]] and [[Sage]]: the healing potion.
- [[Nettle]] and a [[Jar of honey]]: the stamina potion.
- [[Mageroot]] and a [[Mushroom]]: the mana potion.
- [[Nightshade]] and [[Grave moss]]: poison.
- [[Wolfsbane]] and grave moss: strong poison.

Grave moss grows only in the graveyard, so the poisons are the hardest to come by. [[Feverfew]], the three dye plants, and [[Salt]] go into no potion.

## Drinking one

A potion is drunk any of these ways:

- **The utility slot's key**, and **Drink** on the utility slot's menu. A main-hand or an off-hand slot's key draws a potion into that hand instead, to throw, as it draws any held thing (below).
- **Drink** on its menu in your own bag.
- **Drink** on a hand's menu, with the potion held there.
- **A double-click** on it in your own bag, or on its utility slot.

Only your own bag offers Drink: in a chest, a body, or a station's output, a double-click moves it across as anything else, and a potion there has no Drink. The character holds it out as it goes down, and the game says "You drink the healing potion." (or the stamina or mana potion).

- **Healing:** {{n tuning.potions.heal}} health at once, up to your most, with a green number over you. It does not close a wound or touch the [[Infection]].
- **Stamina:** fills the stamina bar, and for {{n tuning.potions.staminaSeconds seconds}} stamina comes back {{n tuning.potions.staminaMult}} times as fast. The buff shows in the row of debuffs at the top right, framed in gold (see [[Stamina potion]]).
- **Mana:** {{n tuning.potions.mana}} mana at once, up to your most (see [[Mana]]).

A potion is drunk even with the bar it fills already full.

### Between potions

After any potion, the next takes {{n tuning.potions.between seconds}} of the game's clock before it can be drunk: "You can't drink another potion yet." The wait is the same for all three potions, and it is each player's own. Nothing is used up by a refused drink.

### The empty vial

Drinking leaves a [[Clay vial]]. When the potion was the last of its stack, the vial goes back where the potion was: its belt slot, its bag cell, or the hand that held it. Otherwise it goes into your bag (onto a stack of vials if there is one), and when the bag has no room it falls at your feet: "Your bag is full: the vial is at your feet."

### Stacking

Potions and poisons stack to {{n items.healing_potion.stack}} in one cell; vials stack to {{n items.clay_vial.stack}}. All of them may ride the belt. Potions never spoil.

## Poisons

[[Poison]] and [[Strong poison]] are never drunk. Their key in the utility slot, and a double-click on one, say "Poison isn't for drinking. Use it on a blade or on arrows." and do nothing else; they have no Drink. A hand slot's key draws one into that hand, to throw (below).

They are [[Use|Used]] instead. On a blade (the [[Arming sword]], the [[Dirk]], the [[Hatchet]], the [[Scythe]], or the [[Throwing spear]]) a vial coats it for {{n combat.poison.hits}} landed hits; on plain arrows it makes up to {{n combat.poison.arrows}} [[Poisoned arrow|poisoned]] or [[Strongly poisoned arrow|strongly poisoned arrows]]. The empty vial comes back either way, as from a drink. What a coated blade or a poisoned arrow hits, of the dead or the animals, is poisoned: up to {{n combat.poison.max}} stacks, each taking more health a second, for {{n combat.poison.duration seconds}} after the last hit, strong poison twice as fast. Poison never touches a player or a villager. See [[Poison]] for the whole of it.

## Holding and throwing one

Every potion and poison can be held, in either hand: **Equip (main hand)** or **Equip (off hand)** on its menu, a drag onto a hand, or a main-hand or off-hand [[Belt|belt]] slot's key. Held in the main hand it is thrown from the main hand's other mode, the **middle button or Q**, with the bow's draw: hold, aim, let go (see [[Archery]]). The left button does nothing with a potion or a poison in the main hand, not even fists; in the off hand it is only held. A double-click on a potion in your own bag still drinks it, and a held potion's hand menu offers Drink, its vial back into that hand.

The throw draws in {{n items.healing_potion.thrown.drawTime seconds}} and reaches {{n items.healing_potion.thrown.range tiles}} at a full draw, flying at {{n items.healing_potion.thrown.speed}} tiles a second and turning as a thrown knife does; a partial draw falls short. It is stopped by what stops an arrow (see [[Archery#What stops a shot|Archery]]), and it stays on the floor it was thrown from. Where it comes down **the vial shatters**: a burst of the potion's colour and a stain on the ground, fading over {{n census.constants.archery.SPLASH_SECONDS seconds}}, and the vial is gone, never picked up again, unlike a drunk potion's. It hurts nobody by itself and has no hit of its own. The splash reaches everyone within {{n items.healing_potion.thrown.splash.radius tiles}} of where it landed, about a tile and a half across, the thrower included:

- a **healing potion** heals {{n tuning.potions.heal}} in every player and [[Villagers|villager]] there; a **mana potion** restores {{n tuning.potions.mana}} mana in every player there (a villager has no mana, so it does nothing to one); a **stamina potion** fills every player's stamina and starts their buff (a villager has none);
- **a splash counts as a drink** for each player it helps: a player within {{n tuning.potions.between seconds}} of their last potion or splash gets nothing from it, and one it helps starts their wait again, each player's own, so a splash at your own feet is no way round the wait;
- a **poison** puts one stack on every one of [[The dead]] and every wild [[Animals|animal]] there, as one poisoned hit of its tier, never a player, a villager, or a tame animal (see [[Poison#Poisoned|Poison]]). A harmful splash never hurts a player.

The card of a potion or a poison says the throw: "Throw (middle button or Q): shatters where it lands, up to {{n items.healing_potion.thrown.range}} tiles, splashing ... across.", what its splash does, and, for a potion, that a splash counts as a drink.

## The look

The vials are earthen, a clay colour, and a potion's colour is on its wax seal and on a glazed band round its shoulder: red for healing, gold for stamina, blue for mana, green for poison, and a darker green with a black seal for strong poison. The clay vial is bare, with an open mouth; the unfired vial is grey raw clay. Each is drawn as an icon for the bag, a picture for the hand and the floor, and, for the three potions and two poisons, a portrait for a belt slot. A thrown one bursts in its own colour where it shatters, over a stain that fades.

## The sound it makes

None yet: the cauldron's bubbling and a brew's finishing sound wait for the stations' sounds, and the panel's done line is the picture meanwhile. See [[Sound]].

## With friends

Everything is done by the host for the player who asked: a guest's Make is the station panel's own command, a guest's drink is their belt key, their slot's, hand's, or bag's menu, or their double-click, and a guest's coat is their Use, each sent with the entry's id. A guest's throw goes the way a thrown spear's does, the draw and the release sent to the host, which flies it, lands it, and splashes it; the flight reaches every player as any arrow's does, and each player's game draws the burst and the stain from where that flight came down, nothing more travelling for it. The water is taken from that player's skins, the potion works on that player, and the vial goes back to their own slot or bag. The wait between potions and the stamina buff are kept on each player, in the save and in each player's record, and are part of the multiplayer sync check, so a guest's buff shows in their own row as the host's does. The cauldron's queue, its output, and its fire are the same for everyone.

## See also

- [[Cauldron]], [[The witch's cauldron]], [[Clay vial]], [[Unfired vial]]
- [[Healing potion]], [[Stamina potion]], [[Mana potion]], [[Poison]], [[Strong poison]]
- [[Herbs]], [[Water]], [[Mana]], [[Crafting]]

## Sources

<!-- sources at 0fa02e5 -->
- `data/items.json:138-142` (at 8d361e5): `hands: "either"` and the `thrown` block on the three potions and two poisons: `button` alt, `range`, `speed`, `drawTime`, `spin`, `splash.radius` (game #586)
- `src/archery.js:906-911`, `src/combat.js:84-88`, `src/combat.js:502`, `src/player-controller.js` (at 8d361e5): thrown on the other mode with the bow's draw; nothing swung on the left button with one in the main hand (game #586)
- `src/archery.js:313-322`, `src/archery.js:609-647`, `src/potions.js:62-98` (at 8d361e5): the splash at the landing point within the radius: players and villagers healed, mana to those with a bar, stamina to players, poison on the dead and wild animals; a splash counting as a drink per player; the vial gone; the burst and stain for `SPLASH_SECONDS`, drawn by every client from the flight (game #586)
- `src/inventory.js:453-459`, `src/interact.js:1926`, `src/interact.js:1958-1961`, `src/ui/inventory-actions.js:285-295` (at 8d361e5): a hand slot's key draws a potion or a poison, the utility slot's drinks or says the poison's line; Drink on a hand's menu; the bag's double-click still drinks (game #586)
- `src/item-info.js:187-197` (at 8d361e5): the cards' throw lines (game #586)
- `data/recipes.json:1611-1790`: the vials at the workbench and the oven, the Cauldron at the anvil, the five brews at the cauldron, each with its `water`, `seconds`, and `fire`
- `src/stations.js:166-221`: a brew's draught of clean water from the clean skins carried (bag, belt, hands), the emptiest first, never a tainted one or a container's; "Potions need clean water."; "The fire is out."; everything taken when the make starts
- `src/ui/station-panel.js:152`: the panel's "clean water have / need" row, red when short
- `src/stations.js:360-372`: a job waits while the fire is out
- `src/potions.js:30-128`: drinking: the three potions' effects, the wait between potions, the line, the vial back where the potion was, else the bag, else the feet
- `data/tuning.json:200-207`: `heal`, `mana`, `staminaMult`, `staminaSeconds`, `between`
- `src/inventory.js:343-356`: every belt slot's key drinks a potion; a poison's line
- `src/interact.js:1608`, `src/interact.js:1701`: Drink on the bag's menu (your own bag alone) and on a belt slot's menu
- `src/ui/inventory-actions.js:91-96`, `src/ui/inventory-actions.js:249-256`: the double-click drinks in your own bag and on a belt slot; a poison's line; elsewhere it moves across
- `src/entities/player.js:192-197`, `src/potions.js:130-140`: the stamina buff doubles regeneration, run down by the host's step
- `src/debuffs.js:42-50`, `src/ui/debuff-icons.js:36-40`, `style.css:580`: the buff in the row, framed in gold
- `data/items.json:136-142`: the vials and the potions, their stacks, `belt`, `potion` and `poison`, their icons, pictures, and the potions' and poisons' portraits drawn in art round 5 (game #519, at ece297c)
- `src/item-info.js:248-256`: the cards' Drink lines, the wait, and the poison's Use line
- `docs/47-potions-poisons-mana.md` section 8 (status): the cauldron's sounds not built
- `data/interactions.json:22-25`, `src/poison.js`, `data/combat.json:6` `poison` (at 307ed34): the poisons Used on a blade or arrows, and what they do (game #496)
- `src/game.js:476`, `src/net.js:139-141`: `potionAt` and `buffs` in the record and the sync check's player text

{{navbox items}}
