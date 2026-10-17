---
title: Joining
categories: [Multiplayer]
aliases: [Join, Join a game, Rejoin, Friends' worlds]
summary: Join a game takes a friend's code; Rejoin returns to a friend's world, waiting for it to open if it is not.
---

**Joining** is playing in a friend's [[Worlds|world]] while they host it. You need their code; after the first time, the world has a card under **Friends' worlds** on the Worlds page and **Rejoin** takes you back.

## How it works

### Join a game

**Join a game** on the Worlds page (under **Play** on the game's site) says "Type the code your friend gave you; then a character for their world." and asks for the code (such as `oak-elm-k7mp`). The [[Screens#The loading screen|loading screen]] comes up with "Joining" and the code, "Asking the host", and a **Cancel** button, and the game asks the host.

- If the host's world already has a living survivor of yours, you come back as them, where they stood.
- If not, the host asks who you are: the loading screen gives way to [[Characters|character creation]], a page of the site; choose an [[Identities|identity]], then **Join as this**, and the loading screen comes back. Your new survivor appears at the spawn.

When the host's world arrives the screen says "Receiving the world", draws the ground round you, and goes; the site goes with it and the game fills the window. **Cancel** gives up the join and shows the Worlds page. It is there only until the host's world arrives: once "Receiving the world" shows, Cancel is gone, and the way out is **Exit game** on the pause menu.

While waiting, you stand in an empty stand-in world that is never saved, hidden under the loading screen and the site. If nobody answers within {{n census.constants.net.JOIN_WAIT_MS}} milliseconds, the join gives up and you are returned to the site's Home page, which says why.

The friend's world is added to Friends' worlds as soon as you try, so a failed join still leaves a card to Rejoin from.

### Friends' worlds

Each card shows the world's name, your survivor there, whose world it is, its code, and when you last joined, with:

- A **dot** that says whether the world is open now. Hovering it says "open now" with how many are in, "not open now", or "not asked yet". The dots are asked of the relay while the page is up.
- **Rejoin**, the big button: if the world is open, joins it, under the same loading screen. If not, shows "Waiting for" the friend to open, with **Cancel**, and keeps asking; the moment the world opens, you join. After about a minute it stops and says Rejoin tries again.
- **Forget**: removes the card. It does nothing to your character in the friend's world.

The browser keeps the most recent friends' worlds.

### When the host is away

A friend's world hosted from a browser exists only while its host has it open (a [[Server worlds|server world]] has no host to wait for). If the host closes it or leaves, you are returned to the site's Home page, told "The host closed the world.", and your character goes [[Dormancy|dormant]] in their save. When they open it again, Rejoin brings you back.

### A full world

A world holds so many players at once (see [[Hosting#How many can play|Hosting]]), and a join past that is refused before anything of you is made there. A survivor of yours already standing in the world, say after a refresh, is always yours to come back to. One that has gone dormant waits in the host's save: while the world is full you are told so, and once someone leaves, Rejoin brings you back as them. A new character after a death is a new join, so it needs a free place too.

### Why a join can fail

You are returned to the site's Home page with a reason when:

- no world is open under that code, or the code is in use;
- the relay cannot be reached, or the connection drops;
- the world is full: "This world is full." A browser's world holds {{n tuning.world.playerCapBrowser}} players at once and a server world {{n tuning.world.playerCapServer}}, and a world remembers at most {{n census.constants.host.MAX_OWNERS}} browsers;
- the host is running a different version of the game;
- the world's owner removed you (in a [[Server worlds|server world]]);
- you joined the same world again from another tab, which replaces the older one;
- a server world is busy, resting after a fault, or on its way home.

## Numbers

- A join with no answer gives up after {{n census.constants.net.JOIN_WAIT_MS}} milliseconds.
- Players at once: {{n tuning.world.playerCapBrowser}} in a world hosted in a browser, {{n tuning.world.playerCapServer}} in a server world.
- Browsers a world remembers: {{n census.constants.host.MAX_OWNERS}}.

## With friends

As a guest, the [[World rules|world's rules]] are the host's, shown locked on the pause menu's World rules, screens never pause the world, and nothing of the friend's world is saved in your browser. **Save world** and **Open to friends** are not on a guest's pause menu, whose first line names the host, the world, and your character.

## See also

- [[Hosting]], [[Dormancy]], [[Multiplayer]], [[Worlds]]

## Sources

<!-- sources at 2a9a308 -->
- `src/ui/screens.js:365-371`, `src/ui/screens.js:873-884`, `src/main.js:674-685`: Join a game, its line and the code field; the join under the loading screen
- `src/main.js:276-286`: "Joining" and the code, "Asking the host", Cancel back to the Worlds page with the wire closed
- `src/host.js:71-91`: a living character of this browser's comes back; otherwise the host asks who
- `src/main.js:1696`, `src/main.js:1491-1499`, `src/ui/screens.js:189-193`, `src/ui/screens.js:885-898`: the screen gives way to creation, a page of the site while the join waits; Join as this brings it back (game #120)
- `src/main.js:1672-1691`, `src/ui/screens.js:234-242`: Receiving the world, the ground baked, then the screen goes and the game fills the window
- `src/main.js:1674`, `src/boot.js:137-139`: Cancel goes once the host's world arrives (game #117)
- `src/main.js:693-696`, `src/net.js:146-149`, `src/net.js:876-886`, `src/ui/screens.js:199-212`: the stand-in world, hidden, and the join's give-up after `JOIN_WAIT_MS`
- `src/identities.js:105-112`, `src/main.js:678`: the bookmark written at the first try, the most recent kept
- `src/ui/screens.js:707-722`: a friend's card: the name, the survivor, the host, the code, when last joined, Rejoin big and Forget small (game #120)
- `src/ui/screens.js:465-481`, `src/ui/screens.js:710-714`, `src/net.js:389-396`: the dot, its tooltip, polled from the relay
- `src/ui/screens.js:438-462`, `src/ui/screens.js:837-844`: Rejoin, the wait with Cancel, giving up after a minute
- `server/relay.js:860`, `src/main.js:1731`: "The host closed the world."
- `src/main.js:481`, `src/main.js:714`: a host leaving or closing to friends makes guests dormant
- `src/main.js:1715-1752`, `src/ui/screens.js:746-750`, `src/net.js:483-488`, `src/net.js:518`, `src/net.js:1042-1043`: the reasons a join fails, Home with the reason, the version checks, a newer tab replacing the older
- `src/host.js:30`, `src/host.js:94`: `MAX_OWNERS`, the next browser refused as full
- `data/tuning.json:79-80`, `src/host.js:49-63`, `src/host.js:71-95`, `src/main.js:400-416`, `src/main.js:1733`: the cap; a standing survivor always back, a dormant one refused while full and kept in the save, a new one after a death a new join; "This world is full."
- `src/rules.js:13-30`, `src/ui/screens.js:992-1008`, `src/main.js:819-822`, `src/main.js:435-436`: a guest under the host's rules, shown locked, never paused, never saving
- `src/ui/screens.js:910-921`, `src/main.js:724-743`: a guest's pause menu without Save world and Open to friends; its line names the host and the world from the welcome
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it (game commit 490addf)
