---
title: Screens
categories: [Interface]
aliases: [Title screen, The site, Home page, Pause menu, Pause, Menu, Exit game, Leave world, Loading screen]
summary: Out of a world the game is a site of pages (Home, About, Play and the Worlds page, Controls, Identities, Settings, the Wiki); in a world the pause menu and the dead screen sit over it; the loading screen goes between.
numbersOk: true
---

<!-- typed: the loading screen's least time up, half a second, is a literal in src/boot.js worldEnd, neither data nor a named constant -->

The **screens** are the game's menus. Out of a world the game is **a site**: full-window pages in the game's own art, from Home to the [[Worlds]] page. In a world, the pause menu, the dead screen, and the screens they lead to sit over the world. The loading screen is shown between the two, while a world is made, read, left, or joined. In a world the game fills the window, with nothing of the site round it.

## The site

When the game loads, and whenever no world is in, the game is a web page rather than a box over a world. Behind it is a blurred picture of the game. At the top is the name in stone and timber letters between autumn trees, with a stone menu bar under it. Each page sits in a stone frame below. At the foot is "A village of the dead. Keep the shutters closed." and a link to this wiki.

The menu's buttons:

- **Home**.
- **About**.
- **Controls**: the keys, grouped. See [[Controls]].
- **Play**, the big gold button: the [[Worlds]] page, where a world is chosen, made, or joined.
- **Identities**: the names and looks kept in this browser. See [[Identities]].
- **Settings**: see [[Settings]].
- **Wiki**: this wiki, in a new tab.

The button of the page showing is lit. The pages under Play (Worlds, New world, Join a game, and [[Characters|character creation]]) light Play. A menu button drops what a page was in the middle of: a character half made, or an identity half edited. Settings and Controls are the exception: they return to the page they were opened from.

**Home** says "A cute village, seen whole, overrun by the dead.", has a big **Play in your browser** button (the Worlds page), and points new players to this wiki. `Enter` on Home opens the Worlds page too, unless a button, link, or field has the focus. When a guest is sent out of a friend's world, the reason is shown on Home (see [[Joining]]). **About** describes the game in a few short paragraphs and has its own **Play**.

The site shows at once, before the game has finished loading. A button pressed before the game is ready brings up the loading screen with the stages still to load, and the page asked for opens once the game is ready.

No world runs behind the site, and nothing of a world is drawn. The game's interface is hidden with it, the chat box and the debug corner included. `Escape` steps back: About to Home, Settings and Controls to where they were opened from, the Worlds and Identities pages to Home. On Home it does nothing.

## The pause menu

`Escape` with nothing else open opens it. Its first line says where you are: the world's name and your character ("World, as Name."), and when hosting, "Open to friends, code" with how many are with you. A guest's line reads "In Host's world, World, as Name.", with the host's and the world's names from the join (in a [[Server worlds|server world]], which has no host player, "In World, as Name.").

Its heading is **Paused** when playing alone. In a world open to friends it is **Menu**, with the line "The world goes on while you are here; your character stands still." (see [[Multiplayer]]).

Buttons:

- **Resume**.
- **Save world**: saves at once (not for a guest). See [[Saving]].
- **Open to friends: off / on**: see [[Hosting]] (not for a guest).
- **Owner**: in a server world of yours. See [[Server worlds]].
- **World rules**: how this world plays. The host (or a player alone) changes them here, at once; a guest sees them locked. See [[World rules]].
- **Character**: this world's character, to look at. See [[Characters]].
- **Settings** and **Controls**, which open over the world and return to the pause menu.
- **Exit game**: saves, closes the world to any friends in it, and goes back to the site's [[Worlds]] page. A host with friends in is asked first: "Exiting closes the world to the friend with you. Exit?", or the number of them when there are more. A guest's goes without a question.

## The dead screen

When your character dies: their name and "died", the day and hour, and "The body stays where it fell." It sits over the world. Buttons:

- **New character**: character creation again, over the world, then a new survivor at the spawn of the same world.
- **Exit game**: saves and goes back to the site's Worlds page, as on the pause menu.

The dead screen stays until a choice is made. See [[Death]] and [[Characters]].

## The loading screen

The game's name, what is happening under it ("Making" and the world's name, say), a bar, and a line naming each stage. It is shown while the game loads if a button of the site is pressed first, and while a world is entered or left:

- **Making** and the world's name, for **New world**: the world is made and its ground drawn round you.
- **Reading** and the world's name, for **Play**: the save is read, the world put back, and its ground drawn round you.
- **Saving** and the world's name, for **Exit game** in a world of yours; **Leaving** for a guest. It stays until the save is written, then the site's [[Worlds]] page shows.
- **Joining** and the code, for a join of a friend's world or a server world (Join a game, Rejoin, or a guest's new character after a death), with a **Cancel** button. When the host asks who you are, it gives way to character creation, and **Join as this** brings it back. Then "Receiving the world", the ground, and the world. **Cancel** gives up the join and shows the Worlds page; it goes once the host's world has arrived, since from then on the way out is Exit game. See [[Joining]].

