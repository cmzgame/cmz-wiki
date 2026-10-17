---
title: Tinderbox
categories: [Items, Tools, Light]
aliases: [Tinder]
summary: The tool that lights a torch with T; every new character starts with one, and it never wears out.
---

{{infobox-item tinderbox}}

The **tinderbox** lights a [[Torch]]. Every new character starts with one in the bag, beside the torch in their hand, which starts out. It never wears out and is never used up. Nothing makes one yet, and the only other is in the [[Developer chest]].

## Using it

There is nothing to do with the tinderbox itself: carry it, and `T` lights the torch in your hand, or else the one on your belt ("You light the torch."). Without a tinderbox on you, `T` can still douse a lit torch, but it cannot light one: "You need a tinderbox to light it." See [[Torch#Lit or out|Torch]].

A torch goes out whenever it leaves a hand, the belt, or a holder, so a torch put away in the bag needs the tinderbox to be lit again.

{{item-sections tinderbox}}

## With friends

`T` is carried out by the host for whoever pressed it, with that player's own tinderbox.

## Sources

<!-- sources at 2a97f49 -->
- `data/items.json:19`: the tinderbox: a tool, 1 by 1, no wear, placeholder art
- `src/game.js:104-120`: the starter kit's tinderbox in the bag beside the torch in hand, out
- `data/loot.json`: the dev kit's tinderbox; no other table holds one
- `data/recipes.json`: no recipe makes one
- `src/interact.js:972-993`: `T` lights a torch only with a tinderbox carried, douses without one; its messages
- `src/inventory.js:87-96`: a tinderbox counted in the hands, the belt, or the bag
- `src/items.js:193-206`: a torch out when it leaves a hand, the belt, or a holder
- `src/interact.js:931`, `src/interact.js:970`: `T` an event in the player's input, performed by the host's step

{{navbox items}}
