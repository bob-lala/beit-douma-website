# CLAUDE.md — Website Build Rules (this folder)

All websites built in this folder follow the pipeline below. Every rule here applies to new sites, redesigns, and edits alike.

## Core Website Skills — NON-NEGOTIABLE, every build

Invoke these on **every** website task in this folder, before writing any code. These are the skills that make the difference between a generic site and a great one:

1. **`frontend-design` skill** — FIRST, before any frontend code, every session. Sets distinctive, intentional visual direction (typography, aesthetic, non-templated choices).
2. **`/ui-ux-pro-max`** — for every style/palette/font-pairing/layout decision: 50+ styles, 161 palettes, 57 font pairings, 99 UX guidelines. Use it to pick the design system, not gut feeling.
3. **`/taste-skill`** — anti-slop pass on the design direction (read the brief, infer direction, then apply).
4. **`/impeccable`** — `init` at project start (PRODUCT.md + DESIGN.md), `shape` before building, `critique` + `polish` before done, `bolder`/`quieter` when the design feels off.
5. **`/design-md-library`** — pick a proven DESIGN.md base from 74 real-site design systems (or match a brand the user names) and copy it to the project root.
6. **`/enhance-prompt`** (Stitch) and **`/prompt-enhancer`** (Hunyuan rules) — before ANY design-generation or image/video-generation prompt leaves this session. Raw prompts never go to a model.
7. **`/web-design-guidelines`** — mandatory audit after any UI code is written or modified. Blocking gate.
8. **`/copywriting` + `/marketing-psychology`** — every word on the page goes through these. No filler copy.
9. **`/seo-plan` → `/seo-schema` → `/seo-audit`** — SEO is built in, never bolted on (full sequence in the pipeline below).

Order for a new site: `frontend-design` → `/design-md-library` → `/taste-skill` → `/impeccable init` → `/ui-ux-pro-max` → build → `/copywriting` → SEO skills → `/web-design-guidelines` + `/impeccable polish` gate.

## Mandatory Skills — Always On (per global rules)

These apply to **every session and every task** in this folder, on top of the build pipeline:

| Skill | When |
|-------|------|
| `/caveman` | Session start, always active — terse output, never revert unless told "normal mode" |
| `/mem-search` | Session start — check what was done before, never re-solve solved problems |
| `/graphify .` | First session in this folder and after big changes (`graphify --update`); query the graph before Grep/Read |
| `/smart-explore` | Exploring code — instead of raw Read/Grep |
| `/brainstorming` | Before ANY new feature, section, or behavior change — even "simple" ones |
| `/make-plan` → `/do` (or `/writing-plans` → `/executing-plans`) | Before any multi-step implementation |
| `/test-driven-development` | Any new code or bug fix |
| `/systematic-debugging` or `/debug-issue` | Any error or unexpected behavior |
| `/review-changes` / `/review-delta` | Reviewing edits — graph-aware, token-efficient |
| `/verification-before-completion` | Before claiming anything is done |
| `/enhance-prompt` + `/taste-design` | Before any Stitch design generation (`/generate-design`, `/react-components`) |
| `/hyperframes` | ANY video/animation/motion-graphic request — router first, then sub-skill |
| `/prompt-enhancer` | Before EVERY image/video generation call (Higgsfield, opengen, Stitch, imagegen) |
| `/impeccable init` | Start of any new site — creates PRODUCT.md + DESIGN.md |
| `/save` + update wiki | End of session — persist outputs to the Obsidian vault (`/Users/bob/Desktop/ClientVault/wiki/`), update `hot.md` and `log.md` |

Skill priority: user instructions → these mandatory skills → build pipeline below → defaults. Invoke on first relevance signal, before clarifying questions or exploration.

## Build Pipeline (in order)

