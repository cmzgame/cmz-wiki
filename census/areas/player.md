# Census: the player and their needs

Game commit `9205ad7` (9205ad7e7119ce705b06bab7a47d76974b2f5fbd, 2026-10-14, origin/main).

Conventions. "Sim seconds" are seconds of the world's own clock (`loop.simTime()`); at normal speed they are real seconds. One game hour is 30 sim seconds and one game day is 720 (`src/clock.js:5` `DAY_LENGTH = 720`, `src/map.js:84` `HOUR_SECONDS = 30`). A new world starts at 08:00 (`src/clock.js:18` `START_HOUR = 8`). The data file `data/tuning.json` is laid over the defaults in `src/tuning.js` at boot (`src/tuning.js:90`), so the data values are the live ones.

---

## The Survival setting (the master switch for needs)

**Rule.** With Survival on (the default), hunger, thirst and tiredness drain and the needs moodles move. With it off, all three are held at full every step, so their moodles stay green. Survival is a world rule: the host's value applies to everyone in the world.

**Numbers.**
- Default on: `src/settings.js:22` `survival: true`. Settings screen choices "On (hunger, thirst, tiredness)" / "Off (no needs)": `src/settings.js:55`.
- The sim reads it as `rules.survival`, refreshed from settings each step: `src/rules.js:13`, `src/rules.js:34-37`.

**Code.** `src/entities/player.js:120-126`: off resets hunger, thirst and tired to their maxima and returns early.

**Surprise.** That early return also skips health regeneration (`src/entities/player.js:133-138` comes after it). **With Survival off, health never regenerates.** Starvation and dehydration damage are skipped too. Bleeding and infection still apply because they live in other modules.

**With friends.** The rules ride in the save and in frames. A guest uses the host's rules (`src/rules.js:21-25`). A server world's owner can toggle Survival on the Owner screen (`src/ui/screens.js:682`).

**Docs differ.**
- `src/rules.js:13` has the comment `survival: false, // hunger and thirst drain`, but the effective default comes from settings and is true.
- `TODO.md:56` (history) says "Survival setting ... off by default". That was superseded by `docs/30` step 2.

**Confidence.** Read in code.

---

## Health

**Rule.** You have 100 health, shown as a bar at top left with "current / max". You lose it to bites, bleeding, starving and dehydration. You get it back slowly while fed and watered, and faster asleep. At 0 you die.

**Numbers.**
- Max health: 100, `data/tuning.json player.hp`.
- Bar colour: green above 50%, yellow above 25%, red otherwise. The text is `ceil(hp) / maxHp`. Both at `src/ui/hud.js:90-93`.
- A bite does 8 damage, `data/tuning.json zombie.damage`, with 1.2 s between bites (`zombie.cooldown`), before the shield guard and dual-wield exposure (`src/game.js:294-301`).
- Starving (hunger 0) costs 1.5 hp/s, `data/tuning.json player.starveDamage`. From full health that kills in about 67 s.
- Dehydrated (thirst 0) costs 2 hp/s, `player.dehydrateDamage`. That kills in 50 s, or about 29 s when starving as well.
- Food does not heal: `eat()` adds `def.heal` (`src/entities/player.js:102`), but no item in `data/items.json` has a `heal` field.

**Code.**
- `damagePlayer`: `src/entities/player.js:67-71`. It plays the `hurt` animation unless the blow is lethal.
- Need damage: `src/entities/player.js:131-132`.

**Confidence.** Read in code.

---

## Health regeneration

**Rule.** Health returns on its own only when all of these hold:
- You are not "Hungry" or worse, and not "Thirsty" or worse.
- No wound is bleeding.
- You are not at "Falling asleep" tiredness.

It returns four times faster asleep.

**Numbers.**
- Awake: 1 hp per sim minute, `data/tuning.json player.healthRegenPerMinute`. That is 1 hp per 2 game hours.
- Asleep: 4 hp per sim minute, `player.sleepRegenPerMinute`. A full 8-hour sleep (240 sim s) gives at most 16 hp.
- Conditions:
  - hunger stage below 2, which means hunger ≥ 35
  - thirst stage below 2, which means thirst ≥ 35
  - bleed stacks = 0
  - tired stage below 4, which means tired > 0

  All at `src/entities/player.js:134-135`.
- Only runs while Survival is on (see above).

**Code.** `src/entities/player.js:133-138`.

**Docs differ.** `docs/30-the-big-pass-spec.md` §3.4 says it "Regenerates [1 a minute] while hunger and thirst are above their second stage". The code needs them below stage 2: "Hungry" (stage 2) already stops regeneration. `docs/02` (2026-10-12, line 568) agrees with the code ("not at all hungry or thirsty"), so this is wording only.

**Confidence.** Read in code.

