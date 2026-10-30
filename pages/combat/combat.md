---
title: Combat
categories: [Combat, Mechanics]
aliases: [Fighting, Melee, Attacking]
summary: How fighting the dead works: the three mouse roles, the swing and its commitment, stamina, damage, the finisher, and knockback.
---

**Combat** is how the [[Player]] fights [[The dead]]. There are no guns: the player swings what is in their hands, shoves with Space, or shoots a [[Hunting bow]]. A blow is decided on the click, and only the dead and [[Animals|animals]] can be hit: never [[Villagers]], never other players.

## How it works

### The mouse

The mouse buttons are roles, not fixed actions:

- **Left** is the main hand: a swing, a stab, with a bow the draw, or with a stack of [[Throwing knife|throwing knives]] or [[Throwing axe|throwing axes]] the throw. With a weapon in each hand, left swings whichever hand is ready (see [[Dual wielding]]). With a potion or a poison in the main hand it does nothing, not even fists.
- **Right**, tapped (let go within {{n census.constants.buttons.TAP_TIME seconds}}), opens the actions menu where it was pressed, or cancels a bow draw in progress. **Right held** is the off hand's stance: it raises the [[Wooden shield]] or braces the bow. The stance starts on the press, without waiting for the tap time.
- **Middle** or **Q** is the main hand's other mode: the [[Halberd]]'s thrust, the [[Throwing spear]]'s throw, or the throw of a potion or a poison held there, which shatters in a splash (see [[Potions#Holding and throwing one|Potions]]).
- **Space** is the [[Shove]].
- **The belt's keys** draw a held item into its slot's hand: a main-hand slot's into the main hand, an off-hand slot's into the off hand (see [[Belt]]); a weapon is drawn beside another, for dual wielding, only from an off-hand slot.

The buttons and the belt name the main hand and the off hand, never left or right: a left-handed character holds the main hand's weapon in the left arm, and the left button still uses it (see [[Hands#Right- or left-handed|Hands]]).

See [[Controls]] for every key.

### The swing

A click swings at once. The hit is decided on the click; the arm's animation is only a picture of it. Everything in a wedge in front of the player is hit: the weapon's reach is measured from the feet, and its arc is measured from the chest ({{n tuning.player.aimY}} pixels above the feet) toward the cursor. A target exactly at the edge of the reach is still hit.

- Anything within {{n combat.blow.pointBlank tiles}} is always hit, whatever the angle.
- One of the dead drawn below the player on screen gets a little extra reach, up to {{n census.constants.combat.BODY_SLACK tiles}}.
- The player must be able to see the target: there are no hits through walls, shut doors, or shut shutters (see [[Sight]]). The dark does not count: one of the dead hidden by the dark is hit like any other, and so is one an arrow, a throw, or a fireball meets.
- A swing is refused while carrying a prop, during a timed action, or when dead.
- Only [[The dead]] and [[Animals|animals]] can be hit, and not a corpse: a swing, the [[Shove|shove]], an arrow, a thrown spear, and the [[Fireball]] never hurt a [[Villagers|villager]], another player, or the one who struck. There is no friendly fire, and no setting turns it on.
- Wild game (deer, rabbits, boar) is hit as the dead are. Tame stock (hens, cows, pigs, sheep) is struck only when nothing else is in the wedge, and then the nearest one alone; the shove is for the dead alone. See [[Hunting]].

The wedge itself is not drawn; the Swing targets outline, on by default, shows exactly which of the dead the next left-button swing hits. It is the left button's test only: the [[Halberd]]'s thrust on the middle button or Q has its own reach and arc, so the outline shows the sweep's reach, not the thrust's. Each weapon's reach and arc are on its page and in [[Weapons]].

A swing commits the player for as long as its animation plays: they walk at {{n combat.blow.swingMove}} of their speed, and the figure keeps facing the way it struck. The aim and the next swing stay free; nothing caps how fast the player turns.

### Cooldown and stamina

Each weapon has its own recovery between swings; clicks during it do nothing. Two gold bars at the bottom of the screen fill over each hand's recovery.

Every swing costs [[Stamina]]. The player is never locked out: a swing the bar cannot pay for still lands, at {{n combat.blow.tiredDamage}} times its damage (the tired blow), and a tired [[Shove]] staggers and floors at the same share and pushes {{pct combat.shove.tiredPush}} as far. Running out leaves the player winded, unable to sprint until stamina is back to {{n tuning.player.sprintRecoverAt}}.

### Damage and the finisher

A hit takes the weapon's damage from the target's health. A hit on one of the dead lying on the floor is a **finisher**: it does {{n combat.finisher.mult}} times the damage, and it does not push, stagger, or floor. Once it is getting up, a blow does plain damage and nothing else. The finisher is for blows in hand only; an arrow or a thrown spear on a downed target does plain damage.

The damage is multiplied by each of these that applies:

- {{n combat.blow.tiredDamage}} for a tired blow.
- {{n combat.finisher.mult}} for a finisher.
- {{n items.shield.shield.attackMult}} with the shield's guard raised.
- {{n combat.dual.offDamage}} for an off-hand blow.

