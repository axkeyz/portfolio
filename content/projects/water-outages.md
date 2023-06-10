---
title: "Water Outage API"
date: 2023-01-04T15:51:46+12:00
draft: false

description: "A silly hobby project to prove that my region gets more outages than other regions of Auckland."
comments: The API was more or less completed, but this project has been discontinued due to moving away from the suburb and (free) server crashing issues.

tags: ["Postgres", "Go", "Vue", "Hugo", "Completed", "Personal", "Solo"]
project_stats:
    - github: "[axkeyz/water-api](https://github.com/axkeyz/water-api)"
    - stack: Go, SQLite, Postgres (PostGIS), Docker
    - purpose: Personal
    - status: Completed/Discontinued
    - date: 2022

status: completed
project_type: [personal]
---

## The purpose

This is a silly project that hopes to prove some regions in Auckland get more water outages than others (I swear I don't live that rurally!)

- Periodically collect data from the Watercare Outages API
- Create an API of all historical records (since data collection)
- Display it in a pretty manner
- Prove that my region gets more water outages than others

## The challenges

I actually ran into quite a lot of issues. The source data was formatted in funky ways that my tests would not cover (because I assumed it would be more consistent...). The free server I was using also crashed and had vulnerability issues quite often.

## The tech

Go, Postgres+PostGIS for the backend. I always wanted to write a backend with Vue, but just never got motivated to put the work in.

## The learning

- Postgres with PostGIS
- Docker deployment (multiple containers on one server, pointing to different DNS)

## The TODOs

- API could be refactored better
- More tests could be added
- Finish the rest of the dashboard