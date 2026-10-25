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

In a world shared with friends, five minutes of real time with no input takes your character out of the world in the same way. The screen says "You stepped away"; any key, click, mouse move, or wheel brings you back, and that first press is spent on returning. A guest's screen keeps saying "You stepped away" a moment longer, until the host's world has their character again and the ground round it has loaded (the host may have let it go while they were out), or for at most {{n census.constants.net.RETURN_WAIT_FRAMES}} of the host's frames; nothing they do is sent until then, so they never walk onto blank ground. Others' chat logs read "Name stepped away." and "Name is back."

You never step away while asleep or dead, or when playing alone. A host who steps away with no guests in holds their world still until they return.

## Numbers

- Grace before going dormant: {{n census.constants.net.GRACE_S}} seconds of game time.
- Held keys released after {{n census.constants.net.SILENT_STEPS}} silent steps.
- Stepping away: five minutes of real time with no input.

## With friends

Dormancy exists only with friends; a world played alone has nobody to keep. Each player's own screen counts their idle time; stepping away and coming back are commands the host performs, so a guest's character leaves and returns through the host as a leave and a rejoin would.

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
- `src/main.js:131-181`, `src/main.js:136`: stepping away after `AWAY_AFTER_MS` (five minutes of real time), the idle clock each client's own, "You stepped away" (the `away` screen), and coming back (game commit 0bd3f9c)
- `src/main.js:204-213`: any key, click, mouse move, or wheel brings you back, the first one spent on it (game commit 0bd3f9c)
- `src/net.js:1326-1334`, `src/net.js:1448-1474`, `src/main.js:193-217`: a guest back from a step away keeps the away screen until a frame carries its player and the ring of chunks round it, or `RETURN_WAIT_FRAMES` frames pass (game #455, at 6e3ab37)
- `src/host.js:103-138`: the host takes the character out (`awayNow`) and puts it back where it stood (`backNow`); "Name stepped away." and "Name is back." in every log (game commit 0bd3f9c)
- `src/main.js:144-152`, `src/host.js:107`: never while asleep or dead, and never in a solo world (game commit 0bd3f9c)
- `src/main.js:690-696`: a host away with no guests holds the world still; a friend's join starts it again (game commit 0bd3f9c)
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it (game commit 490addf)
