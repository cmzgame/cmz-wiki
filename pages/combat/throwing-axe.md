---
title: Throwing Axe
categories: [Items, Weapons]
aliases: [Throwing axes]
summary: A small throwing axe that does not throw yet; its card says "To come: thrown." Found only in the developer chest, and swung as fists in the meantime.
---

{{infobox-item throwing_axe}}

The **Throwing Axe** is a small tool held in either hand, drawn with its own art in the hand and in the bag, and stacking to {{n items.throwing_axe.stack}} in a cell. It does not throw yet. Its hover card says so in one line, "To come: thrown.", and names no button, because the game's design throws a pure throwable on the left button and the throw is not built. Until it is, an axe in the main hand has no weapon block of its own and swings as [[Fists]]. It is not the [[Hatchet]], which fells trees and is a real weapon.

It is found only in the [[Developer chest]] for now, {{n loot.dev_kit.fixed.17.count}} of them.

{{planned doc=24 note="Throwing it: the draw and release of the bow, the axe flying and landing."}}

{{item-sections throwing_axe}}

## Sources

<!-- sources at dc10b81 -->
- `data/items.json:14`: the axe: tool, either hand, stack, held and icon art, no `weapon` or `thrown` block, `toCome: "thrown"` (game #471)
- `src/item-info.js` `cardFor` (at dc10b81): a `toCome` field says "To come: ..." on the card
- `data/loot.json`: the dev chest's fixed contents

{{navbox weapons}}
