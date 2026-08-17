# Gnome — Waitlist Landing Page

TractionLab | PO-owned | Landing Page Phase. See `CLAUDE.md` in this folder for the full
operating context (brand guardrails, blockers, PostHog setup, git discipline).

Static Astro site. No backend, no database. Currently running locally only — **not deployed**.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the build locally |
| `npx astro check` | Type-check the project |

## Project structure

```
src/
├── styles/tokens.css        # ALL colors/typography as CSS custom properties. Provisional,
│                             # every value tagged TODO P-114. Reskinning = edit this file only.
├── lib/
│   ├── analytics.ts          # single isolated point for PostHog — currently a no-op (P-004/P-117)
│   └── feedback.ts           # single isolated point for the feedback tracker — no-op (P-116)
├── layouts/BaseLayout.astro  # meta tags, tokens import, global reset
├── components/
│   ├── WaitlistForm.astro    # two instances on the page (hero + bottom), synced + persisted locally
│   └── FeedbackWidget.astro  # bottom-right feedback panel, not wired to any tracker yet
└── pages/index.astro         # the page
```

## Internal preview

- There is a Vercel URL for internal pod review. That URL existing and being reachable does
  **not** count as a launch — it's a review copy, not a live product.
- The repo `rociotorres-dotcom/My-repository` is Carolina's personal working repo. The official
  repo goes under the **client's** GitHub org — that move is still pending on P-116.
- The form deliberately says "Preview only — signups aren't being saved yet." This page is not
  shared with the founder orbit users yet, and shouldn't be until that message is gone.

## NO PUBLIC LAUNCH UNTIL

The form currently shows a placeholder success message ("Preview only — signups aren't being
saved yet") because nothing persists a real submission anywhere. Shipping the real copy
("You're on the list. We'll be in touch.") to a live URL before these are resolved means
promising real people something false — that's a direct conflict with the brand's Rigor value
("if we can't stand behind it, we don't show it"). Do not launch publicly until all of the
following are true:

- [ ] **P-117** — the analytics tool is confirmed with the client (PostHog was never mentioned in
      the kickoff, and the task map assumes it as the measurement backbone)
- [ ] **P-004** — PostHog project created and the API key is in the env vars
- [ ] The waitlist form submit **actually persists the email somewhere** (not just fires an event
      that goes nowhere) — this is also the condition for reverting `WaitlistForm.astro`'s success
      message back to the real copy
- [ ] **P-002** — domain confirmed
- [ ] **P-018** — PostHog's sending-domain DNS is verified green (Settings → Pipelines →
      Channels). Depends on P-002; verification can take days once DNS is submitted. Until it's
      green, every waitlist email fails silently with "email integration domain is not verified" —
      so this can't be checked off just because P-002 closed, it has to be checked separately after
      DNS actually propagates and shows verified.
- [ ] **P-116** — decided where feedback widget submissions actually route (Basecamp is the
      client's official channel; the task map assumes GitHub Issues)
- [ ] Legal pages (Privacy Policy, Terms) are live at a real URL. The client's attorney drafts
      these, or the client self-generates them — Designli does not write client legal documents.

When every box above is checked, revert the WaitlistForm success message and remove the TODO
comment next to it — that's the last step before `vercel --prod`.
