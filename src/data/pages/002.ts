import type { PageData } from './types';

const page: PageData = {
    pageId: '002',
    title: { th: 'ผลการดำเนินงานในรอบปีที่ผ่านมา', en: 'Operating Results' },
    accentColor: '#264897',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_composition',
    sections: [
        {
            type: 'pdf_page',
            desktopFullImage: { th: '/page_002/008_p01_full_th.webp', en: '/page_002/008_p01_full_en.webp' },
            items: [
                { type: 'pdf_banner', src: { th: '/page_002/008_p01_mobile_table_th.webp', en: '/page_002/008_p01_mobile_table_en.webp' }, minWidth: 800 },
            ],
        },
        {
            type: 'pdf_page',
            desktopFullImage: { th: '/page_002/008_p02_full_th.webp', en: '/page_002/008_p02_full_en.webp' },
            items: [
                { type: 'pdf_banner', src: { th: '/page_002/008_p02_mobile_table_th.webp', en: '/page_002/008_p02_mobile_table_en.webp' }, minWidth: 800 },
                {
                    type: 'pdf_note',
                    text: {
                        th: "1  รายได้อื่น ๆ ได้แก่ รายได้จากการขายน้ำร้อนและน้ำเย็น\n2  บริษัทฯ ได้เสร็จสิ้นการจำหน่ายสัดส่วนการถือหุ้นทั้งหมดในบริษัท Nakoso IGCC Power Plant G.K. ซึ่งเป็นผู้ดำเนินโครงการโรงไฟฟ้านาโกโซ ประเทศญี่ปุ่น เมื่อวันที่ 25 ธันวาคม 2567\n3  ธุรกิจพลังงานหมุนเวียนและเทคโนโลยีพลังงานภายใต้บริษัท บ้านปู เน็กซ์ จำกัด\n   • ปี 2566 มีกำไรพิเศษจากการวัดมูลค่าเงินลงทุนใหม่สำหรับธุรกิจแบตเตอรี่ จำนวน 1,336 ล้านบาท",
                        en: "1  Other income includes revenue from the sale of hot and cold water.\n2  The Company completed the disposal of its entire shareholding in Nakoso IGCC Power Plant G.K., the operator of the Nakoso Power Plant project in Japan, on 25 December 2024.\n3  Renewable energy and energy technology business under Banpu Next Co., Ltd.\n   • In 2023, there was a one-time gain from remeasuring the investment value for the battery business amounting to Baht 1,336 million.",
                    },
                },
            ],
        },
    ],
    prevPage: '001',
    nextPage: '003',
};

export default page;
