# Week 1 · Thursday — Agent vs chatbot

By the end of this session you will, in pairs, have installed the agent, pointed it at a file the chat window chokes on, and got back an interactive dashboard that opens in a browser — on someone's disk.

## Before class

- Claude Pro active on your account (check: log in at claude.ai and look for "Pro")
- The Git for Windows installer downloaded, not yet run
- The Claude Code install command saved from the email
- The dataset zip downloaded and unzipped to a folder you can find — the Desktop is fine
- Laptop charged

## Big picture

- The install: Git for Windows, then Claude Code, then login
- The ambush: what a chat window cannot do
- Agent vs chatbot — the difference is hands
- The permission prompt
- Your first agent run: the dashboard

## 1. The install

Order matters. **Git for Windows** first — you will never open it; it is plumbing that gives the agent a proper shell to work in. Then the Claude Code installer, which is one command pasted into PowerShell. Then `claude`, which opens a browser tab for you to log in with the account that has Pro. The exact steps are in the Lab below.

Every pair gets a five-minute debugging budget. If a machine is not working after five minutes, flag it for office hours and pair up with a machine that is. The session goes on; the install is not the lesson.

> [!WARNING]
> **Trap.** Windows ships two PowerShells. Run the plain one — search for "PowerShell", not "PowerShell (x86)". The x86 version fails quietly and you lose ten minutes wondering why.

## 2. The ambush: what a chat window cannot do

You will be asked to open the chat website, drop in the dataset, and ask a simple question about it. It will refuse, or truncate, or answer confidently about data it never read. The file is around 50 MB of CSV; a chat window holds a fraction of that, and the model never sees the rest.

The lesson is not "the chat is bad." The lesson is that a chat window has no hands. It can read what fits in its window and write text back, and that is all. For a small document that is plenty. For a spreadsheet the size of a business, it is a wall.

## 3. Agent vs chatbot — the difference is hands

Same model, different result. The agent in the terminal does not read the whole file either — it cannot. It looks at the first lines, works out the structure, writes a small program that does the counting, runs it, checks the output, fixes what broke, and hands you a file. Tools, and a loop. Week 2 explains the machinery; today you watch it happen on your own laptop.

> [!IMPORTANT]
> **Exam.** The agent did not "read" your 50 MB file; it wrote a program that did. An agent's advantage over a chatbot is not a bigger memory — it is tools and a loop.

## 4. The permission prompt

Before the agent runs a command or writes a file, it stops and asks. This is not friction to click through. It is the management interface. Think of it as an intern who proposes every action and a manager who approves it — you are the manager, and you are accountable for what gets done. Read what it wants to do. Say yes to what you understand. Ask it to explain what you don't.

> [!TIP]
> **Try it.** When the first permission prompt appears, before answering, type: *"Explain what this command does and why you need it."* Then decide.

## 5. Your first agent run

The prompt is in the Lab. What you are asking for is an interactive dashboard as a single HTML file that you open in a browser and drag the CSV into. Why that shape: your laptop has no Python and no Node — the browser is the only thing on it that can run a program. The agent knows this, because the folder you unzipped contains a short briefing file that tells it. Week 2 shows you that file.

Six pairs will get six different dashboards. That is not a problem; it is Monday's opening.

> [!WARNING]
> **Trap.** A page opened from your disk cannot open other files from your disk by itself — that is a browser security rule. If your dashboard opens blank, that is why. Tell the agent exactly that: *"it opens blank; I need to drag the CSV into the page instead."*

> [!CAUTION]
> **Cost.** Set `/model sonnet` at the start of every session — the classroom default. The bigger model burns the weekly allowance faster and today's job does not need it.

## Lab

1. Run the Git for Windows installer. Accept every default. Next until Finish.
2. Open PowerShell (the plain one). Paste the Claude Code install command from the email and press Enter. Wait for it to finish, then close PowerShell.
3. Open the folder where you unzipped the dataset. Right-click empty space → **Open in Terminal**.
4. Start the agent:
   ```bash
   claude
   ```
5. A browser tab opens. Log in with the account that has Pro. Return to the terminal.
6. Set the classroom model:
   ```prompt
   /model sonnet
   ```
7. Ask for the dashboard:
   ```prompt
   Look at the CSV file in this folder. Build me an interactive dashboard as a single HTML file that I can open in my browser and drag the CSV into. No installs.
   ```
8. Answer the permission prompts. Read each one first.
9. Double-click the HTML file it made. Drag the CSV onto it. Argue with the result: ask for one change.

## Takeaways

- The chat window fails on a big file because it has no hands, not because the model is weak.
- The agent works on a big file by writing a program that does the work, then running it.
- The permission prompt is where you manage the agent; you are accountable for what you approve.
- A single HTML file with drag-and-drop input is the shape that runs on a laptop with nothing installed.
- Different pairs get different dashboards from the same prompt; the variance is the next lesson.

## Terms

- **Working folder** — the folder the agent was started in; it sees the files there and nowhere else without asking.
- **Permission prompt** — the agent's request for approval before it runs a command or writes a file.
- **Tool** — something an agent can do besides produce text: read a file, write a file, run a program.
- **Git for Windows** — plumbing that gives the agent a shell; installed once, never opened.
- **PowerShell** — the Windows command window used only to run the installer.
- **Dashboard** — a page that turns a data file into charts and filters.

## Homework

Bring the dashboard on your disk — Monday opens with them on the projector. See [homework](homework.md).
