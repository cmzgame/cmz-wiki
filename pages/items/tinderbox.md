---
title: Tinderbox
categories: [Items, Tools, Light]
aliases: [Tinder]
summary: The tool that lights a torch with T, and a campfire or a mounted torch when used on it; every new character starts with one, and it never wears out.
---

{{infobox-item tinderbox}}

The **tinderbox** is a flame you carry. It lights a [[Torch]], a campfire, or a torch mounted in a bracket or on a post. Every new character starts with one in the bag, beside the torch in their hand, which starts out. It never wears out and is never used up. Nothing makes one yet, and the only other is in the [[Developer chest]].

## Using it

- **`T`**: with a tinderbox on you, `T` lights the torch in your hand, or else the one on your belt ("You light the torch."). Without one, `T` can still douse a lit torch, but it cannot light one: "You need a tinderbox to light it." See [[Torch#Lit or out|Torch]].
- **[[Use]]** it on what you want lit:
  - a campfire that is out but has fuel in it ("You light the fire.");
  - a torch on a torch post that is out ("You light the torch."); a torch in a bracket is lit from its menu, below;
  - an unlit torch in your hand or on your belt (with the bag open, click its slot).
- **Light the torch** on the right-click menu of a bracket or a post holding a torch that is out lights it with the tinderbox you carry (see [[Torch posts and brackets]]).

The target must be within {{n census.constants.burn.DIP_REACH tiles}} of you, in sight: never through a wall or a shut door. Each refusal says why: "It is already burning.", "It has nothing to burn.", "There is no torch there.", "It is already lit.", "Too far away.", "There is a wall in the way.", "A lantern is always lit.", or, for a torch in the bag, "Only a torch in a hand or on the belt can be lit that way." A hearth, a fireplace, an [[Oven]], or a [[Forge]] cannot be lit with it ("That cannot be lit."); those are lit from their own menus with their fuel (see [[Fire]]).

A lit torch does everything a tinderbox does here, so one lit torch can light another. A torch goes out whenever it leaves a hand, the belt, or a holder, so a torch put away in the bag needs a flame to be lit again.

{{item-sections tinderbox}}

## With friends

`T` and a Use are carried out by the host for whoever asked, with that player's own tinderbox, and what they light is lit for everyone and kept in the save.

## Sources

<!-- sources at 2ea0d24 -->
- `data/items.json:19`: the tinderbox: a tool, 1 by 1, no wear, placeholder art
- `src/game.js:104-120`: the starter kit's tinderbox in the bag beside the torch in hand, out
- `data/loot.json`: the dev kit's tinderbox; no other table holds one
- `data/recipes.json`: no recipe makes one
- `src/interact.js:987-1008`: `T` lights a torch only with a tinderbox carried, douses without one; its messages
- `src/inventory.js:87-96`: a tinderbox counted in the hands, the belt, or the bag
- `data/interactions.json`, `src/burn.js:97-199`: the `light` verb: a tinderbox or a lit torch used on a campfire with fuel, a mounted torch, or an unlit torch in a hand or on the belt; never a hearth, an oven, or a forge; its refusals; within `DIP_REACH` and in sight
- `src/burn.js:74`: the reach
- `src/use.js:94-104`: a Use runs the verb and says its line, or the reason
- `src/interact.js:409-421`: Light the torch on a holder's menu
- `src/map.js:284-312`: what can be lit, touched for the save and the wire
- `src/items.js:193-206`: a torch out when it leaves a hand, the belt, or a holder
- `src/ui/inventory-actions.js:368-399`, `src/main.js:1003-1009`: a guest's Use, by the item's uid and the slot, run on the host as that player

{{navbox items}}
