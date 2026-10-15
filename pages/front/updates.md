---
title: Updates
categories: [About]
summary: What changed in the game, and when the wiki caught up with it.
numbersOk: true
---

Each time the wiki is synced with the game, an entry goes here, newest first, with the pages it touched. The game itself is in development; its own decision log is `docs/02-decisions.md` in the game's repository.

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
