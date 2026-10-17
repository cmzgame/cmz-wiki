---
title: Combat
categories: [Combat, Mechanics]
aliases: [Fighting, Melee, Attacking]
summary: How fighting the dead works: the three mouse roles, the swing, stamina, damage, the finisher, and knockback.
---

**Combat** is how the [[Player]] fights [[The dead]]. There are no guns: the player swings what is in their hands, shoves with Space, or shoots a [[Bow]]. A blow is decided on the click, and only the dead can be hit: never [[Villagers]], never other players.

## How it works

### The mouse

The mouse buttons are roles, not fixed actions:

- **Left** is the main hand: a swing, a stab, or with a bow the draw. With a weapon in each hand, left swings whichever hand is ready (see [[Dual wielding]]).
- **Right**, tapped (let go within {{n census.constants.buttons.TAP_TIME seconds}}), opens the actions menu where it was pressed, or cancels a bow draw in progress. **Right held** is the off hand's stance: it raises the [[Shield]] or braces the bow. The stance starts on the press, without waiting for the tap time.
- **Middle** or **Q** is the main hand's other mode: the [[Halberd]]'s thrust, or the [[Throwing spear]]'s throw.
- **Space** is the [[Shove]].

See [[Controls]] for every key.

### The swing

A click swings at once. The hit is decided on the click; the arm's animation is only a picture of it. Everything in a wedge in front of the player is hit: the weapon's reach is measured from the feet, and its arc is measured from the chest ({{n tuning.player.aimY}} pixels above the feet) toward the cursor. A target exactly at the edge of the reach is still hit.

- Anything within {{n combat.blow.pointBlank tiles}} is always hit, whatever the angle.
- One of the dead drawn below the player on screen gets a little extra reach, up to {{n census.constants.combat.BODY_SLACK tiles}}.
- The player must be able to see the target: there are no hits through walls, shut doors, or shut shutters (see [[Sight]]).
- A swing is refused while carrying a prop, during a timed action, or when dead.
- Only [[The dead]] can be hit, and not a corpse: a swing, the [[Shove|shove]], an arrow, a thrown spear, and the [[Fireball]] never hurt a [[Villagers|villager]], another player, or the one who struck. There is no friendly fire, and no setting turns it on.

The wedge itself is not drawn. Each weapon's reach and arc are on its page and in [[Weapons]].

### Cooldown and stamina

Each weapon has its own recovery between swings; clicks during it do nothing. Two gold bars at the bottom of the screen fill over each hand's recovery.

Every swing costs [[Stamina]]. The player is never locked out: a swing begun at no stamina still lands, at {{n combat.blow.tiredDamage}} times its damage (the tired blow). A swing that drains the last stamina still does full damage; the next one is the tired one. Running out leaves the player winded, unable to sprint until stamina is back to {{n tuning.player.sprintRecoverAt}}.

### Damage and the finisher

A hit takes the weapon's damage from the target's health. A hit on one of the dead lying on the floor (down, or getting up) is a **finisher**: it does {{n combat.finisher.mult}} times the damage, and it does not push, stagger, or floor. The finisher is for blows in hand only; an arrow or a thrown spear on a downed target does plain damage.

The damage is multiplied by each of these that applies:

- {{n combat.blow.tiredDamage}} for a tired blow.
- {{n combat.finisher.mult}} for a finisher.
- {{n items.shield.shield.attackMult}} with the shield's guard raised.
- {{n combat.dual.offDamage}} for an off-hand blow.

A landed blow briefly freezes the game (hit-stop: {{n combat.blow.hitStop seconds}}, {{n combat.blow.hitStopKill seconds}} on a kill) and kicks the striking player's view {{n census.constants.combat.KICK_PX}} pixels along the aim for {{n census.constants.combat.KICK_TIME seconds}}.

### Knockback

Every weapon hit pushes the target away along the player's aim, spread over {{n tuning.zombie.knockTime seconds}} and stopped by walls. A downed target is not pushed. The distance is the weapon's knockback, in tiles.

### Stagger and knockdown

A hit may stop one of the dead for a moment, or floor it. Heavier weapons do both more often. See [[Stagger and knockdown]].

### Multi-hit

By default a swing hits only the nearest of the dead in the wedge. With the Multi-hit setting on, it hits everything in the wedge. The halberd's thrust always hits only the nearest.

### Durability

Weapons lose [[Durability|durability]] by landed hits and break when it runs out.

## Numbers

- Right tap: {{n census.constants.buttons.TAP_TIME seconds}}.
- Point blank: {{n combat.blow.pointBlank tiles}}.
- Tired blow: {{n combat.blow.tiredDamage}} times damage.
- Finisher: {{n combat.finisher.mult}} times damage.
- Hit-stop: {{n combat.blow.hitStop seconds}}; {{n combat.blow.hitStopKill seconds}} on a kill.
- Knockback time: {{n tuning.zombie.knockTime seconds}}.
- Stamina: {{n tuning.player.stamina}}, coming back at {{n tuning.player.staminaRegen}} a second.

## With friends

Whenever a world is open to friends, hit-stop is switched off for everyone, host and guests. The view's kick is felt only by the player who struck.

