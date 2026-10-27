---
title: Strongly poisoned arrow
categories: [Items, Ammunition, Combat]
aliases: [Strongly poisoned arrows, Strong poison arrow, Strong poison arrows]
summary: An arrow coated with strong poison. A bow shoots these after fire arrows and before ordinary poisoned and plain arrows, and what one hits is strongly poisoned.
numbersOk: true
---

<!-- typed: the hover card's own figures quoted: 19 to 38 is the bow's damage by the draw, worked out from the data; "five arrows a vial" is combat.poison.arrows in the game's words -->
{{infobox-item strong_poison_arrow}}

The **Strongly poisoned arrow** is an [[Arrow]] coated with [[Strong poison]]. A [[Hunting bow]] shoots it as an arrow, and the one of [[The dead]] or the animal it hits is strongly poisoned (see [[Poison#Poisoned|Poison]]). They stack to {{n items.strong_poison_arrow.stack}} and take the same room in the bag as arrows.

## Creation

[[Use]] a vial of [[Strong poison]] on plain arrows you carry: up to {{n combat.poison.arrows}} of the stack become strongly poisoned arrows, and the empty vial comes back. The chat log says "You coat 5 arrows with strong poison." See [[Poison#Poisoned arrows|Poison]] for the rest of the stack and a full bag. A poison on a [[Fire arrow]] does nothing.

## Combat

- The bow takes its arrows in an order: [[Fire arrow|fire arrows]] first, then strongly poisoned arrows, then [[Poisoned arrow|poisoned arrows]], then plain ones.
- The draw, the arc, the damage, and what stops a shot are the arrow's (see [[Archery]]).
- In flight it is an arrow with a dark green head, darker than a poisoned arrow's.
- One that hits strongly poisons the body after the damage: a stack, and the whole of its poison made strong. A body the arrow kills is not poisoned. It then stays in the body as a plain [[Arrow]], and comes out as one in the loot.
- A miss, or a shot stopped by a wall or a tree, lies where it came down as a plain arrow.

Its hover card says: "Shot from a hunting bow (19 to 38 damage by the draw), after any fire arrows and before any poisoned arrows or arrows.", "Strongly poisons the dead and game it hits: a stack a hit, up to {{n combat.poison.max}}, draining {{n combat.poison.dpsByStacks.strong.0}}, {{n combat.poison.dpsByStacks.strong.1}}, or {{n combat.poison.dpsByStacks.strong.2}} a second for {{n combat.poison.duration}} seconds after the last.", and "Made from arrows: **Use** strong poison on them (coat)."

It is drawn as an arrow with a dark green head, the same picture in the bag, in the hand, and lying on the floor; only its flight is still the game's generated arrow.

{{item-sections strong_poison_arrow}}

## The sound it makes

It lands with the arrow's thump. See [[Sound]].

## With friends

As for the [[Poisoned arrow#With friends|poisoned arrow]]: a guest coats with their own Use, carried out by the host, and the flights and the poisoned bodies reach every screen.

## Sources

<!-- sources at 307ed34 -->
- `data/items.json:28`: the strongly poisoned arrow: ammunition, `poisoned: { tier: 2 }`, its stack and size the arrow's (game #496); its icon and its picture drawn in art round 5, in flight still generated (game #519, at ece297c)
- `data/items.json:24` `bow.ammo`: fire arrows, strongly poisoned, poisoned, then plain
- `data/interactions.json:25`, `src/poison.js:146-188`: strong poison used on arrows makes up to `arrows` of them
- `src/archery.js:809-826` `launcherOf`: the first arrow carried in the bow's order, its `poisoned` tier
- `src/archery.js:298-335`, `src/poison.js:93-105`: its hit strongly poisons after the damage; it lodges or lands as a plain arrow
- `src/archery.js:718-719`, `src/main.js:1485`: its flight's picture, the darker green head
- `src/item-info.js:186-216` `shotLines`: the card's lines
- `src/sound-cues.js:31`: its landing is the arrow's sound

{{navbox weapons}}
