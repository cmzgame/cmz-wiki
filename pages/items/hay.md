---
title: Hay
categories: [Items, Materials, Farming]
aliases: [Cut hay]
summary: Feed for a feeding trough, cut from open grass with a scythe swung; it stacks.
numbersOk: true
---

<!-- typed: the three tiles ahead and the two of them that must be grass are a loop and a count in `src/farming.js:272-293`, not named numbers -->

{{infobox-item hay}}

**Hay** is feed for tame animals. It is cut from open grass with a [[Scythe]]: a swing that cuts no ready grain, over the three tiles ahead of you when at least two of them are open grass outdoors with nothing standing on them, cuts one hay. "You cut some hay." It goes into your bag, or falls at your feet if the bag is full ("You cut some hay; it falls at your feet."). The grass stays, so a meadow never runs out; each swing costs the swing's stamina. It stacks up to {{n items.hay.stack}} in a cell.

## Uses

Hay is feed: put in a [[Feeding trough]], it feeds the tame animals near it, one unit an animal a day (see [[Keeping#Feeding|Keeping]]). Its hover card says: "Feed: put in a feeding trough, a tame animal near it eats one a day." It is the one feed that is not also food. Nothing else uses it yet.

{{item-sections hay}}

## With friends

A guest's scythe swing is carried out on the host, which cuts the hay for that player into the guest's bag.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:69`: hay, a material tagged `feed`, its stack
- `src/farming.js:266-300`: a scythe swing that cuts no grain, over at least two open grass tiles outdoors with nothing on them, cuts one hay to the bag or the feet; the grass stays; the messages
- `src/farming.js:302-305`: the swing of an item listing `harvest`
- `src/item-info.js:230`: the feed line on its card
- `src/entities/animal.js:584-587`: feed is an item tagged `feed`

{{navbox items}}
