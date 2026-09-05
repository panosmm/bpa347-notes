# Week 2 · Thursday: Context Engineering

Everything the model knows about you arrives through the context window, every time. What to put there, and three ways to keep it small.

## Before class

- Your homework question and its answer, ready to show
- Your laptop, with the folder from week 1

## 1. The context window is all the model knows about you

- The model brings the world up to its cutoff, as a recollection. Nothing about you, your company, your data or the decision you face is in the context window until something puts it there.
- When something is missing, the model guesses or asks. If it guesses, you check the answer afterwards. If it asks, you answer and wait.
- The [briefing in the kit](https://bpa347-notes.vercel.app/kit/AGENTS.md) is one way of putting it there: a file read before your first word, setting the tone, the language and the rules for the session.

> [!IMPORTANT]
> **KEY POINT:** The answer is only as good as the context window at that moment. Filling it is your job.

## 2. A briefing has five parts

| Part | Says | Usually in |
|---|---|---|
| Role and audience | Who is asking, who reads the result | the file |
| Goal and decision | What the result is for, what will be decided with it | the message |
| Constraints and format | Length, language, units, layout, what to leave out | both |
| Materials and examples | The files, the data, an example of what good looks like | both |
| Success criteria | How you will judge the result | the message |

- You brief the agent. What never changes goes in the file, once. What belongs to this task goes in the message, every time. Whatever you leave out, the agent has to guess or ask.

## 3. Three sources, read at every start

| Source | Who writes it | How long it lasts |
|---|---|---|
| Your message, and the conversation it belongs to | You, every time | Re-sent with every message; gone when you exit |
| Files in the folder, `CLAUDE.md` among them | You, once | Until you delete them; `CLAUDE.md` is read at every start |
| Its own notes | The agent, as it works | Until you or it edits them; the index is read at every start |

- `CLAUDE.md` holds what you would otherwise repeat every session. A few lines about formatting change every answer from then on. Edits take effect at the next start.
- It is instructions, not enforcement. The kit's settings file is enforcement: rules the program applies whatever the agent decides.
- The agent's own notes: what you corrected, what you prefer, what the project is. Plain text in a folder of its own, on by default; `/memory` opens it, and you can edit or delete anything there.
- Put in what matters, leave out the rest: irrelevant material makes answers worse. Attaching a document is the small version of retrieval, week 5.

## 4. Three ways to keep the context window small

All three take text out of the context window and keep what matters somewhere else: another context window, a file on disk, a summary in place.

![Three ways: a subagent reads in its own window and sends back a report; a handoff writes a file that a fresh session reads; compact replaces the conversation with a summary in place.](img/three-ways.png)

- **Subagent**: a second copy of the model with its own window, started by the agent for one task. Only its report comes back. Ask in plain words: "use a subagent to".
- **Handoff**: the agent writes a file with what was done, what was decided, what is next. Exit, start fresh, point the agent at the file. The conversation becomes a file you can read and fix.
- **Compact**: `/compact` summarises the conversation in place. It loses detail, and you do not choose what survives. The handoff file you can read and fix.
- Summarising is one way to make a lot of text small. Selecting is the other: an index of your documents, built from embeddings, picks the parts that matter. Week 5.

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
7. The subagent. Watch the status line: the context window barely grows.
   ```prompt
   Use a subagent to check the CSV for data problems and report back in ten lines.
   ```
8. The handoff. Note the percentage on the status line, then exit.
   ```prompt
   Write a file named HANDOFF.md: what we did today, what we decided, what is next, and anything you would want to remember in a fresh session on this project. Short.
   ```
9. Start the agent again and continue from the file. Note the percentage and compare with step 8.
   ```prompt
   Read HANDOFF.md and tell me where we are.
   ```

## Terms

- **Briefing file**: a text file the agent reads at every start in a folder. `CLAUDE.md` for Claude Code, `AGENTS.md` for Codex.
- **Auto memory**: notes the agent writes for itself about you and the project, read at every start. `/memory` opens them.
- **Retrieval**: fetching the relevant parts of a large document collection into the context window before the model answers. Week 5.
- **Embeddings**: numbers that stand for the meaning of a piece of text, so that similar pieces can be found. The index behind retrieval. Week 5.
- **Subagent**: a second copy of the model with its own window, started by the agent for one task. Only its report comes back.
- **Handoff**: a file that carries what was done and decided from one conversation to the next.

## Homework

Before Monday: do the handoff again at home, on a conversation of your own. See [homework](homework.md).
