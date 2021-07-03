---
title: "Porting my online CV from HTML to PDF"
date: 2021-07-03T14:11:38+12:00
draft: false
---

I have an online CV that can be found on this site, at [this link](/cv).

Looks pretty good right? The HTML behind it was pretty easy. I'll admit that it's pretty inspired by other HTML templates out there.

I decided that I wanted to keep my custom text (like the skills & projects) away from my template code. This is so that I can easily add to the content if I say, change a job, without messing out the layout. Or, if I wanted to change the layout of my CV, I wouldn't have to worry about accidentally editing my content.

I made a content folder in my Hugo project of this site, made a bunch of content, and had the template pick up that content and display a page with a shiny CV for everyone to see.

But then, I ran into a problem. The printing view of the CV looked a bit, well, unappealing.

My first thought was to use JS to hijack Ctrl+P (and Cmd+P too, I suppose). Although I could make the console print something when those keys were pressed, I couldn't stop the printing process.

It looked like jQuery might be solve this problem, but I didn't want to use jQuery for this particular project. So, nope.

My second thought was to use @media print, a CSS-based solution. So I hopped to Tailwind CSS, and enabled to print options. The CSS generated, but it had no effect on the printer. Too lazy to write CSS if Tailwind CSS wouldn't do the trick. Disabled print CSS. Next.

I tried looking into various printing JS libaries. Print.js looked promising but needed an existing pdf. Paged.js looked promising too, but the docs were a bit hard to read. A lot of the other ones need npm or some sort of backend to generate the pdf itself, then have a physical link to the pdf, which didn't help much for a static Hugo site.

I ended up stumbling on pdfmake. So far, not too bad. The layout itself is templated with JS. It's a bit difficult to get it to look exactly the way I want it to, but at least a PDF is generated on the fly, pulling whatever latest data is in my Hugo project.

The downside is that Ctrl/Cmd+P doesn't print the pretty PDF. I can add a button to either download or print a decent looking PDF version at least.