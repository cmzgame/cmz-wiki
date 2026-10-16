---
title: Joining
categories: [Multiplayer]
aliases: [Join, Join a game, Rejoin, Friends' worlds]
summary: Join a game takes a friend's code; Rejoin returns to a friend's world, waiting for it to open if it is not.
---

**Joining** is playing in a friend's [[Worlds|world]] while they host it. You need their code; after the first time, the world is listed under **Friends' worlds** on the Worlds screen and **Rejoin** takes you back.

## How it works

### Join a game

**Join a game** on the Worlds screen says "Type the code your friend gave you; then a character for their world." and asks for the code (such as `oak-elm-k7mp`). The [[Screens#The loading screen|loading screen]] comes up with "Joining" and the code, "Asking the host", and a **Cancel** button, and the game asks the host.

- If the host's world already has a living survivor of yours, you come back as them, where they stood.
- If not, the host asks who you are: the loading screen gives way to [[Characters|character creation]]; choose an [[Identities|identity]], then **Join as this**, and the loading screen comes back. Your new survivor appears at the spawn.

When the host's world arrives the screen says "Receiving the world", draws the ground round you, and goes. **Cancel**, at any time before that, gives up the join and shows the Worlds screen.

Under the loading screen, while waiting, you stand in an empty stand-in world that is never saved. If nobody answers within {{n census.constants.net.JOIN_WAIT_MS}} milliseconds, the join gives up and you are returned to the title with the reason.

The friend's world is added to Friends' worlds as soon as you try, so a failed join still leaves a row to Rejoin from.

### Friends' worlds

Each row has:

- A **dot** that says whether the world is open now. Hovering it says "open now" with how many are in, "not open now", or "not asked yet". The dots are asked of the relay while the screen is up.
- **Rejoin**: if the world is open, joins it, under the same loading screen. If not, shows "Waiting for" the friend to open, with **Cancel**, and keeps asking; the moment the world opens, you join. After about a minute it stops and says Rejoin tries again.
- **Forget**: removes the row. It does nothing to your character in the friend's world.

The browser keeps the most recent friends' worlds.

### When the host is away

A friend's world hosted from a browser exists only while its host has it open (a [[Server worlds|server world]] has no host to wait for). If the host closes it or leaves, you are returned to the title, told "The host closed the world.", and your character goes [[Dormancy|dormant]] in their save. When they open it again, Rejoin brings you back.

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

As a guest, the world's rules are the host's (see [[Hosting]]), screens never pause the world, and nothing of the friend's world is saved in your browser. **Save world** and **Open to friends** are not on a guest's pause menu, whose first line names the host, the world, and your character.

## See also

- [[Hosting]], [[Dormancy]], [[Multiplayer]], [[Worlds]]

## Sources

<!-- sources at 19a1c18 -->
- `src/ui/screens.js:657-667`, `src/main.js:625-637`: Join a game, its line and the code field; the join under the loading screen (game #114, #115)
- `src/main.js:267-281`: "Joining" and the code, "Asking the host", Cancel back to the Worlds screen with the wire closed (game #115)
- `src/host.js:54-80`: a living character of this browser's comes back; otherwise the host asks who
- `src/main.js:1664`, `src/main.js:1467-1474`, `src/ui/screens.js:681`: the screen gives way to creation; Join as this brings it back (game #115)
- `src/main.js:1642-1658`: Receiving the world, the ground baked, then the screen goes (game #115)
- `src/main.js:645-648`, `src/net.js:146-149`, `src/net.js:876-886`: the stand-in world and the join's give-up after `JOIN_WAIT_MS`
- `src/identities.js:105-112`, `src/main.js:630`: the bookmark written at the first try, the most recent kept
- `src/ui/screens.js:364-381`, `src/ui/screens.js:610`, `src/net.js:390-396`: the dot, its tooltip, polled from the relay
- `src/ui/screens.js:336-362`, `src/ui/screens.js:636-644`: Rejoin, the wait with Cancel, giving up after a minute
- `src/ui/screens.js:565-568`: Forget on a friend's row
- `server/relay.js:851`, `src/main.js:1699`: "The host closed the world."
- `src/main.js:426`, `src/main.js:666`: a host leaving or closing to friends makes guests dormant
- `src/main.js:1686-1720`, `src/net.js:483-488`, `src/net.js:518`, `src/net.js:1034-1035`: the reasons a join fails, the title with the reason, the version checks, a newer tab replacing the older
- `src/host.js:30`, `src/host.js:74`: `MAX_OWNERS`, the next browser refused as full
- `src/rules.js:9-37`, `src/main.js:766-771`, `src/main.js:403-404`: a guest under the host's rules, never paused, never saving
- `src/ui/screens.js:694-705`, `src/main.js:676-691`: a guest's pause menu without Save world and Open to friends; its line names the host and the world from the welcome
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it (game commit 490addf)
