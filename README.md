# Florale Lilja — Demo Site

A two-tier static website prototype for a fictional Norwegian studio florist (blomsterbutikk) in Orkanger. Built to demonstrate what a real florist client site can look like at two price points.

**Live demos:**
- Classic → [demo-blomsterbutikk-classic.ibithun.com](https://demo-blomsterbutikk-classic.ibithun.com)
- Premium → [demo-blomsterbutikk-premium.ibithun.com](https://demo-blomsterbutikk-premium.ibithun.com)

> Both sites ship with `<meta name="robots" content="noindex, nofollow">` and a `Disallow: /` `robots.txt`. Demo content should not compete in search results with the eventual real client site.

---

## Tiers

### Classic
A clean, fast marketing site with no frills and no framework overhead.

- 6 pages: Home, Buketter, Om oss, Galleri, Kontakt, 404
- Responsive at 768 px and 480 px breakpoints
- Mobile hamburger menu (240 px right-anchored dropdown card)
- Vipps demo modal (locked phrase)
- Vercel Web Analytics on every page
- Norwegian only (EN toggle ready to unlock as a paid upgrade)

### Premium
Same baseline plus signature features.

- **Seasonal bouquet generator** — pill-filter UI for occasion + colour mood + budget; dynamically re-renders matching bouquets on click
- **Bloom-of-the-week pulse badge** — pulsing dusty-rose marker on the homepage's first bloom card
- **Hover-to-reveal Latin name** — every bloom card fades in its scientific name on hover
- **NO/EN language toggle** — active and visible
- **Visitor-badge view counter** in footer

---

## Stack

Vanilla HTML · CSS (custom properties, no framework) · JavaScript (no dependencies)

- No `npm install`. No build step. Open `index.html` in a browser.
- Single `css/style.css` + single `js/main.js` per tier
- Deployed on Vercel — each tier has a `vercel.json` with 1-year immutable cache for `/assets/*`, 1-day cache for css/js, and security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Vercel Web Analytics enabled on both projects

---

## Repo layout

```
blomsterbutikk-demo/
├── demo-blomsterbutikk-classic/    # Classic tier
│   ├── assets/images/              # All photos
│   ├── css/style.css
│   ├── js/main.js
│   └── *.html (6 pages)
└── demo-blomsterbutikk-premium/    # Premium tier (classic + signature features)
    ├── assets/images/              # Same set as classic
    └── ... (mirrors classic page set)
```

---

## Branching / deploy

Each tier is a separate Vercel project pointing at its own subdirectory (`Root Directory` setting). To avoid redundant rebuilds, each project's **Ignored Build Step** is:

```bash
git diff HEAD^ HEAD --quiet -- demo-blomsterbutikk-classic/   # classic project
git diff HEAD^ HEAD --quiet -- demo-blomsterbutikk-premium/   # premium project
```

---

## Photography

Placeholder photos are generated for prototype use only. Real customer photos replace every asset at fork time before the site goes live on a custom domain. Norwegian Markedsføringsloven and EU disclosure rules around generated imagery in commercial contexts make real photos the only safe default for production.

---

## Credits

Developed by [Bithun](https://github.com/goldenbutter)
