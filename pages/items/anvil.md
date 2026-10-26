---
title: Anvil
categories: [Stations, Crafting]
summary: The smith's station: tools, weapons, wall brackets, and strongboxes from iron bars, sticks, and planks, with a hammer in hand; it also repairs a worn weapon or tool for a bar or a plank.
---

{{infobox-station anvil}}

The **anvil** is the smith's station. From [[Iron bar|iron bars]] and [[Stick|sticks]] it makes the [[Smith's hammer]], the [[Dirk]], the [[Shears]], the [[Hatchet]], the [[Pickaxe]], the [[Scythe]], the [[Throwing spear]], the [[Flanged mace]], the [[Arming sword]], and the [[Wall bracket]], and, with planks as well, a [[Strongbox|strongbox]]. It needs no fire. Every recipe but the hammer's needs a hammer in hand. The chest in [[The smithy]] holds the first iron bars, and the quarryman's hut by [[The quarry]] a [[Smith's hammer]], so the anvil works from the first day; more bars are smelted at the [[Forge]] from mined [[Iron ore]]. The anvil also repairs worn weapons and tools, a few times each, for a bar or a plank (see [[Durability#Repairs|Durability]]).

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick a recipe in the panel (see [[Crafting]]). Make the hammer first, then hold it while you make the rest ("Needs a smith's hammer in hand." otherwise). What it makes goes into the anvil's output box.

## Recipes

{{recipes anvil}}

## Repairing

Beside its recipes, the anvil's right-click menu has an entry for each worn weapon or tool you carry, in a hand, on the [[Belt]], or in your bag, that it can still better. A repair costs one unit of the material the thing names, an [[Iron bar]] or a [[Plank]] (the table on [[Durability#Repairs|Durability]] says which), taken from anywhere on you, and needs a [[Smith's hammer]] on you (carried, not held, unlike the recipes). It takes {{n tuning.work.anvil.seconds seconds}}; moving ends it.

The entry names the thing, its condition now, what the repair brings it to, and the material: "Repair hoe (*now*% to {{pct tuning.work.anvil.ceilings.0}}, a plank)". What it reaches falls with every repair the thing has had, here or at the [[Grindstone]]:

- never repaired: {{pct tuning.work.anvil.ceilings.0}}
- repaired once: {{pct tuning.work.anvil.ceilings.1}}
- repaired twice: {{pct tuning.work.anvil.ceilings.2}}
- repaired {{n tuning.work.anvil.ceilings.length}} times: past repair, greyed "Repair hoe (worn past repair)"; it wears on until it breaks.

Without the hammer or the material the entry is greyed with what is missing: "Repair hoe (need a smith's hammer)", "Repair hoe (need a plank)". A thing already at or above what the anvil would bring it to has no entry; with nothing to repair, the menu has one greyed line, "Repair (nothing worn carried)", or "Repair (nothing it can better)" when what you carry is worn but already at or above that. When it is done the game says what was spent and what it reached: "You repair the hoe, spending a plank: {{pct tuning.work.anvil.ceilings.0}}. It will take ... more repairs." The [[Torch]], the [[Halberd]], the [[Stick]], and the [[Plank]] cannot be repaired.

The refusals, if a repair is asked for another way: "That cannot be repaired.", "The anvil can do no more for it.", "It is worn past repair.", "You need a smith's hammer.", "You need a plank." (or the thing's own material), and "You are not carrying that."

{{where anvil}}

## Village stations

The village's anvil stays where it stands, and none is made, unless the world was made with the rule **Village stations** set to Movable and craftable (see [[World rules]]). Then it can be picked up and carried like furniture, and a second anvil, from iron bars at the anvil itself; one a player made works as the village's does.

## With friends

A guest opens the anvil's panel on their own screen; Make is carried out by the host for that player, and the hammer must be in that player's hand. A guest's Repair is sent to the host by its label and run there for that player, from that player's own hammer and material; the thing's condition and repair count travel in the player's record.

## Sources

<!-- sources at 879d0a7 -->
- `src/stations.js:49-59`: which prop is which station
- `data/sprites/anvil.json`: the anvil is a station, not carried, with no fire
- `data/recipes.json:815-1025`: the anvil's recipes: knife, shears, hammer, hatchet, pickaxe, scythe, spear, mace, sword, strongbox, wall bracket; every one but the hammer's has `tool: "hammer"`
- `data/loot.json:15`, `data/loot.json:18`: the quarryman's chest's hammer and the smithy's chest's iron bars (game #210)
- `src/interact.js:1068-1085`: the station's menu entry and `E`
- `src/stations.js:170-181`: the refusals, "Needs a smith's hammer in hand." among them
- `src/stations.js:195-201`, `src/stations.js:294-324`: what is made goes to the output box
- `data/maps/valley.json`: where the anvil stands
- `src/ui/station-panel.js:73-90`: a guest's panel opens on its own screen
- `src/host.js:185-192`: a guest's Make runs on the host as the craft verb, for that player
- `data/sprites/anvil.json`, `src/repair.js:29-35`: the anvil is also a repairing place, `repair: "anvil"` (game #416)
- `data/tuning.json:187`, `data/items.json:6-89`: the anvil's ceilings, seconds, and tool (`smith`, carried); each item's material (game #416)
- `src/repair.js:56-72`, `src/repair.js:94-108`: the refusals; one unit of the material taken; the condition set to the ceiling; the message (game #416)
- `src/repair.js:115-156`: the entries, their labels, greyed past repair or missing a thing, the one greyed line and its "(nothing it can better)" (game #454)
- `src/inventory.js:94-112`: the hammer found carried, in a hand, the belt, or the bag (game #416)
- `src/net.js:665-675`, `src/net.js:1417-1419`: a guest's Repair sent by label, run on the host as that player (game #416)
- `data/sprites/anvil.json`, `data/recipes.json`, `src/placement.js:111-118`: the village's anvil fixed unless Village stations moves it; its recipe behind the rule (game #431)

{{navbox making}}
