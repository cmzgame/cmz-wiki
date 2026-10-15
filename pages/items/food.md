---
title: Food
categories: [Items, Mechanics]
aliases: [Eating, Eat, Foods]
summary: Eating food fills hunger by the food's value, and some foods fill thirst too.
---

**Food** keeps away [[Hunger]]. Eating one adds the food's hunger value to your hunger, up to the full {{n tuning.player.hungerMax}}; a few foods add to [[Thirst]] as well. A full stomach empties over {{n tuning.player.hungerDrainSeconds}} seconds of the world's time.

## How it works

### Eating

- **Eat** on a food's menu, in your bag or in an open container, eats one from the stack.
- A stack of food on your [[Belt]] is eaten one at a time with its number key.

Food does not heal you by itself. [[Health]] comes back slowly while you are fed and watered (see [[Player]]).

### Where food comes from

A new character carries a [[Loaf of bread]] and [[Apple|apples]]. Bread and the [[Wheel of cheese]] turn up in chests, apples in barrels, and the dead carry apples and bread in their pockets (see [[Containers]]).

Cooked foods are made at a lit fire ([[Cooking]]) or the [[Oven]]. Their ingredients (potatoes, cabbages, garlic, grain, flour) are not found anywhere in the valley yet: the crops in the fields cannot be harvested, and no container holds them.

{{planned doc=30 note="Harvesting the fields' crops, so the cooking recipes can be made in play."}}

### Foods

| Food | Hunger | Thirst | Stacks to |
|---|---|---|---|
| [[Loaf of bread]] | {{n items.bread.hunger}} | - | - |
| [[Apple]] | {{n items.apple.hunger}} | {{n items.apple.thirst}} | {{n items.apple.stack}} |
| [[Wheel of cheese]] | {{n items.cheese.hunger}} | - | - |
| [[Potato]] | {{n items.potato.hunger}} | - | {{n items.potato.stack}} |
| [[Cabbage]] | {{n items.cabbage.hunger}} | - | {{n items.cabbage.stack}} |
| [[Garlic]] | {{n items.garlic.hunger}} | - | {{n items.garlic.stack}} |
| [[Pumpkin]] | {{n items.pumpkin.hunger}} | - | {{n items.pumpkin.stack}} |
| [[Roast potato]] | {{n items.roast_potato.hunger}} | - | {{n items.roast_potato.stack}} |
| [[Stew]] | {{n items.stew.hunger}} | {{n items.stew.thirst}} | {{n items.stew.stack}} |
| [[Porridge]] | {{n items.porridge.hunger}} | - | {{n items.porridge.stack}} |

{{item-table kind=food}}

## Numbers

- Hunger at most: {{n tuning.player.hungerMax}}.
- Full to empty: {{n tuning.player.hungerDrainSeconds}} seconds.

## With friends

Eating is sent to the host and done for that player; each player has their own hunger.

## Settings that change it

- **Survival** (on by default): off, hunger does not drain.

## See also

- [[Hunger]], [[Thirst]]
- [[Cooking]], [[Oven]]
- [[Waterskin]]

{{navbox items}}
