---
title: Developer Bag
categories: [Items, Bags, Development]
aliases: [Dev bag]
summary: A very large bag for testing, from the dev chest.
---

{{infobox-item dev_bag}}

{{devonly note="The Developer Bag is for testing: it comes from the dev chest, the console, and a world made with the Dev bag rule."}}

The **Developer Bag** is a bag equipped on the back with a grid of {{n items.dev_bag.bag.0}} × {{n items.dev_bag.bag.1}} cells, far bigger than any other (see [[Inventory]]). The [[Developer chest]] holds two. On the console, `__game.giveKit()` puts one on your back with what you carried moved into it, and `__game.giveDevBag()` gives one.

A world made with **Dev bag** on, at the Sandbox step of New world, starts every character, a guest's too, wearing a Developer Bag in place of the [[Burlap sack]], with the starting kit in it (see [[Player#The starter kit|the starter kit]] and [[World rules]]). It is chosen once, when the world is made.

{{item-sections dev_bag}}

## Sources

<!-- sources at 82a5763 -->
- `data/items.json:35`: the Developer Bag: equipped on the back, grid 12 x 8
- `data/loot.json:6`: two in the dev chest's fixed list
- `src/settings.js:71`, `src/rules.js:22`, `src/kit.js:58-63`: the Dev bag world rule, worn in place of the sack by every new character
- `src/dev.js:123-149`: giveKit and giveDevBag

{{navbox items}}
