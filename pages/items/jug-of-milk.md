---
title: Jug of milk
categories: [Items, Food, Drink]
aliases: [Milk, Jugs of milk]
summary: A fed cow's milk, taken once a day with an empty bucket carried; food and drink at once.
---

{{infobox-item milk}}

A **jug of milk** is what a cow gives when it has eaten today: choose **Milk the cow** on its menu with an empty [[Bucket]] carried, a timed entry of {{n animals.work.milk seconds}}, once a game day. It gives {{n animals.species.cow.produce.count.0}} jug, and one more {{pct animals.keep.more}} of the time. The milk is a jug of its own: the bucket is not filled and is kept. Any empty bucket you carry will do, wherever it is: a bucket of water in your hand does not stop you if an empty one is in the bag, and only when every bucket you carry holds water is milking refused, "Empty the bucket first." The cows are in [[Hollow Farm]]'s byre; see [[Keeping]].

It is eaten as food and quenches thirst too: "Eat: heals {{n items.milk.heal}}, fills hunger {{n items.milk.hunger}}, quenches thirst {{n items.milk.thirst}}." Its card also says "Milked from a fed cow, a bucket carried." Jugs of milk warmed at a lit fire make a [[Wheel of cheese]] (see [[Cooking]]), and a jug is churned into [[Butter]] at the [[Workbench]].

{{item-sections milk}}

## With friends

A guest's **Milk the cow** is sent to the host by the cow's id, and the host runs it for that player, the bar included; the jug goes into the guest's bag. The day a cow was milked is sent to every player, so a cow milked by one player is milked for all.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:66`: the jug of milk: food, its hunger, thirst, and heal
- `data/animals.json`: the cow's `produce`, `work.milk`, `keep.more`
- `src/entities/animal.js:520-551`, `src/inventory.js:94-106`: milking: fed today, once a day, an empty bucket carried anywhere preferred, refused only when every bucket holds water (game #466), the count and one more
- `src/item-info.js:147-153`, `src/item-info.js:224-229`: its card's Eat line and where it comes from
- `data/recipes.json:1307-1323`, `data/recipes.json:386-401`: cheese at a lit cooking fire, butter at the workbench (game #462, at d625844)

{{navbox items}}
