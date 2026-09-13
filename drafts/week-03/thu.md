# Week 3 · Thursday: Deep Research Agents

How to ask a research agent for the report you need, and how to check the report before you use it.

## Before class

- Your report from the homework, as `report1.md` in the `bpa347-week3` folder

## 1. The report answers the request you wrote

- The homework request was short: a city, a budget, roughly when, and "decide everything else yourself". So the agent decided the rest: which days, from which airport, where you sleep, how you get around, what you see. Everyone who sends that request gets much the same plan.
- Before it searches, the agent can interview you. It asks what it needs to know, one question at a time, and then writes the full request as its last message. You copy that request and start the research with it.
- An example, the same agent on the same trip: [report 1](https://bpa347-notes.vercel.app/week-03/files/rome-report-1.pdf) from the short request, [report 2](https://bpa347-notes.vercel.app/week-03/files/rome-report-2.pdf) from the full request it wrote after the interview, and [the two reports compared](https://bpa347-notes.vercel.app/week-03/files/rome-comparison.pdf) by Claude Code.

> [!IMPORTANT]
> **KEY POINT:** Whatever you leave out of the request, the agent decides for you.

## 2. Checking your own report

- The check is the same as for a report someone else wrote: does every source exist, does it say what the report says, and is the claim a fact from the source or the writer's own explanation.
- A second agent can do the check. It sends its objections to the first agent, which answers from the report and its sources. Where the two disagree, you decide.
- A good report says what it could not find, so you know what you still have to find out yourself. A report that never says this also has things it could not find; you just do not know which.

## In class

1. The interview. Open claude.ai (Codex: chatgpt.com), start a new chat and paste this:
   ```prompt
   I am going to give a deep research agent this request: "Plan a budget trip to Rome for me and a friend, 4 or 5 days in the week before Christmas. We have 600 euros each for everything." Before I do, interview me: ask me one question at a time, everything you need to know to write the full request. When you have enough, write the full request as one message, ready to paste.
   ```
2. Answer the questions. When the agent writes the full request, copy it. Start a new chat, click `+` and choose **Research** (Codex: **Deep research**), paste the request and send it. It runs for some minutes.
3. While it runs, save the request. Go back to the interview chat and click **Copy** under the agent's last message. Save it as `request.md` in the `bpa347-week3` folder. Windows: paste into Notepad, click **File**, then **Save as**, choose **All files** under "Save as type", type `request.md` as the file name, go to the folder and click **Save**. Mac: open TextEdit, click **Format**, then **Make Plain Text**, paste, click **File**, then **Save**, type `request.md` as the name, go to the folder, click **Save**, then **Use .md**.
4. When the research finishes, save the report as `report2.md` in the same folder, the same way. Codex: click the share icon above the report, then **Download**, then **Markdown**; move the file from Downloads into the folder and rename it `report2.md`.
5. Which report answers the request? Open a terminal in the `bpa347-week3` folder, start the agent and paste this:
   ```prompt
   Read request.md, report1.md and report2.md. Which of the two reports answers the request in request.md, and where does each one fall short of it? Where does each one say it could not find something? Which one would you use to book the trip, and why?
   ```
   Then read both reports yourself and decide which one you will use. The agent's answer is advice. The prompts below say `report2.md`; if you chose report 1, type `report1.md` instead.
6. Two agents. Type `/exit`. Open a second terminal in the same folder. Start the agent in the first terminal with the name author, and in the second with the name auditor:
   ```bash
   claude --name author
   ```
   ```bash
   claude --name auditor
   ```
   Codex: the exchange between two sessions is for Claude Code. Start `codex` in one terminal, paste this and read the table:
   ```prompt
   Check report2.md: open every cited link and check that it exists and says what the report says; check every price, time and date. Answer as a table: claim, what the source says, verdict (holds / does not hold / cannot tell).
   ```
7. In the author's terminal, paste this:
   ```prompt
   Read report2.md. You are its author. A session on this laptop named auditor will send you objections. Answer each one from the report and its sources, say plainly when an objection is right, and send your answers to the auditor in one message.
   ```
8. In the auditor's terminal, paste this:
   ```prompt
   Check report2.md: open every cited link and check that it exists and says what the report says; check every price, time and date. Then send all your objections in one message to the session named author and wait for its answers. Give me a table: objection, the author's answer, your verdict (holds / does not hold / cannot tell).
   ```
9. Read the auditor's table. In the author's terminal, a message from the auditor shows as one line; press `Ctrl+O` to see it in full. Where the author agreed with an objection, ask the author to correct the report. Where the two disagree, you decide.

## Terms

- **Research mode**: the setting in claude.ai or chatgpt.com that makes the model search the web for some minutes and write a report with citations.
- **Citation**: the web page a claim points to, as a link. Two checks: does the link open, and does the page say what the report says.
- **Session name**: a name you give a Claude Code session when you start it, with `--name`, so that another session on the same laptop can send it messages. `/list-agents` shows the sessions running on your laptop.

## Homework

Before Monday, on your own: check the report you would use, with the agent, and bring the three counts. See [homework](homework.md).
