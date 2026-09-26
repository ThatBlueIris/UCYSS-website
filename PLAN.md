# UCYSS Website — Master Plan & To-Do

> **What this file is:** the single source of truth for this project. It is self-contained on
> purpose — you can hand it to another developer, another AI model, or a future committee
> member and they will have everything they need. Decisions are recorded *with their
> rationale* so they don't get relitigated by accident.
>
> **Status:** planning complete, awaiting kickoff
> **Last updated:** 2026-09-26
> **Repo location:** `~/Documents/UCYSS_Website` (this folder)

---

## 0. Quick reference

| | |
|---|---|
| **Project** | Public website for UPTM Cybersecurity Student Society (UCYSS) |
| **Goal** | Make UCYSS well known among UPTM students, other universities, and the wider security community |
| **Type** | Public presence + knowledge archive (NOT primarily a recruitment funnel) |
| **Stack** | Astro + Tailwind CSS + Markdown content collections + GitHub + Cloudflare Pages |
| **Language** | English only (BM fields reserved in schema for later) |
| **Theme** | Dark only. Light mode added later — cheap because the palette is token-based |
| **Deploy** | `ucyss.pages.dev` (free). Custom domain later when funded |
| **Owner** | You (Web Lead) — needs formalising as a committee role |

---

## 1. Project context (read this before touching anything)

### 1.1 Who UCYSS is

UCYSS is a **student community** at Universiti Poly-Tech Malaysia (UPTM) focused on
cybersecurity. We run technical activities: capture-the-flag labs, hands-on security
workshops, digital forensics, OSINT, and we attend industry cybersecurity conventions.

> **⚠ SUPERSEDED 2026-09-27 — the paragraph above misrepresents the society and its framing
> has been rejected by the owner. Do not use it.**
>
> It reads as though forensics and OSINT are what UCYSS *is*. They are not. They are two of
> many topics that happen to have come up at meetups. The framing made two incidental subjects
> look like an identity, and it hid the thing that actually makes the society worth joining.
>
> **The corrected model is in §1.4. Build all copy from that, not from the paragraph above.**

### 1.2 The Pixora / FCOM relationship — read carefully

UCYSS is **not a separate club**. It is the cybersecurity-focused community within
**Pixora**, the official club of the **Faculty of Computing & Multimedia (FCOM), UPTM**.

```
UPTM
└── Faculty of Computing & Multimedia (FCOM)
    └── Pixora  — the official FCOM club. Broad computing community, events, welfare.
        └── UCYSS  — cybersecurity focus group. Weekly peer-taught sessions, a CTF team.
```

**Positioning line:** *"Pixora is our home. UCYSS is where we go deep on security."*

> **⚠ The positioning line is superseded** (2026-09-27). "Go deep on security" frames UCYSS
> as a specialisation track for people who are already good at security — the exact opposite
> of who actually turns up, which is beginners. It is also what produced the "forensics and
> OSINT are our thing" misreading. Replaced by the peer-led-learning framing in §1.4.
>
> The **institutional hierarchy above is still correct and still required.** Only the
> positioning line changed.

**Critical:** never present UCYSS as a rival to, or a replacement for, Pixora. We cannot
create a new club, and FCOM only has Pixora. Framing UCYSS as a Pixora focus group is both
accurate and diplomatically correct.

**Free credibility:** display a small "under the umbrella of" lockup (UPTM → FCOM → Pixora)
in the footer and on the About page. Borrowed institutional credibility is legitimate
credibility — it answers "are these people real?" instantly.

### 1.3 Existing material we can reuse

Real content already exists in `~/Documents/UCYSS` and should seed the site. This is a
genuine advantage — most society sites have nothing.

| Source | Becomes |
|---|---|
| `UCYSS OSINT.pdf` (Arif Abd Kahar) | A proper writeup/article page — not a PDF download |
| `HTB_Meeting_Minutes_5Aug.docx` | Events entry for the HTB meetup |
| `HTB Meetup_ UPTM Participants List.csv` (~41 attendees at that one meetup) | Historical record. **Not** the member count — see below |
| `Digital Forensics/*.pcap`, `Steganography/images.jpg` | "Intro to Digital Forensics" writeup |
| `CYBERDSA Proposal.docx` | Events entry for CyberDSA 2026 (MITEC). **Attendance figures removed from public copy** |
| Media team photos (Instagram, LinkedIn, Drive) | Gallery albums |
| `TemplatePostReport.docx` | Reference for event recap structure |

### 1.4 What UCYSS actually does — the corrected model

**Source: owner's own description, 2026-09-27. This is the authoritative account. Everything on
the public site should be written from this section.**

**UCYSS is a peer-led learning community that meets almost every week.** Not a forensics lab,
not an OSINT group, not a CTF team first. The type of community it is:

- **The core unit is a member-led sharing session.** One member volunteers to teach something
  they recently learned. There is no teacher, no curriculum, no syllabus. Topics change weekly
  and are deliberately varied so nobody arrives already knowing what the week covers.
- **Real topics already covered:** OSINT · web exploitation using Burp Suite · Linux for
  beginners.
- **Beginner-first by design, not as a courtesy.** Members are assumed to start with little or
  no prior cybersecurity knowledge, and the community is deliberately built so that people
  teach each other up. A first-year with no background is the *expected* attendee, not an
  exception being made.
- **CTF is encouraged and coordinated.** UCYSS fields its own team and members compete
  together rather than alone.
- **SunCTF is backed by the university** (transportation funding). Other CTFs are entered
  self-funded, with no university ask.
- **CTFs entered so far:** Bahtera CTF · Maltego OSINT CTF · Nadi CTF.
- **Post-CTF debriefs happen when requested.** The team gets together to walk through how
  flags were obtained, the methods, the steps. This is a team culture, not a document.
- **Conventions and external meetups**, not only CyberDSA. Attendance is broader than one
  event.

**The differentiator is the model, not the topics.** "Everyone teaches everyone, beginners are
genuinely welcome, we compete as a team" is the pitch. The topics are *evidence* that the model
works, never the headline.

