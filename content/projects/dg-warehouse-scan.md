---
title: "DG Warehouse Scan App"
date: 2021-09-05T23:19:21+12:00
draft: false

description: One of the first things I built for work in vanilla PHP and jQuery + Bootstrap. Not too secure, nowadays I would've used Symfony routing & ORM, but well, it works.
comments: One of the first things I built for work in vanilla PHP, jQuery and Bootstrap. Not too secure, I'd probably replace with Symfony ORM and routing at least.

status: completed
project_type: [work]
tags: [PHP, jQuery, Bootstrap, Work, Solo]

project_stats:
    - github: "[axkeyz/dg-warehouse-scan](https://github.com/axkeyz/dg-warehouse-scan)"
    - stack: PHP (vanilla), jQuery, Bootstrap
    - purpose: Work
    - status: Completed
    - date: 2021
---

## The purpose

This web app was made to transfer items more easily from one warehouse allocation to another. The original app to do this task wasn't very responsive to different screen sizes - which did not help as most items would be scanned into a mobile tablet.

In other words:
- Responsive to all screen sizes
- Simplify the usage experience
- Internal tool, so build it fast and appearance not too important

## The tech

I built it with __vanilla PHP + jQuery__, because they needed it fast and appearance wasn't too important. I had some fun using jQuery to reduce the number of clicks for a smoother user experience.

## The learning

1. Routing with vanilla PHP
2. Apache rewrite /public folder to /

##  The TODOs

The company doesn't have much interest in getting me to extend this app. However, I would probably do the following one day:
- Not too secure. I'd probably at least replace the classes I wrote with Symfony routing and ORM.
- I'd also like to generalise this tool, as it's still quite specific to Divers Group.