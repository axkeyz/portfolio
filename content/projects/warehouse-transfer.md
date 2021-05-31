---
title: "Warehouse Transfer App"
draft: false
---

## Background

When items get transferred within the warehouse, their location records in the database are updated so people know where to find 'em. The full company app is simply too complicated to lug around the warehouse, so a slim version of it is used.

But even if it was slim? It was a pain to use. The slim version had sizes that transformed quite terribly onto tablets used for scanning. Buttons would disappear into the middle of nowhere. But you needed to click them to be “in” a location and see its items. Stuff was scrollable wasn’t really. It was also kinda slow and the last item would sometimes disappear into development hell, so you had to scan it twice.

For the sake of my colleagues mental health (?), I was told to build a light web app to fit this purpose.

## Objectives

### My supervisor’s objectives 

- Optimise for mobile & other screens

### My objectives 

- Laziness is king! I don't wanna click a damn button! People must be just like me! (Probably not true)
- Reduce page refreshes (they clunky ugly)
- Look kinda good (I think my original designs were better but whatever my supervisor says)
- Ideally make it faster?

## Main Tasks

- Input a warehouse location + bring up items in location from database
- Have an input field to grab all scanned item codes
- Retrieve the info of the scanned item codes from database and make it appear inside the warehouse location
- Click a button to confirm transfer
- Message to confirm transfer
- Allow bulk transfer of items from one location to another location.

## Approach

- **Language/Framework**: The go-to language in this company remains to be PHP. The company wanted a lightweight app, so vanilla PHP was used alongside a simple .haccess-based router. The app uses the full version of jQuery/AJAX (mostly AJAX) which was partly installed alongside Bootstrap.
- **UI/UX**: The original app had a number of button clicks, after every time you filled in an input field. This one uses AJAX to fetch data without getting those and needing to tap so many buttons. Certain fields would only appear after others were filled as required by my supervisor. Made it so form elements so pressing enter/return in one input field would act as a tab to the next input field. Elements were mostly styled with the CDN version of bootstrap.
- **Deployment**: Hosted on the company’s Ubuntu server that was apparently originally for the company’s tech services’ internal help and documentation. I renamed the project folder /dg-warehouse-scan to /warehouse to make things easier on typing. Fortunately all this required was a quick adaptation of the .htaccess and the config files.
- **Notes**: Security was not an important priority as it was to be hosted on an internal website, but some fixes are still in place. Warnings were added to prevent major input-related issues, but they do not catch all. Also, the config details are in a folder below the served folder.

## Results

Definitely more optimised for smaller screens. It's also faster than the original, at least according to my supervisor.