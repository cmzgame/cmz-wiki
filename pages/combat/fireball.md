---
title: Fireball
categories: [Combat, Magic]
aliases: [Spell, Casting, Magic, Flare]
summary: The one spell in the game: a flat ball of fire cast with a staff and the Book of Fire held together, bursting on the first of the dead it meets, and a flare that lights the ground and kindles a campfire or a torch where it lands.
---

The **Fireball** is the game's one spell. It is cast by holding the [[Staff of Fire]] and the [[Book of Fire]] together, one in each hand, and it works like the [[Hunting bow]]'s draw without the arc: hold the left button to draw, let go to send it. It is a light as much as a weapon: it lights its way, leaves a short flare where it comes down, and lights a campfire or a mounted torch it lands by.

## How it works

- **Holding both.** The staff and the book may be in either hand. Either one alone refuses with a word, and the left button then does nothing else: no punch.
- **The draw.** Hold the left button; the cast fills over {{n items.book_of_fire.book.spell.drawTime seconds}} and is sent on release, toward the cursor, as the bow's shot is. The caster raises the staff upright through the draw and sends the ball on the release; the pose follows whichever hand holds the staff.
- **The flight.** The ball flies flat at chest height, at {{n items.book_of_fire.book.spell.speed tiles a second}}, out to {{n items.book_of_fire.book.spell.range tiles}}. It is not lobbed, so walls, shut doors, and tree trunks stop it, and a ball stopped that way hits nothing. A light out to {{n combat.bow.fireballGlow tiles}} moves with it, so it lights its path at night.
- **The burst on the way.** As it flies, the ball bursts on the first of [[The dead]] within {{n items.book_of_fire.book.spell.contact tiles}} of it, and the flight ends there. Only a body ahead of where it was cast counts, so nothing behind the caster is hit as the ball leaves, and never one with a wall or a closed door between it and the ball.
- **The hit where it lands.** A ball that meets no one on the way hits the nearest of the dead within {{n items.book_of_fire.book.spell.landRadius tiles}} of where it comes down, a wider reach than an arrow's, again never through a wall or a closed door. At chest height, an open door or an open window between them does not stop it.
- **The damage.** Either way it hits one body: {{n items.book_of_fire.book.spell.damage}} damage at a full draw and less for a partial one, a push of {{n items.book_of_fire.book.spell.knockback tiles}}, and it always staggers and interrupts a bite. It always sets the body alight, before the damage, so a body it kills burns on (see [[Burning]]). Nothing is left behind: no ball on the ground, nothing lodged in the body.
- **The flare.** Wherever it comes down, on a body, on the ground, or against a wall, it leaves a flare of light out to {{n combat.bow.flareRadius tiles}}, shrinking to nothing over {{n combat.bow.flareSeconds seconds}}. It is light only: it burns nothing, and the dead are not drawn to it.
- **What it lights.** Where it comes down, it lights an unlit campfire with fuel in it, and a torch mounted in a bracket or on a post that is out, within {{n combat.bow.kindleRadius tiles}}, with no wall between. It never lights a fireplace, a hearth, an [[Oven]], or a [[Forge]], and a campfire with no fuel stays out (see [[Fire]] and [[Torch posts and brackets]]). Nothing else catches, and fire never spreads.
- **Who it can hit.** One of the dead, and not a corpse: it passes over a [[Villagers|villager]], another player, and the caster, as every shot does (see [[Combat]]).
- **No cost** beyond the draw and the recovery after it.

## Numbers

- Draw: {{n items.book_of_fire.book.spell.drawTime seconds}}.
- Speed: {{n items.book_of_fire.book.spell.speed tiles a second}}. Range: {{n items.book_of_fire.book.spell.range tiles}}.
- Burst on the way: within {{n items.book_of_fire.book.spell.contact tiles}}. Hit where it lands: within {{n items.book_of_fire.book.spell.landRadius tiles}}.
- Damage: {{n items.book_of_fire.book.spell.damage}} at a full draw. Push: {{n items.book_of_fire.book.spell.knockback tiles}}.
- Light in flight: {{n combat.bow.fireballGlow tiles}}. The flare: {{n combat.bow.flareRadius tiles}}, gone in {{n combat.bow.flareSeconds seconds}}.
- Lights a campfire or a mounted torch within {{n combat.bow.kindleRadius tiles}}.
- Burning: {{n combat.burn.dps}} health a second for {{n combat.burn.duration}} seconds, at most {{n combat.burn.cap}} over one burn.

## With friends

A guest's cast is its draw and release, worked out on the host as the bow's shot is, and the burst and the hit are decided there too; the ball reaches every screen with the arrows in flight, drawn and lit there, and so does its flare. A campfire or a torch it lights is lit for everyone and kept in the save. The burn it starts runs on the host, and every screen sees the body burn. The ball never hurts another player.

{{planned doc=24 note="A cost for casting, other spells and a choice among them, and a burst of flame drawn where it hits."}}

## See also

- [[Archery]], whose draw the cast shares.
- [[Burning]].
- [[Combat]].

## Sources

<!-- sources at 64cc711 -->
- `data/items.json`: the spell's numbers on the book (`book.spell`: `drawTime`, `speed`, `range`, `contact`, `landRadius`, `damage`, `knockback`), `staff: true` on the staff, `castStyle` on both
- `src/archery.js:610-619`: `spellOf`, both items make a launcher of the kind `spell`, one alone refuses; the flight flat and vanishing
- `data/poses.json` `cast_staff`, `cast_book`: the cast's pose by which hand holds the staff (game PR #9)
- `src/archery.js:155-216`: walls, doors, trunks, and props stop the flat flight, scanned once at release
- `src/archery.js:238-257`: the burst on the way: the first of the dead within the contact radius, before any wall stop (game PR #12)
- `src/archery.js:262-296`: the landing: the hit met on the way, or the nearest within the landing radius; damage scaled by the draw; nothing lands or lodges
- `data/items.json` `book.spell.ignite`, `src/archery.js:275-277`, `src/burn.js:26-33`: the body hit is set alight before the damage
- `data/combat.json` `burn`: the burn's numbers
- `src/archery.js:307-346`: only a body ahead of the cast counts on the way, and none with a wall or closed door between it and the ball, at the ball's height
- `src/archery.js:366-381`, `data/combat.json` `bow.fireballGlow`, `bow.flareRadius`, `bow.flareSeconds`: the moving light, and the flare where it lands, shrinking, light only
- `src/archery.js:233-237`, `src/archery.js:383-393`, `src/net.js:871`, `src/net.js:1119`: the flares aged on the host and sent in each frame
- `src/archery.js:289-292`, `src/map.js:186-205`, `data/combat.json` `bow.kindleRadius`: the landing lights an unlit campfire with fuel, or a mounted torch that is out, within reach and with no wall between; never a hearth, an oven, or a forge
- `src/light.js:184-200`: the flare among the moving lights, not among the flames the dead notice
- `src/game.js:97`, `src/archery.js:300-324`: what it can hit is what `setTargets` hands in, the dead; never a villager, a player, or the caster
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it
- `src/render/entities.js`: the fireball drawn by direction with its flicker
