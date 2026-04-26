import { PageData } from "../pages";

export const page001Data: PageData = {
  pageId: '001',
  title: { th: 'จุดเด่นในรอบปี', en: 'Financial Highlights' },
  accentColor: '#6cc0b3',
  backgroundColor: '#f0f8ff',
  layout: 'pdf_composition',
  sections: [
    {
      type: 'pdf_page',
      items: [
        {
          type: 'pdf_banner',
          src: { th: '/page_001/006_p01_full_th.webp', en: '/page_001/006_p01_full_en.webp' },
          visibility: 'desktop-only'
        },
        {
          type: 'pdf_banner',
          src: { th: '/page_001/006_p01_mobile_section2_1_th.webp', en: '/page_001/006_p01_mobile_section2_1_en.webp' },
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_banner',
          src: { th: '/page_001/006_p01_mobile_section2_2_th.webp', en: '/page_001/006_p01_mobile_section2_2_en.webp' },
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_banner',
          src: { th: '/page_001/006_p01_mobile_table_th.webp', en: '/page_001/006_p01_mobile_table_en.webp' },
          visibility: 'mobile-only'
        },
      ]
    },
    {
      type: 'pdf_page',
      items: [
        {
          type: 'pdf_banner',
          src: { th: '/page_001/006_p02_full_th.webp', en: '/page_001/006_p02_full_en.webp' },
          visibility: 'desktop-only'
        },
        {
          type: 'pdf_banner',
          src: { th: '/page_001/006_p02_mobile_section2_1_th.webp', en: '/page_001/006_p02_mobile_section2_1_en.webp' },
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_banner',
          src: { th: '/page_001/006_p02_mobile_section2_2_th.webp', en: '/page_001/006_p02_mobile_section2_2_en.webp' },
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_banner',
          src: { th: '/page_001/006_p02_mobile_table_th.webp', en: '/page_001/006_p02_mobile_table_en.webp' },
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_html',
          visibility: 'mobile-only',
          content: {
            th: `
              <div class="px-5 py-4 bg-white font-sarabun space-y-1 text-[11px] text-gray-600 leading-relaxed">
                <div class="flex gap-1">
                  <span class="shrink-0">*</span>
                  <p>ในปี 2567 มีการตั้งค่าเผื่อการด้อยค่าของเงินลงทุนในโรงไฟฟ้านาโกโซ จำนวน 1,621 ล้านบาท</p>
                </div>
                <div class="flex gap-1">
                  <span class="shrink-0">**</span>
                  <p>กำไรจากการดำเนินงานก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคา และค่าใช้จ่ายตัดจ่าย (EBITDA) รวมกำไร (ขาดทุน) สุทธิที่เกิดขึ้นจริงจากการวัดมูลค่าเครื่องมือทางการเงิน</p>
                </div>
                <div class="flex gap-1">
                  <span class="shrink-0">***</span>
                  <p>บริษัทฯ กำหนดการจ่ายเงินปันผลสำหรับผลการดำเนินงานประจำปี 2568 งวดวันที่ 1 มกราคม 2568 ถึงวันที่ 31 ธันวาคม 2568 ในอัตราหุ้นละ 0.60 บาท ซึ่งได้จ่ายเงินปันผลระหว่างกาลไปแล้วหุ้นละ 0.25 บาท เมื่อวันที่ 23 กันยายน 2568 คงเหลือจ่ายเงินปันผลสำหรับงวดที่เหลืออีกหุ้นละ 0.35 บาท และบริษัทฯ กำหนดจ่ายเงินปันผลในวันที่ 28 เมษายน 2569</p>
                </div>
                <div class="pt-1">
                  <strong>หมายเหตุ :</strong> ข้อมูลทางการเงินและอัตราส่วนทางการเงินเป็นข้อมูลจากงบการเงินรวม
                </div>
              </div>
            `,
            en: `
              <div class="px-5 py-4 bg-white font-sarabun space-y-1 text-[11px] text-gray-600 leading-relaxed">
                <div class="flex gap-1">
                  <span class="shrink-0">*</span>
                  <p>In 2024, an allowance for impairment of investment in Nakoso Power Plant was recorded at Baht 1,621 million.</p>
                </div>
                <div class="flex gap-1">
                  <span class="shrink-0">**</span>
                  <p>Earnings before Interest, Tax, Depreciation and Amortization (EBITDA) including realized gain (loss) on valuation of financial instruments.</p>
                </div>
                <div class="flex gap-1">
                  <span class="shrink-0">***</span>
                  <p>The Company set the dividend payment for the 2025 operating results (Jan 1, 2025 - Dec 31, 2025) at Baht 0.60 per share. An interim dividend of Baht 0.25 per share was paid on Sep 23, 2025. The remaining dividend of Baht 0.35 per share is scheduled for payment on Apr 28, 2026.</p>
                </div>
                <div class="pt-1">
                  <strong>Note:</strong> Financial information and ratios are based on the consolidated financial statements.
                </div>
              </div>
            `
          }
        }
      ]
    }
  ],
  prevPage: '000',
  nextPage: '002'
};
