---
title: Boards
categories: [Building, Mechanics]
aliases: [Board, Boarding, Boarding up, Nailing boards]
summary: Nailing planks over doors and windows with B, pulling them with a hold of B, and what a board does.
---

**Boards** are [[Plank|planks]] nailed over a door or a window to keep [[The dead|the dead]] out. A [[Fences|fence]] takes none, its gates included. You nail them with B and pull them with a hold of B, with a [[Smith's hammer]] on you. Each board costs a plank, which comes back when you pull it, and has its own health.

## How it works

### Nailing

Stand by a door or window, with a [[Smith's hammer]] anywhere on you (a hand, the belt, or the bag), and tap B. A bar runs for {{n census.constants.interact.BOARD_TIME seconds}}, and a board goes up on the side you are standing on. Each side of an opening takes up to {{n census.constants.map.BOARDS_PER_SIDE}} boards.

Each board spends one plank, taken from the bag first, then the belt, then your hands. Without a hammer, B says "You need a smith's hammer." and the opening's menu reads "Board up (need a smith's hammer)"; with no plank, B says "You need a plank." A [[Log]] splits into {{n items.log.splitsInto.count}} planks from its item menu, with a [[Hatchet]] on you. The world rule Free building does not waive the hammer or the plank for boards.

A gate takes no boards, nor does any stretch of fence: a gate's menu has no Board up, and B at one says "A gate takes no boards."

Moving cancels the bar, as does drifting out of reach.

### What a board does

Any single board, on either side, makes the opening solid and opaque. Nothing walks through it or sees through it, and the door or shutters behind it can no longer be opened or closed. An opening the dead have broken can still be boarded.

The opening's right-click menu shows how many boards are on this side and on the far side.

### Pulling

Hold B by a boarded opening to pull a board from your own side, with a hammer on you. A bar runs for {{n census.constants.interact.PULL_TIME seconds}}, and the plank comes back into your bag, or falls at your feet if the bag is full. Without a hammer, the menu reads "Pull a board (need a smith's hammer)" and a hold of B says "You need a smith's hammer."

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

A guest's tap and hold of B are carried out by the host, which checks that player's own hammer. The plank spent, and the plank pulled back, are the guest's own.

## See also

- [[Openings]]
- [[Breaking in]]
- [[Plank]]
- [[Building]]

## Sources

<!-- sources at 3c0a243 -->
- `src/interact.js:54-55`: the nailing and pulling times
- `src/map.js:577-580`: a board's health, three boards per side
- `src/map.js:760-778`: a board added on the near side, pulled from it
- `src/interact.js:479-546`: the board and pull actions, from the side you stand on; each asks for the board tool carried, greyed "(need a smith's hammer)" without it; one plank spent; the pulled plank back to the bag or at your feet (game #222)
- `data/tuning.json:112`, `src/inventory.js:88-108`: the board tool, `build`, a smith's hammer carried in a hand, on the belt, or in the bag
- `src/inventory.js:113-135`: a plank counted and taken, bag then belt then hands
- `src/interact.js:1143-1157`: B and hold B; "You need a smith's hammer.", "You need a plank."
- `src/placement.js:144-150`, `src/settings.js:63`: Free building waives the build tools, not the boards'
- `data/items.json:4`, `src/interact.js:1251-1267`: the log's `splitsInto`, split from the item menu with a hatchet on you
- `src/interact.js:945-961`: moving or drifting out of reach cancels the bar
- `src/map.js:811-826`, `src/map.js:1374`: any board stops bodies and sight
- `src/map.js:779-809`: a broken opening keeps its boards, and the dead break them one at a time
- `src/interact.js:489-493`: the menu's count of boards on each side
- `src/render/walls.js:19-32`: only the near face's boards are drawn
- `src/interact.js:1125-1157`, `src/net.js:427`: B's tap and hold, from a guest's snapshot, performed by the host
- `src/interact.js:557`, `src/interact.js:1273`, `src/map.js:816-818`, `src/map.js:2181`: no boards on a fence, a gate included: no Board up on its menu, B says "A gate takes no boards.", a board refused, and a map's boards on one left off (game #398, at 4db1c00)
