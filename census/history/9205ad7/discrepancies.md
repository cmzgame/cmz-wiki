> **A record, not kept up** (filed under `census/history/9205ad7/` by the sweep, 2026-10-16; game #87): the first census's docs-versus-code list, amended in place until 2c70942, read from the game at `9205ad7` (2026-10-14). Its line numbers are that commit's; the live list is `census/discrepancies.md`, and a redone sheet goes beside the census, dated (`CLAUDE.md`, "The census").

# Discrepancies: where the game's docs and its code disagree

Game `main` @ `9205ad7` (2026-10-14). Collected from the census fact sheets (`census/areas/`), each read from the code. The wiki follows the code; these are for Michael and the coding agent to rule on or fix. Some are bugs in the code, not stale docs: they are marked so in the sheets.
96 in all.


## world (18)

- `docs/07-lighting.md:18`: unlit room light formula lacks the `roomBounce` 0.5 the code applies (`src/light.js:143`).
- `docs/07-lighting.md:19`: "unlit at night, about a third" of sight range; with night brightness 0.22 the code gives about 49%.
- `docs/07-lighting.md:115` (acceptance 6): "without a torch you see the few tiles around you"; the code's sight has no light term (whole viewport by line of sight).
- `docs/07-lighting.md:67`: the torch is `off`-hand; the item is `hands: "either"`.
- `docs/07-lighting.md:113`, `:122`: "one log per two game hours", "four logs last a night"; fireplace and hearth burn 3 h a log (status line acknowledges).
- `docs/30-the-big-pass-spec.md:69`: fire lit with "a torch or a flint"; code lights a fire by feeding fuel alone.
- `docs/30-the-big-pass-spec.md:63`, `:139`: chopping needs the hatchet and (`:97`) leaves a stump; code needs no tool and leaves nothing.
- `docs/02-decisions.md:1157`: torch posts are "built from wood"; nothing builds a torch post (`data/build.json`, `data/recipes.json`).
- `docs/02-decisions.md:1177`: four tree radii including 0.14; the data has three (0.18, 0.22, 0.3).
- `docs/15-ground.md:118`: "only trees have [shadow] today"; rocks have it too.
- `docs/30-the-big-pass-spec.md:158`: step 0 valley with "a dozen of the dead" and "four villagers"; now 40 and 7 (history).
- `tools/mapgen/valley.py` comment "lamps" for the square's torch posts; they are placed without torches and give no light. *Resolved at `2c70942`: the posts are placed with a torch.*
- Code label: troughs and the chapel's font offer "Drink from the well" (`src/interact.js:575`).
- Code comment `src/entities/player.js:152`: "crops grow" during sleep; no crop growth exists.
- Code comment `src/ground.js:17`: mushrooms as baked decals; they are props and `data/ground.json` has no mushroom decal.
- Code: `light.poolRays()` (`src/light.js:263-271`) references an undefined `carrier` and would throw if called; it is never called.
- Code: `opaque` is read only from map entries (`src/map.js:1500`), never from sprite definitions, and no map sets it, so no prop blocks sight or light (`docs/02` question 27 leaves "whether rocks block sight" open; in practice nothing does).
- Code/multiplayer (inferred): the `squareSurface` setting mutates the map from the client (`src/main.js:1006-1009`), so a guest's choice can make its square's floor differ from the host's until the chunk is resent.

## player (4)

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
    - With Survival off, health never regenerates (`src/entities/player.js:121-125` returns before the regeneration). *Resolved at `2c70942`: health regenerates with Survival off.*
    - A sip at full thirst still uses 1 unit of water (`src/entities/player.js:107`).
    - "Fill waterskins" skips waterskins on the belt (`src/inventory.js:80-82`).
    - A rested player who lies down from 20:00 to 21:59 gets up on the next step (`src/entities/player.js:188,203`).

## combat (20)

- `CLAUDE.md` and `docs/21`: "Combat numbers are data"; several are code constants (tired 0.5, point blank 0.55, slack 0.8, default knockdown 0.3, hit-stop, shield push 0.25 in `src/combat.js`; every bow and throw tunable in `src/archery.js:27-52`; tap 0.2 in `src/buttons.js`). *Resolved in part at `2c70942`: the tired blow, point blank, the default knockdown, and hit-stop are `blow`, every bow tunable `bow`, in `data/combat.json`; the slack, the shield push, and the tap time are still code.*
- `docs/14` weapons table: mace `hands: main`; data `either`.
- `docs/14` (Hitting): every hit staggers 0.3 s and "a blow cancels a bite begun"; now by `staggerChance`, and a bite is cancelled only by `interrupts` or a knockdown (the doc's status notes it).
- `docs/14` acceptance 5: shove pushes 1.6 tiles; data 0.53 (status notes it).
- `docs/14` As built: multi-hit "default on"; setting default is off (status notes it).
- `docs/21` halberd: "no knockdown-finisher two-shot" framing, but the halberd floors on 30 percent of hits by the default.
- `docs/21`: the spear is "never" dual wielded; a spear with a torch makes the torch an off-hand weapon with exposure. *Resolved at `2c70942`: a torch beside the spear never swings.*
- `docs/21`: "a sword with a torch in the off hand ... costs nothing"; fast clicking swings the torch and exposes you. *Ruled at `2c70942`: intended, as docs/21 reads (costless only at the sword's pace).*
- `docs/21` Bow bullet: brace rate 1.5 (0.9 s to 0.6 s); actual 1.4 s to 0.6 s, 2.33x.
- `docs/21` "the bow's two draws" and `docs/20` The control: free-draw walking 0.5; code 0.45.
- `docs/20`: a `drawStamina` tunable "is there for later"; it does not exist.
- `docs/20` step 3: half the arrows that hit break; no arrow break in code (removed per the doc's later paragraph).
- `docs/21` "Numbers that are Claude's picks" and step 3: guard arc 150, 15 percent through, 4 stamina, walk 0.75; data 100/220, 0.5 side, 5 stamina, 0.45.
- `docs/21` halberd: the sweep quoted as 0.8 s / reach 2.3 / 8 stamina and the thrust as 3.0 / 1.1 / 10 in places; data 0.95 / 2.2 / 12 and 1.3 / 2.9 / 15.
- `docs/21` Status not-built list: weapon durability; it is built (flagged as history in the same doc).
- `docs/09`: the breach is dropped when the zombie sees the player; code drops it on sight only within bite reach.
- `src/settings.js:46` label and `docs/19` framing ("villagers too, you first"): villager hunting works with Zombie aggro off, since `nearestPrey` ignores `zombieAggro`. *Ruled at `2c70942`: two knobs on purpose; the label now says so.*
- `combatTesting` description and `docs/21`: forty dead "about the square"; on the valley they are placed in tiles 1 to 30, far from the spawn.
- `data/loot.json dev_kit.note`: the chest is "by the well"; code places it by the spawn. `docs/21` "To test it": tile 14, 17 and three spears; the chest holds two (giveKit gives three).
- `docs/14` says a downed target's hit is a finisher; true for melee only: arrows and thrown spears on a downed zombie do plain damage (`src/archery.js:247`, no finisher multiplier). Not stated as a difference in `docs/20`, which only says a downed zombie can be hit.

## items (21)

- `docs/10-interface.md` items table lists the Torch as "tool, off-hand" and says "The torch in the off-hand is lit"; the torch is `hands: "either"`, lights in either hand, and the starter torch goes to the main hand (`src/game.js:115`, `src/items.js:137-142`).
- `docs/10-interface.md` items table lists the Hatchet as "main hand"; it is `either`.
- `docs/10-interface.md` container table: "Body | 3×3"; a body's grid is 6x6 (`src/entities/character.js:141`) and `loot.json`'s `body.grid` 3x3 is unused for bodies.
- `docs/10-interface.md` chest loot "bread, cheese, planks, a log, a hatchet rarely"; the chest table also rolls a sword, mace, good belt, rucksack, gloves, and hood (`snapshot/data/loot.json`).
- `docs/10-interface.md` acceptance 3 names the hearth's entry "Add a log"; the labels are "Light the ...", "Feed the ... (n of max, h left)", "The ... is full" (`src/interact.js:361-363`).
- `docs/11-character.md` and `docs/02-decisions.md` (2026-10-10): the Developer Bag comes "from the console ... and never from loot"; the dev chest's `dev_kit` table holds two, and the wheelbarrow uses the same table. *The wheelbarrow part resolved at `2c70942`: it has its own empty table.*
- `docs/11-character.md` implies a picked-up item goes to a hand only with no bag; `takeIn` puts any single holdable item in a free hand first even with room in the bag (`src/interact.js:157-162`).
- `CLAUDE.md` ("the dev chest every item") and the `devChest` setting's description ("the chest of every item", `src/settings.js:31`): the dev chest holds 17 kinds, no food, materials, clothing, or tools.
- `docs/02-decisions.md` (step 2, 2026-10-13): "The forge burns charcoal ... until then the dev chest"; the dev chest has no charcoal, and nothing in play gives charcoal, so the forge cannot be lit without the console.
- `docs/30-the-big-pass-spec.md` section 6: "Ingredients and the fuel come from your bag, the belt, and every container within reach"; ingredients do, but a fire's fuel comes only from your hands, belt, and bag (`src/interact.js:356, 373-375`).
- `docs/30-the-big-pass-spec.md` section 6: the panel shows "the station's fire ... with its fuel"; the panel shows no fuel, only "needs the fire lit" and "(the fire is out)" on a paused job (`src/ui/station-panel.js:133, 140`).
- `docs/30-the-big-pass-spec.md` law 3 and 5.1: stations are carried and placed like furniture, from the bag; every station sprite is `carry: false` and no station is an item.
- `docs/30-the-big-pass-spec.md` section 10: "Hammer: the smith's and the workbench's recipes ask for it in hand"; no workbench recipe asks for it, nor does the anvil's own hammer recipe (`snapshot/data/recipes.json`).
- `docs/30-the-big-pass-spec.md` section 6 table: workbench "planks to boards", oven and cooking "a pie", loom "cloth ... bandages; a tunic, breeches, a cap"; none of these recipes exist, and the loom and dye vat have no recipes at all.
- `docs/30-the-big-pass-spec.md` sections 4 and 10: chopping a tree is a hatchet verb; Chop down needs no tool (`src/interact.js:516-532`).
- `docs/30-the-big-pass-spec.md` section 4: "forage sticks under trees (exists by rule)"; forage places mushrooms and pumpkins as props, and the `wild` loot table (stick) is never rolled by any code.
- `docs/30-the-big-pass-spec.md` section 5.3: interaction `on` values "tree" | "rock" | "water" | "soil" | "grass", action kinds `give`/`transform`/`open`/`fill`/`plant`/`water`/`message`, and "The menu lists only rows whose `use` is in a hand"; the resolver accepts item ids/tags, prop sprite ids, character kinds, floor sprite ids, and "tile"; `action` is a verb name; no menu lists rows (`src/interactions.js:137-152`).
- `docs/30-the-big-pass-spec.md` section 7 and `src/map.js:1535`'s comment: a fire's fuel is "an item or tag"; only an item id works (`getItem(fuelId)`, `countAll` by id, `src/interact.js:354-356`).
- `docs/30-the-big-pass-spec.md` section 7: "the cooked food's value is the raw's doubled"; roast potato (20 from 10) fits, stew (hunger 50 from ingredients worth 31) does not.
- `docs/30-the-big-pass-spec.md` section 9.1 and `docs/02` ("the wheelbarrow one big immovable grid"); the wheelbarrow uses the `dev_kit` table, so its first search fills it with the whole dev kit, and its sprite note's "until step 3" has passed with step 3 built. *Resolved at `2c70942`: its own empty table, and it is carried.*
- `census.md` lists Stick as "in loot: ... wild"; that table is dead data (see the forage line above).

## building (11)

- `docs/09` gives about 24 s for a bare door and 80 s for a door boarded three deep both sides. The code adds the 0.33 s attack animation to the 1.2 s cooldown on every hit, which gives about 31 s and 104 s (inferred).
- `docs/09` says the prompt names the stack as "door, 2 boards outside, 3 inside". The code shows only a disabled menu entry, "door: boarded (2 this side, 3 far side)", and E's prompt never names the stack.
- `docs/09` says sealed is computed "per room, each step". It is computed only for the debug corner text and gates nothing.
- `docs/02` (Openings, 2026-10-10) says sealed "gates sleep later". Nothing reads it; sleep only needs the bed to be in a room (`docs/09` Status already corrects this).
- `docs/13` §Removal and the palette tooltip say the tool takes what "the player placed or built". The code takes any carryable prop, authored furniture included. *Resolved at `2c70942`: X takes only what players made.*
- `docs/13` §Removal says a removed container spills its contents. A never-searched container has no bag and spills nothing. *Resolved at `2c70942`: only made containers can be removed, and they start with a bag.*
- `docs/13` §Free building says the setting is "kept in the browser". It is now a world rule carried in the save and sent to guests; only a local world reads the browser setting.
- `docs/13` Status says prop recipes land "on a free tile beside its station". Only the anchor tile is checked, so a 2×1 piece's second tile may overlap a prop or straddle a wall (inferred).
- `docs/17` §plan says log-wall corners fall back to `post_wood`. `wall_log.json` names `post_log`. This is history the Status supersedes.
- Code comment `src/map.js:516`, "Planks are free until the inventory", is stale. Boarding spends a plank in `src/interact.js:496`.
- Code comment `src/main.js:638-639`, "Building stays this client's own until it is a command too", is stale. Builds and removals are host commands (`placement.setSender`, `performPlacement`).

## multiplayer-ui (22)

- `src/ui/screens.js:41` Controls lists "K: Near walls: stubs or translucent"; no code reads K. *Resolved at `2c70942`.*
- The Controls screen omits Q / middle button (the main hand's other mode) and the right-button hold (block, brace) that `src/buttons.js` implements. *Resolved at `2c70942`.*
- `docs/31-multiplayer/03` promises a setting to hide names over heads; `nameTags` exists in `src/settings.js:26`, `58`, but the Settings screen has no row for it. *Resolved at `2c70942`: the Names over heads row.*
- `docs/31-multiplayer/03` (Settings) says `combatTesting` and `squareSurface` are the host's and read-only for a guest; only the five rules are greyed, and a guest's Square and paths setting repaints its own replica.
- `docs/31-multiplayer/03` (Pause) says hit-stop stays local on the wire; the code turns hit-stop off entirely on the wire (`src/main.js:880`).
- `docs/31-multiplayer/03` (Pause) says a listen server with no guests pauses; its own status line and the code say any world on the wire never pauses (the doc's body is stale against its status).
- `docs/31-multiplayer/04` status says the host loop is still requestAnimationFrame and a Worker is tier 4; the Worker background driver is built (`src/loop.js:151`, `src/main.js:1605`).
- `docs/31-multiplayer/README` and `04` (2026-10-13) say a Node authority is optional tier 4 and the build is "through tier 3"; server worlds (`server/world.js`) exist (deploy pending).
- `docs/31-multiplayer/09` says a guest's pause line reads "In Michael's valley as Whipitgood"; `here()` hard-codes `hostName: null` and uses the code as the name (`src/main.js:583`, `590`).
- `docs/31-multiplayer/09` says Leave world ends on the Worlds screen; it ends on the title (`src/main.js:348`). *Resolved at `2c70942`.*
- `docs/31-multiplayer/09` says a friend's row shows when you were last in it; `lastAt` is stored, never shown.
- `docs/10` status lists the pause menu without the Owner button that item 5 step 6 added.
- `docs/10` (Screens) gives the Escape chain as menu, screen, bag, pause; the code also closes Use mode, the station panel, the build palette, and placement, in that order (`src/main.js:679-696`).
- `CLAUDE.md` and `docs/10` say autosave is "every minute of game time"; it is 60 s of simulation time, two hours on the in-game clock, and about once a real second while everyone sleeps. *Resolved in part at `2c70942`: an autosave also needs a real minute, so sleeping no longer saves every second.*
- Settings label "Swing timer: On (a bar over your head)" (`src/settings.js:49`); the swing bars are at bottom centre (`style.css:561-565`), only the exposure bar is over the head.
- `src/ui/swing-timer.js:6` says "the left stack's moodles grow upward"; the moodles are on the right edge, centred (`style.css:317-321`).
- `src/view.js:74-75` says Auto zoom is "middle on a 4K one"; the arithmetic gives Close on 3840 by 2160 (Middle is 1440p).
- The Join screen's placeholder `oak-abc` (`src/ui/screens.js:624`) is the old code shape; codes are `word-word-xxxx` (`src/net.js:89-100`).
- The Settings hair row (`src/ui/screens.js:385-390`) is dead: it renders only when the identity api is absent, which never happens.
- "Combat testing" and "Dev chest" say "reload the page", but both are read when a world is created (`src/main.js:241-242`); a reload matters for combat testing's tree removal at boot (`src/main.js:1190-1193`), not for the dev chest in a new world (inferred).
- The Defaults button (`src/ui/screens.js:773`) resets identities, the browser id, friends' bookmarks, the creator key, and owner keys along with the display settings (`src/settings.js:32-37`, `92-94`); no doc mentions this. It is a hazard, not strictly a docs disagreement.
- "Move to the server" shows whenever any relay is set (`src/main.js:1372`), including relays that keep no worlds; docs describe it as available where the server takes worlds.
