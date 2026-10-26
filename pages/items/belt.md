---
title: Belt
categories: [Items, Mechanics]
aliases: [Belts, Belt slots, Hotbar, Belt keys, Utility slot, Main-hand slot, Off-hand slot, Belt slot order]
summary: An equipped belt gives slots at the bottom of the screen, each with a role (a main-hand slot, an off-hand slot, the utility slot), pressed with the number keys to draw an item into its hand or eat it.
---

The **belt** is equipped at the waist and gives **belt slots**, shown at the bottom of the screen and pressed with the number keys. Every slot has a **role**: a **main-hand slot**, an **off-hand slot**, or the **utility slot**. Without a belt you have no slots. There are two belts: the [[Rope belt]] with {{n items.belt.beltSlots}} slots (a main-hand slot, an off-hand slot, and the utility slot), which every new character starts with, and the [[Leather belt]] with {{n items.good_belt.beltSlots}}, found in chests, which adds a second main-hand slot and a second off-hand slot. There is only ever one utility slot.

## How it works

### What goes on a belt

A belt slot takes one item that can be held (a weapon, a tool, a [[Torch]]), a [[Food]], a [[Waterskin]], a [[Tinderbox]], a potion or a poison (see [[Potions]]), or a [[Clay vial]]. Drag it onto the slot. Anything else is refused.

A slot's role decides one thing about what it takes: **a two-handed item** (the [[Halberd]], the [[Hunting bow]]) goes in a main-hand slot or the utility slot, **never an off-hand slot**. A drag of one onto an off-hand slot is refused with "The hunting bow needs both hands: it goes in a main-hand slot or the utility slot." (the item's own name). Anything else may go in any slot: a [[Wooden shield]] in a main-hand slot rides there as storage, and the utility slot holds any held item, a halberd included, in one cell whatever its size in the bag.

### Pressing a slot

What a slot's key does is read from the slot's role and the item there:

- **A main-hand slot** draws its item into your main hand, and what the main hand held goes onto that slot. A two-handed item there is drawn into both hands (below). A food there is eaten instead. An item that cannot go in the main hand stays, with a line saying why: "The wooden shield can't be held in your main hand."
- **An off-hand slot** does the same for the off hand: it draws a book, a shield, a torch, or a second weapon into the off hand, or eats a food. "The throwing spear can't be held in your off hand."
- **The utility slot** only eats a food. With anything else it does nothing and says why: "You can't equip a weapon from the utility slot." for a weapon, a bow, a shield, or a staff, or with the item named for anything else held, as "You can't equip the torch from the utility slot." It is storage: a spare weapon, a torch, or food carried without taking a bag cell.
- **An empty slot** does nothing at all and says nothing, whatever its role. It never puts away what you hold, so a stray key in a fight never takes the weapon out of your hand.
- **A potion**, in any slot, is drunk by its key, whatever the slot's role, and its empty vial goes back onto the slot when it was the last of the stack (see [[Potions]]). **A poison** in any slot is never drunk: its key says "Poison isn't for drinking. Use it on a blade or on arrows."
- **A waterskin**, in any slot, is never drunk by its key: "Your waterskin drinks by itself from your belt." It sips by itself when you are thirsty, as from the bag (see [[Waterskin]]).
- **The tinderbox** is not held, so its key says "The tinderbox is not held in a hand." It is used from the belt as it is from the bag.

Every press that fails gives a line, shown on your screen and in the [[Chat log|chat log]]. A press with no belt worn says "You have no belt."

The [[Throwing spear]] is never held beside another weapon, so drawing a weapon into the off hand beside it (or the spear beside one) is refused with "The throwing spear can't be held beside another weapon.", and everything stays as it was.

### Two-handed items

