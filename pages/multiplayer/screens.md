---
title: Screens
categories: [Interface]
aliases: [Title screen, Pause menu, Pause, Menu, Leave world]
summary: The title screen, the pause menu, and the dead screen, and how Escape moves between them.
---

The **screens** are the full-window menus over the world: the title, the pause menu, and the dead screen, with the screens they lead to (Worlds, Identities, Settings, Controls).

## The title screen

Shown when the game loads: "Cozy Medieval Zombies" and "A village of the dead. Keep the shutters closed." Its buttons:

- **Worlds**: the list of worlds to play and join. See [[Worlds]].
- **Identities**: the names and looks kept in this browser. See [[Identities]].
- **Settings**: see [[Settings]].
- **Controls**: the list of keys. See [[Controls]].

No world runs behind the title until one is chosen; the interface is hidden until then. The title stays up until a choice is made: `Escape` does not close it.

## The pause menu

`Escape` with nothing else open opens it. Its first line says where you are: the world's name and your character ("World, as Name."), and when hosting, "Open to friends, code" with how many are with you. A guest's line reads "In Host's world, World, as Name.", with the host's and the world's names from the join (in a [[Server worlds|server world]], which has no host player, "In World, as Name.").

Its heading is **Paused** when playing alone. In a world open to friends it is **Menu**, with the line "The world goes on while you are here; your character stands still." (see [[Multiplayer]]).

Buttons:

- **Resume**.
- **Save world**: saves at once (not for a guest). See [[Saving]].
- **Open to friends: off / on**: see [[Hosting]] (not for a guest).
- **Owner**: in a server world of yours. See [[Server worlds]].
- **Character**: this world's character, to look at. See [[Characters]].
- **Settings** and **Controls**.
- **Leave world**: saves, closes the world to any friends in it, and shows the [[Worlds]] screen. A host with friends in is asked first.

## The dead screen

When your character dies: their name and "died", the day and hour, and "The body stays where it fell." Buttons:

- **New character**: character creation again, then a new survivor at the spawn of the same world.
- **Leave world**: saves and shows the Worlds screen.

The dead screen stays until a choice is made. See [[Death]] and [[Characters]].

## Stepped away

In a world shared with friends, a screen saying "You stepped away" covers the game after a long time without input; any key, click, or mouse move closes it. See [[Dormancy]].

## Escape

`Escape` closes the top thing first: the actions menu, then Use mode, then the station panel, then a screen (which steps back to the one that opened it), then the build palette, then placement or removal, then the bag and character panels. With nothing open it opens the pause menu.

## With friends

Played alone, every screen pauses the game. In a world open to friends, as host or guest, no screen pauses it: your character stands still while the world goes on. Save world and Open to friends are not on a guest's pause menu.

## See also

- [[Interface]], [[Worlds]], [[Settings]], [[Controls]], [[Death]]

## Sources

<!-- sources at 9205ad7 -->
- `src/ui/screens.js:143-191`, `src/ui/screens.js:550-557`: the title's words and buttons; Escape does not close it
- `style.css:1108`: the interface hidden while no world is chosen
- `src/ui/screens.js:656-667`, `src/main.js:592-609`: the pause menu, its first line (a guest's naming the host and the world (game commit 2c70942)), "Paused" or "Menu", its buttons and who sees them
- `src/main.js:325-331`: Save world
- `src/ui/screens.js:737-747`: the Character screen
- `src/ui/screens.js:198-203`, `src/main.js:345-359`: Leave world asks a host with guests, saves, and shows the Worlds screen (game commit 2c70942)
- `src/ui/screens.js:785-791`, `src/main.js:291-319`: the dead screen and New character
- `src/ui/screens.js:777-784`, `src/main.js:200-209`: the stepped-away screen and what closes it
- `src/main.js:679-696`, `src/ui/screens.js:139-141`: Escape's order, a sub-screen stepping back to its opener
- `src/main.js:667-670`: screens pause only off the wire
