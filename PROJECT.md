# BANPU Annual Report 2568 — PDF to HTML Web Project

## สิ่งที่เราทำ / What We're Building

แปลง **รายงานประจำปี 2568 ของบ้านปู เพาเวอร์ (แบบ 56-1 One Report)** จาก PDF ให้เป็นเว็บไซต์ HTML ที่ใช้งานได้ รองรับ 2 ภาษา (ไทย/อังกฤษ)

Converting BANPU Power's **56-1 One Report (2025)** from PDF into an interactive HTML web experience with Thai/English bilingual support.

---

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 16.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| i18n | next-intl | 4.9.1 |
| Icons | lucide-react | 1.8.0 |
| Font | Noto Sans Thai (Google) + BANPU custom OTF | — |

---

## File Structure

```
src/
├── app/
│   └── [locale]/                  # Locale routing (th / en)
│       ├── layout.tsx             # Root layout: MINIMAL — only i18n provider + html/body
│       ├── page.tsx               # Homepage: FULL-SCREEN, no sidebar/header
│       ├── globals.css
│       └── pages/
│           ├── layout.tsx         # Pages layout: wraps children in PagesShell
│           └── [pageId]/
│               └── page.tsx       # Dynamic page renderer (reads from src/data/pages.ts)
│
├── components/
│   ├── PagesShell.tsx             # Client: hamburger + sidebar overlay + auto-close on nav
│   ├── Sidebar.tsx                # Left navigation: accordion + active state detection
│   └── LanguageSwitcher.tsx       # TH / EN toggle buttons (top-right bar)
│
├── data/
│   ├── pages.ts                   # Types + pagesData registry (imports from pages/ sub-files)
│   └── pages/
│       ├── page-00.ts             # Page 00 — Introduction
│       ├── page-006.ts            # Page 006 — Highlights
│       └── page-008.ts            # Page 008 — Performance
│
└── i18n/
    ├── routing.ts                 # Supported locales: th, en (default: th)
    └── request.ts                 # Server-side i18n config

messages/
├── th.json                        # Thai translations (Sidebar menu labels)
└── en.json                        # English translations

public/
├── logo.webp                      # BANPU POWER logo
├── page_1.webp                    # Annual report cover (used on homepage)
├── homepage-bg.webp               # Homepage background
├── fonts/BANPU/                   # Custom BANPU font files (OTF: Regular, Medium, Bold, Italic variants)
├── page-intro/                    # Images for page 00 (intro)
├── page-006/                      # Images for page 006 (highlights, PDF pages 006–007)
├── page-008/                      # Images for page 008 (performance, PDF pages 008–009)
├── page-010/                      # Images for page 010 (board report, PDF pages 010–011)
└── page-012/                      # Images for page 012 (CEO message, PDF pages 012–013)
```

> **Key architecture note:** The homepage (`/th`, `/en`) has NO sidebar or header — it's a standalone full-screen page. Only routes under `/pages/*` show the sidebar and language switcher. This is achieved through Next.js **nested layouts**.

> **Data architecture note:** Complex pages with many sections are extracted into their own file under `src/data/pages/`. Pages defined inline in `pages.ts` (e.g. 010, 012) may be candidates for extraction as they grow.

---

## Image Conventions

- All images are **`.webp`** format (converted from PDF exports).
- Naming pattern: `{pageId}_p{pdfPageNum}_{variant}.webp`
  - `_full.webp` — full-width desktop image (the whole PDF page)
  - `_mobile_head_1.webp`, `_mobile_head_2.webp` — header slices for mobile
  - `_mobile_body.webp`, `_mobile_body_1.webp` — body slices for mobile
  - `_mobile_table.webp` — table slice for mobile
  - `_mobile_detail_1.webp`, etc. — detail slices for mobile
- Intro page uses the prefix `intro_` instead of a numeric page id.

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#264897` | Headings, primary text |
| Royal Purple | `#311b92` | Active nav, accent |
| Brand Cyan | `#6cc0b3` | CTA buttons, links |
| Medium Purple | `#4b3fa7` | Secondary headings |
| Active Purple | `#5b3e96` | Language switcher active state |
| Light Blue BG | `#eaf6fb` | Page backgrounds |
| Sidebar BG | `#f0f9fb` | Sidebar background |

