---
title: Maps
categories: [Multiplayer, Interface, Places]
aliases: [Map picker, Map choice, Flat grass, The flat grass map, Flat map, Village square, The staging clearing, Proving ground, Test maps]
summary: The game ships four maps: The valley and Flat grass for play, and two test maps; a world is made on one, and the New world step has a Map choice.
---

A **map** is the ground a world is made on. The game ships four, listed in the game's `data/maps.json`: two for play, [[The valley]] and **Flat grass**, and two test maps the game's own checks run in. Every [[Worlds|world]] is on one map for its whole life, chosen when it is made. Not to be confused with [[Map]], the panel `M` opens in a world.

## How it works

### The four maps

- **The valley** (the default): the game itself, with the village, its farms and forests, and the dead. See [[The valley]].
- **Flat grass**, "A giant plain of plain grass, for building a map by hand. A dev chest and the guide stand at the spawn.": {{n flat.bounds.2}} by {{n flat.bounds.3}} tiles of plain grass, the spawn at the middle. The only things on it are the [[Developer chest]], two tiles west of the spawn, and the guide, [[Wyn]], a tile or two beside it (every map has the guide). There are no trees, rocks, plants, animals, villagers other than Wyn, buildings, or dead, and the map names no wild country, so past its edge is the same plain grass and no dead come with it. It is meant for building by hand with [[Building|Free building]] and the [[Terrain]] tab; the pink Random spawn tile is the tag for where random things may one day spawn on a map built so.
- **Village square** (a test map), "The proving ground: a small village the checks run in."
- **The staging clearing** (a test map), "A clearing made only for pictures."

The picker lists the two maps for play first, and the test maps under their own heading, **Test maps**.

### Choosing a map

On the [[Worlds#Making a world|New world step]], under the name, the **Map** dropdown picks the map the world is made on; the valley is the default, and the line under the dropdown is the map's own. A name left as the one offered follows the map chosen ("Flat grass" and the date). The map is chosen once and cannot be changed afterwards.

Each world's card on the Worlds page names its map, and the [[Screens#The pause menu|pause menu]] says "Map: <name>" under its first line.

### Changing the map

A page reads one map, when it loads. Choosing a map other than the page's therefore reloads the page onto that map, keeping the game's test switches in the address, and then does what the choice was for:

- **Making a world** on another map: the choices (the name, the identity, the rules) wait in the tab, never in the address, and the world is made as soon as the page has loaded, behind the loading screen "Going to ...".
- **Playing a world** saved on another map: **Play** on its card reloads onto its map and opens it. A world saved on a map this version of the game does not have is not opened, and the page says so.
- **Joining** a friend whose world is on another map: see below.

## Numbers

- Flat grass is {{n flat.bounds.2}} by {{n flat.bounds.3}} tiles. Chunks inside those bounds are kept once grown; the same grass beyond them is let go again like the wild's.

## With friends

The host's welcome names the host's map. A guest whose page is on another map reloads onto the host's map once, keeping the code, and joins again; a map this version lacks, or a second mismatch, is refused on the Worlds page with a word, never a loop. See [[Joining]]. A world made on Flat grass is hosted, saved, and moved to the server as any other. The map is on the world's save, so a world made on one map is never opened on another.

## See also

- [[Worlds]], [[Terrain]], [[World rules]], [[Developer chest]]
- [[The valley]], [[Map]]

## Sources

<!-- sources at 5257b92 -->
- `data/maps.json`: the four maps, each with its name, its kind (play or test), and its line (game #567)
- `data/maps/flat.json`, `tools/mapgen/flat.py`: Flat grass, its bounds, the spawn, the dev chest and the guide, no wild rule (game #567)
- `src/maps.js:1-44`: the list, the plays first, the address of a map change that keeps the test switches
- `src/main.js:410-520`: the reload onto another map and what it does on arrival (a world played, made, or joined), the choices kept in the tab's session
- `src/main.js:469-485`: a guest moved to the host's map once, or refused with a word
- `src/ui/screens.js:500-515`, `src/ui/screens.js:1102-1120`, `src/ui/screens.js:1178`, `src/ui/screens.js:897-913`: the Map dropdown, its line, the default name following it, the pause menu's Map line, a card naming its map
- `docs/02-decisions.md`, 2026-10-28 (The flat grass map, and a map is chosen in the interface): Michael's request, "Yes spawn the guide, and the dev chest just for funsies. Otherwise, all grass."
