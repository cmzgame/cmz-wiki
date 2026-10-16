---
title: Settings
categories: [Interface]
aliases: [Options, Settings screen, Defaults, World rules]
summary: The Settings screen, every choice on it with its default, and which ones are the world's rules.
---

The **Settings** screen is opened from the title screen or the pause menu. Its heading says the settings are kept in this browser. Each row is a set of buttons, one per choice; the one in use is lit. **Defaults** resets them and **Back** returns.

## The rows

In the order the screen shows them, with the default first:

- **Interface size**: Auto, or a fixed size in quarter steps up to {{n census.constants.view.UI_SCALE_MAX}}x. Auto fits the interface to the window.
- **Zoom**: Auto, Wide, Middle, or Close. Auto picks the level that suits the window's size. `Z` and the wheel change it too, and the choice is kept here.
- **Zombie aggro**: On (they hunt you) or Off (they ignore you). On by default; a browser that saved its settings before that keeps its own. *A world rule.*
- **Zombies attack villagers**: Off (villagers are safe), or "On (they hunt villagers, whatever aggro says; with aggro on, you first)". It is a separate knob from Zombie aggro on purpose: with aggro off and this on, the dead leave you alone and still go after villagers. *A world rule.*
- **Survival**: On (hunger, thirst, tiredness) or Off (no needs). *A world rule.*
- **Free building**: Off (costs apply) or On (no costs). *A world rule.*
- **Cursor**: Default, A hand, A severed hand, or A zombie hand.
- **Names over heads**: Shown or Hidden: another player's name over their head while they are in sight.
- **Debug corner**: Shown or Hidden.
- **Square and paths**: Cobble or Dirt, the surface of the village square and its paths. It changes only a world your browser runs: in a friend's world the square is the host's.
- **Bow aim guide**: On (the landing marker and a dotted line while drawing) or Off. See [[Archery]].
- **Swing timer**: On or Off: the two swing bars at the bottom of the screen. The red exposure bar over your head shows either way.
- **Swing targets**: Off or On (a green outline on what your next swing would hit).
- **Multi-hit**: Off (a blow hits the nearest only: the intended way) or On (everything in the wedge: the easy button). *A world rule.* See [[Combat]].
- **Layer** rows: one per slot that has painted clothing layers, to try one on in place of what is equipped (the button **item** shows the item's own art).

### Testing rows

{{devonly note="These rows are for testing the game."}}

- **Combat testing**: Off or On (no trees and a crowd of extra dead in a ring round the spawn; reload the page).
- **Dev chest**: On (a chest of every item by the spawn) or Off. It is read when a world is made.
- **Show hit shapes**: Off or On (draws the dead's body samples).

## World rules

The {{n census.counts.rules}} rows marked as world rules belong to the world, not to the player. In your own world they come from your settings and are saved with the world. In a friend's world they are the host's: the rows are greyed and marked "(the host's)". In a [[Server worlds|server world]] the owner sets them. See [[Multiplayer]].

## Defaults

**Defaults** resets only what the Settings screen shows: its choices and the painted layers. It never touches your [[Identities|identities]], the browser's own id, the list of friends' worlds, the creator and owner keys, or where the panels were dragged to.

## Every setting the game keeps

The game's full list of stored settings and their defaults, including the ones that have no row on the screen:

{{settings}}

## See also

- [[Controls]], [[Interface]], [[Multiplayer]], [[Screens]]

## Sources

<!-- sources at 9205ad7 -->
- `src/ui/screens.js:748-776`: the screen, "Kept in this browser", Defaults and Back
- `src/settings.js:8-59`: every row's choices and defaults; Zombie aggro on, the villagers row's label (game commit 2c70942)
- `src/ui/screens.js:754-772`, `src/ui/names.js:35`: the rows in order, Names over heads among them (game commit 2c70942)
- `src/main.js:1025-1032`: the square's surface never laid on a guest's copy of the host's world (game commit 2c70942)
- `src/view.js:84-88`: `UI_SCALE_MAX` and Auto's fit
- `src/view.js:28`, `src/view.js:70-79`, `src/main.js:898-906`: the zooms and Auto
- `src/rules.js:109-115`: the five world rules
- `style.css:561-565`, `src/ui/swing-timer.js:16`: the swing bars at the bottom, the exposure bar over the head
- `src/ui/screens.js:454-463`: the Layer rows, the first button **item** (game commit 9a450f2)
- `src/game.js:123-139`: combat testing's crowd in a ring round the spawn (game commit 2c70942)
- `src/main.js:241-242`: the dev chest and combat testing read when a world is made
- `src/ui/screens.js:373-382`, `src/main.js:591`, `server/world.js:97-99`: world rules greyed for a guest, a server world's from its owner
- `src/settings.js`: Defaults resets only the screen's own choices and the painted layers (game commit 3c70aa7)
- `src/identities.js:91-98`: a new browser id drawn after the reset
