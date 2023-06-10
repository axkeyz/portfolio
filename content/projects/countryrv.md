---
title: "Country RV"
date: 2023-06-10T22:20:07+12:00
draft: false

description: A website rebuild for Country RV.

showcase: false

project_stats:
    - link: "[countryrv.co.nz](https://www.countryrv.co.nz/)"
    - stack: PHP, SASS
    - purpose: Work
    - status: Completed
    - date: 2023

project_type: [work]
---
## The story

This is a website rebuild for Country RV. While I was not the one who built most of the site, I did many layout fixes and integrations to get the SOAP cron up working correctly (so that the caravans & motorhomes would be pulled correctly from Trademe).

The long descriptions pulled via SOAP was also not suitable for the brief description sections - formatted in a manner that would sometimes cause the text to cut off incorrectly. I solved this issue by approximating pixel width, and divided the descriptions into the "brief" and "long" version during the cron process (before database save).

The SOAP cron had to be reintegrated into a new(er) version of the inhouse CMS, so I did some digging through to find out how the inhouse CMS created logs, reports and other custom actions.

Some other things I had to fix was that generated PDFs would sometimes end up looking blank. I determined that this was caused by a page overflow and fixed this by shortening the PDF content.

This was probably one of the more interesting projects I've done for Website Angels. While I agree that the inhouse CMS is powerful and quite flexible in certain ways, I learned that it was (and still is) full of technical debt.