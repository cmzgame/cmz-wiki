---
title: The wild
categories: [Mechanics, The world, Places]
aliases: [Wild, Wild forest, Beyond the valley, Chunks]
summary: The endless forest past the valley's edge, grown round each player, with a few of the dead in it.
numbersOk: true
---

Past the edge of [[The valley]], the world goes on as wild forest in every direction, with no end. It is grown as players walk into it, the same forest on every visit, with the odd big rock, mushrooms under the trees, and a few of [[The dead]] standing about. The roads and the river stop at the valley's edge.

## How it works

### Chunks

The map is kept in square chunks of {{n census.constants.map.CHUNK}} by {{n census.constants.map.CHUNK}} tiles. The valley is {{n valley.bounds.2}} tiles across, all of it laid out by the map; every chunk past its edge is wild.

### Growth round each player

Chunks are grown only round players and where something changes the world. Every step, the world grows the chunks within four chunks of each player in every direction, so the edge of the grown world stays well beyond the screen and nothing appears in view. Looking, lighting, and drawing never grow a chunk.
<!-- typed: the growth ring of four chunks is a literal in src/game.js (map.ensureAround(p.gx, p.gy, 4)), not a named constant or data -->

### What grows

- **Trees** of the valley's kinds, thicker in some places than others, never in straight rows; none in a world made with Trees off. See [[Trees]].
- **Rocks:** one in some of the squares of {{n valley.wild.rocks.cell}} by {{n valley.wild.rocks.cell}} tiles. See [[Rocks]].
- **Mushrooms** near the trees, so none where there are no trees. See [[Mushrooms]].
- **The dead:** from {{n valley.wild.zombiesPerChunk.0}} to {{n valley.wild.zombiesPerChunk.1}} in each chunk at the Standard Starting population, standing idle where they were placed on tiles with nothing on them. The world's Starting population scales that number: none at None, fewer at Low, more at High (see [[World rules]]).

Every roll for the wild comes from the tile and the map's seed, so a chunk grows the same whatever order chunks are grown in, and the same forest is there every time you come back.

### The far dead

The dead and villagers more than {{n tuning.world.activeTiles}} tiles from every player do not think or move. They stand where they are until someone comes near.

### Far chunks dropped

A wild chunk that nobody has changed is dropped from memory when it is more than {{n tuning.world.evictChunks}} chunks from every player and no villager stands in it. The dead and the bodies in it are kept on record and come back exactly where they were when the chunk grows again. A chunk that play has changed (a tree chopped, something dropped or built, a fire lit) is never dropped, and nor is any chunk inside the valley. A mushroom swaying as you walk past does not count as a change.

## Numbers

- Chunk: {{n census.constants.map.CHUNK}} by {{n census.constants.map.CHUNK}} tiles.
- The dead in a wild chunk: {{n valley.wild.zombiesPerChunk.0}} to {{n valley.wild.zombiesPerChunk.1}} at Standard, times the Starting population's factor.
- Rock squares: {{n valley.wild.rocks.cell}} tiles, {{n valley.wild.rocks.chance}} of them with a rock.
- The far dead stand still beyond {{n tuning.world.activeTiles}} tiles.
- Unchanged wild chunks dropped beyond {{n tuning.world.evictChunks}} chunks.

## With friends

Only the host grows chunks, and it grows them round every player, guests included, by the world's own Trees and Starting population. Each chunk it grows or changes is sent whole to the guests in the next frame. A chunk is dropped only when it is far from every player.

## See also

- [[The valley]]
- [[Trees]]
- [[Rocks]]
- [[Mushrooms]]
- [[The dead]]

## Sources

<!-- sources at 2a9a308 -->
- `data/maps/valley.json:4-9`, `src/map.js:990-995`: the valley's bounds; every chunk past them is wild
- `src/map.js:16`: the chunk's size
- `src/game.js:508`, `src/map.js:1039-1049`: growth round each player four chunks out; reads never grow
- `src/map.js:256-260`, `src/map.js:292-296`, `data/maps/valley.json:5098-5120`: wild trees by density noise, the rocks' cells, and the dead per chunk
- `src/map.js:277-287`: a rock in some cells
- `src/map.js:316-325`: mushrooms near trees
- `src/map.js:1013-1025`, `src/entities/zombie.js:36-41`: the dead placed on a hashed tile, idle
- `src/map.js:290-296`, `src/map.js:1012-1025`, `src/map.js:314-325`: Trees off grows no wild tree and so no mushroom; each chunk's dead scaled by the Starting population, on free tiles only
- `src/map.js:231-236`: every roll a hash of tile and seed
- `data/tuning.json:74`, `src/game.js:478-482`, `src/game.js:586-595`: the far dead and villagers stand still
- `data/tuning.json:75`, `src/map.js:916-937`, `src/game.js:511-528`: unchanged wild chunks dropped when far from every player with no villager in them, the dead kept on record
- `src/map.js:653-686`: any play change marks a chunk for keeps
- `src/main.js:1034`, `src/map.js:1006`, `src/net.js:782`, `src/net.js:856`, `src/net.js:1118-1122`: only the host grows; grown and changed chunks sent whole to guests
