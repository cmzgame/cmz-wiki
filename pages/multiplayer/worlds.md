---
title: Worlds
categories: [Multiplayer, Interface]
aliases: [World, Worlds screen, New world]
summary: A world is one valley with its state and everyone in it, kept in the browser that made it; the Worlds screen lists them.
---

A **world** is one copy of [[The valley]] with everything in it: the dead, the villagers, the fires, what has been built and moved, the time of day, and every [[Characters|character]] who has played there. A browser can keep many worlds, each at its own hour, and return to any of them. Nothing runs until a world is chosen: before that the title screen sits over black.

## How it works

### The Worlds screen

**Worlds** on the title screen opens the list. It has three parts:

- **My worlds**: the worlds kept in this browser. Each row shows the world's name, its day and hour ("Day N, HH:MM"), your character ("as Name", "Name died", or "no survivor"), and its code if it has been opened to friends. Buttons: **Play** (or **New character** when yours is dead), **Move to the server** (see [[Server worlds]]), and **Delete**.
- **My worlds on the server**: worlds of yours that live on the server. Buttons: **Play**, **Owner**, and **Bring it home**. A world partway home shows **Finish bringing it home**.
- **Friends' worlds**: every friend's world this browser has tried to join, with a dot that says whether it is open now, **Rejoin**, and **Forget**. See [[Joining]].

Below the lists: **New world**, **Join a game**, **A world of mine on the server** (shown only when a relay is set), and **Back**.

A world made on another map is listed but cannot be played here; its row says it is on another map.

### Making a world

**New world** asks for a name, with one offered: the map's name and the day's date. Then comes [[Characters|character creation]]: an identity, then a second step. **Into the valley** makes the world, puts your character at the spawn, and saves it at once. A new world starts at {{n census.constants.clock.START_HOUR}} o'clock in the morning on day one.

### Playing a world

**Play** loads the world as it was last saved and puts you back in your character. A world that was open to friends when you left opens to friends again. If your character there is dead, the button is **New character** instead.

### Deleting a world

**Delete** asks "Delete this world and every character in it?" and, if confirmed, removes it from the browser for good. A friend's world cannot be deleted from here, only forgotten.

### Leaving a world

**Leave world**, on the pause menu or the dead screen, saves the world and returns to the title. A host with friends in is asked first, since leaving closes the world to them.

## Numbers

- New worlds start at {{n census.constants.clock.START_HOUR}} o'clock.
- The Friends' worlds dots are asked of the relay while the screen is up.

## With friends

A world is the host's: it lives in their browser, and friends play in it only while it is open. A guest keeps nothing of a friend's world but a row under Friends' worlds. See [[Saving]].

## See also

- [[Saving]], [[Characters]], [[Identities]]
- [[Hosting]], [[Joining]], [[Server worlds]]
- [[Screens]]

## Sources

<!-- sources at 9205ad7 -->
- `src/save.js`: a world as a save in the browser that made it
- `src/ui/screens.js:550-557`, `style.css:1108`: nothing runs until a world is chosen
- `src/ui/screens.js:467-531`, `src/ui/screens.js:558-571`: the Worlds screen's three lists, their rows and buttons, and the buttons below
- `src/ui/screens.js:480-485`: a row's text
- `src/ui/screens.js:474-479`: the buttons by where a world lives; a friend's row has Forget, not Delete
- `src/main.js:1372`: Move to the server only with a relay
- `src/ui/screens.js:483`, `src/main.js:1360`: a world from another map listed, not playable
- `src/ui/screens.js:260-264`, `src/ui/screens.js:605-617`, `src/main.js:1367`: New world, the default name
- `src/main.js:236-250`: the world made at the spawn and saved at once
- `src/clock.js:18`: `START_HOUR`
- `src/main.js:253-288`: Play loads the save, opens to friends again if it was open
- `src/ui/screens.js:206`: Delete's confirmation
- `src/main.js:335-349`, `src/ui/screens.js:198-203`: Leave world saves and returns to the title, asking a host with guests
- `src/ui/screens.js:571`, `src/net.js:383-394`: the dots asked of the relay
- `src/main.js:325-331`: a guest never saves
