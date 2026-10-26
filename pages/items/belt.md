---
title: Belt
categories: [Items, Mechanics]
aliases: [Belts, Belt slots, Hotbar, Belt keys]
summary: An equipped belt gives slots at the bottom of the screen, pressed with the number keys or double-clicked to eat, drink, or draw an item into the hand chosen for that slot.
---

The **belt** is equipped at the waist and gives **belt slots**, shown at the bottom of the screen. Each slot is pressed with its number key, `1` to `4`. Without a belt you have no slots. There are two belts: the [[Rope belt]] with {{n items.belt.beltSlots}} slots, which every new character starts with, and the [[Leather belt]] with {{n items.good_belt.beltSlots}}, found in chests.

## How it works

### What goes on a belt

A belt slot takes one item that can be held (a weapon, a tool, a [[Torch]]), a [[Food]], a [[Waterskin]], or a [[Tinderbox]]. Drag it onto the slot on the character screen. Anything else is refused. The [[Halberd]] is too long for the belt: "The halberd is too long for the belt." (see below).

### Pressing a slot

A slot's key does one thing:

- **Food**: one is eaten, hungry or full (see [[Food]]).
- **A waterskin**: you drink a sip ("It is empty." if it is dry).
- **A held item**: it swaps into **the hand chosen for that slot**, and what that hand held goes to the slot (or the bag, or the belt). The hand is the slot's choice, below.
- **The tinderbox**: no hand holds it, so it stays where it is: "The tinderbox is not held in a hand." It is used from the belt.
- **An empty slot**: puts away what your main hand holds, or the off hand if the main is empty. A slot whose chosen hand is the off hand takes the off hand's item first, so its key puts a book in and out of the off hand.

With no belt, or a key past the belt's last slot, the game says "No belt, or no such slot."

### The hand for a slot

A slot's menu offers **Equip** (what the key does), **Equip to main hand** and **Equip to off hand**, **Put in bag** ("No room in your bag." if it is full), and **Drop**; a food has **Eat** in place of the Equip entries, a waterskin **Drink** with how full it is, and the tinderbox has no Equip. The slot's current hand has a gold mark beside it. Picking "Equip to main hand" or "Equip to off hand" draws the item into that hand now and keeps the choice for that slot.

The choice is kept for the kind of item it was made on, and it is part of your character: it is saved with your character. A different kind of item put into that slot goes to its own default, so putting a sword where a torch had been sent to the off hand does not make you dual wield by accident (see [[Dual wielding]]).

With no choice made, an item goes to **its own hand**:

- A book goes to the off hand, and so does a [[Wooden shield]], which holds in the off hand alone.
- A sword, mace, hatchet, or any other item that fits either hand goes to the main hand; the [[Throwing spear]] holds in the main hand alone.
- The [[Hunting bow]] takes both hands.
- A [[Torch]] goes to a free hand: the main hand if it is free, else the off hand, so drawing it beside a sword does not push the sword out.

A hand that cannot take the item refuses it in words, and the earlier choice stays: "The wooden shield cannot be held in your main hand.", "The hunting bow needs both hands." (for the off hand), "The throwing spear cannot be held in your off hand."

A double-click on a slot does its first entry: it eats, drinks, or equips, which draws a held item into the slot's hand. The hover card of an item that fits either hand says where the belt draws it ("from the belt, the main hand", "the off hand" for a book, "a free hand" for a torch), and over a belt slot, "this slot draws it into the off hand". Resting the pointer on a slot shows the item's hover card, or the slot's name ("Belt slot" and its key) when it is empty (see [[Inventory#The hover card|Inventory]]).

When an item is put away and the bag has no room, it goes onto the belt if it can be held.

### The halberd stays off

The [[Halberd]] is too long for the belt. A slot refuses it, a drag onto a slot says "The halberd is too long for the belt.", the stow that puts a held item away will not put it on the belt, and an empty slot's key will not take it from your hands. Drawing from the belt with a halberd in your hands and no room for it in the bag says why: "The halberd is too long for the belt, and your bag is full." A halberd already on a belt in an old world stays there and is drawn as before; it cannot be put back.

### A torch on the belt

A lit torch on the belt is not drawn but still glows, at {{n tuning.world.beltLight}} of a held torch's light and reach, as long as no lit torch is held. That reach is a little more than the {{n tuning.sight.darkRadius tiles}} you see in the dark with no torch, so a belt torch lets you see the dead a little farther (see [[Sight]]); the dead see its flame from less far than a held one's. It burns down more slowly there than in a hand, lasting {{n tuning.world.torchWallLife seconds}} of the world's time, and it burns even while a held torch gives the light. With no torch in a hand, `T` lights or douses the one on the belt, with a [[Tinderbox]] to light it. A torch moved between a hand and the belt stays as it was, lit or out. A lit torch on the belt is a flame: it lights a fire that is out from the fire's own menu, as a [[Tinderbox]] does (see [[Fire]]). See [[Torch]] and [[Light]].