---

## Stamina and sprint

**Rule.** Stamina (0 to 100, an orange bar shown as a percent) drains while you sprint with Shift and comes back when you are not sprinting. Run it to zero and you are "winded": you cannot sprint again until it climbs back to 20.

These also spend stamina:
- swings
- shoves
- blows taken on a shield

A swing at zero stamina still lands, at half damage. No stamina comes back while the shield guard is up. Your needs slow recovery.

**Numbers.**
- Max: 100, `data/tuning.json player.stamina`.
- Sprint speed ×1.75 (`player.sprintMult`): 5.25 tiles/s.
- Sprint drain: 16/s (`player.sprintDrain`). A full bar lasts 6.25 s.
- Regen: 22/s (`player.staminaRegen`). Empty to full in about 4.5 s at ×1.
- Recover threshold: 20 (`player.sprintRecoverAt`).
- Regen multipliers (`src/entities/player.js:143-148`):
  - ×0.5 at hunger stage ≥3 ("Very hungry") or thirst stage ≥3 ("Parched"), `player.needsStaminaRegenMult`
  - ×0.75 at tired stage ≥2 ("Tired"), `player.tiredStaminaRegenMult`
  - Both together give ×0.375.
- You cannot sprint when any of these hold (`src/entities/player.js:328`):
  - you are not moving
  - you are winded
  - stamina is 0
  - you are carrying a prop
  - the guard is up
  - tired stage is ≥3 ("Exhausted")
- Swing cost is the weapon's `stamina` (fists 3, `data/combat.json fists.stamina`). The shove costs 5 (`data/combat.json shove.stamina`). A blocked blow costs the shield's `stamina` (5, `data/items.json shield.shield.stamina`, applied at `src/combat.js:134-143`).
- Swing at zero stamina: half damage, `src/combat.js:48` `TIRED_DAMAGE = 0.5`, used at `src/combat.js:311-314,345`. A swing or shove that empties the bar sets `winded`.
- HUD: the percent text, a `winded` class, and a gold or red pulse on a block or a broken guard (`src/ui/hud.js:95-101`).

**Code.** `src/entities/player.js:325-335`.

**Confidence.** Read in code.

---

## Walking speeds

**Rule.** You walk at 3 tiles a second in the eight isometric directions (keys snap to them). Several things slow you:
- shallow water
- a drawn or braced bow
- a raised shield

Deep water cannot be walked at all. Your facing follows the mouse, not the walk.

**Numbers.**
- Walk: 3.0 tiles/s, `data/tuning.json player.speed`. Body radius 0.3, `player.radius`.
- Sprint: ×1.75, giving 5.25 tiles/s.
- Shallow water (`floor_water_shallow`): `"walk": 0.5` in `data/sprites/floor_water_shallow.json`. That gives 1.5 walking and 2.625 sprinting, and it applies to everyone.
- Deep water (`floor_water`): `"walk": false` in `data/sprites/floor_water.json`. Nobody can enter it.
- Bow drawn: ×0.45, `src/archery.js:37` `drawSpeed`.
- Bow braced (right button held): ×0.2, `src/archery.js:38` `braceMove`.
- Shield raised: ×0.45, `data/items.json shield.shield.moveMult`.
- The multiplier is picked in one place: `src/player-controller.js:52`.
- For comparison: the dead move at 1.0 (`data/tuning.json zombie.speed`) and villagers at 1.4 (`villager.speed`).
- Climbing through a window takes 0.9 s, eased (`data/tuning.json player.climbTime`; `src/entities/player.js:74-89`); the dead take 1.6 (`zombie.climb`). A carried prop forbids climbing (`src/entities/player.js:75`).

