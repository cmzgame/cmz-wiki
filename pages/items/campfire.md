---
title: Campfire
categories: [Crafting, Building]
aliases: [Campfires, Camp fire]
summary: A fire you build yourself, outdoors, from stone and logs; it burns logs, cooks, and is picked up again only once it is out and empty.
---

{{infobox-prop campfire}}

A **campfire** is the one fire you build yourself. It goes on open ground outdoors, from the build palette (`N`), and costs {{n build.campfire.cost.stone}} [[Stone|stone]] and {{n build.campfire.cost.log}} [[Log|logs]]; the logs are its first fuel. It burns logs while it is lit, gives [[Light]], and is a station for [[Cooking]]. Once it is out and empty it can be picked up and set down somewhere else.

## Building one

Open the palette with `N` and pick **Campfire**. The ghost follows the cursor tile by tile, green where a campfire may stand and red with the reason where it may not:

- **Outdoors only**: the tile is inside a room.
- **No room**: the tile is not open ground, or something stands on it, or a rug is laid there.
- **Too far**, or a wall in the way: it is built within reach and in sight, as everything is.
- **Need ...**: you are short of the stone or the logs.

A click starts a bar of {{n build.campfire.seconds seconds}}. When it finishes, the stone and the logs are spent and a cold campfire stands there holding the logs as its fuel. It needs no tool and no skill.

## Lighting, feeding, and putting it out

Its right-click menu has:

- **Add a log (n of max)**: one [[Log]] from your bag, belt, or hands, up to {{n sprites.campfire.fire.maxFuel}}. **A log added to a cold campfire does not light it** ("You add a log; it is not lit."). Feeding one that burns needs no flame.
- **Light the campfire**, when it is out and has fuel in it, with a flame on you: a [[Tinderbox]] anywhere you carry it, or a lit [[Torch]] in a hand or on the belt ("You light the campfire."). Without one the entry is greyed, "(need a tinderbox or a flame)". A [[Use]] of a tinderbox or a lit torch on it lights it too, and so does a [[Fireball]] coming down near it.
- **Put out the campfire**, when it is lit. It keeps the fuel left in it.
- **Cook here** (see [[Cooking]]).
- **Pick up campfire**, below.

Each log burns {{n sprites.campfire.fire.hoursPerUnit}} game hours, so a full campfire burns for a long night. At the last log it goes out, and the players near it read "A fire has gone out." (see [[Fire]]).

## Picking it up and setting it down

**Pick up campfire** works only once it is **out and empty**: lit, it says "Put it out first."; with fuel left, "It still has fuel in it; let it burn down.". Picked up, it is a **Campfire** item of {{n items.campfire.size.0}} by {{n items.campfire.size.1}} in your bag, too big for the [[Burlap sack]] ("No room in your bag."), but one a [[Linen satchel]] or a [[Rucksack]] takes.

The item's menu has **Place**: a ghost of the campfire follows the cursor, with the same rules as building one, and a click sets it down, cold and empty ("You set the campfire down."). Escape or a right click cancels.

## Taking it apart

A campfire a player built has **Take apart** on its menu (and lights up under the X tool): it gives back half its stones, rounded down, and no logs, which were fuel. It is refused while it is lit or has fuel in it, as Pick up is. A campfire picked up and set down again is still the builder's own to take apart. See [[Building#Taking apart|Building]].

{{prop-sections campfire}}

One cold campfire with a little fuel in it stands at [[The charcoal burners]].

## With friends

Building, lighting, feeding, putting out, picking up, setting down, and taking apart are all carried out by the host for the player who asked, with what that player carries. A guest's build and set-down go as placement commands, the rest as the menu's own labels. The fire's fuel and whether it is lit travel with its tile, so everyone sees the same campfire.

## Sources

<!-- sources at 1bcb6ed -->
- `data/build.json:112-124`: the palette's Campfire: a prop, three stone and two logs, the logs its fuel, its seconds, no tool (game #421)
- `src/campfire.js:19-31`: open ground outdoors only, nothing standing there, no rug; "Outdoors only", "No room", "Too far"
- `src/placement.js:244-251`, `src/placement.js:934-960`: the palette's prop build: the ghost's reasons, the timed bar, the cost spent and the fuel set at the end
- `src/campfire.js:33-41`: a campfire made by a player, cold, holding its fuel, marked `made`
- `data/sprites/campfire.json`: its fuel (logs), hours a log, most logs, light, cooking
- `src/interact.js:488-526`: its menu: Add a log, Light, Put out, Pick up
- `src/burn.js:192-209`: Add a log, which lights nothing ("You add a log; it is not lit.")
- `src/burn.js:87-120`, `src/burn.js:210-230`: Light with a flame, "You light the campfire."
- `src/burn.js:161-191`: Put out, the fuel kept
- `src/campfire.js:43-71`: Pick up only out and empty, its refusals, into the bag as the Campfire item, "No room in your bag."
- `data/items.json`: the Campfire item, 5 by 5, `place: "campfire"`
- `src/campfire.js:80-98`, `src/interact.js:1433`, `src/placement.js:320`, `src/placement.js:688-700`: Place, the ghost, set down cold and empty
- `src/placement.js:518-536`: Take apart: half the cost but the fuel
- `tools/mapgen/valley.py:578`: the charcoal burners' campfire, with two logs
- `src/placement.js:880-900`, `src/net.js`: a guest's build and set-down as placement commands, run on the host

{{navbox props}}
