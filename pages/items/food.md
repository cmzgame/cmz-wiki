---
title: Food
categories: [Items, Mechanics]
aliases: [Eating, Eat, Foods, Well fed]
summary: Eating food fills hunger by the food's value and heals by its heal value, whenever you like; some foods fill thirst too.
---

**Food** keeps away [[Hunger]]. Eating one adds the food's hunger value to your hunger, up to the full {{n tuning.player.hungerMax}}, and heals you a little; a few foods add to [[Thirst]] as well. A full stomach empties over {{n tuning.player.hungerDrainSeconds}} seconds of the world's time.

## How it works

### Eating

- **Eat** on a food's menu, in your bag or in an open container, eats one from the stack.
- A food on your [[Belt]] is eaten from its slot: its belt key, **Eat** on the slot's menu, or a double-click on the slot.

Eating is instant, and your character holds the food out for a moment. **You can eat whenever you like,** hungry or full: hunger stops at its maximum, and the food still heals. What it heals rises over your head as a green number (see [[Interface#Floating numbers|Interface]]).

### Healing

Each food heals a little, by its heal value below: raw food least, cooked food more, a [[Stew]] the most. It is a stopgap while you wait for your health to come back by itself or find something better; no food heals much.

A food heals exactly its value, every time, however full you are. The cost of a heal is the food itself: the same food you would need for hunger later.

[[Health]] also comes back slowly by itself while you are fed and watered, and faster while you are **well fed**, with hunger at {{n tuning.player.fullAt}} or more (see [[Health]]).

### Where food comes from

A new character carries a [[Loaf of bread]] and [[Apple|apples]]. Bread and the [[Wheel of cheese]] turn up in chests, apples in barrels, and the dead carry apples and bread in their pockets (see [[Containers]]). Apples are also picked from the apple trees of [[The orchard]] and three cottage gardens (see [[Trees#Fruit trees|Trees]]). [[Perch]], [[Trout]], and [[Carp]] are caught with a [[Fishing rod]] (see [[Fishing]]).

[[Potato|Potatoes]] and [[Cabbage|cabbages]] are grown and harvested by [[Farming]], starting from the plot by [[Your cottage]].

How long all the food the valley starts with would last, alone or with friends, is counted on [[Day-one food]].

Cooked foods are made at a lit fire ([[Cooking]]) or the [[Oven]]. The fish grill at a fire, a potato roasts, and a stew takes potatoes, a cabbage, and garlic. Rye's [[Grain]] makes porridge, and ground into [[Flour]] at the [[Millstones]] it bakes into bread and, with a pumpkin, a [[Pumpkin pie]] at the oven. Every one of them can be made in play.

### Foods

| Food | Hunger | Thirst | Heals | Stacks to |
|---|---|---|---|---|
| [[Loaf of bread]] | {{n items.bread.hunger}} | - | {{n items.bread.heal}} | - |
| [[Apple]] | {{n items.apple.hunger}} | {{n items.apple.thirst}} | {{n items.apple.heal}} | {{n items.apple.stack}} |
| [[Wheel of cheese]] | {{n items.cheese.hunger}} | - | {{n items.cheese.heal}} | - |
| [[Perch]] | {{n items.perch.hunger}} | - | {{n items.perch.heal}} | {{n items.perch.stack}} |
| [[Trout]] | {{n items.trout.hunger}} | - | {{n items.trout.heal}} | {{n items.trout.stack}} |
| [[Carp]] | {{n items.carp.hunger}} | - | {{n items.carp.heal}} | {{n items.carp.stack}} |
| [[Grilled perch]] | {{n items.grilled_perch.hunger}} | - | {{n items.grilled_perch.heal}} | {{n items.grilled_perch.stack}} |
| [[Grilled trout]] | {{n items.grilled_trout.hunger}} | - | {{n items.grilled_trout.heal}} | {{n items.grilled_trout.stack}} |
| [[Grilled carp]] | {{n items.grilled_carp.hunger}} | - | {{n items.grilled_carp.heal}} | {{n items.grilled_carp.stack}} |
| [[Potato]] | {{n items.potato.hunger}} | - | {{n items.potato.heal}} | {{n items.potato.stack}} |
| [[Cabbage]] | {{n items.cabbage.hunger}} | - | {{n items.cabbage.heal}} | {{n items.cabbage.stack}} |
| [[Garlic]] | {{n items.garlic.hunger}} | - | {{n items.garlic.heal}} | {{n items.garlic.stack}} |
| [[Pumpkin]] | {{n items.pumpkin.hunger}} | - | {{n items.pumpkin.heal}} | {{n items.pumpkin.stack}} |
| [[Roast potato]] | {{n items.roast_potato.hunger}} | - | {{n items.roast_potato.heal}} | {{n items.roast_potato.stack}} |
| [[Stew]] | {{n items.stew.hunger}} | {{n items.stew.thirst}} | {{n items.stew.heal}} | {{n items.stew.stack}} |
| [[Porridge]] | {{n items.porridge.hunger}} | - | {{n items.porridge.heal}} | {{n items.porridge.stack}} |

{{item-table kind=food}}

## Numbers

- Hunger at most: {{n tuning.player.hungerMax}}.
- Well fed, and health back {{n tuning.player.wellFedRegenMult}} times as fast, at: {{n tuning.player.fullAt}}.
- Full to empty: {{n tuning.player.hungerDrainSeconds}} seconds.

## With friends

Eating is sent to the host and done for that player, from the bag, the belt's key, or the belt slot's menu or double-click; each player has their own hunger.

## Settings that change it

- **Survival** (on by default): off, hunger does not drain and stays full, so you are always well fed; food still heals.

## See also

- [[Hunger]], [[Thirst]], [[Health]]
- [[Day-one food]]
- [[Cooking]], [[Oven]], [[Fishing]]
- [[Waterskin]]

## Sources

<!-- sources at 3c0a243 -->
- `data/tuning.json:52-55`: hunger's most, its drain time, and `fullAt`
- `src/entities/player.js:83-100`: well fed at `fullAt`, or always with Survival off; eating adds hunger and thirst, capped, and the whole heal; the dead eat nothing (game #259)
- `src/entities/player.js:140-152`: hunger drains, or stays full with Survival off
- `src/interact.js:1183-1190`: every way of eating comes to one place
- `src/interact.js:1212-1246`: Eat from your bag or a container
- `src/interact.js:1193-1207`: a food on the belt eaten by its key
- `src/interact.js:1321-1333`, `src/ui/inventory-actions.js:221-229`: a belt slot's menu offers Eat in place of Equip, and a double-click eats (game #186)
- `src/entities/player.js:149-161`: health comes back while fed and watered, faster well fed (game #259)
- `data/kit.json:6-7`: the starter bread and apples
- `data/loot.json:2-4`: bread and cheese in chests, apples in barrels, apples and bread in the dead's pockets
- `data/sprites/tree_apple.json`, `data/fishing.json`: apples picked from trees; fish caught (game #192, #193)
- `data/recipes.json:664-818`: the cooking, oven, and millstones recipes, the grilled fish among them
- `data/loot.json:9-10`: the granaries' seed of every crop, so every ingredient can be grown (game #219)
- `data/recipes.json`: flour at the millstones, the pumpkin pie at the oven (game #219)
- `src/farming.js:233-259`, `tools/mapgen/valley.py:191`: potatoes and cabbages harvested, with seeds back, from the cottage's plot (game #206)
- `data/items.json:16-18`, `data/items.json:41-46`, `data/items.json:54-57`, `data/items.json:63-65`: the foods, each with its hunger, thirst, and heal (game #186)
- `src/ui/inventory-actions.js:313-319`, `src/ui/inventory-actions.js:421-432`: a guest's Eat, from a bag or a belt slot, runs on the host
- `src/settings.js:22`: Survival, on by default

{{navbox items}}
