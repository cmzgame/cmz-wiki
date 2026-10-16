---
title: Identities
categories: [Multiplayer, Player]
aliases: [Identity, Look, Appearance]
summary: An identity is a name and a look kept in the browser, used as a stamp when a character is made.
---

An **identity** is a name and a look, kept in the browser and used again and again. When a [[Characters|character]] is made, it is stamped from an identity: it takes the name and the face and keeps them for life. An identity is not a character; one identity can be the stamp for survivors in many [[Worlds|worlds]].

## How it works

### Making and editing

**Identities** on the title screen, and the first step of character creation, list the browser's identities with **Choose**, **Edit**, and **New identity**. The editor has:

- **Name**: what others see over your head and in the [[Chat log|chat log]].
- **Skin**: {{n looks.skins.living.length}} living tones and {{n looks.skins.dead.length}} dead ones.
- **Hair style**: bald, short, and the painted styles.
- **Hair colour**: {{n looks.hair.length}} colours.
- **Eyes**: {{n looks.eyes.length}} colours.

A preview shows the figure in the starting clothes, turning through its facings.

### A stamp, not a link

Editing an identity changes only the characters made from it afterwards. A character already made keeps the name and look it was stamped with, and deleting an identity removes no character. A new look for an existing survivor means a new character.

The last identity chosen is offered first next time.

### Where they are kept

Identities live in the browser's settings. They are not part of any world and do not travel with a world to another device.

The **Defaults** button on the [[Settings]] screen does not touch the identities: it resets only the screen's own choices.

## With friends

Joining a friend's world for the first time asks for an identity; your new character in their world is stamped from it. The friend's world keeps the character, not the identity.

## See also

- [[Characters]], [[Player]], [[Worlds]]

## Sources

<!-- sources at 9205ad7 -->
- `src/identities.js:38-72`: an identity is a name and a look, kept and reused; a character is stamped from it
- `src/ui/screens.js:397-423`, `src/ui/screens.js:645-655`: the identities list (Choose, Edit, New identity) and the editor
- `src/identities.js:48`, `src/ui/screens.js:413`: the name field
- `src/ui/names.js`: the name over a head
- `data/looks.json`, `src/ui/screens.js:414-418`: skins living and dead, hair colours, eyes
- `src/figure/draw.js:63-66`, `data/hair/index.json`: bald, short, then the painted styles
- `src/ui/screens.js:426-446`, `src/main.js:1333`: the preview in the starting clothes, turning through the facings
- `src/ui/screens.js:301-305`: the last identity chosen is preselected
- `src/settings.js:32-33`: identities kept in the browser's settings, not in a world
- `src/settings.js`: Defaults leaves the identities alone (game commit 3c70aa7)
- `src/host.js:54-80`, `src/ui/screens.js:631-644`: a first join asks for an identity and stamps a character from it