**Why this framing matters commercially:** it is the hook that makes a first-year student think
*I could join and actually learn something*, and simultaneously makes a visitor from another
university think *that's a good culture*. That second reaction is the entire awareness goal.
A forensics framing does neither — it recruits people who are already interested and tells
outsiders nothing.

**Corollary — the content model changes.** With meetups running weekly and ~100 activities
already logged, **events are no longer an archive, they are the backbone of the site.** The
archive is the proof of consistency, not a side feature.

---

## 2. Decisions made (with rationale — don't relitigate without new information)

| Decision | Rationale |
|---|---|
| **Astro + Tailwind, not Next.js** | See §4.2. The site is a blog with a gallery and a form; everything Next.js is famous for beyond static rendering is unused complexity. |
| **English only** | Maintaining two content trees is unsustainable for one person. Schema reserves `*Bm` fields so BM can be added per-entry later at near-zero cost. |
| **Dark mode only** | Fewer QA surfaces, and it's the right aesthetic. Adding light mode later is one `[data-theme="light"]` token block because the palette is centralised. |
| **Contact form, not a redirect link** | Looks more professional, sets expectations. Uses a static-hosting-friendly form service, so still no backend. |
| **Gallery is curated, not auto-synced from Instagram** | An Instagram firehose (square crops, blurry phone shots, screenshots) would destroy the "professional, not generic" goal. Instagram is a *separate, clearly-labelled* section. See §7. |
| **Photos stored locally in the repo** | Source-agnostic. Whether they came from Instagram, Drive, or a phone, the site only ever consumes a local folder. Nothing breaks if a platform dies. |
| **Free subdomain, no domain purchase** | Budget is zero. A custom domain is not a launch blocker and can be attached to Cloudflare Pages later without redeploying. |
| **Build-time fetch, not client-side embeds** | Avoids third-party scripts, cookie banners, PDPA complications, and Lighthouse penalties. |

---

## 3. Brand & art direction

**Target impression:** institutional-technical and editorial. A well-funded research lab or
a standards body (IETF, NIST) crossed with a modern engineering blog. **Not a startup.**

### 3.1 Colour palette

**Superseded 2026-09-27.** The earlier navy/ribbon-blue palette was invented from a verbal
description and rejected by the owner. It has been replaced with colours sampled directly
from the real logo files. Do not reintroduce navy or ribbon blue.

| Token | Hex | Role |
|---|---|---|
| Void | `#05070C` | Page background — near-black, sampled from the logo's own background |
| Surface | `#0B1017` | Cards, panels |
| Surface-2 | `#121923` | Raised / hover surfaces |
| Line | — | Hairline borders, cool grey-blue |
| Brand | `#1848F8` | UCYSS electric blue — 46–65% of the logo. Primary brand colour |
| Accent | `#18D0C0` | Teal — 10–14% of the logo. Emphasis only, used sparingly |
| Text | `#FFFFFF` | Primary text |

**Verified contrast ratios (computed, not guessed):**

| Pair | Ratio | Result |
|---|---|---|
| Teal `#18D0C0` on Void `#05070C` | **10.4:1** | Safe for text, links, focus rings |
| White on Void | **~19:1** | Excellent |
| **Brand `#1848F8` on Void** | **3.2:1** | ⚠️ Large text, borders, glows, UI accents **only** |

**Hard rule:** brand blue is never used for body copy. It passes for large text but fails AA
for normal-size text. If something needs to be readable, it is teal or white, not blue.

**Accent discipline:** teal appears on roughly **three things per page**, not everywhere. An
accent used on every button and link is an accent used on nothing. This is the single most
common failure mode of template-generated sites and the biggest lever on looking premium.

**Neutrals:** derive all greys, muted text, and hairlines from the void colour via **opacity**.
Do not introduce new hues.

#### Other marks in the institutional family (reference only — do not use as site colours)

| Mark | Colours |
|---|---|
| UPTM | `#105098` blue + `#E81820` red |
| FCOM | `#683088` purple → magenta gradient |
| Pixora | `#8038E8` violet + `#08A0F0` cyan gradient |

These belong to other bodies. Display the marks; do not adopt their colours into the UI.

### 3.2 Branding — real logos now integrated

The interim text wordmark has been replaced with the real UCYSS logo.

| Asset | Size | Use |
|---|---|---|
| `public/logos/ucyss-formal.png` | 320×320 transparent | Primary mark — header, footer |
| `public/logos/ucyss-casual.png` | 256×256 transparent | Favicon, small placements |
| `public/logos/ucyss-square.png` | 500×500, black bg | Social / Open Graph images |
| `public/logos/uptm.png` | 320px transparent | Institutional lockup, footer |
| `public/logos/fcom.png` | 320px transparent | Institutional lockup, footer |
| `public/logos/pixora.png` | 320px transparent | Institutional lockup, footer |

All extracted from the zipped brand assets in `~/Documents/Logos` and downscaled for the web
(the UPTM source was 3000×1344; total set is 276 KB).

- **Favicon:** shield glyph on `#05070C` in teal/blue, plus `ucyss-casual.png` as PNG.
- `Wordmark.astro` is now a thin wrapper around the image, keeping its `size` prop.
- **Permission status:** the owner supplied the UPTM, FCOM and Pixora assets directly, which
  is treated as authorisation to display them. Confirm with Pixora's committee for the record.

### 3.3 Typography

| Role | Family | Notes |
|---|---|---|
| Display / headings | **IBM Plex Sans** | Institutional, technical, not generic. Multiple weights used deliberately. |
| Body | **IBM Plex Sans** | 300/400/500/600/700 |
| Mono / labels / metadata | **IBM Plex Mono** | Ties to code and terminal output without being a cliché |

Tighten letter-spacing on large display type, loosen it on small mono labels.

**Do not default to Inter everywhere.** It is the house font of AI-generated output and is
the fastest way to make a site look generated.

### 3.4 Layout principles

- **Asymmetric and editorial.** Left-aligned text, varied column widths, generous negative
  space, a consistent left margin. Not everything centred.
