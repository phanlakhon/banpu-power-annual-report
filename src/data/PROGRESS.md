# Project Progress: Banpu Annual Report

บันทึกสถานะการทำงานปัจจุบัน เพื่อให้ AI และทีมงานทำงานต่อได้อย่างต่อเนื่อง

## 📄 สถานะหน้าปัจจุบัน (Active Page)
### หน้า 035: (รอ Guide)
- **ความคืบหน้า:** ยังไม่เริ่ม — รอ Guide และ Assets
- **ไฟล์ข้อมูล:** `src/data/pages/035.ts`

## 🛠 สิ่งที่ปรับปรุงและเพิ่มความสามารถใหม่ (New Capabilities & Fixes)
ในการทำงานที่ผ่านมา ผมได้เพิ่มความสามารถและการแก้ไขสำคัญดังนี้:

1. **Newline Support (pdf_list):** เพิ่มความสามารถให้ Component `pdf_list` รองรับการเว้นบรรทัดด้วย `\n` (โดยการเพิ่ม `whitespace-pre-line` ใน Renderer) เพื่อให้จัดย่อหน้าในรายการ List ได้
2. **Corrected Type Usage:** แก้ไขการเรียกใช้จาก `pdf_bullet_list` (ซึ่งไม่มีในระบบ) ให้เป็น **`pdf_list`** ตาม Schema ที่ถูกต้อง
3. **Property Fix (pdf_banner):** ปรับเปลี่ยนการใช้ Property สำหรับลิงก์จาก `link` เป็น **`href`** เพื่อให้ตรงตาม Type และใช้งานได้จริง
4. **Standardization (minWidth):** กำหนดมาตรฐานการใช้ `minWidth: 800` ใน `pdf_banner` สำหรับรูปที่เป็นตาราง เพื่อแก้ปัญหาตารางเบียดกันบนมือถือ
5. **Bold & Underline (pdf_body_text):** เพิ่ม `bold?: boolean` และ `underline?: boolean` ใน `types.ts` และ Renderer เพื่อรองรับ "text ตัวเข้ม ขีดเส้นใต้" (ขนาดเท่ากับ body text ปกติ)

## ✅ งานที่ทำเสร็จแล้ว (Key Achievements)
1. **Menu 013–021:** ลงข้อมูลครบถ้วนทั้งหมด
2. **Menu 034 (p01–p26):** ลงข้อมูลครบถ้วนทั้ง TH/EN — **เสร็จสมบูรณ์แล้ว**
3. **WORKFLOW.md:** สร้างไฟล์เอกสารวิธีการทำงานแบบละเอียดไว้ที่ root ของโปรเจค

## 🔜 สิ่งที่ต้องทำต่อไป (To-Do List)
1. **หน้า 035:** ลงเนื้อหา (รอ Guide) ไฟล์ shell ถูกสร้างไว้ที่ `src/data/pages/035.ts` แล้ว
2. **รูปภาพ:** ตรวจสอบและแปลงรูปภาพหน้าใหม่ๆ ด้วย `public/convert_webp.py`

## 💡 คำแนะนำสำหรับผู้มาทำต่อ
- อ่านรายละเอียดการลงข้อมูลแต่ละ Section ได้ที่ `src/data/guide_034.md`
- หากเกิด Error เกี่ยวกับ Type ของเนื้อหา ให้ตรวจสอบนิยามที่ `src/data/pages/types.ts`
- การแก้ไข Styling ส่วนใหญ่จะอยู่ที่ `/src/app/[locale]/pages/[pageId]/page.tsx`

---
*อัปเดตล่าสุด: 2026-05-14 (โดย Claude)*
