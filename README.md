# BPA347 · Digital Businesses and AI — course notes

Course notes for BPA347 (ΔΕΔ347), University of Cyprus, Fall 2026. One folder per week, one markdown file per session, plus a homework file. The website at https://bpa347-notes.vercel.app is built from these files; the files are the source.

| Week | Title | Files |
|------|-------|-------|
| 01 | The hook and the hands | `notes/week-01/mon.md`, `thu.md`, `homework.md` |

## Using these notes with an agent

1. Download this repository as a zip (green **Code** button → **Download ZIP**) and unzip it.
2. Open the `notes` folder, right-click empty space → **Open in Terminal**, type `claude` (or start whichever agent you use).
3. Ask: *"Quiz me on week 1"*, *"What's due Thursday?"*, *"Explain the permission prompt again, with an example."*

The agent reads the files on demand. No setup file is needed; the folder and file names are the structure.

## For the instructor

- `notes/` — the content. `kit/` — the day-2 course kit (briefing, settings, data file), packed into `kit.zip` on every build with the files at the archive root. Everything else is site plumbing.
- `NOTES-STYLE.md` — the element vocabulary and file structure every note follows. Read it before writing or editing a note.
- `drafts/` — staging. Same layout as `notes/` (`drafts/week-NN/thu.md`). A page there is built only by `BUILD_DRAFTS=1 npm run build` (the local preview, marked *(draft)* in the index); the live site ignores it. To publish: `git mv drafts/week-NN/x.md notes/week-NN/x.md`, commit, push.
- Build: `npm install` once, then `npm run build` (output in `_site/`, live pages only) or `BUILD_DRAFTS=1 npm run build` for the preview with drafts.
