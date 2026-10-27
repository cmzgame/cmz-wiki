---
title: Decorative pumpkin
categories: [Items, Decoration]
aliases: [Place as decoration, Decoration, Decorations]
summary: A pumpkin set down as decoration and picked up again: no longer food, so a placed pumpkin is never a larder.
---

{{infobox-item decorative_pumpkin}}

A **decorative pumpkin** is what a [[Pumpkin]] becomes once it is set down as decoration. A pumpkin's menu in your bag has **Place as decoration (it will not be food again)**, and its hover card says the same. Set down, it is a plain pumpkin standing on the floor. Picked up again, it is a decorative pumpkin: an item of the decor kind, not food, which Place sets down again as often as you like. So a pumpkin kept as decoration is never a store of food.

## Setting it down

Place starts a ghost on the tile under the cursor, green where it may stand within {{n census.constants.setdown.REACH tiles}} and in sight: any open floor, indoors or out, with nothing on it ("No room" otherwise). A click sets it down ("You set the pumpkin down as decoration."); Escape or a right click cancels.

A decoration is not a gatherable: it neither sways when clicked nor is outlined. Its menu has one entry, **Pick up decorative pumpkin**, which puts it in your bag. It is never taken apart. The plain pumpkins on the proving ground's map are this decoration too.

{{item-sections decorative_pumpkin}}

## With friends

Setting it down is a placement command the host carries out for the player who sent it; Pick up is the menu's own label, run on the host.

## Sources

<!-- sources at 0ce54cf -->
- `data/items.json`: the pumpkin's `placeAs`; the Decorative pumpkin, decor, `place` and `stand: "ground"`
- `src/interact.js:1450-1460`: Place as decoration (it will not be food again); Place
- `src/item-info.js`: the cards' Place as decoration and Place lines
- `src/setdown.js:31-39`, `src/setdown.js:68-90`: any open floor; set down, not `made`, "You set the pumpkin down as decoration."
- `data/sprites/pumpkin_plain_0.json`, `data/sprites/pumpkin_plain_1.json`: not interactable, not carried, `item: "decorative_pumpkin"`
- `src/setdown.js:92-124`: Pick up into the bag as its item

{{navbox items}}
