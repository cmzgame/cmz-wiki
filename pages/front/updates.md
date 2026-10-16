---
title: Updates
categories: [About]
summary: What changed in the game, and when the wiki caught up with it.
numbersOk: true
---

Each time the wiki is synced with the game, an entry goes here, newest first, with the pages it touched. The game itself is in development; its own decision log is `docs/02-decisions.md` in the game's repository.

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
