---
title: Sapling
categories: [Items, Materials, Trees]
aliases: [Saplings, Planting a tree, Plant a tree]
summary: A young tree a felled tree sometimes drops; planted on open grass outdoors, it grows into a tree over a few game days, waiting while anyone stands on it.
---

{{infobox-item sapling}}

A **sapling** is a young tree. Felling a tree with a [[Hatchet]] sometimes drops one on the stump's tile, about {{pct tuning.trees.sapling.chance}} of the time (see [[Trees]]). Planted from the bag on open grass outdoors, it grows over about {{n tuning.trees.sapling.days game days}} into a tree of its own: the round oak, or an apple tree if it came from one. It is the one way to grow a new tree in [[The valley]]: a felled tree never comes back where it stood.

## Where it comes from

Every tree felled rolls the chance once, a laden or bare apple tree too, and the sapling lies on the tile beside the logs. Chopping up a [[Stump]] never drops one. When one drops, the chop's line says so: "... logs on the ground, and a stump; a sapling fell too." The skill the game names for it, Woodcutting at level {{n tuning.trees.sapling.level}}, is recorded and not asked for yet, so anyone may get one.

A sapling from an apple tree grows an apple tree, so felling one never loses an orchard for good. The sapling remembers which tree it grows into: its card says so, and it keeps it in the bag, when planted, and when picked up again.

## Planting

Pick **Place** on the sapling in the bag, as a [[Torch post]] is set down: a ghost of it follows the pointer, green where it may go and red with the reason where it may not, and a click plants it. It may only go on open grass outdoors, and the refusal says why:

- "No room": something stands or lies on the tile, or a rug is laid there.
- "Outdoors only": the tile is inside a room.
- "Open grass only": the tile is not the valley's own grass: a road or a path, a built floor, tilled soil, or water.
- "Not against a wall": a wall of any kind is on one of the tile's four edges, a fence, a gate, or a door included, so a tree never grows in a doorway or against a house.

A fenced yard is open to it, so you can plant an orchard in your own yard. Planting says "You plant the sapling."

## Growing

A planted sapling grows on the world's clock, so time asleep counts. It shows two stages, each for half of its growing: a small whip of a tree, then one about twice the height. At the end it becomes the tree in its place, an ordinary tree that blocks, casts its canopy, and can be felled for its logs like any other.

**It waits while anyone stands on it.** The game looks at every sapling once every {{n tuning.trees.checkSeconds seconds}} of the clock. If a body stands on its tile at a look (a player, one of [[The dead]], a villager, an animal, or a body lying there), the growing since the last look is lost and added to its wait, so a sapling never grows into a tree under anyone. A sapling that is ready also waits while the planting rule would now refuse it: a wall, fence, gate, or door built on its edge since, or a room closed round it. It grows as soon as that changes.

A planted sapling does not block: anyone walks over it, and walking through sets it swaying, as a crop does. It is outlined so it can be found in the grass.

## Its menu

- **Inspect** says how long it still has: "A sapling: a tree in about N days of growing, which waits while anyone stands on it." (an apple tree's says "an apple tree"). For one that cannot grow where it is, it gives the reason instead: "A sapling that cannot grow into an apple tree here: not against a wall. It waits until that changes." Inspect reads the sapling and the clock on your own screen, and reaches as far as any Inspect.
- **Pick up sapling** puts it back in the bag as the item, still carrying the tree it grows into. Its growing is lost: planted again, it starts from the beginning. With no room in the bag it is refused: "No room in your bag."

It is not a thing you made, so it has no Take apart.

## Its card

The sapling's card names it a Seedling and says: "Place: plant on open grass outdoors.", that it grows into a tree (or an apple tree) in about {{n tuning.trees.sapling.days game days}} and waits while anyone stands on it, and that it is sometimes dropped by a felled tree, with the chance rounded to one in a whole number.

{{item-sections sapling}}

## With friends

The drop is rolled on the host when anyone fells a tree. A guest plants a sapling from their own bag through the same Place, which the host checks by the same rule. The growing, the waiting, each stage, and the grown tree are the host's, and reach every player with the changed part of the map; they are saved with the world. Anyone standing on a sapling, a guest included, makes it wait. Inspect is each player's own line; Pick up is done by the host for whoever asked.

## Sources

<!-- sources at 6e3ab37 -->
- `data/tuning.json:193-197`: the sapling's item, chance, days, stages, the tree it grows (`tree_oak_m`), its skill and level, and the look's `checkSeconds`
- `src/trees.js:122-128`, `src/chop.js:39-53`: one roll per tree felled with a canopy (never a stump), the sapling dropped on the tile, the entry carrying the tree it grows into, the chop's line
- `src/trees.js:68-79`, `data/sprites/tree_apple.json`, `data/sprites/tree_apple_bare.json`: `saplingGrows`: an apple tree's sapling grows an apple tree, every other the round oak
- `data/items.json:120`: the Sapling: `place` its first stage, `stand` natural
- `src/setdown.js:34-35`, `src/setdown.js:79-95`, `src/trees.js:42-66`: Place on the stand rule natural and its four refusals; planted, not solid, not a made thing, growing from now with its entry's tree; "You plant the sapling."
- `src/trees.js:89-120`, `src/trees.js:141-178`, `src/game.js:737`: growth on the clock less its wait; two stages, each an equal share; the look every `checkSeconds`, a body on the tile adding the time to the wait; ready, it becomes its tree keeping its id, or waits while the stand rule refuses it
- `src/trees.js:130-139`: the grown tree in place with the sapling's id
- `data/sprites/sapling_0.json`, `data/sprites/sapling_1.json`, `src/interact.js:1778-1795`: the two stages, outlined (`interactable`), swayed by walking through
- `src/interact.js:744-760`, `src/interact.js:728`, `src/interact.js:991`, `src/trees.js:110-120`: Inspect, local, its lines
- `src/interact.js:1002`, `src/interact.js:1033-1046`, `src/setdown.js:103-125`: Pick up, the entry keeping its tree, refused with no room in the bag
- `src/item-info.js:99-109`, `src/item-info.js:136`, `src/item-info.js:173-179`: the card: Seedling, Place, what it grows into, the drop's chance rounded

{{navbox items}}