| Phase | What to do |
|-------|-----------|
| 1. Orient | Check `brand assests/` for logos/colors/photos/copy (note the folder's exact spelling; it contains `rooms/` and `room rules/` subfolders). If a site already exists here, run `/graphify .` and query the graph before grepping. |
| 2. Design direction | `/design-md-library` — pick a DESIGN.md base (or match the brand the user names). Then `/taste-skill` + `frontend-design` skill for direction. `/impeccable shape` before building any new surface. |
| 3. Build | Single-file HTML default (see Output Defaults). If React/Next: `/vercel-react-best-practices` first, `/react-components-catalog` before adding any component library. `/ui-ux-pro-max` for style/palette/font-pairing decisions. |
| 4. Copy | No lorem ipsum in anything shown to the user. `/copywriting` for all page copy, `/marketing-psychology` for hooks, offers, CTAs. |
| 5. Imagery | Real brand assets first. Generated imagery: `/prompt-enhancer` → `/higgsfield-product-photoshoot` (product shots) or `/higgsfield-generate`. Placeholders (`https://placehold.co/`) only for reference-matching mockups. |
| 6. Motion | Only `transform`/`opacity` animations. GSAP skills (`gsap`, `gsap-scrolltrigger`, `gsap-flip`, `gsap-splittext`) for scroll/complex motion; `/vercel-react-view-transitions` for React page transitions; Remotion for video. |
| 7. SEO (mandatory) | `/seo-plan` before content/structure → `/seo-schema` JSON-LD on every page → `/seo-images` (alt text, WebP/AVIF, lazy) → `/seo-sitemap` + robots.txt (multi-page sites) → `/seo-geo` for AI-search readiness. |
| 8. Audit gate | `/web-design-guidelines` + `/seo-audit` (or `/seo-page` for a single page) + `/impeccable polish`. Both audits must pass before calling anything done. |
| 9. Ship | `/deploy-to-vercel` when asked to deploy. After deploy: `/seo-drift` baseline. |

Invoke skills silently — never announce them to the user.

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content. Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against the reference, fix mismatches, re-screenshot. Minimum 2 comparison rounds. Stop only when no visible differences remain or the user says so.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px".
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.

## Local Server

- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start: `node serve.mjs` (background) → serves project root at `http://localhost:3000`. Optional: `node serve.mjs <dir> <port>` to serve a subfolder site.
- If the server is already running, do not start a second instance (check with `lsof -i :3000`).

## Screenshot Workflow

- Uses `puppeteer-core` + the system Google Chrome at `/Applications/Google Chrome.app` (no bundled browser — Chrome-for-Testing downloads fail on this network). If `node_modules/` is missing: `npm install puppeteer-core`.
- Desktop: `node screenshot.mjs http://localhost:3000` (1440×900). Mobile: add `--mobile` (390×844). Optional label: `node screenshot.mjs http://localhost:3000 hero`.
- Saves to `./temporary screenshots/screenshot-N[-label].png` — auto-incremented, never overwritten.
- After screenshotting, Read the PNG directly to see and analyze it.
- Always check **both desktop and mobile** before the audit gate.

## Output Defaults

- Single `index.html`, all styles inline, unless the user says otherwise. Multi-page sites: one HTML file per page + shared `styles.css`, plus `sitemap.xml` and `robots.txt`.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>` (fine for prototypes; use a build step only if the project graduates to React/Next).
- Mobile-first responsive. Semantic HTML (`header/nav/main/section/footer`, one `h1` per page).
- Every page ships with: `<title>` (≤60 chars), meta description (≤155 chars), canonical, Open Graph + Twitter tags, JSON-LD schema, `lang` attribute, descriptive alt text on all images.

## Brand Assets

- Always check `brand assests/` (exact folder name, including the typo) before designing. If assets exist, use them — no placeholders where real assets are available. Room photos live in `brand assests/rooms/`, house rules content in `brand assests/room rules/`.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.
- If `DESIGN.md` exists in the project root, it is the design law for that site — follow it over personal taste.

## Anti-Generic Guardrails

- **Colors:** Never default Tailwind palette (indigo-500, blue-600…). Pick a custom brand color and derive a full scale from it.
- **Shadows:** Never flat `shadow-md`. Layered, color-tinted shadows with low opacity.
- **Typography:** Never the same font for headings and body. Pair a display/serif with a clean sans. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body. Load fonts with `font-display: swap`.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only `transform` and `opacity`. Never `transition-all`. Spring-style easing. Respect `prefers-reduced-motion`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Gradient overlay (`bg-gradient-to-t from-black/60`) + color treatment layer with `mix-blend-multiply` on photos under text.
- **Spacing:** Intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Layering system (base → elevated → floating), not everything on the same z-plane.

## Accessibility & Performance Floor

- Text contrast ≥ 4.5:1 (3:1 for large text). Visible focus rings. Labels on all form fields.
- Tap targets ≥ 44px on mobile. No horizontal scroll at any breakpoint.
- Images: explicit `width`/`height` (no CLS), `loading="lazy"` below the fold, WebP/AVIF where possible.
- Hero/LCP image preloaded, not lazy-loaded.

## Hard Rules

- Do not add sections, features, or content not in the reference.
- Do not "improve" a reference design — match it.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.
- Do not ship a page without the SEO baseline (title, description, schema, alt text) — SEO is a build step, not an afterthought.
- Do not leave lorem ipsum or `placehold.co` images in anything called finished (reference-matching mockups excepted).
- Do not skip the audit gate (`/web-design-guidelines` + `/seo-audit`) before declaring a site done.
