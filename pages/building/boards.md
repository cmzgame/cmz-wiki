---
title: Boards
categories: [Building, Mechanics]
aliases: [Board, Boarding, Boarding up, Nailing boards]
summary: Nailing planks over doors and windows with B, pulling them with a hold of B, and what a board does.
---

**Boards** are [[Plank|planks]] nailed over a door or a window to keep [[The dead|the dead]] out. You nail them with B and pull them with a hold of B. Each board costs a plank and has its own health.

## How it works

### Nailing

Stand by a door or window and tap B. A bar runs for {{n census.constants.interact.BOARD_TIME seconds}}, and a board goes up on the side you are standing on. Each side of an opening takes up to {{n census.constants.map.BOARDS_PER_SIDE}} boards.

Each board spends one plank, taken from the bag first, then the belt, then your hands. With no plank, B says "You need a plank." A [[Log]] splits into {{n items.log.splitsInto.count}} planks from its item menu.

Moving cancels the bar, as does drifting out of reach.

### What a board does

Any single board, on either side, makes the opening solid and opaque. Nothing walks through it, climbs through it, or sees through it, and the door or shutters behind it can no longer be opened or closed. An opening the dead have broken can still be boarded.

The opening's right-click menu shows how many boards are on this side and on the far side.

### Pulling

Hold B by a boarded opening to pull a board from your own side. A bar runs for {{n census.constants.interact.PULL_TIME seconds}}. A pulled board is destroyed: you get no plank back.

You can only pull boards on your side. Boards nailed on the far side cannot be pulled from where you stand; only the dead break them. You have no way to damage an opening yourself.

### Which side shows

Boards are drawn on the face of the wall towards the camera. Boards on the far face of a wall are not drawn, but they still count.

### Breaking boards

The dead break boards by hitting them, one board at a time. Each board has {{n census.constants.map.BOARD_HP}} health. See [[Breaking in]].

## Numbers

- Boards per side: {{n census.constants.map.BOARDS_PER_SIDE}}.
- Health of a board: {{n census.constants.map.BOARD_HP}}.
- Time to nail: {{n census.constants.interact.BOARD_TIME seconds}}.
- Time to pull: {{n census.constants.interact.PULL_TIME seconds}}.
- Planks from a log: {{n items.log.splitsInto.count}}.

## With friends

A guest's tap and hold of B are carried out by the host. The plank spent is the guest's own.

## See also

- [[Openings]]
- [[Breaking in]]
- [[Plank]]
- [[Building]]
