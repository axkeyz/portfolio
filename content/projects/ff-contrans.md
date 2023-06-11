---
title: "FF Contrans"
date: 2023-06-11T18:22:52+12:00
draft: false

description: A Firefox extension to transfer content.
comments: A Firefox extension to transfer content.

showcase: false

project_stats:
    - github: "[axkeyz/ff-contrans](https://github.com/axkeyz/ff-contrans)"
    - stack: JS (vanilla)
    - purpose: Work & personal
    - status: Completed
    - date: 2023

project_type: [personal, work]
---
## The background

A Firefox extension to transfer content for work. When I started, they put me and the other new person on transferring content (why, what I agree). I was not given access to the database, not the API and no access to the CSV imports. The idea was, to "get familiar" with the inhouse CMS.

So I wrote this extension to transfer data on that weird case where you need a scraper but don't quite have the access to output the scraped data to where it belongs except for a form access. Definitely not a common case, I agree.

The name FF Contrans is short for Firefox Content Transfer. Not good at names lol.

Technically it works with Chrome too since I didn't use any browser-specific APIs. Not tested though.

## The tech

Javascript! I didn't expect extensions to use pure Javascript.

## The learning

I actually learned a lot for this quick project.
- Like I said, I didn't expect extensions to use Javascript but thought it would use a rare language. I wanted to use AlpineJS - but inline JS is forbidden due to security (well, fine). It was also a bit tricky to import external scripts into the CDN. 
- Many storage types are site specific, and cannot be used across tabs. This extension uses the storage.sync API to store info and share it between tabs. However, there are size limits on the data that can be stored, which is one of the limitations of this extension.
- I found the documentation a bit too sparse, but there were a lot of sample projects to piece something decent together.
- Lots of CORS issues (sometimes).

## Next time

I probably didn't follow best practices since it was a relatively quick project for me. I did come across some interesting stuff/alternatives/ways to make this better:
- There is are better starters for it, e.g. [this one](https://github.com/abhijithvijayan/web-extension-starter), including one with React.
- One of the ways to get around the limits in the storage.sync API is to use the PostMessage API instead.
