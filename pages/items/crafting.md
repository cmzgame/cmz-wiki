---
title: Crafting
categories: [Crafting, Mechanics]
aliases: [Stations, Station, Making things, Making, Recipe, Craft]
summary: A station is a piece of furniture you make things at: pick a recipe, and it takes the ingredients from what you carry and the containers nearby, and works through its queue.
numbersOk: true
---

<!-- typed: the output box's size and the most a single Make can queue (src/stations.js) are neither data nor named constants; the done line's "Made 5 arrows." is the game's own words for the arrows recipe -->

**Crafting** is done at **stations**: a [[Workbench]], an [[Anvil]], a [[Forge]], an [[Oven]], a [[Loom]], a [[Spinning wheel]], a [[Charcoal clamp]], the [[Millstones]], a [[Smoking rack]], a [[Tanning vat]], and any lit fire that cooks ([[Cooking]]). A [[Dye vat]] is a station with no recipes: it opens its own picker to dye clothing instead of the station panel. Every recipe is known from the start; the full list is on [[Recipes]].

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

They are taken from your bag first, then the belt, then your hands, then the containers, and each is spent wherever it was taken from. Some recipes ask for any of a kind rather than one item: "any cloth" takes [[Linen cloth]], [[Woollen cloth]], a [[Rag]], or a garment (a bandage is not cloth), and a garment is taken last, so a rag or a cloth goes before a tunic; "any meat" takes any of the six raw meats (not bacon); "any plant" garlic or a cabbage; "any binder" lard or honey.

All the ingredients for the count are taken when you press Make. If anything is short, nothing is taken and the game says what is missing ("Short of ...").

### Fire and tools

