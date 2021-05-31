---
title: "Reporting Portal for Clients"
draft: false
---

## Background

Businesses like data. B2B businesses especially like to see the ins and outs of stock. And money doesn't always go from client > business > supplier while goods go the other way. It can be reversed.

A reporting portal for the client and supplier is always a good way to manage that complexity.

The original reporting portal was a bit clunky from old code and outdated designs.

## Objectives

- Replicate original portal
- Allow clients to access supplier portals and vice versa
- Allow use of dynamic graphs
- Improve design of original portal

## Main Tasks

- Replicate reports from original portal
- Allow clients to hop across multiple databases to access previously inaccessible reports
- Allow easy creation of new graphs for visual display of data
- Improve security & reduce bugs
- Improve UI/UX

## Approach

- **Language/Framework**: Originally I tried to use Wordpress. It didn't work too well thanks to the Microsoft SQL database (MSSQL), so I switched to Laravel. Since this was my first time using Laravel, I just installed the default TALL stack (Tailwind, AlpineJS, Livewire, Laravel) alongside Jetstream. For the graphs, I used ApexCharts.
- **UI/UX**: I ended up redesigning a few of the Jetstream components. A sidebar was added on the right, while the header was replaced with a job & item search (Livewire!). Apparently the search function was quite popular with our clients.
- **Deployment**: Hosted on the company’s IIS server, in a subfolder of the Wordpress installation. I had to rewrite the web.config file to get that working.
- **Notes**: Thanks to a lot of the default scaffolding, I didn't need to write much authentication stuff despite much of the existing database not fitting with "the Laravel way". 

## Results

The managing director and the retired owner of the company was very pleased with the work.