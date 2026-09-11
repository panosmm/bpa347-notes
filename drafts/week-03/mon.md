# Week 3 · Monday: Verifying AI Output

A report goes out under your name. How to check it, and what to do when it is too long to check in full.

## Before class

- Your laptop, with the `bpa347` folder from week 1

## 1. Checking a long report

- Checking every link, every number and every explanation in a long report takes hours.
- So you check some parts of it, as carefully as the decision needs, and you say which parts you checked and which you did not.

> [!IMPORTANT]
> **KEY POINT:** You cannot tell a wrong claim from a right one by reading it. You tell by checking it against its source.

## 2. Three verdicts

| Verdict | Meaning |
|---|---|
| Holds | The source exists and says what the report says |
| Does not hold | The source says something else, or no source says it |
| Cannot tell | The source does not open, or no page can settle it: the report says something does not exist, or gives the writer's own explanation |

## 3. Your own numbers

- For every number in your report, say three things: a program computed it, the model did not type it; where the data came from; what you left out, in a note under the table.
- Never paste personal or confidential data into a chat window. GDPR applies to you.

## In class

1. Open a terminal in the `bpa347` folder on the Desktop and start the agent.
2. Download the memo.
   ```prompt
   Download https://bpa347-notes.vercel.app/week-03/files/memo.md into this folder.
   ```
3. Read the memo: one page on the shop's November results, written from the data file. Then ask the agent, in your own words, to check it against the data. Read what it found.
4. Make a folder on the Desktop named `bpa347-week3`, open a terminal there and start the agent.
5. Download the report: 31,000 words and 279 links, in Greek, on the teaching profession in Greece. The zip holds the whole text and the same text cut into portions, listed in `dossier/INDEX.md`.
   ```prompt
   Download https://bpa347-notes.vercel.app/week-03/files/dossier.zip into this folder and unpack it.
   ```
6. Do the links open?
   ```prompt
   Write and run a script that tries every web link in dossier/dossier.md. Report how many open and list the ones that do not.
   ```
7. Twenty links: does the page say what the report says?
   ```prompt
   Pick twenty links from dossier/dossier.md at random. For each, open the page and check whether it contains the number or the phrase the report attributes to it. Table: link, what the report says, found or not found.
   ```
8. Every claim in your team's portion. Put its file name in place of `portion-NN.md`.
   ```prompt
   For every claim in dossier/portion-NN.md that carries a number or a source: does the source exist, does it say what the file says, and is the claim a fact from the source or the writer's own reading? Answer as a table: claim, what the source says, verdict (holds / does not hold / cannot tell). Then two or three sentences on what you could not check and why.
   ```
9. What did the report miss?
   ```prompt
   What question does dossier/portion-NN.md answer? Research that question again from zero on the web, without starting from the file's own sources, and tell me what you find that the file does not mention.
   ```
10. The cost. Note how long steps 6 to 9 took and how many tokens they used, from `/context`. Multiply both by the number of portions in `dossier/INDEX.md`: that is what checking the whole report once would cost.

## Terms

- **Reading**: the writer's own explanation of the facts. A source can confirm a fact, not an explanation.
- **Completeness**: whether the report found everything there was to find. The report cannot list what it missed, so the only check is to research the question again.
- **GDPR**: the EU law on personal data. It covers what you paste into a chat window.

## Homework

Before Thursday, in groups: one deep research run from the brief. See [homework](homework.md).
