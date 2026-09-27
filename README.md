# UCYSS — UPTM Cybersecurity Student Society

Public website for UCYSS, the cybersecurity community within **Pixora**, the club of the Faculty
of Computing & Multimedia (FCOM), Universiti Poly-Tech Malaysia.

> UPTM → FCOM → Pixora → UCYSS

UCYSS is a peer-led learning community that meets most Wednesdays. A member volunteers to teach
something they learned recently; everyone else turns up to learn it. Members are assumed to
start with little or no prior knowledge — the community is built for beginners rather than
making an exception of them. We also field a CTF team that enters competitions together and
debriefs afterwards.

---

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7 |
| Styling | Tailwind CSS 4 (CSS-first, `@theme` tokens) |
| Type | IBM Plex Sans + IBM Plex Mono, self-hosted via Fontsource |
| Hosting | Cloudflare Pages |
| Content | Astro Content Collections (Markdown) |

The site ships **0 KB of external JavaScript** — no `.js` files at all. The only script is a
404-byte inline module that toggles the mobile nav. Please keep it that way; it is a deliberate
quality goal, not an accident.

## Running it locally

```bash
npm install

npm run dev      # dev server on http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve the built output
```

Astro 7 can also run the dev server detached:

```bash
npx astro dev --background     # start
npx astro dev status           # check
npx astro dev logs             # tail
npx astro dev stop             # stop
```

Requires Node 22.12.0+ (Astro 7's minimum). The local environment is Node v26.10.0.

## Editing the content

**`src/data/site.ts` is the file to edit for anything numeric or list-shaped** — the member
count, how many sessions have run, which CTFs we have entered, the session log in the hero, and
the archive index. It has a plain-language comment at the top explaining how, for someone with
no code experience.

You can edit it directly on GitHub: open the file, click the pencil, change the value, commit.
Nothing else needs touching anywhere on the site.

All design tokens — colour, type, spacing, motion — live in **`src/styles/global.css`**. No
component contains a raw hex value or a magic number.

## Structure

```
src/
  components/     Header, Footer, Wordmark, SessionLog
  data/site.ts    <- the editable data module
  layouts/Base.astro
  pages/          index.astro, about.astro
  styles/global.css   design tokens + base styles + custom utilities
public/logos/     the UCYSS, UPTM, FCOM and Pixora marks
```

`dist/`, `node_modules/`, `.astro/` and `.env` are generated or secret and are gitignored.
`dist/` and `.astro/` are safe to delete at any time; they regenerate.

## Contributing

Changes go through a pull request, not a straight push to `main`:

```bash
git switch -c <branch>
git add -A && git commit -m "..."
git push -u origin <branch>
gh pr create --fill
```

## Plan

**`PLAN.md` is the source of truth for this project** — art direction, the content model, the
decisions behind each choice and their reasoning, the roadmap, and the open items. Read it
before making design or content decisions; it explains not just what to do but why, including
approaches that were tried and rejected.
