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

A friend's world exists only while its host has it open. If the host closes it or leaves, you are returned to the title, told "The host closed the world.", and your character goes [[Dormancy|dormant]] in their save. When they open it again, Rejoin brings you back.

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
