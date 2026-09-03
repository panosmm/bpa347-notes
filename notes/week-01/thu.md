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
- Your first build: an app on your laptop

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

- Today you will see it do three things a chat window cannot: look at a folder on your laptop, install Python libraries for itself, and build an app that runs on your laptop.

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

## 6. Your first build: an app on your laptop

- First ask the agent whether it has what it needs to analyse the file with Python, and to install what is missing. It installs pandas, the library for tables. The rules in the kit allow Python libraries and nothing else.
- Then ask for the facts and the app: the three most important things in the file, then a Streamlit app with a country picker and a month picker. The agent installs Streamlit, writes one Python program, starts it, and gives you an address starting with `http://localhost`. Open it in your browser.
- The app runs on your laptop only, while the agent's terminal window stays open. Nobody else can open the address.
- Every change you ask for goes into the program. Reload the page, or click **Rerun** when the page offers it, and the change is there.
- Want a spreadsheet? Ask for the same numbers as an Excel workbook. It writes the file into the folder; double-click it.
- Different students will get different apps from the same request. That is expected. Monday starts from them.

> [!WARNING]
> **PLEASE NOTE:** Windows may ask whether to allow Python through the firewall. Either answer works. If the terminal asks for an email address, press Enter. If the address does not open, tell the agent: *"the page does not load"*.

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
11. The app:
    ```prompt
    Look at the CSV file in this folder. Tell me the three most important facts in it. Then build me a Streamlit app that runs on my laptop: I pick a country and a month, and I see revenue, number of orders and the ten best-selling products. Start it and give me the address.
    ```
12. Answer the permission prompts. Read each one first. The Streamlit install takes a few minutes.
13. Open the address in your browser. Try the pickers. Ask the agent for one change, then reload the page.

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
10. The app:
    ```prompt
    Look at the CSV file in this folder. Tell me the three most important facts in it. Then build me a Streamlit app that runs on my laptop: I pick a country and a month, and I see revenue, number of orders and the ten best-selling products. Start it and give me the address.
    ```
11. Answer the permission prompts. Read each one first. The Streamlit install takes a few minutes.
12. Open the address in your browser. Try the pickers. Ask the agent for one change, then reload the page.

## Terms

- **Working folder**: the folder the agent was started in. It sees the files there and nowhere else without asking.
- **Briefing**: a text file, `AGENTS.md`, that the agent reads every time it starts in the folder. Instructions that hold for every conversation.
- **Permission prompt**: the agent's request for your approval before it runs a command or changes a file.
- **Python**: a programming language, installed as a program on your laptop. The agent writes and runs small programs in it; you never open it.
- **Library**: an add-on for Python, installed with one command. pandas for tables, Streamlit for the app.
- **Streamlit**: a Python library that turns a program into a web page served by your own laptop.
- **localhost**: your own laptop, as an address in the browser. A page there is visible to you only.
- **CSV**: a plain-text table; each line is a row, commas separate the columns. Excel opens it.

## Homework

Finish the app if class ended first, then ask for one change. See [homework](homework.md).