**Code.**
- Floor rule parse: `src/map.js:1085-1094`. Speed lookup: `src/map.js:1120-1123`.
- Keyed movement: `src/entities/player.js:273-279,337-344`.
- Auto-walk (right-click "Walk here" and every action's approach) uses the same multipliers: `src/entities/player.js:250`.
- Any movement key cancels auto-walk: `src/entities/player.js:323`.

**Confidence.** Read in code.

---

## Hunger

**Rule.** Hunger runs from 100 (fed) down to 0. Eating raises it by the food's value, capped at 100. "Very hungry" halves stamina recovery. At 0 you are starving and lose health.

**Numbers.**
- Max: 100, `data/tuning.json player.hungerMax`.
- Full to empty in 1080 sim s (`player.hungerDrainSeconds`). That is 18 real minutes, or 36 game hours.
- Stages by value (`src/moodles.js:55-61`). Times are from full:

  | Stage | Hunger | Reached after |
  |---|---|---|
  | 1 Peckish | below 60 | 432 s (14.4 game h) |
  | 2 Hungry | below 35 | 702 s |
  | 3 Very hungry | below 15 | 918 s |
  | 4 Starving | 0 | 1080 s |

**Code.** Drain: `src/entities/player.js:127`.

**Docs differ.** `src/tuning.js:56-60` holds stale defaults of 600 s (thirst 420 s), with the comment "Hunger empties in ten real minutes, thirst in seven". `data/tuning.json` overrides them with 1080 and 720, which match `docs/30` §3.1.

**Confidence.** Read in code.

---

## Thirst

**Rule.** Thirst runs from 100 down to 0. You raise it in three ways:
- sipping a waterskin
- some foods
- drinking your fill at a well or any water beside you

"Parched" halves stamina recovery. At 0 you lose health.

**Numbers.**
- Max: 100 (`player.thirstMax`).
- Full to empty in 720 sim s (`player.thirstDrainSeconds`). That is 12 real minutes, or one game day.
- Stages (`src/moodles.js:72-78`). Times are from full:

  | Stage | Thirst | Reached after |
  |---|---|---|
  | 1 Slightly thirsty | below 60 | 288 s |
  | 2 Thirsty | below 35 | 468 s |
  | 3 Parched | below 15 | 612 s |
  | 4 Dying of thirst | 0 | 720 s |

**Code.** Drain: `src/entities/player.js:128`.

**Confidence.** Read in code.

---

## Tiredness

**Rule.** Tiredness is a fourth need, from 100 (rested) down to 0. It drains while you are awake and refills only while you sleep in a bed. It never kills. Its effects grow by stage:
- Yawning has no effect.
- "Tired" slows stamina recovery.
- "Exhausted" stops sprinting.
- "Falling asleep" stops health regeneration.

**Numbers.**
- Max: 100 (`player.tiredMax`).
- Awake, full to empty in 900 sim s (`player.tiredDrainSeconds`). That is 15 real minutes, or 30 game hours.
- Asleep, empty to full in 240 sim s (`player.sleepRestoreSeconds`). That is 8 game hours.
- Stages (`src/moodles.js:95-102`). Times are from full:

  | Stage | Tired | Reached after | Effect |
  |---|---|---|---|
  | 1 Yawning | below 60 | 360 s (12 game h) | none |
  | 2 Tired | below 35 | 585 s | stamina regen ×0.75 |
  | 3 Exhausted | below 15 | 765 s | no sprint |
  | 4 Falling asleep | 0 | 900 s | no health regen |

  Waking at 08:00 rested, a player reaches Yawning at about 20:00 on the first day.

**Code.**
- Drain and restore: `src/entities/player.js:129-130`.
- Effects: `src/entities/player.js:135,146,328`.

**Confidence.** Read in code.

---

## Moodles (the status column)

**Rule.** Five moodles always show down the right edge, in this order:
1. bleeding
2. infection
3. hunger
4. thirst
5. tiredness

Each is green when fine. Stages 1 to 4 have their own name and tooltip text. An icon "pops" when its stage gets worse.

**Numbers.** The text at stage 0 and stages 1 to 4 (`src/moodles.js:23-92,115`):
- **Bleed** (drop glyph, borrowed from thirst):
  - 0: Not bleeding
  - 1: Bleeding
  - 2: Bleeding badly
  - 3: Bleeding heavily
  - 4: Bleeding out
  - The stage is `min(4, stacks)`, so 4 and 5 stacks both show "Bleeding out" (`src/moodles.js:33`).
- **Infection** (virus glyph): Not bitten / Bitten / Fevered / Sick / Turning. The Turning tooltip says "(Nothing happens yet: a marker.)"
- **Hunger** (bowl): Fed / Peckish / Hungry / Very hungry / Starving.
- **Thirst** (droplet): Watered / Slightly thirsty / Thirsty / Parched ("Stamina recovers slowly.") / Dying of thirst.
- **Tired** (crescent): Rested / Yawning / Tired ("Stamina comes back slower.") / Exhausted ("You cannot run. Sleep.") / Falling asleep ("Nothing heals until you sleep.").
- The thresholds for hunger, thirst and tired are 60 / 35 / 15 / 0 (see their sections).
- Glyph size: 20 px, drawn from a 16×16 SVG (`src/ui/moodles.js:156`). The stage class is `stage-N` (`src/ui/moodles.js:163`).

**Code.**
- Logic: `src/moodles.js`.
- DOM: `src/ui/moodles.js:141-177`, created from `src/ui/hud.js:58-61`.

**Docs differ.**
- `docs/02-decisions.md:692` says the bleed moodle "shows the stack count". It cannot tell 4 stacks from 5.
- `src/ui/moodles.js:1` says "Copied ... Unchanged", but the always-shown "fine" stage was added later in `src/moodles.js:113-126`. This is a code comment only.

**Confidence.** Read in code.

---

## Eating

**Rule.** Choose "Eat" on food in your bag or in an open container. You can also press its belt key (1 to 4) when the food sits on the belt. It is instant: hunger and thirst rise by the food's values, capped at 100, and one item from the stack is used up. Your character holds the food out for a moment. Nothing stops you eating when already full; the extra is wasted.

**Numbers.** Food values (`data/items.json`):

| Food | Hunger | Thirst | Stacks |
|---|---|---|---|
| Loaf of bread | +40 | | 1 |
| Apple | +15 | +5 | 5 |
| Wheel of cheese | +30 | | 1 |
| Potato | +10 | | 10 |
| Cabbage | +8 | | 10 |
| Garlic | +3 | | 10 |
| Pumpkin | +12 | | 5 |
| Roast potato | +20 | | 10 |
| Stew | +50 | +10 | 3 |
| Porridge | +30 | | 5 |

- The held-out ("present") pose lasts 0.6 s (`data/tuning.json player.presentTime`). Walking ends it (`src/entities/player.js:363-365`).

**Code.**
- `eat`: `src/entities/player.js:98-103`.
- Menu entry: `src/interact.js:1046-1048`.
- Belt key: `src/interact.js:994-1004`, wired at `src/interact.js:930,950`.
- The belt accepts food and waterskins as stacks: `src/ui/inventory-actions.js:68-72`.

**With friends.** A guest's menu choice is sent as `{ op: "menu", label }` by the entry's uid and bag address, and the host runs the same entry (`src/ui/inventory-actions.js:216,343-351`). A belt key is an event in the guest's input snapshot, performed in the world step (`src/interact.js:930`). Needs travel in the player's light record (every field not in `HEAVY`, `src/net.js:223`).

**Docs differ.** The in-game Controls list (`src/ui/screens.js:29`) says "1 to 4: Swap a belt slot with your hand". It does not mention that the same key eats or drinks a consumable on the belt.

**Confidence.** Read in code.

---

## Drinking and the waterskin

**Rule.** The waterskin holds water as a percent. "Drink (N%)" takes one sip. At a well, or beside any water tile, you get two actions:
- "Drink from the well/water" fills thirst all the way.
- "Fill waterskins" tops up every waterskin in your bag.

The well and water never run out.

**Numbers.**
- Waterskin: 1×2, `capacity: 100` (`data/items.json waterskin`). In code the capacity only marks the item as a water container; fill levels are hard-coded to 100.
- A sip is `min(fill, 50, maxThirst − thirst + 1)` (`data/tuning.json player.drinkSip` = 50; `src/entities/player.js:105-113`). Because of the `+1`, a sip at full thirst still uses 1 unit of water.
- Drinking from a waterskin is instant, with the 0.6 s present pose.
- "Drink from the …" takes 1.5 s (`src/interact.js:47` `DRINK_TIME`) and sets thirst to its maximum (`src/interact.js:552-555`). It becomes the simple (E) action when thirst is below 90 (`src/interact.js:545`).
- "Fill waterskins" takes 2.0 s (`src/interact.js:48` `FILL_TIME`). It sets every bag waterskin under 100 to 100 (`src/interact.js:538,566`). It is disabled with "(none to fill)" when there is nothing to fill.
- Only waterskins in the bag are filled, not those on the belt (`src/inventory.js:80-82` reads the bag only).
- Water sources:
  - the well prop (`src/interact.js:574-576`)
  - any floor with `"drink": true`, which is `floor_water` and `floor_water_shallow`; use from an adjacent tile (`src/map.js:1125-1127`; `src/interact.js:83,679,734`)
- A waterskin found in loot has a random fill of 0, 25, 50, 75 or 100 (`src/items.js:93`). Loot tables: barrel 20%, body 13% (`data/loot.json`).
- The starter waterskin is full (`src/game.js:110`), which is two sips.

**Code.** `src/interact.js:534-582` (`waterActions` 537, `wellActions` 574, `waterTileActions` 579). The menu entry is `src/interact.js:1049-1052`.

**Docs differ.** `docs/10-interface.md:52` says the waterskin "fills at the well". It now fills at any water too (`docs/30` law 8). This is history, not a contradiction.

**Confidence.** Read in code.

---

## Sleep

**Rule.** Sleep by choosing "Sleep" on a bed, or by pressing E near one.

Conditions:
- You must be indoors, within reach of the bed, and not carrying anything.
- By day you must be at least "Yawning".

While you sleep:
- Nothing moves you and you are never woken.
- If every living player in the world is asleep, the whole simulation runs 60 times faster: the dead walk, fires burn, crafts finish.

You get up when you are fully rested and it is between 06:00 and 22:00, or when the bed is removed. A message says the time and how long you slept.

**Numbers.**
- A bed is any prop whose definition has `"sleep": true`; only `data/sprites/bed.json:32` has it. The valley map places 20 beds (`data/maps/valley.json`). A bed is also a workbench recipe: 6 plank + 1 cloth, 16 s (`data/recipes.json`).
- Reach: 1.6 tiles from a bed tile (`src/entities/player.js:200`).
- Indoors means `roomAt(bed tile) !== 0` (`src/entities/player.js:201`).
- Refusal messages (`src/entities/player.js:194-205`):
  - "That bed is gone."
  - "You cannot sleep on that."
  - "You are asleep."
  - "Your hands are full."
  - "Too far from the bed."
  - "Not out here."
  - "You are not tired." This one fires when tired stage is 0 and the hour is from 06:00 up to (not including) 20:00. The 20 is hard-coded.
- Time scale: ×60 (`data/tuning.json player.sleepTimeScale`). The loop runs up to 120 fixed steps a frame while the scale is above 1 (`src/loop.js:15,114-116`). One game hour then passes in 0.5 real s, and an 8-hour night in about 4 real s.
- Wake when tired ≥ max and 06:00 ≤ hour < 22:00 (`data/tuning.json player.wakeHour` = 6; the 22 is hard-coded at `src/entities/player.js:188`). You also wake if the bed prop is gone (`src/entities/player.js:190`).
- "Sleep" becomes the simple (E) action when tired stage ≥1 or the hour is ≥20 or <6 (`src/interact.js:382-397`).
- While asleep, needs keep draining (hunger and thirst), tiredness restores at 100/240 per sim s, and health regenerates at 4/min (`src/entities/player.js:184-191`). Over 8 game hours that costs about 22 hunger and 33 thirst.
- Messages (`src/main.js:1464-1465`):
  - "You lie down. The night goes on without you." when everyone is asleep.
  - "You lie down. Time will pass faster once everyone in the world is asleep." when someone is still awake.
  - On waking: "<day, time>. You slept N hours." The hours come from sim time / 30 (`src/entities/player.js:178`).
- There is no lying pose: the sleeper stands idle by the bed (`src/entities/player.js:308-315`; `TODO.md:172` is still open).

**Quirks found.**
- A rested player may lie down from 20:00 to 21:59, because the validation allows it from 20:00. The wake test counts any hour before 22 as "morning", so they get up again on the next step.
- Someone who becomes rested after 22:00 sleeps on until 06:00. For example, lying down "Tired" at 15:00 means waking at 06:00.

**Code.**
- Verb: `src/entities/player.js:193-210`. `startSleep` / `wake`: `src/entities/player.js:165-182`. Menu: `src/interact.js:381-398,615`.
- Scale rule: `src/game.js:257-264`, re-evaluated every step at `src/game.js:496`. `src/world.js:25-29` emits `timeScale`.

**With friends.**
- Time speeds up only while **every living player** is asleep. Dead players and dormant (stepped-away) players do not count (`src/game.js:254-263`).
- A sleeper among players who are awake sleeps at normal speed but still restores and regenerates at the sleeping rate.
- A guest lies down through the same verb by the bed's prop id.
- If a sleeper leaves, goes dormant, or dies, the scale is put right (`src/game.js:368,383-386,270`).
- The dead are not told to skip sleepers, so a zombie can bite one (inferred: `src/entities/zombie.js:244,259` skip only `p.dead`).

**Docs differ.** `docs/30` §3.3 says the action is refused "with the dead in sight", but marks that as only "a lean to try". It is not built: the code refuses only outdoors. The doc is consistent on this point.

**Confidence.** Read in code. The bite on a sleeper is inferred.

---

## Bleeding and bandages

**Rule.**
- Each bite that does damage has a 50% chance to open a wound or widen it by one stack, up to 5. The wound drains health faster the more stacks it has.
- Each new bite resets a 12-second timer; when the timer runs out the wound closes by itself.
- Choosing "Apply" on a bandage stops all bleeding at once and uses one bandage.
- The first wound brings the message "You are bleeding. A bandage will stop it."

**Numbers.**
- Wound chance: 0.5, `data/combat.json bleed.chance`.
- Max stacks: 5, `bleed.max`.
- Timer: 12 s, `bleed.duration`.
- Drain per second for 1 to 5 stacks: 0.4 / 1.6 / 3.6 / 6.4 / 10, `bleed.dpsByStacks`.
- From the doc's measurements (`docs/02:692`): 5 fresh stacks kill from full in 10 s, and one stack costs under 5 health in total.
- The code defaults are identical: `src/bleed.js:12`.
- Bandage: 1×1, stacks to 5, `"bandage": true`, tag `cloth` (`data/items.json bandage`).
  - "Apply" is enabled only while bleeding; otherwise it reads "Apply (not bleeding)".
  - Applying says "The bleeding stops." (`src/interact.js:1037-1045`).
- Where bandages come from: only the dev chest's `dev_kit` (5, `data/loot.json`). No loot table and no recipe makes one. Because a bandage carries the `cloth` tag, a workbench recipe that asks for `tag:cloth` can consume it:
  - torch
  - bow
  - bed
- The dev chest is on by default (`src/settings.js:31` `devChest: true`).

**Code.**
- `src/bleed.js` (apply 30-36, update 45-54, onBite 57-60).
- Stepped per player at `src/game.js:488`. Bite hook: `src/game.js:294-301`.
- Message: `src/main.js:1446`, and for guests `src/host.js:188`.

**With friends.** The wound belongs to whoever was bitten (`victim` on `playerHit`). The host sends a guest its bite messages (`src/host.js:185-189`).

**Confidence.** Read in code.

---

## Infection (a marker)

**Rule.** Each bite that does damage has a 20% chance to infect you, unless you are already infected. The infection is only a clock shown by the infection moodle: Bitten, then Fevered, Sick and Turning, each a quarter of 1.5 game days, then it holds at Turning. **It does nothing else.** It causes no damage, no turning and no death, and nothing in normal play cures it. The bite says "The bite broke the skin."

**Numbers.**
- Chance: 0.2, `data/combat.json infection.chance`.
- Length: 1.5 days, `infection.days`. That is 1080 sim s, 270 s a stage (`src/infection.js:17-32`).
- It reads the game clock (`clock.getElapsed`), so it runs 60 times faster while everyone sleeps (inferred from `src/infection.js:24`).
- A cure exists only in the developer console: `__game.infection.cure()` (`src/dev.js:50`).

**Code.** `src/infection.js`, hooked from `src/game.js:300`. The message is at `src/main.js:1445` and, for guests, `src/host.js:187`.

**Confidence.** Read in code.

---

## Bites only happen with aggro on (context for all damage)

**Rule.** By default the dead ignore you. They do not hunt or bite unless the world rule "Zombie aggro" is on. So in a default solo world, the only things that can hurt you are needs damage (with Survival on) and, in principle, villagers.

**Numbers.**
- `src/settings.js:12` `zombieAggro: false`.
- The gate: `src/entities/zombie.js:233,296`.

**Confidence.** Read in code.

---

## Death, the dead screen, and the next character

**Rule.** At 0 health your character falls:
- Whatever you were doing stops: sleep, actions, auto-walk, the guard, a climb, a bow draw.
- A prop carried on your head is set down within 2 tiles if there is room.
- The fall animation plays, and your body then lies there as a searchable corpse with your gear.

The dead screen says "<Name> died" with the time and "The body stays where it fell.", and offers two buttons:
- "New character" creates a fresh survivor with the starter kit in the same world, from an identity.
- "Leave world".

The world is saved at the death.

**Numbers.**
- The search radius for the carried prop is 0 to 2 tiles (`src/game.js:278-283`).
- New-character creation has two steps (`src/ui/screens.js:63` `CREATION_STEPS = 2`):
  1. Pick an identity.
  2. A placeholder: "Skills and a profession will be chosen here."
- The new survivor appears at the nearest walkable tile to spawn + (1, 1) that no player stands on (`src/main.js:308-309`). The valley spawn is (104, 216) in "your cottage" (`data/maps/valley.json spawn`).

**Code.**
- Death check: `src/game.js:541-548`. `fall`: `src/game.js:269-288`.
- The body: `src/game.js:478-485` (`dressCorpse` after the fall), moved to corpses at `src/game.js:535-538`. The fallen player's update is `src/entities/player.js:288-299`.
- Dead screen: `src/ui/screens.js:785-791` (shown from `src/main.js:1457-1461`; on reload, `src/main.js:280`).
- Respawn: `src/main.js:291-320`. Save on death: `src/host.js:216-218`.

**With friends.**
- Each death belongs to its own player; only that player's client shows the dead screen.
- A guest sees its dead screen once, from the host's record (`src/main.js:867-875`).
- A guest's "New character" leaves and rejoins with the chosen identity, and the host builds the new survivor (`src/main.js:293-306`).
- The dead stop hunting a fallen player (`src/entities/zombie.js:259`).
- A server world's owner sees players who have died marked "died" (`src/ui/screens.js:686`).

**Docs differ.**
- `docs/30` §3.5 rules that the next survivor arrives "elsewhere" (the inn, the toll house, the croft, by turn). The doc itself marks this as not built; the code uses the spawn.
- The code comment at `src/game.js:542-543` says "the way back to the title is a fresh load". That is stale: the dead screen now offers New character and Leave world with no reload.

**Confidence.** Read in code.

---

## The starter kit

**Rule.** Every new character, including one made after a death or a joining guest, starts in plain clothes with a poor belt and bag, a little food and water, a plank, and a torch in hand. The head and glove slots are empty.

**Numbers.** `src/game.js:100-115`:
- Worn: tunic (chest), breeches (legs), boots (feet), rope belt (waist, 2 belt slots, `data/items.json belt.beltSlots`), burlap sack (back, a 6×4 bag, `small_sack.bag`).
- In the sack:
  - a waterskin (fill 100)
  - 1 loaf of bread
  - 2 apples
  - 1 plank
- In hand: a torch.
- Better gear exists in loot (`data/loot.json chest`):
  - Good belt (4 slots), 5%
  - Rucksack (8×5), 5%
  - Hood, 5%
  - Gloves, 5%
- Clothing carries no stats (no armour or warmth fields in `data/items.json`).
- The dev chest, placed by the spawn while the setting is on (default on), holds two 12×8 Developer Bags, every weapon and 5 bandages (`data/loot.json dev_kit`; placed at `src/game.js:80-83`).

**Code.** `giveStarterKit`: `src/game.js:103-115`, called from `create` (`src/game.js:87`) and `addPlayer` (`src/game.js:359`).

**With friends.** Every guest's character gets the same kit through `addPlayer`.

**Docs differ.** None. `docs/10:54`, `docs/11:71` and `docs/02:1111` all match.

**Confidence.** Read in code.

---

## The HUD (your own bars)

**Rule.** At top left: a 2× portrait cropped from your own figure (hat and chest included), your name, the Health and Stamina bars, and a "Hands: main / off" line (a two-handed item is named once). The clock sits at top centre and the moodles down the right edge.

**Numbers.**
- Portrait crop: 26×40 px from the idle south frame, at scale 2 (`src/ui/hud.js:21-22`).

**Code.** `src/ui/hud.js:32-123`.

**Confidence.** Read in code.

---

## The character screen (C)

**Rule.** C opens the "You" panel, a paper doll with seven worn slots and the two hands. Tab opens the bag separately.

**Numbers.**
- Slots and labels (`src/ui/inventory-panel.js:35,283`): Belt (waist), Head, Bag (back), Chest, Legs, Feet, Gloves (hands).
- A slot portrait is 38 px (`src/ui/inventory-panel.js:23`).

**Code.** `src/ui/inventory-panel.js:270-290`.

**Confidence.** Read in code, briefly. The inventory reader covers this panel in depth.

---

## The look and identities

**Rule.** An identity is a name plus a look, kept in your browser and reusable. It sets:
- skin
- hair style
- hair colour
- eyes

A character copies its identity once, at creation, and keeps it for life; editing the identity later changes no existing character. The editor shows a figure turning through its facings. The skin list includes three "dead" tones, for fun.

**Numbers.**
- The name is up to 24 characters (`src/identities.js:47,53`; input `maxlength="24"`, `src/ui/screens.js:413`).
- Palettes (`data/looks.json`):
  - skins: 8 living, `#f8dcc0` to `#6b4432`
  - dead skins: 3, `#8f9c72`, `#908c8a`, `#7f879c`
  - hair colours: 12
  - eye colours: 8
- Hair styles: "bald", then "short" (generated), then the painted styles from `data/hair/index.json`, sorted. The painted `long` replaces the generated one (`src/figure/draw.js:63-66`). That gives 9 styles: bald, short, bob, crop, long, mohawk, pigtails, purple, tight. This assumes every index entry registers; the order is inferred from the sort.
- The default look is skin `#f0c8a0`, hair `#5a3a20`, style short, eyes `#1c1a22`, under `#e9dfc8` (`src/figure/wardrobe.js:8`).
- The preview canvas is 144×216 (`src/ui/screens.js:411`).

**Code.**
- `src/identities.js` (add 46-50, update 53-57; `migrate` from the old `playerName`/`look` settings, 146-153).
- Editor: `src/ui/screens.js:402-424`. Creation: `src/ui/screens.js:631-644`.

**With friends.** A guest sends no identity until the host asks (`who`). The chosen identity's name and look then go into the guest's character on the host (`src/main.js:293-306`). The name shows over a player's head to others while in sight (setting `nameTags`, `src/settings.js:25`).

**Confidence.** Read in code. The hair-style list is inferred from the index and the sort.

---

## Stepping away and going dormant (multiplayer only)

**Rule.** In a world with friends, five minutes without input shows "You stepped away". Your character leaves the world, safe where it stood. A guest who is away 60 s of game time goes dormant into the save and returns on rejoin. A dormant player does not count toward "everyone asleep".

**Numbers.**
- `src/main.js:134` `AWAY_AFTER_MS = 5 * 60 * 1000`.
- The away screen text: `src/ui/screens.js:777-783`.
- `takePlayer` clears sleep: `src/game.js:376-390`.

**Confidence.** Read in code for the away screen and takePlayer. The 60-second dormancy is from CLAUDE.md and not re-checked here.

---

## Candidate wiki pages

- **Health**: the 100 hp pool, what damages it, regeneration conditions and rates (awake and asleep), bar colours.
- **Stamina**: the pool, sprint drain and recovery, winded, the costs of swings, shoves and blocks, half damage at zero, regen multipliers from needs.
- **Movement**: walk and sprint speeds, the eight directions, shallow and deep water, slowdowns from bow and shield, climbing windows, auto-walk.
- **Hunger**: drain rate, stages and thresholds, effects, the food table.
- **Thirst**: drain rate, stages, effects, water sources.
- **Tiredness**: drain and restore, stages and effects.
- **Moodles**: all five, with every stage name and tooltip and what each stage does.
- **Food**: every food item with hunger and thirst values and stacks; eating from the bag, a container or the belt.
- **Waterskin**: capacity, the 50-point sip, filling, loot fill levels, belt use.
- **Well and water**: drink your fill and fill waterskins; any water tile counts.
- **Sleep**: beds, indoors, refusals, the ×60 time scale, waking rules, sleeping with friends, the quirks.
- **Bed**: where beds are, the recipe, the Sleep action.
- **Bleeding**: chance, the stack table, timer, kill times.
- **Bandage**: Apply, sources, use as cloth in recipes.
- **Infection**: chance, the 1.5-day stages, currently no effect.
- **Death**: the fall, the body as loot, the dead screen, New character, saving.
- **Starter kit**: the exact list, and better gear in loot.
- **Survival (setting)**: what it switches, including that health regeneration stops when it is off.
- **Identities and character creation**: name, skin, hair, eyes, the palettes, the two creation steps.
- **HUD**: portrait, bars, hands line, clock, moodle column.
- **Game time**: 30 s an hour, 720 s a day, start at 08:00, and how the needs map onto game hours.

---

## Discrepancies

1. `src/rules.js:13` comments `survival: false`, but the effective default is true (`src/settings.js:22`). `TODO.md:56` (history) also says "off by default".
2. `src/tuning.js:56-60` has the stale defaults `hungerDrainSeconds: 600` and `thirstDrainSeconds: 420`, with the comment "ten real minutes, seven". `data/tuning.json` overrides them with 1080 and 720. `src/tuning.js` also has no defaults for `tiredMax`, `tiredDrainSeconds`, `sleepRestoreSeconds`, `sleepTimeScale`, `wakeHour`, `healthRegenPerMinute`, `sleepRegenPerMinute`, `needsStaminaRegenMult` or `tiredStaminaRegenMult`, so they exist only in data.
3. `docs/30` §3.4 says regeneration needs hunger and thirst "above their second stage". The code stops regeneration at stage 2 ("Hungry"/"Thirsty"): `src/entities/player.js:134`. This is wording; `docs/02:568` matches the code.
4. `docs/02-decisions.md:692` says the bleed moodle "shows the stack count". The stage is capped at 4 (`src/moodles.js:33`), so 4 and 5 stacks look the same.
5. The in-game Controls text (`src/ui/screens.js:29`) says 1 to 4 swaps a belt slot with the hand. The code also eats or drinks a consumable in that slot (`src/interact.js:994-1004`).
6. `docs/30` §3.5 rules a respawn "elsewhere" (inn, toll house, croft). The code respawns by the map spawn (`src/main.js:308`). The doc admits this is not built.
7. `src/game.js:542-543` says the way back from death is "a fresh load". The dead screen now has New character and Leave world (`src/ui/screens.js:785-791`).
8. `docs/10-interface.md:52` says the waterskin "fills at the well". It now fills at any water tile with `drink: true` too. This is historical.
9. The waterskin's `capacity: 100` (`data/items.json`) is not read for fill amounts. Filling and the starter kit hard-code 100 (`src/interact.js:538,566`, `src/game.js:110`). Changing capacity in data would not change the fill.
10. `src/ui/moodles.js:1` says "Unchanged" from the parent. The always-show-green behaviour was added in `src/moodles.js:113-126`. This is a code comment only.
11. These are not doc contradictions but behaviours no doc describes:
    - With Survival off, health never regenerates (`src/entities/player.js:121-125` returns before the regeneration).
    - A sip at full thirst still uses 1 unit of water (`src/entities/player.js:107`).
    - "Fill waterskins" skips waterskins on the belt (`src/inventory.js:80-82`).
    - A rested player who lies down from 20:00 to 21:59 gets up on the next step (`src/entities/player.js:188,203`).