- **Asymmetric hero** — text left, **real session log** right. Not a terminal. See §3.9.
- **Real content on the homepage, not marketing copy.** Put an actual recent session topic, a
  real event, real numbers. Real content is the strongest possible signal that a site is real.
- **The stats row carries no event-attendance figures.** Conference attendance ("38 students
  at MITEC") was removed by the owner — it is not what the society is judged on and it
  crowded out the numbers that matter. Current figures: **92 members · ~100 activities ·
  CTFs entered · weekly cadence.**
- **Curated photography** with disciplined cropping and consistent aspect ratios.

### 3.5 Motion

Restraint. One or two considered transitions at **150–250ms**, ease-out.

- Subtle card hover state
- Smooth in-page navigation
- ~~Optionally a short typed-line animation in the hero terminal, played **once**~~ —
  **removed.** The hero is no longer a terminal (see §3.11). The only animation budget on the
  homepage is the space field's 220s stepped drift.

### 3.6 Atmosphere (depth through detail, not effects)

**Superseded 2026-09-27.** The blueprint grid, film grain and repeating shield watermark were
rejected by the owner and removed. Replaced with a stars / deep-space / technical-celestial
treatment — starfield, orbital arcs, faint constellation lines, distant horizon glow.

Requirements:

- **CSS-only.** No canvas, no JavaScript, no external image requests. The site ships 0 KB of
  JS apart from the mobile nav toggle, and that must not regress.
- **Extremely restrained** — 2–8% opacity. A background, not a feature. It should be ignorable.
- Must never reduce body-text legibility. Re-check contrast over the treatment.
- If anything animates, it is a very slow drift, and `prefers-reduced-motion` must still
  disable it (already handled globally in `global.css`).
- Reads as "deep space / technical", not "sci-fi poster".

Retained detail treatments:

- Hairline dividers
- Teal or brand-blue left accent bar on cards
- Duotone photography treatment for event photos

### 3.7 Signature component — pick ONE

The single most memorable design element. My recommendation: a **writeup "terminal card"** —
mono metadata, prompt-style cursor, teal left accent bar. One idea repeated with discipline
beats five ideas used once each.

> **Scope clarification (2026-09-27).** The owner rejected the terminal *in the hero* as
> generic — "it's meta for every cybersecurity website." That is a criticism of using a fake
> shell as a hero graphic, **not** of mono metadata on content cards. The writeup card is
> still the right direction. Keep the mono/label treatment and the accent bar; drop the
> `$` prompt and the fake-command framing wherever it appears.

Alternatives: hex-grid section divider, CTF-scoreboard stat block, file-selector/folder-tab
motif (nods to security-tool aesthetics).

### 3.8 The "AI vibecoded" checklist — AVOID ALL OF THESE

| Avoid | Why |
|---|---|
| Blue → teal diagonal gradients as large decorative fields | The signature generated-site gradient. **Now a live risk** — our own brand is blue+teal on near-black, which is exactly the combo those gradients use. Never use a gradient as a decorative field here. |
| Huge centred hero, gradient headline, two side-by-side CTAs | Template default |
| Row of 3 feature cards with gradient rounded-square icons | Template default |
| Glassmorphism — `backdrop-blur` cards, 10% white borders | Overused, poor contrast, dated |
| `rounded-2xl` on everything, soft shadow on every element | No visual hierarchy |
| Glowing gradient orbs in the background | Cheap signal |
| Logo marquee / "trusted by" strip | Implies false endorsement |
| Fade-up-on-scroll on every element | Feels weightless and generic |
| Particle canvas, custom cursor glow | Distracting, hurts performance |
| Perfect symmetry, zero density variation | Reads as a template |
| Marketing-filler copy | Reads as unspecific |
| Stock photos of generic people at laptops | Destroys credibility instantly |

**Principle:** the most professional sites have *fewer* elements, more restraint, and
confident whitespace. If a section could be deleted and nobody would miss it, delete it.

### 3.9 Microcopy voice

Plain, specific, human. Write like a person, not a marketer.

- ✅ *"We run HTB labs every fortnight. Bring a laptop."*
- ❌ *"Empowering the next generation of cyber defenders."*

Specific, understated copy is a large anti-generic signal and costs nothing.

**Banned vocabulary.** With the visual system corrected, word choice is the single biggest
remaining reason the site could still read as generated. These words are banned outright:

> empower · unlock · supercharge · elevate · journey · passion · community-driven ·
> cutting-edge · state-of-the-art · world-class · take your skills to the next level ·
> where passion meets purpose · more than just a club · united we hack

**The test:** if a sentence would survive being pasted onto any other student club's website,
rewrite it. Prefer concrete facts over adjectives. Short sentences. Modest copy is fine — the
real material is genuinely good and does not need inflation.

**Do not claim editorial review.** The archive must not describe writeups as "checked",
"verified", "reviewed" or "vetted" — the owner rejected that language on 2026-09-27 and asked
it be removed rather than reworded. Reframe the archive as a record of what the community
actually did, with members' own notes on what they learned. (The internal self-review
requirement in §9 is still real — it just is not advertised.)

### 3.10 Photography treatment

- **Duotone (void + teal)** via CSS blend modes — instantly cohesive, hides mismatched
  source quality, and it is a single CSS filter. Recommended.
- Alternative: subtle film presets for a less corporate feel.
- Consistent aspect ratios (recommend 3:2 for cards, 16:9 for covers).

### 3.11 Hero graphic — the real session log

**Decided 2026-09-27.** The hero's fake terminal (a `$ ucyss what-we-run` prompt with invented
output) was rejected by the owner as *"meta for every cybersecurity website"* — generic to the
point of being a costume. Options weighed: real session log · learning-path graph · next-session
card · CTF results board. **Real session log won**, because it is the only one that is
*specific to UCYSS* and it proves the §1.4 model in one glance.

Implementation: a mono-typed list of actual sharing sessions — topic, reference number, and
where known the presenter and a one-line note. No `$` prompts, no fake shell commands, no
ASCII box art, no cursor. Reads as a real archive excerpt.

- **Data source:** `src/data/site.ts` → `sessions: SharingSession[]`. Adding a session must
  never require touching a component.
