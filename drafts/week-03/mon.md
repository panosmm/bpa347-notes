# Week 3 · Monday: Verifying AI Output

What it takes to be sure of one sentence, two kinds of check, three verdicts, and what to do with a report too big to check.

## Before class

- Your laptop, with the `bpa347` folder from week 1

## 1. What it takes to be sure of one sentence

| Kind of sentence | Example | The check |
|---|---|---|
| A fact with a source | a ratio, with a link | Open the link, find the sentence |
| A fact without one | a count, no link | Find a source |
| A reading | why a series jumped | Nothing to open. Do the numbers force it? |
| A comparison | a salary here against one abroad | Both numbers hold. Is it the comparison the reader needs? |
| A negative | "nobody publishes the waiting time" | No page proves an absence. Search again from zero |

> [!IMPORTANT]
> **KEY POINT:** Right and wrong read exactly alike. Only a check tells them apart.

## 2. Two kinds of check

| Mechanical: the agent does them | Judgment: you do them |
|---|---|
| Does the source exist? | Is the conclusion warranted? |
| Is the quote on the page? | Is this the right question? |
| Does the arithmetic add up? | Would I sign this? |
| Are the dates in range? | |

## 3. To check it all, you redo it

- Every link, every number, every reading, again. For a report of 31,000 words and 279 links: about four hours and 4.6 million tokens.
- That covers only what is on the page. Readings, comparisons and what the report never found are on no page.
- So you check portions, as deep as it matters, and say which.

## 4. What you can do

| Check | What it takes |
|---|---|
| Links alive | All of them; the agent writes a script |
| Keywords there | Twenty links: does the page say what the report says it does? |
| Claims to the source | One portion, every claim, the three verdicts |
| Completeness | One question researched again from zero |

- What you did not check is not checked. Say so.

## 5. Three verdicts

| Verdict | Meaning |
|---|---|
| Holds | The source exists and says it |
| Does not hold | The source says otherwise, or nothing says it |
| Cannot tell | The source will not open; nobody can prove a negative; the writer's own reading |

- A grey area the report names is not a failure. One it hides is.

## 6. Data discipline

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

- **Mechanical check**: a check with a yes or no answer that a program or an agent can make: the link opens, the quote is on the page, the sum is right.
- **Reading**: the writer's own explanation of the facts. A source confirms facts, not readings.
- **Completeness**: whether a report found what there was to find. It cannot list what it missed, so the only check is researching the question again.
- **GDPR**: the EU law on personal data. It covers what you paste into a chat window.

## Homework

Before Thursday, in groups: one deep research run from the brief. See [homework](homework.md).
