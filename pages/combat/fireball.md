---
title: Fireball
categories: [Combat, Magic]
aliases: [Spell, Casting, Magic]
summary: The one spell in the game: a flat ball of fire cast with a staff and the Book of Fire held together, bursting on the first of the dead it meets.
---

The **Fireball** is the game's one spell. It is cast by holding the [[Staff of Fire]] and the [[Book of Fire]] together, one in each hand, and it works like the [[Bow]]'s draw without the arc: hold the left button to draw, let go to send it.

## How it works

- **Holding both.** The staff and the book may be in either hand. Either one alone refuses with a word, and the left button then does nothing else: no punch.
- **The draw.** Hold the left button; the cast fills over {{n items.book_of_fire.book.spell.drawTime seconds}} and is sent on release, toward the cursor, as the bow's shot is. The caster raises the staff upright through the draw and sends the ball on the release; the pose follows whichever hand holds the staff.
- **The flight.** The ball flies flat at chest height, at {{n items.book_of_fire.book.spell.speed tiles a second}}, out to {{n items.book_of_fire.book.spell.range tiles}}. It is not lobbed, so walls, shut doors, and tree trunks stop it, and a ball stopped that way hits nothing. A light moves with it, so it lights its path at night.
- **The burst on the way.** As it flies, the ball bursts on the first of [[The dead]] within {{n items.book_of_fire.book.spell.contact tiles}} of it, and the flight ends there. Only a body ahead of where it was cast counts, so nothing behind the caster is hit as the ball leaves, and never one with a wall or a closed door between it and the ball.
- **The hit where it lands.** A ball that meets no one on the way hits the nearest of the dead within {{n items.book_of_fire.book.spell.landRadius tiles}} of where it comes down, a wider reach than an arrow's, again never through a wall or a closed door. At chest height, an open door or an open window between them does not stop it.
- **The damage.** Either way it hits one body: {{n items.book_of_fire.book.spell.damage}} damage at a full draw and less for a partial one, a push of {{n items.book_of_fire.book.spell.knockback tiles}}, and it always staggers and interrupts a bite. Nothing is left behind: no ball on the ground, nothing lodged in the body.
- **No cost** beyond the draw and the recovery after it.

## Numbers

- Draw: {{n items.book_of_fire.book.spell.drawTime seconds}}.
- Speed: {{n items.book_of_fire.book.spell.speed tiles a second}}. Range: {{n items.book_of_fire.book.spell.range tiles}}.
- Burst on the way: within {{n items.book_of_fire.book.spell.contact tiles}}. Hit where it lands: within {{n items.book_of_fire.book.spell.landRadius tiles}}.
- Damage: {{n items.book_of_fire.book.spell.damage}} at a full draw. Push: {{n items.book_of_fire.book.spell.knockback tiles}}.

## With friends

A guest's cast is its draw and release, worked out on the host as the bow's shot is, and the burst and the hit are decided there too; the ball reaches every screen with the arrows in flight, drawn and lit there.

{{planned doc=24 note="A cost for casting, other spells and a choice among them, and a burst of flame drawn where it hits."}}

## See also

- [[Archery]], whose draw the cast shares.
- [[Combat]].

## Sources

<!-- sources at ac596bd -->
- `data/items.json`: the spell's numbers on the book (`book.spell`: `drawTime`, `speed`, `range`, `contact`, `landRadius`, `damage`, `knockback`), `staff: true` on the staff, `castStyle` on both
- `src/archery.js:554-567`: `spellOf`, both items make a launcher of the kind `spell`, one alone refuses; the flight flat and vanishing
- `data/poses.json` `cast_staff`, `cast_book`: the cast's pose by which hand holds the staff (game PR #9)
- `src/archery.js:151-211`: walls, doors, trunks, and props stop the flat flight, scanned once at release
- `src/archery.js:227-249`: the burst on the way: the first of the dead within the contact radius, before any wall stop (game PR #12)
- `src/archery.js:252-280`: the landing: the hit met on the way, or the nearest within the landing radius; damage scaled by the draw; nothing lands or lodges
- `src/archery.js:292-331`: only a body ahead of the cast counts on the way, and none with a wall or closed door between it and the ball, at the ball's height
- `src/archery.js:351-361`: the moving light
- `src/render/entities.js`: the fireball drawn by direction with its flicker
