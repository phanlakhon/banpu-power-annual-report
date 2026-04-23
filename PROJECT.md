# BANPU Annual Report 2568 — PDF to HTML Web Project

## สิ่งที่เราทำ / What We're Building

แปลง **รายงานประจำปี 2568 ของบ้านปู (แบบ 56-1 One Report)** จาก PDF 360 หน้า ให้เป็นเว็บไซต์ HTML ที่ใช้งานได้ รองรับ 2 ภาษา (ไทย/อังกฤษ)

Converting BANPU's **360-page 56-1 One Report (2025)** from PDF into an interactive HTML web experience with Thai/English bilingual support.

---

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 16.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| i18n | next-intl | 4.9.1 |
| Icons | lucide-react | 1.8.0 |
| Font | Noto Sans Thai (Google) | — |

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
│   └── pages.ts                   # ALL page content + metadata (source of truth)
│
└── i18n/
    ├── routing.ts                 # Supported locales: th, en (default: th)
    └── request.ts                 # Server-side i18n config

messages/
├── th.json                        # Thai translations (Sidebar menu labels)
└── en.json                        # English translations

public/
├── logo.png                       # BANPU logo
├── page_1.png                     # Annual report cover (used on homepage)
├── banpu-background.png           # Background asset
├── homepage-bg.jpg                # Homepage background
├── fonts/                         # Local font files
├── page-intro/                    # Images for page 00 (intro)
├── page-04/                       # Images for page 04 (highlights, PDF pages 04–07)
├── page-08/                       # Images for page 08 (performance, PDF pages 08–09)
└── page-10/                       # Images for page 10 (board report, PDF pages 10–11)
```

> **Key architecture note:** The homepage (`/th`, `/en`) has NO sidebar or header — it's a standalone full-screen page. Only routes under `/pages/*` show the sidebar and language switcher. This is achieved through Next.js **nested layouts**.

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#2a2e82` | Headings, primary text |
| Royal Purple | `#311b92` | Active nav, accent |
| Brand Blue | `#1e90e6` | CTA buttons, links |
| Medium Purple | `#4b3fa7` | Secondary headings |
| Active Purple | `#5b3e96` | Language switcher active state |
| Light Blue BG | `#eaf6fb` | Page backgrounds |
| Sidebar BG | `#f0f8ff` | Sidebar background |

---

## URL Structure

```
/                    → redirect to /th
/th                  → Thai homepage (full-screen, no sidebar)
/en                  → English homepage
/th/pages/00         → บทนำ / Introduction
/th/pages/04         → จุดเด่นในรอบปี (Highlights)        ← PDF pages 04–07
/th/pages/08         → ผลการดำเนินงาน (Performance)        ← PDF pages 08–09
/th/pages/10         → รายงานคณะกรรมการ (Board Report)     ← PDF pages 10–11
/th/pages/12         → สารจากประธาน (CEO Message)
/th/pages/18         → นโยบายและภาพรวมธุรกิจ (Policy & Overview)
/th/pages/22         → แผนที่ธุรกิจ (Business Map)
/th/pages/24         → วิสัยทัศน์และพันธกิจ (Vision & Mission)
/th/pages/254        → นโยบายการกำกับดูแล (Corporate Governance Policy)
/th/pages/282        → โครงสร้างการกำกับดูแล (Governance Structure)
/th/pages/342        → เอกสารแนบ 1 รายละเอียดคณะกรรมการ (Attachment 1)
```
Replace `/th/` with `/en/` for English versions.

---

## Current Status (as of 2026-04-23)

### ✅ Done
- [x] Project setup (Next.js + next-intl + Tailwind v4)
- [x] Full-screen homepage (no sidebar/header)
- [x] Nested layout: sidebar appears only under `/pages/*`
- [x] Sidebar with accordion sections + active state detection
- [x] Mobile responsive: hamburger menu, sidebar overlay, auto-close on nav
- [x] Thai/English language switcher
- [x] Prev/Next navigation between pages
- [x] Page `00` — บทนำ/Introduction (image-based)
- [x] Page `04` — จุดเด่นในรอบปี (PDF pages 04–07: images + financial table)
- [x] Page `08` — ผลการดำเนินงาน (PDF pages 08–09: table + chart images)
- [x] Page `10` — รายงานคณะกรรมการ (PDF pages 10–11: photo + two-column text)

### 🚧 Pending — awaiting content from client
- [ ] Page `12` — สารจากประธาน (CEO Message)
- [ ] Page `18` — นโยบายและภาพรวมธุรกิจ
- [ ] Page `22` — แผนที่ธุรกิจ
- [ ] Page `24` — วิสัยทัศน์และพันธกิจ
- [ ] Page `254` — นโยบายการกำกับดูแล
- [ ] Page `282` — โครงสร้างการกำกับดูแล
- [ ] Page `342` — เอกสารแนบ 1

---

## Section Types (`src/data/pages.ts`)

Each page entry in `pagesData` has a `layout` field and a `sections` array.

### `layout` options

| Value | Description |
|-------|-------------|
| `'article'` | Simple article layout (white card, max-w-4xl) |
| `'pdf_composition'` | Compose multiple PDF pages, each as a `pdf_page` block |
| `'pdf_single_full'` | Single full-width PDF image (not yet used) |

### Section types

| Type | Description |
|------|-------------|
| `pdf_page` | Container for one PDF page. Has `backgroundColor`, `pageNumber`, `pageNumberAlign`, `desktopFullImage` (shows this image on lg+ instead of rendering children). Children are any other section types. |
| `pdf_banner` | Full-width image. `mobileSrcs` overrides on mobile. |
| `pdf_row` | Row of images (equal columns). `withGap` adds gap between items. |
| `pdf_header` | Small breadcrumb-style header text (bilingual). |
| `pdf_title` | Large section title text (bilingual). |
| `pdf_sub_title` | Smaller subtitle text (bilingual). |
| `pdf_quote_block` | Quote with signature image + name + position. |
| `pdf_text_columns` | Two-column flowing text layout. `fontFamily: 'sarabun'` for serif Thai. |
| `pdf_table` | Data table with columns + sections of rows. Supports `highlightColumnIndex` to bold one column. |
| `pdf_note` | Footnote text. `hidePrefix` hides the "หมายเหตุ:" prefix. |
| `text` | Simple paragraph with optional title (article layout). |
| `highlights` | KPI cards grid (article layout). |
| `quote` | Blockquote with attribution (article layout). |
| `list` | Bullet list (article layout). |
| `image` | Standalone image with optional caption (article layout). |

### `desktopFullImage` pattern

For `pdf_page` blocks, set `desktopFullImage` to a full-resolution PNG of the PDF page. On `lg+` screens this image is shown instead of rendering the child items. On mobile the child items render normally. This avoids re-slicing images for large screens.

```ts
{
  type: 'pdf_page',
  backgroundColor: '#d0f5fe',
  pageNumber: '04',
  pageNumberAlign: 'left',
  desktopFullImage: '/page-04/04_p04_full.png',  // ← shown on desktop
  items: [
    { type: 'pdf_banner', src: '/page-04/04_p04_banner.png' },
    { type: 'pdf_row', items: [
      { src: '/page-04/04_p04_col1.png' },
      { src: '/page-04/04_p04_col2.png' },
    ]},
  ]
}
```

---

## How to Add a New Page

### Step 1 — Prepare images

Export each PDF page as PNG. Naming convention:
```
public/page-{pageId}/
  {pageId}_p{pdfPageNum}_full.png      ← full desktop image
  {pageId}_p{pdfPageNum}_banner.png    ← top banner strip
  {pageId}_p{pdfPageNum}_col1.png      ← column slices (if needed)
  {pageId}_p{pdfPageNum}_col2.png
  ...
```

### Step 2 — Add entry to `src/data/pages.ts`

```ts
'12': {
  pageId: '12',
  title: { th: 'สารจากประธาน', en: 'Message from the CEO' },
  accentColor: '#1565c0',
  backgroundColor: '#ffffff',
  layout: 'pdf_composition',
  sections: [
    {
      type: 'pdf_page',
      backgroundColor: '#e3f6fc',
      pageNumber: '12',
      pageNumberAlign: 'left',
      desktopFullImage: '/page-12/12_p12_full.png',
      items: [
        { type: 'pdf_banner', src: '/page-12/12_p12_banner.png' },
        // ...
      ]
    }
  ],
  prevPage: '10',
  nextPage: '18',
},
```

### Step 3 — Update Sidebar (if new menu item needed)

In `src/components/Sidebar.tsx`, add to the relevant `<AccordionItem>` items array or as a `<NavLink>`.

### Step 4 — Update messages (if Sidebar label needed)

Add translation key to `messages/th.json` and `messages/en.json`.

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
