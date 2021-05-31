---
title: "Screw Accounting"
draft: false
---

## Background

I am a lazy person. Data-entry may have been in my job description, but I absolutely hate doing it. Why? It's so freaking repetitive and it's way too easy to mess up. When I switched to working from home, motivation to these boring repetitive tasks plummeted even more. And then there were even more time constraints after I decided to go back to study and I still had to work through a huge backlog of non-data-entry tasks.

For the sake of my mental health and to be more productive with my other more enjoyable (?) tasks, I decided to make this "Screw Accounting" project.

## Objectives

- Create a simplified, user-friendly way of automating particular data-entry tasks.
- Save time, save mental health, save my life.

## Approach

- **Language/Framework**: I was lookiing to do make this quickly - a simple app for a few automation tasks - using either of the languages I knew best at this time (PHP/Python). PHP has way too many dependencies. I didn't need CRUD either. So I went with Python and made a Flask app. I did do some blueprint organisation so it would be easier to extend than the standard "dump everything to a handy app.py file".
- **Site UI/UX**: Wasn't too important since it was just me using it. Go Bootstrap!
- **Deployment**: Hosted on the WSL Ubuntu installation on my work laptop. It's a virtual environment, which works pretty good since it's just me using it.

## Main Tasks

- Connect to XeroAPI to send/receive data.
    - Remarketing Invoices: Get invoice data from company's MSSQL database, create new invoice in XeroAPI and upload PDF attachment from company drive.
    - Creditor invoices: Read their PDFs, aggressively extract needed information, create invoice & attach file with Xero API.
    - Classify payroll into respective departments: Get payslips from payrun, lookup staff department, auto-dump this data to an Excel file, sum each department's cost then create manual journal.
- General data collection from XeroAPI
    - Extract raw data in formats that are unavailable directly from xero.com for further processing.
- General Excel spreadsheet creation & automation

## Results

I saved about 5 hours of work per week. My mental health improved! Hooray!

But then I spent the time saved on the other parts of my job, which is great for the company, but not so much for my mental health. Plus had more classes. sCry!