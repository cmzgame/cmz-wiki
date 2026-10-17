---
title: Rag
categories: [Items, Materials]
aliases: [Rags, Tear into rags]
summary: Torn from a garment at the workbench with a knife on you; it counts as cloth for any recipe that wants cloth.
---

{{infobox-item rag}}

A **rag** is torn from a garment at the [[Workbench]]: any cap, the hat, a tunic, gloves, breeches, or boots tears into two rags. Tearing needs a [[Belt knife]] on you, anywhere you carry it: in a hand, on the belt, or in the bag ("Needs a belt knife on you." without one). A rag carries the cloth tag, so every recipe that wants cloth takes it, and takes it before a garment. A rag is never torn again. It stacks to {{n items.rag.stack}}.

{{item-sections rag}}

## Sources

<!-- sources at cfe0203 -->
- `data/items.json:68`: the rag, tagged `cloth` (game #216)
- `data/recipes.json:23-124`: a garment torn into rags at the workbench, each with `carry: knife`
- `src/stations.js:150-160`, `src/ui/station-panel.js:144`: a recipe's `carry` wants the item anywhere on you; "Needs a ... on you."; the panel says so
- `src/stations.js:84-130`: a tag want takes plain cloth before a garment

{{navbox items}}
