---
title: Crafting
categories: [Crafting, Mechanics]
aliases: [Stations, Station, Making things, Making, Recipe, Craft]
summary: A station is a piece of furniture you make things at: pick a recipe, and it takes the ingredients from what you carry and the containers nearby, and works through its queue.
numbersOk: true
---

<!-- typed: the output box's size and the most a single Make can queue (src/stations.js) are neither data nor named constants -->

**Crafting** is done at **stations**: a [[Workbench]], an [[Anvil]], a [[Forge]], an [[Oven]], and any lit fire that cooks ([[Cooking]]). A loom and a dye vat stand in the village too, but have nothing to make yet ("Nothing to make here yet."). Every recipe is known from the start; the full list is on [[Recipes]].

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
- every container within {{n census.constants.stations.REACH tiles}} of you that has already been searched (an unsearched chest's contents do not exist yet; see [[Containers]]).

They are taken from your bag first, then the belt, then your hands, then the containers. Some recipes ask for "any cloth": any garment will do (a bandage is not cloth).

All the ingredients for the count are taken when you press Make. If anything is short, nothing is taken and the game says what is missing ("Short of ...").

### Fire and tools

- A recipe that needs **the fire lit** cannot be started at a station whose fire is out ("The fire is out."). If the fire goes out during the job, the job waits, marked "(the fire is out)", and goes on when the fire is fed. Nothing is lost. See [[Fire]].
- A recipe that needs **a tool in hand** needs it held when you press Make ("Needs a hammer in hand."). Only the [[Anvil]]'s smithing asks for one, the [[Hammer]].

Pressing Make away from the station refuses with "Not at this station." or "Too far from it."

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

<!-- sources at 9205ad7 -->
- `src/stations.js:45-52`: which props are stations, and the cooking fires
- `data/sprites/loom.json`: the loom is a station
- `src/ui/station-panel.js:143`: "Nothing to make here yet."
- `data/maps/valley.json`: the loom and dye vats in the village
- `data/recipes.json`: every recipe, known from the start
- `src/interact.js:622-639`: the station's menu entry and `E`
- `src/stations.js:20`: the reach
- `src/ui/station-panel.js`: the one panel: recipes greyed with their reason, ingredients, count, Make, queue
- `src/stations.js:234`: the count clamped from 1 to 10
- `src/ui/station-panel.js:92`: the output box closes beyond reach
- `src/ui/station-panel.js:157`: the panel closes beyond reach
- `src/main.js:976-1001`, `src/ui/station-panel.js:34-43`: the panel stops nothing in the world; typing in the count is kept from the keys, Enter or Escape leaves it (game commit 57df52e)
- `src/stations.js:67-104`: where ingredients are counted from, searched containers only
- `src/stations.js:108-124`: the order they are taken in
- `data/items.json:15`: the bandage is not cloth (game commit 2c70942)
- `data/items.json:23-28`: the garments are cloth
- `src/stations.js:146-154`: the refusals: "Not at this station.", "Too far from it.", "The fire is out.", "Needs a hammer in hand.", "Short of ..."
- `src/stations.js:193-205`: a job waits while its fire is out
- `src/ui/station-panel.js:140`: "(the fire is out)" on a paused job
- `data/recipes.json:263-421`: only the anvil's recipes ask for a tool, the hammer
- `src/game.js:434`: the queues stepped in the world's step
- `src/map.js:83`: a game hour in seconds
- `src/stations.js:21`: the output box's size
- `src/stations.js:168-191`: output to the box, or the floor beside when full; furniture placed beside the station
- `src/stations.js:178-181`: never on a door's tiles (game commit 82106de)
- `src/ui/station-panel.js:60-73`: a guest's panel opens on its own screen
- `src/net.js:813`: Make sent to the host
- `src/host.js:161-167`: the host runs it as the craft verb for that player
- `src/net.js:1183`: the queues in each frame

{{navbox making}}
