---
title: Snare
categories: [Items, Furniture, Hunting]
aliases: [Snares, Rabbit snare, Look at the snare]
summary: A stake and a noose, made at the workbench and set outdoors from the bag; left alone near rabbits, it holds one after some game hours, and is set again once the catch is butchered.
---

{{infobox-item snare}}

A **snare** is a stake and a noose for catching rabbits. It is made at the [[Workbench]] from two [[Stick|sticks]] and a cloth, with a [[Dirk]] carried, and set on the ground from the bag. Left alone near rabbits, it holds one after a while, a carcass to skin and butcher as any other (see [[Hunting]]).

## Setting one

**Place** on the item's menu, in your own bag, starts a ghost of the snare on the tile under the cursor, green where it may stand and red with the reason where it may not: **Outdoors only** inside a room, **No room** where the tile is not open floor or something stands or lies on it, and **Too far** past {{n census.constants.setdown.REACH tiles}} or out of sight. A click sets it ("You set the snare down."). A set snare is not solid: anyone walks over it. It is not a gatherable, so it neither sways nor has an outline of its own; Object Highlight shows it.

## The catch

A snare is set from the moment it is put down. Once {{n animals.snare.hours}} game hours have passed, it holds a rabbit as soon as both of these are true:

- a home of rabbits is within {{n animals.snare.reach tiles}} of it (see [[Animals]] for where they live), and one of that home's living rabbits is free to take;
- no player, living or dead, is within {{n animals.renew.clear tiles}} of the snare or of that rabbit, so nothing is caught in view.

The rabbit is then a carcass lying on the snare, killed by the snare: its share is {{n animals.kills.snare}}, the whole yield. The rabbit was its home's own, so the home renews it in time, as it renews any rabbit lost: a snare is renewal, never an endless supply. A snare at the edge of a wood you stand beside never catches while you wait; it is meant to be set and walked away from.

Once its catch is butchered, or gone, the snare is set again and its hours start over.

## Its menu

- **Look at the snare** says what it holds: "The snare holds a rabbit.", or about how many game hours it still wants ("A snare, set. Nothing yet; give it about …"), or, its hours passed, "A snare, set. Nothing yet: it wants rabbits near." It only reads the world, so it is your own.
- **Pick up snare** puts it back in your bag.
- **Take apart**, as for anything you made, gives back half the materials of its recipe and asks for a [[Smith's hammer]] on you (see [[Building#Taking apart|Building]]).

Its hover card says it is set near rabbits and holds one after about {{n animals.snare.hours}} game hours, read from the data.

{{item-sections snare}}

## With friends

The catch is the host's: the host checks every snare once a second. A guest sets one through the same Place, sent to the host as a set-down command, and every player sees what a snare holds, carried with the snare in its part of the map. Look at the snare is each player's own line. A guest's player counts as a player for the catch: a guest near a snare or its rabbits keeps it from catching.

## Sources

<!-- sources at 6e3ab37 -->
- `data/recipes.json:327-347`: the snare from two sticks and a cloth, with a dirk carried (`cut`)
- `data/items.json:63`: the snare, furniture, set down as `snare`, outdoors (game #456)
- `data/animals.json:7`, `data/animals.json:3`: `snare.hours` and `snare.reach`; `renew.clear`
- `src/setdown.js:34-44`, `src/setdown.js:71-96`: the stand rule outdoors, the reach, the set snare not solid and set from now
- `src/entities/animal.js:887-949`: the catch once its hours are past, a rabbits' home within reach, unseen; on the snare, killed by the snare; set again
- `src/entities/animal.js:951-958`, `src/interact.js:1928-1942`: Look at the snare's lines, the client's own
- `src/interact.js:999-1004`, `src/setdown.js:98-125`: Pick up and Take apart
- `src/game.js:855-860`: the snares checked once a second on the host, watched by the players living and dead
- `src/item-info.js:234-237`: the card's line

{{navbox items}}
