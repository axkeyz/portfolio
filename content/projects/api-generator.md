---
title: "API Generator"
date: 2022-09-05T23:07:21+12:00
draft: false

description: A planned Laravel project that can generate randomised API data for testing based off a given JSON template and fake data using faker.js.

status: planned
project_type: [personal]
tags: [Laravel, Personal, Solo, Planned]
---

*GitHub Project Link - https://github.com/axkeyz/api-generator*

## PURPOSE

When I was making my [Water API & Dashboard](/water-outages), I was using [MockAPI](https://mockapi.io/), but the lack of documentation and implementation of faker.js made the API generator a little hard to use.

So this will be more or less a clone project, with the following tasks:
1. Create a backend that can authenticate users, verify & store API templates
2. Create a frontend for the users
3. Possibly deploy the backend and frontend together in a Docker container
4. Create related documentation

## TECH

I picked __Laravel (PHP)__ because I'm pretty familiar with it but don't have anything that I can show (all private code).

I'm thinking of using React or Vue with the project. Probably Vue as that is more commonly used with Laravel, but I'd learn more with React I guess. Anyway, the project is WIP.

## TODOS

I haven't gotten very far at the moment, so there's a lot to do. Here's a rough list of the things I need to do.

- Authentication: Users can create accounts using a variety of sources
- Faker.js/php integration: Test API data can be generated with faker.js/php based off the given JSON template
- User-defined API generator: Users can create their own JSON templates
- Create a frontend with either React or Vue
- Related documentation
- Docker deployment