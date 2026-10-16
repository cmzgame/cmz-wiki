---
title: Book of Fire
categories: [Items, Magic, Weapons]
summary: The Book of Fire is a spellbook. Held in one hand with the Staff of Fire in the other, it casts its spell, the Fireball, on the left button. Alone it does nothing on the left button.
---

{{infobox-item book_of_fire}}

The **Book of Fire** is a spellbook. Held in one hand with the [[Staff of Fire]] in the other, it casts its spell, the [[Fireball]], on the left button. Alone it does nothing on the left button.

Its spell always sets the one of the dead it hits alight (see [[Burning]]).

It is found only in the [[Developer chest]] for now.

{{item-sections book_of_fire}}

## Sources

<!-- sources at 3b7cb9a -->
- `data/items.json`: the item (`book.spell`, its `ignite`)
- `src/archery.js:581-590`: `spellOf`, the staff and the book together cast; one alone refuses; the spell's `ignite` carried into the shot
- `src/archery.js:267-269`: the body the spell hits set alight
- `data/loot.json`: the dev chest's fixed contents

{{navbox weapons}}
