---
title: Burning
categories: [Combat, Mechanics]
aliases: [Burn, On fire, Set alight, Set on fire, Ignite, Fire damage]
summary: A status of the dead, set by a torch's blow, the fireball, or a fire arrow: a burning body loses a little health a second for a few seconds.
---

**Burning** is a status of [[The dead]], as [[Bleeding]] is of the player, but it never stacks: a body is burning or it is not. A burning body loses {{n combat.burn.dps}} health a second for {{n combat.burn.duration}} seconds, with flames, embers, and smoke rising from it, and it lights the ground round it. It is a small extra on top of a hit, never a way to win a fight by itself.

## How it works

### What sets the dead alight

- A blow from a lit [[Torch]], in either hand: each of the dead it lands on has a {{n items.torch.weapon.ignite}} chance to be set alight. A torch that is out sets nothing alight.
- The [[Fireball]]: the body it hits is always set alight.
- A [[Fire arrow]]: the body it hits is always set alight.

The spark comes before the hit's damage, so a blow, a fireball, or an arrow that kills the body still leaves it burning.

### The burn

- A burning body loses {{n combat.burn.dps}} health a second until its timer of {{n combat.burn.duration}} seconds runs out, and then the fire goes out by itself.
- A new spark while it burns puts the timer back to full. It never adds a second burn.
- One burn, from the first spark until it goes out, never takes more than {{n combat.burn.cap}} health in all, however often it is refreshed. A body that has gone out and is lit again starts a new burn.
- A burn takes health and nothing else. It does not push, stagger, or floor the body, and it does not tell the dead where the fire came from: a burning one keeps walking at you.
- A body that dies while burning, from the burn or from a hit, burns on as a [[Corpses|corpse]] until its timer runs out. A corpse loses nothing more.

### Who burns

Only the dead burn. A player, a villager, the ground, walls, furniture, and trees never catch fire, so nothing ever needs putting out.

### What it looks like

A burning figure gives off small flames, embers, and dark smoke, its sprite pulses orange, and it is a moving light out to {{n census.constants.fire.tunables_lightRadius tiles}}, so a burning body lights the ground round it at night. On a corpse the flames lie low and spread along the body.

## Numbers

- Health lost a second: {{n combat.burn.dps}}.
- How long a burn lasts: {{n combat.burn.duration}} seconds from the last spark.
- Most one burn can take: {{n combat.burn.cap}} health.
- A torch's chance to set alight: {{n items.torch.weapon.ignite}} a blow.
- A burning body's light: {{n census.constants.fire.tunables_lightRadius tiles}}.

## With friends

The burn runs on the host alone: who is set alight, the timer, and the damage are decided there, whoever struck the blow. Every screen sees the burning dead, their flames, and their light, from the burning flag each frame carries.

{{planned doc=05 note="The dead noticing that they burn, a way to put a fire out, a player burning, and fire spreading from one body to another."}}

## See also

- [[Torch]], [[Fireball]], [[Fire arrow]]
- [[Bleeding]]
- [[The dead]], [[Corpses]]
- [[Combat]]

## Sources

<!-- sources at 2ea0d24 -->
- `data/combat.json` `burn`: `dps`, `duration`, `cap`
- `src/burn.js:20-24`: the code's defaults match the data, loaded by `src/combat.js:67`
- `src/burn.js:26-33`: only a living one of the dead can be set alight; a new spark puts the timer back to full, and a fresh burn starts its count from nothing
- `src/burn.js:35-52`: every step, the timer runs down, a living body takes its share up to the cap, a corpse only burns down, and the fire goes out at zero
- `data/items.json`: the torch's `weapon.ignite`; the Book of Fire's `book.spell.ignite`
- `src/combat.js:320`, `src/combat.js:358-363`: a blow's weapon (a torch only while lit), the off hand's too, rolls its `ignite` chance on each body it lands on, before the damage
- `src/archery.js:610-619`: the fireball's launcher carries its spell's `ignite`
- `src/archery.js:597-601`, `src/archery.js:706`: a bow shooting fire arrows carries `ignite` into the shot
- `src/archery.js:275-277`: a shot that ignites sets alight the body it hits, before the damage
- `src/entities/zombie.js:142-162`: a burn takes health alone (`burnZombie`): no push, no stagger, no knowing where it came from, the path kept; a burn that kills ends the body as a blow does
- `src/game.js:603-605`: the burn stepped for the living and the fallen, beside its flames
- `src/fire.js:40-60`, `src/fire.js:96-101`: the flames, embers, and smoke, lower and wider on a corpse; the burning body as a light
- `src/render/entities.js:148-190`, `src/render/entities.js:274`: the flames drawn and the orange pulse on the sprite
- `src/net.js:693`, `src/net.js:1226-1231`: the burning flag in the frame; a guest's replica makes the same flames and light from it
- `docs/02-decisions.md:348-357`: Michael's rules and the build's: one burn's cap across refreshes, the spark before the damage, a burn not a blow
- `docs/05-someday.md:38`, `src/burn.js:26-52`: spreading fire is not built; nothing in the burn reads the dead noticing it, puts it out, or burns a player

{{navbox weapons}}
