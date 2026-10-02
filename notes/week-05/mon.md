# Week 5 · Monday: Build Slides with Your Agent (5/10)

Your Rome report plans a trip for two friends. Today you turn it into a short presentation, so that the two friends can decide whether to book the trip. The agent writes a program that builds the slides, and three agents review them.

## Before class

You need `report2.md` in the `bpa347-week3` folder on your Desktop. If you do not have it, do steps 1 to 4 of [Week 4 Monday](https://bpa347-notes.vercel.app/week-04/mon/) first.

## In class

> [!NOTE]
> **Aside.** Here the agent uses Python to make the slides. Agents can also make slides in other ways, for example as a web page.

### Part 1: Build the slides

1. Make a folder on the Desktop named `bpa347-week5`, open a terminal there and start the agent.
2. Copy the report into the new folder:
   ```prompt
   Copy report2.md from the bpa347-week3 folder on my Desktop into this folder.
   ```
3. Ask the agent what goes on the slides:
   ```prompt
   Read report2.md. Two friends will decide from a short presentation whether to book this trip. What do they need to know to decide? Answer in five bullets.
   ```
   Keep the points you agree with, drop the others, add what is missing.
4. Build the slides. Put your points from step 3 where it says so:
   ```prompt
   Write a Python script named make_slides.py that builds trip.pptx: at most six slides for the two friends, from report2.md, with one table or chart of the costs. The slides must cover these points: [your points]. Install any Python library you need. Then run the script.
   ```
   If the agent asks to install a Python library, allow it.
5. Open `trip.pptx` and look at every slide. Ask the agent for specific changes: which slide, what is wrong, what you want instead. Open the file again and check.
   > [!WARNING]
   > **PLEASE NOTE:** Windows: close `trip.pptx` before the agent runs the script again. The script cannot replace a file that is open.
6. Open `trip.pptx` in PowerPoint, change a few words on one slide, save and close it. Then:
   ```prompt
   I changed a few words in trip.pptx myself. Find what I changed and update make_slides.py so that it makes the same file. Then run the script and check that my change is still there.
   ```

### Part 2: Review the slides with an agent council

7. Before you go on, look at what you have. The `bpa347-week5` folder holds `report2.md`, `make_slides.py` and `trip.pptx`. The script builds the slides, and your own change from step 6 is in it. From now on, every change to the slides is a change to the script.
8. Start the agent council:
   ```prompt
   Use three subagents to review trip.pptx, each on its own, without seeing the other reviews: one is the friend who pays and wants to know the total cost, one doubts the plan and looks for what could go wrong, one checks every number on the slides against report2.md. Run them in the background. When they finish, put their reviews together into one list of at most four changes, most important first, one short line each. Do not change anything yet.
   ```
   While the council works, ask the agent to choose the reviewers for next time:
   ```prompt
   Two friends will decide from six slides whether to book a budget trip to Rome. For a future agent council on these slides, which three other reviewers would you choose, and why? One line each.
   ```
   If the agent does not answer until the council has finished, ask the same question at claude.ai (Codex: chatgpt.com).
9. Choose the changes you agree with and ask for them, for example:
   ```prompt
   Make changes 1 and 3 from the list, then run the script again.
   ```
   Open the file and check.

## 1. A script that makes the file

- The agent wrote a program, `make_slides.py`, and the program made `trip.pptx`.
- To change the slides, the agent changes the script and runs it again. A change you make by hand in `trip.pptx` is lost at the next run, unless it is also in the script (step 6).

> [!IMPORTANT]
> **KEY POINT:** The script is the master file. Bring every change made by hand back into it.

## 2. An agent council

- A subagent starts with a fresh context window, so it sees only what is on the slides, as the friends will.
- Each reviewer has one point of view and works on its own, so the reviewers find different problems.
- Choosing good reviewers is hard. An AI is good at it: describe the work and its readers, and ask.
- You decide which changes go in.

## Terms

- **Script**: a short program that does one job, here making a file.
- **Master file**: the file you change and keep. Here it is the script, not the `.pptx` it makes.
- **Agent council**: agents that review the same work separately, each from one point of view.

## Homework

Before Thursday 8 October: install Git with your agent, and hand in `make_slides.py`. See [homework](homework.md).
