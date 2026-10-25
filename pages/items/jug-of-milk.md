---
title: Jug of milk
categories: [Items, Food, Drink]
aliases: [Milk, Jugs of milk]
summary: A fed cow's milk, taken once a day with an empty bucket carried; food and drink at once.
---

{{infobox-item milk}}

A **jug of milk** is what a cow gives when it has eaten today: choose **Milk the cow** on its menu with an empty [[Bucket]] carried, a timed entry of {{n animals.work.milk seconds}}, once a game day. It gives {{n animals.species.cow.produce.count.0}} jug, and one more {{pct animals.keep.more}} of the time. The milk is a jug of its own: the bucket is not filled and is kept, and a bucket holding water is refused with "Empty the bucket first." The cows are in [[Hollow Farm]]'s byre; see [[Keeping]].

It is eaten as food and quenches thirst too: "Eat: heals {{n items.milk.heal}}, fills hunger {{n items.milk.hunger}}, quenches thirst {{n items.milk.thirst}}." Its card also says "Milked from a fed cow, a bucket carried." {{planned doc=45 step=4 note="Cheese and butter from milk (Cooking 3)."}}

{{item-sections milk}}

## With friends

A guest's **Milk the cow** is sent to the host by the cow's id, and the host runs it for that player, the bar included; the jug goes into the guest's bag. The day a cow was milked is sent to every player, so a cow milked by one player is milked for all.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:66`: the jug of milk: food, its hunger, thirst, and heal
- `data/animals.json`: the cow's `produce`, `work.milk`, `keep.more`
- `src/entities/animal.js:513-552`: milking: fed today, once a day, a bucket carried and empty, the count and one more
- `src/item-info.js:147-153`, `src/item-info.js:224-229`: its card's Eat line and where it comes from
- `docs/45-animals.md:40`: cheese and butter, not built

{{navbox items}}
