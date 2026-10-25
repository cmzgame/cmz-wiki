---
title: Lead
categories: [Items, Tools]
aliases: [Leads, Halter]
summary: A halter and rope made at the workbench from cloth: carried, it leads one tame animal at your pace; let go, the animal stays where it stands.
---

{{infobox-item lead}}

A **lead** is a halter and rope, made at the [[Workbench]] from cloth ([[Linen cloth]] or a [[Rag]]) with a [[Dirk]] on you. Carried anywhere, in a hand, on the belt, or in the bag, it lets you lead a tame animal: a hen, a cow, a pig, or a sheep. Its hover card says: "Leads a tame animal; let go, it stays where it stands." Wild game will not be led.

## Using it

Open a tame animal's menu and choose **Lead the cow** (named for the animal); without a lead it reads "(you need a lead)". One lead leads one animal: while it is on an animal, a second one's entry reads "(your lead is in use)", and a second lead carried leads a second animal. The animal follows at your pace, walking or sprinting, and stands when it is close. Choose **Let go of the cow** to let it go: where it stands becomes its home, so an animal let go in a fenced yard with its gates shut stays there. A lead that comes off on its own (the animal has no way to you, or you are gone) leaves the animal its old home, and it walks back to it. The whole rule is on [[Keeping#The lead|Keeping]].

It is drawn in the hand by a placeholder shape; its art and its portrait for the character screen are still to be drawn.

{{item-sections lead}}

## With friends

A guest leads and lets go through the same menu entries, sent to the host by the animal's id; who leads each animal is sent to every player. A guest who leaves the world loses the lead within a second.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:64`: the lead: either hand, its verb `lead`, held as a placeholder shape
- `data/recipes.json:348-364`: the lead from two cloth at the workbench, with `cut`, a dirk, carried
- `src/item-info.js:231`: its card's line
- `src/entities/animal.js:466-511`, `src/interact.js:1971-1985`: Lead and Let go, the greyed reasons, one lead an animal
- `docs/45-animals.md:54`: the lead's portrait owed

{{navbox items}}
