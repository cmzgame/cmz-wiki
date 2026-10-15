---
title: Bow
categories: [Items, Weapons]
aliases: [Bows]
summary: A two-handed bow that shoots arrows in an arc, drawn with the left button.
---

{{infobox-item bow}}

The **Bow** is held in both hands and shoots [[Arrow|arrows]] from the bag or the belt. It hits only where the arrow comes down.

## Combat

- **Left** draws: hold, aim with the cursor, and release to shoot. A full free draw takes {{n items.bow.bow.drawTime seconds}} and does {{n items.bow.bow.damage}} damage; a partial draw falls short and does less.
- **Right** held braces: a full draw takes {{n items.bow.bow.braceDrawTime seconds}}, but the player walks at a crawl. A tap of right cancels a draw and keeps the arrow.

An arrow hurts the nearest of [[The dead]] within {{n combat.bow.hitRadius tiles}} of where it lands, pushes {{n items.bow.bow.knockback tiles}}, staggers with the default chance, and never floors. Walls, boards, trees, and solid props stop it. See [[Archery]] for the draw, the arc, and what stops a shot.

The bow wears per arrow loosed and lasts {{n items.bow.shots}} shots (see [[Durability]]).

{{item-sections bow}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json`: the bow: both hands, `drawTime`, `braceDrawTime`, `damage`, `knockback`, `shots`
- `src/archery.js:522-575`, `src/archery.js:578-617`: the draw, release, cancel, and the brace
- `src/main.js:625-640`, `src/game.js:553`: a right tap cancels a draw in the world's step, a guest's too (game commit 2c70942)
- `data/combat.json` `bow`: the flight's numbers (game commit 2c70942)
- `src/player-controller.js:52`: the crawl while braced
- `src/archery.js:234-261`: the landing: hit radius, push, the default stagger, no knockdown
- `src/archery.js:141-202`: walls, boards, trees, and props stop a shot
- `src/archery.js:564-573`, `src/items.js:39-41`: wear per arrow loosed

{{navbox weapons}}
