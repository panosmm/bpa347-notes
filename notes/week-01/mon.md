# Week 1 · Monday — What this course is

By the end of this session you will have watched a working web app get built from nothing, in front of you, in under an hour — and you'll have its address on your phone. You won't be able to do it yourself yet. By Thursday you will have started.

## Big picture

- What the course is, and what it isn't
- The promises, in both directions
- The textbook is a subscription
- AI that builds, not AI that answers
- The stack, and why there is only one
- Homework that decides whether Thursday works

## 1. What the course is, and what it isn't

BPA347 used to be the information-systems course. It is now *Digital Businesses and AI*, and it has two halves. Weeks 1 to 7 are hands-on: you learn to use AI the way a business analyst or a management trainee will be expected to use it in 2027 — not by chatting, but by delegating work to an agent, checking what comes back, and signing your name to it. Weeks 8 to 13 keep the parts of the classic course that still matter: how digital businesses are structured, why IT projects fail, what a platform is, when technology is a competitive advantage and when it isn't.

The competency you leave with, in one sentence: *given a messy business problem, produce an AI-assisted analysis you're willing to sign, and a working prototype you can defend.*

What the course is not. It is not a programming course — you will not learn to write code, although you will watch a lot of it get written. It is not a "how to prompt ChatGPT" course; most of you can already do that, and it is where the course starts, not where it ends. And it is not a survey of AI products. You will use one set of tools, deeply, and understand why they work.

## 2. The promises, in both directions

From the instructor. Every session ends with you able to do something you could not do at ten o'clock — a file on your disk, a command you can run, a question you can now answer. Exams test what is in your head, not what your AI can produce; they are written on paper, without a laptop, and they are worth 75% of the grade for exactly that reason. Help is available in class and in office hours, and the tools are chosen so that help is possible: everyone uses the same ones.

From you. You will type into a black window with no buttons — a terminal — and for the first two weeks you will not fully understand what you are typing. You will pay for the tool (next section). You will bring your laptop to every session, charged. And you will show up: the hands-on half is built on doing, and a session you miss is a session you cannot read your way through.

This course is designed for few, motivated students rather than many passive ones. If that is not you, week 1 is the cheap time to leave. No hard feelings.

## 3. The textbook is a subscription

There is no textbook. Instead you buy two months of **Claude Pro**, about €40 in total, and that is your course material — the same way a Harvard coursepack would be. It has to be active by Thursday, because Thursday's session does not work without it.

Why paid, and why this one. The tool we use, **Claude Code**, has no free tier — there is no way around the subscription. Buy the *monthly* plan, not the annual one; remind yourself to cancel it in November. You will never be given an API key and you will never need one; when the course looks under the hood at how these tools are billed, the instructor uses his own.

> [!CAUTION]
> **Cost.** Pro is not unlimited: it is a weekly allowance that some ways of working burn far faster than others. Week 2 teaches you to read the meter. Until then: buy it, log in, and don't spend it.

## 4. AI that builds, not AI that answers

What you saw today: a typing-tutor app, built from an empty folder, with features shouted from the room, published to the internet, with a QR code on the screen — in under an hour, by someone who typed sentences, not code.

The thing that built it was an **agent**. The chat window you know produces text. An agent produces *actions*: it created files, ran programs, checked its own results, and put the app online. The model underneath is the same one you have been chatting with; the difference is that this one has hands. Week 2 explains the machinery. Today you only needed to see it.

> [!IMPORTANT]
> **Exam.** A chatbot produces text. An agent takes actions — it reads and writes files, runs programs, and loops until the job is done. Same model underneath; the difference is tools and a loop.

> [!TIP]
> **Try it.** Open the app on your phone (the address is in the homework). Beat your own score. Then notice what is missing from it — that gap is Thursday's material.

## 5. The stack, and why there is only one

Three tools, and no substitutions in class:

- **Claude Code** — the agent. It runs in a terminal on your laptop.
- **GitHub** — where work lives once it matters. You meet it in week 6.
- **Vercel** — where work gets published. Also week 6, and you saw it today.

One stack, because when thirty people install thirty different things, nobody can be helped. If you already use something else, keep using it at home; the concepts transfer, the recipes and the support don't.

Terminal, not the chat website and not the desktop app. The terminal is where the agent has hands — it can see your files and run programs there. Opening it is the whole trick, and it is one right-click: open a folder, right-click empty space, **Open in Terminal**. Everything else the agent will teach you itself.

> [!WARNING]
> **Trap.** "Claude" is three different products: the chat website (claude.ai), the desktop app, and Claude Code. We use Claude Code, in a terminal. Installing one of the other two on Thursday costs you the session.

## Takeaways

- The course teaches delegating work to an agent and standing behind the result, not chatting.
- The exam is 75% of the grade and is written without a laptop, because take-home work can be faked with AI.
- Claude Pro, monthly, active by Thursday, is the textbook; there is no free route.
- An agent differs from a chatbot by having tools and a loop, not by being a better model.
- One stack — Claude Code in a terminal, GitHub, Vercel — because shared tools are the only way help scales.

## Terms

- **Agent** — a model given tools and a loop, so it can act on files and programs rather than only produce text.
- **Terminal** — the text window where the agent runs; opened with right-click → Open in Terminal.
- **Deploy** — to publish an app to the internet so it has an address.
- **Claude Pro** — the paid subscription that gives access to Claude Code; the course's textbook.
- **Stack** — the fixed set of tools a course or a company standardises on.

## Homework

The load-bearing email: account, Pro, two downloads, the dataset — all before Thursday. See [homework](homework.md).
