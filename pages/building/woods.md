---
title: Woods
categories: [Building, Mechanics]
aliases: [Oak wall, Spruce wall, Mahogany wall, Daub wall, Winter Pine wall, Bloodbark wall, Daub, Winter Pine, Bloodbark, Leaves, Leaf wood, Wall woods]
summary: Oak, spruce, mahogany, and daub walls are the valley's and can be built; Winter Pine and Bloodbark are the regions' woods; a door or a window may be of a different wood from its wall.
---

The wooden walls come in six kinds, each a wall of its own: **oak**, **spruce**, **mahogany**, and **daub** (the limewashed timber frame) are the valley's, and **Winter Pine** and **Bloodbark** are the woods of regions beyond it. Nothing is painted: a spruce wall is spruce through and through. A **door** or a **window** may be of a different wood from the wall it stands in, so an oak house can have Winter Pine doors and shutters. All of them can be [[Building|built]] from the palette on N.

## How it works

### The six walls

- **Oak**: the common wall, mid brown.
- **Spruce**: a lighter, warmer wood.
- **Mahogany**: a deep red-brown.
- **Daub**: pale limewash between dark timbers. It has no doors or shutters of its own: its doors and windows are oak unless another wood is chosen.
- **Winter Pine**: a pale, almost grey-white wood, from the Pale Reach.
- **Bloodbark**: a dark blood red, from the Crimson Abbey. It is the darkest wall in the game: at night, away from a light, it is close to black.

Every one is a wooden wall of the same height and thickness, blocks bodies and sight as any wall does, and is never damaged by [[The dead|the dead]]; its doors and windows can be broken like any (see [[Breaking in]]). Where two different woods meet, a post stands at the joint.

### In the valley

The valley's own buildings are built in oak, spruce, mahogany, and daub, mixed: for example, [[The inn]] is mahogany, the baker's and the priest's houses are daub, Hollow Farm's great barn is spruce, and [[Your cottage]] is oak. Winter Pine and Bloodbark are nowhere in the valley.

### Building them

The build palette has a row for each wall: **Oak wall**, **Spruce wall**, **Mahogany wall**, and **Daub wall**, each {{n build.wall_oak.cost.plank}} [[Plank|plank]], built at once with a [[Smith's hammer]] on you, beside the **Log wall**. **Winter Pine wall** and **Bloodbark wall** appear only while **Free building** is on, until their regions can be reached; built without it they are refused ("Winter Pine is found beyond the valley").

### The wood of a door or a window

A door or a window is built in its wall's own wood unless you choose another. While a Door or a Window is picked in the palette, **R** cycles the wood of its leaves and shutters: the wall's own, oak, spruce, mahogany, and, with Free building on, Winter Pine and Bloodbark. The choice shows under the row and beside the ghost as "leaves: Spruce · R", and the ghost shows the door in that wood.

- Only a wall of wood takes a door or window of another wood. A log or stone wall, or a bare edge, takes only its own: "Only a wood wall takes a spruce window · R to change".
- A gate in a [[Fences|fence]] has no choice of wood.
- Built over a broken door or window, a new one is never a repair, but its wood starts as the old one's ("leaves: as it was, Winter Pine · R"). A broken Winter Pine door rebuilt without Free building is refused, as a chosen Winter Pine one is.
- A door or a window costs the same whatever its wood.

Removing a door or a window you built puts the wall back in its own wood.

## Numbers

- A wall of any of the six woods: {{n build.wall_oak.cost.plank}} plank, built at once.
- Height and thickness: oak {{n sprites.wall_wood.wall.height}} by {{n sprites.wall_wood.wall.thickness}}, spruce {{n sprites.wall_spruce.wall.height}} by {{n sprites.wall_spruce.wall.thickness}}, mahogany {{n sprites.wall_mahogany.wall.height}} by {{n sprites.wall_mahogany.wall.thickness}}, daub {{n sprites.wall_daub.wall.height}} by {{n sprites.wall_daub.wall.thickness}}, Winter Pine {{n sprites.wall_winterpine.wall.height}} by {{n sprites.wall_winterpine.wall.thickness}}, Bloodbark {{n sprites.wall_bloodbark.wall.height}} by {{n sprites.wall_bloodbark.wall.thickness}} pixels.
- A door: {{n build.door.cost.plank}} planks; a window: {{n build.window.cost.plank}} planks, in any wood.

## With friends

A guest builds every wall and chooses the wood of a door or window as the host does: the click sends the wood with the build, and the host refuses what its own click would refuse. A door's or window's wood is part of the wall, so it is saved with the world and sent to everyone with the wall, and every screen draws it in that wood.

## See also

- [[Walls]]
- [[Building]]
- [[Openings]]
- [[Fences]]

## Sources

<!-- sources at 9d1681f -->
- `data/sprites/wall_wood.json`, `data/sprites/wall_spruce.json`, `data/sprites/wall_mahogany.json`, `data/sprites/wall_daub.json`, `data/sprites/wall_winterpine.json`, `data/sprites/wall_bloodbark.json`: the six walls, each with its post and leaves; `wood`, `name`, `region` for the two regions' woods, and daub's `leaf` naming oak's (game #348, #351, at 9d1681f)
- `data/art/village`, `data/wood_tones.json`: the delivered walls, and the tables of each wood's tones (game #348, #351, at 9d1681f)
- `tools/mapgen/valley.py`: which valley building is in which wood; no region's wood in the valley (game #348, at 9d1681f)
- `src/render/walls.js`: a post where two walls meet, the first wall's when the materials are equal (game #348, at 9d1681f)
- `data/build.json`: a row per wall, one plank and three seconds with the hammer; Winter Pine and Bloodbark marked `region` (game #351, at 9d1681f)
- `src/woods.js:15`, `src/woods.js:41-67`: the woods a door or window may take, in order; only in a wall of wood; the regions' woods with Free building; stored only when not the wall's own; over a broken one, the old one's wood (game #351, at 9d1681f)
- `src/woods.js:115-170`: a shut door's and closed shutters' picture recoloured from oak's for the chosen wood, on each screen (game #351, at 9d1681f)
- `src/placement.js:86-96`, `src/placement.js:381`, `src/placement.js:829`: R cycles the wood; "leaves: … · R" under the row and at the ghost (game #351, at 9d1681f)
- `src/map.js:664-665`: the leaf stored on the wall when a door or window is built (game #351, at 9d1681f)

