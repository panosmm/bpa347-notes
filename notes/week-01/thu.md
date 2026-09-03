# Week 1 · Thursday: Your first agent

Install the tools, then put an agent to work on your laptop and on a data file.

## Before class

- Claude Pro active on your account (or ChatGPT Plus, if you are using Codex)
- Python installed (steps in the homework)
- Windows only: the Git for Windows installer downloaded, not yet run (link in the homework)
- Laptop charged

## Big picture

- Installing the tools
- The course kit
- What an agent does that a chat window cannot
- The permission prompt
- Your laptop, seen by the agent
- Your first build: a dashboard

## 1. Installing the tools

- Git for Windows: Claude Code needs it; you will never open it yourself.
- Python: installed at home. The agent writes and runs small programs with it; you never open it either.

> [!WARNING]
> **PLEASE NOTE:** Windows: there are two versions of PowerShell. Use the one called "PowerShell", not "PowerShell (x86)". The x86 version fails without a clear error.

## 2. The course kit

- A zip file on the course website: the data file and a briefing for the agent. You do not download it; the agent does, from one pasted line.
- The briefing, `AGENTS.md`: who you are, how to talk to you, two things it may not do, what is in the data file. The agent reads it every time it starts in this folder. Why a text file changes the agent is next Thursday's topic.
- The agent reads the briefing only at start, so after the download you restart it.

## 3. What an agent does that a chat window cannot

- Today you will see it do three things a chat window cannot: look at a folder on your laptop, install a Python library for itself, and leave its work as files in your folder.

> [!IMPORTANT]
> **KEY POINT:** An agent is the same model with hands. It runs on your computer and can use what is on it; a chat window has never seen your computer.

## 4. The permission prompt

- Before the agent runs a command or changes a file, it stops and asks you.
- Read what it wants to do. Approve what you understand. Ask it to explain what you do not.
- You are responsible for what you approve.

> [!TIP]
> **Try it.** When the first permission prompt appears, before answering, type: *"Explain what this command does and why you need it."* Then decide.

## 5. Your laptop, seen by the agent

- First task, before the data: ask the agent about your Downloads folder. It runs a command, reads the output, and reports back in plain words.
- The Downloads folder is outside its working folder, so it asks permission before looking. It may look; it may not delete. Delete nothing today; decide at home, by hand.

> [!TIP]
> **Try it.** Ask claude.ai or chatgpt.com the same question about your Downloads folder. Compare the two answers.

## 6. Your first build: a dashboard

- First ask the agent whether it has what it needs to analyse the file with Python, and to install what is missing. It installs a library or two; pandas is the usual one. The rules in the kit allow Python libraries and nothing else.
- Then ask for the facts and the dashboard: the three most important things in the file, and an interactive dashboard as a single HTML file that opens in your browser.
- Want it in Excel? Ask for the same dashboard as an Excel workbook, one sheet per chart. It writes the file into the folder; double-click it.
- Different students will get different dashboards from the same request. That is expected. Monday starts from them.

> [!WARNING]
> **PLEASE NOTE:** A page opened from your disk cannot open other files on your disk by itself. If your dashboard opens blank, tell the agent: *"it opens blank"*. It will put the numbers inside the page or add a place to drag the CSV into.

> [!CAUTION]
> **Cost.** Claude Code: stay on Sonnet, the Pro default. `/usage` shows how much of your week is used. Codex: keep the default model.

## In class

### Windows

1. Run the Git for Windows installer. Accept every default. Next until Finish.
2. Open PowerShell (the one called "PowerShell", not "(x86)"). Paste the command, press Enter, wait for it to finish, then close the window.
   ```bash
   irm https://claude.ai/install.ps1 | iex
   ```
   Codex instead of Claude Code:
   ```bash
   irm https://chatgpt.com/codex/install.ps1 | iex
   ```
