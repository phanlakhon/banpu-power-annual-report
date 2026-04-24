import { PageData } from "../pages";

export const page008Data: PageData = {
  pageId: '008',
  title: { th: 'ผลการดำเนินงานในรอบปีที่ผ่านมา', en: 'Performance in the Past Year' },
  accentColor: '#264897',
  backgroundColor: '#f0f8ff',
  layout: 'pdf_composition',
  sections: [
    {
      type: 'pdf_page',
      items: [
        {
          type: 'pdf_banner',
          src: '/page-008/008_p01_full.webp',
          visibility: 'desktop-only'
        },
        {
          type: 'pdf_banner',
          src: '/page-008/008_p01_mobile_head_1.webp',
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_banner',
          src: '/page-008/008_p01_mobile_head_2.webp',
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_banner',
          src: '/page-008/008_p01_mobile_table.webp',
          visibility: 'mobile-only'
        },
      ]
    },
    {
      type: 'pdf_page',
      items: [
        {
          type: 'pdf_banner',
          src: '/page-008/008_p02_full.webp',
          visibility: 'desktop-only'
        },
        {
          type: 'pdf_banner',
          src: '/page-008/008_p02_mobile_head.webp',
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_banner',
          src: '/page-008/008_p02_mobile_table.webp',
          visibility: 'mobile-only'
        },
        {
          type: 'pdf_html',
          visibility: 'mobile-only',
          content: {
            th: `
              <div class="px-5 py-4 bg-white font-sarabun space-y-2 text-[11px] text-gray-600 leading-relaxed">
                <div class="font-bold mb-1">หมายเหตุ:</div>
                <div class="flex gap-1.5">
                  <span class="shrink-0">1</span>
                  <p>รายได้อื่น ๆ ได้แก่ รายได้จากการขายน้ำร้อนและน้ำเย็น</p>
                </div>
                <div class="flex gap-1.5">
                  <span class="shrink-0">2</span>
                  <p>บริษัทฯ ได้เสร็จสิ้นการจำหน่ายสัดส่วนการถือหุ้นทั้งหมดในบริษัท Nakoso IGCC Power Plant G.K. ซึ่งเป็นผู้ดำเนินโครงการโรงไฟฟ้านาโกโซ ประเทศญี่ปุ่น เมื่อวันที่ 25 ธันวาคม 2567</p>
                </div>
                <div class="flex gap-1.5">
                  <span class="shrink-0">3</span>
                  <div class="space-y-1">
                    <p>ธุรกิจพลังงานหมุนเวียนและเทคโนโลยีพลังงานภายใต้บริษัท บ้านปู เน็กซ์ จำกัด</p>
                    <p class="pl-2">• ปี 2566 มีกำไรพิเศษจากการวัดมูลค่าเงินลงทุนใหม่สำหรับธุรกิจแบตเตอรี่ จำนวน 1,336 ล้านบาท</p>
                  </div>
                </div>
              </div>
            `,
            en: `
              <div class="px-5 py-4 bg-white font-sarabun space-y-2 text-[11px] text-gray-600 leading-relaxed">
                <div class="font-bold mb-1">Note:</div>
                <div class="flex gap-1.5">
                  <span class="shrink-0">1</span>
                  <p>Other income includes revenue from the sale of hot and cold water.</p>
                </div>
                <div class="flex gap-1.5">
                  <span class="shrink-0">2</span>
                  <p>The Company completed the disposal of its entire shareholding in Nakoso IGCC Power Plant G.K., the operator of the Nakoso Power Plant project in Japan, on 25 December 2024.</p>
                </div>
                <div class="flex gap-1.5">
                  <span class="shrink-0">3</span>
                  <div class="space-y-1">
                    <p>Renewable energy and energy technology business under Banpu Next Co., Ltd.</p>
                    <p class="pl-2">• In 2023, there was a one-time gain from remeasuring the investment value for the battery business amounting to Baht 1,336 million.</p>
                  </div>
                </div>
              </div>
            `
          }
        }
      ]
    }
  ],
  prevPage: '006',
  nextPage: '010'
};
