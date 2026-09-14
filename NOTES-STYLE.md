# Notes style: the closed vocabulary

Every file under `notes/` follows this. Nothing else is used. Read this before writing or editing a note.

## Files

- `notes/extra/*.md`: an extra activity, optional work for a student who has finished the session steps. Outside the week table, listed on its own on the index.
- `notes/week-NN/mon.md`, `thu.md`: session notes. `homework.md`: the week's homework. `img/`: screenshots, if any. `files/`: material for download (a memo, a report), linked from the page by its site URL.
- Filenames in English. Content in English; Greek appears only in the Terms list, in italics, where the classroom word differs.
- No front matter. The first line is the H1; the site takes its title from it.

## Session file: fixed section order

The page is read from the top, in the order the student lives it. Nothing above the steps may read as an instruction.

```
# Week N · Monday: Title

One line: what the session covers.

## Before class          (optional) bullets: where the student should be (what the homework left in the folder), and "do the homework first" if not
## In class              numbered steps, held by the hand; every command and prompt in a code block; the only place that says what to do
## 1. Topic              numbered H2s, after the steps: what the steps taught, as facts; at most 4 bullets, one fact per bullet; a table, a diagram or one callout where it replaces bullets
## 2. Topic
## Terms                 one line each: **Term**: definition
## Homework              one line + link to homework.md
## Example               (optional, last) our own worked files, linked by site URL, one bullet
```

Sections may be omitted where marked optional, never renamed or reordered. No other H2 names exist. (Until 13 Sep 2026 the topics came before In class; weeks 1 and 2 keep that order, live.)

`homework.md`: `# Week N · Homework` → `## Before Thursday D Month` / `## Before Monday D Month` (numbered lists; the deadline, always with the date) → `## Groups` (when it applies). No "what to bring" section: laptops are assumed.

## Extra activity file: fixed section order

```
# Extra activity · Title

One line: what you do and what you end up with.

## Before you start      bullets: what must already be on the machine
## Steps                 numbered, held by the hand; every prompt in a code block
## 1. Topic              after the steps: what the steps taught, as facts
## Terms                 (optional)
```

## Elements: everything that may appear

| Element | Markdown | Use for |
|---|---|---|
| Title | `# Week N · Day: Title` | once, first line |
| Section | `## …` | only the fixed names above + numbered topics |
| Sub-heading | `### …` | inside a long topic, at most 2–3; never deeper |
| Paragraph | text | only the one-line opener under the title; nowhere else |
| Bullets | `- item` | the default everywhere; one fact per bullet, at most two lines; one level, no nesting |
| Steps | `1. step` | In class and Homework only: things done in order |
| Command | ```` ```bash ```` | anything typed in the terminal, one command per block |
| Prompt | ```` ```prompt ```` | anything typed to the agent |
| File contents | ```` ```text ```` / ```` ```json ```` | showing a config file or a data sample |
| Callout | `> [!TYPE]` | the five types below; the only allowed blockquote |
| Table | `\| a \| b \|` | comparisons only, ≤ 4 columns, cells are phrases |
| Bold | `**term**` | a term on first definition; a UI label. Never for emphasis |
| Italic | `*word*` | emphasis, sparingly; titles of things |
| Inline code | `` `/statusline` `` | commands, filenames, keys, anything literal |
| Link | `[text](url)` | descriptive text; never a bare URL, never "here" |
| Image | `![alt](img/name.png)` | diagrams and screenshots in `week-NN/img/`; alt says what it shows; diagrams in the deck's palette, PNG at 2x |

## Callouts: five types, one role each

The role is the first bold word inside, always. A callout is 1–3 sentences; longer means it's a topic section.

```
> [!IMPORTANT]
> **KEY POINT:** The one idea to remember from this section, in one sentence.

> [!TIP]
> **Try it.** Do this now, on your machine. Contains a prompt or a command.

> [!WARNING]
> **PLEASE NOTE:** What goes wrong here and what it looks like when it does.

> [!CAUTION]
> **Cost.** This burns credits or the weekly limit.

> [!NOTE]
> **Aside.** Context, history, why it's called that. Skippable.
```

## Writing rules

- **Length: a session page has at most 400 words outside the In class steps.** Students do not read more. Slides carry the lecture; the page carries what they redo at home and what they are examined on.
- Blocks over prose: a table for anything with two or more columns of facts, a diagram (`img/`) for anything with a flow or layers, a callout for the one sentence to remember. Bullets for the rest.
- Facts only. Every bullet is something a student can act on, check, or be examined on.
- A topic bullet never tells the student to do something; it states what is so. Anything to do is a numbered step, and a topic that touches what happens in class points to the step ("step 4 below").
- Write for a reader with zero context: no course-internal shorthand, no instructor jokes, no metaphors that need the lecture to decode.
- Say it once. No restating, no summaries.
- No classroom logistics: pairing, timing, what to do if stuck, room practicalities. Those are handled in the room. Smaller handouts get read.
- Anything that applies to one side only starts with its label: `Windows:` / `Mac:` and `Claude Code:` / `Codex:`. Unlabelled lines apply to everyone.
- No em dashes (—). Use a colon, a comma, or a full stop.

## Banned

Emoji · horizontal rules (`---`) · raw HTML · bold-as-heading · nested bullets · headings deeper than H3 · checkbox lists · blockquotes without a type · tables of prose · mixed bullet/prose sections · "key takeaways" mid-section · summary paragraphs at the end of topics · arrows and symbols as prose (→ ✓ ✗ inside sentences) · section names not on the list.

## Placeholders

`TODO:` at the start of a line marks something the instructor must fill in (a link, a filename, a decision). Remove before the week is published.
