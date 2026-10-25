---
title: Hunting bow
categories: [Items, Weapons]
aliases: [Bow, Bows]
summary: A two-handed bow that shoots arrows in an arc, drawn with the left button.
---

{{infobox-item bow}}

The **Hunting bow** (the Bow until the names were made specific) is held in both hands and shoots [[Arrow|arrows]] from the bag or the belt. It hits only where the arrow comes down. It is the hunter's weapon: an animal it kills gives its whole yield, a share of {{n animals.kills.bow}} (see [[Hunting]]).

## Combat

- **Left** draws: hold, aim with the cursor, and release to shoot. A full free draw takes {{n items.bow.bow.drawTime seconds}} and does {{n items.bow.bow.damage}} damage; a partial draw falls short and does less.
- **Right** held braces: a full draw takes {{n items.bow.bow.braceDrawTime seconds}}, but the player walks at a crawl. A tap of right cancels a draw and keeps the arrow.

An arrow hurts the nearest of [[The dead]] within {{n combat.bow.hitRadius tiles}} of where it lands, never through a wall or a closed door, pushes {{n items.bow.bow.knockback tiles}}, staggers with the default chance, and never floors. Walls, boards, trees, and solid props stop it. See [[Archery]] for the draw, the arc, and what stops a shot.

With [[Fire arrow|fire arrows]] carried, the bow shoots those first, and the one of the dead a fire arrow hits is set alight (see [[Burning]]); it lodges or lands as a plain arrow.

The bow loses durability per arrow loosed and lasts {{n items.bow.shots}} shots (see [[Durability]]).

{{item-sections bow}}

## The sound it makes

Drawn, it creaks for as long as it is held, rising as the draw fills; let go, it twangs, and the arrow thumps where it comes down. A draw let go too early makes no twang. See [[Sound]].

## Sources

<!-- sources at 3b7cb9a -->
- `data/items.json`: the bow: both hands, `drawTime`, `braceDrawTime`, `damage`, `knockback`, `shots`
- `src/archery.js:635-692`, `src/archery.js:695-735`: the draw, release, cancel, and the brace
- `src/main.js:625-640`, `src/game.js:554`: a right tap cancels a draw in the world's step, a guest's too
- `data/combat.json` `bow`: the flight's numbers
- `src/player-controller.js:52`: the crawl while braced
- `src/archery.js:254-284`: the landing: hit radius, push, the default stagger, no knockdown
- `src/archery.js:141-212`: walls, boards, trees, and props stop a shot
- `src/archery.js:264`, `src/archery.js:295-334`: the landing's hit never through a wall or a closed door
- `src/archery.js:568-572`, `src/archery.js:267-282`: fire arrows drawn first, setting alight what they hit, lodging or landing as plain arrows
- `src/archery.js:681-690`, `src/items.js:39-41`: durability per arrow loosed
- `src/sound-cues.js`, `data/sounds.json`: the sound it makes, heard as this client sees it (game #381 and #386, at 3c68f9c)
- `data/animals.json:4`, `src/archery.js:272-279` (at 6e3ab37): a bow's kill keeps the class bow, the whole yield (game #456)

{{navbox weapons}}
