# BANPU PDF to HTML Web Project

## เป้าหมาย
แปลงไฟล์ PDF จำนวน 360 หน้าเป็นเว็บ HTML โดยเริ่มจากตัวอย่าง 10 หน้าแรก (Demo) ตาม Reference ที่ลูกค้าให้

## โครงสร้างโปรเจค
- `src/app/[locale]/pages/` — เก็บไฟล์ HTML ของแต่ละหน้า
- `src/components/` — ส่วนประกอบ UI เช่น Sidebar, LanguageSwitcher
- `src/i18n/` — ระบบจัดการภาษา
- `public/assets/` — รูปภาพและไฟล์ประกอบ
- `messages/` — ข้อความภาษา EN/TH
- `README.md` — เอกสารอธิบายโปรเจค

## วิธีแปลง PDF เป็น HTML
1. ใช้เครื่องมือเช่น pdf2htmlEX หรือแปลงเป็นรูปภาพแล้วนำมาวางใน HTML
2. ปรับแต่ง HTML/CSS ให้เหมือน Reference
3. แยกแต่ละหน้าเป็นไฟล์ เช่น 01.html, 02.html, ... ใน `src/app/[locale]/pages/`

## วิธีเพิ่มหน้าใหม่
- คัดลอกไฟล์ HTML ตัวอย่าง แล้วเปลี่ยนเนื้อหา/รูปภาพตามหน้า PDF ที่ต้องการ

## วิธีรันโปรเจค
1. ติดตั้ง dependencies: `npm install`
2. รัน dev server: `npm run dev`
3. เปิดดูที่ `http://localhost:3000`

## การทำงานต่อ
- เพิ่มหน้าใหม่ใน `src/app/[locale]/pages/`
- ปรับแต่งเมนู/ภาษาใน `messages/`
- อัปเดต Sidebar หรือส่วนประกอบอื่นๆ ใน `src/components/`

## หมายเหตุ
- หากมีข้อสงสัยหรือปัญหา ให้ดูโค้ดตัวอย่างและ README นี้ก่อน
- ทุกไฟล์และโครงสร้างถูกออกแบบให้ขยายต่อได้ง่าย
