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
└── solutions/
    └── education/
        └── schools/
            └── rural-website-importance.md                  ← honest pitch for rural schools
```

| Path | Purpose |
|---|---|
| `solutions/education/schools/rural-website-importance.md` | The 8 honest reasons a rural school benefits from a website. Use this when pitching to rural school correspondents/principals. |

---

## Session log

Most recent first. Each entry: what we discussed, what we decided, what shipped, what's open.

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
