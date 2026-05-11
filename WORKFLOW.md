# วิธีการทำงาน — Banpu Power Annual Report

## ภาพรวม

แต่ละ "menu" คือหน้าใน annual report หนึ่งหน้า  
แต่ละ menu มีไฟล์ข้อมูลที่ `src/data/pages/XXX.ts` (XXX = รหัส 3 หลัก เช่น 012, 013)  
Renderer อยู่ที่ `src/app/[locale]/pages/[pageId]/page.tsx` — **ห้ามแก้ไขโดยไม่จำเป็น**

---

## ขั้นตอนการทำ menu ใหม่

### 1. เปิดไฟล์ `src/data/pages/XXX.ts`

ไฟล์ถูกสร้างไว้ล่วงหน้าแล้วทุกเมนู โดยมี `sections: []` รอเติมเนื้อหา

### 2. เลือก layout ที่ถูกต้อง

| layout | ใช้เมื่อ |
|---|---|
| `"pdf_single_full"` | มี **section เดียว** (p01 หน้าเดียว) |
| `"pdf_composition"` | มี **2 section ขึ้นไป** (p01, p02, ...) |

### 3. เติม sections

แต่ละ "หน้า" (p01, p02, ...) = 1 object ใน `sections[]` ที่มี `type: "pdf_page"`

---

## โครงสร้างพื้นฐาน

```ts
import type { PageData } from './types';

const page: PageData = {
    pageId: "XXX",
    title: { th: "...", en: "..." },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",   // หรือ pdf_composition
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_XXX/XXX_p01_full_th.webp", en: "/page_XXX/XXX_p01_full_en.webp" },
            items: [
                // ... ลำดับ responsive items
            ],
        },
        // p02 (ถ้ามี → เปลี่ยนเป็น pdf_composition)
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_XXX/XXX_p02_full_th.webp", en: "/page_XXX/XXX_p02_full_en.webp" },
            items: [],
        },
    ],
    prevPage: "YYY",
    nextPage: "ZZZ",
};

export default page;
```

---

## ชื่อไฟล์รูปภาพ

ไฟล์รูปอยู่ใน `/public/page_XXX/`

| notation ในไกด์ | ชื่อไฟล์ | minWidth |
|---|---|---|
| `_mobile_table` | `XXX_pYY_mobile_table_th.webp` / `_en.webp` | 800 |
| `_mobile_1_table` | `XXX_pYY_mobile_1_table_th.webp` / `_en.webp` | 800 |
| `_mobile_2_table` | `XXX_pYY_mobile_2_table_th.webp` / `_en.webp` | 800 |
| `_mobile` | `XXX_pYY_mobile_th.webp` / `_en.webp` | ไม่ต้องใส่ |
| `_mobile_1` | `XXX_pYY_mobile_1_th.webp` / `_en.webp` | ไม่ต้องใส่ |
| `_mobile_2` | `XXX_pYY_mobile_2_th.webp` / `_en.webp` | ไม่ต้องใส่ |
| `full` (desktopFullImage) | `XXX_pYY_full_th.webp` / `_en.webp` | — |

> รูปที่มีคำว่า `table` ในชื่อ = ตาราง → ต้องใส่ `minWidth: 800` เสมอ

---

## Item Types ใน `items[]`

### `pdf_sub_title` — หัวข้อ

```ts
{
    type: "pdf_sub_title",
    text: { th: "...", en: "..." },
    color: "#264897",   // สีน้ำเงิน | "#6cc0b3" สีเขียว | "#000000" สีดำ
    size: "lg",         // lg | md | sm
    weight: "bold",     // bold | semibold | medium
}
```

| size | ขนาดที่แสดง |
|---|---|
| `"lg"` | ใหญ่ — ใช้เป็นหัวข้อหลักของหน้า |
| `"md"` | กลาง — ใช้เป็นหัวข้อรอง |
| `"sm"` | เล็ก — ใช้เป็นหัวข้อย่อย |

---

### `pdf_body_text` — ข้อความธรรมดา

```ts
{
    type: "pdf_body_text",
    text: { th: "...", en: "..." },
}
```

---

### `pdf_banner` — รูปภาพ

```ts
// รูปทั่วไป
{
    type: "pdf_banner",
    src: { th: "/page_XXX/XXX_p01_mobile_th.webp", en: "/page_XXX/XXX_p01_mobile_en.webp" },
}

// ตาราง (ต้องมี minWidth: 800)
{
    type: "pdf_banner",
    src: { th: "/page_XXX/XXX_p01_mobile_table_th.webp", en: "/page_XXX/XXX_p01_mobile_table_en.webp" },
    minWidth: 800,
}
```

---

### `pdf_note` — หมายเหตุ / ข้อความขนาดเล็ก

