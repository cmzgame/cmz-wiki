---
title: Crafting
categories: [Crafting, Mechanics]
aliases: [Stations, Station, Making things, Making, Recipe, Craft]
summary: A station is a piece of furniture you make things at: pick a recipe, and it takes the ingredients from what you carry and the containers nearby, and works through its queue.
numbersOk: true
---

<!-- typed: the output box's size and the most a single Make can queue (src/stations.js) are neither data nor named constants -->

**Crafting** is done at **stations**: a [[Workbench]], an [[Anvil]], a [[Forge]], an [[Oven]], a [[Loom]], a [[Charcoal clamp]], and any lit fire that cooks ([[Cooking]]). The [[Loom]] and the [[Charcoal clamp]] are stations too; a dye vat stands in the village but has nothing to make yet ("Nothing to make here yet."). Every recipe is known from the start; the full list is on [[Recipes]].

## How it works

### The station panel

Choose the station's entry on its right-click menu, or press `E` beside it, from within {{n census.constants.stations.REACH tiles}}. One panel serves every station:

- the station's recipes, each greyed with the reason when you cannot make it;
- the chosen recipe's ingredients, with how many you have and how many it needs;
- a count, from 1 to 10;
- **Make**;
- the queue, with a bar for the job in progress.

The panel and the station's output box close when you walk a little beyond reach. The game goes on while the panel is open, and you can fight with it up. Typing in the count goes to the count alone, not to the game's keys; `Enter` or `Escape` leaves it.

### Ingredients

The ingredients are counted, and taken, from:

- your bag, your [[Belt]], and your [[Hands]];
- the station's own output box;
- every container within {{n census.constants.stations.REACH tiles}} of you, with a clear line to it, that has already been searched (an unsearched chest's contents do not exist yet; see [[Containers]]). A chest in the next room, through a wall, does not count.

They are taken from your bag first, then the belt, then your hands, then the containers. Some recipes ask for "any cloth": any garment will do (a bandage is not cloth).

All the ingredients for the count are taken when you press Make. If anything is short, nothing is taken and the game says what is missing ("Short of ...").

### Fire and tools

- A recipe that needs **the fire lit** cannot be started at a station whose fire is out ("The fire is out."). If the fire goes out during the job, the job waits, marked "(the fire is out)", and goes on when the fire is fed. Nothing is lost. See [[Fire]].
- A recipe that needs **a tool in hand** needs it held when you press Make ("Needs a smith's hammer in hand."). Only the [[Anvil]]'s smithing asks for one, the [[Smith's hammer]].
- A recipe that needs **a tool on you** wants it anywhere you carry it: in a hand, on the belt, or in the bag. The panel marks the row "needs a belt knife on you", and Make without it refuses with "You need a belt knife." The tool is found by what it does, not by name, so any tool that does that work will do. At the [[Workbench]], most rows ask for one this way: a [[Smith's hammer]] for the furniture, the wheelbarrow, the shield, the hoe, the shovel, and the bucket; a [[Belt knife]] for the bow, the arrows, the rod, and tearing a garment into [[Rag|rags]]; a [[Hatchet]] for sticks from a plank.

Pressing Make away from the station refuses with "Not at this station." or "Too far from it.", and with "There is a wall in the way." when a wall or a shut door is between you; the panel closes then too.

### The queue

After Make, the work runs on the station's own queue in the world's time. You may walk away, and the station keeps working. A recipe's time is in seconds of the world's time; a game hour is {{n census.constants.map.HOUR_SECONDS}} of them.

### The output

What a recipe makes lands in the station's **output box**, a grid of 3 × 2 that opens beside your bag. If the output box is full, the item is put on the floor beside the station. The output box counts as one of the places ingredients are taken from, so a chain (planks to sticks to a bow) can be made without emptying it.

A recipe for **furniture** (a chest, a shelf, a bench, a table, a bed, a workbench, a wheelbarrow) makes no item: the furniture is placed as a prop on a free tile beside the station, never on either tile of a door, so the dead can still stand at the door (see [[Openings]]). A container made this way starts searched and empty, and anything made at a station can be taken down again with the removal tool (see [[Building]]).

## Recipes

{{recipe-table}}

## With friends

A guest uses a station through the host: the guest's own panel opens on their screen, and Make is sent to the host, who runs it as that player. The queues are part of each frame, so every player sees the same jobs and the same progress, and anyone can take from the output box.

## See also

- [[Recipes]]
- [[Production chains]], every chain from raw material to product, and what can be made in normal play today
- [[Fire]]
- [[Containers]]

## Sources

<!-- sources at 3c0a243 -->
- `src/stations.js:46-53`: which props are stations, and the cooking fires
- `data/sprites/loom.json`, `data/sprites/charcoal_clamp.json`: the loom and the clamp are stations (game #210, #216)
- `src/ui/station-panel.js:155`: "Nothing to make here yet."
- `data/maps/valley.json`: the loom and dye vats in the village
- `data/recipes.json`: every recipe, known from the start
- `src/interact.js:788-805`: the station's menu entry and `E`
- `src/stations.js:21`: the reach
- `src/ui/station-panel.js`: the one panel: recipes greyed with their reason, ingredients, count, Make, queue
- `src/stations.js:246`: the count clamped from 1 to 10
- `src/ui/station-panel.js:103`: the output box closes beyond reach
- `src/ui/station-panel.js:167`: the panel closes beyond reach, or with a wall between (game #227)
- `src/main.js:1097-1182`, `src/ui/station-panel.js:45-54`: the panel stops nothing in the world; typing in the count is kept from the keys, Enter or Escape leaves it (game commit 57df52e)
- `src/stations.js:62-99`: where ingredients are counted from, searched containers only
- `src/stations.js:79-124`: the order, plain cloth before a garment for a cloth want (game #216) they are taken in
- `data/items.json:15`: the bandage is not cloth (game commit 2c70942)
- `data/items.json:26-31`: the garments are cloth
- `src/stations.js:145-154`: the refusals: "Not at this station.", "Too far from it.", "The fire is out.", "You need a ..." (a recipe's `uses`, game #222), "Needs a ... in hand.", "Short of ..."
- `src/inventory.js:88-108`, `src/ui/station-panel.js:145`: a tool carried in a hand, on the belt, or in the bag, found by its verb; "needs a ... on you" on the row
- `src/stations.js:205-225`: a job waits while its fire is out
- `src/ui/station-panel.js:152`: "(the fire is out)" on a paused job
- `data/recipes.json:505-663`: only the anvil's recipes ask for a tool in hand, the hammer; `data/recipes.json:4-472`: the workbench's rows ask by verb, `uses`: `build` a hammer, `cut` a knife, `split` a hatchet (game #222)
- `src/game.js:560`: the queues stepped in the world's step
- `src/map.js:94`: a game hour in seconds
- `src/stations.js:22`: the output box's size
- `src/stations.js:168-204`: output to the box, or the floor beside when full; furniture placed beside the station
- `src/stations.js:178-204`: never on a door's tiles (game commit 82106de)
- `src/ui/station-panel.js:71-84`: a guest's panel opens on its own screen
- `src/net.js:1288-1290`: Make sent to the host
- `src/host.js:183-189`: the host runs it as the craft verb for that player
- `src/net.js:883`: the queues in each frame

{{navbox making}}
