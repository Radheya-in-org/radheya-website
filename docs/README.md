# Radheya Internal Docs

This folder is **internal** — it lives in the repo so the team and Claude have shared, persistent context across sessions, but **nothing here is shipped to radheya.in**. Public website content lives in `/app/`.

Use this folder for:
- Sales playbooks and pitch documents per vertical
- Decisions made and the reasoning behind them
- Session-to-session continuity (so we don't lose context between Claude conversations)
- Internal references that aren't ready or appropriate to be public

---

## Document index

Folder structure mirrors the public URL structure where possible:

```
docs/
├── README.md                                                ← you are here
├── proposals/
│   ├── akshara-school.md                                    ← active: Akshara (markdown source)
│   └── akshara-school.docx                                  ← active: Akshara (Word — share this)
└── solutions/
    └── education/
        └── schools/
            ├── rural-website-importance.md                  ← honest pitch for rural schools
            └── proposal-template.md                         ← reusable principal-facing proposal
```

| Path | Purpose |
|---|---|
| `solutions/education/schools/rural-website-importance.md` | The 8 honest reasons a rural school benefits from a website. Use this when pitching to rural school correspondents/principals. |
| `solutions/education/schools/proposal-template.md` | Polished sales proposal template to share with school principals before closing. Copy, replace placeholders (school name, date, pricing), export to PDF, share. |
| `proposals/{school-name}.md` | Filled proposal sent to a specific school. Treat each as a record of what was promised. |

---

## Session log

Most recent first. Each entry: what we discussed, what we decided, what shipped, what's open.

### 2026-05-07 — Akshara proposal: redesigned palette
- **Discussed:** the v1 colors (bright gold-on-white) felt cheap/flashy for a serious proposal going to a school principal. Needed a more refined, executive look.
- **Decided:**
  - New palette: **deep navy `#0A2540` + antique gold `#B8860B`** on warm white. Charcoal `#1F2937` for body, slate `#6B7280` for muted meta lines, very pale cool gray `#F7F8FA` for alternating table rows. Reads premium, prints well, photographs well on a phone.
  - Dedicated **cover page**: small uppercase RADHEYA eyebrow → big bold "Website Proposal" → "Prepared for" → "Akshara" in gold → diamond divider (— ◆ —) → tagline → date/validity at the bottom.
  - **Editorial section style**: each section gets a small uppercase gold eyebrow label with a thin gold rule, then the heading in deep navy. Cleaner hierarchy than gold-on-everything.
  - Table headers now navy with white text (not gold-on-white). Less shouty, more serious.
  - Header strip on every page after cover; cover page itself has no header/footer (`titlePage: true`).
- **Shipped:**
  - Replaced `docs/proposals/akshara-school.docx` with the redesigned version
  - `.gitignore` now ignores Office lock files (`~$*`)
- **Open follow-ups:** same as previous entry — generalize the docx-js script into `scripts/build-proposal.js` for multi-school use.

### 2026-05-07 — Akshara proposal: Word .docx + schools URL
- **Discussed:** the principal needed an actual `.docx` file, not markdown — for direct WhatsApp delivery. Also needed the public schools page URL referenced in the proposal so the principal can review it before the discovery call.
- **Decided:**
  - Generate Word documents directly with `docx-js` (Node) instead of markdown→PDF conversion. Cleaner, brand-styled, table-rich, hyperlinked. Script lives at `/tmp/create-akshara-proposal.js` (not committed; one-shot).
  - Add `radheya.in/solutions/education/schools` link in the "Who we are" section so principals can verify approach.
  - Store both `.md` (source-of-truth) and `.docx` (deliverable) in `docs/proposals/{school-name}.{md,docx}`.
- **Shipped:**
  - `docs/proposals/akshara-school.docx` — A4, gold-accent headings, branded tables, clickable hyperlinks, headers/footers with page numbers
  - Updated `docs/proposals/akshara-school.md` with the schools URL
  - README index now shows both files
- **Open follow-ups:**
  - Generalize the docx-js script into `scripts/build-proposal.js` that takes a JSON config (school name, date, rep, phone) and emits a .docx — useful when sending to 5+ schools/month
  - Lock a permanent place for the script in the repo (currently /tmp)

### 2026-05-07 — First proposal sent: Akshara
- **Discussed:** filling the proposal template for an actual school (Akshara) to share via WhatsApp. Decided no amounts in the document — quote happens after a discovery call where we understand actual requirements. Adopted requirements-first language as the standard approach.
- **Decided:**
  - All proposals lead with "We start by listening" — discovery call before quoting
  - Don't expose pricing in shareable proposal documents — pricing happens 1:1 on the call
  - Default rep name is "Arun" until we standardize per-team-member templates
  - Default phone is +91 96764 30322
  - Default valid-until is 30 days from proposal date
  - Sent proposals get versioned per-school in `docs/proposals/{school-name}.md`
- **Shipped:** `docs/proposals/akshara-school.md`
- **Open follow-ups:**
  - Update `proposal-template.md` to match the requirements-first / no-amounts pattern (currently still has placeholder amount fields)
  - Consider a Pandoc / Word export workflow for sending PDFs
  - After discovery call with Akshara, log the quoted pricing in the proposal file or a separate quote file

### 2026-05-07 — Principal-facing proposal template
- **Discussed:** need a polished, professional document to share with a school principal before the closing conversation. Should impress, position Radheya as the obvious local choice, and lay out scope + pricing + maintenance clearly.
- **Decided:** template approach (placeholders for school name, date, amounts) so the team reuses it for every school instead of writing from scratch. Keep it short — 3 pages. Include real numbers. Lead with Radheya's local advantage.
- **Shipped:** `docs/solutions/education/schools/proposal-template.md`
- **Open follow-ups:**
  - Convert template to a Word/Google Docs version for non-technical team members
  - Build a script that fills placeholders + exports a branded PDF (later, when volume justifies it)
  - Lock the actual default pricing numbers (currently placeholders) — next session
  - Decide if proposals get version-numbered + stored per-school in `docs/proposals/{school-name}.md`

### 2026-05-07 — Rural school website pitch
- **Discussed:** how to honestly convince a rural school to want a website, given their parents are on YouTube/Insta/WhatsApp but don't browse websites. The standard tier-2 "more admissions" pitch fails for rural and damages trust when promises don't land.
- **Decided:** lead with 8 honest pitch points. No fantasy promises. Reframe the website as a *trust signal + archive + recruiting tool + WhatsApp/Insta destination + alumni connection* — not as an admissions firehose.
- **Shipped:** `docs/solutions/education/schools/rural-website-importance.md`
- **Open follow-ups (also in the doc):**
  - 1-page WhatsApp-shareable PDF version
  - Verbal sales script + objection handling
  - Possibly a `/for-rural-schools` page on the public site once we have 1-2 rural customers
  - Re-rank the 8 points after first 3 rural school signs

### 2026-05-06 — Schools landing page rewrite + cleanups
- **Discussed:** initially shipped 3 fixed pricing tiers on `/solutions/education/schools`. Iterated through an hourly configurator (rejected as too freelance-marketplace) and landed on a feature-led narrative with no public pricing. Also dropped Fintech vertical from `/solutions` (no real plans behind it). Removed individual LinkedIn icons + Arun's surname/photo from About page.
- **Decided:** premium studio brand → no public pricing. Pricing happens in a discovery call. Configurator and per-hour rate live as internal tools, not public-facing.
- **Shipped:** PR #3 (squash-merged into main):
  - `/solutions` — vertical index (Education + Healthcare)
  - `/solutions/education` — education hub with MyNextStep cross-link
  - `/solutions/education/schools` — feature-led narrative page
  - About page — no individual LinkedIn icons, surnames removed across all team members
  - Sitemap updated
- **Open:**
  - Park `services.radheya.in` subdomain for future use, but don't build there yet
  - Define migration trigger to subdomain (e.g. ₹10L+ MRR from schools alone, or dedicated school sales hire)
  - Build first portfolio site for a real or fictional school before approaching paying customers
  - Decide first-cohort discount: 5 founding schools at lower rate in exchange for case studies + reference calls

### 2026-05-05 → 2026-05-06 — Foundational decisions
- **Discussed:** business model for school websites. Hosting strategy. Pricing tier shape. Office vs no office. AI-tools-only stack (Claude Code only).
- **Decided:**
  - Self-host all client school sites on a shared VPS (Hetzner or similar) — recurring revenue compounds, ~₹6K/year per first site, +₹1K/year per additional
  - Don't build `services.radheya.in` subdomain yet — premature; subpath is fine until ₹10L+ school MRR
  - Don't open a dedicated office yet at urban prices, but a ₹5K/month 2BHK in tier-2 Telangana is a no-brainer for focus + persistent setup
  - Tooling: Claude Code only is enough. Skip Cursor / v0 / multi-tool stack until there's a specific reason
  - Real cost per school website with AI tools: ₹15-25K of effort + ~₹6K infra. Sell at ₹50-90K. ~70% gross margin.
  - **Focus discipline:** with 3 people, ship 1 product (MyNextStep) + 1 services anchor (school websites). Park hospital, fintech, marketplace, photographer CRM, etc. on a Someday/Maybe list.

---

## How to use this for the next Claude session

When you start a new Claude session about Radheya, **point Claude at this README first**. It will:
1. Pick up the latest decisions from the session log
2. See the document index for context
3. Avoid re-litigating decisions already made

You can paste this prompt to start a new session:

> *"Read `docs/README.md` to catch up on the project state, then continue from the most recent session log entry."*

Add a new entry to the session log at the end of every meaningful Claude conversation so context compounds instead of resets.
