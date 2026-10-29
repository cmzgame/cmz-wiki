---
title: Building
categories: [Building, Mechanics]
aliases: [Build, Build palette, Build mode, Removal, Removal tool, Remove, Take apart, Taking apart]
numbersOk: true
summary: Building log walls, walls of each wood, fences, gates, doors, and windows from the palette on N, doors and windows over walls and broken openings, and taking apart what players built or made with X, for half its materials.
---

<!-- typed: the game's own lines quoted as examples ("Click to take apart door (1 plank back)", "2 planks"), which carry an example's count, not a number of the game's -->

**Building** is how you put up walls, fences, gates, doors, and windows of your own. You open the build palette with N, pick a piece, and lay it on the edge of a tile; a timed bar runs, and the materials are spent when it finishes. **Take apart**, on X, destroys what players built or made and gives back half its materials. Building and taking apart ask for the right tool on you: a [[Hatchet]] for a log wall, a [[Smith's hammer]] for a wooden wall, a fence, a gate, a door, a window, and most furniture. Everything you build but the [[Fireplace]], the [[Fire pit]], the [[Feeding trough]], and the floors and stairs is a [[Walls|wall]] on a tile's edge: a door or a window can go on an empty edge or into a wall that is already there. Those stand on tiles. The palette holds only what cannot be picked up and carried; a [[Campfire]] is made at the [[Workbench]] and set down from the bag instead.

## How it works

### The palette

N opens a short list on the left of the screen. It has a row for each piece and a **Take apart** row:

- **Log wall**, costing {{n build.wall.cost.log}} [[Log]], built in {{n build.wall.seconds seconds}}, with a [[Hatchet]] on you.
- **Oak wall**, **Spruce wall**, **Mahogany wall**, and **Daub wall**, each costing {{n build.wall_oak.cost.plank}} [[Plank|plank]], built in {{n build.wall_oak.seconds seconds}}, with a [[Smith's hammer]] on you. **Winter Pine wall** and **Bloodbark wall** are listed only while Free building is on (see [[Woods]]).
- **Door**, costing {{n build.door.cost.plank}} [[Plank|planks]], built in {{n build.door.seconds seconds}}, with a [[Smith's hammer]] on you.
- **Window**, costing {{n build.window.cost.plank}} planks, built in {{n build.window.seconds seconds}}, with a smith's hammer on you.
- **Fence**, costing {{n build.fence.cost.plank}} plank a stretch, built in {{n build.fence.seconds seconds}}, with a smith's hammer on you.
- **Gate**, costing {{n build.gate.cost.plank}} planks, built in {{n build.gate.seconds seconds}}, with a smith's hammer on you.
- **Fireplace**, costing {{n build.fireplace.cost.stone}} [[Stone|stone]], built in {{n build.fireplace.seconds seconds}}, with no tool: two tiles indoors with its back along a plain wall ("Indoors only", "Against a wall"), facing out from the wall the cursor finds. See [[Fireplace]].
- **Fire pit**, costing {{n build.fire_pit.cost.stone}} stone, built in {{n build.fire_pit.seconds seconds}}, with no tool: two tiles by two on open ground, indoors or out, never on water ("Not on water"). See [[Fire pit]].
- **Feeding trough**, costing {{n build.feed_trough.cost.plank}} planks, built in {{n build.feed_trough.seconds seconds}}, with a smith's hammer on you. See [[Feeding trough]].
- **Round stone wall**, listed only while Free building is on: a round stone room 5 or 7 tiles across, dragged out from one corner of its square, built in {{n build.round_stone.seconds seconds}} at 5. Without Free building it is refused, "Round walls are not in the game yet". See [[Round rooms]].
- **Plank floor** and **Stone floor**, listed only while Free building is on: a floor laid a tile at a time, or a rectangle by a drag, {{n build.floor_wood.seconds second}} a tile, on the ground or on an upper floor wherever it touches floor already there. Without Free building they are refused, "Floors are not in the game yet". See [[Upper floors#Building floors and stairs|Upper floors]].
- **Wood stair** and **Stone stair**, listed only while Free building is on: a stair three tiles long climbing one storey north or west, away from you, with its landing laid on the floor above, built in {{n build.stair_wood.seconds seconds}} in wood and {{n build.stair_stone.seconds seconds}} in stone. Without Free building they are refused, "Stairs are not in the game yet". See [[Upper floors#Building floors and stairs|Upper floors]].
- **Cliff wall**, **Grassy cliff wall**, **Cliff top**, **Grassy cliff top**, and **Stone ramp**, listed only while Free building is on, for experimenting with hills: a cliff wall is a rock wall on an edge that takes no door, window, painting, or torch; a cliff top is a floor laid as the Plank floor is; the ramp is a stair of rock climbing north or west on a smooth slope, its landing a cliff top. Without Free building they are refused, "Cliffs are not in the game yet". See [[Cliffs]].

Everything is built on the floor you stand on: upstairs, walls, doors, windows, and carried furniture go on that floor (a wall upstairs needs floor beside it, "No floor there"). A rug, a painting, a set-down, a torch on a wall, and the Fireplace, the fire pit, and the trough are refused upstairs for now, "Not upstairs yet". No wall, door, or window is built across a stair's run ("Not across a stair") or its top ("Not across a stair's top").

The ghost of a piece that stands on tiles covers its tiles, not an edge. Besides its own rule it says "No room" where a tile is not open floor or holds something, "Not beside a door" on a door's two tiles, and "Someone is in the way" where anyone living (you, another player, a villager, one of the dead, or an animal) stands on one of them or close enough beside it that the piece would close round them. A corpse lying there does not count.

"On you" is anywhere you carry it: a hand, the belt, or the bag.

A piece you cannot afford, or lack the tool for, is greyed. Every right-click menu also ends in a "Build" entry, which opens the same list. On an empty edge a door or a window is built of logs; built into a wall, it is made of that wall's material (see below). A log splits into {{n items.log.splitsInto.count}} planks from its item menu, with a hatchet on you (see [[Log]]).

N does nothing while you are [[Carrying furniture|carrying furniture]] ("Your hands are full.") or while the bag is open ("Close your bag to build."); the menu's Build entry is greyed then too. The palette and the bag take turns on the screen: opening the bag closes the palette. This is a matter of room on the screen, not of safety: with the bag open the game goes on (see [[Controls]]).

### Laying a piece

Once a piece is picked, a ghost of it follows the cursor, snapped to the nearest edge of the tile under it. The ghost is green where the piece can go and red where it cannot, with the reason:

- **Too far**: the edge's midpoint is more than {{n census.constants.placement.BUILD_REACH tiles}} from you.
- **Already a wall**: the edge already holds something this piece cannot be built over (see below).
- **No room**: a single solid piece of furniture spans both tiles of the edge, or a laid [[Rugs|rug]] does: a wall is never built through a rug, only along its outer edge. A door also needs both tiles walkable and nothing standing on either, so it cannot stand in water or beside any prop, solid or not: the dead must be able to stand at a door (see [[Openings]]). A wall or a window may be built over water or beside furniture.
- **Step back**: you are standing closer than {{n census.constants.placement.EDGE_CLEARANCE tiles}} to the edge.
- **Someone is in the way**: someone else living, a player, a villager, one of the dead, or an animal, stands across the edge, so the wall would go up through them. A corpse lying there does not count. A wall, a door, or a window is never built across a body, since a body caught in one could not walk out of it.
- **You need a ...**: you lack the piece's tool, and it names it ("You need a smith's hammer.").
- **Need**: you lack the materials, and it names them.

A click on a green ghost starts the build. A bar runs for the piece's time. Nothing is spent until the bar finishes, and every rule is checked again then. Moving cancels the build, as does going a little beyond the build reach. Only one build runs at a time.

Build mode stays on after a piece is finished, so a run of wall can be laid click by click. N, Escape, or a right click leaves it; that right click opens no menu.

When a wall goes up or comes down, the [[Rooms|rooms]] on either side of it are worked out again, so closing the last gap in a ring of walls makes a room.

### Building over a wall or a broken opening

A log wall, a wall of wood, or a fence needs an empty edge. A gate goes on an empty edge or into a fence, and nowhere else ("Only in a fence"; see [[Fences]]). A door or a window may also be built over what stands on the edge:

- **Over a plain wall**, authored or built: the door or window takes the wall's place, shut, and is made of the wall's material, so a door built into a stone wall is a stone door. The wall it replaced is remembered.
- **Over a fence**, a door only: it is a gate in the fence, as the palette's Gate is. A window cannot be built into a fence (see [[Fences]]).
- **Over a broken door**, a new door; **over broken shutters**, a new window: whole, shut, and at full health. It is a new one, at a new one's cost, never a repair.

While a Door or a Window is picked, **R** cycles the wood of its leaves and shutters, shown as "leaves: Spruce · R" under its row and beside the ghost; only a wall of wood takes another wood's door or window (see [[Woods]]).

Never over a door or a window that is whole. A door still needs both its tiles clear ("No room"). A torch in a bracket on a wall built over falls to the floor, put out, and the bracket goes (a lantern goes with the wall); a [[Paintings|painting]] hung on it falls to the floor, whole. Whatever it is made of, a door or a window you build can be broken by the dead (see [[Breaking in]]).

### Taking apart

X, or the palette's **Take apart** row, turns on the tool. The front-most thing under the cursor that can be taken apart lights up green, and the prompt says what comes back: "Click to take apart door (1 plank back)". It lights up red with the reason when it cannot be taken apart now:

- "You need a smith's hammer." (or "You need a hatchet." for a log wall) without the tool on you;
- "Too far" when it is more than {{n census.constants.placement.REMOVE_REACH tiles}} away;
- "There is a wall in the way." for a piece of furniture behind a wall (a wall, a door, or a window is taken apart by distance alone, from either side);
- "Empty it first." for a container or a station with anything in it, its output box included;
- "It is still making something." for a station with something in its queue;
- "Put it out first." for a lit [[Campfire]], [[Fireplace]], or [[Fire pit]], which can be put out; "Let it burn down first." for a lit [[Cauldron]], [[Oven]], or [[Forge]], whose fire only burns down; and "It still has fuel in it; let it burn down." for one out with fuel left.

A click destroys it at once, and the tool stays on. X, N, Escape, or a right click leaves it.

**What comes back is half the materials, rounded down.** For a wall, a door, a window, a fence, or a gate it is half its cost in the palette; for furniture, half of each item in the recipe that made it. An ingredient a recipe names by kind (the bed's "any cloth") gives nothing back, since which item went in is not kept. The materials go to your bag, and what does not fit falls at your feet. The line says what you got: "You take the chest apart: 2 planks.", or "You take the ... apart; nothing is left worth keeping." when half rounds down to nothing.

**The tool** is the one the thing's recipe or palette row asks for: a [[Smith's hammer]] for a door, a window, a wooden wall, a fence, a gate, and furniture made at the [[Workbench]]; a [[Hatchet]] for a log wall.

Only what players made can be taken apart:

- any wall, door, or window a player built, including a door or window built into a wall of the village
- a round room a player built, whole: any edge of it lights up the whole ring, and a wall or a door it took in is left as it was (see [[Round rooms#Taking one apart|Round rooms]])
- a cliff wall a player built, only while Free building is on ("Cliffs come apart only in Free building"; see [[Cliffs]])
- a floor a player laid, a tile at a time, when nothing else that can be taken apart is under the cursor: its tile's diamond lights up, green or red, with the prompt at the tile; the floor it was laid over comes back on the ground, and upstairs the tile is empty again. It is refused while a wall, a stair, furniture, a rug, a thing on the floor, or anyone stands on it (see [[Upper floors#Building floors and stairs|Upper floors]])
- any piece of furniture made at a station (a chest, a shelf, a workbench, a wheelbarrow, and the rest; see [[Crafting]]), whether or not it can be carried

The village's own furniture never lights up, even after it has been carried somewhere else, and neither do walls that are part of the map (a round room of the map says "That is the village's."), stairs (a stair a player built included: none is ever taken apart), trees, the well, fires, or torch posts. Furniture is carried whole instead (see [[Carrying furniture]]).

A made piece of furniture also has **Take apart** on its own right-click menu, saying what comes back ("Take apart (2 planks back)") or, greyed, why not: "Take apart (empty it first)", "Take apart (you need a smith's hammer)".

A wall taken apart takes its [[Boards|boards]] and any bracket with it, but a torch in the bracket falls to the floor, put out; a painting hung on it falls to the floor, whole (see [[Paintings]] and [[Torch posts and brackets]]). Taking apart a door or a window that was built into a wall puts the wall back, never a hole. If that wall was one a player built, it is still theirs to take apart; a wall of the village comes back as the village's. A new door built over a broken one still remembers the wall the first was built into.

A wall, door, or window built while Free building was on cost nothing, and taking it apart gives nothing back.

The tool cannot be used while carrying furniture ("Your hands are full.") or with the bag open ("Close your bag to build.").

## Numbers

- Log wall: {{n build.wall.cost.log}} log, {{n build.wall.seconds seconds}}.
- A wall of any wood: {{n build.wall_oak.cost.plank}} plank, {{n build.wall_oak.seconds seconds}}.
- Door: {{n build.door.cost.plank}} planks, {{n build.door.seconds seconds}}.
- Window: {{n build.window.cost.plank}} planks, {{n build.window.seconds seconds}}.
- Fence: {{n build.fence.cost.plank}} plank, {{n build.fence.seconds seconds}}.
- Gate: {{n build.gate.cost.plank}} planks, {{n build.gate.seconds seconds}}.
- Fireplace: {{n build.fireplace.cost.stone}} stone, {{n build.fireplace.seconds seconds}}.
- Fire pit: {{n build.fire_pit.cost.stone}} stone, {{n build.fire_pit.seconds seconds}}.
- Feeding trough: {{n build.feed_trough.cost.plank}} planks, {{n build.feed_trough.seconds seconds}}.
- Round stone wall: {{n build.round_stone.cost.stone}} stone an edge it lays, never charged (Free building only); {{n build.round_stone.seconds seconds}} at 5 across, two fifths more at 7.
- Plank floor: {{n build.floor_wood.cost.plank}} plank a tile; Stone floor: {{n build.floor_stone.cost.stone}} stone a tile; {{n build.floor_wood.seconds second}} a tile; never charged (Free building only).
- Wood stair: {{n build.stair_wood.cost.plank}} planks, {{n build.stair_wood.seconds seconds}}; Stone stair: {{n build.stair_stone.cost.stone}} stone and {{n build.stair_stone.cost.plank}} plank, {{n build.stair_stone.seconds seconds}}; never charged (Free building only).
- Cliff wall and Grassy cliff wall: {{n build.wall_cliff.cost.stone}} stone each, {{n build.wall_cliff.seconds seconds}}; Cliff top and Grassy cliff top: {{n build.floor_cliff_top.cost.stone}} stone a tile, {{n build.floor_cliff_top.seconds second}} a tile; Stone ramp: {{n build.stair_ramp_stone.cost.stone}} stone and {{n build.stair_ramp_stone.cost.plank}} plank, {{n build.stair_ramp_stone.seconds seconds}}; never charged (Free building only).
- Build reach: {{n census.constants.placement.BUILD_REACH tiles}} to the edge's midpoint.
- Closest you may stand to the edge: {{n census.constants.placement.EDGE_CLEARANCE tiles}}.
- Take apart reach: {{n census.constants.placement.REMOVE_REACH tiles}}.
- Take apart gives back half the materials, rounded down.

## With friends

A guest's click is sent to the host as a build command. The host checks the guest's reach, tool, and materials again and runs the timed build on the guest's own character, spending the guest's own items. Taking apart works the same way: the guest names what it clicked, or chooses Take apart on a piece's menu, and the host checks that it can be taken apart, that it holds nothing, that the guest carries the tool, and that it is in reach; the materials go to the guest's bag.

## Settings that change it

{{devonly note="Free building is for testing structures."}}

- **Free building** (default Off): every cost becomes free, and building and Take apart do not ask for the hammer or the hatchet; what is built while it is on gives nothing back when taken apart. The build time still applies. It also lists what is not otherwise in the palette: the Winter Pine and Bloodbark walls (see [[Woods]]), the Round stone wall (see [[Round rooms]]), the floors and stairs (see [[Upper floors]]), and the cliffs and the stone ramp (see [[Cliffs]]). Boarding up still asks for a plank and a hammer (see [[Boards]]). It is a world rule: on a guest it is the host's.

## See also

- [[Walls]]
- [[Round rooms]]
- [[Upper floors]], its stairs and floors built with Free building
- [[Cliffs]], hills built with Free building
- [[Openings]]
- [[Boards]]
- [[Rooms]]
- [[Placement]]
- [[Carrying furniture]]
- [[Workbench]], which makes furniture
- [[Dead ends]], the objects in the valley that cannot be made, and those that can

## Sources

<!-- sources at d7cf736 -->
- `data/build.json:209-270`, `src/placement.js:591`, `src/placement.js:635-636`, `src/placement.js:1091` (at 3233696): the five cliff pieces, Free building only ("Cliffs are not in the game yet"), "Not in a cliff", a cliff wall taken apart only with Free building (game #561)
- `src/render/props.js:81-82`, `src/placement.js:1669` (at 7925955): the Take apart tool over a laid floor outlines its tile and puts its prompt there; before the fix (game #563) pointing it at a laid floor, a cliff top included, stopped the game
- `src/placement.js:650-651`, `src/stations.js:268-279` (at eba3c56): no wall, door, or window built across a living body (each its own size), "Someone is in the way"; a corpse none (game #553)
- `src/stations.js:254-279`, `src/placement.js:380`, `src/placement.js:617-623` (at eba3c56): "Someone is in the way" while a living body's circle reaches into one of its tiles; a corpse never counts (game #553)
- `data/build.json:158-209`, `src/placement.js:213-420`, `src/map.js:1049-1117`, `src/map.js:2650-2705` (at 6eba9c1): the Plank floor, the Stone floor, the Wood stair, and the Stone stair, Free building only ("Floors are not in the game yet", "Stairs are not in the game yet"); building on the builder's own floor; a laid floor taken apart; a stair never (game #549, following the ruling of game #538)
- `src/placement.js:217`, `src/placement.js:615-623`, `src/placement.js:638`, `src/map.js:1175-1203` (at 6eba9c1): "Not upstairs yet", "No floor there", "Not across a stair", "Not across a stair's top" (game #549)
- `data/build.json:146-157`, `src/placement.js:80-200`, `src/placement.js:693-696`, `src/placement.js:800-860` (at da57a57): the Round stone wall, listed and built only with Free building; a ring taken apart whole, the map's refused (game #536)
- `data/build.json:112-145`, `src/placement.js:250-277`, `src/setdown.js:75-140`, `src/stations.js:247-250`: the palette's Fireplace, Fire pit, and Feeding trough, standing on tiles; the fit's reasons and "Someone is in the way"; the campfire left the palette for the workbench, the palette holding only what cannot be carried (game #527, at c3cb736)
- `src/placement.js:637-645`: "Put it out first." for a lit built fire (game #527, at c3cb736)
- `src/placement.js:611-622`, `src/map.js:336-341` (at 5eb40e6): a lit fire's word by whether it is put out by hand, a station's only burning down (game #501)
- `data/build.json`, `src/placement.js:86-96`, `src/placement.js:381`, `src/woods.js:41-67`: a row per wooden wall, the regions' two only with Free building; R for a door's or window's wood (game #348, #351, at 9d1681f)
- `src/map.js:647`, `src/map.js:670`: a painting falls to the floor when its wall is removed or built over (game #344, at 9ac68a2)
- `data/build.json`: the Fence (`wall_fence`, `kind` wall) and the Gate (`kind` door, `over` the fence), with the `build` tool (game #343, at b0df8fc)
- `src/placement.js:204-212`, `src/placement.js:449-455`: a build entry's wall kind; a gate only in a fence; the Remove prompt names a fence and a gate (game #343, at b0df8fc)
- `src/ui/build-palette.js`: the palette, its rows, costs greyed, and the Remove row
- `data/build.json`: each piece's name, sprite (`wall_log`), cost, seconds, and tool: `notch` for the log wall, `build` for a door and a window (game #222)
- `src/placement.js:144-161`, `src/inventory.js:88-108`, `src/ui/build-palette.js:43`: the tool carried in a hand, on the belt, or in the bag, asked first, "You need a ..."; the palette greys a piece that falls short
- `src/main.js:813`, `src/main.js:1067`: the Build entry at the foot of every menu
- `data/items.json:4`: the log's `splitsInto`; `src/interact.js:1251-1267`: splitting with a hatchet carried
- `src/main.js:874-883`, `src/main.js:813`, `src/main.js:1099-1100`: N, refused while carrying or with the bag open and its line; the Build entry greyed; an open bag closes the palette
- `src/placement.js:173-188`: the ghost snapped to the nearest edge
- `src/placement.js:199-211`: the red reasons in order
- `src/placement.js:29`, `src/placement.js:31`: the build reach and the edge clearance
- `src/map.js:610-618`: what "No room" means for a wall, a door, a window
- `src/map.js:608-618`: a door refused with a prop on either tile
- `src/map.js:618-628`: no wall through a laid rug (game #339, at 499e344)
- `src/map.js:596-606`, `src/map.js:631-659`: a door or window over a plain wall, of its material and remembering it; a door over a fence; a new one over a broken one of its kind; the bracket of the wall built over forgotten
- `src/map.js:733-744`: a door and a window always have health, whatever their material
- `src/placement.js:455-465`, `src/placement.js:601-627`: the timed build, spent and rechecked at the end, cancelled by moving
- `src/placement.js:611`: the build lasts within the reach plus 0.6
- `src/placement.js:504`: one build at a time
- `src/map.js:1830-1858`: rooms refound on either side of a changed edge
- `src/main.js:886-895`: X, refused while carrying or with the bag open, with the same line
- `src/main.js:829-847`, `src/placement.js:378-382`: a right click leaves build mode or the Take apart tool, as Escape does, and opens no menu (game #507, at d7cf736)
- `src/placement.js:30`, `src/placement.js:389-413`, `src/placement.js:581-595`: the removal reach, a made prop's with a clear line (game #227), a wall's by distance alone; Remove asks for the board tool, a hammer, red with its line (game #222)
- `src/placement.js:330-379`: what lights up: props made at a station (`made`) and built walls
- `src/stations.js:183-184`: a prop made at a station marked `made`
- `src/map.js:651`: built walls marked `built`
- `src/map.js:661-676`, `src/placement.js:435`: a removed wall takes its boards and bracket; a door or window built into a wall leaves the wall again, built if it was built
- `src/placement.js:526-597`: a guest's build and remove as commands, rechecked on the host, the tool too
- `src/placement.js:518-576`, `src/placement.js:484-489`, `src/placement.js:882`: Take apart: half the materials back, rounded down, from the recipe or the build entry, a tag ingredient giving nothing; the recipe's or entry's tool; refused while it holds anything or a queue runs; the materials to the bag, the rest at the feet; its lines; the prompt naming what comes back (game #413, at 31d330a)
- `src/placement.js:850`: a wall built under Free building marked `free`, giving nothing back (game #413, at 31d330a)
- `src/interact.js:290-310`, `src/interact.js:901`: a made prop's menu entry, its label saying what comes back or why not (game #413, at 31d330a)
- `src/ui/build-palette.js:49`: the palette's Take apart row (game #413, at 31d330a)
- `src/rules.js:18`, `src/placement.js:128-131`, `src/placement.js:144-150`, `src/settings.js:63`: Free building makes costs free and waives the build tools, the time stays; boards still want a plank and a hammer
- `src/rules.js:13-23`, `src/rules.js:44-46`: Free building is a world rule, the host's on a guest
- `data/build.json:112-122`, `src/setdown.js:75-105`: the palette's Fireplace, six stone, two tiles indoors with its back on a plain wall; it replaced the Hearth (game #527, at c3cb736)
- `src/map.js:262-275`, `src/map.js:1027`, `src/map.js:1097` (at 91bafc1): a wall taken apart or built over drops its bracket's torch to the floor, put out; a lantern goes with it (game #532)
