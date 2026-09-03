# Week 2 · Thursday: Context Engineering

Everything the model knows about you arrives through the window, every time. What to put there, and three ways to control it.

## Before class

- Your homework question and its answer, ready to show
- Your laptop, with the folder from week 1

## Big picture

- What the model needs from you
- The anatomy of a briefing
- Context in layers
- A briefing file of your own
- A subagent
- The handoff

## 1. What the model needs from you

- Every conversation starts with a model that knows nothing about you, your company, your data or your last conversation. What it should know must be in the window.
- Vague in, average out. Where the request leaves a gap, the model fills it with the most typical assumption in its training. The result is not wrong; it is average.
- Trained to please, it rarely says your request was vague. It answers anyway.
- The [briefing in the week 1 kit](https://bpa347-notes.vercel.app/kit/AGENTS.md) is why every agent in the room behaved alike: who you are, how to talk, two rules, the data. The agent read it before your first word.

> [!IMPORTANT]
> **KEY POINT:** The answer is only as good as what is in the window when the model answers. Putting the right things there is your job; nobody else can do it.

## 2. The anatomy of a briefing

- Role and audience: who is asking, who reads the result.
- Goal and decision: what the result is for, what will be decided with it.
- Constraints and format: length, language, units, layout, what to leave out.
- Materials and examples: the files, the data, an example of what good looks like.
- Success criteria: how you will judge the result.
- This is requirements elicitation, with you as the stakeholder. A briefing that would brief a new colleague briefs the agent.

## 3. Context in layers

- Four layers, from one-off to standing: this message; this conversation; the files the agent reads; the briefing file it reads at every start.
- The conversation is rented: re-sent with every message, gone when the session ends. Files are owned: kept for free, read when needed.
- The briefing file holds what you would otherwise repeat every session. Not procedures, not everything you know.
- Attaching a document to a chat is the small version of what companies do with their whole knowledge base: retrieval, week 5.
- Selection beats volume. The window is finite and irrelevant material makes answers worse. Put in what the task needs, not everything you have.

## 4. A briefing file of your own

- `CLAUDE.md`: a text file in the working folder; the agent reads it at every start. Same idea as the kit's `AGENTS.md`. Claude Code reads `CLAUDE.md`, Codex reads `AGENTS.md`.
- Five lines about formatting change every answer from then on. Today you write them, ask the same question before and after, and keep the file.
- Edits take effect at the next start. Restart after changing it.
- `/context` lists the briefing files that loaded, under Memory files.
- A briefing file is instructions, not enforcement: the agent follows it the way a colleague follows a memo. The settings file in the kit's `.claude` folder is enforcement: rules the program applies whatever the agent decides.

## 5. A subagent

- A subagent: a second copy of the model with its own window, started by the agent for one task. It reads what it needs; only its report comes back into your window.
- Use it when a task means reading a lot: checking a file, going through a folder of documents. Your window stays small.
- Ask for it in plain words: "use a subagent to".

## 6. The handoff

- A long conversation costs more with every message and answers worse. It also holds everything you decided.
- The handoff: ask the agent to write a file with what was done, what was decided, what is next. Exit. Start fresh and point the agent at the file. The knowledge moves from the rented layer to the owned one.
- The status line shows the window before and after.
- `/compact`: the automatic version. The agent summarises the conversation in place. Lossy, and you do not choose what survives. The handoff file you can read and fix.

## In class

1. Make a folder on the Desktop named `bpa347-week2` and open a terminal there. Windows: right-click on empty space, **Open in Terminal**. Mac: right-click the folder, **New Terminal at Folder**. Start the agent.
2. Bring the data file over. It asks permission to read outside its folder: approve.
   ```prompt
   Copy online_retail.csv from the bpa347 folder on my Desktop into this folder.
   ```
3. Ask the question. Look at how the table and the chart come out.
   ```prompt
   Revenue by month for 2025: a table, and a bar chart saved as an HTML file.
   ```
4. Create the briefing file.
   ```prompt
   Create a file named CLAUDE.md in this folder with exactly these five lines:
   - Tables in markdown, with a totals row.
   - Money in GBP with the £ sign and thousands separators, no decimals.
   - Charts: one HTML file per chart, with a title and axis labels.
   - Exclude cancelled invoices (InvoiceNo starting with C) and zero prices, and say so under every table.
   - End every answer with one sentence: what I should check by hand.
   ```
5. Restart the agent: `/exit`, then `claude`. Check that the file loaded: `CLAUDE.md` appears under Memory files.
   ```prompt
   /context
   ```
6. Ask the question from step 3 again, word for word. Compare.
7. The subagent. Watch the status line: the window barely grows.
   ```prompt
   Use a subagent to check the CSV for data problems and report back in ten lines.
   ```
8. The handoff. Note the percentage on the status line, then exit.
   ```prompt
   Write a file named HANDOFF.md: what we did today, what we decided, what is next. Short.
   ```
9. Start the agent again and continue from the file. Note the percentage and compare with step 8.
   ```prompt
   Read HANDOFF.md and tell me where we are.
   ```

## Terms

- **Briefing file**: a text file the agent reads at every start in a folder. `CLAUDE.md` for Claude Code, `AGENTS.md` for Codex.
- **Requirements elicitation**: finding out and writing down what a result must do before anyone builds it.
- **Retrieval**: fetching the relevant parts of a large document collection into the window before the model answers. Week 5.
- **Subagent**: a second copy of the model with its own window, started by the agent for one task. Only its report comes back.
- **Handoff**: a file that carries what was done and decided from one conversation to the next.
- **Compact**: the agent's automatic summary of the conversation, replacing it in the window. Lossy.

## Homework

Before Monday: do the handoff again at home, on a conversation of your own. See [homework](homework.md).
