> **A record, not kept up** (filed under `census/history/9205ad7/` by the sweep, 2026-10-16; game #87): the world fact sheet of the first census, read from the game at `9205ad7` (2026-10-14). Its line numbers are that commit's; the live list is `census/discrepancies.md`, and a redone sheet goes beside the census, dated (`CLAUDE.md`, "The census").

# The world and the valley

Game commit `9205ad7` (9205ad7e7119ce705b06bab7a47d76974b2f5fbd, 2026-10-14, origin/main), per `snapshot/version.json`.

Paths: `src/` and `tools/` are under `.game/`; `data/` is `snapshot/data/`. Line numbers are at that commit.

---

## The valley (the default map)

**Rule.** The game loads one generated map, "The valley": a 256 by 256 tile area holding a village, a river with a bridge and a ford, roads, and forest. You start inside your own cottage at the end of the south lane. Past the map's edge the world keeps going as wild forest. `?map=square` loads the old 32 by 32 proving ground instead.

**Numbers.**
- Bounds `[0, 0, 256, 256]`, spawn `[104, 216]` (inside "your cottage"), base floor `floor_grass`. There is no `seed` key, so the sim's generator is seeded with 1 (`src/game.js:74`, `json.seed ?? 1`). Source: `data/maps/valley.json`.
- 20 places (sets), 25 buildings, 31 doors and 50 windows on outer walls, 21 interior partitions, 27 torch brackets (23 with a torch, 4 empty: two in the chapel, one in the crypt, one in the shut cottage).
- 109 features: 46 water rects (45 river plus the duck pond), 45 dirt banks, 16 road rects, 1 stone bridge `[116, 157, 18, 3]` (`floor_stone`), 1 ford `[132, 206, 7, 3]` (`floor_water_shallow`), 1 fence (the graveyard, `[74, 84, 32, 14]`, gate on the south side at 17).
- 40 top-level props: 24 headstones, 4 stalls, 3 torch posts, 2 benches, and one each of well, market cross, trough, notice board, stocks, maypole, woodpile.
- 40 authored dead (`zombies`), 7 villagers (Innkeeper, Guest, Child, Priest, Reeve, Apprentice, Neighbour).
- 4 reserves where no forest grows: the village block `[56, 84, 64, 144]`, the castle's compound `[136, 126, 66, 64]`, Hollow Farm `[36, 230, 64, 26]`, Long Acre and the mill `[64, 24, 56, 44]`. The last three are empty grass: those places are not built yet.
- Roads (`group` names): high street (cobble, `[84, 157, 33, 3]`), west road (dirt, to x 0), bridge road (cobble), square (cobble, `[84, 152, 12, 12]`), nobles street, south lane, the lane, the drove (dirt, to x 160), two short lanes.
- Water bodies: the river (5 wide, 1-tile dirt banks), the duck pond `[86, 190, 6, 6]`, a 2 by 2 pond in the manor's garden, the ford (shallow).

**Code.** Loaded by `map.loadMap` (`src/map.js:1604-1808`); built into a world by `game.create` (`src/game.js:72-98`). The map is written by `python -I tools/mapgen/valley.py` (`tools/mapgen/valley.py:70` `build()`; vocabulary in `tools/mapgen/mapgen.py`). Default-map choice: `src/main.js:68`.

**Docs differ.** `docs/30-the-big-pass-spec.md:158` describes step 0's valley as "a dozen of the dead on the roads, the four villagers"; the map now has 40 and 7 (later steps added them; history, not an error).

**Confidence.** Read in code and data.

---

## The places in the valley

**Rule.** Each place is a named set with a footprint, buildings with rooms, furniture, and sometimes a fenced yard or plot. Furniture without drawn art is a labelled dev box.

**Numbers** (from `data/maps/valley.json` `sets`; corner, size, notable contents):
- your cottage `[98, 212]` 16x12: wood walls, 2 rooms by a partition, unlit fireplace, bed, 2 chests, shelf, table, 2 chairs; a farm plot `[9, 1, 6, 6]` of 36 crops (12 `crop_potato_2`, 12 `crop_cabbage_2`, 6 `crop_cabbage_1`, 6 `crop_potato_1`); well, barrel, woodpile; fence with gates south (4) and west (9); a bracket torch on the west wall. You spawn here.
- the inn `[98, 150]` 18x30: taproom and kitchen (two fireplaces lit at start with 3 logs each), three windows boarded 3 deep on the inside, a guest wing of three rooms (3 beds, 3 chests); fenced yard with well, privy, cart, trough, woodpile. Innkeeper, Guest, Child.
- the chapel `[84, 86]` 12x12: stone, pews, altar, lectern, font (a water source), both brackets empty. Priest.
- the crypt `[99, 85]` 6x6: stone, 2 coffins, a chest, empty bracket.
- the priest's house `[98, 88]` 8x8: door boarded 2 deep inside.
- the manor `[94, 116]` 16x34: stone, 3 rooms, two unlit fireplaces, strongbox, desk; walled garden with beehives, benches, trough, pond.
- the merchant's house `[72, 124]` 12x24: stone house and wooden storehouse, fenced yard, cart. Apprentice.
- the baker `[74, 176]` 8x6: oven lit at start with 2 logs.
- the joiner `[70, 182]` 10x14: workbench, sawpit, wheelbarrow, woodpiles.
- the weaver `[66, 148]` 14x10: loom, spinning wheel, 3 dye vats.
- the smithy `[98, 184]` 12x12: forge (unlit), anvil, grindstone; both south doors authored open.
- the toll house `[112, 174]` 6x8: strongbox, an outward bracket torch.
- a cottage by the merchant's, the cooper's long house, a cottage by the baker's, the chandler's house (with a workbench lean-to), the first cottage on the lane (door authored broken), the second cottage on the lane, the shut cottage (Neighbour inside; door closed; empty bracket), the reeve's house (stone north and west walls, wood south and east; Reeve).

**Code.** Buildings, openings (`open`, `broken`, `boards: { in, out }`), partitions, brackets: `src/map.js:1668-1729`. Per-side wall material: `src/map.js:1673`.

**Confidence.** Read in data and code.

---

## Chunks and growth

**Rule.** The map is stored in 16 by 16 tile chunks. Chunks are grown only around players (four chunks in every direction) and by things that change the world. Looking at, lighting, or rendering a tile never creates it; a tile not yet grown reads as plain grass, outdoors.

**Numbers.**
- `CHUNK = 16` (`src/map.js:16`).
- Growth ring: 4 chunks (64 tiles) round each player, every step (`src/game.js:440`, `map.ensureAround(p.gx, p.gy, 4)`); also at boot round the spawn and the player (`src/game.js:78`, `:93`). `ensureAround`'s own default is 3 (`src/map.js:1587`) but every caller passes 4.
- The blank tile for ungrown reads: `{ floor: defaultFloor, n: null, w: null, prop: null, room: 0 }`, frozen (`src/map.js:32`, `:64`).
- Mutators that grow (`growTile`, `src/map.js:971`): `dropItem`, `placeProp`, `setFloor`, `buildWall`, `destroyWall`, `addBracket`.
- Chunk keys are numeric with a layer slot; the layer is always 0 (`src/map.js:887-893`).
- Every random roll for the map is a hash of tile and seed (`hash2`, `src/map.js:217-222`), so a chunk grows the same whatever order chunks load.

**Code.** `getChunk` builds a chunk from the authored source or the wild rule (`src/map.js:901-950`); `tileAt` reads without growing (`src/map.js:961-967`); `peekTile` (`:984`).

**With friends.** Only the host grows chunks (`src/main.js:882`, a guest skips `game.begin`). The host grows a ring round every player including guests. Each grown or changed chunk is marked "touched" (`src/map.js:931`, `:665`) and sent whole in the next frame (`src/net.js:732`, `:806`); the guest installs it (`src/net.js:1043-1047`). A guest reading beyond what it was sent sees the blank tile.

**Confidence.** Read in code.

---

## The wild forest beyond the bounds

**Rule.** Past the valley's edge every chunk is wild: forest grown by rule, an occasional big rock, mushrooms near trees, and up to two of the dead per chunk. It is the same forest every visit. Roads and the river stop at the edge.

**Numbers** (`data/maps/valley.json` `wild`, `forage`, `biomes`):
- Biome `harvest`, only biome in the game: 24 tree kinds weighted 1 (oak and the coloured oaks, m and l), 0.5 (old oaks, spires m and l) or 0.25 (old spires); noise scale 9. Blue and purple trees exist as sprites but are not in the biome.
- Tree density 0.0405 to 0.1305 per tile, varying by smooth value noise (`densityAt`, `src/map.js:242-246`; noise seed `seed + 7`); seed 21.
- Rocks: one rock in 60% of 40 by 40 tile cells, at a spot rolled inside the cell, kinds `rock_0..3` equally, seed 51 (`wildRockAt`, `src/map.js:263-273`). Rocks appear only in the wild, never inside the valley.
- Dead per wild chunk: 0 to 2 (`zombiesPerChunk`), placed on a hashed tile of the chunk and only if that tile has no prop (`src/map.js:938-947`). They spawn idle, not aggro (`src/entities/zombie.js:36-41`).
- A chunk is wild if any of its tiles lies outside the bounds (`src/map.js:915-920`). The valley's bounds are exactly 16 by 16 chunks, so every chunk inside is authored and none is wild.

**Code.** `wildTile` (`src/map.js:313-322`), `wildTreeAt` (`:278-281`), spawns queued as `pendingSpawns` and turned into zombies in `game.begin` (`src/game.js:442`).

**Docs differ.** None found; `docs/03-world-model.md` status matches.

**Confidence.** Read in code and data.

---

## Forest inside the valley (scatter) and reserved ground

**Rule.** Inside the bounds, trees are scattered by rule over the whole map except roads, floors that are not grass, buildings with a one-tile ring, and the reserves.

**Numbers.**
- `scatter`: rect `[0, 0, 256, 256]`, density 0.05 to 0.16, biome harvest, seed 11 (`data/maps/valley.json`). The wild's density is 0.81 of this.
- Padding ring round every set: `padding ?? 1` tile (`src/map.js:1744`). A tile is skipped if its authored floor is not the base floor or it has a prop or a wall (`src/map.js:1763`).

**Code.** `src/map.js:1731-1767`.

**Confidence.** Read in code.

---

## Eviction of far chunks, and the dead that sleep with them

**Rule.** A wild chunk that play has not changed is dropped from memory when it is more than eight chunks from every player and no villager stands in it. The dead and the bodies in it go to sleep on record and come back exactly where they were when the chunk grows again. Chunks inside the valley, and any chunk you changed, are never dropped.

**Numbers.**
- `world.evictChunks` = 8 chunks, Chebyshev distance (`data/tuning.json world.evictChunks`; `src/map.js:846`).
- Only chunks with `wild && !dirty && layer 0` are candidates (`src/map.js:845`). A chunk becomes dirty for good on any play change: a floor, a prop placed or removed, an item dropped or taken, a wall or opening touched, a fire's fuel passing a whole unit (`markDirty`, `src/map.js:660-667`; `touch` `:637-651`; `burnFires` `:95`).
- Kept if a villager stands in it or any player is within 8 chunks (`src/game.js:452`).
- Dropped chunks' props leave the prop registry and the fire set (`src/map.js:850-855`); the light cache forgets the chunk (`src/light.js:279-290`).
- The sleepers are saved in the save by chunk key (`src/game.js:170`, `src/map.js:725-733`).
- A swaying mushroom's sway stamp is not a dirtying change, so wild chunks you only walked through stay evictable.

**Code.** `map.evictFar` (`src/map.js:841-862`), `map.sleep` (`:864`), `takeWoken` (`:876-883`); the step's use: `src/game.js:443-460`. Check: `tools/checks/eviction.js`.

**With friends.** Distance is measured from `players[0]` (the host) by `evictFar`, but `keep` holds any chunk within 8 of any player, so in effect the rule is "far from every player" (`src/game.js:450-453`).

**Confidence.** Read in code.

---

## What a far zombie (and villager) does

**Rule.** The dead and villagers more than 40 tiles from every player do not think or move at all: no wandering, no animation update, no brushing crops. They stand frozen where they are until a player comes within 40 tiles (or their chunk is evicted and they sleep on record).

**Numbers.** `world.activeTiles` = 40 tiles, a square box (|dx| and |dy| each at most 40) round each player (`data/tuning.json world.activeTiles`; `src/game.js:410-414`).

**Code.** `nearPlayer` (`src/game.js:410-414`); the skip: `src/game.js:511-520`. The debug corner counts them (`src/main.js:1121`).

**Docs differ.** `docs/03-world-model.md` (body) describes an active region of radius 2 chunks with zombies outside it becoming records that hop chunks, alarms and lures; its status line says these are not built and names the 40-tile stand-in, which matches the code.

**Confidence.** Read in code.

---

## Water, shallow water, and drinking

**Rule.** A tile that is wholly water (river, ponds) cannot be entered by anyone: you, the dead, villagers. Paths go round it. Shallow water (the ford) is walkable at half speed for everyone. Standing beside any water tile you can drink your fill and fill your waterskins, as at a well. Water causes no sickness.

**Numbers.**
- `floor_water`: `walk: false`, `drink: true` (`data/sprites/floor_water.json`).
- `floor_water_shallow`: `walk: 0.5`, `drink: true` (`data/sprites/floor_water_shallow.json`).
- Drink: 1.5 s (`DRINK_TIME`, `src/interact.js:47`), sets thirst to maximum, message "You drink your fill." (`src/interact.js:550-553`). Offered as the simple (E) action when thirst is under 90 (`src/interact.js:542`).
- Fill waterskins: 2.0 s (`FILL_TIME`, `src/interact.js:48`), sets every waterskin in the bag (not the belt) below 100 to 100 (`src/interact.js:538`, `:564-568`).
- Reach: 1.15 tiles from the water tile's centre (`INTERACT_RANGE`, `src/interact.js:42`); E looks at water tiles within two tiles of you (`src/interact.js:729-734`).
- Shallow water does not cost more in pathfinding; A* treats it as ordinary ground (`canStep`, `src/map.js:1131-1141`).

**Code.** Floor rules: `floorRule` (`src/map.js:1088-1097`), `isWalkableTile` (`:1114-1117`), `floorSpeedAt` (`:1120-1123`), `drinkableAt` (`:1125-1127`), water in collision (`circleBlocked`, `:1164-1171`). Speed applied in `src/entities/player.js:250`, `:275`, `src/entities/movement.js:51`, `src/entities/zombie.js:329`. Actions: `waterActions` (`src/interact.js:537-572`), `waterTileActions` (`:579-581`). Check: `tools/checks/water.js` (8 rows).

**With friends.** A guest's drink or fill is a menu action sent by address (a tile) and run on the host as its player (`src/interact.js:61-83`); the host has the guest's thirst in its record.

**Confidence.** Read in code.

---

## Wells, troughs, and the font

**Rule.** Any prop marked `water` gives the same two actions as water: drink your fill, fill waterskins. The well also plays its bucket animation when you drink or click it. A well never runs dry.

**Numbers.**
- Water props: `well`, `trough`, `font` (`"water": true` in `data/sprites/well.json`, `trough.json`, `font.json`).
- Well click animation: frames `crank_1, crank_2, crank_1` for 220, 420, 220 ms (`data/sprites/well.json clickAnim`); a click while it plays does nothing (`src/interact.js:1395-1403`).
- In the valley: wells in the square, your cottage, the inn yard; troughs in the square, the inn yard, the manor garden; the font in the chapel.

**Code.** `wellActions` (`src/interact.js:574-576`), dispatched for any `prop.water` (`src/interact.js:614`).

**Docs differ.** Not a doc claim, but a label: every water prop goes through `wellActions`, which names the source "well", so the trough and the font both offer "Drink from the well" (`src/interact.js:575`).

**Confidence.** Read in code.

---

## Fences and see-through walls

**Rule.** A fence is a wall you cannot walk through but can see and light through, and it never makes a room: a fenced field or yard stays outdoors. A gate is a door in a fence: it blocks bodies when shut but you still see through it.

**Numbers.**
- `wall_fence`: `wall.seeThrough: true`, 36 px tall, 6 thick, generated post-and-rail (`data/sprites/wall_fence.json`).
- Transmission of a see-through wall or a shut gate: 1 (`src/map.js:1024`, `:1027`).
- `wall.climb: false` exists as a rule (no window in that material can be climbed: an arrow slit) but no wall material in the data sets it (`src/map.js:1103-1112`, `:577`).
- Fences in the valley: 5 (the graveyard's feature, plus your cottage, the inn yard, the manor garden, the merchant's yard).

**Code.** `fence` in `loadMap` (`src/map.js:1633-1651`), `wallRule` (`:1103-1112`), the room fill ignoring see-through walls (`:1374-1376`). Check: `tools/checks/water.js` rows 7 and 8.

Note: the map's own note on the graveyard fence says "a low stone wall when drawn"; for now it is the generated fence.

**Confidence.** Read in code and data.

---

## Walls, doors, windows as edges (for sight and light)

**Rule.** Walls sit on tile edges, not on tiles. Plain walls and shut doors block sight and light entirely; open doors and open shutters let everything through; closed shutters leak a little light but block sight; boards block everything; a broken door or shutter is an open hole.

**Numbers.**
- Transmission (`src/map.js:1019-1028`): none 1; boarded 0; plain wall 0 (1 if see-through); broken 1; window closed 0.05 (`openingTunables.shutterLeak`), open 1; door shut 0, open 1.
- Sight is blocked when transmission < 0.5 (`blocksSight`, `src/map.js:1030-1032`).
- Board and leaf hit points (for context): board 40, door 100, shutter 60, 3 boards a side (`src/map.js:431-434`).

**Code.** `src/map.js:1014-1032`.

**Confidence.** Read in code.

---

## Rooms by flood fill

**Rule.** A room is any enclosed area of floor bounded by walls, doors, and windows; nobody authors rooms. An area larger than 300 tiles, or one that touches an ungrown chunk, counts as outdoors. Fences do not bound rooms. Building or removing a wall refinds only the rooms on either side of it.

**Numbers.**
- `ROOM_MAX = 300` tiles (`src/map.js:23`).
- Room ids count up and are never reused in a session (`src/map.js:1333`).
- Each room records its openings (doors and windows its fill touched), which light reads (`src/map.js:1346-1384`).

**Code.** `fillRegion` (`src/map.js:1341-1393`), `rebuildRooms` (`:1395-1420`), local refind `rebuildRoomsAround` (`:1429-1457`), `roomAt` (`:1463-1466`). The world refinds rooms before the light each step (`src/game.js:551`). Check: `tools/checks/rooms.js`.

**With friends.** A guest refinds rooms itself from the chunks it is sent (`installChunk` marks rooms dirty, `src/map.js:771`).

**Confidence.** Read in code.

---

## The day and night clock

**Rule.** A full day lasts twelve real minutes. New games start at 08:00 on Day 1. It is fully dark from 23:00 to 06:00, with an hour of dusk (22 to 23) and dawn (6 to 7). Night is dusky, never black. The HUD shows "Day N, HH:MM".

**Numbers.**
- `DAY_LENGTH = 720` real seconds per day (`src/clock.js:5`); one game hour is 30 s (`HOUR_SECONDS`, `src/map.js:84`, a second copy of the same figure).
- Brightness 1.0 by day, 0.22 at night (`NIGHT_B`, `src/clock.js:7`); dusk starts 22, night 23 to 6, dawn ends 7 (`src/clock.js:12-15`).
- Start hour 8 (`src/clock.js:18`).
- Phases: night, dawn, day, dusk (`getPhase`, `src/clock.js:60-66`); `nightFactor` 0 by day to 1 at night (`:83-85`).
- While every living player sleeps the world runs at `player.sleepTimeScale` = 60, so a day passes in 12 s (`data/tuning.json`; `src/game.js:261-263`).
- Debug keys: `]` and `[` skip an hour forward or back (`src/main.js:909-910`). `setHour` stays within the current day, so `[` at 00:30 jumps to 23:30 of the same day (`src/clock.js:41-44`).

**Code.** `src/clock.js`; advanced in `game.begin` (`src/game.js:432`).

**With friends.** The clock is the host's: a guest's clock is set from every frame (`src/net.js:1040`). The `]`/`[` keys on a guest change its clock only until the next frame; on the host they move everyone's clock.

**Confidence.** Read in code.

---

## Light: the one function

**Rule.** Every position has one light level from 0 to 1, made of the ambient light (the sky outdoors, the room indoors), the baked pools of fixed fires and torches with real shadows, and any torch carried. It decides how far the dead can see you and how the world is drawn at night.

**Numbers** (`src/light.js`):
- `RES = 2` light cells per tile (`:18`); per-chunk maps one cell beyond each side (`:19`).
- A source adds `min(1, 1.4 * (1 - d / radius)) * intensity * transmission-along-path` (`CORE_GAIN = 1.4`, `:20`, `:368`). Intensity is rounded to steps of 1/20 (`:356`).
- `dayCap = 0.92`: outdoor ambient never exceeds 0.92 (`:27`, `:113-115`).
- Light paths multiply the transmission of every edge crossed and stop at an opaque prop; at most 400 steps (`lightPath`, `:191-227`).
- `lightAt` = ambient + static map + carried lights, capped at 1; within 0.6 tiles of a carried flame the light is +1 (`:415-427`).
- Flicker weight `1 - amp * (0.35 + 0.65 * a * b)` from two sines (`:296-301`); applied only when drawn, never in the sim's maps.

**Code.** `update` once per step builds lit rooms, sources, and portals (`src/light.js:48-103`); called at the end of `game.step` (`src/game.js:566`).

**With friends.** The light is the world's; a guest rebuilds it from its replica each frame (`src/net.js:1145-1152`) with the carriers the host sends when they change.

**Confidence.** Read in code. Note: `poolRays()` (`src/light.js:263-271`) refers to an undefined `carrier` and would throw if called; nothing calls it (dead code; the pool is drawn by `src/render/area.js:120-143`).

---

## Indoor light: rooms, hearths, openings

**Rule.** A lit hearth or fireplace lights its whole room fully. A room without one gets a share of daylight through its open doors and shutters; shut every opening and noon inside is as dark as midnight.

**Numbers** (`src/light.js:26-31`, `:124-144`):
- Lit room: ambient 1 (`:138`).
- Unlit room: `0.22 + (0.88 - 0.22) * day * openness * 0.5`, where day is `1 - nightFactor`, openness is `0.5 * transmission` per opening summed and capped at 1 (`openingDaylight 0.5`, `unlitRoomCap 0.88`, `roomBounce 0.5`). The brightest an unlit room gets is 0.55. A closed shutter adds 0.025 openness.
- Which fires light their room: those with `fire.room: true`: `fireplace` and `hearth` (`data/sprites/fireplace.json`, `hearth.json`). The oven, forge, and campfire do not.

**Code.** `roomAmbient` (`src/light.js:137-144`), `ambientAt` (`:146-149`).

**Docs differ.** `docs/07-lighting.md:18` gives the unlit room as `0.22 + (0.88 - 0.22) x dayFactor x openness`; the code multiplies by a further `roomBounce` 0.5 (the rest goes to the portals, per `docs/08`).

**Confidence.** Read in code.

---

## Portals (light through doors and windows)

**Rule.** Every open door or window with a difference in light between its two sides glows onto the darker side: daylight pools on the floor inside a window by day, and a hearth-lit room spills light out of its windows at night. Closed shutters throw no pool.

**Numbers** (`src/light.js:21-23`):
- Radius: door 3, window 2.5 tiles.
- Needs a difference of at least 0.1 (after transmission) between the sides (`PORTAL_MIN`).
- Placed 0.3 tiles off the edge on the darker side (`PORTAL_OFF`), lighting only that side.
- Intensity = difference in ambient between the sides times transmission. A closed shutter's 0.05 never reaches 0.1, so closed shutters make no portal.
- Fence gates are not room openings (see-through walls are skipped by the fill), so they make no portals.
- Portals are not flames: the dead are not drawn to them (`src/light.js:178-183`).

**Code.** `src/light.js:65-95`.

**Confidence.** Read in code.

---

## Fires: hearths, campfires, ovens, forges

**Rule.** A fire burns one unit of its fuel every few game hours and goes out at zero, saying so. You light or feed it from the menu (or E) with its fuel in your bag; nothing else is needed to light it. A lit fire casts a flickering pool of light, and a fireplace lights its room. Fires burn wherever they are, near a player or not.

**Numbers** (each sprite's `fire` block in `data/sprites/`):
- `fireplace`: radius 3, lights room, cooks, fuel `log`, 3 h per unit, max 4 units (12 h), flicker 0.18 / 6.
- `hearth`: same as fireplace (radius 3, room, log, 3 h, max 4). Not placed in the valley.
- `campfire`: radius 4, cooks, `log`, 2 h, max 4 (8 h), flicker 0.22 / 7. Not in the valley (it is in `?map=square`).
- `oven`: radius 2, cooks, `log`, 2 h, max 3 (6 h), flicker 0.15 / 6; a station.
- `forge`: radius 3, does not cook, fuel `charcoal`, 2 h, max 4, flicker 0.2 / 7; a station.
- Defaults if unset: max fuel 4, 2 h per unit, fuel `log` (`src/map.js:1534-1536`).
- Burn rate: `fuel -= dt / (hoursPerUnit * 30)` per step (`src/map.js:92`). A full fireplace lasts 6 real minutes; at the sleep speed of 60, 6 s.
- Start state: burners are unlit with no fuel unless the map says (`src/map.js:1532-1533`). In the valley the inn's two fireplaces start lit with 3 logs (9 game hours: out about 17:00 on Day 1 unless fed) and the baker's oven with 2 (out about 12:00).
- Feeding: one unit per action, refused when full (`feedFire`, `src/map.js:108-117`); the label names the fuel and hours left, "under an hour" below 1 (`src/interact.js:350-379`).
- Events: `fireFed` and `fireOut` (`src/map.js:115`, `:100`).

**Code.** `burnFires` (`src/map.js:87-103`), called in `game.begin` (`src/game.js:433`); sources added in `light.update` (`src/light.js:51-58`).

**With friends.** The host burns the fuel. A guest's copy of a fire's fuel refreshes when its chunk is sent, at every whole unit burned and when it goes out (`src/map.js:95-100`), so a guest's hours-left label can be up to one unit behind. Feeding is a guest menu action run on the host.

**Docs differ.**
- `docs/30-the-big-pass-spec.md:69` lists "light (a torch or a flint, exists)"; the code lights a fire just by feeding it a unit of fuel, with no torch or flint involved (`src/interact.js:361`, `:372-376`).
- `docs/07-lighting.md:122` (its numbers list) still says "one log per two game hours" and `:113` "lit with four logs it lasts a night and dies at dawn"; the fireplace and hearth burn 3 h a log (12 h full), the campfire 2 h (8 h). The status line at `:3` notes the change.

**Confidence.** Read in code and data.

---

## Torches: carried, belted, brackets, posts

**Rule.** A torch never burns out. Held in a hand it lights a pool round you (and makes you visible to the dead from far off at night); on the belt it gives half the light; in the bag it is dark. A torch cannot be set on the ground lit: it mounts in a bracket on a wall or on a post, where it burns forever. T takes a torch from what you carry into a hand, or puts it away.

**Numbers.**
- Torch item: `fire.radius` 3, flicker 0.14 / 9, hands `either` (`data/items.json` torch).
- Carried strength: in hand 1; a torch in each hand 1.35 (radius 4.05); on the belt 0.5 (radius 1.5) (`data/tuning.json world.twoTorches`, `world.beltLight`; `src/game.js:555-564`).
- Brackets: state on a wall edge, `{ side, torch }`; the torch burns 0.3 tiles off the edge on its side (`src/map.js:137-150`); radius and flicker are the torch item's (`src/light.js:59-64`).
- Posts: `torch_post` holds a torch (`fire.holds: "torch"`), radius 3, flicker 0.14 / 9, collision radius 0.12; lit only while it holds one (`data/sprites/torch_post.json`; `src/map.js:1530-1532`, `:181-187`).
- In the valley: 23 brackets start with a torch, 4 empty; the square's 3 torch posts start **empty** (no `torch: true` in the map), so they give no light until you mount a torch.
- Reach to a bracket: 1.15 tiles for E (`src/interact.js:742`), 0.8 tiles from the cursor's ground point for the menu (`src/interact.js:694`).
- Actions: "Take the torch", "Mount the torch", "An empty bracket (need a torch)" / "An empty post (need a torch)" (`src/interact.js:401-440`).
- Burning characters are also moving lights: radius 2.4, flicker 0.3 / 12 (`src/fire.js:25-26`, `:85-89`); a visual test only.

**Code.** Carried light computed each step (`src/game.js:552-566`); T key (`src/interact.js:984-991`).

**With friends.** One carried light per player with its owner id (`src/light.js:161-164`); the host sends them when they change (`src/net.js:814`). T is a key event in the player's snapshot, performed by the host (`src/interact.js:939`).

**Docs differ.**
- `docs/02-decisions.md:1157` says a post is "a prop built from wood outdoors"; nothing builds a torch post: `data/build.json` has only wall, door, window, and no recipe in `data/recipes.json` makes one.
- `docs/07-lighting.md:67` describes the torch as `off`-hand; the item is `hands: "either"`.
- The valley generator's comment calls the square's posts "lamps" (`tools/mapgen/valley.py`, step 1 comment) but places them without torches.

**Confidence.** Read in code and data.

---

## The dead and light

**Rule.** The dead see you farther the brighter the light on you. At night they see fire from far away and walk to it; a torch you carry gives your position away. Portals do not attract them.

**Numbers.**
- Sight range = `zombie.sight * (sightDarkFraction + (1 - sightDarkFraction) * lightAt(player))` = `8 * (0.35 + 0.65 * light)` tiles (`data/tuning.json zombie.sight`, `zombie.sightDarkFraction`; `src/entities/zombie.js:232-237`). By day outdoors (light 0.92) about 7.6 tiles; unlit at night (0.22) about 3.9 tiles; in a torch's pool 8.
- Flame range = `zombie.flameRange * nightFactor * strength` = 12 tiles at full night, 6 for a belted torch, 16.2 for two torches, 0 by day (`src/entities/zombie.js:295-311`).
- Both need a clear line of sight. Both need the `zombieAggro` rule on (off by default: `src/settings.js` DEFAULTS).

**Code.** `canSee`, `nearestFlame` (`src/entities/zombie.js:232-311`); `light.allSources` (`src/light.js:180-183`).

**Docs differ.** `docs/07-lighting.md:19` says unlit at night the range is "about a third"; because night brightness is 0.22, not 0, the computed range is about 49% (3.9 of 8 tiles).

**Confidence.** Read in code (the dead's behaviour beyond sight belongs to the zombie census).

---

## Sight and the fog

**Rule.** You see every tile on screen that has a clear line from your tile, through open doors and open shutters, over fences, past trees; walls, shut doors, closed shutters, and boards block it. Tiles out of sight are drawn under a dim purple fog, and characters standing in them are not drawn at all. Darkness does not shorten your sight; it only darkens the picture. V turns the fog off (debug).

**Numbers.**
- Grid ray walk (Amanatides and Woo), at most 400 steps (`src/visibility.js:10-45`).
- A tile counts as seen if its centre or any of four points 0.42 tiles toward its corners is in line (`CORNER`, `src/visibility.js:58-67`).
- Cast from your rounded tile centre, over the tiles of the viewport plus a margin of 2 and extra rows below for tall sprites (`src/camera.js:38-55`).
- Recomputed only when your tile, the camera's tile, the world version, or the window size changes (`src/main.js:990-997`).
- Fog colour rgb(22, 14, 32) at alpha 0.36 (`src/render/scene.js:31-32`).
- No prop blocks sight in the shipped maps: `opaque` is read from the map entry, not the sprite (`src/map.js:1500`), and no map entry sets it, so trees, rocks, and furniture never block sight or light.

**Code.** `src/visibility.js`; fog texture `src/render/area.js:154-169`; characters hidden when out of sight `src/render/entities.js:184`; props are drawn fogged, their flames only when seen (`src/render/props.js:142-148`). V: `src/main.js:887`; L cycles light debug views (`src/main.js:907`).

**With friends.** Sight and fog are each client's own, from its own player (`src/main.js:995`). Another player is drawn only when in your sight, never through a wall (`src/render/entities.js:184`).

**Docs differ.** `docs/07-lighting.md:115` (acceptance 6, "The fog is light"): "In the forest at night without a torch you see the few tiles around you". The code's visible set is line of sight over the whole viewport with no light term; night only tints the picture.

**Confidence.** Read in code.

---

## Seeing through trees

**Rule.** When you walk behind a tall tree, a soft round hole opens in its canopy so you can see yourself. Only trees do this, only for your own character: the dead and other players behind a tree stay hidden by it. Walls you are inside fade instead.

**Numbers.** Hole fully clear within 34 px, fading to solid at 78 px (`src/render/scene.js:42-43`); only props with a `canopy` and a frame at least 64 px tall occlude (`OCCLUDER_MIN_HEIGHT`, `src/render/scene.js:41`; `src/render/props.js:156`); near walls drawn at alpha 0.42 (`NEAR_WALL_ALPHA`, `src/render/scene.js:35`).

**Code.** `computeOcclusion` (`src/render/scene.js:97-121`).

**With friends.** The hole is for "me" alone (`src/render/scene.js:106`).

**Confidence.** Read in code.

---

## Trees

**Rule.** Trees stand in the forest and the village edges. You can slip between trunks: only a small circle at the trunk blocks you, and walking into one slides you round it, but the dead path round the whole tile. Clicking a tree in reach makes it sway. You can chop any tree down with no tool; it vanishes and leaves logs on the ground.

**Numbers.**
- 36 tree sprites: 6 colours of oak (green "oak", blue, orange, purple, red, yellow) and 6 of spire, each in m, l, old (`data/sprites/tree_*.json`). 24 are in the harvest biome; blue and purple appear in no map.
- Per size (m / l / old): collision radius 0.18 / 0.22 / 0.3; wood (logs when chopped) 3 / 4 / 6; canopy reach 2 / 3 / 4; shadow width 0.42; `interactable: true`.
- Fallen-leaf colour: brown, yellow, orange, or red by tree (`leaves`).
- A body counts as radius 0.2 against round things, 0.3 against walls (`ROUND_BODY_RADIUS`, `src/map.js:24`, `:1181`).
- Chop: 3.0 s (`CHOP_TIME`, `src/interact.js:46`); removes the prop and drops `wood` logs on its tile (`src/interact.js:516-532`). No stump is left; the message always says "logs" (no tree has 1 wood).

**Code.** Round-prop collision and tangent slide: `src/map.js:1172-1183`, `:1238-1280`. Tree actions dispatched by `prop.wood` (`src/interact.js:613`).

**With friends.** Chopping is a menu action by prop id, performed on the host; the removed prop and the logs reach guests in the touched chunk.

**Docs differ.**
- `docs/30-the-big-pass-spec.md:63` and `:139`: "chop a tree or a stump (hatchet)"; the code needs no hatchet (or anything) to chop, and leaves no stump (`:97` speaks of a tree transformed to a stump).
- `docs/02-decisions.md:1177` gives tree radii "small, medium, and large trees are 0.14, 0.18, and 0.22 tiles, a giant 0.3"; the data has three sizes only (0.18, 0.22, 0.3), no 0.14.

**Confidence.** Read in code and data.

---

## Rocks

**Rule.** Big rocks appear rarely in the wild forest beyond the valley. They block like a trunk and sway when clicked. There is nothing else to do with them yet.

**Numbers.** `rock_0..3`: collision radius 0.38, shadow width 0.5, `interactable: true`, not carryable (`data/sprites/rock_*.json`). One in 60% of 40 by 40 cells (see the wild).

**Code.** No action in `propActions` for rocks (`src/interact.js:607-619`).

**Docs differ.** `docs/30-the-big-pass-spec.md:139` "Pickaxe: mine a rock (stone blocks; the rock goes)" is specified for step 6, not built; the pickaxe item exists with `verbs: ["mine"]` but nothing reads it.

**Confidence.** Read in code.

---

## Mushrooms (forage)

**Rule.** Small mushrooms grow near trees, inside the valley and in the wild, at a slight offset in their tile so they do not line up. You walk through them and they sway as you pass; clicking sways them. They cannot be picked yet.

**Numbers.** `forage`: kinds `mushroom_0..4` equally, chance 0.021 per eligible tile, only within 2 tiles of a tree with a canopy, seed 41 (`data/maps/valley.json forage`). Offset up to about ±0.3 tile in each grid axis (`src/map.js:307-309`). Placed with `solid: false`. Inside the bounds only on plain grass tiles with nothing authored (`src/map.js:1783-1796`).

**Code.** `forageProp` (`src/map.js:301-310`).

**Docs differ.** `src/ground.js:17` (a code comment, not a doc) lists mushrooms among the baked flat decals; mushrooms are props now and `data/ground.json` has no mushroom decal. `docs/30` section 4 "pick a mushroom" is not built.

**Confidence.** Read in code.

---

## Gatherables and the wobble

**Rule.** Things meant to be gathered one day (trees, rocks, mushrooms, crops, pumpkins) are interactable: a left click within reach makes them sway, and any character walking through one you can walk through (a crop, a mushroom) sets it swaying too, one full sway at a time. The well plays its bucket animation instead. Decoration on the ground does neither.

**Numbers.**
- Sway length 560 ms (`WIGGLE_MS`, `src/render/props.js:94`; `BRUSH_MS`, `src/interact.js:1256`). Lean `round(sin(k * 3 pi) * reach * (1 - k))` px with reach `clamp(height / 40, 1.5, 5)` (`src/render/props.js:95-104`).
- Click reach 2.6 tiles (`CLICK_REACH`, `src/interact.js:1156`); a click restamps only after 600 ms (`POKE_COOLDOWN_MS`, `:1152`).
- Brushing needs a move of 0.02 tiles since the last counted point (`src/interact.js:1262`); standing still does nothing.
- Found by visible pixels, looking up to 7 tiles down the grid for tall crowns (`src/interact.js:1177-1201`).
- Interactable sprites: 36 trees, 4 rocks, 5 mushrooms, 15 crops, `pumpkin`, `pumpkin_plain_0`, `pumpkin_plain_1`. A definition can opt out with `sway: false` (none does) or use `clickAnim` (the well).
- Both stamp and drawing read the sim clock, `loop.simTime()` (`src/interact.js:1245`, `src/render/props.js:99`).

**Code.** `pokeAt` (`src/interact.js:1240-1248`), `brushThrough` (`:1257-1272`), called for players, near dead, and near villagers each step (`src/game.js:505`, `:514`, `:519`).

**With friends.** Stamps of a step (at most 400) go out in the frame as pokes and the guest applies them (`src/interact.js:1211-1226`; `src/net.js:812`, `:1049-1053`); a guest's own click is sent to the host, which checks reach and rest (`stampFromGuest`, `src/interact.js:1229-1238`).

**Docs differ.** `CLAUDE.md` says gatherables' "art has a dark outline all the way round"; that is a property of the drawn art, not checkable in code (the crops and pumpkins are drawn sheets).

**Confidence.** Read in code; the outline is inferred from the docs.

---

## Crops as they stand

**Rule.** Crops stand in furrowed farm soil, their rows following the furrows. You walk through them and they sway. They do not grow, ripen, or harvest yet.

**Numbers.**
- 15 crop sprites: cabbage, garlic, potato, pumpkin, rye, each at stages 0, 1, 2 (`data/sprites/crop_*.json`): `interactable`, `furrows`, not carryable.
- Floors `floor_farm` (furrows `x`) and `floor_farm_y` (furrows `y`).
- Valley: only your cottage's plot, 36 crops (potato and cabbage at stages 1 and 2), placed `solid: false` by the generator (`tools/mapgen/mapgen.py:189-198`).

**Code.** Facing from the soil's furrows at load (`src/map.js:1801-1817`); `furrowsPending` (`:1516`).

**Docs differ.** A code comment, `src/entities/player.js:152`, says that while sleeping "crops grow"; nothing grows crops.

**Confidence.** Read in code.

---

## Pumpkins

**Rule.** Lit jack-o'-lanterns give a small flickering light; plain pumpkins can be clicked to sway and carried. Neither is in the valley; both are in `?map=square`.

**Numbers.** `pumpkin`: fire radius 1.5, lit, flicker 0.12 / 5, interactable, carryable. `pumpkin_plain_0/1`: interactable, carryable (`data/sprites/pumpkin*.json`).

**Confidence.** Read in data.

---

## The ground

**Rule.** The ground is one picture per chunk, baked from grass tiles, laid floors, and the blends between dirt, farm soil, cobble, and water, with fallen leaves, twigs, pebbles, flowers, tufts, and tree shadows. The same chunk bakes the same pixels every visit. It is purely a picture: it does not change the world.

**Numbers** (`data/ground.json`, `src/ground.js`):
- Chunk picture 1024 by 512 world pixels (`W`, `H`, `src/ground.js:48-49`), tiles 64 by 32.
- Kept textures: within 2 chunks of the camera's chunk plus the view's ring; hard cap 36 (`KEEP_RADIUS`, `CAP`, `src/ground.js:53-54`).
- A change re-bakes chunks within 4 tiles (`REACH_MAX`, `src/ground.js:55`; `invalidate` `:926-940`); a prop change matters only if its sprite casts a `shadow` (trees and rocks).
- A chunk is baked only when it and its eight neighbours are grown (`grown`, `src/ground.js:828-831`).
- Floor kinds: grass, dirt, farm, cobble, water; `floor_water_shallow`, `floor_wood`, `floor_stone` are laid (hard diamonds).
- Blend priorities: dirt 1, farm 2, cobble 3, water 4; cobble and water always sit inside a dirt verge.
- Grass: 6 drawn tiles (4 full, 2 sparse), base colour (75, 95, 61), patch tint.
- Canopy darkening: 0.07 per tree, at most 0.20, falloff `1 / (1 + d)` to the canopy's reach.
- Shadows: 3 steps, alpha 0.09, squash 0.6, drop 2 px.
- Decals: leaves (in the nearest tree's colour, chance per reach 0.3, extra 0.22, open 0.05), twigs (0 to 2 per tree within 1.2), pebbles 3%, flowers 5% on open ground, tufts 11.7%.
- Ground seed 1.
- The setting `squareSurface` (cobble or dirt) rewrites the floor of the features grouped "square" (`src/main.js:1006-1009`, `:1232-1240`); in the valley that is only `[84, 152, 12, 12]`.

**Code.** `src/ground.js` (bake `:565`, update and eviction `:886-920`); drawn as one quad per chunk (`src/render/scene.js` `emitGround`).

**With friends.** Each client bakes its own ground from the chunks it holds. The `squareSurface` setting is applied by each client through `map.setFloor`, a world mutator, outside the step (`src/main.js:227`, `:1239`); on a guest this changes its replica's floor until the host resends the chunk (inferred: a guest with "dirt" chosen and a host with "cobble" disagree).

**Docs differ.** `docs/15-ground.md:118` "Any prop definition with `shadow` casts one; only trees have it today": the rocks have `shadow` too.

**Confidence.** Read in code and data; the guest `squareSurface` divergence is inferred.

---

## Collision and movement over the map

**Rule.** Bodies are circles that slide along walls; an open doorway pulls you toward its centre when you brush its jamb. Solid props block their tile (round ones only a circle). Pathing never cuts a wall corner.

**Numbers.** Door magnet within 1 tile along the wall (`src/map.js:1286-1300`); diagonal steps need both corner tiles walkable and all four edges clear (`src/map.js:1131-1141`); `nearestWalkable` searches 12 rings (`:1308`); A* expansions 1500 by default, 2500 for the player's auto-walk (`src/pathfind.js:53`, `src/entities/player.js:218`).

**Code.** `circleBlocked` (`src/map.js:1155-1207`), `moveCircle` (`:1260-1305`).

**Confidence.** Read in code.

---

## Candidate wiki pages

- **The Valley**: the map as a whole, its size, roads, river, and the list of places with links.
- **Your Cottage**: the starting home, what is in it and its plot.
- **The Village** (or one page per place: The Inn, The Chapel and Graveyard, The Crypt, The Manor, The Smithy, The Baker, The Joiner, The Weaver, The Toll House, the cottages): rooms, furniture, fires, who lives there, the dead at start.
- **The River, the Bridge and the Ford**: water you cannot cross, the bridge, the shallow ford at half speed.
- **The Wild**: the endless forest past the valley, rocks, mushrooms, the dead per chunk.
- **Water and Drinking**: water tiles, shallow water, wells, troughs, the font, drinking and filling.
- **Fences and Gates**: see-through walls, rooms, gates.
- **Rooms**: how a room is found, outdoors, the 300-tile limit.
- **Day and Night**: the 12-minute day, the hours, phases, the debug keys, sleep speed.
- **Light**: how light works, indoor light, portals, what the dead see.
- **Fires**: fireplace, hearth, campfire, oven, forge: fuel, hours, lighting and feeding, cooking.
- **Torch**: holding, belting, two torches, brackets, posts, never burning out.
- **Sight and Fog**: line of sight, the fog, seeing through trees.
- **Trees**: kinds, sizes, collision, chopping, logs.
- **Rocks**, **Mushrooms**, **Crops**, **Pumpkins**: what they are and what you can do now.
- **Gatherables**: the wobble rule, click reach, brushing through.
- **The Ground**: how the ground looks and why it never changes on its own.
- **Chunks and the Living World** (technical): growth ring, eviction, frozen far dead.

---

## Discrepancies

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
- `tools/mapgen/valley.py` comment "lamps" for the square's torch posts; they are placed without torches and give no light.
- Code label: troughs and the chapel's font offer "Drink from the well" (`src/interact.js:575`).
- Code comment `src/entities/player.js:152`: "crops grow" during sleep; no crop growth exists.
- Code comment `src/ground.js:17`: mushrooms as baked decals; they are props and `data/ground.json` has no mushroom decal.
- Code: `light.poolRays()` (`src/light.js:263-271`) references an undefined `carrier` and would throw if called; it is never called.
- Code: `opaque` is read only from map entries (`src/map.js:1500`), never from sprite definitions, and no map sets it, so no prop blocks sight or light (`docs/02` question 27 leaves "whether rocks block sight" open; in practice nothing does).
- Code/multiplayer (inferred): the `squareSurface` setting mutates the map from the client (`src/main.js:1006-1009`), so a guest's choice can make its square's floor differ from the host's until the chunk is resent.
