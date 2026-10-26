---
title: Meat pie
categories: [Items, Food]
summary: Raw meat and flour baked at the oven; food that fills well and heals as much as any food.
---

{{infobox-item meat_pie}}

A **meat pie** is baked at the [[Oven]], its fire lit, from any raw [[Meat|meat]] (not [[Bacon]]) and [[Flour]], which the [[Millstones]] grind from rye's [[Grain]]. Eaten, it fills hunger by {{n items.meat_pie.hunger}} and heals {{n items.meat_pie.heal}}, as much as any food heals. It takes a cell of its own and does not stack, and it is on placeholder art.

An oven with a pie in it cannot be picked up until the pie is done (under the [[World rules|world rule]] **Village stations**, which lets the oven be carried): its menu reads "(it is still making something)".

{{item-sections meat_pie}}

## Sources

<!-- sources at d625844 -->
- `data/items.json:79`: the meat pie: food, its hunger and heal (game #462)
- `data/recipes.json:1400-1420`: any raw meat (the `meat` tag) and flour at the oven, the fire lit
- `src/interact.js:320-338`: a station with a job in its queue is not picked up, its entry saying why (the review of #462)

{{navbox items}}
