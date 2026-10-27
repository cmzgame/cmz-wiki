---
title: Dead ends
categories: [Lists, Statistics, Building, Crafting]
aliases: [Dead end, Things that can't be made, Things that cannot be made, One of a kind]
summary: Every kind of object in the valley a player can use but never make more of, with how many there are and what is lost when the last one goes; and the kinds that can be made, and how.
---

A **dead end** is an object in [[The valley]] that a player can use but cannot make more of. This page finds them all, so that each can be given a way to be made, or be kept one of a kind on purpose. It counts {{dead-ends n=kinds}} kinds of object a player can do something with: {{dead-ends n=dead}} of them cannot be made in the valley, and {{dead-ends n=made}} can. Every row and every number here is worked out from the game's data each time the wiki is built, so the page follows the game.

## How the lists are made

**What counts as an object you can use.** A kind of object counts when the game gives it something to do: a menu entry, a click, or a use-on row. That is any of these, read from its definition:

- a [[Containers|container]] to search;
- a station to make things at ([[Crafting]]), and a fire that cooks, which is the [[Cooking]] station;
- a [[Fire]] to light and feed;
- a torch post or bracket to hang a torch in ([[Torch posts and brackets]]);
- [[Water]] to drink from;
- a bed to [[Sleep]] in;
- something to mine ([[Mining]]), pick, or chop ([[Trees]]), and the [[Sticks|sticks]] gathered under a standing tree;
- an herb or a mushroom to gather by hand ([[Herbs]]), or a clay bank to dig ([[Clay]]);
- a [[Beehive|beehive]]'s honey to take;
- a grindstone to sharpen at or an anvil to repair at ([[Durability]]), and a [[Sawpit|sawpit]] to saw at;
- an [[Altar|altar]] to pray at (the tables do not read its Pray yet, so today they list the altar under Left out);
- a feeding trough to fill, a set [[Snare|snare]], or a growing sapling;
- a crop to water and harvest ([[Farming]]);
- anything an item can be used on, as the game's list of use-on rows names it;
- furniture that can be picked up and carried ([[Carrying furniture]]), and an item set down from the bag as its object (a snare, a sapling, a campfire, your own [[Cauldron|cauldron]]), counted as made by setting it down;
- a [[Gatherables|gatherable]], which a click sways.

Grass tufts, flowers, leaves, and props with none of these are decoration, and left out. Kinds are grouped as a player names them: a crop's stages are one crop, and the forest's many trees are one row.

**What counts as made.** A kind can be made when a player can bring a new one into the world in the valley: a recipe whose product is that object, at a station the valley has, from materials and tools that can be had there (the same test as [[Production chains]]); the [[Building|build palette]]; or, for a crop, a seed that can be had there. A made container starts empty.

**Collectibles are left out.** The rugs and paintings are marked in the game's data as collectibles: made to be found and kept, never made (see [[Rugs]] and [[Paintings]]). Nothing lists them here for having no recipe; [[Production chains]] names them while nothing in normal play holds them.

**How many.** The props the map places are counted from the map. The trees and mushrooms the map grows by its rules, and the rocks the map adds when it loads to make up the valley's count of stone (see [[Rocks]]), are counted by the game's own map loader, inside the valley's edge. Past the edge, [[The wild]] grows trees, rocks, and mushrooms as it is walked, without end, and is not counted.

## Dead ends

The objects a player can use but cannot make in the valley. The last column says what the valley loses when the last one is used up, taken, or moved.

{{dead-ends table}}

## Can be made

The objects a player can use and can make more of, and how.

{{dead-ends made}}

## Not in the valley

Kinds the game can use that the valley does not place, and where they come from, if anywhere.

{{dead-ends elsewhere}}

## Left out

Placed in the valley with nothing to do with them: {{dead-ends decoration}}

## See also

- [[Production chains]], every item from raw material to product
- [[Crafting]], [[Recipes]], [[Building]]
- [[Day-one food]]

## Sources

<!-- sources at 307ed34 -->
- `data/items.json:114-123`: the rugs and paintings marked `collectible`, left out of the lists (game #526, at c3cb736)
- `data/maps/valley.json`: every placed prop, a container's own `loot`, the wall brackets, the openings and the fences' gates, and the scatter, wild, and forage rules
- `src/map.js:2024-2230`: the map loader, which places the authored props, then grows the scatter's trees and the forage's mushrooms inside the bounds (counted by the wiki's census with this loader, run headless)
- `src/map.js:384-459`: the wild past the bounds, its trees, rocks, and mushrooms grown per tile as it is walked
- `data/sprites`: what each kind is, one file each: `container`, `station`, `fire` (`burns`, `cooks`, `holds`), `water`, `sleep`, `mine`, `pick`, `wood`, `crop`, `carry`, `interactable`
- `src/interact.js:771-786`: a prop's menu, one entry per thing its definition gives
- `src/interact.js:1384-1456`: an interactable sways when clicked
- `src/placement.js:72-78`: which props can be carried, when the definition does not say
- `src/stations.js:46-53`: a fire that cooks is the cooking station, unless it is a station of its own
- `data/interactions.json`: the use-on rows, by the object they name (`fire` any fire that burns, `crop` any crop, `bracket` a wall bracket)
- `src/interact.js:415-473`: a torch post or bracket: take, mount, or light its torch; a lantern is never taken
- `src/interact.js:479-546`: a door, a window, or a gate: open, close, board up
- `src/burn.js:186-260`: a lantern, in a bracket or on a post, is a switch: put out and lit again, and a torch lit at it while it burns (docs/43 section 3); it is no longer always lit
- `data/sprites/altar.json` `pray`: the altar's Pray, which the tables' signals (`lib/templates.js` `deadEnds`) do not read yet
- `src/setdown.js`: an item set down from the bag as its prop
- `data/recipes.json`, `src/stations.js:177-195`: the recipes whose product is a prop, placed beside the station; a made container starts empty
- `data/build.json`, `src/placement.js:199-211`, `src/map.js:600-618`: the build palette's walls, doors, and windows; a door may stand in a fence
- `data/crops.json`, `src/farming.js:179-202`: a crop planted from its seed
