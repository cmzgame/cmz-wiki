---
title: Worlds
categories: [Multiplayer, Interface]
aliases: [World, Worlds screen, Worlds page, New world]
summary: A world is one valley with its state and everyone in it, kept in the browser that made it; Play on the game's site opens the Worlds page, a card for each.
---

A **world** is one copy of [[The valley]] with everything in it: the dead, the villagers, the fires, what has been built and moved, the time of day, and every [[Characters|character]] who has played there. A browser can keep many worlds, each at its own hour, and return to any of them. Nothing runs until a world is chosen: before that the game is its site (see [[Screens#The site|Screens]]).

## How it works

### The Worlds page

**Play** on the site's menu (or **Play in your browser** on Home) opens the Worlds page. It says "Each world keeps its own characters. Nothing runs until you choose one." Each world is a card: the world's name, a line about your survivor, a line of details, one big button for the main thing to do, and small buttons for the rest. The page has three parts:

- **My worlds**: the worlds kept in this browser ("No worlds yet. New world makes one." when there are none). A card shows:
  - the name;
  - your survivor: "as Name", "Name died", or "no survivor yet";
  - the world's day and hour ("Day N, HH:MM"), when it was last played ("played today" with the time, or the date), and its code if it has been opened to friends;
  - **Play** big (**New character** when yours is dead), with **Move to the server** (see [[Server worlds]]) and **Delete** small.

  A world moved to the server is marked "on the server", with **Play** big and **Owner** and **Bring it home** small. A world partway home is marked "on its way home" and has **Finish bringing it home**.
- **My worlds on the server**: worlds of yours on the server with no copy in this browser (moved up from another device, or added by their key), marked "on the server" with their code and "yours by its owner key"; **Play** big, **Owner** small.
- **Friends' worlds**: every friend's world this browser has tried to join, with a dot that says whether it is open now, your survivor there, whose world it is, its code, and when you last joined; **Rejoin** big, **Forget** small. See [[Joining]].

Below the lists: **New world**, **Join a game**, **A world of mine on the server** (shown only when a relay is set), and **Back**, which goes to Home.

A world made on another map is listed but cannot be played here; its card says it is on another map and has no Play.

### Making a world

**New world** asks for a name, with one offered: the map's name and the day's date. Then comes [[Characters|character creation]]: an identity, then a second step. **Into the valley** makes the world behind the [[Screens#The loading screen|loading screen]] ("Making" and its name), puts your character at the spawn, saves it at once, and draws the ground round you before the screen goes. The site goes and the game fills the window. A new world starts at {{n census.constants.clock.START_HOUR}} o'clock in the morning on day one.

### Playing a world

**Play** loads the world as it was last saved, behind the loading screen ("Reading" and its name), and puts you back in your character. A world that was open to friends when you left it opens to friends again. If your character there is dead, the button is **New character** instead.

### Deleting a world

**Delete** asks "Delete this world and every character in it?" and, if confirmed, removes it from the browser for good. A friend's world cannot be deleted from here, only forgotten.

### Leaving a world

**Leave world**, on the pause menu or the dead screen, saves the world under the loading screen ("Saving" and its name), which stays until the save is written, then goes back to the site's Worlds page. A host with friends in is asked first, since leaving closes the world to them.

## Numbers

- New worlds start at {{n census.constants.clock.START_HOUR}} o'clock.
- The Friends' worlds dots are asked of the relay while the page is up.

## With friends

A world is the host's: it lives in their browser, and friends play in it only while it is open. A guest keeps nothing of a friend's world but its card under Friends' worlds. See [[Saving]].

## See also

- [[Saving]], [[Characters]], [[Identities]]
- [[Hosting]], [[Joining]], [[Server worlds]]
- [[Screens]]

## Sources

<!-- sources at 02dfcc2 -->
- `src/save.js`: a world as a save in the browser that made it
- `src/ui/screens.js:177-200`, `src/main.js:1207-1209`: nothing runs until a world is chosen; out of a world, the site
- `index.html:51`, `src/ui/screens.js:691`: Play and Play in your browser open the Worlds page (game #120)
- `src/ui/screens.js:737-750`: the Worlds page's line, its three lists, and the buttons below
- `src/ui/screens.js:445-464`, `src/ui/screens.js:585-613`, `src/save.js:155-170`, `src/clock.js:88-94`: a card: the name and its mark, the survivor, the day and hour, when last played, the code; the main button big and the rest small (game #120)
- `src/ui/screens.js:593-603`: the buttons by where a world lives
- `src/ui/screens.js:635-645`: my worlds on the server with no copy here
- `src/ui/screens.js:647-662`: a friend's card: the dot, the survivor, the host, the code, Rejoin and Forget
- `src/main.js:1507`, `src/ui/screens.js:747`: Move to the server and A world of mine on the server only with a relay
- `src/main.js:1495`, `src/ui/screens.js:596`, `src/ui/screens.js:609`: a world from another map listed, not playable
- `src/ui/screens.js:246-247`: Back goes to Home
- `src/ui/screens.js:331-336`, `src/ui/screens.js:785-796`, `src/main.js:1502`: New world, the default name
- `src/ui/screens.js:821`: Into the valley
- `src/main.js:295-321`, `src/ui/screens.js:222-230`: the world made at the spawn behind the loading screen, saved at once, its ground baked before the screen goes; the site hidden
- `src/clock.js:18`: `START_HOUR`
- `src/main.js:324-375`: Play reads the save behind the loading screen, opens to friends again if it was open
- `src/ui/screens.js:277`: Delete's confirmation
- `src/ui/screens.js:269-274`, `src/main.js:429-455`: Leave world asks a host with guests, saves under the loading screen until written, and shows the Worlds page
- `src/ui/screens.js:422-438`, `src/ui/screens.js:650-654`, `src/net.js:389-396`: the dots asked of the relay
- `src/main.js:412-413`: a guest never saves
