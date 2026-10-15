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

- **Trees** of the valley's kinds, thicker in some places than others, never in straight rows. See [[Trees]].
- **Rocks:** one in some of the squares of {{n valley.wild.rocks.cell}} by {{n valley.wild.rocks.cell}} tiles. See [[Rocks]].
- **Mushrooms** near the trees. See [[Mushrooms]].
- **The dead:** from {{n valley.wild.zombiesPerChunk.0}} to {{n valley.wild.zombiesPerChunk.1}} in each chunk, standing idle where they were placed.

Every roll for the wild comes from the tile and the map's seed, so a chunk grows the same whatever order chunks are grown in, and the same forest is there every time you come back.

### The far dead

The dead and villagers more than {{n tuning.world.activeTiles}} tiles from every player do not think or move. They stand where they are until someone comes near.

### Far chunks dropped

A wild chunk that nobody has changed is dropped from memory when it is more than {{n tuning.world.evictChunks}} chunks from every player and no villager stands in it. The dead and the bodies in it are kept on record and come back exactly where they were when the chunk grows again. A chunk that play has changed (a tree chopped, something dropped or built, a fire lit) is never dropped, and nor is any chunk inside the valley. A mushroom swaying as you walk past does not count as a change.

## Numbers

- Chunk: {{n census.constants.map.CHUNK}} by {{n census.constants.map.CHUNK}} tiles.
- The dead in a wild chunk: {{n valley.wild.zombiesPerChunk.0}} to {{n valley.wild.zombiesPerChunk.1}}.
- Rock squares: {{n valley.wild.rocks.cell}} tiles, {{n valley.wild.rocks.chance}} of them with a rock.
- The far dead stand still beyond {{n tuning.world.activeTiles}} tiles.
- Unchanged wild chunks dropped beyond {{n tuning.world.evictChunks}} chunks.

## With friends

Only the host grows chunks, and it grows them round every player, guests included. Each chunk it grows or changes is sent whole to the guests in the next frame. A chunk is dropped only when it is far from every player.

## See also

- [[The valley]]
- [[Trees]]
- [[Rocks]]
- [[Mushrooms]]
- [[The dead]]
