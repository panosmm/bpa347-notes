# Week 3 · Homework

## Before Thursday 24 September

On your own: one run each.

TODO: confirm the question.

1. The question, exactly as written, nothing added:
   ```prompt
   Write a report on the future of tourism in Cyprus.
   ```
2. On claude.ai, start a new chat. Click the `+` button at the bottom left and choose **Research**. Paste the question and send it. Codex: on chatgpt.com, click `+` and choose **Deep research**. Before it starts, it will ask you what exactly you want. Reply "You decide, go ahead." This first report has to come from the question alone. It runs for some minutes. Wait for it to finish.
3. Save the report as `report1.md` in the `bpa347-week3` folder on the Desktop. Click **Copy** under the report. Windows: open Notepad and paste. **File**, **Save as**. Under "Save as type" choose "All files". File name `report1.md`, folder `Desktop\bpa347-week3`, **Save**. Mac: open TextEdit, new document. **Format**, **Make Plain Text**. Paste. **File**, **Save**. Name `report1.md`, folder `Desktop/bpa347-week3`, **Save**. If it asks about the extension, choose **Use .md**. Codex: on chatgpt.com click the share icon above the report, then **Download**, then **Markdown**. Move the file from Downloads into the folder and rename it `report1.md`.
4. Open a terminal in the `bpa347-week3` folder, start the agent and ask it:
   ```prompt
   List every place in report1.md where the report says it could not find something, or is not sure.
   ```
   Bring the list.

## Before Monday 28 September

1. Check the report you chose on Thursday, with the agent in the `bpa347-week3` folder. Put its file name in place of `report2.md`.
   ```prompt
   For every claim in report2.md that carries a number or a source: does the source exist, does it say what the report says, and is the claim a fact from the source or the writer's own reading? Answer as a table: claim, what the source says, verdict (holds / does not hold / cannot tell). Then two or three sentences on what you could not check and why.
   ```
2. Write down the counts: how many claims hold, how many do not, how many the agent could not tell. And the places where the report says it could not find something.