---

## URL Structure

```
/                    → redirect to /th
/th                  → Thai homepage (full-screen, no sidebar)
/en                  → English homepage

Pre-section pages:
/th/pages/00         → บทนำ / Introduction
/th/pages/006        → จุดเด่นในรอบปี (Highlights of the Year)
/th/pages/008        → ผลการดำเนินงานในรอบปีที่ผ่านมา (Performance)
/th/pages/010        → รายงานคณะกรรมการ (Board Report)
/th/pages/012        → สารจากประธานเจ้าหน้าที่บริหาร (CEO Message)

ส่วนที่ 1 — การประกอบธุรกิจและผลการดำเนินงาน:
/th/pages/016        → โครงสร้างและการดำเนินงานของกลุ่มบริษัท
/th/pages/026        → ข้อมูลกลุ่มธุรกิจ
/th/pages/038        → ภาวะตลาดและการแข่งขัน
/th/pages/060        → สินทรัพย์ที่ใช้ในการประกอบธุรกิจ
/th/pages/062        → โครงสร้างกลุ่มบริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน)
/th/pages/064        → รายชื่อบริษัทย่อย และบริษัทร่วม และการร่วมค้า
/th/pages/073        → ผู้ถือหุ้นรายใหญ่
/th/pages/074        → หุ้นกู้
/th/pages/075        → นโยบายการจ่ายเงินปันผล
/th/pages/076        → การบริหารจัดการความเสี่ยงและปัจจัยความเสี่ยง
/th/pages/083        → การขับเคลื่อนธุรกิจเพื่อความยั่งยืน
/th/pages/116        → คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ
/th/pages/127        → ข้อมูลทั่วไปและข้อมูลสำคัญอื่น ๆ

ส่วนที่ 2 — การกำกับดูแลกิจการ:
/th/pages/130        → นโยบายการกำกับดูแลกิจการ
/th/pages/158        → โครงสร้างการกำกับดูแลกิจการ
/th/pages/182        → รายงานผลการดำเนินงานด้านการกำกับดูแลกิจการ
/th/pages/198        → การควบคุมภายในและรายการระหว่างกัน

ส่วนที่ 3 — การรับรองความถูกต้องของข้อมูล:
/th/pages/210        → เอกสารแบบ 1 รายละเอียดเกี่ยวกับคณะกรรมการบริษัทและผู้บริหาร
/th/pages/228        → เอกสารแนบ 2 รายละเอียดเกี่ยวกับกรรมการของบริษัทฯ บริษัทย่อย บริษัทร่วม และบริษัทร่วมค้า
/th/pages/230        → เอกสารแบบ 3 นโยบายและแนวปฏิบัติการกำกับดูแลกิจการ และจรรยาบรรณธุรกิจ
```
Replace `/th/` with `/en/` for English versions.

---

## Current Status (as of 2026-04-26)

### ✅ Done
- [x] Project setup (Next.js + next-intl + Tailwind v4)
- [x] Full-screen homepage (no sidebar/header)
- [x] Nested layout: sidebar appears only under `/pages/*`
- [x] Sidebar with accordion sections + active state detection
- [x] Mobile responsive: hamburger menu, sidebar overlay, auto-close on nav
- [x] Thai/English language switcher
- [x] Prev/Next navigation between pages
- [x] Custom BANPU font (OTF files in `public/fonts/BANPU/`)
- [x] All images migrated to `.webp` format
- [x] Page `00` — บทนำ/Introduction (desktop full image + mobile slices + html content)
- [x] Page `006` — จุดเด่นในรอบปี (desktop full image + mobile slices + html footnotes)
- [x] Page `008` — ผลการดำเนินงานในรอบปีที่ผ่านมา (desktop full image + mobile slices + html notes)
- [x] Page `010` — รายงานคณะกรรมการ (desktop full image + mobile slices)
- [x] Page `012` — สารจากประธานเจ้าหน้าที่บริหาร (desktop full image + mobile slices)
- [x] Stub pages for all 20 remaining sections (ส่วนที่ 1–3) — show "Content in preparation" placeholder

