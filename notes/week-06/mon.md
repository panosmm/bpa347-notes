# Week 6 · Monday: Turn Your Trip into an App (12/10)

Your agent turns your Rome report into a small travel app for your trip: a map with every place, the days, photos and costs.

## Before class

You need `report2.md` in the `bpa347-week5` folder on your Desktop.

## In class

1. Make a folder on the Desktop named `bpa347-week6`, open a terminal there, start the agent and paste:
   ```prompt
   Copy report2.md from the bpa347-week5 folder on my Desktop into this folder, and start Git here.
   ```
2. Build the app:
   ```prompt
   Build a web app for the trip in report2.md that makes us want to go: a 3D map of Rome, tilted to show the buildings, with a pin for every place in the plan; a tab for each day with its times, where clicking a place flies the map to it; a photo of each place, from anywhere on the web; the costs against the budget; and a countdown to the flight. Use OpenFreeMap for the map. Make it look like a page from a travel magazine. Keep a list of where every photo comes from. Then open the app in my browser.
   ```
   We wrote this prompt by discussing the app with Claude first. For an important prompt, do the same: ask an AI to help you write it.
3. Click through the whole app. Is every pin in the right place? Does every photo show the place it names? Ask the agent for specific changes, for example "Start the map zoomed in on the centre of Rome", then check again.
4. After each change that works, save a version:
   ```prompt
   Save this version with Git, with the message "[what changed, in one line]".
   ```
5. Make it yours: ask for something the report does not have, for example the weather in Rome in December or a packing list.

## 1. An app in the browser

- A file is content: you read it. An app is a tool: you use it with your own values.
- A simple web app is a few text files in a folder. Your browser opens them; you install nothing.

| Part | What it does |
|---|---|
| HTML | what is on the page: text, photos, buttons |
| CSS | how it looks: colours, sizes, layout |
| JavaScript | what happens when you click, and the map |

- The app can also show data from other services, for example maps from OpenStreetMap, a free map of the world.
- Photos from anywhere on the web are fine in an app for yourself and your friends. In an app for an employer, or one you sell, use only photos you have the right to use.
- On Thursday the app goes online, so you can open it on your phone and share it.

> [!IMPORTANT]
> **KEY POINT:** Check every pin and every photo yourself. The agent can put a place on the wrong street or pick the wrong picture, and not know it.

## Terms

- **Web app**: a page that does something when you use it, not only shows text.
- **JavaScript**: the language that browsers run.

## Homework

Before Thursday 15 October: create a GitHub account and a Vercel account. See [homework](homework.md).
