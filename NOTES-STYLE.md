# Notes style: the closed vocabulary

Every file under `notes/` follows this. Nothing else is used. Read this before writing or editing a note.

## Files

- `notes/week-NN/mon.md`, `thu.md`: session notes. `homework.md`: the week's homework. `img/`: screenshots, if any.
- Filenames in English. Content in English; Greek appears only in the Terms list, in italics, where the classroom word differs.
- No front matter. The first line is the H1; the site takes its title from it.

## Session file: fixed section order

```
# Week N · Monday: Title

One line: what the session covers.

## Before class          (optional) bullets: what to have done / bring
## Big picture           (omit with fewer than 3 topics) 3–6 bullets, topic names only
## 1. Topic              numbered H2s, one per topic; bullets only, one fact per bullet
## 2. Topic
## In class              (optional) numbered steps; every command and prompt in a code block
## Terms                 one line each: **Term**: definition
## Homework              one line + link to homework.md
```

Sections may be omitted where marked optional, never renamed or reordered. No other H2 names exist.

`homework.md`: `# Week N · Homework` → `## Before Thursday D Month` / `## Before Monday D Month` (numbered lists; the deadline, always with the date) → `## Groups` (when it applies). No "what to bring" section: laptops are assumed.

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
| Image | `![alt](img/name.png)` | screenshots in `week-NN/img/`; alt says what it shows |

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

- Facts only. Every bullet is something a student can act on, check, or be examined on.
- Write for a reader with zero context: no course-internal shorthand, no instructor jokes, no metaphors that need the lecture to decode.
- Say it once. No restating, no summaries.
- No classroom logistics: pairing, timing, what to do if stuck, room practicalities. Those are handled in the room. Smaller handouts get read.
- Anything that applies to one side only starts with its label: `Windows:` / `Mac:` and `Claude Code:` / `Codex:`. Unlabelled lines apply to everyone.
- No em dashes (—). Use a colon, a comma, or a full stop.

## Banned

Emoji · horizontal rules (`---`) · raw HTML · bold-as-heading · nested bullets · headings deeper than H3 · checkbox lists · blockquotes without a type · tables of prose · mixed bullet/prose sections · "key takeaways" mid-section · summary paragraphs at the end of topics · arrows and symbols as prose (→ ✓ ✗ inside sentences) · section names not on the list.

## Placeholders

`TODO:` at the start of a line marks something the instructor must fill in (a link, a filename, a decision). Remove before the week is published.
