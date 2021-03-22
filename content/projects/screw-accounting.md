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

- **Language/Framework**: Xero has provided API-scaffolding with C#, Java, NodeJS, PHP, Python and Ruby, of which I'm most familiar with PHP & Python (based off Flask). I was looking for a simple app only to do a few automation tasks, PHP has way too many dependencies. I didn't need CRUD either. Flask is a microframework that seemed just perfect for my use case.
- **Site UI/UX**: Wasn't too important since it was just me using it. Did some basic styling with Bootstrap.
- **Deployment**: Hosted on the WSL Ubuntu installation on my work laptop. It's a virtual environment, which works pretty good since it's just me using it.

## Main Tasks

- Upload & read PDF invoices.
- Connect to the company MSSQL database.
- Connect to XeroAPI to send/receive data.

## Results

I saved about 5 hours of work per week. My mental health improved! Hooray!

But then I spent the time saved on the other parts of my job, which is great for the company, but not so much for my mental health. Cry!