### 🚧 Pending — content/images needed from client
- [ ] Page `016` — โครงสร้างและการดำเนินงานของกลุ่มบริษัท
- [ ] Page `026` — ข้อมูลกลุ่มธุรกิจ
- [ ] Page `038` — ภาวะตลาดและการแข่งขัน
- [ ] Page `060` — สินทรัพย์ที่ใช้ในการประกอบธุรกิจ
- [ ] Page `062` — โครงสร้างกลุ่มบริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน)
- [ ] Page `064` — รายชื่อบริษัทย่อย และบริษัทร่วม และการร่วมค้า
- [ ] Page `073` — ผู้ถือหุ้นรายใหญ่
- [ ] Page `074` — หุ้นกู้
- [ ] Page `075` — นโยบายการจ่ายเงินปันผล
- [ ] Page `076` — การบริหารจัดการความเสี่ยงและปัจจัยความเสี่ยง
- [ ] Page `083` — การขับเคลื่อนธุรกิจเพื่อความยั่งยืน
- [ ] Page `116` — คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ
- [ ] Page `127` — ข้อมูลทั่วไปและข้อมูลสำคัญอื่น ๆ
- [ ] Page `130` — นโยบายการกำกับดูแลกิจการ
- [ ] Page `158` — โครงสร้างการกำกับดูแลกิจการ
- [ ] Page `182` — รายงานผลการดำเนินงานด้านการกำกับดูแลกิจการ
- [ ] Page `198` — การควบคุมภายในและรายการระหว่างกัน
- [ ] Page `210` — เอกสารแบบ 1 รายละเอียดเกี่ยวกับคณะกรรมการบริษัทและผู้บริหาร
- [ ] Page `228` — เอกสารแนบ 2 รายละเอียดเกี่ยวกับกรรมการของบริษัทฯ
- [ ] Page `230` — เอกสารแบบ 3 นโยบายและแนวปฏิบัติการกำกับดูแลกิจการ

---

## Section Types (`src/data/pages.ts`)

Each page entry in `pagesData` has a `layout` field and a `sections` array.

### `layout` options

| Value | Description |
|-------|-------------|
| `'article'` | Simple article layout (white card, max-w-4xl) |
| `'pdf_composition'` | Compose multiple PDF pages side-by-side on xl screens, stacked on mobile |
| `'pdf_single_full'` | Single column, max-w-660px — used for stub/placeholder pages |

### Section types

| Type | Description |
|------|-------------|
| `pdf_page` | Container for one PDF page. Has `backgroundColor`, `pageNumber`, `pageNumberAlign`, `desktopFullImage` (shows this image on sm+ instead of rendering children). Children are any other section types. |
| `pdf_banner` | Full-width image. `mobileSrcs` overrides on mobile (legacy pattern). Use `visibility` on individual banners instead for new pages. |
| `pdf_row` | Row of images (equal columns). `withGap` adds gap between items. |
| `pdf_header` | Small breadcrumb-style header text (bilingual). |
| `pdf_title` | Large section title text (bilingual). |
| `pdf_sub_title` | Smaller subtitle text (bilingual). |
| `pdf_quote_block` | Quote with signature image + name + position. |
| `pdf_text_columns` | Two-column flowing text layout. `fontFamily: 'sarabun'` for serif Thai. |
| `pdf_table` | Data table with columns + sections of rows. Supports `highlightColumnIndex` to bold one column. |
| `pdf_note` | Footnote text. `hidePrefix` hides the "หมายเหตุ:" prefix. |
| `pdf_html` | Raw HTML injected via `dangerouslySetInnerHTML`. Used for complex mobile layouts. `className` applies to the wrapper. |
| `text` | Simple paragraph with optional title (article layout). |
| `highlights` | KPI cards grid (article layout). |
| `quote` | Blockquote with attribution (article layout). |
| `list` | Bullet list (article layout). |
| `image` | Standalone image with optional caption (article layout). |

### `visibility` pattern (current approach)

All section types accept an optional `visibility` field:
- `'desktop-only'` — wraps content in `<div class="hidden lg:block">` (hidden on mobile)
- `'mobile-only'` — wraps content in `<div class="lg:hidden block">` (hidden on desktop)

