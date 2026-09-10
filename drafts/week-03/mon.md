# Week 3 · Monday: Verifying AI Output

A report goes out under your name. What it takes to check it, and what to do when it is too big to check.

## Before class

- Your laptop, with the `bpa347` folder from week 1

## 1. Checking a long report

- To check all of it you redo it: every link, every number, every reading. So you check portions, as deep as the decision needs, and say which.
- What you did not check is not checked. Say so.

> [!IMPORTANT]
> **KEY POINT:** Right and wrong read exactly alike. Only a check tells them apart.

## 2. Three verdicts

| Verdict | Meaning |
|---|---|
| Holds | The source exists and says it |
| Does not hold | The source says otherwise, or nothing says it |
| Cannot tell | The source will not open, or no page can settle it: a negative, or the writer's own reading |

## 3. Your own numbers

- Every number you hand over carries three things: computed by a program, not typed by the model; its source; what was left out, noted under the table.
- Personal and confidential data never go into a chat window. GDPR applies to you.

## In class

1. Open a terminal in the `bpa347` folder on the Desktop and start the agent.
2. Fetch the memo.
   ```prompt
   Download https://bpa347-notes.vercel.app/week-03/files/memo.md into this folder.
   ```
3. Read the memo: one page on the November results of the shop in the data file. Then ask the agent, in your own words, to check it against the data. Keep what you typed.
4. Make a folder on the Desktop named `bpa347-week3`, open a terminal there and start the agent.
5. Fetch the report: a research report of 31,000 words and 279 links, in Greek, on the teaching profession in Greece. The zip holds the whole text and the same text cut into portions, listed in `dossier/INDEX.md`.
   ```prompt
   Download https://bpa347-notes.vercel.app/week-03/files/dossier.zip into this folder and unpack it.
   ```
6. Links alive.
   ```prompt
   Write and run a script that tries every web link in dossier/dossier.md. Report how many open and list the ones that do not.
   ```
7. Keywords where the links point.
   ```prompt
   Pick twenty links from dossier/dossier.md at random. For each, open the page and check whether it contains the number or the phrase the report attributes to it. Table: link, what the report says, found or not found.
   ```
8. Every claim in your team's portion. Put its file name in place of `portion-NN.md`.
   ```prompt
   For every claim in dossier/portion-NN.md that carries a number or a source: does the source exist, does it say what the file says, and is the claim a fact from the source or the writer's own reading? Answer as a table: claim, what the source says, verdict (holds / does not hold / cannot tell). Then two or three sentences on what you could not check and why.
   ```
9. Completeness.
   ```prompt
   What question does dossier/portion-NN.md answer? Research that question again from zero on the web, without starting from the file's own sources, and tell me what you find that the file does not mention.
   ```
10. The bill. Note how long steps 6 to 9 took and the tokens used, from `/context`. Multiply both by the number of portions in `dossier/INDEX.md`: that is the cost of checking the whole report once.

## Terms

- **Reading**: the writer's own explanation of the facts. A source confirms facts, not readings.
- **Completeness**: whether a report found what there was to find. It cannot list what it missed, so the only check is researching the question again.
- **GDPR**: the EU law on personal data. It covers what you paste into a chat window.

## Homework

Before Thursday, in groups: one deep research run from the brief. See [homework](homework.md).
