---
title: Belt
categories: [Items, Mechanics]
aliases: [Belts, Belt slots, Hotbar, Belt keys, Utility slot, Main-hand slot, Off-hand slot, Belt slot order]
summary: An equipped belt gives slots at the bottom of the screen, each with a role (a main-hand slot, an off-hand slot, the utility slot), pressed with the number keys to draw an item into its hand or eat it.
---

The **belt** is equipped at the waist and gives **belt slots**, shown at the bottom of the screen and pressed with the number keys. Every slot has a **role**: a **main-hand slot**, an **off-hand slot**, or the **utility slot**. Without a belt you have no slots. There are two belts: the [[Rope belt]] with {{n items.belt.beltSlots}} slots (a main-hand slot, an off-hand slot, and the utility slot), which every new character starts with, and the [[Leather belt]] with {{n items.good_belt.beltSlots}}, found in chests, which adds a second main-hand slot and a second off-hand slot. There is only ever one utility slot.

## How it works

### What goes on a belt

A belt slot takes one item that can be held (a weapon, a tool, a [[Torch]]), or a whole stack of [[Throwing knife|throwing knives]] or [[Throwing axe|throwing axes]], a [[Food]], a [[Waterskin]], a [[Tinderbox]], a potion or a poison (see [[Potions]]), or a [[Clay vial]]. Drag it onto the slot. Anything else is refused.

A slot's role decides one thing about what it takes: **a two-handed item** (the [[Halberd]], the [[Hunting bow]]) goes in a main-hand slot or the utility slot, **never an off-hand slot**. A drag of one onto an off-hand slot is refused with "The hunting bow needs both hands: it goes in a main-hand slot or the utility slot." (the item's own name). Anything else may go in any slot: a [[Wooden shield]] in a main-hand slot rides there as storage, and the utility slot holds any held item, a halberd included, in one cell whatever its size in the bag.

### Pressing a slot

What a slot's key does is read from the slot's role and the item there:

