# Week 6 · Homework

Do all three parts before Thursday 15 October.

**Hand in:** your GitHub username in a file named `github.txt`, by Thursday 15 October, 09:00 (Part 2).

## Part 1: GitHub and Vercel accounts

1. Create a GitHub account at [github.com](https://github.com): click **Sign up**, use an email you read, and type the code GitHub sends you. Choose your username with care: it appears in the web addresses of your projects.
2. Create a Vercel account at [vercel.com](https://vercel.com): click **Sign Up**, choose **Hobby**, then **Continue with GitHub**, and allow Vercel to use your GitHub account.
3. Check that it works: sign out of Vercel, then sign in again with **Continue with GitHub**.

## Part 2: Hand in your GitHub username

1. Open a terminal in the `bpa347-week6` folder, start the agent and paste:
   ```prompt
   Make a file named github.txt that contains only my GitHub username: [your username]
   ```
2. Open the [homework submission page](https://bpa347-submit.vercel.app/) and type your student ID, which starts with UC. Under `github.txt`, choose the file `github.txt` from your `bpa347-week6` folder and click **Submit**. You can submit again; the latest file counts.

## Part 3: Install Node.js and GitHub CLI

On Thursday your app goes on the web. GitHub CLI puts your project on GitHub, where other services can use it. Vercel runs your app on the web from GitHub, and Node.js lets your laptop control Vercel.

> [!IMPORTANT]
> **KEY POINT:** Choose **one** way, A **or** B. Do not do both.

### Way A: ask your agent

1. Open a terminal in the `bpa347-week6` folder, start the agent and paste:
   ```prompt
   Install Node.js and GitHub CLI on this computer, using the installers from their own websites, so that they work in every new terminal window. Tell me when I need to click something or type my password.
   ```

### Way B: paste a command yourself

We asked Claude for a command to paste into the terminal, and got the ones below.

> [!WARNING]
> **PLEASE NOTE:** Paste the command into PowerShell (Windows) or Terminal (Mac) itself, not into Claude Code or Codex.

1. Windows: open PowerShell and paste the command below. When Windows asks whether an installer may make changes to your device, click **Yes** (twice).
   ```bash
   winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements; winget install --id GitHub.cli -e --accept-source-agreements --accept-package-agreements
   ```
   Mac: open Terminal and paste the command below. Two installers open, one after the other: in each, click **Continue** until **Install**, type your Mac password when it asks, then click **Close**.
   ```bash
   curl -fsSL -o /tmp/node.pkg "https://nodejs.org/dist/latest-v24.x/$(curl -fsSL https://nodejs.org/dist/latest-v24.x/ | grep -o 'node-v[0-9.]*\.pkg' | head -1)" && curl -fsSL -o /tmp/gh.pkg "$(curl -fsSL https://api.github.com/repos/cli/cli/releases/latest | grep -o 'https://[^"]*macOS_universal\.pkg' | head -1)" && open -W /tmp/node.pkg && open /tmp/gh.pkg
   ```

### Then, everyone: check

1. Close every terminal window. Open a terminal in the `bpa347-week6` folder, start the agent and paste:
   ```prompt
   Check whether Node.js and GitHub CLI are installed on this computer and tell me their versions.
   ```
