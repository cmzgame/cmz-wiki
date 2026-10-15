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

- every {{n census.constants.main.AUTOSAVE}} seconds of game time (an in-game hour is {{n census.constants.map.HOUR_SECONDS}} seconds, so the clock moves on a little each time);
- when its tab is hidden, and when the page is closed or left;
- on **Save world** in the pause menu, which says "Saved." on the button;
- when it is opened or closed to friends, when a friend joins or leaves, and when a friend goes [[Dormancy|dormant]];
- whenever any player dies;
- straight after it is made.

The autosave counts game time, so while everyone sleeps and time runs fast it saves much more often in real time.

If a save fails, a message says so on screen: "The world could not be saved", with the reason.

### What is kept

Everything in the world: the map as it now stands, the dead, the villagers, the bodies and what is on them, fires and their fuel, the clock, the [[Multiplayer|world rules]], every character (each player's bag, belt, hands, wounds, and needs), and the dormant characters of friends who are away.

A few things in motion are not kept: an automatic walk, a timed action's progress (searching, boarding), a bow's draw, and arrows in flight. They are simply stopped when the world loads.

### Where worlds are kept

In the browser's own storage, on that one device and in that one browser. Another browser or another computer does not see them. Clearing the site's data from the browser removes them. A world can be moved to the server to be played from anywhere: see [[Server worlds]].

## Numbers

- Autosave: every {{n census.constants.main.AUTOSAVE}} seconds of game time.
- Save format version: {{n census.constants.save.VERSION}}. An older save is brought up to date on load; a save from a newer version of the game is refused.

## With friends

Only the host's browser saves. A guest never saves a friend's world; the host's save keeps the guest's character, so they come back as it. What a guest keeps in their own browser is the row under Friends' worlds on the Worlds screen and their [[Identities|identities]].

A [[Server worlds|server world]] is saved by the server.

## See also

- [[Worlds]], [[Characters]], [[Server worlds]], [[Dormancy]]
