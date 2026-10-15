---
title: Fireball
categories: [Combat, Magic]
aliases: [Spell, Casting, Magic]
summary: The one spell in the game: a flat ball of fire cast with a staff and the Book of Fire held together.
---

The **Fireball** is the game's one spell. It is cast by holding the [[Staff of Fire]] and the [[Book of Fire]] together, one in each hand, and it works like the [[Bow]]'s draw without the arc: hold the left button to draw, let go to send it.

## How it works

- **Holding both.** The staff and the book may be in either hand. Either one alone refuses with a word, and the left button then does nothing else: no punch.
- **The draw.** Hold the left button; the cast fills over {{n items.book_of_fire.book.spell.drawTime seconds}} and is sent on release, toward the cursor, as the bow's shot is.
- **The flight.** The ball flies flat at chest height, at {{n items.book_of_fire.book.spell.speed tiles a second}}, out to {{n items.book_of_fire.book.spell.range tiles}}. It is not lobbed, so walls, shut doors, and tree trunks stop it. A light moves with it, so it lights its path at night.
- **The hit.** Where it comes down it hits one of [[The dead]]: {{n items.book_of_fire.book.spell.damage}} damage at a full draw, a push of {{n items.book_of_fire.book.spell.knockback tiles}}, and it always staggers and interrupts a bite. Nothing is left behind: no ball on the ground, nothing lodged in the body.
- **No cost** beyond the draw and the recovery after it.

## With friends

A guest's cast is its draw and release, worked out on the host as the bow's shot is; the ball reaches every screen with the arrows in flight, drawn and lit there.

{{planned doc=24 note="A cost for casting, a burst on landing, other spells, and the cast's own pose."}}

## See also

- [[Archery]], whose draw the cast shares.
- [[Combat]].

## Sources

<!-- sources at 3c70aa7 -->
- `data/items.json`: the spell's numbers on the book (`book.spell`) and `staff: true` on the staff
- `src/archery.js`: `spellOf` (both items make a launcher of the kind `spell`, one alone refuses), the flat flight, `vanish`, the moving light
- `src/render/entities.js`: the fireball drawn by direction with its flicker
