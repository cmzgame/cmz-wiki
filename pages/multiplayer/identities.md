---
title: Identities
categories: [Multiplayer, Player]
aliases: [Identity, Look, Appearance]
summary: An identity is a name, a look, and a handedness kept in the browser, used as a stamp when a character is made.
---

An **identity** is a name, a look, and a handedness, kept in the browser and used again and again. When a [[Characters|character]] is made, it is stamped from an identity: it takes the name, the face, and the hand it favours, and keeps them for life. An identity is not a character; one identity can be the stamp for survivors in many [[Worlds|worlds]].

## How it works

### Making and editing

**Identities** on the game's site menu (a page of the site, see [[Screens]]) lists the browser's identities with **Edit**, **Delete** (which asks on the page, "Delete this identity? Characters made from it are not touched."), and **New identity**; the first step of character creation lists them with **Choose** and **Edit**, and **New identity** below. The editor, **New identity** or **Edit identity**, has:

- **Name**: what others see over your head and in the [[Chat log|chat log]].
- **Skin**: {{n looks.skins.living.length}} living tones and {{n looks.skins.dead.length}} dead ones.
- **Hair style**: a dropdown of bald, short, and the painted styles.
- **Hair colour**: {{n looks.hair.length}} colours.
- **Eyes**: {{n looks.eyes.length}} colours.
- **Handedness**: **Right-handed** or **Left-handed**, Right-handed for a new identity. It names which of the character's hands is the main hand and which arm holds the main hand's thing; it changes nothing the game does (see [[Hands#Right- or left-handed|Hands]]).

The lists show each identity with its hair and its hand, as "short hair, left-handed".

A preview shows the figure in the starting clothes, turning through its facings.

### A stamp, not a link

Editing an identity changes only the characters made from it afterwards. A character already made keeps the name, look, and handedness it was stamped with, and deleting an identity removes no character. A new look for an existing survivor means a new character.

The last identity chosen is offered first next time.

### Where they are kept

Identities live in the browser's settings. They are not part of any world and do not travel with a world to another device.

The **Defaults** button on the [[Settings]] screen does not touch the identities: it resets only the screen's own choices.

## With friends

Joining a friend's world for the first time asks for an identity, on a page of the site before their world arrives; your new character in their world is stamped from it, its handedness included (the friend's world takes only Right-handed or Left-handed, and anything else as Right-handed). The friend's world keeps the character, not the identity.

## See also

- [[Characters]], [[Player]], [[Worlds]]

## Sources

<!-- sources at 9205ad7 -->
- `src/ui/screens.js:471`, `src/ui/screens.js:76-108` (at d7cf736): Delete identity's question, asked on the page (game #507)
- `src/identities.js:38-72`: an identity is a name and a look, kept and reused; a character is stamped from it
- `index.html:52`, `src/ui/screens.js:664-673`, `src/ui/screens.js:823-830`, `src/ui/screens.js:811-815`, `src/ui/screens.js:511-532`: Identities on the site's menu, the lists (Edit and Delete; in creation Choose and Edit) and the editor (game commit 02dfcc2)
- `src/identities.js:48`, `src/ui/screens.js:413`: the name field
- `src/ui/names.js`: the name over a head
- `data/looks.json`, `src/ui/screens.js:414-418`: skins living and dead, hair colours, eyes
- `src/figure/draw.js:63-66`, `data/hair/index.json`: bald, short, then the painted styles
- `src/ui/screens.js:514`, `src/ui/screens.js:525`: the hair style a dropdown (game commit 02dfcc2)
- `src/ui/screens.js:535-555`, `src/main.js:1467-1468`: the preview in the starting clothes, turning through the facings (game commit 02dfcc2)
- `src/ui/screens.js:372-375`: the last identity chosen is preselected (game commit 02dfcc2)
- `src/settings.js:32-33`: identities kept in the browser's settings, not in a world
- `src/settings.js`: Defaults leaves the identities alone (game commit 3c70aa7)
- `src/host.js:54-80`, `src/main.js:1681`, `src/ui/screens.js:809-822`: a first join asks for an identity and stamps a character from it
- `src/ui/screens.js:771`, `src/identities.js:47-58`, `src/handed.js` (at 78116b1): the Handedness row, Right-handed or Left-handed, right by default, kept on the identity (game #477)
- `src/ui/screens.js:914` (at 78116b1): an identity's row, "short hair, left-handed"
- `src/game.js:95-120`, `src/game.js:639-644`, `src/host.js:101-116` (at 78116b1): handedness stamped on each character made from the identity, a guest's by the join, which takes only right or left
