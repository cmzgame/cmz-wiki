---
title: Poisoned arrow
categories: [Items, Ammunition, Combat]
aliases: [Poisoned arrows, Poison arrow, Poison arrows]
summary: An arrow coated with poison. A bow shoots these after fire arrows and strongly poisoned ones and before plain arrows, and what one hits is poisoned.
numbersOk: true
---

<!-- typed: the hover card's own figures quoted: 19 to 38 is the bow's damage by the draw, worked out from the data; "five arrows a vial" is combat.poison.arrows in the game's words -->
{{infobox-item poison_arrow}}

The **Poisoned arrow** is an [[Arrow]] coated with [[Poison]]. A [[Hunting bow]] shoots it as an arrow, and the one of [[The dead]] or the animal it hits is poisoned (see [[Poison#Poisoned|Poison]]). Poisoned arrows stack to {{n items.poison_arrow.stack}} and take the same room in the bag as arrows.

## Creation

[[Use]] a vial of [[Poison]] on plain arrows you carry: up to {{n combat.poison.arrows}} of the stack become poisoned arrows, and the empty vial comes back. The chat log says "You coat 5 arrows with poison." See [[Poison#Poisoned arrows|Poison]] for the rest of the stack and a full bag. A poison on a [[Fire arrow]] does nothing: poison and fire do not mix.

## Combat

- The bow takes its arrows in an order: [[Fire arrow|fire arrows]] first, then [[Strongly poisoned arrow|strongly poisoned arrows]], then poisoned arrows, then plain ones. So a poisoned arrow is shot once the fire arrows and the strong ones are gone.
- The draw, the arc, the damage, and what stops a shot are the arrow's (see [[Archery]]).
- In flight it is an arrow with a green head.
- One that hits poisons the body after the damage, a stack of ordinary poison; a body the arrow kills is not poisoned. It then stays in the body as a plain [[Arrow]], and comes out as one in the loot.
- A miss, or a shot stopped by a wall or a tree, lies where it came down as a plain arrow.

So a poisoned arrow is spent with its shot: what comes back is plain arrows, to be coated again. Using a poisoned arrow on a fire does nothing.

Its hover card says: "Shot from a hunting bow (19 to 38 damage by the draw), after any fire arrows or strongly poisoned arrows and before any arrows.", "Poisons the dead and game it hits: a stack a hit, up to {{n combat.poison.max}}, draining {{n combat.poison.dpsByStacks.ordinary.0}}, {{n combat.poison.dpsByStacks.ordinary.1}}, or {{n combat.poison.dpsByStacks.ordinary.2}} a second for {{n combat.poison.duration}} seconds after the last.", and "Made from arrows: **Use** poison on them (coat)."

It is drawn as an arrow with a green head, the same picture in the bag, in the hand, and lying on the floor; only its flight is still the game's generated arrow.

{{item-sections poison_arrow}}

## The sound it makes

It lands with the arrow's thump. See [[Sound]].

## With friends

A guest coats arrows with their own Use, carried out by the host. Poisoned arrows in flight reach every screen with their green heads, and the poisoned bodies they leave are drawn green there too.

## Sources

<!-- sources at 307ed34 -->
- `data/items.json:27`: the poisoned arrow: ammunition, `poisoned: { tier: 1 }`, its stack and size the arrow's (game #496); its icon and its picture drawn in art round 5, in flight still generated (game #519, at ece297c)
- `data/items.json:24` `bow.ammo`: fire arrows, strongly poisoned, poisoned, then plain
- `data/interactions.json:24`, `src/poison.js:146-188`: poison used on arrows makes up to `arrows` of them
- `src/archery.js:809-826` `launcherOf`: the first arrow carried in the bow's order, its `poisoned` tier
- `src/archery.js:298-335`: its hit poisons after the damage, a killed body not; it lodges or lands as a plain arrow
- `src/archery.js:714-716`, `src/main.js:1484`: its flight's picture, the arrow with a green head
- `src/item-info.js:186-216` `shotLines`: the card's lines
- `src/sound-cues.js:31`: its landing is the arrow's sound

{{navbox weapons}}
