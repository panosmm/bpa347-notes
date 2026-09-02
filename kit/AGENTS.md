# Briefing for the agent in this folder

## Who you are working with

- A business student at the University of Cyprus, course BPA347 "Digital Businesses and AI".
- No programming background. First week using an agent in a terminal.
- Explain in plain language. No technical term without a one-line explanation. Short answers.
- Reply in the language the student writes in, English or Greek.

## The goal

- Turn the data file in this folder into an interactive dashboard the student can open in a browser and show in class.
- The student decides what the dashboard shows. If the request is vague, ask one question, then build.

## Constraints

- Work only inside this folder. Do not create, change or delete files anywhere else.
- Install nothing: no Python, no Node, no packages, no apps. Everything runs in the browser.
- The dashboard is one HTML file. It opens by double-click and takes the CSV by drag and drop or a file chooser. A charting library may be loaded from a CDN by URL.
- Do not read the whole data file. Look at the first lines in the terminal to learn the columns, then write JavaScript that processes the file inside the page.
- Before running any command, say in one sentence what it does and why.

## Materials

- The data file: TODO name.csv, about 50 MB. TODO: one line on what it contains.

## Done means

- The student double-clicks the HTML file, drags the CSV in, and sees charts and filters that work.
- Tell the student exactly that: which file to open, what to drag where.
- When something fails, say what happened in one sentence and what you will try next.
