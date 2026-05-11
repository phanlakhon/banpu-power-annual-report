import type { PageData } from './types';

const page: PageData = {
    pageId: "013",
    title: { th: "สินทรัพย์ที่ใช้ในการประกอบธุรกิจ", en: "Assets for Business Operations" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_013/013_p01_full_th.webp", en: "/page_013/013_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "สินทรัพย์ที่ใช้ในการประกอบธุรกิจ", en: "Assets for Business Operations" },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_sub_title",
                    text: { th: "สินทรัพย์ถาวร", en: "Fixed Assets" },
                    color: "#6cc0b3",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "บริษัทฯ ประกอบธุรกิจการผลิตและจำหน่ายไฟฟ้า ไอน้ำ ทั้งในและต่างประเทศ ด้วยเหตุนี้ สินทรัพย์ถาวรที่แสดงในตารางด้านล่างจึงประกอบ ด้วยสินทรัพย์ถาวรของบริษัทฯ และสินทรัพย์ถาวรของบริษัทย่อย โดยมีมูลค่าสุทธิตามบัญชีหลังหักค่าเสื่อมราคาสะสม และสำรองการด้อยค่า ต่าง ๆ ตามที่แสดงในงบการเงินรวมของบริษัทฯ และบริษัทย่อย ณ วันที่ 31 ธันวาคม 2568 และ ณ วันที่ 31 ธันวาคม 2567 เท่ากับ 32,252,312 พันบาท และ 35,637,132 พันบาท ตามลำดับ โดยมีรายละเอียดดังต่อไปนี้",
                        en: "BPP's business assets in Thailand and overseas include generation and distribution of power and steam businesses.\nThe fixed assets illustrated in the tables below consist of the Company's and its subsidiaries' fixed assets. Net book value after deducting accumulated depreciation and impairment losses, as reported in the consolidated financial statements of the Company and its subsidiaries for the year ended 31 December 2025 and 31 December 2024, amounted to THB 32,252,312 thousand and THB 35,637,132 thousand, respectively, as detailed below:",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_013/013_p01_mobile_table_th.webp", en: "/page_013/013_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "012",
    nextPage: "014",
};

export default page;
