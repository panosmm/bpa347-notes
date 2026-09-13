# Week 3 · Thursday: Deep Research Agents

How to ask a research agent for the report you need, and how to check the report before you use it.

## Before class

- Your report from the homework, as `report1.md` in the `bpa347-week3` folder

## 1. The report answers the request you wrote

- A short request leaves everything else to the agent: which days, from which airport, where you sleep, how you move around, what you want to see, what the report is for. Everyone who sends the same short request gets much the same plan.
- Let the agent interview you before it searches. Answer its questions, take the request it writes, then run that request.
- An example, the same agent on the same trip: [report 1](https://bpa347-notes.vercel.app/week-03/files/rome-report-1.pdf) from the short request, [report 2](https://bpa347-notes.vercel.app/week-03/files/rome-report-2.pdf) from the request an interview wrote, and [the two reports compared](https://bpa347-notes.vercel.app/week-03/files/rome-comparison.pdf) by Claude Code.

> [!IMPORTANT]
> **KEY POINT:** A report that sounds good can still be wrong. Check it before you use it.

## 2. Checking your own report

- The same check as for a report someone gave you: does every source exist, does it say what the report says, is the claim a fact from the source or the writer's own explanation.
- A second agent can do the checking. It sends its objections to the first agent, which answers from the report and its sources. Where the two disagree, you decide.
- A good report says what it could not find, so you know what you still have to find out yourself. A report that says nothing about this looks complete and is not.

## In class

1. The interview. In claude.ai (Codex: chatgpt.com), start a new chat.
   ```prompt
   Before you research, interview me. Ask me one question at a time, everything you need to know, to write the full request for a deep research run on this: Plan a budget trip to Rome for me and a friend, 4 or 5 days in the week before Christmas. We have 600 euros each for everything. Decide everything else yourself. When you have enough, write the full request.
   ```
2. Answer its questions. When it writes the full request, copy that request. Start a new chat, click `+`, choose **Research** (Codex: **Deep research**), paste the request, send it. It runs for some minutes.
3. When it finishes, save the report as `report2.md` in the `bpa347-week3` folder, next to `report1.md`, the same way you saved `report1.md`: **Copy** under the report, then Notepad or TextEdit, save as `report2.md` (Codex: **Download**, **Markdown**, move and rename).
4. Save the request the interview wrote as `request.md` in the same folder, the same way. Then open a terminal in the `bpa347-week3` folder, start the agent and paste this:
   ```prompt
   Read request.md, report1.md and report2.md. Which report answers the request, and where does each one fall short of it? Where does each one say it could not find something? Which one would you use to book the trip, and why?
   ```
   Read both reports yourself and decide which one you will use. The agent's answer is advice, not the decision. The prompts in steps 6 and 7 say `report2.md`. If you chose report 1, type `report1.md` instead.
5. Two agents. Type `/exit` to close the agent. Open a second terminal in the `bpa347-week3` folder, so you have two terminals side by side. Start the agent in each one, with a name. In the first:
   ```bash
   claude --name author
   ```
   In the second:
   ```bash
   claude --name auditor
   ```
6. In the first terminal, the author, paste this:
   ```prompt
   Read report2.md. You are its author. A session on this laptop named auditor will send you objections. Answer each one from the report and its sources, and say plainly when an objection is right.
   ```
7. In the second terminal, the auditor, paste this:
   ```prompt
   Check report2.md: open every cited link and check that it exists and says what the report says; check every price, time and date. Then send all your objections in one message to the session named author and wait for its answers. Give me a table: objection, the author's answer, your verdict (holds / does not hold / cannot tell).
   ```
8. Read the auditor's table. In the author's terminal, a message from the auditor shows as one line; press `Ctrl+O` to see it in full. Where the author agreed with an objection, ask the author to correct the report. Where the two disagree, you decide.

## Terms

- **Research mode**: the setting in claude.ai or chatgpt.com that makes the model search the web and write a report with citations.
- **Citation**: the web page a claim points to, as a link. Two checks: does the link open, and does the page say what the report says.
- **Session name**: a name you give a Claude Code session when you start it, with `--name`, so another session on the same laptop can send it messages. `/list-agents` shows the sessions running on your laptop.

## Homework

Before Monday, on your own: check the report you chose, bring the three counts. See [homework](homework.md).