- **Seeded with the three real topics only** (OSINT · web exploitation with Burp Suite · Linux
  for beginners). Nothing is invented — no dates, no presenter names, no outcomes. Unknown
  fields render as an obvious editable placeholder rather than a plausible-looking guess.
- Mobile-first: stacks to a single column at 375px.
- **Astro whitespace bug to not reintroduce:** collapsing whitespace between a text line and a
  following inline element ships them concatenated (`home.UCYSS`). Both hero headings use an
  explicit `{" "}`. Leave it alone.

---

## 4. Stack

### 4.1 The stack

| Layer | Choice | Purpose |
|---|---|---|
| Structure/Styles/Behaviour | HTML, CSS, JavaScript | The three languages all websites are made from |
| Framework | **Astro** | Compiles to static HTML/CSS/JS before publishing |
| Styling | **Tailwind CSS** | Utility classes + responsive prefixes |
| Content | **Markdown + Astro Content Collections** | Each event/writeup is a `.md` file with a schema |
| Version control | **Git + GitHub** | Reversible snapshots + repo hosting |
| Hosting | **Cloudflare Pages** | Free static hosting, auto-HTTPS, deploy on push |
| CMS (later) | **Sveltia CMS** | Admin form UI at `/admin` so non-technical people can publish |
| Forms | **Formspree / Web3Forms** | Static-hosting-friendly, no backend |
| Spam protection | **Cloudflare Turnstile** + honeypot | Free, privacy-friendly |

### 4.2 Why Astro, not Next.js

The decisive question is not "which is better" but **"which of Next's capabilities does this
site actually use?"**

| Next.js capability | Needed here? |
|---|---|
| React Server Components | No |
| Incremental Static Regeneration | No |
| Server Actions | No |
| Middleware / edge functions | No |
| Authentication | No |
| Database / ORM | No |
| Real-time | No |
| Server-side API | No |
| **Static content rendering** | **This alone** |
| Image optimisation | Yes |
| Routing | Yes |

The site is a blog with a gallery, a contact form, and a tag filter. Everything Next is
famous for beyond static rendering is complexity we'd pay for and never use.

**Costs of Astro:** no transferable React skill comes out of this project, smaller
ecosystem, fewer community answers.

**This is not a one-way door.** Content stays in plain portable Markdown; design tokens stay
in plain CSS custom properties. Migrating later means rebuilding templates, not losing
years of writing.

**When to revisit:** if the site grows a member login, a CTF challenge submission system, or
an admin dashboard. Until then, Astro.

**Separate note:** if you want React skills for employability, learn React on side projects.
The society's website should be maintainable; your portfolio should be separate.

### 4.3 Tech primer (for anyone new to this stack)

**HTML / CSS / JavaScript** — the three languages all websites are made from. HTML is
structure (headings, paragraphs, images), CSS is presentation (colour, layout, spacing,
responsiveness), JavaScript is behaviour (a menu opening, a filter working).

**Astro** — a framework that assembles the site into plain static files *before* publishing.
No server, no database, nothing to keep running or patch. Pages are composed from reusable
**components**: `EventCard.astro` is written once and used everywhere, so changing the card
design changes it on every page. **Islands** let you ship JavaScript only for genuinely
interactive pieces (mobile menu, tag filter) while the rest stays zero-JS. Astro's
`<Image>` component automatically generates responsive `srcset` and modern formats — one
less thing to get wrong. Astro can also render server-side later if ever needed.
*Learn:* file structure, components, template syntax, layouts, routing.

**Tailwind CSS** — styling via short utility classes in markup (`flex gap-4 text-teal-400`)
instead of long CSS files. Provides consistent spacing, colour, and type scales
automatically, which is a design system for free. Responsive prefixes (`sm:` `md:` `lg:`)
drive mobile/desktop adaptation.
*Honest note:* markup gets verbose. Astro's scoped `<style>` blocks are the alternative.
Tailwind is still recommended because all documentation and tooling assume it.
*Learn:* the utility vocabulary, responsive prefixes, spacing/colour scales.

**Markdown + Content Collections** — each event or writeup is a `.md` file with a small
metadata block on top. **Collections** define a schema so missing required fields are caught
while you type, not at deploy. Four benefits: writing is plain text (no database), each file
becomes its own URL (which is what makes search engines and link previews work), it's fully
portable (if this site is abandoned, content is still readable documents), and it gives
clean, typed data to the templates.
*Learn:* Markdown basics and frontmatter. Very quick.

**Git + GitHub** — version control. Every change is a recorded, reversible snapshot. You
*will* break things while learning; this is how you un-break them. GitHub hosts the repo and
triggers deploys.
*Learn:* `commit`, `push`, `pull`, `branch`, `revert` — five commands cover ~95% of solo work.

**Cloudflare Pages** — free static hosting with automatic HTTPS, deploying on every push.
Free tier is generous, fast, and lock-in-free. A custom domain can be attached later without
redeploying.

**Sveltia CMS** — an admin form UI at `/admin` letting a non-technical committee member
publish events without touching Git. One config file, no page-code changes.

> **Confirmed as the CMS choice, but deliberately deferred** (owner decision, 2026-09-27).
>
> The owner's reasoning: *"future proofing — let's just say the committee will update it
> later when I stop caring about this project."* The handover, not the owner's own editing, is
> what makes the CMS necessary. So the trigger for building it is **the owner's exit**, not
> today.
>
> **What happens in the meantime:** `src/data/site.ts` is the single editable data module.
> Changing the member count is a 30-second edit in GitHub's web UI — open the file, change
> `92`, commit. Works on a phone. No new software, no auth to expire. This fully covers the
> owner's own needs, so the CMS is genuinely a future problem and there is nothing to wait for.
>
> **Why not build it now:** the collections are empty. A CMS over zero events is hard to
> evaluate and easy to get wrong, and it needs ~half a day of GitHub OAuth/token setup that
> can break silently when a token expires. Build it in Phase 6, once there is real content and
> real mistakes to design the forms around.
>
> **Scope limit to state plainly to any future editor:** the CMS edits **content only** —
> events, writeups, team, stats. It will not let anyone rearrange the homepage layout. That
> remains a code change.

