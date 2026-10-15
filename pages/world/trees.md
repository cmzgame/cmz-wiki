---
title: Trees
categories: [Gatherables, The world]
aliases: [Tree, Oak, Spire, Chopping, Woodcutting]
summary: The forest's trees: oaks and spires in three sizes, which can be chopped down for logs with no tool.
---

Trees stand all over [[The valley]] outside the village and its reserves, and fill [[The wild]] beyond it. They are [[Gatherables]]: a click sways them, and any tree can be chopped down for [[Log|logs]] with no tool at all.

## Kinds

There are two shapes, the round oak and the tall spire, each in six colours (green, blue, orange, purple, red, and yellow) and three sizes: medium, large, and old. The valley's forest grows the green, orange, red, and yellow trees of both shapes; blue and purple trees appear in no map. Each tree drops leaves of its own colour on the ground round it.

| Size | Blocks a circle of | Logs when chopped | Canopy reaches |
|---|---|---|---|
| Medium | {{n sprites.tree_oak_m.collide.radius}} tiles | {{n sprites.tree_oak_m.wood}} | {{n sprites.tree_oak_m.canopy.reach}} tiles |
| Large | {{n sprites.tree_oak_l.collide.radius}} tiles | {{n sprites.tree_oak_l.wood}} | {{n sprites.tree_oak_l.canopy.reach}} tiles |
| Old | {{n sprites.tree_oak_old.collide.radius}} tiles | {{n sprites.tree_oak_old.wood}} | {{n sprites.tree_oak_old.canopy.reach}} tiles |

## Walking among them

Only a small circle at the trunk blocks you, so you can slip between trees. Walking into a trunk slides you round it. The dead and villagers find their paths round the whole tile. The ground under a canopy is drawn a little darker, and a tree casts a shadow.

When you walk behind a tall tree, a soft hole opens in its canopy so you can see yourself. See [[Sight]].

## Chopping

Right-click a tree and pick **Chop down**; the menu names how many logs it will give. It takes {{n census.constants.interact.CHOP_TIME}} seconds and needs no [[Hatchet]] or other tool. The tree is gone, no stump is left, and its logs lie on the ground on its tile: "logs on the ground."

Logs are fuel for a [[Fire|fireplace]], and can be split into [[Plank|planks]].

## With friends

Chopping is a menu action the host performs for whoever asked. The tree's removal and the logs reach every player with the changed part of the map.

## See also

- [[Gatherables]]
- [[Log]]
- [[The wild]]
- [[Sight]]

## Sources

<!-- sources at 9205ad7 -->
- `src/map.js:1731-1767`, `data/maps/valley.json:5082-5097`: trees scattered over the valley except the village and the reserves
- `data/maps/valley.json:5051-5081`: the biome's green, orange, red, and yellow oaks and spires; blue and purple in no map
- `data/sprites/tree_oak_m.json`, `data/sprites/tree_oak_l.json`, `data/sprites/tree_oak_old.json`: per size the collision radius, wood, canopy reach, shadow, and leaf colour
- `src/map.js:1172-1183`, `src/map.js:1238-1280`: only a circle at the trunk blocks, and a body slides round it
- `src/map.js:1131-1141`: a path treats a tree's whole tile as blocked
- `data/ground.json`, `src/ground.js`: the canopy's darkening and the shadow
- `src/render/scene.js:97-121`: the hole in the canopy
- `src/interact.js:46`, `src/interact.js:515-532`: Chop down with the count of logs; no tool; the tree removed and its logs dropped on its tile; "logs on the ground."
- `data/items.json:4`, `data/sprites/fireplace.json`: logs split into planks and feed a fireplace
- `src/interact.js:61-83`, `src/map.js:660-667`: a guest's chop run on the host; the change travels in the touched chunk
