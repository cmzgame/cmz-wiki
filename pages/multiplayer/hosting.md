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

**Close to friends** ends the session for everyone in: guests are sent back to their title screen, told the host closed the world, and their characters go dormant in the save. **Leave world** with friends in asks "Leaving closes the world to the" number with you, then does the same.

## Numbers

- Browsers a world remembers: {{n census.constants.host.MAX_OWNERS}}.

## Settings that change it

The {{n census.counts.rules}} world rules, as above. Their defaults: Zombie aggro Off, Zombies attack villagers Off, Survival On, Free building Off, Multi-hit Off.

## See also

- [[Joining]], [[Multiplayer]], [[Server worlds]], [[Dormancy]]
