# Week 3 · Thursday: Deep Research Agents

How to ask a research agent for the report you need, and how to check the report before you use it.

## Before class

- Your report from the homework, as `report1.md` in the `bpa347-week3` folder

## 1. From a short request to a full request

- From the homework you have `report1.md`: the research agent's report from a short request. The request said a city, a budget, roughly when, and "decide everything else yourself".
- So the research agent decided the rest: which days, from which airport, where you sleep, how you get around, what you see. Everyone who sends that request gets much the same plan.
- For the second report, you first let the website interview you in an ordinary chat, without Research: it asks one question at a time, and keeps asking until it has covered everything that needs to be taken into account when planning the trip. Its last message is the full request, and that is what you give to the research agent.
- An example, the same research agent on the same trip: [report 1](https://bpa347-notes.vercel.app/week-03/files/rome-report-1.pdf) from the short request, [report 2](https://bpa347-notes.vercel.app/week-03/files/rome-report-2.pdf) from the full request written after an interview, and [which of the two is more useful](https://bpa347-notes.vercel.app/week-03/files/rome-comparison.pdf), answered by the agent.

> [!IMPORTANT]
> **KEY POINT:** Whatever you leave out of the request, the research agent decides for you.

## 2. Once both reports are in the folder

- Ask the agent, in the terminal, which report is more useful to the people who asked for it, and why. The agent decides; you read parts of both reports so that you know what it is talking about.
- Check the report the agent picked, claim by claim, the same check as for a report someone else wrote: does the source exist, does it say what the report says, is the claim a fact from the source or the writer's own explanation. Verdict: holds, does not hold, cannot tell.
- Count the verdicts: how many claims hold, how many do not hold, how many the agent could not tell. Bring the three numbers on Monday.

## In class

1. The interview. Open claude.ai (Codex: chatgpt.com), start a new chat without Research, and paste this:
   ```prompt
   I am going to give a research agent this request: "Plan a budget trip to Rome for me and a friend, 4 or 5 days in the week before Christmas. We have 600 euros each for everything. Decide everything else yourself." Before I do, interview me instead: ask me one question at a time, and keep asking until you have covered everything that needs to be taken into account when planning this trip. Then write the full request as one message, ready to paste.
   ```
2. Answer the questions as yourself: your real dates, your airport, your budget, what you want to see. When it writes the full request, copy it. Start a new chat, click the `+` in the box where you type and choose **Research** (Codex: **Deep research**), paste the request and send it. If it asks questions before it starts, answer them. It then searches for some minutes.
3. When it finishes, save the report as `report2.md` in the `bpa347-week3` folder, next to `report1.md`. Under the report, point at the row of small icons and click the one that says **Copy**. Then:

   Windows: open Notepad and paste. Click **File**, then **Save as**. Under "Save as type" choose **All files**. Under "File name" type `report2.md`. On the left click **Desktop**, open the `bpa347-week3` folder, and click **Save**.

   Mac: open TextEdit and click **New Document**. Click **Format**, then **Make Plain Text**. Paste. Click **File**, then **Save**. Type `report2.md` as the name, choose **Desktop** under Where, and click **Save**. When it asks which extension to use, click **Use .md**. Then drag `report2.md` from the Desktop into the `bpa347-week3` folder.

   Codex: click the share icon above the report, then **Download**, then **Markdown**. Move the file from Downloads into the `bpa347-week3` folder and rename it: on Windows type `report2` (the `.md` ending is hidden and stays), on a Mac type `report2.md`.
4. Which report is more useful? Open a terminal in the `bpa347-week3` folder, start the agent and paste this:
   ```prompt
   Read report1.md and report2.md. Both were written for the same two people, who want to book a budget trip to Rome. Which report is more useful to the people who asked for it, and why? What is wrong or missing in each one? Where does each one say it could not find something?
   ```
   While the agent works, read parts of both reports for a few minutes. The prompt in step 5 says `report2.md`; if the agent picked report 1, type `report1.md` instead.
5. Check that report. Paste this, then read the table:
   ```prompt
   For every claim in report2.md that carries a number, a date or a source: does the source exist, does it say what the report says, and is the claim a fact from the source or the writer's own explanation? Answer as a table: claim, what the source says, verdict (holds / does not hold / cannot tell). Then two or three sentences on what you could not check and why.
   ```

## Terms

- **Research agent**: what claude.ai calls Research and chatgpt.com calls Deep research. The model searches the web for some minutes, reads the pages it finds and writes a report with links to its sources.
- **Citation**: the report's word for a source: the web page a claim points to, as a link.

## Homework

Before Monday, on your own: the agent's table for the report it picked, complete; count the verdicts; bring the three numbers. See [homework](homework.md).
