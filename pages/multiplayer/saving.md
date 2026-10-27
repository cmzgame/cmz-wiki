---
title: Saving
categories: [Multiplayer, Mechanics]
aliases: [Save, Saves, Autosave, Save world]
summary: A world saves itself in the browser often and on every important moment; Save world saves at once.
---

A [[Worlds|world]] is **saved** in the browser that made it, often and without being asked. There is no save slot to choose and no file to keep: each world has its own save, and Play always continues it.

## How it works

### When a world saves

A world of your browser saves:

- every {{n census.constants.main.AUTOSAVE}} seconds of game time, once as many real seconds have passed too (an in-game hour is {{n census.constants.map.HOUR_SECONDS}} seconds, so the clock moves on a little each time);
- when its tab is hidden, and when the page is closed or left;
- on **Save world** in the pause menu, which says "Saved." on the button;
- when it is opened or closed to friends, when a friend joins or leaves, and when a friend goes [[Dormancy|dormant]];
- whenever any player dies;
- when its host changes one of its [[World rules|world rules]];
- on **Exit game**, before the site comes back;
- straight after it is made.

The autosave needs both a stretch of game time and the same stretch of real time, so a night slept through at speed saves about once a real minute, not every second.

If a save fails, a message says so on screen: "The world could not be saved", with the reason.

### What is kept

Everything in the world: the map as it now stands, the dead, the villagers, the bodies and what is on them, fires and their fuel, the clock, the [[World rules|world rules]], every character (each player's bag, belt, hands, wounds, needs, [[Mana]], the time of their last potion, and a potion's buff), and the dormant characters of friends who are away.

A few things in motion are not kept: an automatic walk, a timed action's progress (searching, boarding), a bow's draw, and arrows in flight. They are simply stopped when the world loads. One of the dead saved while breaking in at a door or shutters takes up the chase again on the first step after the load (or stands idle with Zombie aggro off); a world saved at that moment once stopped with an error there instead, before the fix.

### Where worlds are kept

In the browser's own storage, on that one device and in that one browser. Another browser or another computer does not see them. Clearing the site's data from the browser removes them. A world can be moved to the server to be played from anywhere: see [[Server worlds]].

## Numbers

- Autosave: every {{n census.constants.main.AUTOSAVE}} seconds of game time, and no oftener than every {{n census.constants.main.AUTOSAVE}} real seconds.
- Save format version: {{n census.constants.save.VERSION}}. A world saved before this version (2026-10-27, when the map gained its floors) does not load, and neither does a save from a newer version of the game; the saves of the two versions before it were brought up to date, but worlds are expendable while the game is tested.

## With friends

Only the host's browser saves. A guest never saves a friend's world; the host's save keeps the guest's character, so they come back as it. What a guest keeps in their own browser is the card under Friends' worlds on the Worlds page and their [[Identities|identities]].

A [[Server worlds|server world]] is saved by the server.

## See also

- [[Worlds]], [[Characters]], [[Server worlds]], [[Dormancy]]

## Sources

<!-- sources at 2a9a308 -->
- `src/save.js:47-50`: worlds kept in the browser's IndexedDB with an index in localStorage
- `src/main.js:109-110`, `src/main.js:1239-1242`: `AUTOSAVE`, in seconds of game time and as many of real time
- `src/map.js:92`: `HOUR_SECONDS`, the seconds of an in-game hour
- `src/main.js:1774-1789`: saves when the tab is hidden and when the page is left
- `src/main.js:1503`: Save world says "Saved."
- `src/main.js:699-720`, `src/host.js:121`, `src/host.js:174-175`: saves on opening or closing to friends, a join, a leave, and dormancy
- `src/host.js:241-243`: a save on any player's death
- `src/main.js:338`: a save straight after a world is made
- `src/main.js:446`: a failed save's message
- `src/game.js:189-210`: what the save keeps: the clock, the rules, the map, every character
- `src/main.js:299-305`, `src/main.js:475-489`: saved when the host changes a rule, and on Exit game
- `src/main.js:435-448`: the save's wrapper keeps the dormant characters; never for a guest
- `src/save.js:12-13`: what is not saved
- `src/save.js:26-51` (at da57a57): the version, no step up from the one before, a newer one refused (game #533)
- `src/identities.js:106-112`, `src/settings.js:32-34`: what a guest keeps: friends' bookmarks and identities
- `server/world.js:130`, `server/world.js:144-160`: a server world saved by the server
- `src/entities/zombie.js:768-773`, `src/entities/character.js:61` `CH_DROPPED`: one of the dead saved mid-breach comes back in the chase; `src/game.js:476`: mana, `potionAt`, and `buffs` kept on each player (games #487, #488, #491, at 0fa02e5)
