> **A record, not kept up** (filed under `census/history/9205ad7/` by the sweep, 2026-10-16; game #87): the building fact sheet of the first census, read from the game at `9205ad7` (2026-10-14). Its line numbers are that commit's; the live list is `census/discrepancies.md`, and a redone sheet goes beside the census, dated (`CLAUDE.md`, "The census").

# Census: home, building, and openings

Game commit `9205ad7` (9205ad7e7119ce705b06bab7a47d76974b2f5fbd, 2026-10-14). Code paths are under `.game/src/`, data paths under `snapshot/data/`.

## Walls are edge state

**Rule.** A wall is not an object on a tile. It sits on the edge between two tiles. Each tile holds two slots: `n`, its north edge (the upper-right side of the diamond on screen), and `w`, its west edge (the upper-left side). A tile's south and east sides are the `n` of the tile below and the `w` of the tile to the right. Doors and windows are walls with a different `kind` (`wall`, `door`, `window`) and some state.

**Numbers.**
- A wall record is `{ kind, sprite, open, shutter, boards: { near: [], far: [] }, hp, broken }`, plus `built` and `at` on walls the player builds: `src/map.js:490-500`, `src/map.js:465-476`
- The near side of an edge is the tile it belongs to (south of an `n` edge, east of a `w` edge), +1. The far side is -1: `src/map.js:508-510`
- A plain wall has `hp: Infinity` and nothing ever damages it: `src/map.js:497`

**Code.** `src/map.js:993-1007` (`edgeBetween`, `wallBetween`), `src/map.js:441-451` (`edgeTiles`, `edgeMid`).

**Confidence.** Read in code.

## Wall materials, heights, thickness

**Rule.** Every wall has a material, which is its sprite. Wood, stone, and log walls are solid drawn art 80 px tall. The fence is a low wall you can see through. Each material has its own thickness, and the corner posts take the heaviest material that meets there (stone over log over wood). The only wall the player can build is log.

**Numbers.**
- `wall_wood`: height 80, thickness 14, post `post_wood`: `snapshot/data/sprites/wall_wood.json` `wall`
- `wall_stone`: height 80, thickness 16, post `post_stone`: `snapshot/data/sprites/wall_stone.json`
- `wall_log`: height 80, thickness 18, post `post_log`: `snapshot/data/sprites/wall_log.json`
- `wall_fence`: height 36, thickness 6, `seeThrough: true`, still placeholder art: `snapshot/data/sprites/wall_fence.json`
- Default thickness when a sheet sets none is `WALL_T` = 18 px: `src/placeholders.js:82`. Default height when a sheet sets none is 72: `src/render/walls.js:305`, `src/render/walls.js:380`
- Openings sit at fixed heights whatever the wall's height. Door top 48, window sill 22, window top 51, torch bracket 32 px up: `src/placeholders.js:88-91`
- Wall material flags: `wall.seeThrough` lets sight and light through and bounds no room. `wall.climb: false` means nothing climbs through that wall's windows. Both are read by `wallRule`: `src/map.js:1103-1112`. No material in the data sets `climb: false`, so there are no arrow slits yet.
- In the valley map, building materials are 20 wood, 4 stone, and 1 mixed (stone n/w, wood s/e), plus 1 fence feature (counted from `snapshot/data/maps/valley.json`)

**Code.** `src/map.js:1103-1112`, the material per side in `src/map.js:1672`, posts and caps in `src/render/walls.js`.

**Docs differ.** `docs/17` §plan says "Log-wall corners fall back to `post_wood`", but `wall_log.json` names `post_log`. The plan was superseded by its own Status; this note is history.

**Confidence.** Read in code and data.

## Doors

**Rule.** A door starts closed. A closed door blocks bodies and sight. Tap E near it, or use the right-click menu, to open or close it from either side. The dead never open doors. They walk through open ones and break closed ones. An open (or broken) unboarded door lets bodies pass across the full width of the edge. A walk into the wall next to an open doorway slides you toward it (the "door magnet").

**Numbers.**
- Door leaf hp `DOOR_HP` = 100: `src/map.js:432`
- A door passes a body when it is open or broken and has no boards: `src/map.js:568-573`
- Light and sight through a door: closed 0, open or broken 1. A shut gate in a see-through fence still passes sight: `src/map.js:1021-1028`
- E reach `INTERACT_RANGE` = 1.15 tiles to either tile of the edge: `src/interact.js:42`
- Door magnet: an open door within one tile along the wall: `src/map.js:1211-1230`, `src/map.js:1260-1305`
- In the valley map: 27 plain doors in outer walls, 2 authored open, 1 authored broken, 1 with 2 boards inside, and 19 doors in interior partitions (counted from `valley.json`)

**Code.** `src/interact.js:443-472` (open and close), `src/map.js:1076-1081` (an open doorway is passable across its whole width).

**With friends.** A guest's E tap is an event in its snapshot, and the host performs it (`src/interact.js:934-990`). A toggle calls `map.touch` on the wall's tile, so the chunk change reaches guests and the save (`src/interact.js:469`).

**Confidence.** Read in code.

## Windows and shutters

**Rule.** Windows have wooden shutters, not glass, and they start closed. Closed shutters block sight but let a sliver of light through. Tap E to open or close them. Nobody ever walks through a window, even an open one. You have to climb.

**Numbers.**
- Shutter hp `SHUTTER_HP` = 60: `src/map.js:433`
- Light through closed shutters is `shutterLeak` = 0.05. Anything under 0.5 blocks sight: `src/map.js:1019-1032`
- Open or broken shutters: transmission 1: `src/map.js:1025-1026`
- A room's daylight goes up by `openingDaylight` 0.5 times the transmission of each opening: `src/light.js:29`, `src/light.js:124-131`
- In the valley map: 47 plain windows, 3 with 3 boards inside, all in outer walls (counted)

**Code.** `src/interact.js:466-468`, `src/map.js:1021-1032`.

**Confidence.** Read in code.

## Climbing through a window (hold E)

**Rule.** Hold E next to an open or broken, unboarded window to climb through it. The climb carries you to the tile on the far side. Once started, nothing stops it short of your death: you cannot swing, draw a bow, or act during it. The right-click menu also offers "Climb through". Hold E at closed shutters and you get "The shutters are closed." Hold E at any other window you cannot climb and you get "You cannot climb through that." You cannot climb while carrying furniture.

**Numbers.**
- A hold is `HOLD_TIME` = 0.35 s of the key: `src/interact.js:49`
- Player climb time `player.climbTime` = 0.9 s, eased: `snapshot/data/tuning.json` `player.climbTime`, `src/entities/player.js:81-89`
- Climbable means a window, no boards on either side, shutter open or broken, and a material whose `climb` is not false: `src/map.js:576-578`
- Hold E only looks at the single nearest opening within 1.15 tiles: `src/interact.js:846-849`

**Code.** `src/interact.js:960-965`, `src/entities/player.js:74-79` (carrying refuses it), `src/combat.js:187`, `src/archery.js:523`, `src/game.js:274` (a fall clears the climb).

**With friends.** The hold is an `eHold` event in the guest's snapshot, performed on the host.

**Confidence.** Read in code.

## Boards (B to nail, hold B to pull)

**Rule.** Nail planks over a door or window from the side you are standing on, up to three per side. Any single board, on either side, makes the opening solid and opaque. Nothing walks, climbs, or sees through it, and the door or shutters behind it can no longer be opened. Each board costs a real plank. A pulled board is destroyed and you get nothing back. You can only pull boards on your own side. Boards nailed on the other side can only be broken by the dead. The player has no way to damage an opening.

**Numbers.**
- `BOARDS_PER_SIDE` = 3, `BOARD_HP` = 40 per board: `src/map.js:431`, `src/map.js:434`
- Boarding takes `BOARD_TIME` = 2.0 s; pulling takes `PULL_TIME` = 1.5 s: `src/interact.js:44-45`
- Each board spends 1 plank, taken from the bag first, then the belt, then the hands: `src/interact.js:494-497`, `src/inventory.js:99-115`
- Tap B with no plank: "You need a plank.": `src/interact.js:976-982`
- Logs split into 3 planks from the item menu, with no tool: `snapshot/data/items.json` `log.splitsInto`, `src/interact.js:1053-1066`
- Timed actions are cancelled by moving, or by drifting more than range + 0.2 away: `src/interact.js:767-783`
- Board overlays are drawn only for the near-side boards, 1 to 3 planks, in one art set for every material (`wall_boards`). Boards on the far face (the north or west side of an edge) are never drawn but still count: `src/render/walls.js:19-32`, `src/render/walls.js:159`
- The map may author boards as `boards: { in, out }`: `src/map.js:1690-1696`

**Code.** `src/map.js:512-533` (`addBoard`, `pullBoard`), `src/interact.js:485-512`, `src/interact.js:970-983`.

**With friends.** B's tap and hold are snapshot events. The host spends the guest's own plank (`docs/02`, 2026-10-13, verified in two tabs).

**Docs differ.** `docs/09` §Art says "The prompt names the stack as it stands: 'door, 2 boards outside, 3 inside'". The code shows a disabled right-click entry instead, `door: boarded (2 this side, 3 far side)` (`src/interact.js:453-457`). The E prompt never shows it, because that entry is not a simple action.

**Confidence.** Read in code.

## Broken leaves

**Rule.** A door or shutters that the dead break are gone for good. A broken door is a permanent doorway. Broken shutters are a permanent hole, drawn like open shutters with no leaves. Nothing repairs them, and the player cannot build a new door into the gap, because the edge already holds a wall. You can still board a broken opening.

**Numbers.**
- When leaf hp reaches 0: `broken = true`; a door gets `open = true`, a window gets `shutter = "open"`: `src/map.js:551-559`
- The menu shows a disabled "A broken doorway" or "Broken shutters" entry: `src/interact.js:458-459`
- A map may author a broken opening (`broken: true`): `src/map.js:1689`

**Code.** `src/map.js:536-565`, `src/placement.js:186-187` ("Already a wall").

**Confidence.** Read in code.

## The dead breaching

**Rule.** A zombie that is chasing someone and cannot find a path to where it last saw them picks a room to break. If it is shut in a room and the target is elsewhere, it breaks out of that room. Otherwise it breaks into the target's room. It goes for the room's nearest opening on its own side, not the weakest. It hits that opening in a fixed order: its own side's boards, then the door or shutters, then the far side's boards. Once the way is open, it walks through a door or climbs through a window. It gives up the breach if it can bite someone, loses aggro, or its target moves rooms. It never attacks a plain wall. With the default settings none of this happens, because Zombie aggro is off and the dead never hunt anyone.

**Numbers.**
- Damage per hit: `zombie.breachDamage` = 5: `snapshot/data/tuning.json`
- It must be within `zombie.breachReach` = 1.1 tiles of the edge's midpoint: `snapshot/data/tuning.json`, `src/entities/zombie.js:530-540`
- Hit rhythm: the attack animation (zombie pose, 4 frames at 12 fps = 0.33 s, `snapshot/data/poses.json` `zombie`), damage on active frame 1, then `zombie.cooldown` = 1.2 s. That makes about 1.53 s per hit (inferred from `src/entities/zombie.js:548-575`)
- Hits to break: a board takes 8 (40/5), shutters 12 (60/5), a door 20 (100/5)
- Inferred times for one zombie: a bare door about 31 s, bare shutters about 18 s, one board about 12 s. A door with 3 boards on each side takes 68 hits, about 104 s. Several zombies on the same opening each hit on their own clock.
- Breaching needs the `zombieAggro` rule, which defaults to off: `src/settings.js:12`, `src/entities/zombie.js:233`

**Code.** `src/map.js:598-624` (`breachTarget`), `src/map.js:536-565` (`damageOpening`), `src/entities/zombie.js:202-215`, `src/entities/zombie.js:488-506`, `src/entities/zombie.js:510-575`.

**With friends.** Leaf and board hp change on every hit, but the wall's chunk is only marked changed when something breaks (`src/map.js:563`). A guest therefore sees a breach only as each board or leaf gives. Hp is never drawn, so nothing looks different.

**Docs differ.** `docs/09` §What the dead do: "one shambler takes about 24 s through a bare door and about 80 s through one boarded three deep on both sides". That assumes 1.2 s per hit. The code adds the 0.33 s attack animation to every hit, which gives about 31 s and 104 s (inferred).

**Confidence.** The rules are read in code. The times are inferred from the code and the pose data.

## The dead climbing open windows

**Rule.** A breaching zombie whose opening is a climbable window climbs through it. The climb is slower than yours, and it cannot bite until it is through. A hit interrupts the climb and leaves the body at whichever end is nearer. The dead never path through an open window as part of a normal chase (pathing treats every window as closed). They only climb when a failed path sends them into a breach.

**Numbers.**
- Zombie climb `zombie.climb` = 1.6 s: `snapshot/data/tuning.json`
- Cut short: it lands at the start if less than half done, otherwise at the far end: `src/entities/zombie.js:92-99`

**Code.** `src/entities/zombie.js:217-222`, `src/entities/zombie.js:372-387`, `src/entities/zombie.js:542-546`, `src/map.js:568-573` (windows never pass a walking body).

**Confidence.** Read in code.

## Sealed rooms

**Rule.** A room is "sealed" when every door is shut and whole or boarded, and every window is shuttered and whole or boarded. This is worked out only for the debug corner ("room N sealed" or "open"). It gates nothing: sleep, the dead, and light never read it.

**Numbers.** None.

**Code.** `src/map.js:582-594`, its only caller `src/main.js:1118`.

**Docs differ.** `docs/09` §The opening as a stack says "Sealed, per room, each step". It is computed only when the debug text is drawn, not as a step of the world. `docs/02` (Openings, 2026-10-10) says "It gates sleep later"; the Status of `docs/09` already corrects this.

**Confidence.** Read in code.

## Rooms by flood fill

**Rule.** Rooms are never authored. Any area closed in by walls, doors, or windows is a room, whatever state its openings are in, so an open or broken door still closes a room. A fence or other see-through wall closes nothing, so a fenced field is outdoors. A region bigger than 300 tiles, or one that reaches unloaded ground, is outdoors (room 0). Rooms matter for:
- sleep: the bed must be in a room, else "Not out here."
- a hearth's whole-room light
- the daylight a room's openings admit
- which room the dead breach
- the translucent near walls

Building or removing a wall refinds only the rooms on either side of that edge.

**Numbers.**
- `ROOM_MAX` = 300 tiles: `src/map.js:23`
- Each room keeps a list of its openings (doors and windows the fill touched): `src/map.js:1341-1393`

**Code.** `src/map.js:1395-1457` (`rebuildRooms`, `rebuildRoomsAround`), `src/entities/player.js:201`, `src/light.js:53-56`.

**Confidence.** Read in code.

## Translucent near walls

**Rule.** While you are inside a room, the room's walls on the camera side (those whose far tile is your room and whose near tile is not) are drawn translucent. You see the room and its doors and windows still work. A corner post goes translucent only when every wall meeting at it is a near wall. Open door leaves that swing away from the camera are drawn only behind a translucent wall. Walls never get the see-through hole round the player that tree canopies get.

**Numbers.**
- `NEAR_WALL_ALPHA` = 0.42: `src/render/scene.js:35`

**Code.** `src/render/walls.js:354-370`, `src/render/walls.js:162-168`, `src/render/walls.js:305-315`.

**Confidence.** Read in code.

## The build palette (N)

**Rule.** N opens a short list on the left with Log wall, Door, Window, each with its cost (greyed when you lack it), and a Remove row. Every right-click menu also ends in a "Build" entry. Pick a row and a ghost wall follows the cursor, snapped to the nearest edge of the tile under it, green or red. Click to start a timed build. Nothing is spent until the bar finishes, and every rule is checked again then. Moving cancels the build. Build mode stays on, so you can lay a run of wall click by click. N or Escape leaves it. N does nothing while you carry furniture ("Your hands are full.") or have the bag open. A door or window is built in the log material.

**Numbers.**
- `wall`: "Log wall", sprite `wall_log`, cost 1 log, 3 s: `snapshot/data/build.json` `wall`
- `door`: "Door", sprite `wall_log`, cost 3 planks, 4 s: `snapshot/data/build.json` `door`
- `window`: "Window", sprite `wall_log`, cost 2 planks, 3 s: `snapshot/data/build.json` `window`
- `BUILD_REACH` = 2.6 tiles to the edge's midpoint: `src/placement.js:25`
- Once started, the build lasts while you stay within 3.2 tiles (`BUILD_REACH` + 0.6) of either tile: `src/placement.js:566`
- You must stand at least `EDGE_CLEARANCE` = 0.45 tiles from the edge: `src/placement.js:27`
- Red reasons, in order: "Too far", "Already a wall", "No room", "Step back", "Need N item(s)": `src/placement.js:186-197`
- "No room" means a single solid prop spans both tiles of the edge, or, for a door, either tile is not walkable (a solid prop or water). Walls and windows may be built over water or beside furniture: `src/map.js:453-461`
- One build at a time: `src/placement.js:466`
- Built walls carry `built: true`, which is what makes them removable: `src/map.js:469`
- The Free building rule (`freeBuilding`, default off) makes every cost "free". Build time still applies: `src/rules.js:14`, `src/placement.js:124-127`

**Code.** `src/ui/build-palette.js`, `src/main.js:698-708`, `src/main.js:643`, `src/main.js:891`, `src/placement.js:160-175` (`pickEdge`), `src/placement.js:417-427`, `src/placement.js:556-582`.

**With friends.** A guest's click sends a `build` command. The host checks the guest's reach and costs again and runs the timed build on the guest's player (`src/placement.js:509-523`). Free building is the world's rule: the host's on a guest, the owner's on a server world (`src/rules.js:22-37`, `src/ui/screens.js:682`).

**Docs differ.** `docs/13` §Free building says the setting is "kept in the browser". It is now a world rule that travels in the save and in the frame for guests (`src/rules.js:16-37`); only a local world reads it from the browser's settings.

**Confidence.** Read in code.

## Removal (X)

**Rule.** X (or the palette's Remove row) turns on the removal tool. The front-most removable thing under the cursor lights up green, or red with "Too far". A click destroys it at once, and the tool stays on. X, N, or Escape leaves it. Two kinds of thing can be removed:
- any prop that can be carried, including authored village furniture, not only what you placed
- any wall, door, or window you built

Authored walls, trees, the well, fires, posts, and anything that cannot be carried never light up. A removed container spills what it held onto its tile, but only if it was ever opened. An unsearched chest has rolled no loot, so it drops nothing. A removed wall takes its boards (and any bracket) with it. Nothing is refunded.

**Numbers.**
- `REMOVE_REACH` = 2.6 tiles to the nearest tile of the prop or the edge's midpoint: `src/placement.js:26`, `src/placement.js:365-371`
- Not while carrying ("Your hands are full.") or with the bag open: `src/main.js:712-721`

**Code.** `src/placement.js:320-363` (`removalTarget`), `src/placement.js:389-400` (`destroy`), `src/map.js:479-488` (`destroyWall`).

**With friends.** A guest's click sends a `remove` command naming its target by address: a prop id, or a wall's edge. The host checks that the prop can be carried (or that the wall is built) and the reach (`src/placement.js:525-551`).

**Docs differ.** `docs/13` §Removal says the tool highlights "the front-most thing under it that the player placed or built", and the palette's tooltip says "Highlights what you placed or built" (`src/ui/build-palette.js:46`). The code takes any carryable prop, authored ones included (village chests, beds, tables, barrels). `docs/13` also says "a container spills what it held". That holds only once the container has been searched; an unsearched one drops nothing (`prop.bag` is null).

**Confidence.** Read in code. The unsearched-container result is inferred from `prop.bag` being made only on first use (`src/interact.js:314-320`).

## Carrying furniture

**Rule.** With both hands empty, right-click a carryable prop and choose "Pick up <name>". You hold it over your head, and a container keeps its contents. While carrying, you can only walk:
- no sprint, swing, bow, block, or climb
- no bag or character screen
- no building or removal

The right-click menu offers only Put down and Walk here. Put it down with a left click on the green ghost (R turns it) or with E on the tile in front of you. Escape does not drop it. If you die while carrying, it is set down on the nearest free tile within 2, if there is one.

**Numbers.**
- Can be carried: a sprite's own `carry` flag wins. Otherwise a prop can be carried unless it has wood (a tree), water (the well), or a fire that lights a room, holds a torch, or burns fuel: `src/placement.js:69-75`
- `carry: true` in data: barrel, bed, bench, bookcase, chair, chest, cupboard, desk, lectern, pew, pumpkin, pumpkin_plain_0/1, shelf, spinningwheel, strongbox, table, woodpile. `dev_chest` has no flag and falls under the rule, so it is carryable: `snapshot/data/sprites/*.json` `carry`
- `carry: false` includes the workbench, the wheelbarrow, every station, the cart, coffin, counter, stall, crops, mushrooms, and rocks
- Put-down rules: every footprint tile free of props and walkable, no tile within 0.7 of you, and no wall between two of the prop's own tiles: `src/placement.js:97-113`
- `PLACE_REACH` = 2.6 tiles to the anchor tile. The footprint is centred on the cursor: `src/placement.js:24`, `src/placement.js:402-415`
- E put-down: the tile in your facing direction, range 1.6: `src/placement.js:116-119`, `src/interact.js:292-311`
- R: a prop with facings steps to the next facing (and its footprint follows). Otherwise the footprint swaps `[w, h]` to `[h, w]`: `src/placement.js:253-268`
- A lit prop (the jack-o'-lantern) leaves the fire set while carried and lights again when put down: `src/map.js:369-392`
- Dropped on death within radius 2: `src/game.js:276-285`

**Code.** `src/interact.js:259-312`, `src/placement.js:270-282`, `src/main.js:726-736`, `src/entities/player.js:328`, `src/render/entities.js:233`.

**With friends.** The carried prop rides in the character's record (`carried`), so a save and a join keep it (`src/entities/character.js:70-71`). On a guest the ghost follows the record (`syncCarried`). A click sends `{ kind: "prop", tx, ty, turns }`, and the host turns its copy the same number of times. If it refuses, it turns the copy back (`src/placement.js:488-508`).

**Confidence.** Read in code.

## Furniture: solid or not

**Rule.** Props are solid by default and block a whole tile. Round things (trees, rocks, barrels, torch posts) block only a circle, so you can slip between them. Crops and forage (mushrooms) are not solid and you walk through them. A solid prop's tile can never be walked or pathed. Furniture blocks building a wall only when a single prop spans both tiles of the edge.

**Numbers.**
- `solid` is the map entry's, default true: `src/map.js:1495`. The valley authors only crops with `solid: false`. Forage is made with `solid: false`: `src/map.js:309`
- Collide radii: barrel 0.26, rock 0.38, torch_post 0.12, trees 0.18 to 0.3: `snapshot/data/sprites/*.json` `collide.radius`
- A body counts as radius 0.3 against walls and square props, and 0.2 against round ones: `src/map.js:24`, `snapshot/data/tuning.json` `player.radius`

**Code.** `src/map.js:1155-1209` (`circleBlocked`), `src/map.js:1114-1117` (`isWalkableTile`).

**Confidence.** Read in code.

## Torch brackets and posts

**Rule.** A bracket is state on a wall edge, on one side of it. A torch post is a prop. Either can hold a torch, which lights the area and never burns out. E or the menu takes the torch (into a free hand if possible, else the bag) or mounts one you carry. An empty holder says "An empty bracket (need a torch)". Players cannot make new brackets or posts. Brackets exist only where the map authors them. Removing a built wall forgets its bracket.

**Numbers.**
- A mounted torch's light uses the torch item's `fire`: radius 3, flicker amp 0.14 at speed 9: `snapshot/data/items.json` `torch.fire`, `src/light.js:59-64`
- `torch_post`: fire radius 3, `holds: "torch"`, collide radius 0.12, cannot be carried: `snapshot/data/sprites/torch_post.json`
- A bracket's torch burns 0.3 tiles off the edge on its side: `src/map.js:147-150`
- Reach: E within 1.15 of a bracket, a click within 0.8, a post within 1.3: `src/map.js:152-175`, `src/interact.js:694`, `src/interact.js:742`
- Drawn 32 px up the wall (`BRACKET_UP`): `src/placeholders.js:91`
- In the valley: 27 authored brackets and 3 torch posts (counted)

**Code.** `src/map.js:125-199`, `src/interact.js:401-440`, `src/map.js:1717-1724` (authoring).

**Confidence.** Read in code.

## Prop recipes placed from stations

**Rule.** Some workbench recipes make furniture instead of an item. When the craft finishes, the piece appears on the nearest free walkable tile, searching outward from the tile just below the station. Crafted props are ordinary props: solid, and carryable and removable only if their sprite allows it. A crafted workbench or wheelbarrow cannot be carried or removed. A crafted chest is a fresh "chest" container: its first search rolls the chest loot table, so a chest made from 4 planks comes with random loot (bread, cheese, planks, logs, weapons, and more).

**Numbers.** Workbench recipes (`snapshot/data/recipes.json` `rows`):
- chest: 4 plank, 10 s
- shelf: 3 plank, 8 s
- bench: 2 plank, 6 s
- table: 4 plank, footprint 2×1, 10 s
- bed: 6 plank + 1 cloth, footprint 2×1, 16 s
- workbench: 5 plank + 1 log, footprint 2×1, 14 s
- wheelbarrow: 5 plank + 1 iron bar, 16 s

Related numbers:
- Wheelbarrow container: loot `dev_kit`, a 10×6 grid with 0 rolls, so it is empty storage: `snapshot/data/sprites/wheelbarrow.json`, `snapshot/data/loot.json`
- Chest loot: 2 to 3 rolls in a 4×3 grid: `snapshot/data/loot.json` `chest`
- Search ring for the drop spot: `nearestWalkable`, up to 12 rings: `src/map.js:1308`

**Code.** `src/stations.js:173-192` (`deliver`), `src/interact.js:323-345` (first search rolls loot when the bag is empty), `src/map.js:1480-1546` (`createProp`).

**Docs differ.** `docs/13` Status says "a prop recipe landing on a free tile beside its station". Only the anchor tile is checked as free. The second tile of a 2×1 table, bed, or workbench is not checked for a prop or a wall between the two (`src/stations.js:178-181`; overlap inferred). If no tile is free within 12 rings, the piece is not made and the ingredients are already spent (inferred).

**Confidence.** The recipes and the delivery are read in code. The loot on a crafted chest is read in code. The overlap and loss cases are inferred.

## Candidate wiki pages

- **Walls**: edges, materials (wood, stone, log, fence), heights and thicknesses, posts, see-through walls.
- **Door**: open and close, hp, passing, breaking, the dead and doors.
- **Window**: shutters, light leak, climbing, breaking.
- **Climbing**: hold E, 0.9 s versus the dead's 1.6 s, what stops it.
- **Boarding up**: B and hold B, planks, three per side, board hp, which side is drawn.
- **Breaching**: how the dead pick an opening, the attack order, hits and times, aggro.
- **Rooms**: flood fill, what counts as indoors, 300 tiles, what rooms affect.
- **Building**: the palette, costs, timed builds, edge picking, red reasons, Free building.
- **Removal tool**: what can be removed, spills, no refunds.
- **Carrying furniture**: the carry rule, what can be carried, put down, R, limits.
- **Torch bracket** and **Torch post**: holders, light, taking and mounting.
- **Workbench furniture recipes**: the prop recipes and where they land.
- **Plank** and **Log** (shared with materials): boards, building costs, splitting.

## Discrepancies

- `docs/09` gives about 24 s for a bare door and 80 s for a door boarded three deep both sides. The code adds the 0.33 s attack animation to the 1.2 s cooldown on every hit, which gives about 31 s and 104 s (inferred).
- `docs/09` says the prompt names the stack as "door, 2 boards outside, 3 inside". The code shows only a disabled menu entry, "door: boarded (2 this side, 3 far side)", and E's prompt never names the stack.
- `docs/09` says sealed is computed "per room, each step". It is computed only for the debug corner text and gates nothing.
- `docs/02` (Openings, 2026-10-10) says sealed "gates sleep later". Nothing reads it; sleep only needs the bed to be in a room (`docs/09` Status already corrects this).
- `docs/13` §Removal and the palette tooltip say the tool takes what "the player placed or built". The code takes any carryable prop, authored furniture included.
- `docs/13` §Removal says a removed container spills its contents. A never-searched container has no bag and spills nothing.
- `docs/13` §Free building says the setting is "kept in the browser". It is now a world rule carried in the save and sent to guests; only a local world reads the browser setting.
- `docs/13` Status says prop recipes land "on a free tile beside its station". Only the anchor tile is checked, so a 2×1 piece's second tile may overlap a prop or straddle a wall (inferred).
- `docs/17` §plan says log-wall corners fall back to `post_wood`. `wall_log.json` names `post_log`. This is history the Status supersedes.
- Code comment `src/map.js:516`, "Planks are free until the inventory", is stale. Boarding spends a plank in `src/interact.js:496`.
- Code comment `src/main.js:638-639`, "Building stays this client's own until it is a command too", is stale. Builds and removals are host commands (`placement.setSender`, `performPlacement`).