This is the **preferred pattern** for all new pages. Use it to show the full `_full.webp` image on desktop and individual mobile slices on small screens:

```ts
{
  type: 'pdf_page',
  items: [
    { type: 'pdf_banner', src: '/page-010/010_p01_full.webp', visibility: 'desktop-only' },
    { type: 'pdf_banner', src: '/page-010/010_p01_mobile_head_1.webp', visibility: 'mobile-only' },
    { type: 'pdf_banner', src: '/page-010/010_p01_mobile_head_2.webp', visibility: 'mobile-only' },
    { type: 'pdf_banner', src: '/page-010/010_p01_mobile_body.webp', visibility: 'mobile-only' },
  ]
}
```

### `desktopFullImage` pattern (legacy)

Still supported — on `pdf_page` blocks, set `desktopFullImage` to show a full-resolution PNG/WebP on `sm+` screens instead of rendering child items. Prefer the `visibility` pattern above for new pages.

---

## How to Add a New Page

### Step 1 — Prepare images

Export each PDF page as WebP. Place in `public/page-{pageId}/`. Naming convention:
```
{pageId}_p{pdfPageNum}_full.webp          ← full desktop image (whole PDF page)
{pageId}_p{pdfPageNum}_mobile_head_1.webp ← header strip(s) for mobile
{pageId}_p{pdfPageNum}_mobile_body.webp   ← body content for mobile
{pageId}_p{pdfPageNum}_mobile_table.webp  ← table slice for mobile (if needed)
```

### Step 2 — Add data file

For pages with significant content, create `src/data/pages/page-{pageId}.ts`:

```ts
import { PageData } from "../pages";

export const page016Data: PageData = {
  pageId: '016',
  title: { th: 'โครงสร้างและการดำเนินงานของกลุ่มบริษัท', en: 'Group Structure and Operations' },
  accentColor: '#6cc0b3',
  backgroundColor: '#f0f8ff',
  layout: 'pdf_composition',
  sections: [
    {
      type: 'pdf_page',
      items: [
        { type: 'pdf_banner', src: '/page-016/016_p01_full.webp', visibility: 'desktop-only' },
        { type: 'pdf_banner', src: '/page-016/016_p01_mobile_head_1.webp', visibility: 'mobile-only' },
        // ...
      ]
    }
  ],
  prevPage: '012',
  nextPage: '026',
};
```

### Step 3 — Register in `src/data/pages.ts`

Import and add to `pagesData` and `pageOrder`.

### Step 4 — Update Sidebar (if needed)

In `src/components/Sidebar.tsx`, update the relevant `<AccordionItem>` items array. Sidebar labels come from `messages/th.json` and `messages/en.json`.

---

## Running the Project

```bash
npm install
npm run dev
# Open http://localhost:3000  (redirects to /th)
```

---

## Developer Notes

- **`params` are async in Next.js 16**: always `await params` before destructuring `locale` or `pageId`
- **`'use client'`** components: `PagesShell`, `Sidebar`, `LanguageSwitcher`
- **Server components**: all `layout.tsx` and `page.tsx` files
- **Tailwind v4 canonical classes**: use `shrink-0` (not `flex-shrink-0`), `-mt-1.25` (not `mt-[-5px]`), `min-w-7.5` (not `min-w-[30px]`), `mt-px` (not `mt-[1px]`)
- **Do not define components inside render functions** — causes "Cannot create components during render" error. Define them at module scope.
- **i18n routing**: `src/middleware.ts` handles locale detection; root `/` redirects to `/th`
- **Locale list**: `['en', 'th']`, default `'th'` — defined in `src/i18n/routing.ts`
- **Page IDs are zero-padded 3-digit strings** for all content pages (e.g. `'006'`, `'008'`, `'010'`). Only the intro page uses `'00'`.
- **Visibility breakpoint is `lg`** (1024px): `'desktop-only'` → `hidden lg:block`, `'mobile-only'` → `lg:hidden block`
- **Stub pages** (layout `pdf_single_full` + empty `sections: []`) show a "Content in preparation" placeholder automatically — no extra code needed.