**Turnstile** — Cloudflare's free, privacy-friendly CAPTCHA alternative.

### 4.4 Dark mode, and light mode later

Dark-only for launch. Structure the palette as CSS custom properties in **one file**.

> The `:root` block below is the **rejected** navy palette and is kept only to show the shape
> of the approach. The live tokens are in `src/styles/global.css` — see §3.1 for the real
> logo-sampled values and the contrast rules.

```css
:root {
  --color-navy: #14213D;     /* rejected — do not reintroduce */
  --color-ribbon: #1D4E89;   /* rejected — do not reintroduce */
  --color-teal: #3FBFA6;     /* replaced by #18D0C0 */
  --color-surface: ...;      /* derived from void */
  --color-text: ...;
}
```

Because everything references tokens (never raw hex), adding light mode later is one
`[data-theme="light"] { ... }` block plus a toggle component. No component changes needed.
That's the payoff for tokenising now.

---

## 5. Content model

Eight content types, schema definitions in one place, low-impact to change later.

| Collection | Key fields |
|---|---|
| `events` | title, date, type (Sharing session/Meetup/Workshop/Convention/CTF/Talk), **topic**, **presenter**, **sessionRef**, location, organiser, cover, summary, body, gallery, externalUrl, featured |
| `writeups` | title, date, authors, category (Web/Pwn/Crypto/Forensics/OSINT/Network), difficulty, tools, cover, body, relatedEvent |
| `announcements` | title, date, pinned, body |
| `team` | name, role, photo, bio, order, links |
| `alumni` | name, batch, currentRole, company, quote |
| `achievements` | title, date, type (Placement/Cert/Competition), body |
| `albums` | title, date, cover, images[] |
| `resources` | title, description, url, tags |

**The `events` schema is shaped around sharing sessions, not conferences** (2026-09-27). The
dominant recurring event is a member presenting a topic they learned, so `topic`, `presenter`
and `sessionRef` are first-class fields and the type list leads with *Sharing session*.
Conference attendance is a minority of the record, and its attendance figures stay out of
public copy. A session that produced a writeup links both ways via `relatedEvent`.

**Sessions versus hero sessions.** The three seeded hero sessions in `src/data/site.ts` are
hand-picked and short. Once the `events` collection exists they should be drawn from it, so
there is one source of truth. Until then the config module is authoritative for the hero.

Shared `tags`; per-collection `categories` for filtering.

### 5.0 Archive scale — answered, don't re-litigate

The owner asked whether ~100 logged activities would make the listing enormous. **It will
not, and the volume is an asset rather than a problem.**

- Astro emits every entry as a static page at build time. ~100 pages is trivial — a few
  seconds, and it all serves off a CDN.
- The index shows the latest ~12, with category and year filters, and paginates beyond that
  (~9 pages at 12 per page).
- Filtering runs against static data, so it is instant and needs no server.
- Every entry keeps its own URL, which is what makes search engines and link previews work.

A hundred logged sessions is the single most convincing thing the site can display: it says
*this group has been running, consistently, for a long time.* That is exactly the impression
the awareness goal needs, so the archive should be prominent rather than buried.

**Two composition rules for the archive** (learned by getting it wrong, 2026-09-27):

1. **Sharing sessions lead the list.** The first draft opened with a convention and a
   dedicated OSINT workshop, with no sessions in it at all — so a site whose entire pitch is
   *we meet weekly and teach each other* had an archive that said the opposite. The archive
   must look like the thing being advertised.
2. **No attendance numbers anywhere.** "38 students and 2 adjunct lecturers at CyberDSA" and
   "41 students signed up" were both cut. Say what happened, not how many people watched.

The archive list lives in `src/data/site.ts` (`activityLog`), not inline in a component, so
the credibility section is editable in the same place as the member count.

**Reserved for later:** optional `titleBm` / `summaryBm` / `bodyBm` fields on events,
announcements, and team. A small language toggle falls back to English when absent. This is
why BM can be added incrementally later without restructuring anything.

### 5.1 Pages

```
/               Home
/about          About (incl. Pixora relationship)
/what-we-do     Activity pillars
/events         index  +  /events/[slug]
/writeups       index  +  /writeups/[slug]
/gallery        index  +  /gallery/[slug]
/team
/alumni
/achievements
/join
/announcements
/partners       Collaborations, recognition, reciprocal links
/contact
/feed           Latest from Instagram (auto-updating, clearly labelled)
/404
```

**Homepage composition:** hero (wordmark + peer-led-learning headline + **real session log**) ·
stats bar (members · sessions & activities · CTFs entered · meetup cadence — all from config) ·
activity pillars (weekly sharing sessions · the CTF team · conventions & external meetups) ·
featured writeup · next upcoming event · latest announcements · join CTA.

**Stats row content is decided** (2026-09-27): 92 members · ~100 sessions and activities ·
3 CTFs entered · weekly cadence. **No event-attendance figures** — conference turnout
("38 students at MITEC") was removed by the owner as not representing the society.

**Every number on the site is read from `src/data/site.ts`.** No hardcoded statistics in
markup. The module's header comment explains in plain language how to change the member count
and add a session, for someone editing it in GitHub's web UI with no code experience. Keep it
plain data with no logic, so the CMS migration is a repoint rather than a rewrite.

**`/partners` and `/achievements` specifically serve the "known by other universities" goal.**
Universities respond strongly to documented results and reciprocal links.

---

## 6. Responsive design

**Is mobile different from desktop?** Yes, substantially, and it's where most society sites
fail — designed on a 27" monitor, then squeezed until the phone version is an afterthought.

It is **one** design with a flexible layout, not two designs. The method is **mobile-first**:
the phone layout is the base, complexity is added as space allows. Designing desktop-first
and shrinking produces awkward breakpoints and a cramped phone experience.

