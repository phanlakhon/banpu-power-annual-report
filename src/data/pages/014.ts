import type { PageData } from './types';

const page: PageData = {
    pageId: "014",
    title: { th: "รายละเอียดสิทธิในการใช้ดินของธุรกิจโรงไฟฟ้าในประเทศจีน", en: "Details of Land Use Rights of Power Plant Business in China" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_014/014_p01_full_th.webp", en: "/page_014/014_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "รายละเอียดสิทธิในการใช้ที่ดินของธุรกิจ โรงไฟฟ้าในสาธารณรัฐประชาชนจีน", en: "Details of Land Used Rights of Power Business in China" },
                    color: "#264897",
                    size: "lg",
                },
                {
                    type: "pdf_sub_title",
                    text: { th: "สิทธิในการใช้ที่ดินของบริษัทย่อยที่ประกอบธุรกิจหลัก", en: "Land Used Rights Held by Subsidiaries Operating Major Businesses" },
                    color: "#6cc0b3",
                    size: "md",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ณ วันที่ 31 ธันวาคม 2568 บริษัทย่อยที่ประกอบธุรกิจหลักมีสิทธิในการใช้ที่ดิน ดังนี้",
                        en: "As of 31 December 2025, land used rights held by subsidiaries operating major businesses are as follows:",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_014/014_p01_mobile_table_th.webp", en: "/page_014/014_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "013",
    nextPage: "015",
};

export default page;