The mouse roles are read on each player's own machine and sent to the host. A guest's own swing and guard show at once on their screen, but the hits, the shove, and the bow's draw are worked out on the host; a guest's right tap during a draw ends the draw on the host too. The rules (Multi-hit, Zombie aggro) are the host's, and a world keeps them in its save. See [[Multiplayer]].

Players never hurt players, whatever they swing, shoot, or cast: on the host the dead are the only targets, so a friend standing in the wedge is passed over as a villager is.

## Settings that change it

- **Multi-hit** (default off): on, a blow reaches everything in its wedge.
- **Swing targets** (default off): a green outline on exactly the dead the next left click would hit. It follows the off hand when that hand would take the click.
- **Show hit shapes** (default off): draws the points on each nearby body that the swing tests, green when in the wedge.
- **Swing timer** (default on): the bars that fill over each hand's recovery.
- **Zombie aggro** (default on): off, the dead ignore the player (see [[The dead]]).

Zombie aggro and Multi-hit are [[World rules|world rules]], each world's own. A world made at a High Starting population has more of the dead to fight.

{{devonly note="The Dev chest, chosen at New world (default on), puts a chest of every weapon beside the spawn."}}

{{planned doc=02 note="A cap on how fast the player can turn while a swing recovers, against spinning and clicking (question 29b)."}}

## See also

- [[Weapons]]
- [[Stagger and knockdown]]
- [[Dual wielding]]
- [[Shove]]
- [[Archery]]
- [[Burning]]
- [[Durability]]
- [[Fists]]
- [[The dead]]

## Sources

<!-- sources at 9205ad7 -->
- `src/combat.js:305-357`: the swing decided on the click (`tryAttack`)
- `src/combat.js:186-188`, `src/combat.js:166-176`: only the dead are targets; a swing refused while carrying, in a timed action, or dead
- `src/combat.js:178-189`, `src/game.js:93`, `src/archery.js:288-312`: no friendly fire: a blow and the shove pick from the dead alone (`targetsIn`, the dead one not yet dead), and an arrow, a spear, or the fireball lands on what `setTargets` hands in, the dead (game commit 0bd3f9c)
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it (game commit 490addf)
- `src/buttons.js:10`, `src/buttons.js:24-47`: the roles and the tap time
- `src/player-controller.js:17-55`: what each role does; the stance starts on the press; Space is the shove
- `src/main.js:625-640`, `src/game.js:553`: a right tap: cancel a draw (an event in the player's snapshot, ended in the world's step), else the menu (game commit 2c70942)
- `src/combat.js:201-219`: the wedge: reach from the feet, inclusive; point blank; the down-screen slack
- `data/tuning.json`: `player.aimY` (the chest), `player.sprintRecoverAt`, `player.stamina`, `player.staminaRegen`, `zombie.knockTime`
- `data/combat.json`: `blow` (point blank, tired damage, the default knockdown, hit-stop), read by `src/combat.js:33`, `src/combat.js:67` (game commit 2c70942)
- `src/combat.js:34`, `src/combat.js:45-46`: the slack and the kick constants
- `src/combat.js:166-176`: line of sight to the target
- `src/combat.js:305-323`, `src/combat.js:413-420`: cooldown, stamina cost, the tired blow
- `src/ui/swing-timer.js`: the gold bars at bottom centre
- `src/entities/player.js:325`: winded until stamina is back
- `src/combat.js:329-356`: the damage formula, the finisher, hit-stop
- `data/combat.json`: `finisher.mult`, `dual.offDamage`
- `src/archery.js:247`: an arrow or thrown spear gets no finisher bonus
- `src/combat.js:255-260`: the camera kick
- `src/combat.js:346-347`, `src/entities/zombie.js:157-165`: knockback over time, stopped by walls, none on a downed target
- `src/combat.js:171-175`, `src/settings.js:19`: multi-hit, off by default; the thrust's `multiHit: false`
- `src/combat.js:354`: durability spent on a landed hit
- `src/main.js:880`, `src/loop.js:66-74`: hit-stop off whenever the world is on the wire
- `src/main.js:1454-1456`: the kick answered only by the striker's client
- `src/player-controller.js:13-16`, `src/player-controller.js:43`, `src/player-controller.js:53`: a guest's swing and guard predicted; hits, shove, and draw on the host
- `src/net.js:815`, `src/net.js:1038`, `src/rules.js:23-37`: the host's rules travel in frames and the save
- `src/settings.js:12`, `src/settings.js:16`, `src/settings.js:18-20`: Zombie aggro (on (game commit 2c70942)), Swing timer, Swing targets, Multi-hit, Show hit shapes defaults
- `src/combat.js:399-410`, `src/combat.js:431-443`: the swing targets outline and the hit shapes
- `src/settings.js:31`, `src/settings.js:68`, `src/game.js:73-88`: the Dev chest chosen at New world (game commit f2b8062)
- `src/rules.js:13-30`, `src/game.js:121-150`: Zombie aggro and Multi-hit the world's rules; the Starting population (game commit f2b8062)

{{navbox weapons}}
