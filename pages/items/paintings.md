---
title: Paintings
categories: [Items, Decor, Mechanics]
aliases: [Painting, Hanging a painting, Hung painting, Place a painting]
summary: A painting is an item carried in the bag; Place hangs it on the face of a plain wall, and Pick up takes it down again.
---

A **painting** is an item you carry in your bag and hang on a wall where you like. There are eight, in three shapes: three small ones, the [[Lone oak painting]], the [[Deer painting]], and the [[Snow peak painting]]; two tall ones, the [[Waterfall painting]] and the [[Pines painting]]; and three wide ones, the [[Castle painting]], the [[Lake painting]], and the [[Sunset painting]]. Hung, a painting sits flat on the wall's face; taken down, it goes back into the bag. A painting is a collectible, made to be found, brought home, and kept: nothing makes one, and none ever will. Nothing in the valley holds one yet. The [[Developer chest]] holds one, the [[Castle painting]], to try hanging a wide one; any of the eight can be added to a new world's **Extra starting items** (see [[World rules]]).

## How it works

### In the bag

A small painting is {{n items.painting_small_oak.size.0}} by {{n items.painting_small_oak.size.1}} cells, a tall one {{n items.painting_tall_pines.size.0}} by {{n items.painting_tall_pines.size.1}}, and a wide one {{n items.painting_wide_castle.size.0}} by {{n items.painting_wide_castle.size.1}}. Its kind is Decor, and its [[Inventory#The hover card|hover card]] says "**Place**: hang on a wall's face."

### Hanging it

A painting in your own bag has **Place** on its right-click menu, after **Use**. Place starts a ghost of the painting on the face of the wall under the cursor, with "Click to hang the painting · Esc cancel" beside it. Away from any wall it says "Aim at a wall". The ghost is green where the painting can hang and red where it cannot, with the reason:

- **Too far**: the floor under the painting is more than {{n census.constants.paintings.REACH tiles}} from you.
- **There is a wall in the way.**: a wall, a shut door, or closed shutters stand between you and it. You hang a painting from the side of the wall it faces.
- **Nothing to hang it on**: the wall is a door, a window, a fence, bars, or a broken piece. Only a plain, solid wall takes a painting.
- **A bracket is in the way**: a torch bracket is on that face.
- **Something already hangs there**: one painting to a stretch of wall.
- **A corner is in the way**: another wall meets the end of the run on your side, and would hide much of the painting.
- **Too wide for the wall** and **A post is in the way**: a wide painting needs two stretches of the same wall side by side, with no wall meeting the joint between them.

A painting goes only on the face of a wall turned toward the camera: the inside of a building's north and west walls, and the outside of its south and east walls. A wide painting aimed at the last stretch of a wall hangs from the one before it. A click on a green ghost hangs the painting and it leaves your bag; a click on a red one says why. `Escape` or a right click cancels, and the painting stays in the bag.

### Hung

A hung painting is drawn on the wall's face, lit like the wall, and fades with the wall when you stand behind it. Furniture and characters in front of it are drawn over it. [[Settings|Object Highlight]] outlines it under the pointer.

### Taking it down

Right-click a hung painting for **Pick up** and its name ("Pick up castle painting"), beside **Walk here**. It goes back into your bag, or, with the bag full, it lies at your feet: "Your bag is full: the painting is at your feet." `E` never takes a painting down.

### When its wall goes

If the wall a painting hangs on is removed, or a door or a window is built over it, the painting falls to the floor on its own side of the wall as the item, whole. It is never lost with its wall. It may land under a piece of furniture; it can still be picked up there.

## Numbers

- Bag size: small {{n items.painting_small_oak.size.0}} by {{n items.painting_small_oak.size.1}}, tall {{n items.painting_tall_pines.size.0}} by {{n items.painting_tall_pines.size.1}}, wide {{n items.painting_wide_castle.size.0}} by {{n items.painting_wide_castle.size.1}}.
- On the wall: a small or a tall painting takes one stretch of wall, a wide one two.
- Reach to hang or take down: {{n census.constants.paintings.REACH tiles}}.

## With friends

A guest hangs and takes down paintings as the host does. Place only starts the ghost on the guest's own screen; the click sends the wall and the painting to the host, who runs the same reach and fit and tells the guest why if it refuses. A guest's Pick up is sent by the wall's place on the map and run on the host. A hung painting is part of its wall, so it is saved with the world and sent to everyone with the wall. If two players take down the same painting at once, only the first gets it.

## See also

- [[Rugs]], the other decor placed from the bag
- [[Inventory]]
- [[Placement]]
- [[Walls]]

## Sources

<!-- sources at 9ac68a2 -->
- `data/items.json:116-123`: the eight paintings marked `collectible`, found and never made (game #526, at c3cb736; the game's docs/02, 2026-10-27)
- `data/items.json:75-82`: the eight paintings, kind decor, small 2 by 2, tall 2 by 3, wide 3 by 2 (game #344, at 9ac68a2)
- `data/loot.json:20`: the castle painting alone in the dev kit; no other table holds one (game #514, at 393acaf)
- `data/sprites/decor_paintings.json`: each painting drawn on a north and a west wall (game #344, at 9ac68a2)
- `src/item-info.js:98`: the hover card's Place line (game #344, at 9ac68a2)
- `src/interact.js:1336-1337`: Place on a painting in your own bag (game #344, at 9ac68a2)
- `src/placement.js:250`, `src/placement.js:534-536`, `src/placement.js:778`: the ghost on the face under the cursor, "Aim at a wall", the click, Escape (game #344, at 9ac68a2)
- `src/paintings.js:22`, `src/paintings.js:53-97`, `src/paintings.js:112-115`: the reach and the line, and each refusal: which walls, the bracket, one to a stretch, the corner, a wide one's two stretches and joint (game #344, at 9ac68a2)
- `src/paintings.js:126-153`: hung on the host, the item out of the bag, the painting in the wall's own record (game #344, at 9ac68a2)
- `src/render/paintings.js`, `src/render/walls.js`: drawn after its wall, lit and faded with it; a wide one in two halves, each with its own stretch of wall (game #344, at 9ac68a2)
- `src/interact.js:324-337`, `src/interact.js:966-967`, `src/paintings.js:171-190`: Pick up and its name; at your feet with a full bag; the second take-down of one painting gets nothing (game #344, at 9ac68a2)
- `src/map.js:647`, `src/map.js:670`: a painting falls to the floor when its wall is removed or built over (game #344, at 9ac68a2)

{{navbox items}}
