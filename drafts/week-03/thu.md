# Week 3 · Thursday: Deep Research Agents

How to ask a research agent for the report you need, and how to check the report before you use it.

## Before class

- From the homework you have `report1.md` in the `bpa347-week3` folder on the Desktop: a research agent's report on the Rome trip, written from the short request, with the web addresses of its sources inside.
- If you do not have it, do the [homework](homework.md) first.

## In class

1. The interview. Open claude.ai (Codex: chatgpt.com), start a new chat without Research, and paste this:
   ```prompt
   I am going to give a research agent this request: "Plan a budget trip to Rome for me and a friend, 4 or 5 days in the week before Christmas. We have 600 euros each for everything. Decide everything else yourself." Before I do, interview me instead: ask me one question at a time, and keep asking until you have covered everything that needs to be taken into account when planning this trip. Then write the full request as one message, ready to paste.
   ```
2. Answer the questions as yourself: your real dates, your airport, your budget, what you want to see. If it asks several questions at once, answer them all. If it writes the request before it has asked about something that matters for the trip, tell it, and let it write the request again. When you have the full request, copy it. Start a new chat, click the `+` in the box where you type and choose **Research** (Codex: **Deep research**), paste the request and send it. If it asks questions before it starts, answer them. It then searches for some minutes.
3. When it finishes, save the report as a file named `report2.md` in the `bpa347-week3` folder, next to `report1.md`, with the web addresses of its sources inside, as you did for `report1.md`: if you do not know how, ask in the same chat; open the file and look for `https://`; if the addresses are missing, ask for the list of sources and paste it at the end.
4. Which report is more useful? Open a terminal in the `bpa347-week3` folder, start the agent and paste this:
   ```prompt
   Read report1.md and report2.md. Both were written for the same two people, who want to book a budget trip to Rome. Which report is more useful to the people who asked for it, and why? What is wrong or missing in each one? Where does each one say it could not find something?
   ```
   While the agent works, read parts of both reports for a few minutes. The prompt in step 5 says `report2.md`; if the agent picked report 1, type `report1.md` instead.
5. Check that report. Paste this, then read the table:
   ```prompt
   For every claim in report2.md that carries a number, a date or a source: does the source exist, does it say what the report says, and is the claim a fact from the source or the writer's own explanation? Answer as a table: claim, what the source says, verdict (holds / does not hold / cannot tell). Then two or three sentences on what you could not check and why.
   ```

## 1. From a short request to a full request

- The homework request was short: a city, a budget, roughly when, and "decide everything else yourself". So the research agent decided the rest: which days, from which airport, where you sleep, how you get around, what you see. Everyone who sends that request gets much the same plan.
- The full request said those things, because the interview asked you about them. So the second report is about your trip, not about a trip.
- The check is the same for a report you asked for and for one someone handed you: every claim against its source, three verdicts. A report that says what it could not find tells you what you still have to find out yourself.

> [!IMPORTANT]
> **KEY POINT:** Whatever you leave out of the request, the research agent decides for you.

## Terms

- **Research agent**: what claude.ai calls Research and chatgpt.com calls Deep research. The model searches the web for some minutes, reads the pages it finds and writes a report with links to its sources.
- **Citation**: the report's word for a source: the web page a claim points to, as a link.

## Homework

Before Monday, on your own: the agent's table for the report it picked, complete; count the verdicts; bring the three numbers. See [homework](homework.md).

## Example

- The same research agent on the same trip: [report 1](https://bpa347-notes.vercel.app/week-03/files/rome-report-1.pdf) from the short request, [report 2](https://bpa347-notes.vercel.app/week-03/files/rome-report-2.pdf) from the full request written after an interview, and [which of the two is more useful](https://bpa347-notes.vercel.app/week-03/files/rome-comparison.pdf), answered by the agent with the prompt of step 4.
