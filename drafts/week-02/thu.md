# Week 2 · Thursday: Context Engineering

Everything the model knows about you arrives through the window, every time. What to put there, and three ways to keep it small.

## Before class

- Your homework question and its answer, ready to show
- Your laptop, with the folder from week 1

## 1. What the model needs from you

- Every conversation starts from zero: nothing about you, your company, your data, your last conversation. What it should know must be in the window.
- Vague in, average out. Every gap in the request is filled with the most typical assumption from training. Trained to please, it answers anyway.
- The [briefing in the week 1 kit](https://bpa347-notes.vercel.app/kit/AGENTS.md) is why every agent in the room behaved alike. It was read before your first word.

> [!IMPORTANT]
> **KEY POINT:** The answer is only as good as what is in the window when the model answers. Putting the right things there is your job.

## 2. A briefing has five parts

| Part | Says |
|---|---|
| Role and audience | Who is asking, who reads the result |
| Goal and decision | What the result is for, what will be decided with it |
| Constraints and format | Length, language, units, layout, what to leave out |
| Materials and examples | The files, the data, an example of what good looks like |
| Success criteria | How you will judge the result |

- This is requirements elicitation, with you as the stakeholder. A briefing that would brief a new colleague briefs the agent.

## 3. Two places to put what it should know

| Place | How long it lasts | What it costs |
|---|---|---|
| The conversation: what you type and what it answers | Until you exit | Re-sent with every message |
| Files in the folder, `CLAUDE.md` among them | Until you delete them | Read into the window when needed; `CLAUDE.md` at every start |

- `CLAUDE.md` holds what you would otherwise repeat every session. Five lines about formatting change every answer from then on. Edits take effect at the next start.
- It is instructions, not enforcement. The kit's settings file is enforcement: rules the program applies whatever the agent decides.
- Selection beats volume: irrelevant material makes answers worse. Attaching a document is the small version of retrieval, week 5.

## 4. Three ways to keep the window small

![Three ways: a subagent reads in its own window and sends back a report; a handoff writes a file that a fresh session reads; compact replaces the conversation with a summary in place.](img/three-ways.png)

- **Subagent**: a second copy of the model with its own window, started by the agent for one task. Only its report comes back. Ask in plain words: "use a subagent to".
- **Handoff**: the agent writes a file with what was done, what was decided, what is next. Exit, start fresh, point the agent at the file. The conversation becomes a file you can read and fix.
- **Compact**: `/compact` summarises the conversation in place. Lossy, and you do not choose what survives. The handoff file you can read and fix.
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
- **Embeddings**: numbers that stand for the meaning of a piece of text, so that similar pieces can be found. The index behind retrieval. Week 5.
- **Subagent**: a second copy of the model with its own window, started by the agent for one task. Only its report comes back.
- **Handoff**: a file that carries what was done and decided from one conversation to the next.

## Homework

Before Monday: do the handoff again at home, on a conversation of your own. See [homework](homework.md).
