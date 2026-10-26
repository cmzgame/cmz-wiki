---
title: Jack-o'-lantern
categories: [Furniture, Light]
aliases: [Jack-o'-lanterns, Jack o lantern, Carved pumpkin]
summary: A pumpkin carved at the workbench with a dirk: a small light that is lit and put out like the home lights, and carried like furniture.
---

{{infobox-prop pumpkin}}

A **jack-o'-lantern** is a [[Pumpkin]] carved into a lantern. It is made at the [[Workbench]] from one pumpkin, with a [[Dirk]] on you, and set down beside the bench lit. It gives a small light of {{n sprites.pumpkin.fire.radius tiles}} and burns nothing.

## Using it

It is a switch, as the home lights are (see [[Fire#The home lights|Fire]]):

- **Put out the jack-o'-lantern**, with nothing needed.
- **Light the jack-o'-lantern**, with a [[Tinderbox]] or a lit [[Torch]] on you; a Use of either on it lights it too ("You light the jack-o'-lantern.").

It can be picked up and carried like furniture (see [[Carrying furniture]]; the entry reads "Pick up jack-o'-lantern"). A click sways it. When the bench finishes one the game says "Made a jack-o'-lantern.", and the hover card of a tinderbox or a lit torch names it as a thing to Use on, not as a pumpkin.

{{prop-sections pumpkin}}

## With friends

Lighting and putting it out are the menu's labels, run on the host for the player who chose them; whether it is lit travels with its tile.

## Sources

<!-- sources at 0ce54cf -->
- `src/prop-names.js`, `src/stations.js` (`madeWords`), `src/map.js` (`fireName`) at 879d0a7: the prop is named by its recipe's label (game #470)
- `data/recipes.json`: the Jack-o'-lantern at the workbench, a pumpkin, a dirk carried (`uses: cut`), its prop the `pumpkin` sprite
- `data/sprites/pumpkin.json`: its light, lit, a switch, carried, interactable
- `src/map.js:323-325`: its name in the lines, "jack-o'-lantern"
- `data/interactions.json`: a tinderbox or a torch used on it lights it

{{navbox props}}
