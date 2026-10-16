---
title: Characters
categories: [Multiplayer, Player]
aliases: [Character, Character creation, New character]
summary: A character is one survivor in one world, made from an identity in two steps; after a death the next one starts at the spawn.
---

A **character** is one survivor in one [[Worlds|world]]: their body, what they carry and have on, their wounds and needs. A character belongs to the world it was made in and never moves to another. Its name and look come from an [[Identities|identity]] at creation and do not change afterwards.

## How it works

### Creation

Character creation has {{n census.constants.ui_screens.CREATION_STEPS}} steps, with **Back** and **Next** between them:

- **First, the identity**: choose one of the browser's identities, edit one, or make a new one. Next needs one chosen.
- **Second, skills and profession**: a placeholder page; there is nothing to choose yet.

The last button reads **Into the valley** for a new world or a new survivor, or **Join as this** in a friend's world. **Back** on the first step returns to where creation began.

{{planned doc="31-multiplayer/09" note="Skills and a profession, chosen on creation's second step."}}

### The character screen

**Character** on the pause menu shows this world's character: their name, "A survivor of" the world's name, and the figure as they are dressed now. It is for looking only. The bag and clothing slots are on the in-game character panel (`C`): see [[Inventory]].

### After a death

When your character dies, the dead screen names them, gives the day and hour, and says the body stays where it fell. The body is a corpse that anyone can search. **New character** runs creation again and puts a new survivor at the world's spawn, in the same world, from any identity. **Leave world** goes to the [[Worlds]] screen. See [[Death]].

A dead character's row on the Worlds screen reads "Name died", and its button is **New character**.

## With friends

Each browser has its own character in a friend's world. The world knows whose is whose by the browser, not by the name, so returning from the same browser brings back the same survivor, standing where they were left (see [[Dormancy]]). A guest whose survivor died is told "Your survivor there died. A new one, from any identity." and goes through creation again; the new survivor joins at the spawn.

## See also

- [[Identities]], [[Worlds]], [[Player]], [[Death]]

## Sources

<!-- sources at 9205ad7 -->
- `src/save.js:143-164`: a world keeps its own characters; the index row names my character
- `src/identities.js:38-72`: the name and look are stamped from an identity at creation
- `src/ui/screens.js:63`: `CREATION_STEPS`, two steps
- `src/ui/screens.js:277`: Next on the first step needs an identity chosen
- `src/ui/screens.js:301-320`: the identity step (Choose, Edit, New identity), the placeholder second step, Back, and the last button's words
- `src/ui/screens.js:631-644`: Into the valley or Join as this
- `src/ui/screens.js:737-747`: the pause menu's Character screen: the name, "A survivor of", the figure, read only
- `src/ui/screens.js:785-791`: the dead screen, its words and its two buttons
- `src/main.js:291-319`: New character: creation again and a new survivor at the spawn of the same world
- `src/main.js:345-359`: Leave world shows the Worlds screen (game commit 2c70942)
- `src/ui/screens.js:474-485`: a dead character's row, "Name died", and its New character button
- `src/identities.js:77-98`, `src/host.js:54-80`: a world knows each browser's character by a hash of the browser's id
- `src/host.js:95-101`: a returning browser's dormant character comes back where it stood
- `src/ui/screens.js:634`: "Your survivor there died. A new one, from any identity."
