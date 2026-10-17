---
title: Hosting
categories: [Multiplayer]
aliases: [Host, Open to friends, World code, Code]
summary: Open to friends, on the pause menu, gives a world a code that friends type to join; the host's browser runs the world.
---

**Hosting** is opening one of your [[Worlds|worlds]] to friends. It is a switch on the world, not a different kind of save: **Open to friends** on the pause menu turns it on and off. While it is on, your browser is the host and runs the world for everyone in it.

## How it works

### Opening

**Open to friends: off** on the pause menu opens a screen with the world's code, a **Copy** button, who is in, and **Open to friends** or **Close to friends**. Opening says "Open to friends: the code is" and the code. Closing says "Closed to friends."

The first time a world is opened it draws a code: two tree words and a short string of letters and digits, such as `oak-elm-k7mp`. The code is kept with the world, so friends use the same one every time. A world that was open when you left it opens again when you next play it.

If the relay reports the code as taken when reopening, the game tries a few more times, then drops the code so the next opening draws a new one.

Without a relay, a friend can join only from another tab of the same browser; the screen says so.

### While hosting

- The world never pauses, even with nobody else in it (see [[Multiplayer]]).
- The pause menu's first line reads the world's name, your character, and "Open to friends, code" with how many are with you.
- The [[Chat log|chat log]] says "Name joined." and "Name left." as friends come and go.
- The world saves when friends join, leave, or go [[Dormancy|dormant]] (see [[Saving]]).
- Hiding the tab keeps the world running; the tab's title becomes "Hosting: friends are playing".
- If the host's window stops sending for a moment (covered or in the background), guests are told "The host's game has gone quiet."

### What the host decides

The world's [[World rules|rules]] are the host's: Zombie aggro, Zombies attack villagers, Survival, Free building, and Multi-hit, changed from **World rules** on the pause menu, and Trees and Starting population, chosen when the world was made and never changed. A change reaches every guest at once. A guest's World rules screen shows them as the host set them, each marked "(the host's)" and locked. Everything in [[Settings]] (zoom, cursor, the swing timer, and so on) is each player's own.

The host's clock is the world's clock.

### How many can play

A world hosted in a browser holds {{n tuning.world.playerCapBrowser}} players at once, the host among them. A friend who joins a full world is sent back to the site's Home page with "This world is full.", before anything of them is made in the world.

A place is held by every character standing in the world, by a friend who has [[Dormancy#Stepping away|stepped away]] and is still connected, and always by the host, even while the host is stepped away or on the dead screen, so nobody can take the host's place. A friend whose character has gone dormant holds none: their character waits in the save, and if the world is full when they come back, they are told it is full and can come back as the same character once there is room.

### Closing and leaving

**Close to friends** ends the session for everyone in: their characters go [[Dormancy|dormant]], kept in the world for their owners and back where they stood on a rejoin, the world saves, and the guests are sent back to the game's site, whose Home page tells them the host closed the world (see [[Screens#The site|Screens]]). **Exit game** with friends in asks "Exiting closes the world to the friend with you. Exit?" (with more than one, the number of them), then does the same and goes back to the site's [[Worlds]] page.

## Numbers

- Players at once in a world hosted in a browser, the host included: {{n tuning.world.playerCapBrowser}}.
- Browsers a world remembers: {{n census.constants.host.MAX_OWNERS}}.

## Settings that change it

The world rules, as above: see [[World rules]] for each and its default.

## See also

- [[Joining]], [[Multiplayer]], [[Server worlds]], [[Dormancy]]

## Sources

<!-- sources at 2a9a308 -->
- `src/main.js:699-720`: Open to friends as a switch, the code kept with the world and opened again when next played, the opening and closing messages
- `src/ui/screens.js:979-991`, `src/ui/screens.js:156-164`: the host screen: the code, Copy, who is in, Open or Close
- `src/net.js:92-101`: the code's shape, two tree words and four characters
- `src/main.js:1741-1746`: a taken code retried, then cleared so the next opening draws a new one
- `src/ui/screens.js:987`: without a relay, only another tab of the same browser
- `src/main.js:819-822`: a world on the wire never pauses
- `src/ui/screens.js:910-916`, `src/main.js:724-743`: the pause menu's first line
- `src/net.js:559`, `src/net.js:644`: "Name joined." and "Name left."
- `src/host.js:121`, `src/host.js:174-175`: saves on a join, a leave, and dormancy
- `src/main.js:1767`, `src/main.js:1783-1788`, `src/loop.js:138-186`: a hidden host keeps running and renames its tab
- `src/net.js:967-970`: "The host's game has gone quiet."
- `src/rules.js:13-30`, `src/net.js:865`, `src/main.js:296-305`: the world's rules, the host's from the pause menu, two fixed at creation, sent to guests when they change
- `src/ui/screens.js:992-1008`, `src/main.js:739`: a guest's World rules rows the host's, marked "(the host's)" and locked
- `src/net.js:853`, `src/net.js:1115`: the host's clock goes to every guest
- `server/relay.js:851-863`, `src/main.js:1731`: closing sends every guest "The host closed the world."
- `src/main.js:711-719`: closing to friends makes every guest's character dormant, closes the wire, and saves
- `src/ui/screens.js:281-287`, `src/main.js:475-489`: Exit game asks a host with guests, makes them dormant, saves, and shows the site's Worlds page
- `src/main.js:1749-1751`, `src/ui/screens.js:746-750`: a guest sent out is shown the site's Home page with the reason
- `data/tuning.json:79`, `src/main.js:1643`, `src/host.js:49-63`, `src/host.js:80-95`, `src/net.js:1029-1033`: the cap, `world.playerCapBrowser`; the places held by the standing, the connected stepped-away, and the host always; a join refused before anything is made, a dormant character kept in the save
- `src/net.js:533-536`, `src/main.js:1733`: a refused join told "This world is full." on Home
- `src/host.js:30`, `src/host.js:94`: `MAX_OWNERS`, the browsers a world remembers