3. Make a folder on the Desktop named `bpa347` and open it. Right-click on empty space and choose **Open in Terminal**.
4. Start the agent (Codex users: type `codex` instead):
   ```bash
   claude
   ```
5. A browser tab opens. Log in with the account that has Pro. Return to the terminal. If it asks whether you trust the files in this folder, answer yes.
6. Fetch the course kit. Read the permission prompt, then approve it.
   ```prompt
   Download https://bpa347-notes.vercel.app/kit.zip into this folder and unpack it here.
   ```
7. Restart the agent so it reads the kit: type `/exit`, then start it again as in step 4.
8. Claude Code: check the model. It should say Sonnet; if not, set it. Codex: skip this step.
   ```prompt
   /model sonnet
   ```
9. Your laptop. Read the permission prompt, then approve it.
   ```prompt
   How many files are in my Downloads folder, how much space do they take, which are the ten biggest, and what could I safely delete? Do not delete anything.
   ```
10. The power-up. Approve the install.
    ```prompt
    Do you have what you need to analyse the CSV file in this folder with Python? Install what is missing.
    ```
11. The dashboard:
    ```prompt
    Look at the CSV file in this folder. Tell me the three most important facts in it, then build me an interactive dashboard as a single HTML file that I can open in my browser.
    ```
12. Answer the permission prompts. Read each one first.
13. Double-click the HTML file it made. If it asks for the CSV, drag it in. Ask the agent for one change.

### Mac

1. Open Terminal (Cmd-Space, type "Terminal", Enter). Paste the command, press Enter, wait for it to finish, then close the window.
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```
   Codex instead of Claude Code:
   ```bash
   curl -fsSL https://chatgpt.com/codex/install.sh | sh
   ```
2. In Finder, make a folder on the Desktop named `bpa347`. Right-click it and choose **New Terminal at Folder** (at the bottom of the menu, or inside **Services**). If it is not there: open Terminal, type `cd ` (with a space), drag the folder from Finder into the Terminal window, press Enter.
3. Start the agent (Codex users: type `codex` instead):
   ```bash
   claude
   ```
4. A browser tab opens. Log in with the account that has Pro. Return to the terminal. If it asks whether you trust the files in this folder, answer yes.
5. Fetch the course kit. Read the permission prompt, then approve it.
   ```prompt
   Download https://bpa347-notes.vercel.app/kit.zip into this folder and unpack it here.
   ```
6. Restart the agent so it reads the kit: type `/exit`, then start it again as in step 3.
7. Claude Code: check the model. It should say Sonnet; if not, set it. Codex: skip this step.
   ```prompt
   /model sonnet
   ```
8. Your laptop. Read the permission prompt, then approve it.
   ```prompt
   How many files are in my Downloads folder, how much space do they take, which are the ten biggest, and what could I safely delete? Do not delete anything.
   ```
9. The power-up. Approve the install.
    ```prompt
    Do you have what you need to analyse the CSV file in this folder with Python? Install what is missing.
    ```
10. The dashboard:
    ```prompt
    Look at the CSV file in this folder. Tell me the three most important facts in it, then build me an interactive dashboard as a single HTML file that I can open in my browser.
    ```
11. Answer the permission prompts. Read each one first.
12. Double-click the HTML file it made. If it asks for the CSV, drag it in. Ask the agent for one change.

## Terms

- **Working folder**: the folder the agent was started in. It sees the files there and nowhere else without asking.
- **Briefing**: a text file, `AGENTS.md`, that the agent reads every time it starts in the folder. Instructions that hold for every conversation.
- **Permission prompt**: the agent's request for your approval before it runs a command or changes a file.
- **Python**: a programming language, installed as a program on your laptop. The agent writes and runs small programs in it; you never open it.
- **Library**: an add-on for Python, installed with one command. pandas, for tables, is the one the agent asks for first.
- **CSV**: a plain-text table; each line is a row, commas separate the columns. Excel opens it.

## Homework

Keep the dashboard and the CSV together and bring them on Monday. See [homework](homework.md).
