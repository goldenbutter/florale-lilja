# BUILD PROGRESS — blomsterbutikk-demo

> **Authoritative running log.** Every commit gets one entry. Newest entries at the **bottom** — append, never reorder. Any future agent or collaborator picking up this repo should be able to read this top-to-bottom and know exactly what state the build is in, why each decision was made, and how to revert.
>
> **Rules for keeping this file healthy:**
> 1. **Append a new entry for every commit. Never edit a past entry except to fix typos.** If a decision is reversed, add a new entry that explains the reversal — don't rewrite history.
> 2. The `Commit` field is filled in **after** the commit lands, by reading `git rev-parse --short HEAD`. Use `<pending>` while drafting.
> 3. Always describe **what changed**, **why** (link to spec / review feedback / customer ask / parity audit), and **how to revert** (commit SHA or specific files/lines).
> 4. Update `## Current state of each tier` at the bottom whenever a tier-level rule changes (e.g. "classic now has no animations", "premium now has X feature"). The change-log captures *the journey*; the current-state section captures *the destination*.
> 5. **Do not invent a different format.** If a section feels missing, add it consistently across all entries — don't reformat one entry differently from the others.

---

## Project context

- **Brand inside the prototype:** Florale Lilja (Orkanger, fictional studio florist, est. 2014)
- **Customer category:** small Norwegian florist / blomsterbutikk — generic enough to fork into any real florist customer
- **Architecture verdict:** vanilla HTML + CSS + JS (per `_docs/_skill/ARCHITECTURE-DECISION-GUIDE.md` row for `blomsterbutikk-demo` — catalog + Vipps order link, no real cart)
- **Two tiers ship together:**
  - `demo-blomsterbutikk-classic/` — simple static marketing site
  - `demo-blomsterbutikk-premium/` — classic + signature interactive features
- **Locked across both tiers (per family rules):**
  - Vipps demo modal phrase (NO): *"Dette er en demo — Vipps-betaling aktiveres når din konto er satt opp."*
  - Footer credit: *"Utviklet av Bithun"* (NO) / *"Developed by Bithun"* (EN where applicable)
  - Real `favicon.svg` (five-petal-flower glyph)
  - Vercel Web Analytics snippet on every page
  - OG/Twitter Card meta block on every page (absolute URLs, per-page banner image)
  - `robots.txt` `Disallow: /` + `<meta name="robots" content="noindex, nofollow">` on every page (staging stance)
- **Locked premium-only signature features:**
  1. Seasonal bouquet generator on `bouquetter.html` — pill-filter UI for occasion / colour mood / budget, reads inline `BOUQUETS` array, re-renders cards on click
  2. Bloom-of-the-week pulse badge on the homepage blooms strip (pure `translateY`/`scale` — no `rotate()`)
  3. Hover-to-reveal Latin name on bloom cards

---

## Change log (newest at bottom — append, do not reorder)

### Commit `<pending>` — Initial scaffold (classic + premium + Nano-Banana brief)
- **Date:** 2026-05-02
- **Type:** initial commit
- **Files touched:** entire prototype folder (~22 files across both tiers + .claude staging)
- **What:**
  - Created `blomsterbutikk-demo/` with both tier subfolders. Architecture inherited from `fiskeier-classic` template (file layout, NO/EN i18n wiring, mobile menu pattern, Vipps modal HTML, IntersectionObserver reveal pattern, Vercel Analytics snippet, footer credit). Aesthetic invented fresh per kickoff brief (NOT inherited from fiskeier).
  - **Aesthetic decisions (locked):**
    - Brand name: *Florale Lilja* — small studio florist in Orkanger, owner Ingrid Lilja, opened 2014. Tagline: *"Lokalt bundne buketter siden 2014."*
    - Palette: cream `#FBF7F2` · blush `#F4E6E0` · dusty rose `#C49A9A` · sage `#A8B8A0` · deep botanical green `#3A5A40`
    - Typography: Cormorant Garamond (display, italic for headlines) + Lato (body)
    - Hero treatment: full-bleed bouquet close-up with morning-light gradient overlay (NOT fiskeier's wave SVG; NOT bakeri's bread)
    - Section divider: sprig glyph on a hairline (single static SVG of stem + leaves) — replaces fiskeier wave / bakeri wheat-stalk
    - Address `Orkdalsveien 25, 7300 Orkanger`; phone `+47 72 48 11 22`; email `post@floralelilja.no`
  - **Section composition (homepage):** hero → today's blooms strip (4 blooms with Latin names) → sprig divider → occasion picker (5 anledninger: bryllup / begravelse / fødsel / kjærlighet / takk) → about florist (Ingrid welcome) → Vipps order CTA → contact strip
  - **Inner pages:** `bouquetter.html` (6 bouquet cards: Klassisk hvit / Pastell vår / Romantisk rosa / Sommerhilsen / Bårebukett / Bryllupsbukett — each with Vipps order button + FAQ), `om-oss.html` (story + photo grid + values), `galleri.html` (12-item masonry + lightbox), `kontakt.html` (info + map slot + opening hours), `404.html`.
  - **Classic tier:** 6 HTML pages, single `css/style.css` (~1290 lines), single `js/main.js` (~570 lines). EN toggle HTML-commented in nav + mobile menu. Visitor-badge `<img>` HTML-commented in every footer. Translations object PRESENT and ACTIVE (not yet wrapped — to be hardened in next commit per family-wide classic-tier locked contract).
  - **Premium tier:** same 6 pages + signature features. EN toggle visible. Visitor-badge rendered with `page_id=demo-blomsterbutikk-premium.ibithun.com`. Bloom-of-the-week pulse badge wrapped around first bloom card (pure `translateY`/`scale` keyframe, no `rotate()`). Bouquet generator section inserted on `bouquetter.html` between catalog and FAQ — pill-filter UI (occasion / mood / budget), inline `BOUQUETS` data, re-render on click. CSS-only hover-reveal of Latin name on bloom cards (`opacity 0 → 1, translateY 4px → 0`).
  - `favicon.svg` shipped real-file (not data URI) — five-petal-flower glyph in `#3A5A40` with `#C49A9A` centre.
  - `.gitignore`, `.claude/build-progress.md`, `.claude/Nano-Banana-prompt.md` (~14 image briefs covering hero, blooms strip, bouquet catalog, studio interior, about banner, gallery banner, kontakt-studio). The `.claude/Nano-Banana-prompt.md` location was corrected in the next commit to `.claude/_prompt/Nano-Banana-prompt.md` per the new family rule.
- **Why:** baseline before the family-wide canonical-template alignment + customer-style review. Lets every subsequent change be auditable.
- **How to revert:** `git reset --hard <this commit>` resets to the post-scaffold state.