The bar only moves forward. The screen stays up at least half a second, so it never flickers, and goes once the world draws smoothly. A world played alone stands still behind it. A tab in the background shows it not at all.

## Stepped away

In a world shared with friends, a screen saying "You stepped away" covers the game after a long time without input; any key, click, or mouse move closes it, and so does its **Come back** button. See [[Dormancy]].

## Escape

`Escape` closes the top thing first: the actions menu, then Use mode, then the station panel, then a screen (which steps back to the one that opened it), then the build palette, then placement or removal, then the bag and character panels. With nothing open it opens the pause menu. In fullscreen (see [[Settings]]) the browser takes the first `Escape` to leave fullscreen; the next one pauses.

## With friends

Played alone, every screen pauses the game. In a world open to friends, as host or guest, no screen pauses it: your character stands still while the world goes on. Save world and Open to friends are not on a guest's pause menu. A guest's join is under the loading screen until the host's world arrives. Until then the join counts as out of a world, so choosing who you are is a page of the site, not a box over the stand-in world. A guest's new character after a death is chosen over the world, since that guest is still in it.

## See also

- [[Interface]], [[Worlds]], [[Settings]], [[Controls]], [[Death]], [[Joining]]

## Sources

<!-- sources at 2a9a308 -->
- `index.html:36-67`, `style.css:1593-1614`: the site: the blurred picture behind, the wordmark between the autumn trees, the menu with Play and Wiki, the footer (game #120)
- `src/ui/screens.js:189-212`, `src/ui/screens.js:234-242`: out of a world, and during a join waiting for its welcome, a screen is drawn as a page of the site with the game's stage hidden; in a world, over the world
- `src/ui/screens.js:117-127`, `src/ui/screens.js:738-744`: the menu's lit button, Play lit for its pages; a menu button drops a creation or an identity half edited, Settings and Controls excepted
- `src/ui/screens.js:746-773`, `src/ui/screens.js:785-788`, `src/main.js:1751`: Home, its Play in your browser and the wiki line, a reason shown on it; About
- `index.html:68-88`, `src/main.js:1769-1773`, `src/boot.js:58-65`: the site at the first paint; a button pressed before the game is ready shows the loading screen and its page opens when boot is done; a failure always shows
- `src/main.js:100-104`, `src/main.js:1236-1238`, `style.css:1106`: no world in: nothing of a world drawn, the interface hidden, the chat box and the debug corner with it
- `src/ui/screens.js:245-274`, `src/main.js:831-832`: Escape out of a world steps back; Home stays
- `src/ui/screens.js:910-921`, `src/main.js:724-743`: the pause menu, its first line (a guest's naming the host and the world), "Paused" or "Menu", its buttons and who sees them
- `src/main.js:1502-1504`, `src/main.js:435-448`: Save world
- `src/ui/screens.js:1008-1018`: the Character screen
- `src/ui/screens.js:218-232`: Settings and Controls return to where they were opened from
- `src/ui/screens.js:912-921`: the pause menu's buttons, World rules and Exit game among them
- `src/ui/screens.js:281-287`, `src/main.js:456-489`: Exit game asks a host with guests ("the friend" for one), a guest's asks nothing; saves and shows the Worlds page
- `src/ui/screens.js:103-110`, `src/ui/screens.js:126`: Enter on Home opens the Worlds page unless something focused takes it; a menu button gives up the focus
- `src/ui/screens.js:1044-1050`, `src/ui/screens.js:391`, `src/main.js:400-429`: the dead screen, New character and Exit game
- `index.html:12-23`, `src/boot.js:103-158`: the loading screen: the title under the name, the bar and the line, Cancel, at least half a second up, nothing in a hidden tab
- `src/main.js:241-267`: the ground round you baked behind it, the bar going on from where it stands, a lone world held still, closed once frames run smoothly (game #117)
- `src/main.js:310-355`, `src/main.js:475-479`: Making, Reading, Saving or Leaving
- `src/main.js:269-286`, `src/main.js:674-685`, `src/main.js:1491-1499`, `src/main.js:1672-1696`: Joining with Cancel, giving way to creation when the host asks who, back on Join as this, Receiving the world, the ground, then the world
- `src/main.js:1674`, `src/boot.js:137-139`: Cancel goes once the welcome arrives (game #117)
- `src/ui/screens.js:1036-1043`, `src/main.js:154-180`: the stepped-away screen and what closes it
- `src/main.js:831-850`, `src/ui/screens.js:245-274`: Escape's order, a screen stepping back to its opener
- `src/ui/screens.js:545-552`: in fullscreen the first Escape leaves it, the second pauses, as the Fullscreen row says
- `src/main.js:819-822`, `src/main.js:1482`: screens pause only off the wire
- `src/main.js:400-417`: a guest's new character after a death is chosen while still in the world
