# Week 3 · Thursday: Deep Research Agents

What a research agent does, why its citations need checking, and how to get a report you would hand your boss.

## Before class

- Your group's report from the homework, as `report1.md` in the `bpa347-week3` folder
- Your laptop

## 1. A research agent

- The model in a loop: search, read, take notes, search again, for minutes, then a report with citations. The research mode in claude.ai and chatgpt.com.
- It writes from what it remembers reading. Some sources say something else; some do not exist. Every citation is a claim to check.
- The report cannot list what it never found. Judge it by what it says it could not find.

## 2. The brief is the product

- A vague brief returns the internet's average report.
- Let the agent interview you first. It asks what it needs: for whom, what decision, what horizon, which sources, what format and language. Answer, take the brief it writes, then run it.
- The interview fills the five parts of a briefing: role and audience, goal and decision, constraints and format, materials, success criteria.

> [!IMPORTANT]
> **KEY POINT:** Which report would you hand your boss? The one whose checks you have seen.

## 3. Auditing a report

- Mechanical checks are the ground truth: every cited link opens and contains the claim, quotes are findable, dates are in range.
- "Does the source support the claim" is a second opinion. You still own it.
- A second agent can audit the first and send its objections across. The answers are yours to judge.

## In class

1. The interview. In claude.ai (Codex: chatgpt.com), start a new chat.
   ```prompt
   Before you research, interview me. Ask me what you need to know, one question at a time, to write a proper brief for a deep research run on this: Write a report on the future of tourism in Cyprus. When you have enough, write the brief.
   ```
2. Answer its questions. Start a research run with the brief it wrote. It runs for minutes.
3. When it finishes, save the report as `report2.md` in the `bpa347-week3` folder, next to `report1.md`.
4. Read both. Which would you hand your boss? The prompts below say `report2.md`; use the file you chose.
5. Two agents. Open two terminals in the `bpa347-week3` folder. In the first:
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
8. Read the exchange. A message from the other session shows as a one-line preview; `Ctrl+O` shows the full text. Objections the author concedes are corrections. The rest are yours to judge.

## Terms

- **Research mode**: an agent inside claude.ai or chatgpt.com that searches, reads, takes notes and searches again for minutes, then writes a report with citations.
- **Citation**: the source a claim points to. Two checks: does it open, does it say this.
- **Session name**: the name a Claude Code session answers to, set with `--name`. `/list-agents` shows the sessions running on your laptop.

## Homework

Before Monday, in groups: audit your own report, bring the tally. See [homework](homework.md).
