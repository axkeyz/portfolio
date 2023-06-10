---
title: "Automate Accounting"
date: 2022-09-05T23:09:14+12:00
draft: false

description: "A tool I built for work in my spare time, using Flask (Python). This tool can process payroll manual journals and create invoices through Xero's API."

status: completed
project_type: [personal, work]
tags: [Personal, Work, Python, Flask, Solo]

project_stats:
    - stack: Python, Flask, Bootstrap
    - purpose: Work & personal
    - status: Completed (for now)
    - date: 2021-2022

---

*This project has been privatised due to sensitivity of DG's accounts*

## The purpose

I was hired to do accounts assistance work, which mainly involved data-entry and more data-entry. I hated it. It was time-consuming and mind-numbingly boring. So I wrote this to automate some accounting jobs.

This app had to:
- Add Xero IDs to each customer in the DG database
- Process invoices in the DG database and add the data to Xero (through their API). It also needed to attach the invoice PDF.
- Process manual journals that would reallocate wages & salaries by department.
- Extract statistics on staff & other expenses.

## The tech

I picked __Flask (Python)__. I think Python remains my preferred tool when it comes automation tasks because their Excel packages are much better (Go excelize doesn't support pivot tables as well, for example). Also, Xero has some great support for Python, so there's that.

Frontend was lazily built with __Bootstrap__.

## The learning

- Reading Xero's documentation
- Flask infrastructure, mounting apps & sessions, blueprints
- SQLAlchemy ORM

##  The TODOs

This project isn't a high priority since it mostly does what I urgently need it to do. However, given time, I'd probably do the following:
- Build a better frontend
- Write some explanations on what each page does