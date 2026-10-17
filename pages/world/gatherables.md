---
title: Gatherables
categories: [Mechanics, The world]
aliases: [Gathering, Wobble, Sway]
summary: Trees, rocks, mushrooms, crops, and pumpkins: the things that sway when clicked or walked through.
---

Gatherables are the things in the world that are meant to be gathered: [[Trees]], [[Rocks]], [[Mushrooms]], [[Crops]], and pumpkins. Each sways when clicked, and its art has a dark outline all the way round so it stands out from the decoration (trees are excused from the outline). Today the only one that gives anything is the tree, which can be chopped down for [[Log|logs]].

## How it works

### The wobble

A left click on a gatherable within {{n census.constants.interact.CLICK_REACH}} tiles makes it sway for {{n census.constants.render_props.WIGGLE_MS}} milliseconds. Clicking again during the next {{n census.constants.interact.POKE_COOLDOWN_MS}} milliseconds does not restart it. A click finds the thing by its drawn picture, so a tall tree's crown can be clicked as well as its trunk.

The well plays its own animation instead: it lowers its bucket and winds it back up.

### Walking through

Gatherables you can walk through, crops and mushrooms, sway when any character passes through them: you, other players, the dead, and villagers. Each sway runs its full {{n census.constants.interact.BRUSH_MS}} milliseconds before it can start again, so a walk through a field sets it rippling. Standing still does nothing. Trees and rocks block a body, so they never sway this way.

Decoration, such as the flowers and leaves on the ground, does neither.

### What can be gathered today

- **Trees:** chop one down from the right-click menu with a [[Hatchet]] in a hand. It takes {{n tuning.world.chopSeconds seconds}}, the tree is gone, its logs lie on the ground where it stood, and a [[Stump]] is left, which the hatchet chops up for one more log. An apple tree with fruit on it can also be picked for [[Apple|apples]], and is then bare for some days. See [[Trees]].
- **Crops:** harvested when ready, with E or the menu, for their food and seeds; see [[Farming]].
- **Rocks:** mined with a [[Pickaxe]] in hand for [[Stone]], and gone; the ore rocks of [[The iron workings]] give [[Iron ore]] and come back after some days. See [[Mining]].
- **Mushrooms and pumpkins:** they sway, and nothing more.

{{planned doc=30 note="Picking mushrooms."}}

## Numbers

- Click reach: {{n census.constants.interact.CLICK_REACH}} tiles.
- A sway lasts {{n census.constants.render_props.WIGGLE_MS}} ms.
- A click restarts a sway only after {{n census.constants.interact.POKE_COOLDOWN_MS}} ms.
- Chopping a tree or a stump: {{n tuning.world.chopSeconds seconds}}.

## With friends

The sways of each step go out to guests in the host's frames, so everyone sees the same field ripple at the same moment. A guest's own click is sent to the host, which checks its reach before the thing sways. Chopping a tree is a menu action run on the host; the tree's removal and the logs reach every player with the changed part of the map.

## See also

- [[Trees]]
- [[Rocks]]
- [[Mushrooms]]
- [[Crops]]
- [[Log]]

## Sources

<!-- sources at cfe0203 -->
- `data/sprites/tree_oak_m.json`, `data/sprites/rock_0.json`, `data/sprites/mushroom_0.json`, `data/sprites/crop_potato_1.json`, `data/sprites/pumpkin.json`: each `interactable: true`
- `src/interact.js:1339-1343`, `src/interact.js:1428-1436`: a click within reach stamps a sway, no restamp inside the cooldown
- `src/render/props.js:94-104`: the sway's length and lean
- `src/interact.js:1364-1388`: found by drawn pixels, crowns included
- `data/sprites/well.json`, `src/interact.js:1577-1585`: the well's click animation instead
- `src/interact.js:1444-1460`, `src/game.js:607`, `src/game.js:616`, `src/game.js:621`: walking through a crop or mushroom sways it, one full sway at a time, only while moving
- `data/ground.json`: flowers and leaves are baked decals, not props
- `data/sprites/tree_apple.json`, `src/interact.js:583-608`: an apple tree laden is picked for apples, then bare (game #192)
- `src/interact.js:638-660`, `src/chop.js:25-50`, `src/interact.js:756-770`, `data/sprites/stump.json`: chopping a tree or a stump with a hatchet, picking a fruit tree, a crop's actions; the stump gatherable and outlined (game #207); nothing else has an action
- `src/interact.js:534-555`, `src/farming.js:233-262`: a ready crop harvested (game #206)
- `src/interact.js:1395-1427`, `src/net.js:865`, `src/net.js:1129-1133`: the sways sent in frames; a guest's click checked by the host
- `src/interact.js:69-91`, `src/map.js:898-916`: a guest's chop run on the host by address; the change travels in the touched chunk