### The belt as a container

A belt can be hidden from your figure with the eye on its slot of the character screen; it keeps its slots, their keys, and a torch's light (see [[Clothing#Hiding a worn item|Clothing]]).

A belt counts as a container: it can go in a bag or a chest only while its slots are empty (see [[Inventory#The one container rule|the one container rule]]). Dropped from its slot, it keeps what is on it, and a torch on it goes out.

## With friends

The belt keys are part of each player's input, carried out by the host's world for that player, so a guest's belt works the same way as the host's. A guest picks the hand for a slot from the same menu, and the choice is kept on the guest's own character, so each player has their own.

## See also

- [[Hands]], [[Inventory]], [[Clothing]]
- [[Controls]]

## Sources

<!-- sources at 879d0a7 -->
- `src/ui/inventory-panel.js:320`, `src/ui/inventory-panel.js:428-441`, `src/item-info.js:120-122`: a belt slot's hover card, or its name when empty (game #313, at 8af4eed)
- `src/inventory.js:184-198`, `src/figure/wardrobe.js:80-82`: a hidden belt drawn as nothing and still worn, its slots kept (game #243)
- `src/inventory.js:9`: the waist slot
- `data/items.json:32-33`: the rope belt's and the good belt's slot counts
- `data/kit.json`: every new character starts with a rope belt on
- `data/loot.json:2`: the good belt in the chest table
- `src/ui/inventory-actions.js:107-113`, `data/items.json:19`: what a belt slot takes; an item marked `belt`, the tinderbox (game #222)
- `src/interact.js:1109`: keys 1 to 4
- `src/inventory.js:280-380`, `src/interact.js:1511-1541`: a press: eat, drink, or a held item into the slot's hand (`beltKey`, `beltHand`), an empty slot stows; the refusals and their words (game #467, at 879d0a7)
- `src/inventory.js:296-306`: the default hand: a book the off hand, a light a free hand, a two-hander both, anything else the main hand (`beltDefault`)
- `src/inventory.js:325-346`, `src/entities/player.js:35`, `src/net.js:130`: the choice per slot, kept per kind of item on the player (`beltHands`), refused with `handProblem`'s words (game #467)
- `src/interact.js:1680-1693`: the slot menu: Equip, Equip to main hand and Equip to off hand with the current one marked, Put in bag, Drop (game #467)
- `src/inventory.js:286-294`, `src/ui/inventory-actions.js:192`, `src/ui/inventory-actions.js:398`, `data/items.json:9`: the halberd's `noBelt`, refused by the slot check and the drag (game #467)
- `src/item-info.js:187-196`, `src/ui/inventory-panel.js:450`: the card's belt line, and a belt slot's own hand (game #467)
- `src/entities/player.js:107-114`: drinking a sip from a waterskin
- `src/interact.js:1185-1207`: the press and its messages ("No belt, or no such slot.")
- `src/interact.js:1295-1355`, `src/ui/inventory-actions.js:221-229`: the slot menu: Equip, or Eat for a food and Drink for a skin (game #186), Put in bag, Use, Drop; a double-click does the first
- `src/inventory.js:217-229`: putting away goes to the belt only when the bag will not take it and it can be held
- `data/tuning.json:102`: the belt torch's strength
- `src/game.js:512-519`, `src/game.js:687-699`: the belt torch's light, only while lit and none held
- `src/sight.js:18-29`, `data/tuning.json:123`, `src/entities/zombie.js:367-386`: its reach past `darkRadius` gives sight of the dead (game #173); the dead see it by its strength
- `src/inventory.js:318-332`, `src/interact.js:361-394`: a lit belt torch a flame for a fire's menu (game #169)
- `src/game.js:520-546`, `data/tuning.json:107`: a lit belt torch burns at the wall rate, held or not
- `src/interact.js:1160-1181`: `T` on the belt's torch when none is held
- `src/items.js:198-211`, `src/map.js:472-484`: a belt dropped puts out a torch on it
- `src/inventory.js:199-213`: a belt is a container and goes in another only empty
- `src/interact.js:1109`, `src/interact.js:1129`: the belt keys are events in the player's input snapshot
- `src/game.js:627`: the host's step performs them for each player
- `data/items.json`: only arrows, fire arrows, throwing knives and axes, bandages, and seeds stack (game #399, at ce21ffc)
