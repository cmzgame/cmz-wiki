---
title: The dead
categories: [Creatures, Combat]
aliases: [Zombie, Zombies, Dead, Undead]
summary: The dead who walk the valley: how they see, hunt, bite, break in, and fall.
---

<table class="infobox"><caption>The dead</caption><tr><th>Health</th><td>{{n tuning.zombie.hp}}</td></tr><tr><th>Speed</th><td>{{n tuning.zombie.speed tiles a second}}</td></tr><tr><th>Sight</th><td>{{n tuning.zombie.sight tiles}} in full light</td></tr><tr><th>Bite</th><td>{{n tuning.zombie.damage}} damage</td></tr><tr><th>Wardrobes</th><td>{{n census.counts.zombieWardrobes}}</td></tr><tr><th>Placed in the valley</th><td>{{n census.counts.authoredDead}}</td></tr></table>

**The dead** are the village's former people, walking. They shamble, they look for the living, and they bite. Each is dressed from one of {{n census.counts.zombieWardrobes}} wardrobes, and their bodies push apart from one another. They never open doors and never break plain walls.

## Behaviour

### How many and where

[[The valley]] has {{n census.counts.authoredDead}} of the dead placed in it. Every chunk of wild land grown beyond the map's edge brings between {{n valley.wild.zombiesPerChunk.0}} and {{n valley.wild.zombiesPerChunk.1}} more.

Only the dead within {{n tuning.world.activeTiles tiles}} of some player (in a square around them) think and move; the rest stand still until a player comes near.

### Sight

The dead see the [[Player]] by the same rule the player sees by: a clear line (see [[Sight]]). How far they see depends on the [[Light]] where the player stands: {{n tuning.zombie.sight tiles}} in full light, falling to {{n tuning.zombie.sightDarkFraction}} of that when the player stands unlit. Each looks every {{n tuning.zombie.sightCheck seconds}}.

### Flames at night

At night, once one of the dead has not seen a player for {{n tuning.zombie.flamePatience seconds}}, it can be drawn by any lit flame in its line of sight, from as far as {{n tuning.zombie.flameRange tiles}} in full dark. A torch carried in hand counts as seeing its carrier. Two torches are seen {{n tuning.world.twoTorches}} times as far; a torch on the belt is seen from {{n tuning.world.beltLight}} times as far.

### Memory and search

The dead know only where they last saw the player. They walk to that spot. Arriving without seeing the player, or finding no path there, they search within {{n tuning.zombie.searchRadius tiles}} of it with short walks for {{n tuning.zombie.searchTime seconds}}, then give up and go idle. Nothing tells them where the player is through a wall. A hit tells a hunting zombie where the blow came from; for an arrow, where it was shot from.

Idle, they wander a little within their room, standing between walks.

### The bite

One of the dead that can see the player and comes within {{n tuning.zombie.contact tiles}} starts a bite. The bite lands at its strike if the player is still close and in its line of sight, for {{n tuning.zombie.damage}} damage. It then waits {{n tuning.zombie.cooldown seconds}} after the animation before the next.

A bite that gets through:

- may open a wound, with a chance of {{n combat.bleed.chance}} (see [[Bleeding]]),
- may infect, with a chance of {{n combat.infection.chance}} (see [[Infection]]).

A bite fully blocked by the [[Shield]] does neither. A bite on an exposed player does more (see [[Dual wielding]]).

{{planned doc=02 note="Infection marks the player and its moodle worsens over the days, but it has no other effect yet (question 29b)."}}

### Breaking in

When a hunting zombie cannot find a path to where it last saw the player, it goes to the nearest door or window of the room it wants into (or the room it is shut in) and hits it: boards on its side first, then the door or shutters, then the boards on the far side. Each hit does {{n tuning.zombie.breachDamage}} damage, at the pace of its bites.

- A board has {{n census.constants.map.BOARD_HP}} health, a door {{n census.constants.map.DOOR_HP}}, shutters {{n census.constants.map.SHUTTER_HP}}. Up to {{n census.constants.map.BOARDS_PER_SIDE}} boards go on each side.
- A broken door is a doorway for good; broken shutters leave an open hole.
- At an open or broken window with no boards, it climbs through, slowly ({{n tuning.zombie.climb seconds}}), unable to bite until through. A hit on a climbing zombie ends the climb at the nearer side.

See [[Openings]].

### The groan

Now and then each of the dead says "{{n tuning.zombie.groanText}}" in a speech bubble, every {{n tuning.zombie.groanMin}} to {{n tuning.zombie.groanMax seconds}}. It does not groan while on the floor, and the fallen are silent.

### Death

At no health one of the dead falls, and once the fall has played its body stays as a still picture that can be searched. See [[Corpses]].

## Fighting them

- Hits, pushes, staggers, and knockdowns are on [[Combat]] and [[Stagger and knockdown]].
- A floored zombie takes finishers until it is up.
- A stagger does not stop a bite already under way; the [[Mace]], the [[Halberd]]'s thrust, the thrown [[Throwing spear]], and the [[Shove]] do.
- Light matters: in the dark they see the player from much less far, but a lit flame draws them at night.
- Doors, shutters, and boards hold them off for a time (see [[Openings]] and [[Building]]).

## With friends

Each of the dead picks the nearest player it can see; a fallen player draws no one. With none seen, it chases toward the nearest living player. The bite names its victim: the wound, the infection, and the words about them belong to that player alone.

## Settings that change it

- **Zombie aggro** (default off): off, the dead never see the player and never hunt them; they wander, and a hit does not make them hunt. Flames do not draw them either. On, they behave as described here.
- **Zombies attack villagers** (default off): on, one of the dead that sees no player hunts the nearest of the [[Villagers]] it can see, with the same sight and memory, and bites them. Players are always preferred when in sight. A bitten villager flinches for {{n tuning.villager.hurtTime seconds}}; one bitten to death gets up as one of the dead in what they wore.

{{devonly note="Combat testing (default off, read when the page loads) stands a crowd of extra dead on open ground and removes the scattered and wild trees."}}

## See also

- [[Corpses]]
- [[Combat]]
- [[Openings]]
- [[Sight]]
- [[Light]]
