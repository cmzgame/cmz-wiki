---
title: Characters
categories: [Multiplayer, Player]
aliases: [Character, Survivor, Character creation, New character]
summary: A character is one survivor in one world, made from an identity in two steps; after a death the next one starts at the spawn.
---

A **character** is one survivor in one [[Worlds|world]]: their body, what they carry and wear, their wounds and needs. A character belongs to the world it was made in and never moves to another. Its name and look come from an [[Identities|identity]] at creation and do not change afterwards.

## How it works

### Creation

Character creation has {{n census.constants.ui_screens.CREATION_STEPS}} steps, with **Back** and **Next** between them:

- **First, the identity**: choose one of the browser's identities, edit one, or make a new one. Next needs one chosen.
- **Second, skills and profession**: a placeholder page; there is nothing to choose yet.

The last button reads **Into the valley** for a new world or a new survivor, or **Join as this** in a friend's world. **Back** on the first step returns to where creation began.

{{planned doc="31-multiplayer/09" note="Skills and a profession, chosen on creation's second step."}}

### The character screen

**Character** on the pause menu shows this world's character: their name, "A survivor of" the world's name, and the figure as they are dressed now. It is for looking only. The bag and worn slots are on the in-game character panel (`C`): see [[Inventory]].

### After a death

When your character dies, the dead screen names them, gives the day and hour, and says the body stays where it fell. The body is a corpse that anyone can search. **New character** runs creation again and puts a new survivor at the world's spawn, in the same world, from any identity. **Leave world** returns to the title. See [[Death]].

A dead character's row on the Worlds screen reads "Name died", and its button is **New character**.

## With friends

Each browser has its own character in a friend's world. The world knows whose is whose by the browser, not by the name, so returning from the same browser brings back the same survivor, standing where they were left (see [[Dormancy]]). A guest whose survivor died is told "Your survivor there died. A new one, from any identity." and goes through creation again; the new survivor joins at the spawn.

## See also

- [[Identities]], [[Worlds]], [[Player]], [[Death]]
