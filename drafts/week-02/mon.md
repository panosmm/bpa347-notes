# Week 2 · Monday: How Language Models Work

What the model behind the agent is, why it sounds sure when it is wrong, and how to read your own usage.

## 1. How the model was made

| Stage | What happens | What it leaves behind |
|---|---|---|
| Pre-training | Reads a large part of the internet, learns to predict the next word | Knows a lot, up to a cutoff date. Nothing about you |
| Post-training | Taught to be an assistant from example conversations | Answers questions, follows instructions, applies the vendor's rules |
| Human ratings | Answers raters prefer are rewarded | Fluent, specific, confident, right or wrong |
| In use | System prompt, harness, your briefing, your message | The context window: the only stage you touch |

- The first three happened once, at the vendor, and are frozen. Everything you can change arrives through the context window.

> [!IMPORTANT]
> **KEY POINT:** Tone tells you nothing. A hallucination is a fluent, specific, wrong statement, produced the same way as a right one. Every number, name, date and source needs checking.

## 2. Model, chatbot, agent

- The model alone: text in, text out. Nothing else.
- A chatbot: the model plus a few fixed tools at the vendor: web search, file upload, a code runner, memory. Today's news comes in through a search, into the context window.
- An agent: the model plus tools on your machine, in a loop. It adds tools on demand: writes a program, installs a library. The wrapping is the harness.
- Asked how much a shop sold in one month, from a file of 541,909 rows, the agent wrote a program, ran it, and read the program's twenty lines of output. The file itself never entered the context window.
- claude.ai, the desktop app and Claude Code: same model, different harness, different results.

## 3. The context window

![The context window: system instructions, briefing files, the conversation so far, files the agent has read and your message go to the model, which returns an answer. Fixed size, re-sent in full with every message.](img/context-window.png)

- Everything the model can see when it answers. Nothing else exists for it.
- Fixed size, measured in tokens: about three quarters of an English word. Greek costs more tokens per word.
- Re-sent in full with every message. A long conversation costs more each time and answers worse.
- The same request gives different answers on purpose: the model picks among likely continuations at random. The same request on two laptops gives two different results.

## 4. Reading your own usage

| Command | What it does |
|---|---|
| `/usage` | How much of your Pro limit is used, and when it resets |
| `/context` | What fills the context window right now |
| `/statusline` | Sets up the bar at the bottom: model, folder, how full the context window is |
| `/model` | Which model answers. Left and right arrows set the effort level |

- Claude Code keeps your conversation ready for one hour after your last message. Within the hour the next message is cheap. After it, the whole conversation is paid for again.
- Rule: short conversations, one task each. Never leave a long one for tomorrow. Thursday shows the handoff.

> [!CAUTION]
> **Cost.** Stay on Sonnet at the default effort until week 7, when you can measure what the others cost.

## In class

1. Open a terminal in Thursday's folder (`bpa347` on the Desktop) and start the agent.
2. Set up the status line. It asks permission to write its settings file in your home folder: approve. The bar appears at the bottom after a moment.
   ```prompt
   /statusline show the model, the folder I am in, and how full the context window is, as a percentage
   ```
3. Look at what is in the context window before you have asked anything. Note the total.
   ```prompt
   /context
   ```
4. Ask one question about the data. It writes and runs a Python program; approve.
   ```prompt
   Which five countries outside the UK had the highest revenue in November 2025?
   ```
5. Look at the context window again and compare with step 3.
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

- **Pre-training**: the first stage, learning to predict the next word from a large part of the internet.
- **Post-training**: the later stages that turn the predictor into an assistant: example conversations, then human ratings (RLHF).
- **Token**: the unit the model reads and writes; about three quarters of an English word.
- **Context window**: everything the model can see when it answers. Fixed size; re-sent in full with every message.
- **Hallucination**: a fluent, specific, wrong statement, produced the same way as a right one.
- **Harness**: the program around the model: its tools, the loop, the permission prompts. A chat website is a small one; Claude Code is a large one on your machine.
- **Effort level**: how long the model thinks before answering. Higher costs more.

## Homework

Before Thursday: one read-only question to the agent about your own computer. See [homework](homework.md).
