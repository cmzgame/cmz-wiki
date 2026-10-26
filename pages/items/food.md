---
title: Food
categories: [Items, Mechanics]
aliases: [Eating, Eat, Foods, Well fed]
summary: Eating food fills hunger by the food's value and heals by its heal value, whenever you like; some foods fill thirst too.
---

**Food** keeps away [[Hunger]]. Eating one adds the food's hunger value to your hunger, up to the full {{n tuning.player.hungerMax}}, and heals you a little; a few foods add to [[Thirst]] as well. A full stomach empties over {{n tuning.player.hungerDrainSeconds}} seconds of the world's time.

## How it works

### Eating

- **Eat** on a food's menu, in your bag or in an open container, eats it. Most food does not stack, each taking a cell of its own, an [[Egg]] too; [[Pemmican]] stacks.
- A food on your [[Belt]] is eaten from its slot: its belt key, **Eat** on the slot's menu, or a double-click on the slot.

Eating is instant, and your character holds the food out for a moment. **You can eat whenever you like,** hungry or full: hunger stops at its maximum, and the food still heals. What it heals rises over your head as a green number (see [[Interface#Floating numbers|Interface]]).

### Healing

Each food heals a little, by its heal value below: raw food least, cooked food more, the pottages, the [[Hearty stew]], and the [[Meat pie]] the most. It is a stopgap while you wait for your health to come back by itself or find something better; no food heals much.

A food heals exactly its value, every time, however full you are. The cost of a heal is the food itself: the same food you would need for hunger later.

[[Health]] also comes back slowly by itself while you are fed and watered, and faster while you are **well fed**, with hunger at {{n tuning.player.fullAt}} or more (see [[Health]]).

### Where food comes from

A new character carries a [[Loaf of bread]] and [[Apple|apples]]. Bread and the [[Wheel of cheese]] turn up in chests, on shelves and in cupboards, and on the inn's counter; apples in barrels; and the dead carry apples and bread in their pockets (each table's odds are on [[Drop tables]]). Apples are also picked from the apple trees of [[The orchard]] and three cottage gardens (see [[Trees#Fruit trees|Trees]]). [[Perch]], [[Trout]], and [[Carp]] are caught with a [[Fishing rod]] (see [[Fishing]]).

[[Potato|Potatoes]] and [[Cabbage|cabbages]] are grown and harvested by [[Farming]], starting from the plot by [[Your cottage]].

How long all the food the valley starts with would last, alone or with friends, is counted on [[Day-one food]].

Cooked foods are made at a lit fire ([[Cooking]]) or the [[Oven]]. The fish grill at a fire, a potato roasts, and the [[Plain pottage]] takes potatoes, a cabbage, and garlic. Rye's [[Grain]] makes porridge, and ground into [[Flour]] at the [[Millstones]] it bakes into bread and, with a pumpkin, a [[Pumpkin pie]] at the oven. Every one of them can be made in play.

The animals give more (see [[Hunting]] and [[Keeping]]): each raw [[Meat|meat]] cooks alone at a fire into its own roast or steak, and raw meat goes into the [[Meat pottage]], the [[Hearty stew]], a [[Meat pie]] at the oven, [[Smoked meat]] at a [[Smoking rack]], and [[Pemmican]]; eggs and bacon make [[Eggs and bacon]], jugs of milk a [[Wheel of cheese]] at a fire, and a jug [[Butter]] at the [[Workbench]].

### Foods

| Food | Hunger | Thirst | Heals |
|---|---|---|---|
| [[Loaf of bread]] | {{n items.bread.hunger}} | - | {{n items.bread.heal}} |
| [[Apple]] | {{n items.apple.hunger}} | {{n items.apple.thirst}} | {{n items.apple.heal}} |
| [[Wheel of cheese]] | {{n items.cheese.hunger}} | - | {{n items.cheese.heal}} |
| [[Perch]] | {{n items.perch.hunger}} | - | {{n items.perch.heal}} |
| [[Trout]] | {{n items.trout.hunger}} | - | {{n items.trout.heal}} |
| [[Carp]] | {{n items.carp.hunger}} | - | {{n items.carp.heal}} |
| [[Grilled perch]] | {{n items.grilled_perch.hunger}} | - | {{n items.grilled_perch.heal}} |
| [[Grilled trout]] | {{n items.grilled_trout.hunger}} | - | {{n items.grilled_trout.heal}} |
| [[Grilled carp]] | {{n items.grilled_carp.hunger}} | - | {{n items.grilled_carp.heal}} |
| [[Potato]] | {{n items.potato.hunger}} | - | {{n items.potato.heal}} |
| [[Cabbage]] | {{n items.cabbage.hunger}} | - | {{n items.cabbage.heal}} |
| [[Garlic]] | {{n items.garlic.hunger}} | - | {{n items.garlic.heal}} |
| [[Pumpkin]] | {{n items.pumpkin.hunger}} | - | {{n items.pumpkin.heal}} |
| [[Roast potato]] | {{n items.roast_potato.hunger}} | - | {{n items.roast_potato.heal}} |
| [[Plain pottage]] | {{n items.stew.hunger}} | {{n items.stew.thirst}} | {{n items.stew.heal}} |
| [[Porridge]] | {{n items.porridge.hunger}} | - | {{n items.porridge.heal}} |
| [[Roast hen]] | {{n items.hen_cooked.hunger}} | - | {{n items.hen_cooked.heal}} |
| [[Roast rabbit]] | {{n items.rabbit_cooked.hunger}} | - | {{n items.rabbit_cooked.heal}} |
| [[Venison steak]] | {{n items.venison_cooked.hunger}} | - | {{n items.venison_cooked.heal}} |
| [[Beef steak]] | {{n items.beef_cooked.hunger}} | - | {{n items.beef_cooked.heal}} |
| [[Roast mutton]] | {{n items.mutton_cooked.hunger}} | - | {{n items.mutton_cooked.heal}} |
| [[Roast pork]] | {{n items.pork_cooked.hunger}} | - | {{n items.pork_cooked.heal}} |
| [[Meat pottage]] | {{n items.meat_pottage.hunger}} | {{n items.meat_pottage.thirst}} | {{n items.meat_pottage.heal}} |
| [[Hearty stew]] | {{n items.hearty_stew.hunger}} | {{n items.hearty_stew.thirst}} | {{n items.hearty_stew.heal}} |
| [[Eggs and bacon]] | {{n items.eggs_and_bacon.hunger}} | - | {{n items.eggs_and_bacon.heal}} |
| [[Meat pie]] | {{n items.meat_pie.hunger}} | - | {{n items.meat_pie.heal}} |
| [[Smoked meat]] | {{n items.smoked_meat.hunger}} | - | {{n items.smoked_meat.heal}} |
| [[Pemmican]] | {{n items.pemmican.hunger}} | - | {{n items.pemmican.heal}} |
| [[Butter]] | {{n items.butter.hunger}} | - | {{n items.butter.heal}} |

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
- `src/inventory.js:344-363`, `src/interact.js:1532-1541` (at 78116b1): a food on the belt eaten by its key, from a slot of any role (game #478)
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
- `data/loot.json`, `tools/mapgen/valley.py`: where it is found, a table per kind of container, gear placed once (game #399, at ce21ffc)
- `data/items.json`: only arrows, fire arrows, throwing knives and axes, bandages, and seeds stack (game #399, at ce21ffc); eggs stacked from game #460 until game #475 made them one a cell; pemmican since game #462
- `data/items.json:70-82`, `data/items.json:109`, `data/recipes.json:1130-1420`, `data/recipes.json:1554-1573`, `data/recipes.json:386-401`: the cooked meats, the dishes, and butter, their numbers and recipes; the stew named Plain pottage (game #462, at d625844)

{{navbox items}}
