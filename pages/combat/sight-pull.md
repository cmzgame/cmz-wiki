---
title: Sight-pull
categories: [Combat, Mechanics, Creatures]
aliases: [Sight pull, Pull, Pulling, Social aggro, Hrraagh, The call]
summary: One of the dead that first turns to hunt a player calls once, "Hrraagh!", and the dead near it that can see it join the hunt; the ones it calls never call others.
---

**Sight-pull** is how [[The dead]] bring each other in. When one of the dead first turns to hunt a [[Player|player]], because it sees one or because a player's blow lands on it and it lives, it calls once: "{{n tuning.zombie.pullText}}". The dead near it that are not already hunting a player and can see it join the hunt, each with a "{{n tuning.zombie.pullBubble}}" over its head. The ones it calls never call others, so there is no chain. Sound plays no part: the dead never come to a noise.

A careful pull still takes one at a time: a throw or an arrow at one at the edge of a group, out of the others' line, or in the dark, brings no one else. The same shot into the middle of a group brings every one round it that can see it.

## How it works

### The call

One of the dead calls when it turns to hunt a player **first-hand**:

- **It sees a player.** Its first sight of a player while it is not hunting one is a call, even if it was already walking to a flame.
- **A player's blow lands on it and it lives.** A swing, the [[Shove|shove]], an [[Archery|arrow]], a throw, or the [[Fireball]] count. It calls on its next step, even while it reels or lies floored by that blow. A killing blow calls no one. A burn's or a poison's tick is not a blow and calls no one (see [[Burning]] and [[Poison]]).

It calls once, at that turn, and never again while that hunt lasts: walking past another group later brings no one. When the hunt ends (it gives up after its search, see [[The dead#Memory and search|The dead]]), its next first-hand turn is a call again.

### Who answers

Every other one of the dead that:

- is not already hunting a player,
- is on its feet, or getting up (one lying on the floor does not answer),
- stands within {{n tuning.zombie.pullRadius tiles}} of the caller, and
- has a clear line to the caller: walls, shut doors, and shut shutters stop it, as they stop a player's [[Sight|sight]].

**The light counts.** The reach is scaled by the [[Light|light]] where the caller stands, as the dead's sight of a player is: the whole {{n tuning.zombie.pullRadius tiles}} in full light, and {{n tuning.zombie.sightDarkFraction}} of it where the caller stands unlit, about a tile and a half. A pull in the dark brings fewer.

### What they do

Each one that answers learns where the caller learnt of the player (where it saw them, or where the blow came from), not who they are:

- Standing, wandering, or getting up, it turns to the chase on its next step and walks to that spot.
- Searching, it turns to the chase at once.
- Breaking in at a door or shutters, it keeps at it, and keeps its own memory of where it was going (see [[Breaking in]]). Pressing a fence, it keeps at it (see [[Fences]]).
- After a villager it can see, it keeps after the villager.

From there it hunts as the dead do: its own sight finds the player, or it reaches the spot and searches. One drawn in already counts as hunting a player, so when it then sees the player itself it calls no one.

### What you see

The tells show only when at least one answers. A first sighting that brings no one shows nothing new.

- The caller says "{{n tuning.zombie.pullText}}" in a speech bubble. One that calls while lying on the floor says nothing, as it does not groan there, but those it calls still come.
- Each one that answers shows "{{n tuning.zombie.pullBubble}}" for {{n tuning.zombie.pullBubbleSeconds seconds}}.
- A call from one you cannot see for the dark shows no bubble; near you, the [[Chat log]] says "Something groans in the dark." as for a groan (see [[The dead#The groan|The dead]]).

The dead already moan as they turn to come at you, the caller and each one that answers (see [[Sound]]); the bubbles are that moan's picture.

## Numbers

- Reach: {{n tuning.zombie.pullRadius tiles}} in full light, {{n tuning.zombie.sightDarkFraction}} of it unlit.
- The call: "{{n tuning.zombie.pullText}}"; the answer's mark: "{{n tuning.zombie.pullBubble}}" for {{n tuning.zombie.pullBubbleSeconds seconds}}.

These are still being balanced; see [[Levers]].

## With friends

The call and who answers are decided in the host's world. Any player's sighting or blow calls by the same rule, a guest's included, since a guest's blow is resolved on the host. Every player sees the caller's line and the answers' marks, and the dead that answer chase on every screen.

## Settings that change it

- **Zombie aggro** (default on): off, the dead never turn to a player, so none ever calls. See [[World rules]].

## See also

- [[The dead]], [[Combat]], [[Sight]], [[Light]]
- [[Archery]], [[Throwing knife]], [[Throwing axe]]: the long throws and shots that pull one from afar
- [[Levers]]

## Sources

<!-- sources at 5eb40e6 -->
- `src/entities/zombie.js:53-54`, `src/entities/zombie.js:589-591`: `huntsPlayer` and `pullDue` on the dead, both cleared when a hunt is given up (game #504)
- `src/entities/zombie.js:126-136`: a player's blow it lives through sets the mark and the call for its next step; a killing blow returns before (game #504)
- `src/combat.js:430`, `src/combat.js:483`, `src/archery.js:312`: a swing, the shove, and every shot or throw pass where the blow came from
- `src/poison.js:107-112`, `src/entities/zombie.js:188-198`: a poison's or a burn's tick takes health alone and names no blow
- `src/entities/zombie.js:612-617`, `src/entities/zombie.js:638-648`: the call first thing in its next step after a blow; on its first sight of a player, even one hunting a flame or a villager (game #504)
- `src/entities/zombie.js:559-587`: `callOthers`: who answers (not hunting a player, not down unless getting up, within the reach scaled by the light on the caller, a clear line to it), what they take, a breacher's memory kept, a search turned to the chase; the line and the marks only when one answers, no line from one lying down (game #504)
- `src/entities/zombie.js:372-376`: `sightRange`, the one rule for the dead's sight and the call's reach
- `data/tuning.json:6`, `data/tuning.json:24-27`: `sightDarkFraction`, `pullRadius`, `pullText`, `pullBubble`, `pullBubbleSeconds`
- `src/ui/speech.js:67-88`: a line from one hidden by the dark goes to the log, not a bubble
- `src/sound-cues.js:272-292`: the moan as one turns from calm to closing in
- `docs/48-sight-pull.md`: the rule as Michael ruled it, sound never drawing the dead