- A recipe that needs **the fire lit** cannot be started at a station whose fire is out ("The fire is out."). If the fire goes out during the job, the job waits, marked "(the fire is out)", and goes on when the fire is fed. Nothing is lost. See [[Fire]].
- A recipe that needs **a tool in hand** needs it held when you press Make ("Needs a smith's hammer in hand."). Only the [[Anvil]]'s smithing asks for one, the [[Smith's hammer]].
- A recipe that needs **a tool on you** wants it anywhere you carry it: in a hand, on the belt, or in the bag. The panel marks the row "needs a dirk on you", and Make without it refuses with "You need a dirk." The tool is found by what it does, not by name, so any tool that does that work will do. At the [[Workbench]], most rows ask for one this way: a [[Smith's hammer]] for the furniture, the wheelbarrow, the shield, the hoe, the shovel, and the bucket; a [[Dirk]] for the bow, the arrows, the rod, and tearing a garment into [[Rag|rags]]; a [[Hatchet]] for sticks from a plank.

Pressing Make away from the station refuses with "Not at this station." or "Too far from it.", and with "There is a wall in the way." when a wall or a shut door is between you; the panel closes then too.

### The queue

After Make, the work runs on the station's own queue in the world's time. You may walk away, and the station keeps working. A recipe's time is in seconds of the world's time; a game hour is {{n census.constants.map.HOUR_SECONDS}} of them.

### The output

What a recipe makes lands in the station's **output box**, a grid of 3 × 2 that opens beside your bag. If the output box is full, the item is put on the floor beside the station. Since most things take a cell each, a queue of more than a few burns, rags, or handles fills the box and spills onto the floor. The output box counts as one of the places ingredients are taken from, so a chain (planks to sticks to a bow) can be made without emptying it.

A recipe for **furniture** or a station (a chest, a shelf, a table, a bed, a counter, a cart, a workbench, a [[Smoking rack]], a [[Tanning vat]], and the rest) makes no item: the thing is set down as a prop near the station. It goes on the nearest tiles a body could walk to from beside the station, never through a wall or a shut door into the next room, up to {{n census.constants.stations.SPOT_STEPS}} steps away. Every tile it covers must be walkable, empty, bare of items, not beside a door (so the dead can still stand at the door; see [[Openings]]), with nobody standing on it and no wall between two of its tiles, so a counter never stands over its own bench.

If there is no such spot, the recipe is greyed and Make refused before anything is taken: "There is no room beside it for a counter." If the room fills while the job runs (someone stands on the spot), the finished thing waits at the head of the queue and lands once there is room, so nothing made is lost. When a job is done the game says what was made, counted and named in words: "Made 5 arrows.", "Made a counter.", "Made a jack-o'-lantern.", "Made a dye vat.", "Made a pair of millstones."

A container made this way starts searched and empty, and anything made at a station can be taken down again with the removal tool (see [[Building]]). A station cannot be picked up while it is still making something: its entry reads "Pick up oven (it is still making something)".

## Recipes

{{recipe-table}}

## With friends

A guest uses a station through the host: the guest's own panel opens on their screen, and Make is sent to the host, who runs it as that player. The queues are part of each frame, so every player sees the same jobs and the same progress, and anyone can take from the output box.

## See also

- [[Recipes]]
- [[Production chains]], every chain from raw material to product, and what can be made in normal play today
- [[Dead ends]], the objects in the valley a player can use but cannot make
- [[Fire]]
- [[Containers]]

## Sources

<!-- sources at 879d0a7 -->
- `src/stations.js:49-59`: which props are stations, and the cooking fires
- `data/sprites/loom.json`, `data/sprites/charcoal_clamp.json`: the loom and the clamp are stations (game #210, #216)
- `data/maps/valley.json`: the loom and dye vats in the village
- `src/ui/station-panel.js:76-79`: a dye vat opens the dye picker, not the station panel (game #417)
- `data/recipes.json`: every recipe, known from the start
- `src/interact.js:1068-1085`: the station's menu entry and `E`
- `src/stations.js:24`: the reach
- `src/ui/station-panel.js`: the one panel: recipes greyed with their reason, ingredients, count, Make, queue
- `src/stations.js:369`: the count clamped from 1 to 10
- `src/ui/station-panel.js:110`: the output box closes beyond reach
- `src/ui/station-panel.js:176`: the panel closes beyond reach, or with a wall between (game #227)
- `src/main.js:1136-1221`, `src/ui/station-panel.js:37-46`: the panel stops nothing in the world; typing in the count is kept from the keys, Enter or Escape leaves it (game commit 57df52e)
- `src/stations.js:72-109`: where ingredients are counted from, searched containers only
- `src/stations.js:89-148`: the order, plain cloth before a garment for a cloth want (game #216) they are taken in
- `data/items.json:15`: the bandage is not cloth (game commit 2c70942)
- `data/items.json:27-32`: the garments are cloth
- `src/stations.js:170-181`: the refusals: "Not at this station.", "Too far from it.", "The fire is out.", "You need a ..." (a recipe's `uses`, game #222), "Needs a ... in hand.", "Short of ..."
- `src/inventory.js:94-112`, `src/ui/station-panel.js:153`: a tool carried in a hand, on the belt, or in the bag, found by its verb; "needs a ... on you" on the row
- `src/stations.js:326-345`: a job waits while its fire is out
- `src/ui/station-panel.js:160`: "(the fire is out)" on a paused job
- `data/recipes.json:815-1025`: only the anvil's recipes ask for a tool in hand, the hammer; `data/recipes.json:4-124`, `data/recipes.json:231-782`: the workbench's rows ask by verb, `uses`: `build` a hammer, `cut` a knife, `split` a hatchet (game #222)
- `src/game.js:750`: the queues stepped in the world's step
- `src/map.js:105`: a game hour in seconds
- `src/stations.js:25`: the output box's size
- `src/stations.js:294-324`: output to the box, or the floor beside when full
- `src/stations.js:210-261`, `src/stations.js:294-324`: a made prop on the nearest free tiles a body could walk to, every tile of its footprint free, never beside a door, under a body, or across a wall; the refusal before anything is spent; a job that cannot land waits at the head of its queue (game #466)
- `src/stations.js:270-289`: "There is no room beside it for ..."; the counted done line (game #466)
- `src/stations.js:113-148`: a tagged ingredient taken from the bag, the belt, a hand, then the containers, a garment last (game #462)
- `src/prop-names.js`, `src/stations.js` (`madeWords`) at 879d0a7: a made prop is named by its recipe's label, then its definition's name ("Made a dye vat.", "Made a pair of millstones."; game #470)
- `src/interact.js:332-357`: no station picked up while its queue runs (game #462)
- `src/ui/station-panel.js:73-90`: a guest's panel opens on its own screen
- `src/net.js:1450-1452`: Make sent to the host
- `src/host.js:185-192`: the host runs it as the craft verb for that player
- `src/net.js:1005`: the queues in each frame
- `data/items.json`: only arrows, fire arrows, throwing knives and axes, bandages, feathers, hay, grain, pemmican, and seeds stack, and eggs did until game #475 (game #399)

{{navbox making}}
