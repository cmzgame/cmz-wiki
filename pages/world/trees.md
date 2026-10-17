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

## A world without trees

**Trees** is one of the [[World rules|world rules]], chosen when a world is made (on by default) and never changed after. Off, no tree is made anywhere: not in the valley's forests and not in [[The wild]], however far anyone walks. Everything else is where it would be, the [[Mushrooms]] included: they grow beside where the trees would have stood, the same ones in the same places as in a world with trees.

## With friends

Chopping is a menu action the host performs for whoever asked. The tree's removal and the logs reach every player with the changed part of the map. Whether the world has trees is the host's choice, made with the world; a guest's copy has the host's.

## See also

- [[Gatherables]]
- [[Log]]
- [[The wild]]
- [[Sight]]

## Sources

<!-- sources at 9d9a5b5 -->
- `src/map.js:1896-1935`, `data/maps/valley.json:5082-5097`: trees scattered over the valley except the village and the reserves
- `data/maps/valley.json:5051-5081`: the biome's green, orange, red, and yellow oaks and spires; blue and purple in no map
- `data/sprites/tree_oak_m.json`, `data/sprites/tree_oak_l.json`, `data/sprites/tree_oak_old.json`: per size the collision radius, wood, canopy reach, shadow, and leaf colour
- `src/map.js:1290-1301`, `src/map.js:1356-1398`: only a circle at the trunk blocks, and a body slides round it
- `src/map.js:1249-1259`: a path treats a tree's whole tile as blocked
- `data/ground.json`, `src/ground.js`: the canopy's darkening and the shadow
- `src/render/scene.js:97-121`: the hole in the canopy
- `src/interact.js:47`, `src/interact.js:506-523`: Chop down with the count of logs; no tool; the tree removed and its logs dropped on its tile; "logs on the ground."
- `data/items.json:4`, `data/sprites/fireplace.json`: logs split into planks and feed a fireplace
- `src/interact.js:62-84`, `src/map.js:720-727`: a guest's chop run on the host; the change travels in the touched chunk
- `src/rules.js:20-28`, `src/map.js:44-52`, `src/map.js:290-302`, `src/map.js:1761-1769`, `src/map.js:1931`: the Trees rule, fixed at creation: no tree in the scatter or the wild, the other picks as ever
- `src/map.js:304-338`: the mushrooms placed against where the trees would have stood, never on such a tile (game #149)
