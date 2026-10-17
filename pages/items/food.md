---
title: Food
categories: [Items, Mechanics]
aliases: [Eating, Eat, Foods, You are full]
summary: Eating food fills hunger by the food's value, heals a little, and some foods fill thirst too; a full stomach eats nothing.
---

**Food** keeps away [[Hunger]]. Eating one adds the food's hunger value to your hunger, up to the full {{n tuning.player.hungerMax}}, and heals you a little; a few foods add to [[Thirst]] as well. A full stomach empties over {{n tuning.player.hungerDrainSeconds}} seconds of the world's time.

## How it works

### Eating

- **Eat** on a food's menu, in your bag or in an open container, eats one from the stack.
- A food on your [[Belt]] is eaten from its slot: its belt key, **Eat** on the slot's menu, or a double-click on the slot.

Eating is instant, and your character holds the food out for a moment. **A full stomach eats nothing:** with your hunger at {{n tuning.player.fullAt}} or more, every way of eating says "You are full." and the food stays where it was.

### Healing

Each food heals a little, by its heal value below: raw food least, cooked food more, a [[Stew]] the most. It is a stopgap while you wait for your health to come back by itself or find something better; no food heals much.

The heal is bounded by your appetite. A food heals all of its value only when your hunger has room for all the hunger it gives; with less room, it heals that share. A [[Stew]] eaten just below full fills only a few points of hunger, and heals only a fraction of its value.

[[Health]] also comes back slowly by itself while you are fed and watered (see [[Health]]).

### Where food comes from

A new character carries a [[Loaf of bread]] and [[Apple|apples]]. Bread and the [[Wheel of cheese]] turn up in chests, apples in barrels, and the dead carry apples and bread in their pockets (see [[Containers]]). Apples are also picked from the apple trees of [[The orchard]] and three cottage gardens (see [[Trees#Fruit trees|Trees]]). [[Perch]], [[Trout]], and [[Carp]] are caught with a [[Fishing rod]] (see [[Fishing]]).

[[Potato|Potatoes]] and [[Cabbage|cabbages]] are grown and harvested by [[Farming]], starting from the plot by [[Your cottage]].

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
- Full, and eating refused, at: {{n tuning.player.fullAt}}.
- Full to empty: {{n tuning.player.hungerDrainSeconds}} seconds.

## With friends

Eating is sent to the host and done for that player, from the bag, the belt's key, or the belt slot's menu or double-click; each player has their own hunger, and "You are full." goes to the player who tried.

## Settings that change it

- **Survival** (on by default): off, hunger does not drain and stays full, so every food is refused with "You are full."

## See also

- [[Hunger]], [[Thirst]], [[Health]]
- [[Cooking]], [[Oven]], [[Fishing]]
- [[Waterskin]]

## Sources

<!-- sources at 3f11fdb -->
- `data/tuning.json:52-55`: hunger's most, its drain time, and `fullAt`
- `src/entities/player.js:81-101`: full at `fullAt`, or always with Survival off; eating adds hunger and thirst, capped, and the heal times the share of its hunger the stomach has room for; the dead eat nothing (game #186)
- `src/entities/player.js:138-150`: hunger drains, or stays full with Survival off
- `src/interact.js:1177-1186`: every way of eating comes to one place, which says "You are full."
- `src/interact.js:1207-1241`: Eat from your bag or a container
- `src/interact.js:1188-1202`: a food on the belt eaten by its key
- `src/interact.js:1316-1328`, `src/ui/inventory-actions.js:174-182`: a belt slot's menu offers Eat in place of Equip, and a double-click eats (game #186)
- `src/entities/player.js:152-157`: health comes back while fed and watered
- `data/kit.json:6-7`: the starter bread and apples
- `data/loot.json:2-4`: bread and cheese in chests, apples in barrels, apples and bread in the dead's pockets
- `data/sprites/tree_apple.json`, `data/fishing.json`: apples picked from trees; fish caught (game #192, #193)
- `data/recipes.json:664-818`: the cooking, oven, and millstones recipes, the grilled fish among them
- `data/loot.json:9-10`: the granaries' seed of every crop, so every ingredient can be grown (game #219)
- `data/recipes.json`: flour at the millstones, the pumpkin pie at the oven (game #219)
- `src/farming.js:233-259`, `tools/mapgen/valley.py:190`: potatoes and cabbages harvested, with seeds back, from the cottage's plot (game #206)
- `data/items.json:16-18`, `data/items.json:41-46`, `data/items.json:54-57`, `data/items.json:63-65`: the foods, each with its hunger, thirst, and heal (game #186)
- `src/ui/inventory-actions.js:258-264`, `src/ui/inventory-actions.js:352-363`: a guest's Eat, from a bag or a belt slot, runs on the host
- `src/settings.js:22`: Survival, on by default

{{navbox items}}
