---
title: Torch post
categories: [Items, Furniture, Light]
summary: A post that holds a torch, made at the workbench as an item and set down outdoors; picked up again once its torch is taken.
---

{{infobox-item torch_post}}

A **torch post** is a post that holds a [[Torch]] outdoors. You make one at the [[Workbench]] as an item, carry it in your bag, and set it down where you want a light. The valley has its own too: one by the square and four along the high street, each holding an unlit torch for a player to light.

## Setting one down

**Place** on the item's menu, in your own bag, starts a ghost of the post on the tile under the cursor. It is green where a post may stand and red with the reason where it may not:

- **Outdoors only**: the tile is inside a room.
- **No room**: the tile is not open floor, or something stands on it, or a rug is laid there.
- **Too far**, or a wall in the way: it is set down within {{n census.constants.setdown.REACH tiles}} and in sight.

A click sets it down ("You set the torch post down."); Escape cancels. It stands empty.

## Using it

A post holds a torch as a wall bracket does (see [[Torch posts and brackets]]): **Mount the torch** with a torch about you, **Take the torch**, and, while one is on it, **Light the torch** with a flame or **Put out the torch**. A lit torch on a post burns down at the wall rate and lights the ground round it.

## Picking it up and taking it apart

**Pick up torch post** puts it back in your bag as the item. It is refused while a torch is on it ("Pick up torch post (take the torch first)"), and the village's own posts are never picked up ("that is the village's"). A post you made also has **Take apart**, which gives back half the materials of its recipe and asks for a [[Smith's hammer]] on you (see [[Building#Taking apart|Building]]).

{{item-sections torch_post}}

## With friends

Setting a post down is a placement command the host carries out for the player who sent it, by the same rules; Pick up, Mount, Take, Light, and Put out are the menu's own labels, run on the host. The post and its torch travel with its tile, so every player sees the same light.

## Sources

<!-- sources at 0ce54cf -->
- `data/items.json`: the Torch post item: `place: "torch_post"`, `stand: "outdoors"`
- `data/recipes.json`: the torch post at the workbench, two planks and a stick, with a hammer carried (`uses: build`)
- `src/setdown.js:31-46`, `src/setdown.js:68-90`: the stand rule, "Outdoors only", "No room", "Too far"; set down `made`, "You set the torch post down."
- `src/placement.js:324-339`, `src/placement.js:717-730`: Place, the ghost, Escape
- `src/setdown.js:92-124`, `src/interact.js:970-990`: Pick up, refused with a torch on it or when it is the village's
- `data/sprites/torch_post.json`: the post holds a torch, its `item`
- `tools/mapgen/valley.py:212-215`: the valley's five posts, each with an unlit torch (game #428)
- `src/placement.js:587-600`: Take apart by the item's recipe
- `src/placement.js:947-951`: a guest's set-down as a placement command on the host

{{navbox items}}
