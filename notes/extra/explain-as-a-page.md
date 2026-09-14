# Extra activity · Explain it as a web page

Ask the agent to explain something complicated, read the answer in the terminal, then ask for the same explanation as an artifact: a web page with a link, which you can open on any device and send to anyone.

## Before you start

- A terminal open in a folder on your Desktop, with the agent running in it. The `bpa347` folder is fine.

## Steps

1. Choose one of the two questions and paste it to the agent.
   *A card payment:*
   ```prompt
   Explain what happens to my 4 euros when I pay for a coffee with my card in the European Union. Cover every party the money passes through, every fee that is taken and who takes it, and how many days pass before the shop has the money in its account. Give the amounts in euros for a 4 euro coffee.
   ```
   *A car loan:*
   ```prompt
   I want to borrow 10,000 euros for a car, over 5 years, at 6 percent interest. Explain how the monthly payment is calculated, how each payment is split between interest and capital, how that split changes over the five years, and what I pay in total. Give the numbers.
   ```
2. Read the answer to the end. Then answer one question from memory, without scrolling back up: for the card payment, how much of your 4 euros the shop keeps; for the car loan, how much of your first payment is interest and how much of your last one.
3. Ask for the same explanation as an artifact.
   ```prompt
   Make an artifact that explains the same thing as a web page: a diagram for the steps, a table for the numbers. Someone who has not read this conversation must be able to follow it.
   ```
   The agent asks for permission to publish the page on claude.ai, private to you: answer yes. It prints a link, and your browser opens the page. If the browser does not open, copy the link into it. If the agent writes a file instead of giving you a link, artifacts are not available in your session: ask it to open the file in your browser, and go on.

   > [!WARNING]
   > **PLEASE NOTE:** On Codex, the terminal cannot publish a page. Ask instead for one single file called `explanation.html` in this folder, with everything inside that one file, then ask the agent to open it in your browser. In step 4, reload the file after the change. In step 5, send the file itself. Step 6 does not exist on Codex.
4. Read the page and ask for one change in your own words: something that is missing, too small, or in the wrong order. The agent publishes the page again at the same link. The page in your browser updates by itself; if it does not, reload it.
5. Share it. At the top of the page, click **Share**, choose to share the link publicly, and copy it. Anyone with the link can open the page, on a phone too, without a claude.ai account. Send the link to someone.
6. Close the browser tab. In the terminal, type `/artifacts`: it lists every page you have published. Press `o` to open one, `c` to copy its link. The same list is on the web, at [your artifacts on claude.ai](https://claude.ai/code/artifacts).

## 1. The same explanation, in two shapes

- The answer in the terminal and the page say the same thing, written by the same model from the same conversation.
- A page can show a diagram, a table, headings and colour. A terminal shows sentences, one after the other, however long the answer is.
- Which of the two you get is something you ask for. If you do not ask, you get sentences.
- A page costs more of your limit than the same explanation as text: the layout and the diagram are tokens too.

## 2. An artifact is a page with a link

- The agent writes the page and publishes it on claude.ai. You keep the link, not a file.
- A new artifact is visible only to you. Sharing it gives a public link: anyone who has it can open the page, without an account.
- When the agent changes the page, it publishes it again at the same link. Everyone who has the link sees the new version.
- `/artifacts` in the terminal lists every page you have published, from any session.

## Terms

- **Artifact**: a web page the agent publishes from your session to claude.ai, at a link. Private to you until you share it.
