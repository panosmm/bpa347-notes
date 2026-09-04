# Week 1 · Thursday: Your first agent

Install the agent, let it look at your laptop, then have it build an app.

## Before class

- Claude Pro active on your account (or ChatGPT Plus, if you are using Codex)
- Python and the agent installed, the agent logged in once (steps in the homework)
- Laptop charged

## In class

1. Open a terminal in the `bpa347` folder on the Desktop. Windows: open the folder, right-click on empty space, **Open in Terminal**. Mac: right-click the folder in Finder, **New Terminal at Folder**.
2. Start the agent. Codex: type `codex` instead.
   ```bash
   claude
   ```
3. Fetch the course kit. Read the permission prompt, then approve it.
   ```prompt
   Download https://bpa347-notes.vercel.app/kit.zip into this folder and unpack it here.
   ```
4. Restart the agent so it reads the kit: type `/exit`, then start it again as in step 2.
5. Claude Code: check the model. Codex: skip this step.
   ```prompt
   /model sonnet
   ```
6. Your laptop. Read the permission prompt, then approve it.
   ```prompt
   How many files are in my Downloads folder, how much space do they take, which are the ten biggest, and what could I safely delete? Do not delete anything.
   ```
7. The tools. Approve the install.
    ```prompt
    Do you have what you need to analyse the CSV file in this folder with Python? Install what is missing.
    ```
8. The app. Approve the prompts; the Streamlit install takes a few minutes.
    ```prompt
    Look at the CSV file in this folder. Tell me the three most important facts in it. Then build me a Streamlit app that runs on my laptop: I pick a country and a month, and I see revenue, number of orders and the ten best-selling products. Start it and give me the address.
    ```
9. Open the address in your browser. Try the pickers. Ask the agent for one change, then reload the page.

> [!WARNING]
> **PLEASE NOTE:** Windows may ask whether to allow Python through the firewall: either answer works. If the terminal asks for an email address, press Enter. If the app's address does not open, tell the agent: *"the page does not load"*.

> [!CAUTION]
> **Cost.** Claude Code: stay on Sonnet, the Pro default. Codex: keep the default model.

## Terms

- **Working folder**: the folder the agent was started in. It sees the files there; anywhere else, it asks first.
- **Permission prompt**: the agent's request for your approval before it runs a command or changes a file.
- **localhost**: your own laptop as an address in the browser. A page there is visible to you only.

## Homework

Finish the app if class ended first, then ask for one change. See [homework](homework.md).
