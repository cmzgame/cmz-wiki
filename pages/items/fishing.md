---
title: Fishing
categories: [Items, Mechanics]
aliases: [Fish, Cast the line, Catching fish, Nothing bites]
summary: With a fishing rod in hand, cast a line at the water beside you; after a wait, a roll on that water's table gives a fish or nothing.
---

**Fishing** is done with a [[Fishing rod]] in hand at any [[Water|water]]. Each water the map names has its own table of fish; after a short wait a cast catches one, or nothing bites. The catch is [[Perch]], [[Trout]], or [[Carp]], which can be eaten raw or grilled at a fire ([[Cooking]]). Fishing has no skill yet.

## How it works

### Casting

Hold a fishing rod in either hand and right-click a water tile within {{n fishing.cast.reach tiles}} of you: the menu offers **Cast the line**. You must see the water: never through a wall. The cast is a timed action with a bar; its wait is rolled when it starts, between {{n fishing.cast.waitMin}} and {{n fishing.cast.waitMax seconds}} of the world's time. Walking away ends it, with nothing caught.

When the wait is over, the water's table is rolled:

- **Nothing bites.** "Nothing bites." The cast is over; cast again.
- **A catch:** "You catch a perch." (or a trout, or a carp). The fish goes into your bag, or onto the ground at your feet if the bag is full.

Without a rod in hand the water's menu has no Cast the line. Other refusals: "You need a fishing rod in hand.", "There is no water there.", "Too far from the water.", "There is a wall in the way."

### The waters

The map names its waters, and the table goes by the water the tile belongs to:

- **The river**, top to bottom of [[The valley]], with the ford where the drove crosses.
- **The pond**: both the duck pond on the green and the small pool in [[The manor]]'s garden.

Water the map does not name uses the river's table.

{{fishing-table}}

The mere is a water the game's design plans, but the map has none yet; its table is in the data already.

{{planned doc=29-world/02 note="The mere in the north woods, by the witch, with its own fish."}}

### Cooking the catch

Each fish grills at a lit fire that cooks ([[Cooking]]) into [[Grilled perch]], [[Grilled trout]], or [[Grilled carp]], which fills more hunger and heals more than the raw fish (see [[Food]]).

## Numbers

- Reach to the water: {{n fishing.cast.reach tiles}}.
- The wait: {{n fishing.cast.waitMin}} to {{n fishing.cast.waitMax seconds}}.
- The chance nothing bites: {{n fishing.waters.river.miss}} in the river, {{n fishing.waters.pond.miss}} in the pond.

## With friends

A guest casts the same way: their Cast the line is sent to the host with the water tile, and the host rolls the wait and the catch for that guest's player, so the fish lands in the guest's bag and "You catch ..." on the guest's screen. Nothing about fishing is saved but the fish, which are ordinary items. A cast in progress is lost when the world is saved and loaded, as any timed action is.

## See also

- [[Fishing rod]], [[Perch]], [[Trout]], [[Carp]]
- [[Water]], [[Cooking]], [[Food]]

## Sources

<!-- sources at 4be64f2 -->
- `data/fishing.json`: the cast's reach and wait, a table per named water (each one's miss chance and weighted catch), the default table
- `src/fishing.js:1-81`: the rod is any item in a hand listing the verb `fish`; the table by the water's body, else the default; the wait rolled; the `fish` verb: the refusals, the miss, the weighted catch into the bag or at the feet, and its line
- `src/interact.js:618-641`: Cast the line on a water tile's menu only with a rod in hand, a timed action whose wait is rolled as it starts; the timed action ends if you walk away
- `src/map.js:1451-1460`, `src/map.js:2022-2026`: a water floor's `group` kept as a named body, read from the map file and never saved
- `tools/mapgen/mapgen.py:77-87`, `tools/mapgen/valley.py:159-161`, `tools/mapgen/valley.py:211`, `tools/mapgen/valley.py:310`: the river and its ford named `river`, the duck pond and the manor's pool `pond`
- `data/items.json:39-45`, `data/recipes.json:76-94`, `data/recipes.json:497-544`: the rod, the three fish, and their grilled kinds; the rod at the workbench, the fish grilled at a fire
- `docs/30-the-big-pass-spec.md`: no fishing skill yet (game #193)

{{navbox making}}
