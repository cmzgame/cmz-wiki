---
title: Fire arrow
categories: [Items, Ammunition, Combat]
aliases: [Fire arrows, Flaming arrow, Flaming arrows, Burning arrow]
summary: An arrow dipped in a lit fire. A bow shoots these first, and the one of the dead a fire arrow hits is set alight.
---

{{infobox-item fire_arrow}}

The **Fire arrow** is an [[Arrow]] dipped in a lit [[Fire]]. A [[Bow]] shoots fire arrows before plain ones, and the one of [[The dead]] a fire arrow hits is set alight (see [[Burning]]). Fire arrows stack to {{n items.fire_arrow.stack}} and take the same room in the bag as arrows.

## Creation

[[Use]] arrows you carry (in a hand, on the [[Belt]], or in the bag) on any lit fire that burns fuel: a campfire, a hearth, a fireplace, the [[Oven]], or the [[Forge]]. The whole stack becomes fire arrows at once, in the same place, and the chat log says "You dip the arrows in the fire." You must stand within {{n census.constants.burn.DIP_REACH tiles}} of the fire.

The game refuses, with a line in the [[Chat log|chat log]], when:

- the fire is out: "The fire is out." (light it first; see [[Fire]]);
- you stand too far from it: "Too far from the fire.";
- the arrows are not on you, in an open chest or a searched body for instance: "Take the arrows out first." Only arrows in a hand, on the belt, or in your bag are dipped.

A fire that burns no fuel, such as a jack-o'-lantern or a torch in a bracket, does not count: using arrows on it does nothing.

## Combat

- With fire arrows carried, the bow draws them first; plain arrows are shot once the fire arrows run out. The draw, the arc, the damage, and what stops a shot are the arrow's (see [[Archery]]).
- In flight it is an arrow with its head burning, and a small moving light, so it lights its path at night.
- One that hits one of the dead always sets it alight, before the damage, so a body it kills burns on as a corpse. It then stays in the body as a plain [[Arrow]], and comes out as one in the body's loot.
- A miss, or a shot stopped by a wall or a tree, lies where it came down as a plain arrow.

So a fire arrow is spent with its shot: what you get back is plain arrows, to be dipped again.

{{item-sections fire_arrow}}

## With friends

A guest dips arrows with its own Use, which the host carries out as that player. Fire arrows in flight reach every screen with the other arrows, burning and lit, and so do the burning dead they leave.

## Sources

<!-- sources at 0bd3f9c -->
- `data/items.json`: the fire arrow: ammunition, its stack and size those of the arrow; placeholder art
- `data/interactions.json`: the row: arrows used on `fire`, the `dip` verb, its line
- `src/interactions.js:34-42`: `fire` matches any prop whose fire burns fuel
- `data/sprites/campfire.json`, `data/sprites/hearth.json`, `data/sprites/fireplace.json`, `data/sprites/oven.json`, `data/sprites/forge.json`: the fires that burn fuel
- `src/burn.js:55-65`: only arrows carried in the hands, the belt, or the bag
- `src/burn.js:73-94`: the dip: refused for an unlit fire, from too far, or with the arrows not carried ("Take the arrows out first.", game commit 8bacbff); the whole stack changed in place
- `src/use.js:94-104`: a row's verb run, its line said on success, the refusal said otherwise
- `src/archery.js:568-572`: fire arrows drawn before plain ones, as their own projectile, setting alight
- `src/inventory.js:87-95`: arrows counted in the hands, the belt, and the bag
- `src/archery.js:356-364`, `src/archery.js:520-523`: the fire arrow's light in flight, and its burning head
- `src/archery.js:267-282`: a hit sets alight before the damage and lodges a plain arrow; a miss lands as a plain arrow
- `src/ui/inventory-actions.js:364-389`: a guest's Use on a prop run on the host as that player
- `src/net.js:867`, `src/net.js:1106`: arrows in flight sent to guests by projectile, and drawn there
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it (game commit 490addf)

{{navbox weapons}}
