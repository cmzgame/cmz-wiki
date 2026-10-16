---
title: Dormancy
categories: [Multiplayer]
aliases: [Dormant, Stepping away, Stepped away, Away]
numbersOk: true
summary: A player who leaves a shared world, or steps away from the keyboard, is taken out of it safely and comes back where they stood.
---

<!-- typed: the idle time, five minutes, is AWAY_AFTER_MS in src/main.js, not a census constant -->

**Dormancy** keeps a player's character safe in a shared [[Worlds|world]] while they are not there. A dormant character is out of the world: not drawn, not hunted, not touched by anything. It is kept in the host's save and comes back exactly where it stood.

## How it works

### A guest who leaves

When a guest leaves, closes the tab, or loses the connection, their character stands in the world for {{n census.constants.net.GRACE_S}} seconds of game time. In that time it can still be seen and attacked. Then it goes dormant, and the world saves. If the guest rejoins first, they simply carry on.

A guest who goes silent has their held keys released after {{n census.constants.net.SILENT_STEPS}} steps, so their character does not keep walking.

When the host leaves the world or closes it to friends, every guest goes dormant at once, before the world saves.

### Coming back

[[Joining|Rejoin]] from the same browser brings the dormant character back where they stood, with everything they had.

### Stepping away

In a world shared with friends, five minutes of real time with no input takes your character out of the world in the same way. The screen says "You stepped away"; any key, click, mouse move, or wheel brings you back, and that first press is spent on returning. Others' chat logs read "Name stepped away." and "Name is back."

You never step away while asleep, dead, or climbing, or when playing alone. A host who steps away with no guests in holds their world still until they return.

## Numbers

- Grace before going dormant: {{n census.constants.net.GRACE_S}} seconds of game time.
- Held keys released after {{n census.constants.net.SILENT_STEPS}} silent steps.
- Stepping away: five minutes of real time with no input.

## With friends

Dormancy exists only with friends; a world played alone has nobody to keep.

## See also

- [[Joining]], [[Hosting]], [[Multiplayer]], [[Saving]]

## Sources

<!-- sources at 9205ad7 -->
- `src/host.js:95-101`: a dormant character is taken out of the simulation and kept in the save's record
- `src/net.js:109`, `src/net.js:619-636`: a guest who leaves stands for `GRACE_S` seconds of game time (still among the world's players), then goes dormant
- `src/host.js:100`: the world saves when a guest goes dormant
- `src/net.js:113`, `src/net.js:650`: held keys released after `SILENT_STEPS` silent steps
- `src/main.js:346`, `src/main.js:583`: the host leaving or closing to friends makes every guest dormant before saving (game commit 2c70942)
- `src/host.js:54-80`: a rejoin from the same browser brings back the same character
- `src/main.js:130-209`, `src/main.js:134`: stepping away after `AWAY_AFTER_MS` (300000 real ms), "You stepped away", any input brings you back
- `src/net.js:453-472`, `src/net.js:1295`: others' chat logs told of stepping away and coming back
- `src/host.js:106-137`, `src/main.js:145`: never while asleep, dead, climbing, or alone
- `src/main.js:674-677`: a host away with no guests holds the world still
