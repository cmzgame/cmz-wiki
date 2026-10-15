---
title: Joining
categories: [Multiplayer]
aliases: [Join, Join a game, Rejoin, Friends' worlds]
summary: Join a game takes a friend's code; Rejoin returns to a friend's world, waiting for it to open if it is not.
---

**Joining** is playing in a friend's [[Worlds|world]] while they host it. You need their code; after the first time, the world is listed under **Friends' worlds** on the Worlds screen and **Rejoin** takes you back.

## How it works

### Join a game

**Join a game** on the Worlds screen asks for the code (such as `oak-elm-k7mp`). The game says "Joining" and the code, and asks the host.

- If the host's world already has a living survivor of yours, you come back as them, where they stood.
- If not, the host asks who you are, and [[Characters|character creation]] runs: choose an [[Identities|identity]], then **Join as this**. Your new survivor appears at the spawn.

While waiting you stand in an empty stand-in world that is never saved. If nobody answers within {{n census.constants.net.JOIN_WAIT_MS}} milliseconds, the join gives up and you are returned to the title with the reason.

The friend's world is added to Friends' worlds as soon as you try, so a failed join still leaves a row to Rejoin from.

### Friends' worlds

Each row has:

- A **dot** that says whether the world is open now. Hovering it says "open now" with how many are in, "not open now", or "not asked yet". The dots are asked of the relay while the screen is up.
- **Rejoin**: if the world is open, joins it. If not, shows "Waiting for" the friend to open, with **Cancel**, and keeps asking; the moment the world opens, you join. After about a minute it stops and says Rejoin tries again.
- **Forget**: removes the row. It does nothing to your character in the friend's world.

The browser keeps the most recent friends' worlds.

### When the host is away

A friend's world exists only while its host has it open. If the host closes it or leaves, you are returned to the title, told "The host closed the world."; when the host leaves the world, your character goes [[Dormancy|dormant]] in their save. When they open it again, Rejoin brings you back.

### Why a join can fail

You are returned to the title with a reason when:

- no world is open under that code, or the code is in use;
- the relay cannot be reached, or the connection drops;
- the world already remembers as many survivors as it holds;
- the host is running a different version of the game;
- the world's owner removed you (in a [[Server worlds|server world]]);
- you joined the same world again from another tab, which replaces the older one;
- a server world is busy, resting after a fault, or on its way home.

## Numbers

- A join with no answer gives up after {{n census.constants.net.JOIN_WAIT_MS}} milliseconds.
- Browsers a world remembers: {{n census.constants.host.MAX_OWNERS}}.

## With friends

As a guest, the world's rules are the host's (see [[Hosting]]), screens never pause the world, and nothing of the friend's world is saved in your browser. **Save world** and **Open to friends** are not on a guest's pause menu, whose first line names the world by its code and your character.

## See also

- [[Hosting]], [[Dormancy]], [[Multiplayer]], [[Worlds]]

## Sources

<!-- sources at 9205ad7 -->
- `src/main.js:534-555`, `src/ui/screens.js:271`, `src/ui/screens.js:624`: Join a game, the code field, "Joining" and the code
- `src/host.js:54-80`: a living character of this browser's comes back; otherwise the host asks who
- `src/ui/screens.js:631-644`, `src/main.js:310-311`: creation runs with Join as this; the new survivor at the spawn
- `src/net.js:145`, `src/net.js:829-906`: the stand-in world and the join's give-up after `JOIN_WAIT_MS`
- `src/identities.js:106-112`, `src/main.js:538`: the bookmark written at the first try, the most recent kept
- `src/ui/screens.js:521-525`, `src/ui/screens.js:571`, `src/net.js:383-394`: the dot, its tooltip, polled from the relay
- `src/ui/screens.js:324-348`, `src/ui/screens.js:597-604`: Rejoin, the wait with Cancel, giving up after a minute
- `src/ui/screens.js:474-479`: Forget on a friend's row
- `server/relay.js:840-852`, `src/main.js:1567`: "The host closed the world."
- `src/main.js:336`: a host leaving makes guests dormant
- `src/main.js:1557-1573`, `src/net.js:253-277`, `src/net.js:473-508`: the reasons a join fails, the version checks, a newer tab replacing the older
- `src/host.js:30`, `src/host.js:74`: `MAX_OWNERS`, the next browser refused as full
- `src/rules.js:109-115`, `src/main.js:667-670`, `src/main.js:325-331`: a guest under the host's rules, never paused, never saving
- `src/ui/screens.js:656-667`, `src/main.js:583-590`: a guest's pause menu without Save world and Open to friends; its line names the world by the code