### Commit `<pending>` — Adopt canonical `_docs/` template + family-wide locked contracts
- **Date:** 2026-05-02
- **Type:** chore
- **Files touched:** `.claude/build-progress.md` → `_docs/BUILD_PROGRESS.md` (rename + reformat); `.claude/Nano-Banana-prompt.md` → `.claude/_prompt/Nano-Banana-prompt.md` (move + reformat — agent-written prompts live under `.claude/_prompt/`, not `_docs/`); `.gitignore` (replaced with canonical template); new `CLAUDE.md` at repo root (gitignored); new `README.md` at repo root (tracked); new `vercel.json` + `robots.txt` per tier; `<meta name="robots" content="noindex, nofollow">` added to every HTML page in both tiers; classic tier `js/main.js` translations wrapped in `/* ... */`, init calls commented; classic tier `css/style.css` static-override + `:hover`-killer block appended; classic tier mobile menu redesigned as 240px right-anchored dropdown card; premium tier mobile menu redesigned as liquid-glass 240px floating card; premium tier `card-float` keyframe + pause-on-hover pattern added.
- **What:**
  - Migrated build log from `.claude/build-progress.md` to `_docs/BUILD_PROGRESS.md` per family-wide convention (every prototype keeps its tracked build log at `_docs/BUILD_PROGRESS.md`; `.claude/` stays gitignored). Reformatted to match `_docs/_skill/_templates/BUILD_PROGRESS.md` exactly. All facts from the original log preserved as the first commit entry above.
  - Migrated `Nano-Banana-prompt.md` to `.claude/_prompt/Nano-Banana-prompt.md` per the corrected family rule: prompts the AGENT writes for Bithun live under `.claude/_prompt/` (gitignored under `.claude/`); prompts BITHUN writes that the agent reads (e.g. `<biz>-no-website-search-prompt.md`) live under `_docs/_prompt/` (gitignored under `_docs/* + !_docs/BUILD_PROGRESS.md`). Reformatted Nano-Banana to the canonical structure: brand-context block → output-target folders → ratio cheat-sheet → image-roster summary table → numbered `[NN]` per-image sections.
  - `.gitignore` replaced with the canonical template — adds `_public/`, the `_docs/* + !_docs/BUILD_PROGRESS.md` exception, `.playwright-mcp/`, `*.png`, `.vscode/`, `.idea/`.
  - `CLAUDE.md` written at repo root from the canonical template, with all `<<<TOKEN>>>` placeholders resolved for Florale Lilja. Gitignored.
  - `README.md` written at repo root from the canonical template (tracked).
  - `vercel.json` + `robots.txt` copied verbatim from the canonical templates into both tiers.
  - `<meta name="robots" content="noindex, nofollow">` added to the `<head>` of every HTML page on both tiers (12 pages total — staging stance, never reword).
  - **Classic tier hardened to family contract:**
    - Entire `translations = { no: {...}, en: {...} }` object in `js/main.js` wrapped in a `/* ... */` block. Strings preserved verbatim — re-enable is a no-rewrite job.
    - `applyTranslations()` and `initLangToggle()` calls in `DOMContentLoaded` line-commented.
    - `initScrollAnimations()` call line-commented; `main.classList.add('page-fade')` line-commented.
    - Appended a *CLASSIC STATIC OVERRIDE* block to end of `css/style.css` killing every `transition`, `animation`, and hover transform via `*, *::before, *::after`. Forces `.reveal` and `.reveal-stagger` children visible by default.
    - Appended a dedicated `:hover`-state-killer block restoring base appearance for nav links, footer links, buttons, FAQ buttons, occasion cards, bloom cards, bouquet cards, gallery items.
    - Mobile menu redesigned: 240px-wide right-anchored dropdown card under the nav (was full-screen overlay). Solid white card, body-font links, hairline row dividers, soft drop shadow. JS hamburger handler updated to close-on-outside-click + Escape (no body-scroll lock).
  - **Premium tier hardened to family contract:**
    - Mobile menu redesigned: 240px-wide liquid-glass floating card anchored top-right under the nav. `rgba(251,247,242,0.55)` background with `backdrop-filter: blur(28px) saturate(170%)`, 1px sage-tinted border, deep botanical-green soft shadow. Slides in with `transform: translateY(-8px) scale(0.97) → 0/1` + opacity, cubic-bezier `(0.32, 0.72, 0.16, 1)` 0.42s spring.
    - `@keyframes card-float` added (pure `translateY` only — no `rotate()` to avoid Paint repaints). Applied to `.bouquet-card:nth-child(1..6)` with staggered durations (4.0s–5.4s) + delays (0.7s–1.6s). Pause-on-hover with sage-ring `box-shadow: 0 0 0 2px rgba(168,184,160,0.55), 0 0 32px rgba(196,154,154,0.35)` + `:hover` rule sourced AFTER the `:nth-child` shorthand + `!important` for safety.
    - `prefers-reduced-motion: reduce` fallback disabling all card-float animations.
- **Why:** family-wide canonical-template alignment audit (per `_docs/_skill/PROTOTYPE-BUILD-CHECKLIST.md`). The initial scaffold inherited fiskeier wiring but predated the bakeri-derived family-wide locked contracts (translations dormant in classic, static-override block in classic CSS, dropdown mobile menu in classic, liquid-glass mobile menu in premium, floating cards with pause-on-hover in premium, `noindex/nofollow` + `Disallow: /` staging stance, per-tier `vercel.json` + `robots.txt`). Bringing this prototype in line ensures the eventual customer-fork procedure inherits correct shape from day one and the parity audit at fork time has nothing to flag.
- **How to revert:** `git revert <sha>`. Big diff — easier to revert the whole commit than to hand-roll. Each sub-change is also reversible by hand from the diff stat.

