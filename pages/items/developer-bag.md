---
title: Developer Bag
categories: [Items, Bags, Development]
aliases: [Dev bag]
summary: A very large bag for testing, from the dev chest.
---

{{infobox-item dev_bag}}

{{devonly note="The Developer Bag is for testing: it comes from the dev chest and the console."}}

The **Developer Bag** is a bag worn on the back with a grid of {{n items.dev_bag.bag.0}} × {{n items.dev_bag.bag.1}} cells, far bigger than any other (see [[Inventory]]). The [[Developer chest]] holds two. On the console, `__game.giveKit()` puts one on your back with what you carried moved into it, and `__game.giveDevBag()` gives one.

{{item-sections dev_bag}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:33`: the Developer Bag: worn on the back, grid 12 x 8
- `data/loot.json:5`: two in the dev chest's fixed list
- `src/dev.js:115-141`: giveKit and giveDevBag

{{navbox items}}