- **A main-hand slot** draws its item into your main hand, and what the main hand held goes back onto that slot (see [[Belt#The swap|The swap]]). A two-handed item there is drawn into both hands (below). A food there is eaten instead. An item that cannot go in the main hand stays, with a line saying why: "The wooden shield can't be held in your main hand."
- **An off-hand slot** does the same for the off hand: it draws a book, a shield, a torch, or a second weapon into the off hand, or eats a food. "The throwing spear can't be held in your off hand."
- **The utility slot** only eats a food. With anything else it does nothing and says why: "You can't equip a weapon from the utility slot." for a weapon, a bow, a shield, or a staff, or with the item named for anything else held, as "You can't equip the torch from the utility slot." It is storage: a spare weapon, a torch, or food carried without taking a bag cell.
- **An empty slot** does nothing at all and says nothing, whatever its role. It never puts away what you hold, so a stray key in a fight never takes the weapon out of your hand.
- **A potion**, in any slot, is drunk by its key, whatever the slot's role, and its empty vial goes back onto the slot when it was the last of the stack (see [[Potions]]). **A poison** in any slot is never drunk: its key says "Poison isn't for drinking. Use it on a blade or on arrows."
- **A waterskin**, in any slot, is never drunk by its key: "Your waterskin drinks by itself from your belt." It sips by itself when you are thirsty, as from the bag (see [[Waterskin]]).
- **The tinderbox** is not held, so its key says "The tinderbox is not held in a hand." It is used from the belt as it is from the bag.

Every press that fails gives a line, shown on your screen and in the [[Chat log|chat log]]. A press with no belt worn says "You have no belt."

The [[Throwing spear]] is never held beside another weapon, a tool that swings (a [[Shovel]], a [[Smith's hammer]], a [[Dirk]]) included, so drawing one into the off hand beside it (or the spear beside one) is refused with the reason named, as "The throwing spear can't be held beside the shovel: it is never dual wielded." The refusal is checked before anything moves, so everything stays as it was.

### The swap

Whichever way a belt item goes into a hand, what that hand held is put away by one rule. The ways are the slot's key, a drag from the slot onto a hand, a drag of what a hand holds onto an occupied slot whose item fits that hand, and the slot menu's Equip. What the hand held goes:

1. onto the slot just freed, when that slot's key would draw it back (a sword onto a main-hand slot; a two-handed item never onto an off-hand slot). Dragged onto the slot, it always goes there;
2. else onto an empty slot of the hand it was in (the main hand's to a main-hand slot, the off hand's to an off-hand slot);
3. else into the bag;
4. else onto the empty utility slot;
5. else onto the freed slot, to ride there as storage;
6. and only else at your feet, with a line: "Nowhere to put the wooden shield: it is at your feet."

So a [[Hunting bow]] held while a sword is drawn from a main-hand slot, by its key or by a drag, ends on that slot, never in the bag.

### Two-handed items

A two-handed item in a main-hand slot is drawn into both hands. What the main hand held goes by the swap, onto that slot first. What the off hand held goes to an empty off-hand slot, else the bag, else the empty utility slot, and only else to your feet, with the same line. The game remembers it, and drawing a one-handed weapon into the main hand later puts it back in the off hand (see [[Hands#Two-handed items|Hands]]).

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
- for a held item the key does not draw (anything in the utility slot, a shield in a main-hand slot), an Equip into its own hand: **Equip (main hand)** and **Equip (off hand)** for an item that fits either, **Equip (both hands)** for a two-handed one, **Equip (off hand)** for a shield. What that hand held goes by [[Belt#The swap|the swap]], so it takes the freed slot only where that slot's key would draw it, and never the bag before an empty slot of its own hand;
- **Eat** for a food; **Drink** for a potion, as its key does; **Drink**, with how full it is, for a waterskin, which is the one way to drink from a skin on the belt by hand; **Boil water** at a lit cooking fire for a waterskin or a [[Bucket]] of tainted water (see [[Water]]);
- **Put in bag** ("No room in your bag." if it is full), and **Drop**.

A double-click on a slot does what its key does: it eats, drinks a potion, or draws the item, or else shows the key's line. A double-click never drinks a skin on the belt and never equips from the utility slot.

A stack dragged onto a slot holding a stack of the same thing fills it, up to the stack's limit; what does not fit stays where it came from, and with no room at all the game says "That stack is full." (see [[Inventory#Stacking|Inventory]]).

When an item is put away and the bag has no room, it goes onto a free belt slot whose role takes it. **Take All** on a container does the same with what the bag cannot hold, so a bow skips an empty off-hand slot for the utility slot.

### A torch on the belt

A lit torch in any slot is not drawn but still glows, at {{n tuning.world.beltLight}} of a held torch's light and reach, as long as no lit torch is held. A hand slot's key draws it into that hand; the utility slot's key does not. That reach is a little more than the {{n tuning.sight.darkRadius tiles}} you see in the dark with no torch, so a belt torch lets you see the dead a little farther (see [[Sight]]); the dead see its flame from less far than a held one's. It burns down more slowly there than in a hand, lasting {{n tuning.world.torchWallLife seconds}} of the world's time, and it burns even while a held torch gives the light. With no torch in a hand, `T` lights or douses the one on the belt, with a [[Tinderbox]] to light it. A torch moved between a hand and the belt stays as it was, lit or out. A lit torch on the belt is a flame: it lights a fire that is out from the fire's own menu, as a [[Tinderbox]] does (see [[Fire]]). See [[Torch]] and [[Light]].

### The belt as a container

A belt can be hidden from your figure with the eye on its slot of the character screen; it keeps its slots, their keys, and a torch's light (see [[Clothing#Hiding a worn item|Clothing]]).

A belt counts as a container: it can go in a bag or a chest only while its slots are empty (see [[Inventory#The one container rule|the one container rule]]). Dropped from its slot, it keeps what is on it, and a torch on it goes out.

**A belt opens where it lies.** A belt on the ground has **Open** on its menu (named for it, "Open rope belt"), and `E` opens one that holds anything (an empty one, `E` picks up). A belt in a chest or on a body has **Open** on its menu there. Either way its slots open as a container panel, one row with each slot in its own place, with **Take All**: take its things out by a drag, a Take, or Take All, and they leave the belt itself. Nothing can be put into a belt this way; to fill it, wear it. See [[Containers#Containers inside containers|Containers]].

## With friends

The belt keys are part of each player's input, carried out by the host's world for that player, so a guest's belt works the same way as the host's. The key goes out as the slot's role, never its number: each player's Belt slot order is their own, and the host, the other players, and the save never see it. A guest's drag onto a slot meets the same role rule on the host, and its refusal's line reaches the guest's screen. A guest opens a belt on the ground, in a chest, or on a body by the same menu entry, and every take from it is run on the host, so the belt's slots change for everyone. The lines for a locked place and for no belt are shown on the player's own screen alone, since nothing in the world changes.

## Settings that change it

- **Belt slot order** (Display): Sequential by default. See [[Settings]].

## See also

- [[Hands]], [[Inventory]], [[Clothing]]
- [[Controls]], [[Dual wielding]]

## Sources

<!-- sources at d7cf736 -->
- `data/items.json:33-34`: the rope belt's and the leather belt's slot counts
- `src/inventory.js:295-312`: the slots' roles by index (`BELT_ROLES`), the key events by role (`BELT_EVENTS`), and the two key orders (`beltPositions`) (game #478)
- `src/inventory.js:35-41`: an old world's rope belt of two grows to three
- `data/kit.json`: every new character starts with a rope belt on
- `data/loot.json:2`: the leather belt in the chest table
- `src/ui/inventory-actions.js:128-141`, `data/items.json:20`: what a belt slot takes; a two-hander never an off-hand slot; an item marked `belt`, the tinderbox
- `src/inventory.js:323-334`: `roleTakes` and `roleRefusal`: a two-handed item refused by an off-hand slot, with its words
- `src/inventory.js:338-363`: `beltAction`: what each role's key does with each item, and the lines; a skin never drunk by its key; a weapon for the utility slot's line
- `src/inventory.js:372-390`, `src/inventory.js:392-479` (at 5eb40e6): `beltDraw`: the swap, what the hand held to the freed slot when its key would draw it back, else a slot of its hand, the bag, the utility slot, the freed slot, the feet with `dropWord`'s line; a hand chosen by a drag or the menu (`chosenDraw`); the two-hander's draw into both hands, where the off hand's item goes, the spear's refusal with everything put back (game #501)
- `src/interact.js:1581`, `src/interact.js:1586-1601`, `src/interact.js:1756-1759`, `src/ui/inventory-actions.js:174-184` (at 5eb40e6): the key, the slot menu's Equip into a hand, and both drags go through `beltEquip`; what falls at the feet has its line (game #501)
- `src/ui/inventory-actions.js:111-115`, `src/ui/inventory-actions.js:146`, `src/ui/inventory-actions.js:150` (at 5eb40e6): a held thing goes into a belt slot or a hand as its whole stack, up to its `stack` (game #501)
- `src/inventory.js:224-243`: putting away with the bag full: a one-handed weapon to a main-hand slot, then the utility slot, never an off-hand slot
- `src/interact.js:1413-1435`: the number keys turned into the slot's role by the client's order; "You have no belt."; "A leather belt adds a slot here."
- `src/interact.js:1458-1462`, `src/interact.js:1527-1556`: the press performed in the world's step; an empty slot does nothing and says nothing; every refusal a line
- `src/ui/prompt.js:60-69`: every message is also a line in the log
- `src/interact.js:1880-1915`: the slot menu: Use, Equip, the Equip into its own hand, Eat, Drink, Boil water for a skin or a bucket (game #508), Put in bag, Drop
- `src/items.js:178-205`, `src/inventory.js:347-375`, `src/inventory.js:522`: the dual rule counts anything that swings, shoots, or is thrown, a torch excepted; its one wording, checked before anything moves (game #507, at d7cf736)
- `src/ui/inventory-actions.js:117-123`, `src/ui/inventory-actions.js:170`, `src/items.js:24-47`: a stack dropped on a matching stack fills it; entries with their own state never merge (game #508, at d7cf736)
- `src/interact.js:325-342`, `src/interact.js:1749-1752`, `src/interact.js:164-190`, `src/interact.js:244-255`, `src/inventory.js:60-90`: a belt opened on the ground, in a chest, or on a body, its slots a take-only view laid out by slot index, a take emptying the slot (game #508, at d7cf736)
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
