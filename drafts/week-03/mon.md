# Week 3 · Monday: Verifying AI Output

A polished answer can be wrong. Two kinds of check, three verdicts, and what to do with a report too big to check.

## Before class

- Your laptop, with the `bpa347` folder from week 1

## 1. Fluent is not right

- Three kinds of error: invented facts (numbers, sources, quotes, names, dates); wrong reasoning on right facts; a right answer to a question you did not ask.
- Errors hide in anything specific. The tone never changes: right and wrong read exactly alike.

> [!IMPORTANT]
> **KEY POINT:** Only a check tells right from wrong. You sign what you hand over, so hand over only what you have checked.

## 2. Two kinds of check

| Mechanical: the agent does them | Judgment: you do them |
|---|---|
| Does the source exist? | Is the conclusion warranted? |
| Is the quote on the page? | Is this the right question? |
| Does the arithmetic add up? | Would I sign this? |
| Are the dates in range? | |

## 3. Three verdicts

| Verdict | Meaning |
|---|---|
| Holds | The source exists and says it |
| Does not hold | The source says otherwise, or nothing says it |
| Cannot tell | The source will not open; nobody can prove a negative; the writer's own reading |

- Most of a real report holds. The work is in the third row.
- A grey area the report names is not a failure. One it hides is.

## 4. Checking a big report

- To check it all, you redo it. Otherwise you check portions, and say what you did not check.

| Check | What it takes |
|---|---|
| Links alive | All of them; the agent writes a script |
| Keywords there | Twenty links: does the page say what the report says it does? |
| Claims to the source | One portion, every claim, the three verdicts |
| Completeness | One question researched again from zero |

## 5. Data discipline

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
- **Completeness**: whether a report found what there was to find. It cannot list what it missed, so the only check is researching the question again.
- **GDPR**: the EU law on personal data. It covers what you paste into a chat window.

## Homework

Before Thursday, in groups: one deep research run from the brief. See [homework](homework.md).
