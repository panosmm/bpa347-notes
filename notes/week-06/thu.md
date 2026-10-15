# Week 6 · Thursday: Put Your Trip App Online (15/10)

Your trip app goes on the web, so that you can use it on your phone during the trip and share it with the people you travel with.

## Before class

- You need the `bpa347-week6` folder from Monday.
- You need the [homework](homework.md) done: a GitHub and a Vercel account, Node.js and GitHub CLI installed.

## In class

1. Open a terminal in the `bpa347-week6` folder and start the agent. Switch to the strongest model: type `/model` and choose **Opus** (Codex: **Sol**). It gets these steps right more often.
2. Let the agent use your GitHub and Vercel accounts from this laptop, so that it can put your app online for you. You sign in once:
   ```prompt
   Sign me in to GitHub with GitHub CLI, and to Vercel with Vercel CLI.
   ```
   Each sign-in opens a page in your browser. On Vercel, choose **Continue with GitHub**.
3. Put a copy of your project on GitHub, and let Vercel run it from there at a web address, so that you can open it on your phone during the trip:
   ```prompt
   Push this folder to a new private GitHub repository, then publish it with Vercel CLI so that every push to GitHub publishes a new version.
   ```
   Check it where you will use it: open the web address Vercel gives you on your phone.
4. Make the app work on a phone:
   ```prompt
   Make this app easy to use on a phone: today's plan first, and where I am on the map.
   ```
   Check it in your browser, then publish the new version:
   ```prompt
   Save this version with Git, with the message "[what changed, in one line]", and push it.
   ```
   Open the web address on your phone again a minute later: Vercel has published the new version.
5. Let the people you travel with use the app with you, and save what they do so that everyone sees it:
   ```prompt
   Let anyone who opens the app mark a place as visited, with one to five stars, or as skipped, and add places and comments, all with their name, for everyone to see. Keep it in a database that I add to this project on Vercel. Guide me through every step I have to do myself, one at a time.
   ```
   When it works, publish it the same way as in step 4.
6. Check that it works with someone else: send the link to the person next to you. From their phone, they mark a place as visited and add a comment; you should see both on yours. In Vercel, open the database and find them there.

## 1. From your laptop to the web

| Step | Where | What happens |
|---|---|---|
| Commit | Git, on your laptop | a new version of the folder |
| Push | GitHub, online | a copy of your versions |
| Deploy | Vercel, online | takes the latest version from GitHub and runs it at a web address |

- After the first time, every push publishes a new version by itself.

## 2. Tools in the terminal

- A CLI is a program you use by typing commands in the terminal. GitHub CLI and Vercel CLI work with your accounts on those services.
- You sign in once on each laptop; the CLI remembers it.
- The agent types the commands for you. Many services have a CLI, so the agent can work with them the same way.

## 3. Front end, back end, database

- The front end runs in each visitor's browser. Anyone can read its code.
- The back end runs on Vercel's computers. It talks to the database, so its key stays on Vercel, in the project's settings, never in the front end.
- There are no logins: the web address works like a password. Anyone who has it can mark places and add comments, under any name.
- That is fine for a trip plan that stays online for a few days. Personal or company data needs logins.

> [!IMPORTANT]
> **KEY POINT:** A key never goes into the front end. The back end holds it, on the service's computers.

## Terms

- **CLI**: a program you use by typing commands in the terminal (command-line interface).
- **Push**: send your Git versions to GitHub.
- **Deploy**: publish an app at a web address.
- **Front end**: the part of an app that runs in the browser.
- **Back end**: the part of an app that runs on the service's computers.
- **Database**: where an app keeps data that everyone shares.

## Homework

Before Monday 19 October: hand in the web address of your trip app. See [Week 7 homework](https://bpa347-notes.vercel.app/week-07/homework/).
