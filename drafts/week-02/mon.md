# Week 2 · Monday: How Language Models Work

What the model behind the agent is, why it sounds sure when it is wrong, and how to read your own usage.

## Big picture

- How the model was made
- Why it sounds confident
- The context window
- Model and agent
- Reading your own usage

## 1. How the model was made

- A language model is a program that predicts the next piece of a text, trained on a large part of the internet.
- Training ends at a date, the cutoff. The model knows nothing after it, nothing about you, and keeps nothing between conversations.
- What it holds is a compressed recollection of what it read: patterns, not a copy. It cannot look anything up by itself.

## 2. Why it sounds confident

- After the first training, the model is trained again on human ratings of its answers. Answers people liked were rewarded.
- People like fluent, specific, confident answers. Confidence was trained in; it is not a sign that the model knows.
- Hallucination: a fluent, specific, wrong statement. Not a malfunction: the model produces plausible text, it does not check facts.
- Pushed with evidence, it often reverses itself just as confidently. Neither answer was knowledge.

> [!IMPORTANT]
> **KEY POINT:** Tone tells you nothing. Every number, name, date and source needs checking. Week 3 shows how.

## 3. The context window

- Token: the unit the model reads and writes, about three quarters of an English word. Greek takes more tokens per word than English.
- Context window: everything the model can see when it answers: the instructions, the briefing files, the conversation so far, the files it has read, your message. Its working memory and its whole world for that answer.
- The window has a fixed size. From today a bar at the bottom of your terminal shows how full it is.
- On every message the whole conversation is sent to the model again. A long conversation costs more with every message and answers worse, because irrelevant material dilutes.
- The same request twice gives two different answers. The model picks among likely continuations at random, on purpose. That is why one request produced a different app on every laptop.

## 4. Model and agent

- The model reads and writes text, nothing else. Claude Code wraps it in a loop with tools: read a file, run a command, write a file, and feeds each result back into the window. The wrapping is called the harness.
- On Thursday the agent did not read your CSV. It read the first lines, wrote a Python program, ran it, and read the program's output. The window held a few hundred lines, never 541,909.
- claude.ai, the desktop app and Claude Code use the same models. Same model, different harness, different results.

## 5. Reading your own usage

- Claude Pro has usage limits. `/usage` shows how much is used and when it resets.
- Claude Code keeps a copy of your conversation ready for one hour after your last message. Within the hour, the next message is cheap. After it, the next message pays for the whole conversation again.
- Rule: short conversations, one task each. Never leave a long one for the next day; Thursday shows the handoff.
- The status line: a bar at the bottom of the terminal, set up by the agent itself, showing the model, the folder and how full the window is.
- `/context`: what is filling the window right now: system instructions, tools, briefing files, the conversation.
- `/model`: which model answers. Sonnet is the default; larger models use more of your limit per message. The left and right arrows set the effort level, how long the model thinks before answering. `/effort` does the same.

> [!CAUTION]
> **Cost.** Stay on Sonnet at the default effort until week 7, when you can measure what the others cost.

## In class

1. Open a terminal in Thursday's folder (`bpa347` on the Desktop) and start the agent.
2. Set up the status line. It asks permission to write its settings file in your home folder: approve. The bar appears at the bottom after a moment.
   ```prompt
   /statusline show the model, the folder I am in, and how full the context window is, as a percentage
   ```
3. Look at what is in the window before you have asked anything. Note the total.
   ```prompt
   /context
   ```
4. Ask one question about the data. It writes and runs a Python program; approve.
   ```prompt
   Which five countries outside the UK had the highest revenue in November 2025?
   ```
5. Look at the window again and compare with step 3.
   ```prompt
   /context
   ```
6. Check the model. Sonnet should be selected. Move the arrows to see the effort levels, leave the default, press Escape.
   ```prompt
   /model
   ```
7. See how much of your limit is used.
   ```prompt
   /usage
   ```

## Terms

- **Language model**: a program that predicts the next piece of text, trained on a large part of the internet.
- **Token**: the unit the model reads and writes; about three quarters of an English word.
- **Context window**: everything the model can see when it answers. Fixed size; re-sent in full with every message.
- **Hallucination**: a fluent, specific, wrong statement, produced the same way as a right one.
- **Harness**: the program around the model: the tools, the loop, the permission prompts. Claude Code is one; the chat website is another.
- **Status line**: the bar at the bottom of the terminal showing model, folder and how full the window is.
- **Effort level**: how long the model thinks before answering. Higher costs more.

## Homework

Before Thursday: one read-only question to the agent about your own computer. See [homework](homework.md).
