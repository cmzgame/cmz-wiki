---
title: Arrow
categories: [Items, Ammunition, Combat]
aliases: [Arrows]
summary: The bow's ammunition, fletched with a feather at the workbench, recovered from bodies and the ground, dipped in a fire to make fire arrows, and coated with poison to make poisoned arrows.
numbersOk: true
---

<!-- typed: the refusal "Short of 1 feather." is the game's own words for the arrows recipe, whose count is in data/recipes.json rows, which no lookup reads -->

{{infobox-item arrow}}

The **Arrow** is the [[Hunting bow]]'s ammunition. Arrows stack to {{n items.arrow.stack}} and are drawn from the bag or the belt. They are made at the [[Workbench]] from a [[Stick]] and a [[Feather]], a batch at a time, with a [[Dirk]] on you; without a feather the recipe is refused, "Short of 1 feather.", so new arrows wait on the hens of [[Hollow Farm]] (see [[Hunting]] and [[Keeping]]). The arrows a new character starts with and those found are as before. [[Use|Used]] on any lit fire (a campfire, a fireplace, a fire pit, the [[Oven]], or the [[Forge]]), the whole stack of arrows you carry becomes [[Fire arrow|fire arrows]] at once: the dip. The fire must be lit and within reach, and only arrows you carry (in a hand, on the [[Belt]], or in the bag) are dipped; a stack in an open chest or a body is refused with "Take the arrows out first." See [[Fire arrow]]. A vial of [[Poison]] or [[Strong poison]] used on arrows you carry coats up to {{n combat.poison.arrows}} of them, making [[Poisoned arrow|poisoned]] or [[Strongly poisoned arrow|strongly poisoned arrows]]; a poison on fire arrows does nothing.

## Combat

An arrow that hits one of [[The dead]] stays in the body and comes out with its loot when it is killed and searched (see [[Corpses]]). A miss, or a shot stopped by a wall or a tree, lies where it came down and is picked up with E. Arrows do not break. A dry release, before enough of a draw, spends nothing. See [[Archery]].

The bow takes its arrows in an order: fire arrows first, then strongly poisoned arrows, then poisoned arrows, then plain arrows, so plain arrows are shot only when none of the others are carried. A fire or poisoned arrow that hits or lands comes back as a plain arrow.

The arrow's hover card says: "Shot from a hunting bow (19 to 38 damage by the draw), when no fire arrows, strongly poisoned arrows or poisoned arrows are carried." (before game #496, "when no fire arrows are carried.") The card is worked out from the bow's data, so it names the bows that take the arrow and where the arrow stands in their order.

{{item-sections arrow}}

## Sources

<!-- sources at 0bd3f9c -->
- `data/items.json`: the arrow, its stack of 20
- `src/archery.js:635-649`, `src/archery.js:659-676`: arrows taken from the bag or the belt at release; a dry release spends nothing
- `src/archery.js:267-282`: a hit lodges an arrow, a miss or a stopped shot lies on the floor; no break for arrows; a fire arrow lodges or lands as a plain arrow
- `src/entities/character.js:139-162`: lodged arrows come out in the body's loot
- `src/archery.js:568-572`: fire arrows drawn before plain ones
- `data/items.json:24` `bow.ammo`, `src/archery.js:819-826`, `data/interactions.json:24-25` (at 307ed34): the bow's order with the poisoned arrows, and the coat that makes them (game #496)
- `data/interactions.json`, `src/burn.js:73-94`: the `dip` verb: arrows used on a lit fire become fire arrows, the whole stack; refused when the fire is out, from beyond `DIP_REACH`, or with the arrows not carried
- `src/item-info.js` `shotLines` (at dc10b81): the card's line for an arrow: the bows that shoot it, their damage by the draw, its place in their `ammo` order (game #471)
- `data/recipes.json:327-347`: arrows fletched: a stick and a feather, a dirk carried (game #462, at d625844)

{{navbox weapons}}
