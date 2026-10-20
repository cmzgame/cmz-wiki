---
title: Settings
categories: [Interface]
aliases: [Options, Settings screen, Defaults, Fullscreen]
summary: The Settings screen, its two tabs, Display and Testing, and every row on it with its default; a world's rules are not here.
---

The **Settings** screen is opened from the game's site menu out of a world, where it is a page of the site, or from the pause menu in one, where it sits over the world (see [[Screens]]). Its heading says the settings are kept in this browser. It has two tabs, **Display** and **Testing**; Display is open first. Each row has a label and a line under it explaining what it does. A row whose answers are on and off is a switch, with its answer written beside it ("On", "Shown"); any other row is a dropdown. Either way only the chosen answer shows. **Defaults** resets them and **Back** returns to where Settings was opened from.

The rules a world plays by (Zombie aggro, Survival, Trees, Starting population, and the rest) are not settings: each world keeps its own, chosen when it is made and changed from the pause menu. See [[World rules]].

## The rows

In the order the screen shows them, with the default first.

### Display

- **Interface size**: Auto, or a fixed size in quarter steps up to {{n census.constants.view.UI_SCALE_MAX}}x. Auto fits the interface to the window.
- **Zoom**: Auto, Wide, Middle, or Close. Auto picks the level that suits the window's size. `Z` and the wheel change it too, and the choice is kept here.
- **Cursor**: Default, A hand, A severed hand, or A zombie hand.
- **Names over heads**: Shown or Hidden: another player's name over their head while they are in sight.
- **Small text**: Clear or Pixel, Clear by default: "Very small text in a plain, clear font (Clear), or in the pixel font like the rest (Pixel)." With Clear, all the smallest text (the health and stamina numbers, the clock, stack counts, the hover cards, the bleed's numbers, the log and the chat, these help lines) is drawn in the computer's own sans-serif, where small digits are easy to tell apart (the pixel font's three and eight run together when small); titles and large text keep the pixel font. Every digit, at any size, is in the clear sans too (a name like a world's or your character's keeps its pixel letters around clear numbers); Pixel gives back the old look, digits included.
- **Floating numbers**: Shown or Hidden: damage, healing, and what you gather float up over heads (see [[Interface#Floating numbers|Interface]]).
- **Swing timer**: On or Off: the two swing bars at the bottom of the screen. The red exposure bar over your head shows either way.
- **Aim guide**: Off or On: the landing marker and a dotted line while you draw a bow, wind up a throw, or cast. It changes only what your own screen draws. A browser that saved its settings before it went off by default keeps its own choice. See [[Archery]].
- **Fullscreen**: Off or On, at the foot of the tab. It asks the browser for the whole screen when clicked and shows what the page is in now; it is not kept, since the browser decides when fullscreen ends. Playing never goes fullscreen by itself. Where the browser does not allow it, the row says so and cannot be switched. What `Escape` does in fullscreen depends on the browser, and the row's line says which:
  - In a browser that can lock the keyboard (Chrome and Edge), the game keeps `Escape` while fullscreen lasts: "The game fills the whole screen. Esc closes menus as usual; hold Esc to leave fullscreen." A tap of `Escape` closes the game's menus as it does in a window, and a held `Escape` leaves fullscreen; the browser shows its own banner saying so.
  - In any other browser (Firefox, Safari), or where the browser refused the lock: "The game fills the whole screen. In this browser Esc leaves fullscreen first; the next one reaches the game."
  - Chrome keeps a way out of its own: pressing `Escape` many times in quick succession still leaves fullscreen, even with the lock (seen in Michael's playtest, 2026-10-20). A firm fullscreen in every browser waits for the game's desktop build.

### Testing

{{devonly note="This tab is for testing the game."}}

- **Debug corner**: Shown or Hidden: the numbers and keys in the top-left corner.
- **Swing targets**: Off or On: a green outline on what your next swing would hit.
- **Hit shapes**: Off or On: draws the dead's body samples, green when the next swing reaches them.
- **Object Highlight**: On or Off, on by default: a thin pale outline round the game object under the pointer that you can act on, a tree, a crop, a mushroom, a chest or a station, an item on the ground, a villager, a body, a laid [[Rugs|rug]]. Plain scenery (leaf litter, a headstone) gets none, nor do the living dead (the swing's outline is theirs), another player, or a door or a shutter for now. Nothing is outlined while placing, removing, carrying, or in Use mode.
- **Layer** rows: one per slot that has painted clothing layers, a dropdown to try one on in place of what is equipped (the answer **item** shows the item's own art).
- **Painted hair**: a **Reload hair** button that picks up hair styles just saved in the hair editor.
- **Relay**: where Open to friends and Join go, or "none: only this browser's own tabs".

A dropdown with the focus keeps the keys to itself: a letter typed on it never reaches the world, and `Escape` still goes through.

## Defaults

**Defaults** resets only what the Settings screen shows: its rows and the painted layers. The open tab stays open. It never touches a world's rules or the choices the next New world offers, your [[Identities|identities]], the browser's own id, the list of friends' worlds, the creator and owner keys, or where the panels were dragged to.

## Every setting the game keeps

The game's full list of stored settings and their defaults, including the ones that have no row on the screen:

{{settings}}

## See also

- [[Controls]], [[Interface]], [[Multiplayer]], [[Screens]]

## Sources

<!-- sources at 2a9a308 -->
- `src/ui/screens.js:1019-1035`, `index.html:53`: the screen, "Kept in this browser", the two tabs, Defaults and Back; opened from the site's menu or the pause menu
- `src/ui/screens.js:189-205`, `src/ui/screens.js:218-232`, `src/ui/screens.js:245-250`: a page of the site out of a world, over the world in one; Back returns to where it was opened from (game #120)
- `src/settings.js:44-69`: the registry: every row's tab, label, line of explanation, and answers; a true-or-false row a switch, any other a dropdown; the world's rules and the Dev chest in no tab (game #128)
- `src/ui/screens.js:511-532`: a switch with its answer beside it, a dropdown showing the chosen answer, the line under each label
- `src/ui/screens.js:84`, `src/ui/screens.js:148-151`: Display open first; a click on a tab opens it
- `style.css` (the `CMZ Digits` face), `src/ui/small-text.js`: every digit in the clear sans at any size, at the pixel font's line height; Pixel restores it (game #325, at ef0d378)
- `src/settings.js:28`, `src/settings.js:61`, `src/ui/small-text.js`: Small text, Clear by default, for text at or under its threshold (game #322, at 5cf78a9)
- `src/settings.js:27`, `src/settings.js:72`, `src/highlight.js`, `src/render/highlight.js`: Object Highlight, on by default; what it outlines and leaves out (game #303, at 2facd17)
- `src/render/rugs.js:43`: a laid rug outlined (game #339, at 499e344)
- `src/settings.js:27`, `src/settings.js:59`: Floating numbers, shown by default (game #299, at 3331946)
- `src/settings.js:8-38`: the defaults, the Aim guide off
- `src/main.js:1253`: the Aim guide read where the viewer's own frame is drawn
- `src/view.js:80-87`: `UI_SCALE_MAX` and Auto's fit
- `src/view.js:28`, `src/view.js:70-79`: the zooms and Auto
- `src/ui/screens.js:714-732`, `src/ui/screens.js:333-337`, `src/ui/screens.js:114-117`: the Escape lock where the browser has one, the two help lines, the lock refused, the lock let go when fullscreen ends (game #311, at 8af4eed)
- `src/ui/screens.js:545-552`, `src/ui/screens.js:288-293`, `src/ui/screens.js:111`: Fullscreen: its line, asked of the browser by a click, showing the page's state, disabled where not allowed (game #129)
- `src/ui/screens.js:623-641`: the Testing tab's Layer rows (the first answer **item**), Painted hair with Reload hair, and the relay
- `src/ui/screens.js:169`: a focused dropdown keeps its keys, Escape through
- `src/settings.js:110-117`, `src/ui/screens.js:1032-1035`: Defaults resets only the screen's own rows and the painted layers, never the remembered Sandbox choices; the tab is kept (game #128)
- `src/identities.js:90-97`: a new browser id drawn after the reset
