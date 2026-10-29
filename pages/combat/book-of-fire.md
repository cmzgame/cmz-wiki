---
title: Book of Fire
categories: [Items, Magic, Weapons]
summary: The Book of Fire is a spellbook. Held in one hand with the Staff of Fire in the other, it casts its spell, the Fireball, on the left button. Alone it does nothing on the left button.
numbersOk: true
---

<!-- typed: the hover card's own figures quoted: 22 is the Fireball's damage at the least draw that flies, and 8 over 10 seconds one burn, worked out from the data (game #471) -->
{{infobox-item book_of_fire}}

The **Book of Fire** is a spellbook. Held in one hand with the [[Staff of Fire]] in the other, it casts its spell, the [[Fireball]], on the left button. Alone it does nothing on the left button.

Its spell always sets the one of the dead it hits alight (see [[Burning]]). Each cast costs {{n items.book_of_fire.book.spell.mana}} [[Mana]], paid when the ball is let go; a cast the mana bar cannot pay for is refused before its draw starts, with "Not enough mana." and the bar's flash.

Its hover card says: "Cast Fireball (left button, a staff in the other hand): 22 to {{n items.book_of_fire.book.spell.damage}} damage by the draw, up to {{n items.book_of_fire.book.spell.range}} tiles.", "Fireball bursts on the first of the dead or wild game it meets, or within {{n items.book_of_fire.book.spell.landRadius}} tile of where it lands; it passes tame animals by.", and "Sets the dead it hits alight: 8 damage over 10 seconds.", and "Costs {{n items.book_of_fire.book.spell.mana}} mana a cast, spent when it is released." (with the world rule Unlimited mana on, "Costs {{n items.book_of_fire.book.spell.mana}} mana a cast, but Unlimited mana is on: it costs nothing."). It reads each line from the spell's data, so a spell added later says what it does with no more work.

It is found only in the [[Developer chest]] for now.

{{item-sections book_of_fire}}

## Sources

<!-- sources at 3b7cb9a -->
- `data/items.json`: the item (`book.spell`, its `ignite`)
- `src/archery.js:581-590`: `spellOf`, the staff and the book together cast; one alone refuses; the spell's `ignite` carried into the shot
- `src/archery.js:267-269`: the body the spell hits set alight
- `src/item-info.js` `shotLines` (at dc10b81): the card's cast lines, read from `book.spell`
- `src/archery.js:340-363` (at dc10b81): `bodyAt`, a spell passes a tame animal by
- `data/loot.json`: the dev chest's fixed contents
- `data/items.json:11` `book.spell.mana`, `src/archery.js:826-830`, `src/archery.js:850-865`, `src/item-info.js:203`: the cast's cost, refused before the draw, paid on the release; the card's cost line (game #488, at 0fa02e5)

{{navbox weapons}}
