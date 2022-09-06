---
title: "DG Client App"
date: 2022-09-05T22:12:03+12:00
draft: false

tags: [Work, Laravel, AlpineJS, TailwindCSS, Team]

description: A project that completely upgrades the existing portal with reactive Javascript and modern design practices.

status: completed
project_type: [Work]
---

*This project has been privatised due to sensitivity of DG's accounts*

## PURPOSE

Divers wanted to modernize the existing client portal in terms of appearance, ease of use and function.

This app had to:
- Be compatible with MSSQL and be able to use multiple databases
- Completely clone old functionality
- Create a dashboard containing reactive graphs
- Be easy / fast to build (as I was the only one working on it for the first several months)

## TECH

I picked __Laravel (PHP)__. At first, my manager asked me to investigate whether Wordpress could do the job. However, I quickly realised that connecting to our MSSQL database was not the best idea for security reasons and it wasn't very common either. We ended up using Laravel out of the other PHP options due to how great the documentation is.

We went with the __TALL__ (Tailwind, Alpine, Livewire, Laravel) stack, because it was easier to get started out of the box. We're thinking of switching to a fully reactive app, most likely with React.

## CONTRIBUTIONS

- Investigated Wordpress and PHP frameworks
- Cloned the functionality (reports) of the existing client portal. 
    - Used ORM to scaffold reports & allow filtering by column
    - Built report exports to CSV & Excel
    - Used Storage class to retrieve PDF files from the network drive
- Designed the main layout
- Added a reactive search bar to search receipts, stock etc
- Added reactive, pseudo-shop like procurement of goods
- Added live charts toggleable by period length
- Created a user panel to change live charts & other components on the front dashboard
- Fixed various bugs as requested
- Initialised an admin view
- Initialised the external API
- Convinced the company to use Git for the project

## LEARNING

1. Creating Laravel projects from an existing database. For example, never use php artisan:migrate fresh/refresh! Our database columns and such wasn't really created "the Laravel way" too, so I had some fun with that.
2. The MVC structure is pretty nice.
3. I got pretty good at AlpineJS. It's much more lightweight than Vue CDN but has similar reactivity, which is pretty cool. Vue CDN however, offers a more structured main JS file.
4. Tailwind has an interesting design philosophy and has great documentation. Sometimes the mobile / responsive classes feel a little bloated too. However, it is definitely very useful and sometimes my vanilla CSS classes now look a bit like Tailwind classes. Oops...
5. Using ApexCharts with Livewire. There wasn't much documentation or similar attempts on this, so there was a lot of trial and error involved.

## TODOS

The company didn't really consider using an API when we built this. We have slowly been expanding the API and may convert the app to React one day.