### Commit `<pending>` — Wire 19 Nano-Banana photos into both tiers
- **Date:** 2026-05-02
- **Type:** feat(content)
- **Files touched:** 38 new `.jpg` image assets (19 per tier under `assets/images/`).
- **What:**
  - Bithun ran the 19 prompts in `.claude/_prompt/Nano-Banana-prompt.md` through Nano Banana and dropped the exports into `_public/` as `.jpeg` files (Nano Banana's default export format).
  - Agent copied each export from `_public/` into BOTH `demo-blomsterbutikk-classic/assets/images/` AND `demo-blomsterbutikk-premium/assets/images/`, renaming `.jpeg` → `.jpg` on copy to match the extension every HTML `<img src>` and inline `background-image: url(...)` already references. Originals stay untouched in `_public/` for re-rolls.
  - Final wired set per tier: `hero-bouquet.jpg`, `studio-portrait.jpg`, `bloom-{pioner,ranunkel,anemone,eukalyptus}.jpg`, `bouquet-{classic-white,pastel-spring,romantic-pink,summer,funeral,wedding}.jpg`, `about-banner.jpg`, `gallery-banner.jpg`, `kontakt-studio.jpg`, `photo-{bench,pioner-detail,studio-side,bridal-detail}.jpg` (19 unique sources).
  - Cross-check verified: every `<img src="assets/images/*.jpg">` and every `background-image: url('assets/images/*.jpg')` reference in all 12 HTML pages resolves to an existing file on disk on both tiers. Premium `BOUQUETS` data array image references all resolve.
- **Why:** photos arrived from Bithun's Nano Banana run. Both tiers now render with real placeholder imagery instead of broken `<img>` tags.
- **How to revert:** `git revert <sha>` removes the 38 image files from both tiers. Originals remain in `_public/` (gitignored, never affected by the revert).

### Commit `<pending>` — READINESS.md self-audit + four ❌ fixes uncovered during the run
- **Date:** 2026-05-04
- **Type:** chore + fix
- **Files touched:** new `READINESS.md` at prototype root (~250 lines, tracked); `demo-blomsterbutikk-classic/404.html` (added OG/Twitter meta block); `demo-blomsterbutikk-premium/404.html` (added OG/Twitter meta block + `og:locale:alternate`); `demo-blomsterbutikk-premium/bouquetter.html` (added missing mobile-menu lang-toggle button); 10 HTML files across both tiers (`og:image:width/height` corrected from 1600×900 to actual JPG dims); `demo-blomsterbutikk-classic/css/style.css` + `demo-blomsterbutikk-premium/css/style.css` (mobile-menu `inset: auto` reordered to before the longhands).
- **What:**
  - **Created `READINESS.md`** at the prototype root per the new family-wide Rule 9 (`_docs/_prompt/BUSINESS-KICKOFF-PROMPTS.md` Rule 9, 2026-05-04). Filled in via self-audit covering family-wide locks, tier integrity, Playwright-driven browser smoke test, OG meta inspection, outstanding TODOs, and drift-from-bakery analysis. Sign-off line left unchecked for Bithun.
  - **Fix 1 — 404.html OG/Twitter meta added on both tiers.** Family rule "OG meta on every HTML page (5 pages, including 404)" was failing — both 404 pages had ZERO `og:` or `twitter:` tags. Added the full block (`og:type`, `og:site_name`, `og:locale`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) referencing `hero-bouquet.jpg` (the existing canonical brand hero). Premium 404 also got `og:locale:alternate=en_US` for the bilingual contract.
  - **Fix 2 — Premium `bouquetter.html` mobile-menu lang-toggle button added.** Audit revealed every premium HTML page had 2 `lang-toggle` references (nav + mobile-menu) except `bouquetter.html` which had only 1 (nav). Added `<button type="button" class="lang-toggle" id="mobile-lang-toggle">EN</button>` as the last child of `<div class="mobile-menu">` to match the pattern of the other 5 premium pages.
  - **Fix 3 — `og:image:width/height` corrected to match actual JPG dimensions.** All 10 affected HTML pages declared `og:image:width=1600 og:image:height=900` but the actual content imagery is `1376×768` for landscape (hero-bouquet, gallery-banner, about-banner, kontakt-studio) or `896×1200` for portrait (bouquet-romantic-pink). Updated to match reality so Facebook/WhatsApp previews don't get mis-hinted dimensions. Note: dedicated `og-*.jpg` variants at 1200×630 <200 KB per the family rule remain a ⚠️ launch-blocker pending Nano-Banana run.
  - **Fix 4 — CSS `inset: auto` declaration order bug in mobile-menu @media block (BOTH TIERS).** Discovered during Playwright browser smoke test: premium and classic mobile menus were anchored top-LEFT instead of top-RIGHT. Inspecting computed styles showed `top: auto, right: auto, left: auto` even though the source had `top: 80px; right: 1rem; left: auto` declared. Root cause: the `inset: auto` line appeared AFTER the four longhand declarations within the same rule block; CSS cascade-within-block resolved `inset: auto` (shorthand) as the last writer, resetting all four longhands set above it. Fix: moved `inset: auto` to BEFORE the four longhands. Verified visually after fix — premium now correctly anchors at `top: 80px; right: 1rem` with liquid-glass blur over hero; classic anchors at the same position with solid white card. The lesson: don't mix `inset: <value>` with longhand `top/right/bottom/left` declarations in the same rule block — pick one or order shorthand-first.
- **Why:** Rule 9 of `BUSINESS-KICKOFF-PROMPTS.md` (added 2026-05-04) requires every prototype to produce a `READINESS.md` self-audit before requesting Bithun's sign-off. The four code fixes are issues uncovered by following the audit checklist — none of them were intentional, and all four are unambiguously failing family-wide locks or tier-defining contracts that Bithun would have caught during a manual review.
- **How to revert:** `git revert <sha>` (when committed). Each sub-fix is also independently reversible — the diffs are small and localised.

### Commit `<pending>` — Premium animation parity with bakeri/bilverksted (6 fixes)
- **Date:** 2026-05-04
- **Type:** fix
- **Files touched:** `demo-blomsterbutikk-premium/css/style.css` only — six surgical edits, no HTML/JS changes.
- **What:** User reviewed premium against bakery/bilverksted and reported that animations/effects were weaker or missing. Cross-verification audit (delegated to Explore sub-agent against bakeri's premium CSS lines 2105–2264 and bilverksted's premium CSS lines 1850–1983) confirmed 4 of 6 reported issues as real spec violations. Six fixes applied:
  - **Fix 1 — `@keyframes card-float` strengthened to 3-point shape** (was 2-point with `translateY(-7px)` only). Now: `0%/100%: Y(0) scale(1)`, `45%: Y(-16px) scale(1.018)`, `72%: Y(-7px) scale(1.008)` — matches bakeri's lift profile and bilverksted's scale-on-peak. Restores the "pop" perception on bouquet cards.
  - **Fix 2 — Gallery filter switched from `saturate` to `grayscale`.** `.gallery-item img` now defaults to `filter: grayscale(100%)` and reveals colour on hover (`grayscale(0%)`). Transition extended from 0.5s to 0.6s to match bakery. The bakery-locked B&W-→-colour reveal pattern now works.
  - **Fix 3 — Gallery 3-rhythm parallax drift added.** Two new keyframes (`gallery-drift-down` and `gallery-drift-up`, both pure `translateY` ±8px over 9s). Applied to `.gallery-grid .gallery-item:nth-child(3n+1/2/3)` with staggered 0/0.4/0.8s delays. Items pause on hover so the active card stays steady for the colour-reveal interaction. Bakery's pattern uses 3 explicit `.gallery-col` divs; blomsterbutikk's HTML is flat masonry (`.gallery-grid > .gallery-item`), so the staggered every-third-item approach approximates the bakery 3-column drift without restructuring HTML. Mobile @media (max-width: 768px) kills the drift to keep small viewports calm.
  - **Fix 4 — `.occasion-icon` horizontal drift animation added** (5 staggered). Ported bilverksted's `serviceIconDrift` pattern. New keyframe `occasion-icon-drift` (pure `translateX` ±6px over 3.6s–4.4s). Applied to all 5 occasion cards' SVG icons (Bryllup/Begravelse/Fødsel/Kjærlighet/Takk) with staggered delays 0.2s/0.6s/1.0s/0.4s/0.8s. Icons pause when their parent `.occasion-card` is hovered. Restores the "moving parts" feel that bilverksted's premium has.
  - **Fix 5 — `transform: translateY(-3px) !important` removed from `.bouquet-grid .bouquet-card:hover`.** Bakery and bilverksted do NOT lift the card on pause — the card stays at its current animated Y position when paused, only adding the ring shadow. The Y-override on blomsterbutikk caused a "jump" on pause that made the hover feel non-standard. Removed.
  - **Fix 6 — `@media (prefers-reduced-motion: reduce)` guard expanded** from 1 selector to 5: now kills `animation` on `.bouquet-card`, `.gallery-item`, `.occasion-icon`, `.pulse-badge::before`, `.bloom-of-the-week .pulse-dot`, AND disables `transition` on `.gallery-item img`, `.gallery-item:hover img`, `.bloom-card .bloom-latin`. Accessibility users now get a fully-static experience consistently. Closes the WCAG 2.3.3 gap noted in `READINESS.md` §1.
- **Why:** user feedback after first browser walk-through reported card animations weaker than bakery, no hover ring action, no icon motion, no gallery B&W effect, gallery feeling "dead" with too much whitespace, and mobile premium showing none of the effects. Cross-verification confirmed each report as a spec violation against the locked premium contract from bakeri (CLAUDE.md §"Premium tier" lines 45–59) and bilverksted (CLAUDE.md §"Premium tier" lines 23–44). The fixes bring blomsterbutikk premium up to the same animation parity tier — without touching the three locked blomsterbutikk-specific signature features (bouquet generator, bloom-of-the-week pulse badge, hover-to-reveal Latin name), all of which still verify correctly.
- **How to revert:** `git revert <sha>` reverses all six edits in one commit. Each fix is also independently reversible by hand from the diff (six small contiguous CSS blocks). The audit cross-verification report is preserved verbatim in the conversation log if a future agent needs to re-derive any of the values.

### Commit `<pending>` — Lightbox containing-block fix + values-icon bob
- **Date:** 2026-05-04
- **Type:** fix + feat
- **Files touched:** `demo-blomsterbutikk-premium/galleri.html` (moved lightbox `<div>` outside `<main>`), `demo-blomsterbutikk-premium/css/style.css` (added `.value-icon` bob animation block).
- **What:**
  - **Fix 8 — Lightbox cropped on desktop and didn't open on mobile.** Diagnosed via Playwright `getBoundingClientRect`: lightbox was sized 1280×2267 instead of 1280×900 (viewport), with `parentElement.tagName === 'MAIN'`. Root cause: `<main class="page-fade">` carries a residual `transform: matrix(1,0,0,1,0,0)` from the `fadeUp` keyframe's end state (animation-fill-mode: both keeps the final frame's transform applied). Per CSS spec, ANY `transform` value other than `none` makes that element a containing block for descendant `position: fixed`. So the `.lightbox`'s `position: fixed; inset: 0` was anchoring to `<main>`'s 2267px-tall box (full document height) rather than the viewport — image landed below the visible area, looking cropped on desktop and entirely hidden on mobile (where the offset pushed it offscreen). Classic doesn't have this bug because classic's static-override block kills the `fadeUp` animation entirely so `<main>` keeps `transform: none`. **Fix:** moved the `<div class="lightbox" id="lightbox">` block out of `<main>` so it's a direct child of `<body>`. Added a comment explaining WHY it's outside `<main>` so a future agent doesn't re-introduce the bug. Verified via Playwright at both 1280×900 desktop and 390×844 mobile: lightbox now sized correctly, image centered, all controls (×, ‹, ›, caption) anchor to viewport.
  - **Fix 7 — `.value-icon` vertical bob added on `om-oss.html`.** User flagged the three "Slik jobber vi" SVG icons (clock / handcraft / leaf) as static — should match the moving-parts feel of the homepage occasion grid. New keyframe `value-icon-bob` (pure `translateY` ±5px over 3.6s–4.4s). Applied to all 3 `.value-block` SVG icons with staggered delays 0.3s/0.7s/1.1s. Pure Y-bob (not X-drift) chosen because the icons stack vertically inside `.value-block` — X-drift would slide them out of column. Pauses when parent `.value-block` is hovered. Also added `.value-icon` to the comprehensive `prefers-reduced-motion: reduce` guard via the existing pattern.
- **Why:** user reported the gallery lightbox sometimes opened cropped on desktop and never opened on mobile (premium only — classic worked). User also reported the "How we work" / "Slik jobber vi" icons should drift like the occasion icons. Both are spec-parity asks against the bakery/bilverksted floating-elements contract.
- **How to revert:** `git revert <sha>` reverses both edits. The HTML move is one block; the CSS addition is one named-section block at the end of the premium animation extras region.

### Commit `<pending>` — Photo collage layout + true 3-column gallery parallax
- **Date:** 2026-05-04
- **Type:** fix + chore
- **Files touched:** `demo-blomsterbutikk-classic/css/style.css`, `demo-blomsterbutikk-premium/css/style.css`, `demo-blomsterbutikk-premium/galleri.html`.
- **What:**
  - **Fix A — About-section photo collage rebuilt to bakery's locked 4-tile layout (BOTH tiers).** Old CSS used `grid-template-rows: auto auto` + per-item `height: 340px / 162px / 280px` and no row-spans — caused the `.large` tile to fill row 1 col 1, `.small-top` to fill row 1 col 2, then `.small-bottom` to wrap onto row 2 col 1 (full-width!) instead of stacking under `.small-top`. Aligned exactly to bakery's spec at `bakeri-demo/demo-bakeri-premium/css/style.css:1253-1285`: `grid-template-rows: 230px 230px 460px` + explicit `grid-column/grid-row` per item (`large` → col 1 rows 1–3, `small-top` → col 2 row 1, `small-bottom` → col 2 row 2, `wide` → col 1/-1 row 3). Added `object-position: center 35%` to keep face/subject in frame, and `center 45%` for the wide bottom-spanner. Mobile @media at 768px collapses to 1-column 240px stack (already present, no change). User reported the collage looked broken on both tiers — root cause was the missing row-spans.
  - **Fix B — Gallery restructured to bakery's locked 3-column parallax (premium only).** User reported that bakery's gallery shows columns 1 + 3 drifting up while column 2 drifts down (1↑ / 2↓ / 3↑ rhythm) and that this rhythm was missing on blomsterbutikk. Audit revealed: the previous fix (per-item drift on `:nth-child(3n+N)` against a flat CSS-columns masonry) was a workaround for HTML that lacked explicit column wrappers — visually it didn't read as 3-column parallax because items in the same masonry column animated out of sync. **Restructured `galleri.html`** from a flat 12-item `.gallery-grid > .gallery-item` masonry into bakery's exact pattern: `.gallery-grid` flex container with 3 `.gallery-col` flex children, each containing 4 `.gallery-item`s (distributed by source-index modulo 3 so every third item lands in the same column). **Updated CSS** (`.gallery-grid` from `columns: 3` to `display: flex; gap: 12px`, added `.gallery-col` flex-column + `flex: 1`, removed per-item drift rules and replaced with per-column drift). **Strengthened keyframes** to bakery's exact `±10px` shape: `gallery-drift-down` runs Y(-10px) → Y(10px) → Y(-10px) over 9s, `gallery-drift-up` runs Y(10px) → Y(-10px) → Y(10px) (inverse phase). Applied to `.gallery-col:nth-child(1)` (down, 0s delay), `:nth-child(2)` (up, 0.4s delay), `:nth-child(3)` (down, 0.8s delay) — exactly matches `bakeri-demo/demo-bakeri-premium/css/style.css:2201-2220`. Replaced item-level `:hover { animation-play-state: paused }` with column-level `:has(.gallery-item:hover)` so the active column pauses when any thumbnail inside it is hovered. Mobile `@media (max-width: 768px)` collapses `.gallery-grid` to `flex-direction: column` (vertical stack) and kills `.gallery-col` animation. The `prefers-reduced-motion: reduce` guard was updated from `.gallery-grid .gallery-item` to `.gallery-col`. Classic gallery left as-is (user explicitly said classic gallery is fine).
- **Why:** user review against bakery turned up two layout-spec violations: (1) the about-collage was structurally wrong on both tiers because no row-spans were defined — items wrapped incorrectly; (2) the gallery's 3-column parallax pattern was implemented per-item against a flat masonry, which doesn't visually read as the column-level rhythm the user expected from bakery's locked spec. Both fixes bring the prototype's layout AND animation profile up to bakery parity.
- **How to revert:** `git revert <sha>` reverses both edits. Each is independently reversible by hand: the about-grid CSS is one block per tier; the gallery restructure is one HTML rewrite + adjacent CSS block (drift rules + mobile @media + reduced-motion guard).

### Commit `<pending>` — Stray V SVG removed, bloom-float, button-hover smoothed, hero typewriter rotator
- **Date:** 2026-05-04
- **Type:** fix + feat
- **Files touched:** `demo-blomsterbutikk-classic/bouquetter.html`, `demo-blomsterbutikk-premium/bouquetter.html`, `demo-blomsterbutikk-premium/index.html`, `demo-blomsterbutikk-premium/css/style.css`, `demo-blomsterbutikk-premium/js/main.js`.
- **What:**
  - **Fix 1 — Stray "v" before BESTILL VIA VIPPS (both tiers).** First bouquet card (`b1`, "Klassisk hvit") had an inline 14×14 SVG with a `<text>V</text>` element rendering as a tiny lowercase "v" in front of the button label. The other 5 bouquet cards already had clean text-only buttons — the SVG on b1 was a copy-paste leftover from an earlier Vipps-logo experiment. Removed the SVG; b1 now matches the other 5 buttons exactly (`<button class="btn btn-primary vipps-trigger">Bestill via Vipps</button>`). Applied to both tiers.
  - **Fix 2 — `.bloom-card` floating animation added (premium home blooms strip).** User reported floating-effect was missing from cards. Bouquet-grid cards on `bouquetter.html` already had `card-float`, but the four bloom cards on the homepage strip (Pioner / Ranunkel / Anemone / Eukalyptus) were static. Added `@keyframes bloom-float` (3-point shape `Y(0) → Y(-12px) scale(1.012) → Y(-5px) scale(1.005) → Y(0)`, lighter amplitude than `card-float` since bloom cards are smaller and a 16px lift would feel jumpy). Applied to all 4 `.blooms-grid .bloom-card` children with staggered durations 4.0s/4.6s/4.8s/5.2s and delays 0.4s/0.6s/0.9s/1.3s. Pause-on-hover with sage ring `box-shadow` mirrors the `.bouquet-card:hover` pattern. Added `.blooms-grid .bloom-card` to the `prefers-reduced-motion: reduce` guard.
  - **Fix 3 — `.btn-primary:hover` smoothed (no colour shift).** User reported the green Vipps buttons "make some different color when i hover mouse" — referring to the `background: var(--color-primary-dark)` swap from `#3A5A40` → `#2D4630`. Removed the background change from `:hover`; kept `transform: translateY(-2px)` and softened the box-shadow from `0 4px 16px rgba(58,90,64,0.3)` to `0 6px 20px rgba(58,90,64,0.28)` (slightly larger lift, slightly softer shadow). Hover affordance now signals via lift + sage-tinted shadow only — brand green stays consistent.
  - **Fix 4 — Hero typewriter rotator (premium index.html).** User reported the EN headline "Hand-tied, stem by stem" wraps to 2 lines on narrower viewports while NO stays on 1, asked to apply bilverksted's typewriter pattern instead. Restructured to bilverksted's locked pattern at `bilverksted-demo/demo-bilverksted-premium/js/main.js:637-736` and CSS `:1990-2024`:
    - **HTML:** `<h1 data-i18n="hero.headline">` now contains `<em class="hero-rotator" data-rotator="1"></em>` after the fixed prefix. NO prefix = "Bundet for hånd, "; EN prefix = "Hand-tied, ".
    - **Translation keys:** added `hero.rotator.0..3` for both languages — NO: `blomst for blomst` / `med rolige hender` / `i sesongens farger` / `siden 2014`; EN: `stem by stem` / `with quiet care` / `in season colour` / `since 2014`. The fixed prefix never moves; only the `<em>` rotates.
    - **JS:** ported bilverksted's `revealHero()` verbatim — single timer chain (`heroRotatorTimer`), per-character type 75ms / delete 40ms, hold 1800ms / gap 320ms. Off-screen `<span>` probe measures the widest phrase before typing starts and reserves `min-width` on the slot so the H1 doesn't reflow horizontally as phrases swap. `prefers-reduced-motion: reduce` short-circuit renders the first phrase statically without typing. Re-init on `toggleLanguage()` so phrases swap to the new language without leaving a half-typed Norwegian word on screen.
    - **applyTranslations() change:** the existing function only switched to `innerHTML` if the value contained `\n`. Extended to also use `innerHTML` if the value contains `<em`, `<span`, or `<br` — needed so the `<em class="hero-rotator">` markup renders rather than being escaped as text content.
    - **CSS:** `.hero-rotator` styled italic `nowrap` `min-width: 1ch`; `.hero-rotator::after` is the blinking caret (0.06em × 0.86em pseudo-element with `heroCaretBlink` keyframe — 0.9s steps(2, start) infinite, using the `visibility` property exactly like bilverksted). Caret hides during `.is-typing`/`.is-deleting` states. Added `.hero-rotator::after` to the `prefers-reduced-motion: reduce` guard.
- **Why:** user review comparing premium against bilverksted's polish surfaced four issues. Each fix was verified against the locked spec — Fix 4 in particular ports the `revealHero()` pattern verbatim from bilverksted (same timer constants, same probe pattern, same caret CSS) so a single mental model spans both prototypes.
- **How to revert:** `git revert <sha>` reverses all four edits. Each is independently reversible by hand: Fix 1 re-adds the `<svg>` block on b1; Fix 2 removes the `bloom-float` CSS section; Fix 3 restores the `background: var(--color-primary-dark)` line in `.btn-primary:hover`; Fix 4 restores the original H1 string in both translation maps + removes the `revealHero()` function + caret CSS.

### Commit `<pending>` — btn-accent hover smoothed + nav-logo rotate-on-hover
- **Date:** 2026-05-04
- **Type:** fix + feat
- **Files touched:** `demo-blomsterbutikk-premium/css/style.css` only.
- **What:**
  - **Fix — `.btn-accent:hover` background colour shift removed.** The previous fix only addressed `.btn-primary:hover` (used on the bouquet card buttons). The hero CTA "SE SESONGENS BUKETTER" actually uses `.btn-accent`, which still had `background: var(--color-primary-dark)` swapping on hover (`#3A5A40` → `#2D4630`). Removed the `background` and `border-color` overrides from `.btn-accent:hover`. Hover now signals via `transform: translateY(-2px)` + softened `box-shadow: 0 6px 20px rgba(58, 90, 64, 0.28)` only — same pattern as `.btn-primary:hover` for consistency. Brand green stays put on every green CTA across the site.
  - **Feat — Nav-logo rotate-on-hover** (inspired by bilverksted's `nav-logo:hover svg { transform: rotate(360deg) }` at `bilverksted-demo/demo-bilverksted-premium/css/style.css:147-157`). Added `.nav-logo svg { transform-origin: center; transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) }` and `.nav-logo:hover svg { transform: rotate(360deg) }`. Hovering the brand mark spins the SVG glyph one full turn over 0.6s with a polished spring easing — a subtle "alive" cue that matches bilverksted's signature. The family-wide rule against `rotate()` in keyframes specifically targets infinite animations (Paint repaints kill 60fps); a one-shot `transition` is fine because it runs once, GPU-composites, and stops. Killed under `prefers-reduced-motion: reduce` so accessibility users see no transform.
- **Why:** user reported (a) green button hover still flashes a colour shift — found that the previous pass only fixed `.btn-primary` and missed `.btn-accent` (the larger CTA variant used on hero/cta sections); (b) wanted the nav logo to rotate on hover like bilverksted does. Both fixes bring the prototype's interactive polish up to bilverksted parity.
- **How to revert:** `git revert <sha>`. Each fix is independently reversible — Fix 1 restores the `background: var(--color-primary-dark); border-color: var(--color-primary-dark)` lines in `.btn-accent:hover`; Fix 2 removes the `transition`/`transform-origin` properties from `.nav-logo svg` and the `.nav-logo:hover svg` block + reduced-motion guard.
- **Verified via Playwright with live hover state:** `.btn-accent` after `hover()` returns computed `backgroundColor: rgb(58, 90, 64)` (= unchanged `--color-primary`) with `transform: matrix(1, 0, 0, 1, 0, -1.85)` (mid-lift). `.nav-logo svg` after hover returns `transform: matrix(0.988, -0.152, 0.152, 0.988, 0, 0)` ≈ 8.7° (mid-rotation toward full 360° at 600ms).

### Commit `<pending>` — Visible green-button hover (deep → light sage + cream text)
- **Date:** 2026-05-04
- **Type:** fix
- **Files touched:** `demo-blomsterbutikk-premium/css/style.css` only.
- **What:**
  - **New brand variable `--color-primary-light: #5C8A63`** added to `:root` — a sage-leaning green ~18% lighter than `--color-primary` (#3A5A40), still in-palette with the dusty rose / sage / botanical green florist aesthetic.
  - **`.btn-primary:hover` and `.btn-accent:hover`** updated to shift from deep green → light sage on hover, with text warming from pure white to `--color-bg` (#FBF7F2 cream). Lift + soft shadow kept. The previous "no colour shift" version was technically correct (no jarring jump) but visually too subtle — user couldn't tell the button was hoverable. New version: clearly visible, brand-coherent, no clash.
  - **Verified live via Playwright hover:** computed `backgroundColor` shifts from `rgb(58, 90, 64)` (#3A5A40 rest) to `rgb(92, 138, 99)` (#5C8A63 hover); text colour shifts from `rgb(255, 255, 255)` to `rgb(251, 247, 242)`; transform = `translateY(-2px)`.
- **Why:** user reviewed previous hover (lift + shadow only, no colour change) and reported it was visually too quiet — wanted a clear "deep green → light green" signal. The fix lands the same hover affordance pattern bilverksted/bakery use (visible bg-colour change on interactive elements), but uses a sage-leaning lighter shade that fits the florist palette rather than the dark-green-ON-darker-green pattern (which was the original violation).
- **How to revert:** `git revert <sha>`. Removes the new `--color-primary-light` declaration and restores the previous "no colour shift" hover blocks.

### Commit `<pending>` — Premium hero video, mobile focal centering, hero CTA spacing
- **Date:** 2026-05-04
- **Type:** feat + fix
- **Files touched:** `demo-blomsterbutikk-premium/index.html`, `demo-blomsterbutikk-premium/css/style.css`, `demo-blomsterbutikk-classic/index.html`, `demo-blomsterbutikk-classic/css/style.css`. Bithun replaced `assets/images/hero-bouquet.jpg` (new still) and dropped `assets/images/hero-bouquet.mp4` (3.3 MB, premium hero loop) into the premium tier folder.
- **What:**
  - **Feat — Premium hero video wired in.** Replaced the static `<div class="hero-bg" style="background-image: url(...)">` on premium `index.html` with a real `<video class="hero-video" autoplay muted loop playsinline preload="auto" poster="assets/images/hero-bouquet.jpg">` that points at the new `hero-bouquet.mp4`. The poster attribute doubles as the fallback image when the browser blocks autoplay (iOS low-power, prefers-reduced-data, etc.). New `.hero-video` CSS rule sits next to `.hero-bg` with the same `position: absolute; inset: 0; object-fit: cover; object-position: center 45%` shape so the video scales identically to the static fallback. `pointer-events: none` so the layer doesn't intercept clicks. **Classic kept on the static `.hero-bg` (no video)** — the new still is now the canonical classic hero.
  - **Fix — Mobile hero focal centering (BOTH tiers).** Previous mobile @media block had `background-position: 25% 45%` which pushed the bouquet off-axis on phones. Changed to `center 50%` so the flower lands in the middle of the visible frame. Premium also adds `object-position: center 50%` for the new `.hero-video` element. Verified via Playwright at 390×844: computed `objectPosition: "50% 50%"` (premium) and `backgroundPosition: "50% 50%"` (classic). Per the prototype's CLAUDE.md, the hero positioning values are "LOCKED empirical values" — this update brings the locked desktop default `center 45%` and the new mobile `center 50%` into one record (logged below; see also `_docs/BUILD_PROGRESS.md` Locked-values section if separated later).
  - **Fix — Hero CTA buttons cramped (BOTH tiers).** Previous markup had the two hero buttons as direct flex children of `.hero-content` with no gap container — on mobile they touched, on desktop they relied on inline whitespace. Wrapped them in a new `<div class="hero-cta-row">`. New `.hero-cta-row` rule: desktop `display: flex; flex-wrap: wrap; gap: 0.9rem 1rem`. Mobile @media `flex-direction: column; gap: 0.85rem` and `.hero-cta-row .btn { width: 100%; justify-content: center }` — full-width stacked buttons with comfortable separation. Bilverksted uses the identical `.hero-cta-row` pattern.
- **Why:** user dropped a new hero stills + a hero video into the premium folder and asked them wired in. Same review surfaced two layout issues — the bouquet was off-axis on mobile (focal point at `25% 45%` looked good on the old shot but cuts the new bouquet off-center), and the two CTA buttons rendered too close together (no gap container). All three fixes applied in one pass to keep the hero polish consistent across viewports.
- **How to revert:** `git revert <sha>`. Each fix is independently reversible: swap the `<video>` block for the old `<div class="hero-bg">` to disable video; restore `background-position: 25% 45%` in the mobile @media block; remove the `<div class="hero-cta-row">` wrapper and its CSS rules.

### Commit `<pending>` — Nav-link hover: brown text, no underline (premium)
- **Date:** 2026-05-04
- **Type:** fix
- **Files touched:** `demo-blomsterbutikk-premium/css/style.css` only.
- **What:**
  - **New brand variable `--color-brown: #7A5A3F`** added to `:root` — a warm earthy brown that picks up the kraft-paper wrappings in the bouquet imagery and sits well next to the dusty-rose `--color-accent`.
  - **`.nav-links a:hover`** simplified: removed the underline-grow effect (was `::after { width: 0 → 100% }` on hover) and shifted text colour from `--color-primary` (green) to `--color-brown`. The `::after` underline element still exists but only animates to `width: 100%` for the **active route** (so visiting users still see a "you are here" cue on the current page) — separated `:hover` and `.active` selectors that previously shared one block.
  - **Verified live via Playwright hover:** computed text colour `rgb(122, 90, 63)` (= `#7A5A3F`); `::after` width = `0px` on hover. Active route still shows green `::after { width: 100% }`.
- **Why:** user reviewed nav and asked for (a) no underline on hover (it was visually busy) and (b) brown text colour instead of green so hover doesn't compete with the active-route green underline. Decision: **kept the green underline as the active-route marker** (different signal than hover) so users can still see where they are. Hover signals interactivity via colour alone.
- **How to revert:** `git revert <sha>`. Removes the `--color-brown` variable and restores the previous `.nav-links a:hover, .nav-links a.active { color: var(--color-primary) }` + `.nav-links a:hover::after { width: 100% }` block.
- **Note on classic:** classic already had `color: inherit !important` on hover and `width: 0 !important` on `::after` via the static-override block — no change needed.

### Commit `<pending>` — Nav-link underline removed entirely; .active = brown
- **Date:** 2026-05-05
- **Type:** fix
- **Files touched:** `demo-blomsterbutikk-premium/css/style.css` only.
- **What:**
  - **Removed the `.nav-links a::after` pseudo-element rule entirely.** Previously the rule defined a hairline that grew from `width: 0` to `width: 100%` on `.active` (after the previous pass already disabled it on hover). User wanted no underline anywhere — removed the declaration block so the `::after` no longer renders (computed `content: none`).
  - **`.nav-links a:hover` and `.nav-links a.active` now share one rule:** `color: var(--color-brown)`. Both states signal via the warm brown text colour alone — no underline, same colour treatment for both states (hover + active feel like one consistent "highlighted" state).
  - **Verified live via Playwright on `kontakt.html`** (where Contact is the active route): all 5 nav links return `::after content: none`. Active (`Contact`) and hovered (`Bouquets`) both compute `color: rgb(122, 90, 63)` (= `#7A5A3F`). Rest links compute `rgb(110, 123, 110)` (= `--color-text-light` grey).
- **Why:** user reviewed the previous "active uses green underline as you-are-here marker" decision and asked for **no underline anywhere** + **brown for both hover and active**. Cleaner visual signature; the active route is still discernible because brown contrasts more with the muted grey rest state than green-on-grey did, even without the underline.
- **How to revert:** `git revert <sha>`. Restores the `.nav-links a::after` block + the previous separated `:hover` / `.active` rules (hover = brown, active = green underline).

### Commit `<pending>` — Add GitHub MCP permissions block to CLAUDE.md
- **Date:** 2026-05-05
- **Type:** docs
- **Files touched:** `CLAUDE.md` (gitignored — not part of this commit's tracked diff). Build log is the only tracked artefact.
- **What:** Inserted `## GitHub permissions (when GitHub MCP is connected)` block per family-wide policy (`C:\Project\prototypes\_docs\_skill\GITHUB-AGENT-PERMISSIONS.md`). Section sits between `## Family-wide locks` and `## Anti-patterns`. Scopes the agent to `goldenbutter/florale-lilja` only, with the 5-check pre-push gate. Repo will be created on first MCP-driven push (Phase 3 of the GitHub MCP rollout). Instruction file `.claude/_prompt/github-mcp-permissions-update.md` deleted after applying.
- **Why:** GitHub MCP enabled family-wide on 2026-05-05. Blomster is the first prototype to test the new MCP-driven repo-creation flow — applying this instruction is the prerequisite to that test.
- **How to revert:** delete the inserted `## GitHub permissions` section from CLAUDE.md. (CLAUDE.md is gitignored, so revert is manual file edit, not `git revert`.)

> **Template entry — copy and fill in for every subsequent commit:**
>
> ```
> ### Commit `<sha>` — <short title>
> - **Date:** YYYY-MM-DD
> - **Type:** feat | fix | chore | refactor | revert | docs
> - **Files touched:** <list>
> - **What:** <factual description of the change — bullet for each sub-change if multiple>
> - **Why:** <link to review feedback / spec / customer ask / parity audit>
> - **How to revert:** `git revert <sha>` (or specific lines if hand-revert is preferred)
> ```

---

## Current state of each tier

> Update this section whenever a tier-level rule changes. The change log above captures *the journey*; this section captures *the destination*. A future agent should be able to read this section alone and know what each tier currently does without scrolling through every commit.

### `demo-blomsterbutikk-classic/`
- 6 HTML pages (`index`, `bouquetter`, `om-oss`, `galleri`, `kontakt`, `404`), single `css/style.css`, single `js/main.js`
- **Live URL:** https://demo-blomsterbutikk-classic.ibithun.com (pending deploy)
- **i18n:** NO/EN toggle **disabled** (Norwegian-only baseline) — translations object wrapped `/* ... */` in JS. EN toggle markup HTML-commented in nav + mobile menu of `index.html`; `bouquetter.html` has it commented in nav only. `kontakt.html`, `galleri.html`, `om-oss.html`, `404.html` currently have no `lang-toggle` markup at all (drift from bakery's "preserve markup on every page" pattern; tracked as ⏳ in `READINESS.md` §5). `applyTranslations()` and `initLangToggle()` calls commented in `DOMContentLoaded`
- **Animations:** **disabled** — fully static. *CLASSIC STATIC OVERRIDE* block + dedicated `:hover`-killer block at end of `style.css` nullify all transitions, hover transforms, hover colour shifts, fade-up reveals, page fade. `initScrollAnimations()` and `main.classList.add('page-fade')` commented in `DOMContentLoaded`. Click interactions (FAQ accordion, lightbox, Vipps modal, mobile hamburger) remain functional
- **Mobile menu:** 240px right-anchored dropdown card under the nav, solid white background, body-font links, hairline row dividers, drop shadow. No transform animation
- **Visitor badge:** **commented out** (premium-only feature). Markup preserved with `page_id=demo-blomsterbutikk-classic.ibithun.com&right_color=%233A5A40`
- **Vipps modal trigger:** "Bestill via Vipps" buttons on hero, Vipps-CTA section, every bouquet card. Locked phrase preserved
- **Hero:** static `<div class="hero-bg" style="background-image: url(.../hero-bouquet.jpg)">` with gradient overlay. NO `<video>` element
- **Section divider:** single static sprig SVG on hairline (between blooms strip and occasion picker)
- **OG meta:** present on all 6 HTML pages with absolute URLs and per-page banner image. `og:image:width/height` reflect actual JPG dimensions (1376×768 landscape or 896×1200 portrait), not the family-wide-target 1200×630. Dedicated `og-*.jpg` variants <200 KB per the family rule are a ⚠️ launch-blocker pending Nano-Banana run.
- **Deploy:** `vercel.json` with 1y immutable cache for `/assets/*`, 1d for css/js, security headers (HSTS, X-Frame-Options SAMEORIGIN, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy locking camera/mic/geolocation)
- **Robots:** `Disallow: /` in `robots.txt` + `<meta name="robots" content="noindex, nofollow">` on every page

### `demo-blomsterbutikk-premium/`
- Same 6 HTML pages + signature features layered into `index.html` and `bouquetter.html`
- **Live URL:** https://demo-blomsterbutikk-premium.ibithun.com (pending deploy)
- **i18n:** NO/EN toggle **active** (premium feature). `localStorage` key `'fl-lang'` for persistence
- **Animations:** classic baseline (un-killed) + `card-float` on all bouquet cards (3-point keyframe: `0%/100%: Y(0) scale(1)`, `45%: Y(-16px) scale(1.018)`, `72%: Y(-7px) scale(1.008)` — matches bakeri/bilverksted profile), `gallery-drift-down/up` 3-rhythm parallax on gallery items (±8px Y over 9s, staggered 0/0.4/0.8s, killed at mobile @media), `occasion-icon-drift` on the 5 homepage occasion-card SVG icons (±6px X over 3.6–4.4s, staggered 0.2/0.6/1.0/0.4/0.8s), bloom-of-the-week pulse badge, hover-to-reveal Latin name on bloom cards, IntersectionObserver `.reveal` fade-up, page-fade on `main`. **All animations pure `translateY/translateX/scale` — no `rotate()` per family-wide rule.** Comprehensive `prefers-reduced-motion: reduce` fallback covers all 5 infinite animations + 3 transitions.
- **Mobile menu:** 240px liquid-glass floating card anchored top-right (`rgba(251,247,242,0.55)` + `backdrop-filter: blur(28px) saturate(170%)`, sage-tinted 1px border, deep-green soft shadow). Slides in with cubic-bezier spring
- **Visitor badge:** rendered in footer with `page_id=demo-blomsterbutikk-premium.ibithun.com&right_color=%233A5A40`. `left_text=Views` always
- **Hero:** static `<div class="hero-bg">` with gradient overlay (same shot as classic — premium swap-in to `<video>` is a future-tier upgrade if Bithun generates a hero loop)
- **Pause-on-hover pattern:** applied to `.bouquet-card`, `.gallery-item`, and `.occasion-card .occasion-icon`. Bouquet card hover adds a sage-ring `box-shadow` while pausing animation; card stays at its current animated Y position (NO `translateY` override on hover, per bakeri/bilverksted spec). Gallery item pause keeps the active card steady so the B&W-→-colour reveal lands cleanly. Occasion-icon pause applies via parent `.occasion-card:hover`. `:hover` rule source-orders AFTER the `:nth-child` shorthand + `!important` for safety
- **Signature features (premium-only):**
  - Seasonal bouquet generator on `bouquetter.html` between catalog and FAQ — pill-filter UI for occasion (alle / bryllup / begravelse / fødsel / kjærlighet / takk / hverdag), colour mood (alle / pastell / hvit / dyp / mark), budget (alle / under 600 / 600–1 000 / over 1 000). Inline `BOUQUETS` data, re-render on click, count + empty-state message both i18n-aware
  - Bloom-of-the-week pulse badge wrapped around first bloom card on home (`Pioner / Paeonia lactiflora`) — pulsing white dot inside dusty-rose pill, pure `translateY`/`scale` keyframe (no `rotate()`)
  - Hover-to-reveal Latin name on every bloom card (CSS-only, opacity + 4px Y-translate)
- **Gallery (premium-locked):** Three explicit `.gallery-col` flex children inside `.gallery-grid` (matches bakeri's locked structure verbatim). 12 items distributed 4 per column by source-index modulo 3. B&W default (`filter: grayscale(100%)`) → colour on hover (`grayscale(0%)`), 0.6s transition. Per-column parallax drift at 9s with `gallery-drift-down/up` keyframes (`translateY ±10px`): col 1 = down 0s, col 2 = up 0.4s (inverse phase), col 3 = down 0.8s — yields the locked 1↑/2↓/3↑ rhythm. Active column pauses on item hover via `:has(.gallery-item:hover)` so the B&W-→-colour reveal lands cleanly. Mobile @media (max-width: 768px) collapses to vertical stack (`flex-direction: column`) and kills the drift.
- **About collage (om-oss.html — both tiers):** 4-tile bakery-locked grid: `grid-template-columns: 3fr 2fr; grid-template-rows: 230px 230px 460px`. `large` spans col 1 rows 1–3 (workbench close-up), `small-top` + `small-bottom` stack in col 2 (peony detail + studio side), `wide` spans cols 1+2 row 3 (bridal-detail wide shot). Mobile @media collapses to 1-column 240px stack.
- **Section divider:** same sprig SVG glyph as classic (premium upgrade to an animated divider row is a future tier-feature)
- **OG meta:** present on all 6 HTML pages with absolute URLs and per-page banner image; URLs flipped to `demo-blomsterbutikk-premium.ibithun.com`. Premium 404 also has `og:locale:alternate=en_US` (added during 2026-05-04 audit). Same OG image width/height + dedicated-variants caveat as classic.
- **Deploy:** identical `vercel.json` config to classic
- **Robots:** identical noindex/nofollow stance
