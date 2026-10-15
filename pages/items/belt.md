---
title: Belt
categories: [Items, Mechanics]
aliases: [Belts, Belt slots, Hotbar, Belt keys]
summary: A worn belt gives slots at the bottom of the screen, pressed with the number keys to eat, drink, or swap an item into your hand.
---

The **belt** is worn at the waist and gives **belt slots**, shown at the bottom of the screen. Each slot is pressed with its number key, `1` to `4`. Without a belt you have no slots. There are two belts: the [[Rope belt]] with {{n items.belt.beltSlots}} slots, which every new character wears, and the [[Good belt]] with {{n items.good_belt.beltSlots}}, found in chests.

## How it works

### What goes on a belt

A belt slot takes one item that can be held (a weapon, a tool, a [[Torch]]), a stack of [[Food]], or a [[Waterskin]]. Drag it onto the slot on the character screen. Anything else is refused.

### Pressing a slot

- **Food**: one is eaten.
- **A waterskin**: you drink a sip ("It is empty." if it is dry).
- **Anything else**: it swaps between the slot and your hand. A weapon drawn from the belt always takes the main hand, so flipping through weapons never leaves you holding two by accident.
- **An empty slot**: puts away what your main hand holds, or the off hand if the main is empty.

With no belt, or a key past the belt's last slot, the game says "No belt, or no such slot."

A slot's menu offers **Equip**, **Put in bag** ("No room in your bag." if it is full), **Use**, and **Drop**.

When an item is put away and the bag has no room, it goes onto the belt if it can be held.

### A torch on the belt

A torch on the belt is not drawn but still glows, at {{n tuning.world.beltLight}} of a held torch's light. See [[Torch]] and [[Light]].

### The belt as a container

A belt counts as a container: it can go in a bag or a chest only while its slots are empty (see [[Inventory#The one container rule|the one container rule]]). Dropped from its slot, it keeps what is on it.

## With friends

The belt keys are part of each player's input, carried out by the host's world for that player, so a guest's belt works the same way as the host's.

## See also

- [[Hands]], [[Inventory]], [[Clothing]]
- [[Controls]]

## Sources

<!-- sources at 9205ad7 -->
- `src/inventory.js:9`: the waist slot
- `data/items.json:29-30`: the rope belt's and the good belt's slot counts
- `src/game.js:103-116`: every new character wears a rope belt
- `data/loot.json:2`: the good belt in the chest table
- `src/ui/inventory-actions.js:67-73`: what a belt slot takes
- `src/interact.js:928-932`: keys 1 to 4
- `src/inventory.js:237-260`: a press: eat, drink, swap, a weapon to the main hand, an empty slot stows
- `src/entities/player.js:106-113`: drinking a sip from a waterskin
- `src/interact.js:994-1012`: the press and its messages ("No belt, or no such slot.")
- `src/interact.js:1095-1147`: the slot menu: Equip, Put in bag, Use, Drop
- `src/inventory.js:177-189`: putting away goes to the belt only when the bag will not take it and it can be held
- `data/tuning.json:76`: the belt torch's strength
- `src/game.js:417-424`: the belt torch's light
- `src/inventory.js:159-173`: a belt is a container and goes in another only empty
- `src/interact.js:946-950`: the belt keys are events in the player's input snapshot
- `src/game.js:493`: the host's step performs them for each player
