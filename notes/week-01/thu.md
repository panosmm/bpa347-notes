# Week 1 · Thursday: Your first agent

Install the tools, then use an agent on a data file that is too big for a chat window.

## Before class

- Claude Pro active on your account (or ChatGPT Plus, if you are using Codex)
- Windows only: the Git for Windows installer downloaded, not yet run (link in the homework)
- Laptop charged

## Big picture

- Installing the tools
- The course kit
- A chat window and a large file
- What an agent does differently
- The permission prompt
- Your first task: a dashboard

## 1. Installing the tools

- Windows: Git for Windows, then Claude Code, then log in. Mac: Claude Code, then log in. Exact steps under In class below.
- Git for Windows: Claude Code needs it; you will never open it yourself.
- Codex: same steps, different command.

> [!WARNING]
> **PLEASE NOTE:** Windows: there are two versions of PowerShell. Use the one called "PowerShell", not "PowerShell (x86)". The x86 version fails without a clear error.

## 2. The course kit

- A small zip file on the course website: the data file and two text files for the agent.
- You do not download it. The agent does, into your working folder, from one pasted line. Exact steps under In class below.
- `AGENTS.md`: a briefing the agent reads every time it starts in this folder. What it says is Monday's topic.
- Claude Code: `CLAUDE.md` is one line that points to `AGENTS.md`, and `.claude/settings.json` holds rules the agent cannot break in this folder, for example no installing and no deleting. Codex: reads `AGENTS.md` directly and has its own rules; it ignores the settings file.
- The agent reads the briefing and the rules when it starts, so after the download you restart it.

## 3. A chat window and a large file

- The data file in the kit, `online_retail.csv`: every transaction of a UK online gift retailer from December 2024 to December 2025, 541,909 rows, 47 MB. The dates were moved forward 14 years from the original data. Source: [Online Retail, UCI Machine Learning Repository](https://archive.ics.uci.edu/dataset/352/online+retail), licence CC BY 4.0.
- Task: upload it to the chat website (claude.ai or chatgpt.com) and ask a simple question about it.
- Expected result: it refuses, or uses only part of the file, or answers about data it never read.
- Reason: a chat window can only work with text that fits inside its window. The rest of the file does not exist for it.

## 4. What an agent does differently

- Same model, in a terminal, started inside the folder that holds the file.
- It does not read the whole file either. It looks at the first lines, writes a small program that does the work, runs it, checks the result, and gives you a file.
- That is the difference: an agent has tools (read a file, write a file, run a program) and repeats until the job is done.

> [!IMPORTANT]
> **KEY POINT:** The agent did not "read" the 47 MB file; it wrote a program that did. An agent's advantage over a chatbot is tools and a loop, not a bigger memory.

## 5. The permission prompt

- Before the agent runs a command or changes a file, it stops and asks you.
- Read what it wants to do. Approve what you understand. Ask it to explain what you do not.
- You are responsible for what you approve.

> [!TIP]
> **Try it.** When the first permission prompt appears, before answering, type: *"Explain what this command does and why you need it."* Then decide.

## 6. Your first task: a dashboard

- Ask for an interactive dashboard as a single HTML file that opens in a browser and takes the CSV by drag-and-drop.
- Why this form: the browser is the only program on your laptop that can run code, and a single HTML file needs nothing installed.
- Different pairs will get different dashboards from the same request. That is expected. Monday starts from them.

> [!WARNING]
> **PLEASE NOTE:** A page opened from your disk cannot open other files on your disk by itself. If your dashboard opens blank, that is why. Tell the agent: *"it opens blank; I need to drag the CSV into the page instead."*

> [!CAUTION]
> **Cost.** Claude Code: stay on Sonnet, the Pro default; Opus and Fable use up your weekly limit faster and this task does not need them. `/usage` shows how much of your week is used. Codex: keep the default model. Both: the 47 MB file costs almost nothing, the agent reads its first lines and writes a program for the rest.

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
7. In the browser, open claude.ai (or chatgpt.com), upload the CSV from the `bpa347` folder and ask a question about it. Note what happens. Back to the terminal.
8. Restart the agent so it reads the kit: type `/exit`, then start it again as in step 4.
9. Claude Code: check the model. It should say Sonnet; if not, set it. Codex: skip this step.
   ```prompt
   /model sonnet
   ```
10. Ask for the dashboard:
    ```prompt
    Look at the CSV file in this folder. Build me an interactive dashboard as a single HTML file that I can open in my browser and drag the CSV into. No installs.
    ```
11. Answer the permission prompts. Read each one first.
12. Double-click the HTML file it made. Drag the CSV onto it. Ask the agent for one change.

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
6. In the browser, open claude.ai (or chatgpt.com), upload the CSV from the `bpa347` folder and ask a question about it. Note what happens. Back to the terminal.
7. Restart the agent so it reads the kit: type `/exit`, then start it again as in step 3.
8. Claude Code: check the model. It should say Sonnet; if not, set it. Codex: skip this step.
   ```prompt
   /model sonnet
   ```
9. Ask for the dashboard:
   ```prompt
   Look at the CSV file in this folder. Build me an interactive dashboard as a single HTML file that I can open in my browser and drag the CSV into. No installs.
   ```
10. Answer the permission prompts. Read each one first.
11. Double-click the HTML file it made. Drag the CSV onto it. Ask the agent for one change.

## Terms

- **Working folder**: the folder the agent was started in. It sees the files there and nowhere else without asking.
- **Terminal**: on Windows, the window from "Open in Terminal"; on a Mac, the Terminal app.
- **Course kit**: the zip on the course website with the data file and the agent's briefing. The agent downloads it into the working folder.
- **Briefing**: a text file, `AGENTS.md`, that the agent reads every time it starts in the folder. Instructions that hold for every conversation.
- **Settings file**: Claude Code only. `.claude/settings.json`, rules enforced before the agent acts; unlike the briefing, the agent cannot argue with it.
- **Permission prompt**: the agent's request for your approval before it runs a command or changes a file.
- **Tool**: something an agent can do besides write text: read a file, write a file, run a program.
- **Git for Windows**: Windows only. Software Claude Code needs to run commands. Installed once, never opened.
- **PowerShell**: Windows only. The command window, used here only to run the installer.
- **CSV**: a plain-text table; each line is a row, commas separate the columns. Excel opens it.
- **Dashboard**: a page that turns a data file into charts and filters.

## Homework

Keep the dashboard and the CSV together and bring them on Monday. See [homework](homework.md).
