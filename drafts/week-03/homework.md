# Week 3 · Homework

## Before Thursday 24 September

> [!WARNING]
> **PLEASE NOTE:** Steps 1 to 3 happen in your web browser, on the claude.ai website (Codex: the chatgpt.com website). Not in Claude Code, not in the terminal.

1. Go to claude.ai and start a new chat. Click the `+` button at the bottom left and choose **Research**. Paste this request exactly as it is, with nothing added, and send it. Codex: on chatgpt.com, click `+` and choose **Deep research**.
   ```prompt
   Plan a budget trip to Rome for me and a friend, 4 or 5 days in the week before Christmas. We have 600 euros each for everything. Decide everything else yourself.
   ```
2. The website will probably ask you questions before it starts. For this first report you give no more information: reply "You decide, go ahead." The research runs for some minutes. Wait for it to finish.
3. Save the report as a file named `report1.md` in the `bpa347-week3` folder on the Desktop. If you do not have that folder, make it. On claude.ai, click **Copy** under the report, then:

   Windows: open Notepad and paste. Click **File**, then **Save as**. Under "Save as type" choose **All files**. Under "File name" type `report1.md`. Go to the `bpa347-week3` folder on the Desktop and click **Save**.

   Mac: open TextEdit and click **New Document**. Click **Format**, then **Make Plain Text**. Paste. Click **File**, then **Save**. Type `report1.md` as the name, go to the `bpa347-week3` folder on the Desktop and click **Save**. When it asks which extension to use, click **Use .md**.

   Codex: chatgpt.com has a download instead. Click the share icon above the report, then **Download**, then **Markdown**. The file lands in your Downloads folder. Move it into the `bpa347-week3` folder on the Desktop and rename it `report1.md`.
4. Read Thursday's notes.

## Before Monday 28 September

1. Check the report you would use to book the trip, `report1.md` or `report2.md`. Open a terminal in the `bpa347-week3` folder, start the agent and paste this. The prompt says `report2.md`; if you are checking report 1, type `report1.md` instead.
   ```prompt
   For every claim in report2.md that carries a number, a date or a source: does the source exist, does it say what the report says, and is the claim a fact from the source or the writer's own explanation? Answer as a table: claim, what the source says, verdict (holds / does not hold / cannot tell). Then two or three sentences on what you could not check and why.
   ```
2. Count the verdicts: how many claims hold, how many do not hold, how many the agent could not tell. Bring the three numbers to class.