```ts
// มีคำว่า "หมายเหตุ :" นำหน้า (default)
{
    type: "pdf_note",
    text: { th: "...", en: "..." },
}

// ไม่มีคำนำหน้า (เช่น footnote ที่ขึ้นต้นด้วย * หรือ ¹)
{
    type: "pdf_note",
    hidePrefix: true,
    text: { th: "...", en: "..." },
}
```

---

### `pdf_list` — bullet list

```ts
// แบบ item เดียว (ไม่มี label)
{
    type: "pdf_list",
    items: [
        { th: "ข้อความ 1", en: "Text 1" },
        { th: "ข้อความ 2", en: "Text 2" },
    ],
}

// แบบมี label + description
{
    type: "pdf_list",
    items: [
        { label: { th: "หัวข้อ", en: "Label" }, description: { th: "รายละเอียด", en: "Description" } },
    ],
    color: "#264897",       // สี bullet (optional)
    labelColor: "#264897",  // สี label (optional)
}
```

---

### `pdf_numbered_list` — numbered list

```ts
{
    type: "pdf_numbered_list",
    items: [
        {
            label: { th: "หัวข้อ", en: "Label" },
            description: { th: "รายละเอียด", en: "Description" },
            subItems: [   // optional
                { th: "ย่อย 1", en: "Sub 1" },
            ],
        },
    ],
    startFrom: 1,   // เริ่มนับจากเลขไหน (optional, default 1)
}
```

---

## กรณีพิเศษ

### หน้าที่ไม่ต้องโชว์ responsive

```ts
{
    type: "pdf_page",
    desktopFullImage: { th: "...", en: "..." },
    items: [],   // ← array ว่าง
}
```

### หน้าที่ใช้รูป full + _mobile ปกติ (ไม่มีข้อความ)

```ts
{
    type: "pdf_page",
    desktopFullImage: { th: "...", en: "..." },
    items: [
        {
            type: "pdf_banner",
            src: { th: "..._mobile_th.webp", en: "..._mobile_en.webp" },
        },
    ],
}
```

---

## ไกด์ → Code: ตัวอย่างการแปล

ผู้ทำงานจะได้รับ "ไกด์" ที่เขียนในรูปแบบนี้:

```
p01

ลำดับ responsive

title สีน้ำเงิน lg
{ th: "...", en: "..." }

title สีเขียว md
{ th: "...", en: "..." }

text
{ th: "...", en: "..." }

ปิดท้ายด้วยรูป _mobile_table
```

แปลงเป็น code ได้ดังนี้:

```ts
{
    type: "pdf_page",
    desktopFullImage: { th: "/page_XXX/XXX_p01_full_th.webp", en: "/page_XXX/XXX_p01_full_en.webp" },
    items: [
        {
            type: "pdf_sub_title",
            text: { th: "...", en: "..." },
            color: "#264897",   // น้ำเงิน
            size: "lg",
            weight: "bold",
        },
        {
            type: "pdf_sub_title",
            text: { th: "...", en: "..." },
            color: "#6cc0b3",   // เขียว
            size: "md",
            weight: "medium",
        },
        {
            type: "pdf_body_text",
            text: { th: "...", en: "..." },
        },
        {
            type: "pdf_banner",
            src: { th: "/page_XXX/XXX_p01_mobile_table_th.webp", en: "/page_XXX/XXX_p01_mobile_table_en.webp" },
            minWidth: 800,
        },
    ],
},
```

---

## สีที่ใช้

| ชื่อสี | HEX | ใช้กับ |
|---|---|---|
| สีน้ำเงิน | `#264897` | title หลัก, accentColor ส่วนใหญ่ |
| สีเขียว | `#6cc0b3` | title รอง |
| สีดำ | `#000000` | subtitle ข้อมูล/วันที่ |

---

## กฎสำคัญ

1. **ห้ามแก้ไขข้อความที่ได้รับมาเด็ดขาด** ข้อความทั้งหมดมาจาก PDF ต้นฉบับ
2. **ถ้าเจอคำที่สงสัยว่าสะกดผิด ให้แจ้งผู้ดูแล** แต่ใส่ข้อความตามที่ได้รับมาก่อน
3. **แก้ข้อความได้เฉพาะกรณี TypeScript/build error** และต้องแจ้งก่อนเสมอ
4. **หลังเพิ่ม/แก้ไขทุกครั้ง ให้รัน** `npx tsc --noEmit` เพื่อตรวจสอบ error

---

## String ที่มีเครื่องหมายคำพูดภาษาอังกฤษ

ถ้า string ภาษาไทย/อังกฤษมีเครื่องหมาย `"` อยู่ข้างใน ต้อง escape เป็น `\"`

```ts
// ผิด
text: { th: "คำว่า "ระบบไฟฟ้า" ในที่นี้" }

// ถูก
text: { th: "คำว่า \"ระบบไฟฟ้า\" ในที่นี้" }
```