A two-handed item in a main-hand slot is drawn into both hands. What the main hand held goes onto that slot. What the off hand held goes to an empty off-hand slot, else the bag, else the empty utility slot, and only else to your feet. The game remembers it, and drawing a one-handed weapon into the main hand later puts it back in the off hand (see [[Hands#Two-handed items|Hands]]).

Drawing an item into the off hand while a two-handed item is held sends the two-handed item to an empty main-hand slot, else the bag, else the empty utility slot, else your feet; the off-hand slot is left empty.

### Weapons and the off hand

A weapon in a main-hand slot is drawn into the main hand, so flipping through weapons on the belt swaps the main hand and never puts a second weapon in the off hand. [[Dual wielding]] comes from the belt only through an off-hand slot: a weapon put there is drawn beside the main hand's. When a weapon is put away with the bag full, it goes to an empty main-hand slot, then the utility slot, never an off-hand slot.

### Belt slot order

Which number key is which slot is a setting of your own, **Belt slot order**, on the Display tab of the [[Settings]] screen. It changes only your own screen and keys:

- **Sequential** (the default): `1` the main-hand slot, `2` the off-hand slot, `3` the utility slot; a leather belt adds `4` a main-hand slot and `5` an off-hand slot, so the first three keys never change.
- **Hands grouped**: `1` and `2` the main-hand slots, `3` and `4` the off-hand slots, `5` the utility slot. On a rope belt the keys are `1`, `3`, and `5`, and places `2` and `4` are drawn locked; their keys say "A leather belt adds a slot here."

### The look and the cards

Each slot shows its key. An empty slot is stamped faintly with its role: a hand on a main-hand slot, the same hand mirrored on an off-hand slot, and a pouch on the utility slot. The hand shown on a main-hand slot is the hand your character favours, a right hand for the right-handed and a left hand for the left-handed (see [[Hands#Right- or left-handed|Hands]]).

Resting the pointer on a slot shows a card (see [[Inventory#The hover card|Inventory]]):

- **An empty slot**: its role ("Main-hand slot", "Off-hand slot", "Utility slot"), its key, and what it is for: "This is a main-hand slot. Its key draws what's here into your main hand, or eats it if it is food.", where two-handed items may go, that tapped empty it does nothing, and that a waterskin in any slot sips by itself.
- **A locked place**: "Locked slot", and that a leather belt adds a slot there.
- **A filled slot**: the item's card, led by what the key does with it there: "From this main-hand slot: drawn into your main hand.", "From the utility slot: eaten.", "From this main-hand slot: drunk." for a potion, "carried only" for a poison, or for a held item the key does not draw, "From the utility slot: stored. You can't equip a weapon from the utility slot. Its menu equips it."

A two-handed item's card says "Equip: both hands; on the belt, a main-hand slot or the utility slot."

### The slot's menu

A slot's menu offers **Use**, then:

- **Equip**, where the key would draw the item (it does what the key does);
- for a held item the key does not draw (anything in the utility slot, a shield in a main-hand slot), an Equip into its own hand, as from the bag: **Equip (main hand)** and **Equip (off hand)** for an item that fits either, **Equip (both hands)** for a two-handed one, **Equip (off hand)** for a shield;
- **Eat** for a food; **Drink** for a potion, as its key does; **Drink**, with how full it is, for a waterskin, which is the one way to drink from a skin on the belt by hand (and **Boil water** at a lit cooking fire, see [[Water]]);
- **Put in bag** ("No room in your bag." if it is full), and **Drop**.

A double-click on a slot does what its key does: it eats, drinks a potion, or draws the item, or else shows the key's line. A double-click never drinks a skin on the belt and never equips from the utility slot.

When an item is put away and the bag has no room, it goes onto a free belt slot whose role takes it. **Take All** on a container does the same with what the bag cannot hold, so a bow skips an empty off-hand slot for the utility slot.

### A torch on the belt

A lit torch in any slot is not drawn but still glows, at {{n tuning.world.beltLight}} of a held torch's light and reach, as long as no lit torch is held. A hand slot's key draws it into that hand; the utility slot's key does not. That reach is a little more than the {{n tuning.sight.darkRadius tiles}} you see in the dark with no torch, so a belt torch lets you see the dead a little farther (see [[Sight]]); the dead see its flame from less far than a held one's. It burns down more slowly there than in a hand, lasting {{n tuning.world.torchWallLife seconds}} of the world's time, and it burns even while a held torch gives the light. With no torch in a hand, `T` lights or douses the one on the belt, with a [[Tinderbox]] to light it. A torch moved between a hand and the belt stays as it was, lit or out. A lit torch on the belt is a flame: it lights a fire that is out from the fire's own menu, as a [[Tinderbox]] does (see [[Fire]]). See [[Torch]] and [[Light]].

### The belt as a container

A belt can be hidden from your figure with the eye on its slot of the character screen; it keeps its slots, their keys, and a torch's light (see [[Clothing#Hiding a worn item|Clothing]]).

A belt counts as a container: it can go in a bag or a chest only while its slots are empty (see [[Inventory#The one container rule|the one container rule]]). Dropped from its slot, it keeps what is on it, and a torch on it goes out.

## With friends

The belt keys are part of each player's input, carried out by the host's world for that player, so a guest's belt works the same way as the host's. The key goes out as the slot's role, never its number: each player's Belt slot order is their own, and the host, the other players, and the save never see it. A guest's drag onto a slot meets the same role rule on the host, and its refusal's line reaches the guest's screen. The lines for a locked place and for no belt are shown on the player's own screen alone, since nothing in the world changes.

## Settings that change it

- **Belt slot order** (Display): Sequential by default. See [[Settings]].

## See also

- [[Hands]], [[Inventory]], [[Clothing]]
- [[Controls]], [[Dual wielding]]

## Sources

<!-- sources at 78116b1 -->
- `data/items.json:33-34`: the rope belt's and the leather belt's slot counts
- `src/inventory.js:295-312`: the slots' roles by index (`BELT_ROLES`), the key events by role (`BELT_EVENTS`), and the two key orders (`beltPositions`) (game #478)
- `src/inventory.js:35-41`: an old world's rope belt of two grows to three
- `data/kit.json`: every new character starts with a rope belt on
- `data/loot.json:2`: the leather belt in the chest table
- `src/ui/inventory-actions.js:128-141`, `data/items.json:20`: what a belt slot takes; a two-hander never an off-hand slot; an item marked `belt`, the tinderbox
- `src/inventory.js:323-334`: `roleTakes` and `roleRefusal`: a two-handed item refused by an off-hand slot, with its words
- `src/inventory.js:338-363`: `beltAction`: what each role's key does with each item, and the lines; a skin never drunk by its key; a weapon for the utility slot's line
- `src/inventory.js:368-445`: `beltDraw`: the swap, the two-hander's draw into both hands, where the off hand's item goes, the spear's refusal with everything put back
- `src/inventory.js:224-243`: putting away with the bag full: a one-handed weapon to a main-hand slot, then the utility slot, never an off-hand slot
- `src/interact.js:1413-1435`: the number keys turned into the slot's role by the client's order; "You have no belt."; "A leather belt adds a slot here."
- `src/interact.js:1458-1462`, `src/interact.js:1527-1556`: the press performed in the world's step; an empty slot does nothing and says nothing; every refusal a line
- `src/ui/prompt.js:60-69`: every message is also a line in the log
- `src/interact.js:1654-1720`: the slot menu: Use, Equip, the Equip into its own hand, Eat, Drink, Boil water, Put in bag, Drop
- `src/ui/inventory-actions.js:90-108`: a double-click follows the key's path and says the key's line
- `src/ui/inventory-actions.js:47-63`: Take All fills any empty belt slot whose role takes the thing
- `src/settings.js:30`, `src/settings.js:66`: the Belt slot order setting, its two answers and its line
- `src/ui/inventory-panel.js:333-352`, `src/ui/belt-icons.js`: the hotbar in the client's order, the role stamped on an empty slot, the hand by the character's handedness, the locked places
- `src/item-info.js:268-272`, `src/item-info.js:355-393`: the two-hander's Equip line; a filled slot's leading line; the cards of an empty slot and a locked place
- `src/inventory.js:184-198`, `src/figure/wardrobe.js:80-82`: a hidden belt drawn as nothing and still worn, its slots kept (game #243)
- `data/tuning.json:102`: the belt torch's strength
- `src/game.js:512-519`, `src/game.js:687-699`: the belt torch's light, only while lit and none held
- `src/sight.js:18-29`, `data/tuning.json:123`, `src/entities/zombie.js:367-386`: its reach past `darkRadius` gives sight of the dead (game #173); the dead see it by its strength
- `src/game.js:520-546`, `data/tuning.json:107`: a lit belt torch burns at the wall rate, held or not
- `src/items.js:198-211`, `src/map.js:472-484`: a belt dropped puts out a torch on it
- `src/inventory.js:199-213`: a belt is a container and goes in another only empty
- `src/interact.js:1413-1431`, `src/game.js:627`: the belt keys are role events in the player's input snapshot, performed by the host's step for each player
- `src/inventory.js:343-356`, `src/interact.js:1701`, `src/ui/inventory-actions.js:91-96`, `src/item-info.js:384-385`: a potion drunk by any slot's key, its menu, and its double-click; a poison's line; the cards' "drunk" and "carried only" (game #491, at 0fa02e5)
