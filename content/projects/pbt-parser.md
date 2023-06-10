---
title: "PBT Parser"
date: 2023-01-05T22:38:13+12:00
draft: false

description: "A tool I built for work in my spare time, to parse the 8-10 PBT spreadsheets I have to process every month end. In Go."

project_stats:
    - github: "[axkeyz/dg-pbt-parser](https://github.com/axkeyz/dg-pbt-parser)"
    - stack: Go, SQLite
    - purpose: Work & personal
    - status: Completed
    - date: 2021

status: completed
project_type: [personal, work]
---

## The purpose

PBT spreadsheets is something I have to process as part of the accounts assistant job. I have to parse around 8-12 invoice spreadsheets by the end of the month, and another "info" spreadsheet. The final output is a formatted spreadsheet that needs information from all of the above spreadsheets and occasionally needed information from the previous month as well. This added up to...15 spreadsheets on bad months. It was a painful task.

I originally wrote some automated column shuffling and data manipulation in the [Automate Accounting](/projects/automate-accounting/). However, it didn't feel too good processing multiple spreadsheets. Hence, I decided to write this tool.

This tool had to:
- Accurately synthesise info from multiple spreadsheets
- Adapt itself for different PBT invoice accounts (their respective spreadsheets have different formats)
- Extract info from previous months if necessary
- Create a monthly export in the right format

## The tech

Go with SQLite.

## The learning

- SQLite is really barebones. Go doesn't seem to support some of the functions either. However, it's lightweight and definitely useable for a small project like this one.
- Not having a recommended structure (MVC) or object-orientated programming principles can be both a plus (more flexibiity and easier to make small apps) and a minus (structure is difficult to maintain).

##  The TODOs

- Could be refactored a bit better
- Write more tests
- Possibly add a nice looking UI.