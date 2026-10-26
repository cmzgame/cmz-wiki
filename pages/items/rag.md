---
title: Rag
categories: [Items, Materials]
aliases: [Rags, Tear into rags]
summary: Torn from a garment at the workbench with a knife on you; it counts as cloth for any recipe that wants cloth.
numbersOk: true
---

<!-- typed: the hover cards' own words quoted: 'Tear into 2 rags at the workbench' and '(2 each)' (game #471) -->
{{infobox-item rag}}

A **rag** is torn from a garment at the [[Workbench]]: any cap, the hat, a tunic, gloves, breeches, or boots tears into two rags. Tearing needs a [[Dirk]] on you, anywhere you carry it: in a hand, on the belt, or in the bag (without one, the row says "needs a dirk on you" and Make refuses with "You need a dirk."). A rag carries the cloth tag, so every recipe that wants cloth takes it, and takes it before a garment. A rag is never torn again. It {{stack rag}}.

The rag's hover card says: "Tear clothing into rags (2 each) at the workbench, a dirk carried: linen cap, onion-head hat, linen tunic and more." Each of the six garments' cards says the other half: "Tear into 2 rags at the workbench, a dirk carried." The rag is no longer listed among what a garment "Goes into", and the card no longer says the rag is "Made at the workbench": a tear is its own line on both cards, read from the recipe's `verb` (game #471).

{{item-sections rag}}

## Sources

<!-- sources at 3c0a243 -->
- `data/recipes.json` (`verb: "Tear"` on the six `tear_*` rows), `src/item-info.js` `recipesOf` and `toolWords` (at dc10b81): the cards' tear lines, with the dirk carried, left out of Made at and Goes into (game #471)
- `data/items.json:68`: the rag, tagged `cloth` (game #216)
- `data/recipes.json:23-124`: a garment torn into rags at the workbench, each with `uses: cut`, a knife carried (game #222)
- `src/stations.js:145-154`, `src/inventory.js:88-108`, `src/ui/station-panel.js:145`: a recipe's `uses` wants a tool with that verb anywhere on you; "You need a dirk."; the panel's "needs a ... on you"
- `src/stations.js:79-125`: a tag want takes plain cloth before a garment

{{navbox items}}
