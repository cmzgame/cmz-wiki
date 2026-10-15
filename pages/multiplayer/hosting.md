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
- The log says "Name joined." and "Name left." as friends come and go.
- The world saves when friends join, leave, or go [[Dormancy|dormant]] (see [[Saving]]).
- Hiding the tab keeps the world running; the tab's title becomes "Hosting: friends are playing".
- If the host's window stops sending for a moment (covered or in the background), guests are told "The host's game has gone quiet."

### What the host decides

The host's [[Settings]] decide the {{n census.counts.rules}} world rules for everyone: Zombie aggro, Zombies attack villagers, Survival, Free building, and Multi-hit. Changing one reaches every guest at once. A guest sees them greyed as "(the host's)". Everything else in Settings (zoom, cursor, the swing timer, and so on) is each player's own.

The host's clock is the world's clock.

### Closing and leaving

**Close to friends** ends the session for everyone in: their characters go [[Dormancy|dormant]], kept in the world for their owners and back where they stood on a rejoin, the world saves, and the guests are sent back to their title screen, told the host closed the world. **Leave world** with friends in asks "Leaving closes the world to the" number with you, then does the same and goes to the [[Worlds]] screen.

## Numbers

- Browsers a world remembers: {{n census.constants.host.MAX_OWNERS}}.

## Settings that change it

The {{n census.counts.rules}} world rules, as above. Their defaults: Zombie aggro On, Zombies attack villagers Off, Survival On, Free building Off, Multi-hit Off.

## See also

- [[Joining]], [[Multiplayer]], [[Server worlds]], [[Dormancy]]

## Sources

<!-- sources at 9205ad7 -->
- `src/main.js:558-576`: Open to friends as a switch, the code kept with the world and opened again when next played, the opening and closing messages
- `src/ui/screens.js:724-736`, `src/ui/screens.js:115-123`: the host screen: the code, Copy, who is in, Open or Close
- `src/net.js:91-100`: the code's shape, two tree words and four characters
- `src/main.js:1577-1582`: a taken code retried, then cleared so the next opening draws a new one
- `src/ui/screens.js:732`: without a relay, only another tab of the same browser
- `src/main.js:667-670`: a world on the wire never pauses
- `src/ui/screens.js:656-667`, `src/main.js:579-593`: the pause menu's first line
- `src/net.js:541`, `src/net.js:626`: "Name joined." and "Name left."
- `src/host.js:100`, `src/host.js:153-154`: saves on a join, a leave, and dormancy
- `src/main.js:1605`, `src/main.js:1620-1625`, `src/loop.js:138-186`: a hidden host keeps running and renames its tab
- `src/net.js:909-912`: "The host's game has gone quiet."
- `src/rules.js:109-119`, `src/net.js:815`: the five world rules, sent to guests when they change
- `src/ui/screens.js:373-382`, `src/main.js:591`: a guest's rows greyed as "(the host's)"
- `src/net.js:803`, `src/net.js:1040`: the host's clock goes to every guest
- `server/relay.js:840-852`, `src/main.js:1567`: closing sends every guest "The host closed the world."
- `src/main.js:568-590`: closing to friends makes every guest's character dormant, closes the wire, and saves (game commit 2c70942)
- `src/ui/screens.js:198-203`, `src/main.js:345-359`: Leave world asks a host with guests, makes them dormant, saves, and shows the Worlds screen (game commit 2c70942)
- `src/host.js:30`, `src/host.js:74`: `MAX_OWNERS`, the browsers a world remembers
- `src/settings.js:12-22`: the rules' defaults, Zombie aggro on (game commit 2c70942)
