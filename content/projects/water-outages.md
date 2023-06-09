---
title: "Water Outage API & Dashboard"
date: 2023-01-04T15:51:46+12:00
draft: false

description: "A silly hobby project to prove that my region gets more outages than other regions of Auckland. Built with Go and had some fun combining Hugo with Vue (CDN)."

tags: ["Postgres", "Go", "Vue", "Hugo", "Completed", "Personal", "Solo"]
status: completed
project_type: [personal]
---

*The API has largely been completed, though the dashboard is still mostly WIP.*

*GitHub Project Link - https://github.com/axkeyz/water-api  
GitHub Project Link - https://github.com/axkeyz/water-dashboard*

## PURPOSE

This is a silly project that hopes to prove some regions in Auckland get more water outages than others (I swear I don't live that rurally!)

- Periodically collect data from the Watercare Outages API
- Create an API of all historical records (since data collection)
- Display it in a pretty manner
- Prove that my region gets more water outages than others

## TECH

Go, Postgres+PostGIS for the backend. Frontend is currently a Hugo + Vue (CDN) for lols, but I might just change it to a proper SPA with Vue.

## LEARNING

- Postgres with PostGIS
- Docker deployment (multiple containers on one server, pointing to different DNS)

## TODOS

- API could be refactored better
- More tests could be added
- Finish the rest of the dashboard