---
title: Staff of Fire
categories: [Items, Magic, Weapons]
summary: The Staff of Fire is a magic staff. Held in one hand with the Book of Fire in the other, it casts the book's spell, the Fireball, on the left button. Alone it does nothing on the left button.
---

{{infobox-item staff_of_fire}}

The **Staff of Fire** is a magic staff. Held in one hand with the [[Book of Fire]] in the other, it casts the book's spell, the [[Fireball]], on the left button. Alone it does nothing on the left button.

Its hover card says: "Cast (left button, a spellbook in the other hand): Fireball with the Book of Fire." It names the spell of every book it can cast. A cast spends the book's spell's [[Mana]], not anything of the staff's (see [[Book of Fire]]).

It is found only in the [[Developer chest]] for now.

{{item-sections staff_of_fire}}

## The sound it makes

Its spell makes one sound as it is cast, when it is let go; it has no draw and no twang. See [[Sound]].

## Sources

<!-- sources at 3c70aa7 -->
- `data/items.json`: the item (`staff: true`)
- `src/archery.js`: `spellOf`, the staff and the book together cast; one alone refuses
- `src/item-info.js` `shotLines` (at dc10b81): the card's line for a staff, read from the books' `book.spell`
- `data/loot.json`: the dev chest's fixed contents
- `src/sound-cues.js`, `data/sounds.json`: the sound it makes, heard as this client sees it (game #381 and #386, at 3c68f9c)
- `src/mana.js:32-33`, `data/items.json:11` `book.spell.mana`: the cost is the spell's, on the book (game #488, at 0fa02e5)

{{navbox weapons}}
