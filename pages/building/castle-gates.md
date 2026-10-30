---
title: Castle gates
categories: [Building, Mechanics]
aliases: [Castle gate, Stone gate, Stone gate (2 wide), Stone gate (3 wide), Portcullis, Portcullises]
numbersOk: true
summary: The stone castle gates, two and three tiles wide with a portcullis, built only with Free building: shut they stop bodies, blows, and bites and pass sight, light, and shots; E raises and lowers them; the dead cannot break one.
---

<!-- typed: the gates' own names ("Stone gate (2 wide)", "Stone gate (3 wide)") and the art round, which are names -->

{{devonly note="Castle gates are not in the game yet: their two rows are listed in the build palette only while Free building is on, for experimenting with Michael's art round 12, and the village has none."}}

A **castle gate** is a gate of stone with a **portcullis**, an iron grille that drops across the arch, set into a run of the stone [[Walls|wall]]. There are two, the **Stone gate (2 wide)** and the **Stone gate (3 wide)**. Shut, the portcullis is bars: you see and light comes through it, and arrows and spells pass it, but no body does, and neither does a blow or a bite. E raises and lowers it. [[The dead]] cannot break it. It is not the [[Fences|fence]]'s gate, a plank door the dead strike down.

## How it works

### Building one

With Free building on, the build palette (N) has a **Castle** heading on its Build tab, under Floors and stairs, with the two gates (see [[Building]]). Click the row, then click a plain stone wall, the village's or one built from the palette's own Stone wall row (listed with Free building too, see [[Building]]): the gate goes up on that click, at once and for free, with no bar, no cost, and no tool, as the [[Cliffs#The stone ramp|Stone ramp]] does. The prompt reads "Click to place the gate at once". It is built shut.

A gate is stamped over two or three **consecutive edges of one run** of plain stone wall, each one a plain wall and nothing more. The ghost spans the run: for the two-wide gate, the edge under the cursor and the one beside it on the side of the edge the cursor is nearer; for the three-wide gate, the edge under the cursor in the middle. It is green where the gate can go and red where it cannot, with the reason:

- "Over a stone wall": an edge of the run has no wall.
- "Over a plain stone wall": an edge is not a plain stone wall, a door, a window, a fence, a log or wooden wall, or a cliff.
- "Already a gate": an edge belongs to a gate already.
- "Not on a round room": an edge is part of a [[Round rooms|round room]]'s ring.
- "Take what hangs there down first": a [[Paintings|painting]] hangs on an edge.
- "Take the torch down first": a torch is in a bracket on an edge (see [[Torch posts and brackets]]).
- "No room": an edge of the run could not take a door, since it needs both its tiles clear of furniture and rugs and no stair across it (see [[Openings#A door's tiles stay clear|Openings]]).
- "Too far": no edge of the run is within {{n census.constants.placement.FREE_REACH tiles}} of you, Free building's reach, since a gate is built only with it.
- "Step back": you are standing too close to an edge of the run.
- "Someone is in the way": anyone living (a player, a villager, one of the dead, or an animal) stands across an edge of the run. A corpse does not count.
- "Castle gates are not in the game yet": Free building is off. A guest's command is refused the same way.

It is built on the floor you stand on.

### Raising and lowering it

E, or the entry in its right-click menu, opens a gate or shuts it from either side, within the usual E reach (see [[Controls]]). The entry reads **Open gate** or **Close gate** and is found on any edge of the gate: the whole gate moves together, however wide it is. Pointing at any of its edges is pointing at one gate.

The portcullis takes {{n sprites.wall_stone_gate_2.wall.gate.swing seconds}} to rise or fall, drawn in three frames, shut, halfway, and raised, with the halfway frame held through the whole swing. The swing is only the picture: the gate is open or shut at once for bodies, light, and the dead. A raised gate is open like an open door: bodies, the dead included, pass across its whole width. A gate takes no [[Boards|boards]].

### Shut

A shut gate:

- **stops bodies**, yours, a friend's, a villager's, an animal's, and the dead's;
- **passes sight**: you see the dead beyond the bars, and they see you. See [[Sight]];
- **passes light**: a room closed by a gate is lit through its bars as through an open window, by day and by a fire beyond it. See [[Light]];
- **stops a blow and a bite**: a swing of yours does not reach the far side, and a bite from the far side does not land, however close the one who bites stands. Unlike a [[Fences|fence]], across which the dead still bite;
- **passes shots**: an arrow, a spell, or a thrown thing flies through the arch below its crown, {{n sprites.wall_stone_gate_2.wall.gate.opening.crown}} pixels up, and is stopped by the stone above it, up to the wall's {{n sprites.wall_stone_gate_2.wall.height}}. This holds shut or open (see [[Archery#What stops a shot|Archery]]);
- **bounds a room**: a gate does not open a [[Rooms|room]] the way a hole does. A room it closes is a room, and it is sealed.

**The dead break a shut gate**, at about three doors' hit points: {{n sprites.wall_stone_gate_2.wall.gate.hp}} an edge, the whole gate giving way when one edge does, every edge broken and open. Michael's ruling of 2026-10-30: "It's important to me that it matters but will come down with some pressure." They go for it as for a door, so a room whose only way in is shut gates is broken into, not a cell. A broken gate shows its stone frame with no portcullis. Your hand stops at a shut gate's bars as a blow and a bite do: nothing is taken, opened, or used through them. The dead walk through a gate that is open, as through an open door.

Fire is not meant to spread through a gate, but the game spreads no fire between tiles, so the flag decides nothing yet.

### Taking one apart

The Take apart tool (X) lights up the whole gate when any of its edges is under the cursor, and one click takes the whole of it apart, with no tool asked for. Nothing comes back, since nothing was spent. The plain stone wall it was stamped over is put back on each edge of the run, never a hole. A gate is never built over, even a broken one: take it apart first.

### How it is drawn

The gate's frame is one picture as wide as its run, with the arch cut out of the stone, and each edge of the run draws its own slice of it, so a gate sorts, is drawn faint when it is a near wall of your room (a gate is an opening, drawn whole), and sits under an upper floor as the wall beside it does. The portcullis is drawn after the wall, a flat grille on its own plane, set back from the edge line. No corner post stands at the gate's ends or inside its arch: the gate and the stone wall beside it are one run.

## Numbers

- Width: {{n sprites.wall_stone_gate_2.wall.gate.span}} tiles (Stone gate (2 wide)) or {{n sprites.wall_stone_gate_3.wall.gate.span}} tiles (Stone gate (3 wide)).
- Height: {{n sprites.wall_stone_gate_2.wall.height}} pixels, a stone wall's, and {{n sprites.wall_stone_gate_2.wall.thickness}} thick.
- The arch: {{n sprites.wall_stone_gate_2.wall.gate.opening.springing}} pixels to the springing, {{n sprites.wall_stone_gate_2.wall.gate.opening.crown}} to the crown; shots pass below the crown.
- The portcullis's swing: {{n sprites.wall_stone_gate_2.wall.gate.swing seconds}}.
- Cost, time, and tool: none; placed at once (Free building only).
- Hit points, were the dead allowed to break one: {{n sprites.wall_stone_gate_2.wall.gate.hp}} an edge. Unused while they cannot.

## With friends

A guest builds a gate through the same build command as the host, naming the first edge of the run, and the host checks the same refusals, Free building included; a guest opens, shuts, and takes one apart by the gate's address, on any edge. Every edge of a gate is a wall in the chunk record, so every player sees it built, open or shut, and it is kept in the save. The raising and lowering of the picture is each player's own, in the game's time. **Friends need the same build of the game:** a gate changed how a chunk's walls are sent (the network protocol was bumped for it), so an older game draws a gate as an unpictured door and lets the dead bite through its bars, and an older host drops a guest's build.

## Settings that change it

- **Free building** (default Off): lists the two gates in the palette and lets them be built. Without it they are refused. A gate already standing is taken apart, opened, and shut with it off. See [[World rules]].

## See also

- [[Walls]]
- [[Openings]]
- [[Battlements]], the parapet of a wall walk, from the art round after the gates'
- [[Fences]], whose gates are planks the dead strike down
- [[Rooms]]
- [[Building]]
- [[Levers]]

## Sources

<!-- sources at 77fee9d -->
- `data/build.json` (`wall_stone`), `src/placement.js:43-50`, `src/placement.js:563-565` (at 8d361e5): the Stone wall buildable with Free building; a gate's "Too far" at Free building's reach (games #573, #575)
- `data/build.json` (`gate_stone_2`, `gate_stone_3`): the two rows, `kind` gate, `dev`, group Castle, no cost, time, or tool (game #570)
- `data/sprites/wall_stone_gate_2.json`, `data/sprites/wall_stone_gate_3.json`: `wall.gate`: `span`, `opening` (`springing`, `crown`), `leaf` (`plane`, three frames), `swing`, the flags `grille`, `deadBreak`, `bitesPass`, `shotsPass`, `fireSpreads`, `hp`; `wall.run` `wall_stone` (game #570)
- `src/placement.js:253-255`, `src/placement.js:530-592`: a gate row is instant, free, and Free building only; the run under the cursor, the ghost, the refusals in order, "Castle gates are not in the game yet", "Step back", "Someone is in the way", "Too far" (game #570)
- `src/placement.js:1681-1693`, `src/placement.js:1882-1885`: a guest's `build` command by the run's first edge, checked by the same reason; the prompt "Click to place the gate at once" (game #570)
- `src/map.js:1691-1845`: one wall on each edge of the run with `gate: { i }`, one `open` kept on all (`setGateOpen`), `gateProblem`'s refusals, `buildGate` over plain stone, `removeGate` putting each plain wall back (game #570)
- `src/map.js:1194-1197`, `src/map.js:1334`: a gate is never stamped over and comes apart whole (game #570)
- `src/interact.js:773-807`: "Open gate" and "Close gate" on any edge, the whole gate at once, no boards (game #570)
- `src/map.js:1716-1719`, `src/map.js:1721-1726`: `gateHolds`, the dead cannot break a gate, its health infinite unless `deadBreak` (game #570)
- `src/map.js:2660`, `src/map.js:2668-2670`, `src/visibility.js:47-50`, `src/entities/zombie.js:330`: a shut gate passes sight and light, stops a blow and a bite (game #570)
- `src/archery.js:193-199`, `src/map.js:1728-1733`: shots pass a gate under its crown, shut or open (game #570)
- `src/render/walls.js:236-290`, `src/render/walls.js:363`, `src/render/walls.js:891`: each edge's slice of the frame and the portcullis's grille on its own plane (game #570)
- `src/map.js:2003-2014`: a room closed by a gate is sealed (a shut gate is neither a broken opening nor an open door) (game #570)
- `docs/09-openings.md` ("Castle gates") and `docs/02-decisions.md` (2026-10-29, Castle gates): the rulings in Michael's words, each a flag on the definition; `net.PROTOCOL` 27 (game #570)
- The game's pull request #570: what was and was not built (fire spreads nowhere; a siege of the dead on a gate is not built)
