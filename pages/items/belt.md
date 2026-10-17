---
title: Belt
categories: [Items, Mechanics]
aliases: [Belts, Belt slots, Hotbar, Belt keys]
summary: An equipped belt gives slots at the bottom of the screen, pressed with the number keys or double-clicked to eat, drink, or swap an item into your hand.
---

The **belt** is equipped at the waist and gives **belt slots**, shown at the bottom of the screen. Each slot is pressed with its number key, `1` to `4`. Without a belt you have no slots. There are two belts: the [[Rope belt]] with {{n items.belt.beltSlots}} slots, which every new character starts with, and the [[Leather belt]] with {{n items.good_belt.beltSlots}}, found in chests.

## How it works

### What goes on a belt

A belt slot takes one item that can be held (a weapon, a tool, a [[Torch]]), a stack of [[Food]], a [[Waterskin]], or a [[Tinderbox]]. Drag it onto the slot on the character screen. Anything else is refused.

### Pressing a slot

- **Food**: one is eaten, unless you are full ("You are full."; see [[Food]]).
- **A waterskin**: you drink a sip ("It is empty." if it is dry).
- **Anything else**: it swaps between the slot and your hand. A weapon drawn from the belt always takes the main hand, so flipping through weapons never leaves you holding two by accident.
- **An empty slot**: puts away what your main hand holds, or the off hand if the main is empty.

With no belt, or a key past the belt's last slot, the game says "No belt, or no such slot."

A slot's menu offers **Equip**, **Put in bag** ("No room in your bag." if it is full), **Use**, and **Drop**. For a food it offers **Eat** in place of Equip, and for a waterskin **Drink** with how full it is. A double-click on a slot does the first of these: it equips, eats, or drinks.

When an item is put away and the bag has no room, it goes onto the belt if it can be held.

### A torch on the belt

A lit torch on the belt is not drawn but still glows, at {{n tuning.world.beltLight}} of a held torch's light and reach, as long as no lit torch is held. That reach is a little more than the {{n tuning.sight.darkRadius tiles}} you see in the dark with no torch, so a belt torch lets you see the dead a little farther (see [[Sight]]); the dead see its flame from less far than a held one's. It burns down more slowly there than in a hand, lasting {{n tuning.world.torchWallLife seconds}} of the world's time, and it burns even while a held torch gives the light. With no torch in a hand, `T` lights or douses the one on the belt, with a [[Tinderbox]] to light it. A torch moved between a hand and the belt stays as it was, lit or out. A lit torch on the belt is a flame: it lights a fire that is out from the fire's own menu, as a [[Tinderbox]] does (see [[Fire]]). See [[Torch]] and [[Light]].

### The belt as a container

A belt counts as a container: it can go in a bag or a chest only while its slots are empty (see [[Inventory#The one container rule|the one container rule]]). Dropped from its slot, it keeps what is on it, and a torch on it goes out.

## With friends

The belt keys are part of each player's input, carried out by the host's world for that player, so a guest's belt works the same way as the host's.

## See also

- [[Hands]], [[Inventory]], [[Clothing]]
- [[Controls]]

## Sources

<!-- sources at 0e765f7 -->
- `src/inventory.js:9`: the waist slot
- `data/items.json:32-33`: the rope belt's and the good belt's slot counts
- `data/kit.json`: every new character starts with a rope belt on
- `data/loot.json:2`: the good belt in the chest table
- `src/ui/inventory-actions.js:67-73`, `data/items.json:19`: what a belt slot takes; an item marked `belt`, the tinderbox (game #222)
- `src/interact.js:1104`: keys 1 to 4
- `src/inventory.js:263-286`: a press: eat, drink, swap, a weapon to the main hand, an empty slot stows
- `src/entities/player.js:105-112`: drinking a sip from a waterskin
- `src/interact.js:1180-1202`: the press and its messages ("No belt, or no such slot.", "You are full.", game #186)
- `src/interact.js:1290-1350`, `src/ui/inventory-actions.js:174-182`: the slot menu: Equip, or Eat for a food and Drink for a skin (game #186), Put in bag, Use, Drop; a double-click does the first
- `src/inventory.js:203-215`: putting away goes to the belt only when the bag will not take it and it can be held
- `data/tuning.json:88`: the belt torch's strength
- `src/game.js:505-512`, `src/game.js:679-691`: the belt torch's light, only while lit and none held
- `src/sight.js:18-29`, `data/tuning.json:108`, `src/entities/zombie.js:367-386`: its reach past `darkRadius` gives sight of the dead (game #173); the dead see it by its strength
- `src/inventory.js:304-318`, `src/interact.js:360-393`: a lit belt torch a flame for a fire's menu (game #169)
- `src/game.js:513-539`, `data/tuning.json:93`: a lit belt torch burns at the wall rate, held or not
- `src/interact.js:1155-1176`: `T` on the belt's torch when none is held
- `src/items.js:198-211`, `src/map.js:472-484`: a belt dropped puts out a torch on it
- `src/inventory.js:185-199`: a belt is a container and goes in another only empty
- `src/interact.js:1104`, `src/interact.js:1124`: the belt keys are events in the player's input snapshot
- `src/game.js:619`: the host's step performs them for each player
