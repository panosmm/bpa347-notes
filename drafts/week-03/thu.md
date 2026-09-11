# Week 3 · Thursday: Deep Research Agents

What a research agent does, how to ask it for the report you need, and how to check the report before you hand it in.

## Before class

- Your report from the homework, as `report1.md` in the `bpa347-week3` folder
- Your laptop

## 1. A research agent

- The model in a loop: it searches the web, reads the pages it finds, takes notes, and searches again for what is still missing. Minutes for a short question, hours for a long report.
- What comes back is a report with citations. Every citation is a link.
- Whether the page says what the report says, you still have to check.

## 2. The report answers the question you asked

- A one-line question leaves everything else to the agent: for whom, for what decision, which years, which sources, how long. What comes back is a general report, the same for everyone who asks.
- Let the agent interview you before it searches. Answer its questions, take the request it writes, then run that.
- These are the same five parts as a briefing file: role and audience, goal and decision, constraints and format, materials, success criteria.

> [!IMPORTANT]
> **KEY POINT:** Hand your boss the report you have checked, not the one that reads best.

## 3. Checking your own report

- The same check as for a report you were handed: does every source exist, does it say what the report says, is the claim a fact or the writer's own reading.
- A second agent can do the checking and send its objections to the first, which answers from the report and its sources. Where the two disagree, you decide.
- A report that says what it could not find can be used. One that hides it cannot.

## In class

1. The interview. In claude.ai (Codex: chatgpt.com), start a new chat.
   ```prompt
   Before you research, interview me. Ask me one question at a time, everything you need to know, to write the full request for a deep research run on this: Write a report on the future of tourism in Cyprus. When you have enough, write the full request.
   ```
2. Answer its questions. Start a research run with the request it wrote: click `+`, choose **Research** (Codex: **Deep research**), paste the request, send it. It runs for some minutes.
3. When it finishes, save the report as `report2.md` in the `bpa347-week3` folder, next to `report1.md`, the same way as `report1.md`.
4. Read both. Which one would you hand your boss? The prompts below say `report2.md`; put the name of the file you chose.
5. Two agents. Open two terminals in the `bpa347-week3` folder and start the agent in each, with a name. In the first:
   ```bash
   claude --name author
   ```
   In the second:
   ```bash
   claude --name auditor
   ```
6. In the first terminal, the author.
   ```prompt
   Read report2.md. You are its author. A session on this laptop named auditor will send you objections. Answer each one from the report and its sources, and say plainly when an objection is right.
   ```
7. In the second terminal, the auditor.
   ```prompt
   Audit report2.md: open every cited link and check that it exists and says what the report says; check every number. Then send all your objections in one message to the session named author and wait for its answers. Give me a table: objection, the author's answer, your verdict (holds / does not hold / cannot tell).
   ```
8. Read the messages. A message from the other session shows as one line; press `Ctrl+O` to see the whole message. Where the author agrees with an objection, correct the report. Where the two disagree, you decide.

## Terms

- **Research mode**: the setting in claude.ai or chatgpt.com that makes the model search the web and write a report with citations.
- **Citation**: the web page a claim points to, as a link. Two checks: does the link open, and does the page say what the report says.
- **Session name**: the name a Claude Code session answers to, set with `--name`. `/list-agents` shows the sessions running on your laptop.

## Homework

Before Monday, on your own: check your report, bring the counts. See [homework](homework.md).