**Tailwind breakpoints:** `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536

| Aspect | Mobile | Desktop |
|---|---|---|
| Layout | Single column, stacked | Multi-column grids, sidebars |
| Navigation | Hamburger drawer | Horizontal nav bar — a genuinely different component, not a resize |
| Type scale | Display type must shrink (64px → 34px) or it overflows | Can go large |
| Spacing | More generous vertical rhythm | Denser |
| Touch targets | Minimum ~44×44px | Mouse cursor, smaller fine |
| Above the fold | ~⅓ of viewport visible — hero and CTA must fit | Most of hero visible |
| Tables | **Must become cards or accordions** | Native tables fine |
| Images | Need responsive `srcset` or phones download 2000px images | Full-size fine |
| Hover states | Don't exist on touch — anything hover-revealed needs an alternative | Available |
| Performance | Slower networks — zero-JS advantage compounds | Less critical |
| Modals | Full-screen sheets | Centred overlays |

**Known hard spot:** the `/team` roster is a table on desktop and must become a card list on
mobile. Design both at the same time, don't shrink one into the other.

Astro's `<Image>` handles responsive images automatically.

---

## 7. Photo pipeline

### 7.1 The problem

Photos currently live in three places: Instagram, LinkedIn, and Google Drive (destination
undecided). We need them on the website without making Instagram a hard dependency.

### 7.2 The Instagram reality (verified 2026-09-26)

- **Instagram Basic Display API was shut down 4 December 2024.** Meta confirms there is
  "no longer a set of Instagram APIs for consumer developer apps." The old free
  "paste your handle" approach no longer exists.
- Official read access now requires a **Professional (Business/Creator) account**, a Meta
  app, and **App Review**. Overkill for a gallery.
- Meta's **embed script** and **third-party widgets** (Elfsight, etc.) are easy but load
  third-party JavaScript, set cookies, hurt Lighthouse, and raise a **PDPA** consideration
  for a Malaysian site.
- **LinkedIn is not viable.** Reading a Page's photos requires Marketing Partner API access,
  which requires a partnership application. Link out to the page instead.

### 7.3 The solution

**Photos are always local. Only ingestion changes.**

```
UCYSS_Website/
├── content/          ← Markdown: events, writeups, albums, team
├── gallery/          ← the images. ALWAYS LOCAL. Source-agnostic.
│   ├── 2026-08-05-htb-meetup/
│   └── 2026-xx-xx-osint-workshop/
└── ...
```

A GitHub Action syncs new photos from a shared Google Drive folder into `gallery/`, then
rebuilds. Media team uploads to Drive; nobody touches Git.

**Why this is right:**
- Matches how the media team already works
- No API approval, no tokens, nothing that breaks in two years
- ~15-line Google Drive API script handles the sync
- Site stays static; nothing loads third-party JS for visitors
- **Survives platform death** — if the UCYSS Instagram is renamed or lost, every photo is
  still local
- Clean handover story: *"photos live in Drive, run the sync"*

### 7.4 Gallery architecture — curated, not a firehose

**This is a deliberate quality decision.** Dumping an Instagram feed onto the showcase
gallery — square crops, inconsistent lighting, blurry phone shots, screenshots of WhatsApp
groups — is exactly what makes a student society site look amateur. It would undo all the
curation and duotone work.

So we split it:

| Section | Content | Behaviour |
|---|---|---|
| **`/gallery`** | Curated, hand-picked albums per event, duotone-treated | Manual curation. The professional showcase. Drive photos go here. |
| **`/feed`** | "Latest from Instagram" | Auto-updating, clearly labelled as a social feed |

This gives free content flow without degrading the thing that makes the site look credible.

**If Instagram is added later,** fetch it at **build time** (a script writes JSON + images
into the repo) — not client-side embed. No third-party scripts at runtime, works offline,
no token management, and a broken Instagram just means stale data rather than a broken page.

### 7.5 Photo hygiene

- **Consent** from everyone identifiable. A group photo is still publishing faces.
- **Credit the photographer.** The media team did the work.
- **Resize before committing.** Don't put 4MB phone photos in Git. Astro handles
  derivatives; keep sources reasonable.
- **Duotone treatment** (navy + teal) for visual cohesion across mixed sources.

---

## 8. Contact form

**Decision:** form, not a redirect link. Looks more professional and sets expectations.

Implementation (no backend needed — works on static hosting):
- Provider: **Web3Forms** or **Formspree** (both free tier, form posts directly from HTML)
- **Spam protection:** honeypot field + **Cloudflare Turnstile**
- **PDPA consent line** beneath the submit button: *"By submitting this form you consent to
  UCYSS storing your details for the purpose of responding to your enquiry."*
- **No local storage** of submissions — the provider handles it
- Add a `mailto:` fallback link in case the form service is down

Because the form collects personal data under Malaysia's PDPA, this triggers the need for a
short privacy notice (see §11).

---

## 9. Writeup publishing

**Decision:** no formal multi-person review process. A single self-review against a
checklist is sufficient — but be clear-eyed that **self-review is the weakest link** for
publishing sensitive material, which is exactly the thing UCYSS exists to teach about.

**Pre-publish checklist (run through for every writeup):**
- [ ] No live credentials, API keys, tokens, or passwords — real or example-looking
- [ ] No real target infrastructure, real domains, or real internal hostnames
- [ ] No third-party personal data (no names, IC numbers, emails, phone numbers of people
      who didn't consent) — remember your own OSINT workshop's "cooked footprint" material
- [ ] Screenshots with any PII blurred or cropped
- [ ] Screenshots of any sensitive data cropped out
- [ ] Attributions and sources credited
- [ ] Not defamatory or a doxing attempt
- [ ] Verified the tooling/commands actually work as written

**Where a second pair of eyes genuinely helps:** anything involving recon, OSINT, social
engineering, or a real person. Ask one committee member for those specifically.

---

## 10. Roadmap

### Phase 0 — Prerequisites & environment

*Goal: prove the deploy pipeline before writing anything real, so two things are never
being debugged at once.*

- [ ] Verify Node.js 18+ installed (`node -v`)
- [ ] Verify Git installed (`git --version`)
- [ ] Install a code editor (VS Code or Zed)
- [ ] **Create GitHub account if needed**
- [ ] **Create the society GitHub org and reserve the `ucyss` handle** ⚠️ do this first, it's
      painful to change later
- [ ] **Reserve the `ucyss` handle on Instagram, LinkedIn, Telegram** ⚠️ same sitting
- [ ] Confirm the UCYSS Instagram is a **Professional (Business/Creator)** account
- [ ] Choose subdomain: `ucyss.pages.dev`

> ### ⚠️ GOTCHA — this folder sits inside another git repository
>
> `~/Documents/UCYSS_Website` is **nested inside a git repo rooted at `/home/arif`**, which is
> the unrelated **`BlueIris-Hyprland-Rice`** dotfiles repo (remote:
> `github.com/ThatBlueIris/BlueIris-Hyprland-Rice.git`). It currently has a staged
> `README.md` and untracked files including `.bash_history` and `.BurpSuite/`.
>
> **Risk:** running `git add .` from this folder would stage and commit against the *home
> directory* repo — pushing shell history and BurpSuite data to a dotfiles repo. That is a
> real privacy and security problem, and it is precisely the class of mistake UCYSS exists to
> teach against. It also means the site would not be its own repository.
>
> **Fix (do this first, in order):**
> 1. Add `Documents/UCYSS_Website/` to the home repo's `.gitignore`
> 2. `git init` **inside** `~/Documents/UCYSS_Website` to make it an independent repository
> 3. Verify with `git rev-parse --show-toplevel` — it must return
>    `/home/arif/Documents/UCYSS_Website`, not `/home/arif`
> 4. Unstage anything the home repo picked up accidentally (`git -C /home/arif restore --staged .`)
>
> Never run a bare `git add .` before this is confirmed.

- [ ] Make this folder its own independent git repository (see ⚠️ GOTCHA above)
- [x] Add `.gitignore` (`.env`, `node_modules`, `dist`, `.astro/`) from day one
- [ ] Create the Cloudflare Pages project, connect the repo
- [ ] Deploy a "hello world" Astro site — **pipeline proven**
- [x] Request UPTM / FCOM / Pixora logo usage permission — assets supplied directly by owner
- [ ] Ask the media team for **written consent** to publish member photos

### Phase 1 — Design system & shell

- [x] Define colour tokens in one CSS file — **done, resampled from the real logo** (§3.1)
- [x] Enforce the contrast rule: brand blue is large-text/borders/glows only, never body copy
- [x] Add IBM Plex Sans + IBM Plex Mono
- [x] Base layout component
- [x] Header + desktop nav
- [x] Mobile drawer nav
- [x] Footer with the UPTM → FCOM → Pixora lockup (real logo images, low opacity)
- [x] ~~Shield watermark + faint grid~~ — **rejected by owner**, replaced with the CSS-only
      deep-space field (starfield + orbital arcs + horizon glows, §3.6)
- [x] ~~Interim wordmark~~ — **replaced with the real UCYSS logo**
- [x] **Repositioned hero**: peer-led-learning headline + real session log (§3.11). The fake
      terminal was rejected as generic
- [x] Stats bar component — all figures read from `src/data/site.ts`, no hardcoded numbers
- [x] Pillars section — weekly sharing sessions · the CTF team · conventions & external
      meetups
- [x] Copy rewritten across `index`, `about` and `Footer` off the §1.4 model; banned-vocabulary
      list enforced (§3.9)
- [x] Archive copy no longer claims writeups are reviewed/verified
- [x] Check mobile layout at 375px first, then add desktop at each breakpoint
- [x] Verify 0 KB of shipped JavaScript apart from the mobile nav toggle

### Phase 2 — Static pages

- [x] `/about` — written, including the Pixora hierarchy ladder
- [ ] `/what-we-do`
- [ ] `/team` — placeholder data until the roster is final
- [ ] `/join`
- [ ] `/contact` — with the form (Web3Forms/Formspree + Turnstile + PDPA line)
- [ ] `/privacy` — short notice, required because the form collects personal data
- [ ] `404`

### Phase 3 — Content engine

- [ ] Define the eight collections + schemas
- [ ] Build listing templates (events index, writeups index with tag filter)
- [ ] Build detail templates
- [ ] Migrate the HTB meetup (from the meeting minutes)
- [ ] Migrate the OSINT workshop (from the PDF → a real article, not a download)
- [ ] Migrate CyberDSA 2026 (from the proposal)
- [ ] Write up the Digital Forensics session
- [ ] 3+ events and 2+ writeups published

### Phase 4 — Gallery & photos

- [ ] Gallery grid + album pages + lightbox
- [ ] Duotone treatment (void + teal)
- [ ] Responsive images via Astro `<Image>`
- [ ] Google Drive sync script (~15 lines, service account)
- [ ] GitHub Action to run the sync and rebuild
- [ ] `/feed` — optional Instagram build-time fetch
- [ ] Link out to LinkedIn (no API, not viable)

### Phase 5 — SEO, social, polish

- [ ] Per-page **OG image generation** (void base, space field, wordmark, title) — the single
      highest-leverage detail for the awareness goal, since most of our audience shares
      links in WhatsApp and Telegram
- [ ] `sitemap.xml` + `robots.txt`
- [ ] RSS feed
- [ ] JSON-LD Event schema so events can surface in Google with date and venue
- [ ] Complete meta titles and descriptions
- [ ] Lighthouse audit — target green on performance, accessibility, SEO, best practices
- [ ] Keyboard navigation, focus states, alt text pass

### Phase 6 — Handover

- [x] ~~`README.md` — what the project is, how to run it~~ — **still Astro's template README,
      not yet replaced.** Tracked below.
- [ ] Replace `README.md` and `AGENTS.md` (both still scaffold leftovers)
- [ ] `CONTRIBUTING.md`
- [ ] "How to add an event" guide
- [ ] **Sveltia CMS at `/admin`** — the trigger for this is the owner's exit, not a date.
      Confirmed as the chosen approach; see the note in §4.3 for why it is deferred and what
      covers the gap until then
- [ ] Move site-level figures out of `src/data/site.ts` into a CMS-editable `stats` entry
- [ ] Cloudflare Pages deploy hook so CMS saves publish automatically
- [ ] Transfer repo ownership to the society org
- [ ] Name a backup person with repo access
- [ ] Publish the first announcement post

---

## 10.1 Awareness strategy (after launch — subject to revision)

A good site alone does not create awareness. The mechanism:

- **OG image per post** — the preview card when a link is shared in WhatsApp, Telegram,
  LinkedIn. Where most of the Malaysian audience lives. Highest-leverage single detail.
- **Writeups are the share unit** — each is a standalone landing page. Distribute to CTF
  Discords and Telegram groups, LinkedIn, other universities' CS department pages.
- **Event recaps published as writeups**, not just photo dumps
- **JSON-LD Event markup** so events surface in Google with date and venue
- **RSS feed** + sitemap for follow-up
- **Memorable short URL + QR code on event posters** so attendees can find the site without
  typing
- **Reciprocal links** with other Malaysian university clubs and CTF communities
- **Consistency beats novelty** — one writeup per month makes UCYSS known; a redesign every
  semester does not

---

## 11. Privacy & security requirements (non-negotiable)

A society that teaches OSINT must not leak member PII. This is the one place a cybersecurity
society can genuinely embarrass itself.

- [ ] No member IC numbers, phone numbers, or emails published anywhere
- [ ] No unredacted third-party documents in writeups (recycle the OSINT workshop's own
      "cooked footprint" lesson: public group-project reports on Scribd/AnyFlip/SlideShare)
- [ ] Explicit photo consent before publishing member images
- [ ] Run the §9 writeup checklist before every publish
- [ ] Contact form has a PDPA consent line
- [ ] `/privacy` notice published
- [ ] Spam protection on the contact form (honeypot + Turnstile)
- [ ] Google Drive sync service account scoped to the one shared folder only — not the whole
      Drive
- [ ] No secrets in the repo. `.env` files in `.gitignore` from day one

---

## 12. Open items

### Resolved

- [x] ~~Logo files~~ — all four mark sets received and integrated from `~/Documents/Logos`
- [x] ~~Palette~~ — replaced with logo-sampled colours (§3.1)
- [x] ~~Texture~~ — grid/noise/shield removed, replaced with space treatment (§3.6)
- [x] ~~Git repository setup~~ — independent repo, dotfiles-repo collision fixed
- [x] `gh` authenticated · push enabled (owner action, complete)
- [x] **Reserved handles:** GitHub org, Instagram, LinkedIn, Telegram (owner action)
- [x] ~~UPTM / FCOM / Pixora logo usage permission~~ — assets supplied directly by owner
- [x] ~~Hero graphic~~ — fake terminal rejected; real session log shipped (§3.11)
- [x] ~~Positioning~~ — forensics/OSINT framing rejected; peer-led-learning model recorded
      as the authoritative account (§1.4)
- [x] ~~Stats content~~ — decided and made editable via `src/data/site.ts`
- [x] ~~CMS choice~~ — Sveltia confirmed, deferred to handover with the trigger recorded (§4.3)

### Still blocking

- [ ] Written photo consent from the media team (needed before any photo ships)

### Needed to finish the copy

- [ ] **Session dates, presenters and one-line notes × 3** — the hero session log ships with
      visible `DATE TO ADD` placeholders. Real values go in `src/data/site.ts`
- [ ] **Hero copy in the owner's own voice** — the current headline and lede were written by
      the assistant from the §1.4 notes. Correct facts, wrong voice. This is the last
      significant thing standing between the site and not reading as generated
- [ ] **Tagline** — several options can be drafted
- [ ] **The three CTF results** — placements if they exist, for the archive

### Needed for content, not blocking

- [ ] **When was UCYSS founded?** About page needs a founding date and origin story
- [ ] **Membership criteria** — Cybersecurity programme only, or any FCOM student? This is
      the first question every visitor has
- [ ] **Meeting schedule and location** — prospective members need this
- [ ] **Contact email** — a society-owned address, not a personal one
- [ ] **Social URLs** for the footer
- [ ] **Pixora's vision/mission** — UCYSS should visibly align, not compete
- [ ] **Pixora member benefits** — if Pixora members get welfare perks, UCYSS members
      inherit them. Great `/join` content
- [ ] **Full event inventory** — every past session and event with date, topic, presenter,
      one-line recap. This is the **backbone** of the site now, not a side feature (§1.4);
      weekly cadence means ~100 activities is plausible and it is the strongest credibility
      signal available. No attendance figures in public copy.
- [ ] **Any existing branding** — superseded; real logos received and integrated
- [ ] **UCYSS's own vision/mission** — does one exist, or do we write one?
- [ ] Final team roster — names, roles, photos. Data-driven; adding someone is one file
- [ ] **Formalise the "Web Lead" committee role**
- [ ] **Decide the photo destination** — Drive folder vs. direct-to-repo
- [ ] ~~OSINT PDF: article page or PDF download?~~ — **parked by the owner 2026-09-27.** Not
      urgent, and it must not be framed as a headline topic. When it is picked up, prefer a
      proper article over a PDF download — a PDF is a dead end for SEO and for the awareness
      goal.

### Confirm

- [ ] Repository name (suggestion: `ucyss-website`)
- [ ] Author attribution on writeups — name, or pseudonym, or initials?
- [ ] Whether `/alumni` and `/achievements` ship empty initially or wait for real data

---

## 13. Handover requirements

Explicit requirement: the site must survive the current maintainer stepping back.

1. **Content in plain Markdown** — portable to any platform or CMS
2. **`README.md`, `CONTRIBUTING.md`, and a "how to add an event" guide**
3. **CMS at `/admin`** so a non-technical successor can publish without touching Git
4. **Repository owned by a society/org GitHub account**, not a personal account — otherwise
   the project dies with the account
5. **Design system in one token file** so a restyle is a single-file change
6. **A named backup** with repository access, recorded in writing
7. **A "Web Lead" role** formalised in the committee structure
8. **Minimal dependencies** — nothing to patch, few CVEs, nothing to keep alive
9. **Photo source documented** as "Drive folder → run the sync", not "ask Arif"
