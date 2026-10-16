---
title: Settings
categories: [Interface]
aliases: [Options, Settings screen, Defaults, World rules]
summary: The Settings screen, its three tabs, every row on it with its default, and which ones are the world's rules.
---

The **Settings** screen is opened from the game's site menu out of a world, where it is a page of the site, or from the pause menu in one, where it sits over the world (see [[Screens]]). Its heading says the settings are kept in this browser. It has three tabs: **Display**, **World rules**, and **Testing**; Display is open first. Each row has a label and a line under it explaining what it does. A row whose answers are on and off is a switch, with its answer written beside it ("On", "Shown"); any other row is a dropdown. Either way only the chosen answer shows. **Defaults** resets them and **Back** returns to where Settings was opened from.

## The rows

In the order the screen shows them, with the default first.

### Display

- **Interface size**: Auto, or a fixed size in quarter steps up to {{n census.constants.view.UI_SCALE_MAX}}x. Auto fits the interface to the window.
- **Zoom**: Auto, Wide, Middle, or Close. Auto picks the level that suits the window's size. `Z` and the wheel change it too, and the choice is kept here.
- **Cursor**: Default, A hand, A severed hand, or A zombie hand.
- **Names over heads**: Shown or Hidden: another player's name over their head while they are in sight.
- **Swing timer**: On or Off: the two swing bars at the bottom of the screen. The red exposure bar over your head shows either way.
- **Bow aim guide**: On or Off: the landing marker and a dotted line while drawing a bow. See [[Archery]].

### World rules

- **Zombie aggro**: On, the dead hunt you; Off, they wander and ignore you. On by default; a browser that saved its settings before that keeps its own.
- **Zombies attack villagers**: Off by default. On, the dead hunt villagers whatever aggro says, and with aggro on they go for you first. It is a separate switch from Zombie aggro on purpose: with aggro off and this on, the dead leave you alone and still go after villagers.
- **Survival**: On: hunger, thirst, and tiredness. Off, the body has no needs. See [[Survival]].
- **Free building**: Off by default. On, building costs nothing.
- **Multi-hit**: Off by default: a blow hits the nearest only, the intended way. On, it reaches everything in its wedge: the easy button. See [[Combat]].

### Testing

{{devonly note="This tab is for testing the game."}}

- **Debug corner**: Shown or Hidden: the numbers and keys in the top-left corner.
- **Swing targets**: Off or On: a green outline on what your next swing would hit.
- **Hit shapes**: Off or On: draws the dead's body samples, green when the next swing reaches them.
- **Combat testing**: Off or On: no trees and a crowd of extra dead in a ring round the spawn. It is read when a world is made; the row's line says to reload the page.
- **Dev chest**: On or Off: a chest of every item by the spawn. It is read when a world is made.
- **Square and paths**: Cobble or Dirt, the surface of the village square and its paths. It changes only a world your browser runs: in a friend's world the square is the host's.
- **Layer** rows: one per slot that has painted clothing layers, a dropdown to try one on in place of what is equipped (the answer **item** shows the item's own art).
- **Painted hair**: a **Reload hair** button that picks up hair styles just saved in the hair editor.
- **Relay**: where Open to friends and Join go, or "none: only this browser's own tabs".

A dropdown with the focus keeps the keys to itself: a letter typed on it never reaches the world, and `Escape` still goes through.

## World rules

The {{n census.counts.rules}} rows on the World rules tab belong to the world, not to the player. In your own world they come from your settings and are saved with the world. In a friend's world they are the host's: the tab shows the host's answers, each row marked "(the host's)" and locked. In a [[Server worlds|server world]] the owner sets them, with the same switches on the owner's screen. See [[Multiplayer]].

## Defaults

**Defaults** resets only what the Settings screen shows: its rows and the painted layers. The open tab stays open. It never touches your [[Identities|identities]], the browser's own id, the list of friends' worlds, the creator and owner keys, or where the panels were dragged to.

## Every setting the game keeps

The game's full list of stored settings and their defaults, including the ones that have no row on the screen:

{{settings}}

## See also

- [[Controls]], [[Interface]], [[Multiplayer]], [[Screens]]

## Sources

<!-- sources at 02dfcc2 -->
- `src/ui/screens.js:926-941`, `index.html:53`, `src/ui/screens.js:844`: the screen, "Kept in this browser", the three tabs, Defaults and Back; opened from the site's menu or the pause menu
- `src/ui/screens.js:177-200`, `src/ui/screens.js:206-220`, `src/ui/screens.js:233-235`: a page of the site out of a world, over the world in one; Back returns to where it was opened from (game #120)
- `src/settings.js:40-73`: the registry: every row's tab, label, line of explanation, and answers; a true-or-false row a switch, any other a dropdown
- `src/ui/screens.js:466-492`: a switch with its answer beside it, a dropdown showing the chosen answer, the line under each label
- `src/ui/screens.js:83`, `src/ui/screens.js:137-141`: Display open first; a click on a tab opens it
- `src/settings.js:8-38`: the defaults, Zombie aggro on
- `src/view.js:80-87`: `UI_SCALE_MAX` and Auto's fit
- `src/view.js:28`, `src/view.js:70-79`: the zooms and Auto
- `src/main.js:1124-1130`: the square's surface never laid on a guest's copy of the host's world
- `src/rules.js:9-37`: the five world rules
- `src/ui/swing-timer.js:16`: the exposure bar over the head, apart from the swing bars
- `src/game.js:97`, `src/game.js:126-131`: combat testing's crowd in a ring round the spawn
- `src/main.js:302-308`: the dev chest and combat testing read when a world is made
- `src/ui/screens.js:562-581`: the Testing tab's Layer rows (the first answer **item**), Painted hair with Reload hair, and the relay
- `src/ui/screens.js:155-159`: a focused dropdown keeps its keys, Escape through
- `src/ui/screens.js:480-492`, `src/main.js:701`, `server/world.js:95-98`: world rules shown as the host's and locked for a guest; a server world's from its owner
- `src/ui/screens.js:860-864`: the owner's screen's rules as the same switches
- `src/settings.js:106-113`, `src/ui/screens.js:938-941`: Defaults resets only the screen's own rows and the painted layers; the tab is kept
- `src/identities.js:90-97`: a new browser id drawn after the reset
