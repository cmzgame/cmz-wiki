---
title: Wall bracket
categories: [Items, Furniture, Light]
aliases: [Wall brackets]
summary: An iron bracket made at the anvil and hung on a wall's face as a painting is, to hold a torch; taken down again while empty.
---

{{infobox-item wall_bracket}}

A **wall bracket** is an iron holder for a [[Torch]] on a wall. It is made at the [[Anvil]] from an [[Iron bar]], with a [[Smith's hammer]] in hand, and hung from your bag on the face of a wall, the way a painting is (see [[Paintings]]).

## Hanging one

**Place** on the item's menu, in your own bag, starts a ghost: the wall under the cursor drawn again with the bracket on it, green where it may hang within reach and red with the reason where not. It takes the same faces a painting does: a plain, solid, drawn wall, its face toward the camera, with nothing hung there. It refuses a face that has a bracket on it already ("A bracket is already there"), and a painting will not hang over a bracket. A click hangs it ("You hang the bracket on the wall."); Escape or a right click cancels.

## Using it

A hung bracket holds a torch like any other (see [[Torch posts and brackets]]): **Mount the torch**, **Take the torch**, and **Light the torch** or **Put out the torch**. While it is empty, a bracket you hung offers **Take down the bracket**, which puts it back in your bag ("You take the bracket down."). With a torch in it, take the torch first. The village's own brackets are never taken down.

{{item-sections wall_bracket}}

## With friends

Hanging a bracket is a placement command the host carries out for the player who sent it, by the same rules; Take down is the menu's own label, run on the host. The bracket rides with its wall, so every player sees it.

## Sources

<!-- sources at 0ce54cf -->
- `data/items.json`: the Wall bracket item, `bracket: true`
- `data/recipes.json`: the bracket at the anvil, an iron bar, the hammer in hand (`tool: hammer`)
- `src/setdown.js:126-178`: a face's rules (the painting's, and no bracket already), the reach, hanging, taking down only a player's own and only empty, the lines
- `src/map.js:225-243`: a bracket hung `made` and taken off, its chunk touched
- `src/placement.js:343-356`, `src/placement.js:732-745`: Place, the ghost on a face, Escape
- `src/interact.js:575-590`: Take down the bracket on the menu of an empty one a player hung
- `src/placement.js:952-956`: a guest's hanging as a placement command on the host

{{navbox items}}