Each hit floats its damage as a red number over the one struck (see [[Interface#Floating numbers|Interface]]). A landed blow briefly freezes the game (hit-stop: {{n combat.blow.hitStop seconds}}, {{n combat.blow.hitStopKill seconds}} on a kill) and kicks the striking player's view {{n census.constants.combat.KICK_PX}} pixels along the aim for {{n census.constants.combat.KICK_TIME seconds}}.

### Knockback

Every weapon hit pushes the target away along the player's aim, spread over {{n tuning.zombie.knockTime seconds}} and stopped by walls. A downed target is not pushed. The distance is the weapon's knockback, in tiles.

### Stagger and knockdown

Every hit makes one of the dead flinch, and a hit during its bite's wind-up cancels the bite. A hit may also stop its walk for a moment, heavier weapons more often; only the mace, the halberd's thrust, and the shove floor it. See [[Stagger and knockdown]].

### Multi-hit

By default a swing hits only the nearest of the dead in the wedge. With the Multi-hit setting on, it hits everything in the wedge. The halberd's thrust always hits only the nearest.

### Pulling one of the dead

A blow that one of the dead lives through tells it where the blow came from, and if it was not yet hunting a player it calls once to the dead near it that can see it: they join the hunt. A killing blow calls no one. So a hit, a throw, or an arrow on one at the edge of a group, out of the others' line or in the dark, brings that one alone, and a hit in the middle of a group brings the rest. See [[Sight-pull]].

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
- Walk while a swing plays: {{n combat.blow.swingMove}} of normal.

## The sound it makes

A swing whooshes as it is made, heavier for a long swing such as the halberd's; a hit thuds where it lands; a shove has its own push; one of the dead falling or dying has its own sound. See [[Sound]].

## With friends

Whenever a world is open to friends, hit-stop is switched off for everyone, host and guests. The view's kick is felt only by the player who struck.

The mouse roles are read on each player's own machine and sent to the host. A guest's own swing, guard, and shove show at once on their screen, recovery and slowed walk included, but the hits, the shove's push, and the bow's draw are worked out on the host; a guest's right tap during a draw ends the draw on the host too. The rules (Multi-hit, Zombie aggro) are the host's, and a world keeps them in its save. See [[Multiplayer]].

Players never hurt players, whatever they swing, shoot, or cast: on the host the dead and the animals are the only targets, so a friend standing in the wedge is passed over as a villager is.

## Settings that change it

- **Multi-hit** (default off): on, a blow reaches everything in its wedge.
- **Swing targets** (default on): a green outline on exactly the dead the next left click would hit; green means the swing lands. It follows the off hand when that hand would take the click. It shows the left button's swing only, never the halberd's thrust. One of the dead hidden by the dark gets no outline, though the swing still hits it.
- **Show hit shapes** (default off): draws the points on each nearby body that the swing tests, green when in the wedge.
- **Swing timer** (default on): the bars that fill over each hand's recovery.
- **Zombie aggro** (default on): off, the dead ignore the player (see [[The dead]]).

Zombie aggro and Multi-hit are [[World rules|world rules]], each world's own. A world made at a High Starting population has more of the dead to fight.

{{devonly note="The Dev chest, chosen at New world (default on), puts a chest of every weapon and every tool beside the spawn."}}

## See also

- [[Weapons]]
- [[Stagger and knockdown]]
- [[Dual wielding]]
- [[Shove]]
- [[Sight-pull]]
- [[Archery]]
- [[Hunting]]
- [[Burning]]
- [[Durability]]
- [[Fists]]
- [[The dead]]
- [[Levers]]: the fighting numbers still being balanced

## Sources

<!-- sources at 37e8726 -->
- `src/combat.js:84-88`, `src/combat.js:502`, `src/archery.js:906-911` (game #586) (at 8d361e5)
- `src/archery.js:815-828` (at 307ed34): a pure throwable throws on the left button (game #494)
- `src/inventory.js:344-445` (at 78116b1): a belt key draws into its slot's hand by the slot's role (game #478)
- `src/handed.js`, `src/figure/rig.js:274`, `src/figure/draw.js:89` (at 78116b1): handedness is a label and a drawn arm; nothing in combat reads it (game #477)
- `src/combat.js:329-393`: the swing decided on the click (`tryAttack`)
- `src/combat.js:183-194`, `src/combat.js:208-212`: only the dead are targets; a swing refused while carrying, in a timed action, or dead
- `src/combat.js:183-194`, `src/game.js:106`, `src/archery.js:299-326`: no friendly fire: a blow and the shove pick from the dead alone (`targetsIn`, the dead one not yet dead), and an arrow, a spear, or the fireball lands on what `setTargets` hands in, the dead (game commit 0bd3f9c)
- `src/combat.js:204-220`, `src/archery.js:319-346` (at 6e3ab37): animals among a blow's and a shot's targets, tame stock only alone (game #456)
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it (game commit 490addf)
- `src/buttons.js:10`, `src/buttons.js:24-44`: the roles and the tap time
- `src/player-controller.js:17-56`: what each role does; the stance starts on the press; Space is the shove
- `src/main.js:793-809`, `src/game.js:625`: a right tap: cancel a draw (an event in the player's snapshot, ended in the world's step), else the menu (game commit 2c70942)
- `src/combat.js:220-243`: the wedge: reach from the feet, inclusive; point blank; the down-screen slack
- `data/tuning.json`: `player.aimY` (the chest), `player.sprintRecoverAt`, `player.stamina`, `player.staminaRegen`, `zombie.knockTime`
- `data/combat.json`: `blow` (point blank, tired damage, the default knockdown, hit-stop, the walk while swinging), read by `src/combat.js:37`, `src/combat.js:73` (game commit 2c70942)
- `src/combat.js:38`, `src/combat.js:50-51`: the slack and the kick constants
- `src/combat.js:184-187`: line of sight to the target, walls and shut openings alone, with no light in it, so the dark hides no target
- `src/player-controller.js:53-55`, `src/combat.js:201-206`, `src/entities/player.js:384-387`: the commitment: the walk at `blow.swingMove` while the swing's animation plays, the figure's facing held, the aim free
- `src/combat.js:329-343`, `src/combat.js:455-462`: cooldown, stamina cost
- `src/combat.js:336-341`, `src/combat.js:375`: the tired blow, when the bar cannot pay the swing's cost
- `src/combat.js:418-434`: the tired shove, its stagger and knockdown at the same share, its push at `shove.tiredPush` (game #396, at 32ff419)
- `src/ui/swing-timer.js`: the gold bars at bottom centre
- `src/entities/player.js:353`: winded until stamina is back
- `src/combat.js:356-391`: the damage formula, the finisher, hit-stop
- `src/combat.js:358-361`, `src/combat.js:374-376`, `src/entities/zombie.js:100-104`, `src/entities/zombie.js:128`: the finisher only while it lies; rising, plain damage and nothing else
- `data/combat.json`: `finisher.mult`, `dual.offDamage`
- `src/archery.js:276`: an arrow or thrown spear gets no finisher bonus
- `src/entities/zombie.js:113`: the red number over the one struck
- `src/combat.js:279-284`: the camera kick
- `src/combat.js:376`, `src/entities/zombie.js:117`, `src/entities/zombie.js:190-198`: knockback over time, stopped by walls, none on a downed target
- `src/entities/zombie.js:140-161`, `src/combat.js:373-374`, `data/combat.json`, `data/items.json:9-10`: every hit a flinch, a hit in the wind-up a cancel, a stagger by chance; knockdown only on the mace, the halberd's thrust, and the shove (`shove.knockdown`; `blow.knockdownChance`, the default for every other weapon, 0)
- `src/combat.js:190-193`, `src/settings.js:17`, `data/items.json:9`: multi-hit, off by default; the thrust's `multiHit: false`
- `src/combat.js:390`: durability spent on a landed hit
- `src/main.js:1073`, `src/loop.js:67-75`: hit-stop off whenever the world is on the wire
- `src/main.js:1700-1702`: the kick answered only by the striker's client
- `src/player-controller.js:12-16`, `src/player-controller.js:28`, `src/player-controller.js:43-45`, `src/player-controller.js:55`, `src/combat.js:324-350`, `src/combat.js:414-423`: a guest's swing, guard, and shove predicted, recovery and slowed walk included; hits, the shove's push, and the draw on the host
- `src/net.js:890`, `src/net.js:1131`, `src/rules.js:44-48`, `src/game.js:215`, `src/game.js:282`: the host's rules travel in frames and the save
- `src/settings.js:12`, `src/settings.js:14`, `src/settings.js:16-18`, `src/settings.js:63-64`: Zombie aggro (on (game commit 2c70942)), Swing timer, Swing targets (on, in the Display group), Multi-hit, Show hit shapes defaults
- `src/combat.js:289-295`, `src/combat.js:438-452`, `src/combat.js:469-485`: the swing targets outline, following the hand the next click swings, and the hit shapes
- `src/render/entities.js:263`: no swing-target outline on one of the dead hidden by the dark (game commit 9d9a5b5)
- `src/settings.js:36`, `src/settings.js:76`, `src/game.js:77`, `src/game.js:93-96`: the Dev chest chosen at New world (game commit f2b8062)
- `src/rules.js:13-30`, `src/game.js:77-85`, `src/game.js:141-167`: Zombie aggro and Multi-hit the world's rules; the Starting population (game commit f2b8062)
- `src/sound-cues.js`, `data/sounds.json`: the sound it makes, heard as this client sees it (game #381 and #386, at 3c68f9c)
- `src/combat.js:319`, `src/combat.js:492-509`, `src/combat.js:112` (at 5eb40e6): the outline tests the next left-button swing (`nextSwingWeapon`), never the thrust (`altWeaponOf`); which one a two-mode weapon should show is filed for a ruling (game #503)
- `src/entities/zombie.js:126-136`, `src/entities/zombie.js:559-587` (at 5eb40e6): a blow it lives through calls the dead that see it; a killing blow none (game #504)

{{navbox weapons}}
