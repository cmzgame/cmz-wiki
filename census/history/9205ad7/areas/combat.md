> **A record, not kept up** (filed under `census/history/9205ad7/` by the sweep, 2026-10-16; game #87): the combat fact sheet of the first census, read from the game at `9205ad7` (2026-10-14). Its line numbers are that commit's; the live list is `census/discrepancies.md`, and a redone sheet goes beside the census, dated (`CLAUDE.md`, "The census").

# Census: combat, weapons, and the dead

Game commit `9205ad7` (9205ad7e7119ce705b06bab7a47d76974b2f5fbd, 2026-10-14). Code paths are under `.game/src/`, data under `snapshot/data/`.

---

## The three mouse roles

**Rule.** Left is the main hand: a swing, a stab, or with a bow the draw. A short tap of right (let go within 0.2 s) opens the actions menu where it was pressed, or cancels a bow draw in progress; holding right is the off hand's stance (raise the shield, brace the bow). Middle or Q is the main hand's other mode (the halberd's thrust, the spear's throw). Space is the shove.

**Numbers.**
- Tap length 0.2 s of sim time, counted in steps: `src/buttons.js:10` (`TAP_TIME`).
- The stance (guard, brace) starts on the press, not after the tap time: `src/player-controller.js:24`, `:42` read `offDown`.

**Code.** `src/buttons.js:24-44` (the roles each step), `src/buttons.js:47` (`spendTap`), `src/main.js:610-625` (tap: cancel draw, else Use cancel, else menu), `src/player-controller.js:17-55` (what each role does), Space at `src/player-controller.js:53`.

**With friends.** The roles are read on each client and travel as the input snapshot; the host runs the same `controlPlayer` for a guest. A guest's own swing and guard are predicted locally (`predict`); the hits, the shove, and the bow's draw run only on the host (`src/player-controller.js:13-16`, `:43`, `:53`). Inferred, not verified: a guest's right tap cancels its own replica's draw in `main.js:615`, but nothing in `net.js` sends the cancel, so the host's draw may still loose on the left release.

**Confidence.** Read in code (the guest-tap point inferred).

---

## The swing (melee hit test)

**Rule.** A click swings at once: the hit is decided on the click, and the arm's animation is only a picture of it. Whatever stands in the wedge in front of you (reach from your feet, arc from your chest toward the cursor) is hit, as long as you could see it: no hits through walls, shut doors, or shut shutters. Anything within about half a tile is always hit, whatever the angle, and a zombie drawn below you on screen gets a little extra reach. Melee only ever hits the dead: never villagers, never other players.

**Numbers.**
- Point blank 0.55 tiles, always hit: `src/combat.js:29` (`POINT_BLANK`).
- Down-screen slack up to 0.8 tiles, scaled by how far below over 48 px: `src/combat.js:30-31` (`BODY_SLACK`, `BODY_TOP`), applied `:206`.
- Body samples: 5 heights (2, 10, 18, 26, 34 px) times 3 columns (-10, 0, +10 px): `src/combat.js:33-36`.
- The arc is measured from the chest, 22 px above the feet: `data/tuning.json player.aimY` (22), `src/entities/player.js:91-94`.
- Reach is inclusive (a zombie exactly at `range` is hit): `src/combat.js:207`.
- Each weapon's `range` and `arc`: `data/items.json <id>.weapon.range`, `.arc` (see the weapon sections).

**Code.** `src/combat.js:201-219` (`inWedge`), `:166-176` (`targetsIn`, line of sight via `lineOfSight` from the player's feet to the zombie's feet), `:305-357` (`tryAttack`), `:186-188` (`canAct`: refused while carrying, climbing, during a timed action, or dead).

**Confidence.** Read in code.

---

## Swing cooldown, stamina, and the tired blow

**Rule.** Each weapon has its own recovery between swings; extra clicks during it do nothing. Every swing costs stamina. You are never locked out: a swing begun at zero stamina still lands, at half damage. Draining to zero leaves you winded (no sprint until stamina is back to 20).

**Numbers.**
- Cooldown = `data/items.json <id>.weapon.swing` (fists `data/combat.json fists.swing` 0.4): `src/combat.js:315`.
- Stamina cost = `.weapon.stamina`: `src/combat.js:313`.
- Half damage when stamina is already 0 at the click (`TIRED_DAMAGE` 0.5): `src/combat.js:48`, `:312`, `:345`. A swing that drains you to 0 still does full damage; the next one is halved.
- Winded until 20 stamina: `data/tuning.json player.sprintRecoverAt` (20), `src/entities/player.js:325`.
- Stamina 100, regeneration 22 a second: `data/tuning.json player.stamina`, `player.staminaRegen`.

**Code.** `src/combat.js:305-323`, `src/combat.js:413-420` (`updateCombat` counts the clocks down).

**Docs differ.** `docs/21-combat-buttons.md` and `CLAUDE.md` say "Combat numbers are data ... a ruling changes a number there, not code"; the tired multiplier, point blank, slack, the default knockdown chance, hit-stop, and the shield's push are code constants (`src/combat.js:29-48`, `:144`).

**Confidence.** Read in code.

---

## Damage, the finisher, and hit-stop

**Rule.** A hit takes the weapon's damage. A hit on one of the dead lying on the floor (down or getting up) is a finisher: one and a half times the damage, and no push, stagger, or knockdown. A landed blow briefly freezes the game (longer on a kill) and kicks the striking player's camera.

**Numbers.**
- Damage formula: `round(damage x (0.5 if tired) x (1.5 if finisher) x (0.35 if guard up) x offDamage if off hand)`: `src/combat.js:345`.
- Finisher x1.5: `data/combat.json finisher.mult` (1.5; code default 2 at `src/combat.js:42` is overwritten).
- Hit-stop 0.045 s, 0.09 s on a kill: `src/combat.js:43-44`, applied `:351`.
- Camera kick 3 px along the aim for 0.08 s: `src/combat.js:45-46`, `:255-260`.
- `WEDGE_TIME` 0.12 (`src/combat.js:47`) is declared but unused: the wedge is not drawn.

**Code.** `src/combat.js:329-356`, `src/entities/zombie.js:105-130` (a downed zombie takes damage and nothing else).

**With friends.** Hit-stop is switched off for everyone whenever the world is on the wire (host and guests): `src/main.js:880` `loop.setFreezeAllowed(!net.onTheWire())`, `src/loop.js:66-74`. The kick is an event (`kicked`) answered only by the striking player's own client: `src/main.js:1454-1456`.

**Confidence.** Read in code.

---

## Knockback

**Rule.** Every weapon hit pushes the zombie away along your aim, spread over a short moment and stopped by walls. A downed zombie is not pushed.

**Numbers.**
- Push in tiles = `data/items.json <id>.weapon.knockback`; pushed with chance `knockbackChance` (no item sets it, so always; fists `data/combat.json fists.knockbackChance` 1): `src/combat.js:179-181`, `:346`.
- Spread over 0.15 s through `moveCircle`: `data/tuning.json zombie.knockTime` (0.15), `src/entities/zombie.js:112`, `:158-165`.

**Code.** `src/combat.js:346-347`, `src/entities/zombie.js:157-165`.

**Confidence.** Read in code.

---

## Stagger (by weapon weight) and immunity

**Rule.** A hit may stop a zombie in its tracks for a moment; heavier weapons do it more often. After a stagger ends there is a short window in which it cannot be staggered again, so a stream of hits cannot hold it forever. A bite already under way is not cancelled by a stagger unless the weapon "interrupts" (the mace, the halberd's thrust, the thrown spear, the shove); the damage and push still land.

**Numbers.**
- Chance per hit = `data/items.json <id>.weapon.staggerChance` (torch 0.2, stick/plank/tools 0.3, hatchet/sword/spear stab 0.5, halberd sweep 0.7, mace 1, halberd thrust 1); the default when a source gives none (arrows) is `data/combat.json stagger.chance` (0.5).
- Duration: no item sets `weapon.stagger`, so every weapon staggers for `data/tuning.json zombie.stagger` (0.3 s): `src/entities/zombie.js:105` default, `:149`. The shove staggers 0.6 s (`data/combat.json shove.stagger`).
- Immunity = the stagger plus `data/combat.json stagger.immunity` (0.6 s): `src/entities/zombie.js:150`.
- `interrupts: true`: `data/items.json mace.weapon.interrupts`, `halberd.weapon.alt.interrupts`, `spear.thrown.interrupts`; the shove always (`src/combat.js:386`).

**Code.** `src/entities/zombie.js:142-152`, `:190-196`.

**Confidence.** Read in code.

---

## Knockdown and getting up

**Rule.** A hit may floor a zombie. On the floor it does nothing for two seconds, then gets up over just over half a second (the fall played backwards) and carries on. A knockdown cancels its bite and any breach. Any hit while it is down or rising is a finisher.

**Numbers.**
- Chance per hit = `data/items.json <id>.weapon.knockdown`, else `KNOCKDOWN_CHANCE` 0.3 (`src/combat.js:37`, `:343`). Only the mace sets it (0.6); fists 0 (`data/combat.json fists.knockdown`). So the sword, hatchet, stick, plank, torch, spear stab, both halberd modes, and every tool floor on 30 percent of hits.
- Arrows and thrown spears never floor (`src/archery.js:247` passes no knockdown).
- Down 2 s: `data/tuning.json zombie.downTime`; rising 0.6 s: `zombie.getUpTime`.
- After rising: back to chase if it was hunting and remembers a sighting, else idle: `src/entities/zombie.js:182`.

**Code.** `src/entities/zombie.js:131-141`, `:166-189`.

**Docs differ.** `docs/14-combat.md` (Hitting): "a mace doubles the chance" is true only as data (0.6 against the 0.3 default); `docs/21` (halberd) says the halberd has "no knockdown-finisher two-shot" though it floors on 30 percent like the others (it is not a two-shot only because 30 + 45 < 100).

**Confidence.** Read in code.

---

## The third-hit combo (switched off)

**Rule.** Not active. When on, the third hit on the same zombie within two seconds always floors it (never with fists or any weapon whose knockdown is 0). The hits are still counted with it off.

**Numbers.** `data/combat.json combo.enabled` (false), `combo.hits` (3), `combo.window` (2 s). Code default `enabled: true` at `src/combat.js:41` is overwritten by the data.

**Code.** `src/combat.js:332-342` (reads `loop.simTime()`).

**Confidence.** Read in code.

---

## Multi-hit

**Rule.** By default a swing (and the shove) hits only the nearest zombie in the wedge. With the Multi-hit setting on, it hits everything in the wedge; a weapon with `multiHit: false` (the halberd's thrust) always hits only the nearest.

**Numbers.** Setting `multiHit` default false: `src/settings.js:19`; rule object `src/rules.js:12` (initial true, refreshed from settings each step, `src/rules.js:34-37`). `data/items.json halberd.weapon.alt.multiHit` false.

**Code.** `src/combat.js:171-175`.

**With friends.** The rules are the host's and travel in frames when they change (`src/net.js:815`, `:1038`; `src/rules.js:23-25`); a world carries its rules in its save.

**Confidence.** Read in code.

---

## Swing targets outline and hit shapes (settings)

**Rule.** Two optional aids. Swing targets puts a green outline on exactly the zombies the next left click would hit (same test as the swing, ignoring the cooldown; works with fists; follows the off hand when it would take the click). Show hit shapes draws each nearby zombie's body sample dots, green when in the wedge (only with a weapon held, within 6 tiles). The wedge itself is never drawn.

**Numbers.** `src/settings.js:18` (`showSwingTargets` false), `:20` (`showHitShapes` false); nearby filter `src/combat.js:402`, 6 tiles at `:436`.

**Code.** `src/combat.js:399-410`, `:431-443`, `src/main.js:1000`, `:1105`.

**Confidence.** Read in code.

---

## The shove

**Rule.** Space shoves whatever is in front of you, with anything or nothing in your hands: no damage, a strong push, a sure stagger that interrupts a bite, and sometimes a knockdown. It ignores downed zombies, needs line of sight, and obeys the Multi-hit setting. It does not wear a weapon.

**Numbers.** All `data/combat.json shove.*`: range 1.0, arc 100, knockback 0.53, knockbackChance 1, stagger 0.6 s, knockdown 0.25, stamina 5, cooldown 0.45 s. Stagger chance forced to 1 and `interrupts` true in code: `src/combat.js:386`. Hit-stop 0.027 s (0.6 x 0.045) on contact: `src/combat.js:390`.

**Code.** `src/combat.js:376-394`.

**With friends.** Not predicted on a guest; the host performs it from the guest's snapshot (`src/player-controller.js:53`).

**Docs differ.** `docs/14-combat.md` acceptance check 5 says the shove pushes 1.6 tiles (the doc's own status notes it is now 0.53).

**Confidence.** Read in code.

---

## Fists

**Rule.** An empty main hand punches. Weak, short, never floors, and does not wear. An item with no weapon block in the main hand (the Book of Fire, Staff of Fire, throwing knife, throwing axe, food, and so on) also swings as fists.

**Numbers.** `data/combat.json fists`: damage 6, range 0.9, arc 100, swing 0.4 s, knockback 0.17, knockbackChance 1, stamina 3, knockdown 0, staggerChance 0.2. 17 punches kill a 100 hp zombie.

**Code.** `src/combat.js:50`, `:73-77` (`weaponOf` falls back to `FISTS` when the main item has no `weapon`).

**Confidence.** Read in code.

---

## Dual wielding and exposure

**Rule.** With a weapon in each hand, the left click swings the main hand when it is ready and the off hand when the main is still recovering, so fast clicking alternates. Each hand has its own cooldown. Any off-hand swing leaves you exposed for 2.5 seconds: a bite then does more from the front, much more from the sides, and from behind it is fatal. A red bar over your head shows the exposure. Any item with a weapon block counts in the off hand, including a torch, a plank, and the tools; a shield never does.

**Numbers.** All `data/combat.json dual.*`:
- `offDamage` 1 (off-hand blows at full damage).
- `window` 2.5 s of exposure, refreshed by each off-hand swing: `src/combat.js:320`.
- `lockout` 0.45: after any swing with two weapons, the other hand waits 0.45 of that swing's time: `src/combat.js:308`, `:319`.
- Bite multipliers: `front` 1.5 inside `arc` 100 degrees; `side` 2.5 inside `sideArc` 220 degrees; `behind` 100 (an 8 bite does 800): `src/combat.js:289-298`.

**Code.** `src/combat.js:105-110` (`offWeaponOf`), `:267-283` (`nextSwingWeapon`, `swingFromLeft`), `:289-298` (`exposedTo`), applied after the guard in `src/game.js:297`.

**Which hands may hold what.** `src/items.js:112-133`: `both` items need two empty hands; `either` goes main first; the spear (`noDual`) is refused beside any other weapon, but a torch is not a weapon for this rule (`isWeapon` excludes items with `fire`). A two-hander that pushes the off item into the bag remembers it and puts it back later (`player.offMemory`, `src/inventory.js:219-220`).

**With friends.** The cooldowns, the swing lock, and the exposure are fields on each player and travel in the light record exactly (`src/net.js:222` `EXACT`), so a guest's predicted swing is allowed or refused on the same step as the host's.

**Docs differ.**
- `docs/21` says the spear is "never" dual wielded; in code a spear with a torch in the off hand is allowed by `canHold` and the torch is then an off-hand weapon (`offWeaponOf` accepts it), so fast clicking with a spear and torch swings the torch and exposes you.
- `docs/21` says "a sword with a torch in the off hand is not dual wielding and costs nothing"; true only at a click pace the sword keeps: clicking faster swings the torch and opens the 2.5 s exposure.

**Confidence.** Read in code.

---

## The shield and the guard

**Rule.** With a shield in the off hand, holding right raises the guard (it also holds with the bag or a menu open). A bite from inside the front arc does nothing and staggers the biter; from the sides it does half; from behind it lands whole. Each block (front or side) costs stamina; with too little the guard breaks, the bite lands whole, your stamina goes to zero and you are winded. No stamina comes back while the guard is up; you walk at under half speed and cannot sprint. You can still attack from behind the guard, at 35 percent damage (swing, stab, or throw).

**Numbers.** All `data/items.json shield.shield.*` unless noted:
- `arc` 100 degrees (front, total block); `sideArc` 220 degrees (side, `sideThrough` 0.5 of the damage).
- `stamina` 5 per block; broken when stamina is under 5: `src/combat.js:134`.
- `stagger` 0.5 s on a front block, with a push of 0.25 tiles (`sh.push`, not in data, code default at `src/combat.js:144`). A shield stagger ignores immunity and always cancels the bite's state and resets the zombie's bite cooldown: `src/entities/zombie.js:75-85`.
- `moveMult` 0.45 walking: `src/player-controller.js:52`.
- `attackMult` 0.35 on your own blows and throws: `src/combat.js:155-158`, `:345`, `src/archery.js:560`.
- Hit-stop 0.027 s and a kick on a block: `src/combat.js:145-146`. Flash 0.14 s gold, 0.35 s red when broken: `:138`, `:147`.
- No regeneration while blocking: `src/entities/player.js:332-334`; no sprint: `:328`.

**Code.** `src/combat.js:113-151`, `src/player-controller.js:23-24`, `src/game.js:294-302` (the bite goes through `guardAgainst`, then `exposedTo`). A blocked bite (0 damage) opens no wound and gives no infection (`src/bleed.js:59`, `src/infection.js:48`).

**With friends.** `blocking` is in every character record (`src/net.js:675`); a guest's guard is predicted at once and applied by the host to the bite (`src/game.js:297`).

**Docs differ.** `docs/21` "Numbers that are Claude's picks" and step 3 still list a 150-degree guard, 15 percent through, 4 stamina, walk 0.75 (superseded in the same doc by the second pass; the code matches the second pass).

**Confidence.** Read in code.

---

## The bow

**Rule.** With the bow (both hands) the left button draws: hold, then release to shoot. The cursor sets the direction and where a full draw lands (read at chest height, so a cursor on a body aims at its feet); a partial draw falls short along the same line, quickly at first and slowly near full. The shot is fixed at release: the arrow travels along the ground at a steady speed with the arc drawn above it, and only hurts the nearest of the dead within half a tile of where it comes down (never villagers, never players, never the archer). Holding right braces: the draw is much faster but you walk at a crawl. A right tap during a draw cancels it and keeps the arrow. Sprinting, opening a panel, climbing, or a pause cancels a draw. A release before 15 percent of a draw is dry (nothing flies, nothing spent). Arrows come from the bag or belt; with none, "No arrows."

**Numbers.**
- Free draw 1.4 s: `data/items.json bow.bow.drawTime` (overrides `tunables.drawTime` 0.9, `src/archery.js:34`).
- Braced draw 0.6 s: `data/items.json bow.bow.braceDrawTime`; rate = 1.4 / 0.6 = 2.33x (`src/archery.js:602-603`; `braceDrawRate` 1.5 at `:39` applies only to a bow without `braceDrawTime`).
- Damage 38 at full draw, scaled by `0.4 + 0.6 c`: `data/items.json bow.bow.damage`, `src/archery.js:247`. Knockback 0.2: `bow.bow.knockback`. Stagger chance 0.5 (the default), stagger 0.3 s, never a knockdown, no finisher bonus on a downed target.
- From `src/archery.js:27-52` (`tunables`, code constants): range 22 tiles, speed 16 tiles/s, arc peak 8 to 150 px by distance, launch height 30 px, ramp 2 (`f(c) = 1 - (1 - c)^2`), minDraw 0.15, minDistance 1, walk while drawing 0.45 (`drawSpeed`), walk braced 0.2 (`braceMove`), recovery 0.22 s, hit radius 0.5, chest lift 22 px.
- Obstacles (scanned once at release): walls stop below 80 px unless an open/broken door below its lintel or an open/broken unboarded window between sill and top; boards always stop; trunks and round props below 40 px; solid tile props below their frame height up to 50 px: `src/archery.js:141-202`. A stopped arrow lands at the obstacle's foot and hits nothing.
- Pose by draw: below 0.35 nocked, below 0.8 drawing, else full: `src/archery.js:614`.
- Wear: 100 shots: `data/items.json bow.shots` (1/100 per loosed arrow; at the last, the bow leaves the hand): `src/archery.js:565-573`, `src/items.js:39-41`.
- Aim guide (landing marker and dotted line): setting `aimGuide` default true, `src/settings.js:17`.

**Code.** `src/archery.js:468-477` (`launcherOf`), `:522-575` (begin, cancel, release), `:578-617` (`updateDraw`), `:88-129` (`shoot`), `:234-261` (`land`), `:273-285` (`bodyAt`); walking speed `src/player-controller.js:52`.

**With friends.** The draw, recovery, and marker live on each player; a guest's draw fills on the host from its held button and looses at the ground point it sent (`aimAt`, `src/archery.js:491-492`). Arrows in flight are sent each frame and drawn from the host's list on a guest (`src/archery.js:299-303`). The marker is computed on the host for a guest (`src/archery.js:608`).

**Docs differ.**
- `docs/21` (Bow bullet) says braced is "half as fast again (0.9 s becomes 0.6 s, `braceDrawRate` 1.5)"; the bow's own `drawTime` 1.4 and `braceDrawTime` 0.6 make it 2.33x.
- `docs/20` (The control) says walking while drawn is half speed, `drawSpeed` 0.5, and `docs/21` ("the bow's two draws") says "free-draw walking 0.5"; code is 0.45 (`src/archery.js:37`), which `docs/21`'s guard second pass also states.
- `docs/20` says "a tunable `drawStamina` per second of hold is there for later": no such tunable exists.
- `docs/20` step 3 says "half the arrows that hit break"; the code has no arrow break (the doc's later paragraph says this was removed).

**Confidence.** Read in code.

---

## Arrows and spears lodging, and getting them back

**Rule.** An arrow or thrown spear that hits one of the dead stays in the body (stacking) and comes out in the body's loot when it is killed and searched; what does not fit falls at its feet. A miss, or a shot stopped by a wall or tree, lies where it came down as a floor item that E picks up.

**Numbers.** Arrows stack 20 (`data/items.json arrow.stack`). Lodged items go into the body's 6x6 grid on first search: `src/entities/character.js:141`, `:157-161`.

**Code.** `src/archery.js:244-259`, `src/entities/character.js:44`, `:139-162`.

**With friends.** Landed items and lodged counts travel in chunk deltas and character records.

**Confidence.** Read in code.

---

## Durability by kills

**Rule.** Weapons wear by landed hits, sized so a weapon lasts about its listed number of kills against a standard 100 hp zombie. A miss costs nothing; a swing that hits several wears once per target. At full wear the weapon is gone from the hand with a word. The bow wears per arrow loosed. The torch wears too (5 kills' worth) and breaks like any weapon. Fists and the shove never wear.

**Numbers.**
- Hits per kill = `ceil(100 / damage)` using `data/tuning.json zombie.hp` (100): `src/items.js:27-31`.
- Wear per hit = `1 / (kills x hitsPerKill)`: `src/items.js:33-37`. The halberd's thrust and an off-hand swing wear at the weapon's own per-hit rate (computed from the base `weapon.damage`).
- Landed hits to break (computed): torch 65 (13 x 5), plank 35, stick 40, hatchet 80, sword 180, mace 120, halberd 320, spear stab 100, pickaxe 25, hoe 50, scythe 30, shovel 40, knife 45, hammer 35. Bow: 100 shots.

**Code.** `src/combat.js:354`, `:362-372` (`wearWeapon`, emits `weaponBroke`), `src/archery.js:564-573`. A thrown spear carries its wear with it (the entry is copied, `src/archery.js:557`).

**With friends.** Wear is on the entry (`entry.wear`) and travels with the hands in the heavy record.

**Docs differ.** `docs/21` Status "Not built" list still has "weapon durability (one-way, hits only, evaporates; waits for the smith)" (marked as history at the top of the same doc).

**Confidence.** Read in code; break counts computed.

---

## Weapon: Torch (`torch`)

**Rule.** A light first: held in either hand it lights your way and draws the dead's eye at night. It is also a weak weapon, and in the off hand it counts as one (see dual wielding).

**Numbers.** `data/items.json torch.weapon`: damage 8, range 1.1, arc 90, swing 0.5, knockback 0.13, stamina 3, staggerChance 0.2, kills 5 (65 hits), knockdown 0.3 (default). 13 hits to kill. Light: `torch.fire.radius` 3.

**Code.** as the swing.

**Confidence.** Read in code.

## Weapon: Stick (`stick`)

**Rule.** The basic found weapon (dead bodies' pockets, the wild).

**Numbers.** `data/items.json stick.weapon`: damage 14, range 1.2, arc 90, swing 0.5, knockback 0.2, stamina 4, staggerChance 0.3, kills 5 (40 hits). 8 hits to kill. In `data/loot.json body` (weight 2 of 8) and `wild`.

**Confidence.** Read in code.

## Weapon: Plank (`plank`)

**Rule.** A building material that also swings; part of the starting bag.

**Numbers.** `data/items.json plank.weapon`: damage 16, range 1.2, arc 100, swing 0.55, knockback 0.22, stamina 5, staggerChance 0.3, kills 5 (35 hits). 7 hits to kill.

**Confidence.** Read in code.

## Weapon: Hatchet (`hatchet`)

**Numbers.** `data/items.json hatchet.weapon`: damage 30, range 1.2, arc 80, swing 0.55, knockback 0.27, stamina 6, staggerChance 0.5, kills 20 (80 hits). 4 hits to kill. Chest loot weight 1.

**Confidence.** Read in code.

## Weapon: Sword (`sword`)

**Numbers.** `data/items.json sword.weapon`: damage 34, range 1.35, arc 100, swing 0.5, knockback 0.27, stamina 6, staggerChance 0.5, kills 60 (180 hits). 3 hits to kill. Chest loot weight 1.

**Confidence.** Read in code.

## Weapon: Mace (`mace`)

**Rule.** The strongest one-hander: always staggers, interrupts a bite, and floors twice as often.

**Numbers.** `data/items.json mace.weapon`: damage 38, range 1.2, arc 80, swing 0.65, knockback 0.33, stamina 8, staggerChance 1, interrupts true, knockdown 0.6, kills 40 (120 hits). 3 hits to kill (2 with a knockdown: 38 + 57 finisher = 95, so still 3 unless two floors). `hands` either.

**Docs differ.** `docs/14-combat.md` weapons table: "mace ... `hands: main`"; data says `either`.

**Confidence.** Read in code.

## Weapon: Throwing spear (`spear`)

**Rule.** Main hand only, never beside another weapon (a shield or torch is fine). Left stabs (a narrow, long reach); middle or Q throws it with the bow's draw mechanics: the spear itself flies and your hand is empty. A full-draw throw kills a fresh zombie outright. A thrown spear breaks half the time when it comes down (hit or miss) and is then gone; otherwise it lies where it fell or lodges in the body it hit.

**Numbers.**
- Stab `data/items.json spear.weapon`: damage 30, range 1.9, arc 40, swing 0.6, knockback 0.25, stamina 6, staggerChance 0.5, kills 25 (100 stabs), knockdown 0.3 (default).
- Throw `spear.thrown`: range 6.5, speed 14, arcMin 6, arcMax 70, z0 42, drawTime 0.55, damage 114 (x `0.4 + 0.6 c`; a draw under about 0.94 does less than 100), knockback 0.45, staggerChance 1, interrupts true, breakChance 0.5 (rolled on every landing, `src/archery.js:245`). No brace for a throw (`src/player-controller.js:42`). Walk 0.45 while drawing.
- `noDual: true`, `hands: "main"`.

**Code.** `src/archery.js:475`, `:556-559`, `src/player-controller.js:39-45`.

**Confidence.** Read in code.

## Weapon: Halberd (`halberd`)

**Rule.** Two-handed polearm (no shield, no torch). Left is a wide, long, slow sweep; middle or Q is a narrow thrust at the end of the pole that always staggers, interrupts, and hits only the nearest. The two share one cooldown.

**Numbers.**
- Sweep `data/items.json halberd.weapon`: damage 30, range 2.2, arc 80, swing 0.95, knockback 0.3, stamina 12, staggerChance 0.7, kills 80 (320 hits).
- Thrust `halberd.weapon.alt` (laid over the sweep's numbers, `src/combat.js:97-101`): damage 40, range 2.9, arc 12, swing 1.3, knockback 0.45, stamina 15, staggerChance 1, interrupts true, multiHit false, style `thrust` (its own animation `attack_alt`, `src/combat.js:322`). Knockdown 0.3 (default, inherited).
- Shared `attackCooldown`: `src/combat.js:306`, `:315`.

**Docs differ.** `docs/21` (halberd bullet) first quotes reach 2.3, swing 0.8, stamina 8 and thrust 3.0 / 1.1 / 10 before the tuning; the "Its second mode" paragraph says "0.8 s" for the sweep; the data has 2.2 / 0.95 / 12 and 2.9 / 1.3 / 15 (the doc's own later sentences agree with the data).

**Confidence.** Read in code.

## Weapons: the tools (pickaxe, hoe, scythe, shovel, knife, hammer)

**Rule.** Tools for later verbs (mine, till, harvest, dig, butcher, build) that also swing as poor weapons, all lasting five kills.

**Numbers.** `data/items.json <id>.weapon`, all range 1.2, arc 80, swing 0.6, knockback 0.2, stamina 6, staggerChance 0.3, kills 5; damage pickaxe 20, hoe 10, scythe 18, shovel 14, knife 12, hammer 16 (hits to kill 5, 10, 6, 8, 9, 7).

**Confidence.** Read in code.

## Not weapons yet: Book of Fire, Staff of Fire, throwing knife, throwing axe

**Rule.** Holdable art with no weapon, bow, or thrown block: in the main hand they punch as fists. The knife and axe do not throw.

**Numbers.** `data/items.json book_of_fire.note`, `staff_of_fire.note`, `throwing_knife.note`, `throwing_axe.note` ("art only for now").

**Confidence.** Read in code.

---

## The dead: body and health

**Rule.** Each of the dead has 100 health, walks at a shamble, and is dressed from one of ten wardrobes. Their bodies push apart from each other.

**Numbers.** `data/tuning.json zombie.*`: hp 100, speed 1.0 tiles/s (shallow water slows them, `src/entities/zombie.js:329`), radius 0.3, separation 0.55, repath 0.3 s, repathFailBackoff 1.0 s, stuckTime 1.5 s (`src/entities/movement.js:65-70`). Wardrobes: `data/wardrobes.json zombie` (10 entries, each pockets 3x2 and loot `body`).

**Code.** `src/entities/zombie.js:36-71`, `src/tuning.js:9-40`.

**Confidence.** Read in code.

---

## The dead: how many and where

**Rule.** The valley has 40 placed dead; every wild chunk grown beyond the authored map brings 0 to 2 more. Only the dead within 40 tiles (a square box) of some player think; the rest stand still.

**Numbers.** 40 authored (census `authoredDead`); `data/maps/valley.json wild.zombiesPerChunk` [0, 2] per 16x16 chunk (`src/map.js:16`, `:938-947`); active box `data/tuning.json world.activeTiles` (40), `src/game.js:410-414`.

**Confidence.** Read in code.

---

## The dead: sight

**Rule.** With Zombie aggro on, the dead see you by your own rule (a clear line), out to 8 tiles in full light and about a third of that when you stand unlit. They look a few times a second. With Zombie aggro off they never see you and never hunt you (they wander, and a hit on one does not make it hunt).

**Numbers.** Range = `sight x (sightDarkFraction + (1 - sightDarkFraction) x light at the player)` = 8 x (0.35 + 0.65 L): `data/tuning.json zombie.sight`, `zombie.sightDarkFraction`; checked every `zombie.sightCheck` 0.25 s (start offset random). Setting `zombieAggro` default false: `src/settings.js:12`.

**Code.** `src/entities/zombie.js:232-237` (`canSee`), `:255-266`, `:393-403`.

**With friends.** Each of the dead picks the nearest player it can see (fallen players draw no one); with none seen it falls back to the nearest living player for the chase target: `src/entities/zombie.js:239-266`, `:437`.

**Confidence.** Read in code.

---

## The dead: noticing flames at night

**Rule.** At night, once a zombie has not seen a player for 8 seconds, it can be drawn by any lit flame in its line of sight, from far away in full dark. A carried torch is a sighting of its carrier; a torch on the belt is seen from half as far, two torches from farther.

**Numbers.** Range = `flameRange x nightFactor x strength` = 12 x nf x s: `data/tuning.json zombie.flameRange` (12), `zombie.flamePatience` (8 s); strength 1 in hand, `world.twoTorches` 1.35 for two, `world.beltLight` 0.5 on the belt (`src/game.js:561`). Needs Zombie aggro on (`src/entities/zombie.js:296`).

**Code.** `src/entities/zombie.js:295-311`, `:417-429`.

**Confidence.** Read in code.

---

## The dead: memory and search

**Rule.** The dead know only where they last saw you. They walk to that spot; arriving without seeing you (or finding no path), they search around it for ten seconds with short walks, then give up and go idle. Nothing tells them where you are through a wall. A hit tells a hunting zombie where the blow came from (an arrow: where it was shot from).

**Numbers.** `data/tuning.json zombie.searchTime` (10 s), `zombie.searchRadius` (3 tiles), `zombie.arrived` (0.6 tiles); pauses between search walks 0.8 to 2.0 s (`src/entities/zombie.js:598`, code). Idle wanderers: walks within 3 tiles in their room (`src/entities/zombie.js:449`), standing `zombie.wanderIdleMin` 1.5 to `wanderIdleMax` 4 s.

**Code.** `src/entities/zombie.js:337-353`, `:468-509`, `:577-602`; the blow's `from`: `:124-129` (only when `zombieAggro` is on).

**Confidence.** Read in code.

---

## The dead: the bite

**Rule.** A zombie that can see you and is within reach starts a bite; at the bite's active frame it lands if you are still close and in its line of sight. Then it waits before the next. A bite goes through your guard and exposure, then may open a bleeding wound and may infect you.

**Numbers.** `data/tuning.json zombie.contact` (0.7 tiles to start; lands within 0.9, `src/entities/zombie.js:606`), `zombie.damage` (8), `zombie.cooldown` (1.2 s after the animation ends). The bite animation is 4 frames at 12 fps, active on frame 1 (`data/poses.json zombie`), so one bite every about 1.53 s (inferred). Bleed: `data/combat.json bleed.chance` 0.5; infection: `infection.chance` 0.2 (both only when damage got through). Player hp 100 (`data/tuning.json player.hp`): 13 unguarded bites.

**Code.** `src/entities/zombie.js:468-483`, `:603-616`, `src/game.js:294-302`, `src/entities/player.js:67-71`.

**With friends.** The bite names its victim; bleeding and infection are the victim's; the words ("You are bleeding...") show only on the victim's client (`src/main.js:1443-1447`).

**Confidence.** Read in code (cycle time inferred).

---

## The dead: breaching openings and climbing windows

**Rule.** When a hunting zombie cannot path to where it last saw you, it goes to the nearest opening of the room it wants into (or the room it is shut in) and hits it: boards on its side first, then the door or shutters, then the boards on the far side. A broken door is a doorway forever; broken shutters are an open hole. At an open or broken, unboarded window it climbs through, slowly, unable to bite until through. The dead never open doors and never break plain walls.

**Numbers.** `data/tuning.json zombie.breachDamage` (5 per hit, on the bite cooldown), `zombie.breachReach` (1.1 tiles), `zombie.climb` (1.6 s; the player's `player.climbTime` 0.9). Opening health: board 40, door 100, shutters 60, 3 boards per side: `src/map.js:431-434`. So a bare door takes 20 hits, shutters 12, each board 8.

**Code.** `src/entities/zombie.js:489-505` (start), `:510-576` (breach, breachHit), `:372-388` (the climb), `src/map.js:536-581`, `:598-622`. A hit on a climbing zombie ends the climb at the nearer end (`src/entities/zombie.js:92-99`, `:109`).

**Docs differ.** `docs/09-openings.md` says "If the goal moves to another room or it sees the player, it drops the breach and chases"; the code drops it on sight only when the target is also within bite reach (`src/entities/zombie.js:513`), otherwise only when the goal is no longer across that opening.

**Confidence.** Read in code.

---

## The dead: the groan

**Rule.** Now and then each of the dead says "Braaaains" in a speech bubble (not while on the floor; corpses are silent).

**Numbers.** `data/tuning.json zombie.groanText`, `zombie.groanMin` 20 s, `zombie.groanMax` 60 s (first groan at a random time within 60 s).

**Code.** `src/entities/zombie.js:48`, `:366-370`.

**Confidence.** Read in code.

---

## Death, corpses, and their loot

**Rule.** At zero health a zombie falls, and once the fall has played its body becomes a still picture that can be searched like a chest. The first search takes a second and rolls its pockets; everything on it (worn clothes, hands, pockets, lodged arrows and spears) is laid out on the body's own grid, and the body is redrawn as you strip it. Anything that does not fit falls at its feet. A fallen player's body can be searched the same way.

**Numbers.** Search time 1.0 s first time (`src/interact.js:43` `SEARCH_TIME`); body grid 6x6 (`src/entities/character.js:141`); pockets 3x2 from the wardrobe; loot table `data/loot.json body`: rolls 0 to 2 from nothing (2), apple x1-2 (2), bread (1), waterskin (1), stick (2). The table's own `grid` [3, 3] is not used for bodies (the wardrobe's pockets are).

**Code.** `src/entities/zombie.js:113-123`, `:357-364`, `src/entities/character.js:139-185`, `src/interact.js:1333-1355`, `src/game.js:524-535` (corpses leave the thinking list).

**Docs differ.** `docs/21` lists "bandages in the loot tables and from the dead" as not built: still true (no bandage in `body`).

**Confidence.** Read in code.

---

## The dead hunting villagers (setting)

**Rule.** With "Zombies attack villagers" on, a zombie that sees no player hunts the nearest villager it can see (same light-scaled sight), with the same memory, and bites them. A villager has 100 health and flinches when bitten; one bitten to death gets up as one of the dead in what they wore. Players are always preferred when in sight.

**Numbers.** Setting `zombiesAttackVillagers` default false: `src/settings.js:13`. Villager hp 100 (`src/entities/villager.js:28`), flinch `data/tuning.json villager.hurtTime` 0.35 s; 13 bites. A turned villager lies 2 s then rises (`src/entities/villager.js:121-136`).

**Code.** `src/entities/zombie.js:268-289` (`nearestPrey`), `:404-416`, `:608`; `src/entities/villager.js:100-115`; `src/game.js:520-523`.

**Docs differ.** The setting reads as "they hunt villagers too, you first" (`src/settings.js:46`), implying it adds to Zombie aggro; in code `nearestPrey` checks only `zombiesAttackVillagers`, not `zombieAggro`, so with aggro off and this on the dead ignore you but still hunt and kill villagers.

**Confidence.** Read in code.

---

## Combat testing (setting)

**Rule.** A testing mode, read at page load: removes the scattered and wild trees and stands forty extra dead on open ground at fixed places at least five tiles from the spawn. It leaves the aggro settings alone.

**Numbers.** Setting `combatTesting` default false (`src/settings.js:15`). Trees: the map's `scatter` emptied and wild density set to [0, 0] (`src/main.js:1189-1192`; authored placements other than scatter are kept, inferred). Dead: 40 within tiles x 1-30, y 1-30, outside rooms, 2 tiles apart, by a fixed generator seed 90210 (`src/game.js:119-132`).

**Docs differ.** The setting's description and `docs/21` say the forty stand "about the square"; on the valley (the default map, spawn near 98, 212) tiles 1 to 30 are a far corner, so they stand about two hundred tiles away (`TODO.md` line 103 notes this as owed).

**Confidence.** Read in code.

---

## The Developer Chest and giveKit

**Rule.** With the Dev chest setting on (the default), a purple chest stands beside the spawn on any map holding a fixed kit of every weapon. From the console, `__game.giveKit()` puts a Developer Bag on your back with the weapons.

**Numbers.** Setting `devChest` default true, read at load (`src/settings.js:31`); placed at the nearest free tile to spawn + (1, 2) (`src/game.js:80-83`). Contents `data/loot.json dev_kit.fixed`: 2 Developer Bags, sword, hatchet, mace, halberd, stick, 2 spears, shield, bow, 40 arrows, 2 torches, 5 bandages, book, staff, 100 throwing knives, 100 throwing axes (no plank or tools). `giveKit` (`src/dev.js:125-140`): sword, hatchet, mace, halberd, stick, 3 spears, shield, bow, 40 arrows, 5 bandages, book, staff, 100 knives, 100 axes.

**Docs differ.** The data note `data/loot.json dev_kit.note` says "the combat-testing chest by the well"; the code places it by the spawn. `docs/21` "To test it" says two tiles south-east of the well (tile 14, 17) with three spears (its Status corrects both).

**Confidence.** Read in code.

---

## The swing timer and the bars over heads (interface)

**Rule.** Two gold bars at bottom centre fill over each hand's recovery (a setting, on by default); a red bar over your head drains through an exposure; your own health bar shows over you once hurt; the dead show a health bar while hurt (behind a canopy only within 3.5 tiles).

**Numbers.** `swingTotal`/`offSwingTotal` set at `src/combat.js:316`; `src/ui/zombie-bars.js:19` (`NEAR` 3.5).

**Code.** `src/ui/swing-timer.js`, `src/ui/zombie-bars.js`.

**Confidence.** Inferred from the names and a partial read; the timer's own file was not read in full.

---

## Candidate wiki pages

- **Combat** — the overview: the mouse roles, the swing, stamina, the finisher, the settings that change it.
- **Controls in combat** — left, right tap and hold, middle or Q, Space.
- **Melee** — the wedge, reach, arc, point blank, line of sight, multi-hit.
- **Stagger and knockdown** — chances by weapon, immunity, interrupts, getting up, finishers.
- **Shove** — the Space move and its numbers.
- **Dual wielding** — alternating hands and the exposure price.
- **Shield** — the guard's arcs, stamina, breaking, attacking from behind it.
- **Bow** — the draw, the brace, the arc, landing hits, obstacles, recovering arrows.
- **Arrow** — the ammunition, lodging, stacks.
- **Throwing spear** — the stab and the throw, breakage.
- **Halberd** — the sweep and the thrust.
- **Sword**, **Mace**, **Hatchet**, **Stick**, **Plank**, **Torch**, **Fists** — one page each with the weapon infobox.
- **Tools as weapons** — pickaxe, hoe, scythe, shovel, knife, hammer.
- **Weapon durability** — kills, hits per kill, the break table, the bow's shots.
- **Weapons table** — every weapon's numbers side by side (generated from data).
- **The dead** — health, speed, wardrobes, the active box.
- **Zombie behaviour** — sight, light, flames, memory, search, the bite, the groan.
- **Breaking in** — openings, boards, doors, shutters, climbing.
- **Corpses and looting the dead** — searching, the body loot table, lodged items.
- **Bites, bleeding, and infection** — what a bite does (shared with the health area).
- **Villagers and the dead** — the hunting setting, turning.
- **Combat settings** — Zombie aggro, Zombies attack villagers, Multi-hit, Swing targets, Show hit shapes, Bow aim guide, Combat testing, Dev chest.
- **Developer Chest** — the testing kit.

---

## Discrepancies

- `CLAUDE.md` and `docs/21`: "Combat numbers are data"; several are code constants (tired 0.5, point blank 0.55, slack 0.8, default knockdown 0.3, hit-stop, shield push 0.25 in `src/combat.js`; every bow and throw tunable in `src/archery.js:27-52`; tap 0.2 in `src/buttons.js`).
- `docs/14` weapons table: mace `hands: main`; data `either`.
- `docs/14` (Hitting): every hit staggers 0.3 s and "a blow cancels a bite begun"; now by `staggerChance`, and a bite is cancelled only by `interrupts` or a knockdown (the doc's status notes it).
- `docs/14` acceptance 5: shove pushes 1.6 tiles; data 0.53 (status notes it).
- `docs/14` As built: multi-hit "default on"; setting default is off (status notes it).
- `docs/21` halberd: "no knockdown-finisher two-shot" framing, but the halberd floors on 30 percent of hits by the default.
- `docs/21`: the spear is "never" dual wielded; a spear with a torch makes the torch an off-hand weapon with exposure.
- `docs/21`: "a sword with a torch in the off hand ... costs nothing"; fast clicking swings the torch and exposes you.
- `docs/21` Bow bullet: brace rate 1.5 (0.9 s to 0.6 s); actual 1.4 s to 0.6 s, 2.33x.
- `docs/21` "the bow's two draws" and `docs/20` The control: free-draw walking 0.5; code 0.45.
- `docs/20`: a `drawStamina` tunable "is there for later"; it does not exist.
- `docs/20` step 3: half the arrows that hit break; no arrow break in code (removed per the doc's later paragraph).
- `docs/21` "Numbers that are Claude's picks" and step 3: guard arc 150, 15 percent through, 4 stamina, walk 0.75; data 100/220, 0.5 side, 5 stamina, 0.45.
- `docs/21` halberd: the sweep quoted as 0.8 s / reach 2.3 / 8 stamina and the thrust as 3.0 / 1.1 / 10 in places; data 0.95 / 2.2 / 12 and 1.3 / 2.9 / 15.
- `docs/21` Status not-built list: weapon durability; it is built (flagged as history in the same doc).
- `docs/09`: the breach is dropped when the zombie sees the player; code drops it on sight only within bite reach.
- `src/settings.js:46` label and `docs/19` framing ("villagers too, you first"): villager hunting works with Zombie aggro off, since `nearestPrey` ignores `zombieAggro`.
- `combatTesting` description and `docs/21`: forty dead "about the square"; on the valley they are placed in tiles 1 to 30, far from the spawn.
- `data/loot.json dev_kit.note`: the chest is "by the well"; code places it by the spawn. `docs/21` "To test it": tile 14, 17 and three spears; the chest holds two (giveKit gives three).
- `docs/14` says a downed target's hit is a finisher; true for melee only: arrows and thrown spears on a downed zombie do plain damage (`src/archery.js:247`, no finisher multiplier). Not stated as a difference in `docs/20`, which only says a downed zombie can be hit.
