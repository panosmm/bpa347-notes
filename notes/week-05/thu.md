# Week 5 · Thursday: Online AI Services, and Versions with Git (8/10)

Your agent uses online AI services to make a short web page about the trip, with pictures, a voice and music. Then you keep versions of Monday's slides with Git.

## Before class

You need the `bpa347-week5` folder from Monday, and Git installed (the [Week 5 homework](homework.md)).

## In class

### Part 1: Pictures, voice and music from online services

1. On the [homework submission page](https://bpa347-submit.vercel.app/), type your student ID and click **Download your OpenRouter key**. Three students share each key, with up to 4.80 dollars in total. Open `openrouter.env` from your Downloads folder with Notepad (Mac: TextEdit) to see the key, then close it.

   If you have your own OpenRouter key, or want to make one, use it instead: see **Your own OpenRouter key** at the bottom of this page.
2. Open a terminal in the `bpa347-week5` folder, start the agent and paste:
   ```prompt
   Move openrouter.env from my Downloads folder into this folder, rename it .env and add it to .gitignore.
   ```
3. One call to see how it works:
   ```prompt
   Use the OpenRouter key in .env to make one small cartoon picture of the two friends from report2.md in Rome in December. Save it as test.png and open it, then show me the request you sent and what it cost.
   ```
4. Optional: for the rest of today, type `/model` and choose **Opus** (Codex: **Sol**). It makes better pages, but uses up your plan faster.

   Choose one kind and one look, in any combination, or use your own ideas:

   | Kind | Look |
   |---|---|
   | a TV ad that sells the trip | a whimsical, hand-drawn collage, animated |
   | a news report: two friends plan Rome for 600 euros each | cartoon |
   | a podcast in which two hosts chat about the trip | watercolour |
   | a morning briefing for day 1: what to do, where, and what it costs | an old travel poster |
   | a movie trailer for the trip, with dramatic music | a comic strip |

   Then:
   ```prompt
   Use the OpenRouter API to make [the kind you chose], about 30 seconds long, in the look of [the look you chose], for the two friends in report2.md, with pictures, a voice-over in [English or Greek] and music, on one web page that opens with a double-click. Animate the pictures with JavaScript; do not use video models. Spend at most 1.5 dollars, and write every call and its cost in calls.csv.
   ```
   English voices sound better for now. For Greek, ask for Kore, a Google voice. ElevenLabs has better Greek voices, but needs its own key.
5. Open the page, look and listen. Ask the agent for specific fixes, then check again.
6. Make it yours. For example, put a photo of you and a friend in the folder and ask the agent to turn you into the two characters, or ask for subtitles in the other language. Use photos only of people who agree.
7. Check what it cost:
   ```prompt
   How much did the calls in calls.csv cost in total?
   ```
8. Optional, on a fast laptop:
   ```prompt
   Turn the page into an MP4 video with ffmpeg, so that I can share it online.
   ```
   ffmpeg is a free video program; the agent will help you install it.

### Part 2: Versions with Git

9. In the same folder, paste:
   ```prompt
   Start Git in this folder. Git should keep only make_slides.py, because the script makes the slides. Save this version with the message "First slides".
   ```
   If the agent asks for your name and email, give them: Git writes them on every version.
10. Ask the agent for one or two changes to the slides, open the file and check. Then:
    ```prompt
    Save this version with Git, with the message "[what you changed, in one line]". Then tell me what changed between the two versions.
    ```
11. Choose one change you do not want, and ask:
    ```prompt
    Undo the change to [the part you do not want], run the script again and save the result as a new version, with a message that says what was undone. Then show me the history.
    ```
    The undo is a new version; nothing was deleted.

> [!IMPORTANT]
> **KEY POINT:** From now on, start Git in every folder where you work with your agent. Let Git keep the scripts, not the PowerPoint or Word files they make: those are stored again in full at every version.

## 1. Online services and keys

| Part of a call | What it is |
|---|---|
| Address | where the request goes |
| Key | who pays: a password for a paid account |
| Request | what you ask, and which model |
| Response | what comes back: text, a picture or sound |
| Cost | paid per call, or per piece of text in and out |

- Your subscription pays for the agent; the key pays for each call your scripts make, until it reaches its spending limit.
- Anyone who has the key can spend from it. Keep it in `.env`: not in a script, not in Git, not in a chat.

> [!IMPORTANT]
> **KEY POINT:** A service is an address, a key, a request and a response, with a price on every call.

## 2. Versions with Git

| You ask | The agent runs | What happens |
|---|---|---|
| Save this version | `git commit` | the script is saved as a new version, with a message |
| What changed? | `git diff` | the lines added and removed between two versions |
| Show the history | `git log` | the versions, newest first |
| Undo a change | `git revert` | a new version that undoes it; nothing is deleted |

- A commit message says in one line what changed, for example "Slide 3: backup dates in bold". "Update" does not help you find a version later.
- Git keeps the history in a hidden folder, `.git`, on your laptop. It needs no account and no internet.

## Terms

- **API**: the way a program sends a request to a service and gets a response.
- **API key**: a secret that tells the service who pays.
- **`.env`**: a text file with one secret per line, `NAME=value`. Scripts read it; Git does not keep it.
- **Git**: a program that keeps the versions of the files in a folder.
- **Commit**: one saved version, with a message.

## Homework

Before Thursday 15 October: create a GitHub account and a Vercel account. See [Week 6 homework](https://bpa347-notes.vercel.app/week-06/homework/).

## Your own OpenRouter key

For your own projects, or if you prefer not to share a key in class:

1. Go to [openrouter.ai](https://openrouter.ai/) and sign up.
2. Under **Credits**, add credit with a card. A few dollars is enough to start.
3. Under **Keys**, create a key and set a credit limit. Copy the key: OpenRouter shows it only once.
4. Open Notepad (Mac: TextEdit, then **Format → Make Plain Text**). Type `OPENROUTER_API_KEY=` and paste the key right after it, with no space. Save the file as `openrouter.env` in your Downloads folder (Windows: choose **All files** as the type). Then continue from step 2.
