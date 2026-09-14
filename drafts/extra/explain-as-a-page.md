# Extra activity · Explain it as a web page

Ask the agent to explain something complicated, read the answer in the terminal, then ask for the same explanation as a web page you can open and send to someone.

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
3. Ask for the same explanation as a web page. Approve the write.
   ```prompt
   Explain the same thing again, this time as a web page. Write one single file called explanation.html in this folder, with everything inside that one file: no separate files for style or code, and nothing loaded from the internet. Use a diagram for the steps and a table for the numbers. Someone who has not read this conversation must be able to follow it.
   ```
4. Open the page. If nothing happens, open the folder and double-click `explanation.html`.
   ```prompt
   Open explanation.html in my browser.
   ```
5. Read the page and ask for one change in your own words: something that is missing, too small, or in the wrong order. The agent writes the file again. Reload the page in the browser.
6. Move `explanation.html` to another folder and double-click it there. If it still looks right, everything is inside the one file, and it will look the same on someone else's computer. Send it to someone as an email attachment.

## 1. The same explanation, in two shapes

- The answer in the terminal and the web page say the same thing, written by the same model from the same conversation.
- A page can show a diagram, a table, headings and colour. A terminal shows sentences, one after the other, however long the answer is.
- Which of the two you get is something you ask for. If you do not ask, you get sentences.

## 2. One file, or it breaks

- A web page is usually several files: the page itself, a file for the style, a file for the code, pictures. Send only the page and the other person opens it with none of that.
- A page written as one single file, with nothing loaded from the internet, opens the same on any computer and on a phone.
- Moving the file to another folder and opening it there is the test: if it still looks right, everything is inside it.

## Terms

- **HTML file**: a web page stored as a file on your computer. Double-clicking it opens it in your browser. Nothing is installed, and nothing is downloaded from the internet.
