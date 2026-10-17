---
title: Updates
categories: [About]
summary: What changed in the game, and when the wiki caught up with it.
numbersOk: true
---

Each time the wiki is synced with the game, an entry goes here, newest first, with the pages it touched. The game itself is in development; its own decision log is `docs/02-decisions.md` in the game's repository.

## 2026-10-17: synced to `9d9a5b5`

- **Changed in the game, corrected here:** darkness shortens your sight of the dead (game #150, closing #88). In the dark you see them whole only within {{n tuning.sight.darkRadius tiles}}, fading to hidden over {{n tuning.sight.edge tiles}} past it, unless they stand in light, where they are seen from any distance; a torch you carry gives your sight back to its own reach, and each player sees by their own light and their own torch. The dark hides what you know, never what happens: one hidden by the dark is not drawn, has no swing-target outline or health bar, gives no zombie hand and cannot be clicked, and its groan shows no bubble ("Something groans in the dark." goes to the chat log instead), but swings and shots still hit it. A shuttered room is dark by day, and open shutters fill it with daylight: each open door or window lights {{n tuning.world.daylightTiles}} tiles of its room fully. The planned note on [[Sight]] is replaced by its Darkness section; [[Light]], [[The dead]], [[Chat log]], [[Interface]], [[Combat]], [[Torch]], [[The day]], [[Openings]], [[Rooms]], and [[Getting started]] corrected.
- **Changed in the game, corrected here:** a world made with Trees off keeps its mushrooms (game #149, closing #142): they grow where they would beside the trees that are not there, the same ones in the same places as with trees ([[Mushrooms]], [[Trees]], [[The wild]], [[World rules]]). In a server world, anyone but the owner sees the world rules marked "(the world's owner's)" rather than the host's ([[World rules]], [[Server worlds]]). Michael's ruling on the same pull request, that every world is an expendable test until he says otherwise, changes no page.
- Not visible to a player: Michael's rulings on the siege (game #148, with the rules-file line of #146 folded in): a sealed room safe and a cell, the dead waiting until dawn, no sleep in a siege, a crowd bursting a fence, shutters built onto walls, built stone walls unbreakable; none is built yet, so no page changed.
- On the wiki: [[Sight]], [[Light]], [[The dead]], [[Chat log]], [[Torch]], [[The day]], [[Openings]], [[Rooms]], and the four tree and mushroom pages had their Sources rechecked against the new game.

## 2026-10-17: synced to `82106de`

- **Changed in the game, corrected here:** nobody climbs through a window, player or dead (game #140, closing #134). A window is for sight and light only: there is no climb, no "Climb through" in its menu, and E acts when it is let go however long it is held, so a long press is a tap. The dead never come through a window. They may batter a window's closed shutters or boards open to see in, never to pass, and they come round to a door and break it, so a window is never a safe place to stand behind; through a hall or a porch they break that room's door first. One with no door it can reach batters what windows it can and then searches. Both tiles of every door and gate are kept clear: a carried piece cannot be put down on one, a door cannot be built beside furniture, and furniture made at a station never lands there. In the valley, furniture moved off or away from every door, three doors moved a tile (the baker's front door, the weaver's and the chandler's partition doors), and six headstones that stood inside the priest's house are gone. [[Openings]] and [[Breaking in]] are rewritten; [[The dead]], [[Boards]], [[Placement]], [[Carrying furniture]], [[Building]], [[Crafting]], [[Controls]], [[Getting started]], [[Player]], [[Combat]], [[Archery]], [[Death]], [[Dormancy]], [[Thirst]], and [[Waterskin]] no longer mention a climb, or say what is new.
- Not visible to a player: Michael's ruling that a world is played alone or with friends, chosen once, with telemetry from every world (game #145); not built yet, so no page changed.
- Not visible to a player: a one-line change to the game's own rules file for the window law (game #146, open, not merged at this sync); no page changed.

## 2026-10-16: synced to `2a9a308`

- **Changed in the game, corrected here:** each world keeps its own rules (game #128). **New world** now has a Sandbox step under the name: the world's rules and the Dev chest, offered as you last chose them. In a world, **World rules** on the pause menu changes them at once for everyone in it (and saves the world); a guest sees them locked as the host's. The Settings screen has two tabs now, Display and Testing, and its Defaults never touches a world's rules. A new page, [[World rules]], is their home; [[Settings]], [[Worlds]], [[Screens]], [[Hosting]], [[Multiplayer]], [[Joining]], [[Server worlds]], [[Survival]], [[Saving]], and [[Developer chest]] say where the rules are set now.
- **Changed in the game, corrected here:** the crossing (game #129). **Exit game** replaces Leave world on the pause menu and the dead screen: it saves and returns to the site's Worlds page, and a host with friends in is asked "Exiting closes the world to the friend with you. Exit?" first. A **Fullscreen** switch sits at the foot of Settings' Display tab, never forced; the browser takes the first `Escape` to leave fullscreen. `Enter` on the site's Home opens the Worlds page. The debug corner sits under the panels and screens ([[Screens]], [[Worlds]], [[Death]], [[Characters]], [[Hosting]], [[Joining]], [[Settings]], [[Controls]], [[Interface]], [[Saving]], [[Getting started]]).
- **Changed in the game, corrected here:** Combat testing and the square's paved-or-dirt surface are gone (game #131). In their place, two world rules chosen once, when the world is made, under "Chosen once, when the world is made" with the Dev chest: **Trees** (off, no tree anywhere, and so no mushrooms either, since they grow only near trees) and **Starting population** (None, Low, Standard, High: a factor on the dead the map places and on each wild chunk's, read once and never rising with time). Both show locked on World rules and on a server world's owner screen ([[World rules]], [[The dead]], [[Trees]], [[The wild]], [[Mushrooms]], [[Combat]], [[Settings]]).
- **New in the game:** a cap on the players in a world (game #138): {{n tuning.world.playerCapBrowser}} in a world hosted in a browser, the host among them, and {{n tuning.world.playerCapServer}} in a server world. A friend who stepped away keeps their place and so does a browser world's host; a join past the cap is refused with "This world is full.", and a dormant character waits in the save until there is room ([[Hosting]], [[Joining]], [[Multiplayer]], [[Server worlds]]).
- **Changed in the game, corrected here:** the aim guide is off by default and is called **Aim guide**, since it covers the bow, a throw, and the cast; it is each player's own and changes only what their own screen draws (game #141; [[Archery]], [[Settings]]).
- Not visible to a player: Michael's rulings on windows and on the word "region" (game #137), not built yet; no page changed.
- On the wiki: the census reads the world rules again (it found none after the rules moved into each world) and counts the ones fixed at creation; the pages above had their Sources rechecked against the new game.

## 2026-10-16: synced to `a3fdd7c`

- Not visible to a player: the pictures behind the game's site moved to a folder of their own (game #125); the wiki's snapshot leaves them out, as it does the rest of the game's art.
- Not visible to a player: Michael's rulings on the questions waiting for him (game #126): the guide beside the spawn on every map, talk entirely by clicks, a cap on players, one-offs that never stack, the willow cut, a shed as one room, and darkness shortening the player's sight. None is built yet; [[Sight]] carries a planned note for the darkness ruling, and [[Light]] no longer says darkness will never shorten your sight.
- Not visible to a player: the design agent's art scripts archived in the game's tools, kept and never run (game #127).

## 2026-10-16: synced to `02dfcc2`

- **Changed in the game, corrected here:** out of a world the game is now its own site (game #120). Over a blurred picture of the game sit the name in stone and timber letters between autumn trees and a stone menu: Home, About, Controls, a big gold **Play**, Identities, Settings, and **Wiki** (this wiki, in a new tab). Play opens the Worlds page, where every world is a card with its survivor, day, last played, and code, one big button (Play, New character, Rejoin) and small ones (Delete, Move to the server, Owner, Forget). Worlds, New world, Join a game, character creation, Identities, Settings, Controls, and the server's key screens are all pages of the site. In a world the pause menu, the dead screen, and their Settings and Controls stay over the world, and Leave world goes back to the site. The site shows before the game has finished loading. A guest sent out of a friend's world sees the reason on Home. The Controls screen is grouped (Moving and doing, Fighting, Your things, Building, Talking, Testing), with R written once and a link to this wiki. [[Screens]] has a new section on the site; [[Worlds]] describes the cards; [[Joining]], [[Settings]], [[Controls]], [[Identities]], [[Hosting]], [[Interface]], [[Characters]], [[Death]], [[Multiplayer]], [[Saving]], [[Server worlds]], and [[Getting started]] say "the site" and "the Worlds page" where they said the title screen; the [[Main page]] has a line on how to start playing. Exit game and a Fullscreen choice are a planned note on [[Screens]].
- **Changed in the game, corrected here:** a join's loading screen loses its **Cancel** once the host's world arrives, so the way out from then on is Leave world, and its bar never runs backwards (game #117; [[Screens]], [[Joining]]).
- Not visible to a player: a staging map, loaded only by typing `?map=staging` into the game's address, made to take the pictures behind the site, and four shots of it (game #118).

## 2026-10-16: synced to `1c7ed26`

- **New in the game:** a waterskin drinks by itself (game #121). Once thirst falls to Thirsty, a sip is taken from a waterskin you carry, on the belt or in the bag, the emptiest that still holds water first, with "You drink from your waterskin."; never while you swing, draw, cast, guard, climb, or sleep, or are already holding a drink out, and only with Survival on. With every skin empty nothing happens, so the Thirsty moodle means you are out of water. For a guest the host's world takes the sip and the word goes to the guest. [[Thirst]] has a new section, [[Waterskin]] and [[Survival]] no longer say a skin is drunk only by hand.
- Not visible on the wiki's pages: a default in the game's map code made to match the ruling every caller already followed (game #119); the game's testing notes on the browser pane's shared tabs (game #116); the menus and the game's site scoped and ruled for building, not yet built (game #81, the game's `docs/38`).

## 2026-10-16: synced to `19a1c18`

- **Changed in the game, corrected here:** the Settings screen is three tabs, **Display**, **World rules**, and **Testing**, and every row has a line under it saying what it does; an on-or-off row is a switch with its answer beside it, any other a dropdown, so only the chosen answer shows (game #114). The relay's address and **Reload hair** moved to the Testing tab, the Join screen now says "Type the code your friend gave you", the identity editor's hair style is a dropdown, and a guest's World rules tab shows the host's rules locked rather than greyed. The owner's screen sets a server world's rules with the same switches ([[Settings]], rewritten by tab; [[Survival]], [[Hosting]], [[Multiplayer]], [[Server worlds]], [[Identities]], [[Joining]]).
- **New in the game:** a loading screen into and out of a world (game #115): "Making" or "Reading" and the world's name while a world is made or played, "Saving" or "Leaving" until the save is written, and "Joining" and the code with **Cancel** for a join, giving way to character creation when the host asks who you are, then "Receiving the world". It stays up at least half a second, and the stall of about a second just after entering a world is gone. A new section on [[Screens]]; [[Worlds]] and [[Joining]] say where it shows.
- **Changed in the game, said here:** with no world in, the menus sit over black instead of the last picture of the world just left, and the chat box and the debug corner hide with the rest of the interface (game #80). No page described the old backdrop; [[Screens]] and [[Interface]] now say it.

## 2026-10-16: the wiki's own fixes (sweep 3f, game #87), still at `0bd3f9c`

- **New pages:** every piece of furniture and every fitting the valley places or a recipe makes now has a page made from its definition ([[Shelf]], [[Bench]], [[Table]], [[Wheelbarrow]], [[Loom]], [[Dye vat]], [[Chair]], [[Well]], and the rest, in the navbox Furniture and fittings), and a place's list of what is there links them.
- **Three rules of play, now said on their pages:** no friendly fire ([[Combat]], [[Archery]], [[Fireball]]), stepping away ([[Dormancy]], [[Multiplayer]]), and the dip that makes fire arrows ([[Arrow]], [[Fire arrow]]).
- **With friends:** every With friends section and the [[Multiplayer|Playing with friends]] page checked against the game's `docs/31-multiplayer/03`, rewritten by the game's docs sweep as the plain description of play with friends; corrected: the second lying-down line ([[Sleep]]), the world running on with everyone dead ([[Death]], [[Multiplayer]]), a server world needing no host ([[Joining]]).
- A stub item page prints the data's own note on the item ([[Throwing Knife]], [[Throwing Axe]]: art only, they do not throw yet).
- Not visible on the pages: the build's Sources-drift report, the snapshot kept without the game's art, the first census's records dated under `census/history/9205ad7/` and the discrepancies list rewritten short.

## 2026-10-16: synced to `636acc4`

- Not visible on the wiki's pages: the game's vision doc ruled on by Michael (game #113): it no longer says "not an RPG", and its world is "hand-authored, with procedural filling of the spaces it leaves empty", a direction rather than a wall. No rule of play changed. The new page [[Things left behind]] (what the game swears off from Zomboid) follows in its own change.

## 2026-10-16: synced to `50c3126`

- Not visible on the wiki's pages: the game's docs sweep, wave 3 and its index (game #82 to #86, #97): every spec trimmed to what is true with its history under `docs/history/`, a new `docs/sprite-definitions.md`, `docs/README.md` the index of every doc. The game's `docs/bugs.md` keeps only its open and closed lists now; its Fixed up to 2026-10-15 is `docs/history/bugs-fixed-2026-10-15.md`, which this wiki's method names. No rule of play changed.

## 2026-10-16: synced to `0bd3f9c`

- Not visible on the wiki's pages: the game's docs sweep, waves 1 and 2 (game #73, #74): the file every agent loads made lean, the decision log split into its rulings and a build log, every doc indexed as a rule, a reference, a spec, or a record. No rule of play changed; the rulings themselves are unchanged.

## 2026-10-16: synced to `4bd976a`

- **Changed in the game, corrected here:** arrows used on a fire while they still sit in an open chest or a searched body now say "Take the arrows out first." instead of "You have no arrows." (game #69; [[Fire arrow]], [[Use]]).
- Not visible on the wiki's pages: the game's own docs corrected where they said a thing was still owed that the code already had, and its CI runs once per push (game #72). No rule of play changed.

## 2026-10-15: synced to `9a81879`

- **Changed in the game, corrected here:** equipping a garment over a filled slot with no room in the bag now says "No room in your bag to unequip the old one." (game #67; [[Clothing]]).

## 2026-10-15: synced to `9a450f2`

- **Changed in the game, corrected here:** the word "wear" is gone from the game's screens (game #66). Putting anything on is **Equip**, garments and bags included (a bag's says its grid, as **Equip (8×5)**; a garment on the floor, **Equip cap** or **Equip cap (swap)**), and taking it off is **Unequip** where a slot's menu said Take off. A full bag's refusals say "or equip it", and the Controls screen says "Equip or unequip a thing" ([[Clothing]], [[Inventory]], [[Hands]], [[Containers]], [[Rucksack]], [[Interface]], [[Controls]]).
- **Fixed in the game, corrected here:** a double-click on a filled slot really equips or unequips (it used to begin a [[Use]]): a hand or a clothing slot unequips, a belt slot equips into a hand, for host and guests alike ([[Controls]], [[Inventory]], [[Hands]], [[Clothing]], [[Interface]]).
- **Durability:** how used up a weapon is was called wear on some pages; it is [[Durability]] everywhere now ([[Combat]], [[Archery]], [[Bow]], [[Fists]], [[Halberd]], [[Shove]], [[Stick]], [[Throwing spear]], [[Torch]], the tools). The page no longer answers to "Weapon wear", and [[Clothing]] answers to "Equipped slots" and "Clothing slots" instead of "Worn slots" and "Wearing". Item boxes say "Equipped on" for a garment's slot.
- **Also:** the developer layer try-on's first button says "item" ([[Settings]]); a key held while the chat box or a station's count took the focus no longer keeps the player walking (game #65).

- **Fixed:** every link to [[Log]] went to the page about the log at the bottom left of the screen instead of the item. Now a page's title always wins over another page's alias, and the build refuses a name two pages claim.
- **Renamed:** the page "Log and chat" is now [[Chat log]], and the wiki calls it the chat log wherever "the log" meant it ([[Controls]], [[Interface]], [[Multiplayer]], [[Hosting]], [[Identities]], [[Dormancy]], [[Use]], [[Fire arrow]]).
- **Names given to one page each:** Off hand to [[Hands]], Wear to [[Clothing]], Eating to [[Food]], Survivor to [[Player]], New character to [[Characters]], Clock to [[The day]], Dead screen to [[Death]], Drinking to [[Thirst]]; [[Dual wielding]] is its own page's alone.

## 2026-10-15: synced to `57df52e`

- **Changed in the game, corrected here:** only the pause menu stops the game (game #64). With the bag, a container or body, a station, or the character screen open, a left click on the world swings, casts, draws a bow, or lands a [[Use]] (a Use begun from the bag is aimed with the bag still up); `E`, `B`, and `T` work; the wheel zooms except while an item is dragged. A click on a panel stays the panel's, and a right-click menu still takes the click that closes it and ends a draw ([[Controls]], [[Archery]], [[Use]], [[Inventory]], [[Interface]], [[Crafting]], [[Getting started]]).
- **Building:** `N` and `X` with the bag open now say "Close your bag to build."; the palette and the bag take turns on the screen ([[Building]], [[Controls]]).
- **Stations:** typing in a station's count no longer reaches the game's keys; `Enter` or `Escape` leaves the field ([[Crafting]], [[Controls]]).
- Not visible on the wiki's pages: a test check's expectation corrected (game #63).

## 2026-10-15: synced to `3b7cb9a`

- **New in the game:** burning is real (game #14, #62). A [[Torch]]'s blow may set one of the dead alight by its chance, and the [[Fireball]] and the new [[Fire arrow]] always do; a burning body loses a little health a second for a few seconds, never stacks, never takes more than a cap over one burn, and burns on as a corpse if it dies. Only the dead burn. New pages: [[Burning]] and [[Fire arrow]].
- **Fire arrows:** arrows used on any lit fire that burns fuel become fire arrows, the whole stack at once; a bow shoots them first; they lodge or land as plain arrows ([[Arrow]], [[Bow]], [[Archery]], [[Fire]], [[Use]], which now lists three rules).
- **Also touched:** [[Book of Fire]], [[The dead]], [[Corpses]], [[Light]] (burning bodies and fire arrows as moving lights), [[Combat]], [[Planned]] (what burning still lacks). The sources of [[Archery]], [[Bow]], [[Throwing spear]], and [[Arrow]] rechecked against this commit.
- **Removed in the game:** the character menu's Set on fire and Put out, a test toggle the wiki never described.
- Not visible on the wiki's pages: the process documents (pushing as Michael's account while the agents' account is flagged; Primary's reviewing agents) and the Actions moved off Node 20.

## 2026-10-15: synced to `ac596bd`

- **Fixed in the game, corrected here:** an arrow or a thrown spear that comes down just short of a wall no longer hits one of the dead past it: the landing's hit is never through a wall, a fence, boards, or a closed door, as the fireball's already was (game #13, #58; [[Archery]], [[Bow]], [[Throwing spear]]).
- **The fireball:** it bursts on the first of the dead it touches on the way, only one ahead of where it was cast, and hits within a wider reach where it lands, never through a wall either way; it flies a little faster than before (its speed read from the data), and the cast has its own pose, the staff raised upright ([[Fireball]], [[Planned]]).
- **Elsewhere:** a new hair colour, pink, for an identity ([[Identities]], its count read from the data); a container's panel closes when X removes it.
- Not visible on the wiki's pages: the bowstring drawn to the chin, the manifest's stamps alike on every machine, the game's move to the studio's organisation, and the process documents.

## 2026-10-15: synced to `2c70942`

- **Changed in the game, corrected here:** Zombie aggro is on by default (a browser that saved its settings keeps its own), and Zombies attack villagers is a separate knob on purpose, its label saying so ([[Settings]], [[The dead]], [[Breaking in]], [[Health]], [[Bleeding]], [[Infection]], [[Light]], [[Hosting]]). Health comes back with Survival off ([[Health]], [[Survival]]). The bandage is no longer cloth ([[Bandage]], [[Crafting]], [[Workbench]]).
- **Building and furniture:** X takes only what players made, built walls and furniture made at a station, never the village's own, and a removed station spills its output ([[Building]], [[Walls]], [[Carrying furniture]]). The wheelbarrow has its own empty grid and is carried; a chest or shelf made at a station starts searched and empty ([[Containers]], [[Developer chest]], [[Developer Bag]], [[Crafting]]).
- **Combat:** a torch beside the spear is only a light; beside a sword it still swings ([[Dual wielding]], [[Torch]], [[Throwing spear]]). The blow's numbers and every bow number are data now, and the pages read them there ([[Combat]], [[Archery]], [[Bow]], [[Mace]], [[Stagger and knockdown]], [[Stamina]], [[Player]]).
- **With friends:** closing a world to friends makes the guests' characters dormant ([[Hosting]], [[Joining]], [[Dormancy]]); a guest's pause names the host and the world ([[Screens]]); a guest's right tap during a draw ends it on the host ([[Archery]], [[Bow]]); a guest's Square and paths setting leaves the host's square alone ([[Settings]]); names over heads can be hidden ([[Settings]], [[Multiplayer]]).
- **Elsewhere:** Leave world shows the Worlds screen ([[Screens]], [[Worlds]], [[Characters]], [[Death]]); an autosave also waits a real minute ([[Saving]]); drinking is named for the trough, the font, or the well ([[Thirst]], [[Water]]); the square's three lamp posts start lit ([[Torch posts and brackets]]); the Controls screen lists Q, the held right button, and the held left click ([[Controls]]); Combat testing's crowd stands in a ring round the spawn.
- Not visible on the wiki's pages: the fireball drawn larger and slower (its speed was already read from the data), the needs' code defaults matching the data, and the bow's and the arms' pictures.

## 2026-10-15: synced to `3c70aa7`

- **New:** [[Fireball]], with pages for the [[Book of Fire]] and the [[Staff of Fire]] (they no longer punch alone).
- **Fixed in the game, corrected here:** the [[Settings]] screen's Defaults no longer resets identities and keys; a torch taken from or mounted in a holder now reaches guests at once ([[Torch posts and brackets]]).
- Not visible on the wiki's pages: the bow is drawn upright in both hands, the arms have elbows, and saves keep each chunk's saved form.

## 2026-10-14: the wiki begins

The wiki was started from the game's `main` at commit `9205ad7`. A census read the whole game, code first and docs second: six fact sheets by area, every number tied to the data or the code. Every item, station, place, and villager got a page generated from the data, and the first written pages covered combat, the player and their needs, building and openings, items and making, multiplayer and the interface, and the world.

## Sources

<!-- sources at 9205ad7 -->
- `docs/02-decisions.md`: the game's own decision log
