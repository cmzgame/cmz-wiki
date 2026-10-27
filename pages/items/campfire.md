---
title: Campfire
categories: [Items, Crafting, Light]
aliases: [Campfires, Camp fire]
summary: The fire you carry: made at the workbench from stone and logs, set down outdoors with Place, it burns logs, cooks, and is picked up again once it is out and empty.
numbersOk: true
---

<!-- typed: the station output box's 3 by 3 (src/stations.js OUTPUT, an array the census does not read) and the drawing's ten stones and four logs -->

{{infobox-item campfire}}

A **campfire** is the one fire you can carry. It is made at the [[Workbench]] as the **Campfire** item, {{n items.campfire.size.0}} by {{n items.campfire.size.1}} cells in the bag, and set down from the bag with **Place** on one tile of open ground outdoors. It burns [[Log|logs]] while it is lit, gives [[Light]], and is a station for [[Cooking]]. Once it is out and empty it can be picked up and set down somewhere else. It is not on the build palette: the palette holds only what cannot be carried, and the [[Fireplace]] and the [[Fire pit]] are built there instead.

It is drawn as a ring of ten fieldstones round a bed of ash and coals, four logs stood in a teepee and one lying ready beside it; lit, its own flames burn in the teepee. Set down, it takes one of two facings, the spare log at the back right or, mirrored, at the back left.

## Making one

At the workbench, pick **Campfire** in the panel (see [[Crafting]]); it needs no tool. The item goes into the workbench's output box, which is 3 by 3 so that it fits, and from there into your bag. It takes a good share of a bag: the [[Burlap sack]] every new character wears holds one, and so do the [[Linen satchel]] and the [[Rucksack]].

## Setting it down

**Place** on the item's menu, in your own bag, starts a ghost of the campfire on the tile under the cursor, green where it may stand and red with the reason where not:

- **Outdoors only**: the tile is inside a room.
- **No room**: the tile is not open ground, or something stands on it, or a rug is laid there.
- **Too far**, or a wall in the way: it is set down within reach and in sight, as everything is.

A click sets it down, cold and empty ("You set the campfire down."). Escape or a right click cancels. The stone and logs it was made from are not its fuel: add logs before you light it.

## Lighting, feeding, and putting it out

Its right-click menu has:

- **Add a log (n of max)**: one [[Log]] from your bag, belt, or hands, up to {{n sprites.campfire.fire.maxFuel}}. **A log added to a cold campfire does not light it** ("You add a log; it is not lit."). Feeding one that burns needs no flame.
- **Light the campfire**, when it is out and has fuel in it, with a flame on you: a [[Tinderbox]] anywhere you carry it, or a lit [[Torch]] in a hand or on the belt ("You light the campfire."). Without one the entry is greyed, "(need a tinderbox or a flame)". A [[Use]] of a tinderbox or a lit torch on it lights it too, and so does a [[Fireball]] coming down near it.
- **Put out the campfire**, when it is lit. It keeps the fuel left in it.
- **Cook here** (see [[Cooking]]).
- **Pick up campfire**, below.

Each log burns {{n sprites.campfire.fire.hoursPerUnit}} game hours, so a full campfire burns for a long night. At the last log it goes out, and the players near it read "A fire has gone out." (see [[Fire]]).

## Picking it up

**Pick up campfire** works only once it is **out and empty**: lit, it says "Put it out first."; with fuel left, "It still has fuel in it; let it burn down.". Picked up, it is the Campfire item again, to be set down elsewhere ("No room in your bag." when it does not fit).

## Taking it apart

A campfire you made has **Take apart** on its menu (and lights up under the X tool): it gives back half of what made it, rounded down, a stone and a log, and needs no tool. It is refused while it is lit or has fuel in it, as Pick up is. A campfire you picked up and set down again is still your own to take apart; the village's own, picked up and set down, is still the village's and never taken apart. See [[Building#Taking apart|Building]].

{{item-sections campfire}}

{{where campfire}}

One cold campfire with a little fuel in it stands at [[The charcoal burners]].

## With friends

Making, setting down, lighting, feeding, putting out, picking up, and taking apart are all carried out by the host for the player who asked, with what that player carries. A guest's Make is the workbench's own, and their set-down is a command naming the item; the rest are the menu's own labels. The fire's fuel and whether it is lit travel with its tile, so everyone sees the same campfire.

## Sources

<!-- sources at c3cb736 -->
- `data/recipes.json:789-808`: the campfire at the workbench, three stone and two logs, no tool; the logs are the make's, not its fuel (game #527)
- `data/items.json:41`: the Campfire item, 3 by 3, `place: "campfire"`, its drawn icon and held picture (game #527)
- `src/stations.js:26`: the output box 3 by 3, so the made item lands in it (game #527)
- `data/sprites/campfire.json`: the drawn campfire in two facings, its own flames; its fuel (logs), hours a log, most logs, light, cooking
- `src/campfire.js:1-6`, `src/campfire.js:20-26`: made at the workbench, set down outdoors on one tile, cold and empty; "Outdoors only", "No room", "Too far"
- `src/campfire.js:82-98`: Place sets it down, "You set the campfire down.", the player's own unless the item was the village's
- `src/interact.js:586-591`: its menu: Add a log, Light, Put out, Pick up
- `src/burn.js:197-232`: Light with a flame, "You light the campfire."; Add a log lights nothing
- `src/campfire.js:44-72`: Pick up only out and empty, its refusals, into the bag as the item, marked `made` as it stood
- `src/placement.js:610-635`: Take apart by the recipe of the item whose Place sets it down: half of each, no tool for a make that named none
- `tools/mapgen/valley.py`: the charcoal burners' campfire, with two logs
- `src/campfire.js:82`, `src/net.js`: a guest's set-down as the `campfire` command by the item's uid, run on the host

{{navbox items}}
