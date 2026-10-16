---
title: Screens
categories: [Interface]
aliases: [Title screen, Pause menu, Pause, Menu, Leave world, Loading screen]
summary: The title screen, the pause menu, the dead screen, the loading screen into and out of a world, and how Escape moves between them.
numbersOk: true
---

<!-- typed: the loading screen's least time up, half a second, is a literal in src/boot.js worldEnd, neither data nor a named constant -->

The **screens** are the full-window menus over the world: the title, the pause menu, and the dead screen, with the screens they lead to (Worlds, Identities, Settings, Controls), and the loading screen shown while a world is made, read, left, or joined.

## The title screen

Shown when the game loads: "Cozy Medieval Zombies" and "A village of the dead. Keep the shutters closed." Its buttons:

- **Worlds**: the list of worlds to play and join. See [[Worlds]].
- **Identities**: the names and looks kept in this browser. See [[Identities]].
- **Settings**: see [[Settings]].
- **Controls**: the list of keys. See [[Controls]].

No world runs behind the title until one is chosen. With no world in, the title and the screens it leads to sit over black, never over the last picture of a world just left, and the interface is hidden, the chat box and the debug corner with it. The title stays up until a choice is made: `Escape` does not close it.

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

## The loading screen

The screen the game boots behind comes back while a world is entered or left: the game's name, what is happening under it ("Making" and the world's name, say), a bar, and a line naming each stage:

- **Making** and the world's name, for **New world**: the world is made and its ground drawn round you.
- **Reading** and the world's name, for **Play**: the save is read, the world put back, and its ground drawn round you.
- **Saving** and the world's name, for **Leave world** in a world of yours; **Leaving** for a guest. It stays until the save is written, then the [[Worlds]] screen shows.
- **Joining** and the code, for a join of a friend's world or a server world (Join a game, Rejoin, or a guest's new character after a death), with a **Cancel** button. When the host asks who you are, it gives way to character creation, and **Join as this** brings it back. Then "Receiving the world", the ground, and the world. **Cancel** leaves the join and shows the Worlds screen. See [[Joining]].

It stays up at least half a second, so it never flickers, and goes once the world draws smoothly. A world played alone stands still behind it. A tab in the background shows it not at all.

## Stepped away

In a world shared with friends, a screen saying "You stepped away" covers the game after a long time without input; any key, click, or mouse move closes it, and so does its **Come back** button. See [[Dormancy]].

## Escape

`Escape` closes the top thing first: the actions menu, then Use mode, then the station panel, then a screen (which steps back to the one that opened it), then the build palette, then placement or removal, then the bag and character panels. With nothing open it opens the pause menu.

## With friends

Played alone, every screen pauses the game. In a world open to friends, as host or guest, no screen pauses it: your character stands still while the world goes on. Save world and Open to friends are not on a guest's pause menu. A guest's join is under the loading screen until the host's world arrives.

## See also

- [[Interface]], [[Worlds]], [[Settings]], [[Controls]], [[Death]], [[Joining]]

## Sources

<!-- sources at 19a1c18 -->
- `src/ui/screens.js:589-595`, `src/ui/screens.js:176-184`, `src/main.js:781-782`: the title's words and buttons; Escape does not close it
- `src/main.js:98-104`, `src/main.js:1195-1197`, `style.css:1104`: no world in: the canvas cleared to black, the interface hidden, the chat box and the debug corner with it (game #80)
- `src/ui/screens.js:694-705`, `src/main.js:676-691`: the pause menu, its first line (a guest's naming the host and the world), "Paused" or "Menu", its buttons and who sees them
- `src/main.js:1478-1480`, `src/main.js:403-417`: Save world
- `src/ui/screens.js:775-784`: the Character screen
- `src/ui/screens.js:211-216`, `src/main.js:418-442`: Leave world asks a host with guests, saves, and shows the Worlds screen
- `src/ui/screens.js:810-816`, `src/main.js:368-397`: the dead screen and New character
- `index.html:12-17`, `src/boot.js:101-151`: the loading screen: the title under the name, the bar and the line, Cancel, at least half a second up, nothing in a hidden tab (game #115)
- `src/main.js:236-263`: the ground round you baked behind it, a lone world held still, closed once frames run smoothly
- `src/main.js:283-311`, `src/main.js:314-322`, `src/main.js:420-424`: Making, Reading, Saving or Leaving
- `src/main.js:267-281`, `src/main.js:627-637`, `src/main.js:1467-1474`, `src/main.js:1642-1664`: Joining with Cancel, giving way to creation when the host asks who, back on Join as this, Receiving the world, the ground, then the world
- `src/ui/screens.js:802-809`, `src/main.js:200-211`: the stepped-away screen and what closes it
- `src/main.js:761-798`, `src/ui/screens.js:176-206`: Escape's order, a sub-screen stepping back to its opener
- `src/main.js:766-771`, `src/main.js:1458`: screens pause only off the wire
