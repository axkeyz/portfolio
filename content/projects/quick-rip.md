---
title: "Quick Rip"
date: 2021-09-05T23:08:15+12:00
draft: false

description: A Chinese novel ripper tool that extracts novels from certain Chinese novel aggregators. Built with Python (sort of).
comments: This project has been privatised due to somewhat questionable copyright.

project_stats:
    - stack: Python
    - purpose: Personal
    - status: Completed
    - date: 2021

project_type: [personal]
tags: [Python, Personal, Completed]
---

## The purpose

My mother wanted a tool to read novels from her aggregator websites while offline. She isn't very good with desktop apps, and would prefer to use a website.

In other words, I needed to:
1. Create a web scraper (to scrape aggregator websites)
2. Turn the scraped content into offline website files (prettify the format)

## The tech

I picked __Python__ for the web scraping. I actually played around with Go too, but the scraped result had really awkward Chinese language encoding. I believe this was actually the fault of the website itself, which used a modified font.

The website was built with Hugo. The actual theme is pretty similar to the one I customised for [another project](https://github.com/axkeyz/pvctl-files).

## The learning

1. Getting Python to run binaries (.exe) in the background through code.
2. Get Python to replace text in the "template" file.

## The TODOs

Not at the moment. My mother never ended up using this. (We ended up getting her tablet with data.)

However, I could probably expand the number of websites that could extract novels from. If I wanted to take a step further, maybe I attempt to add machine learning so that the program could auto-detect where the content is in various novel aggregator sites.