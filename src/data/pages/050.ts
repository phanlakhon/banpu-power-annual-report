import type { PageData } from './types';

const page: PageData = {
    pageId: "050",
    title: { th: "เอกสารแนบ 2 รายละเอียดเกี่ยวกับกรรมการของบริษัทฯ บริษัทย่อย บริษัทร่วม และบริษัทร่วมค้า", en: "Attachment 2 Details of Directors of BPP and Its Subsidiaries, Associated Companies, and Joint Ventures" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_050/050_p01_full_th.webp", en: "/page_050/050_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "เอกสารแนบ 2",
                        en: "Attachment 2",
                    },
                    color: "#6cc0b3",
                    size: "lg",
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "รายละเอียดเกี่ยวกับกรรมการของบริษัทฯ บริษัทย่อย บริษัทร่วม และบริษัทร่วมค้า",
                        en: "Details of Directors of BPP and Its Subsidiaries, Associated Companies, and Joint Ventures",
                    },
                    color: "#264897",
                    size: "md",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ข้อมูล ณ วันที่ 31 ธันวาคม 2568",
                        en: "As of 31 December 2025",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_050/050_p01_mobile_1_table_th.webp", en: "/page_050/050_p01_mobile_1_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_050/050_p01_mobile_2_th.webp", en: "/page_050/050_p01_mobile_2_en.webp" },
                },
            ],
        },
        // p02
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_050/050_p02_full_th.webp", en: "/page_050/050_p02_full_en.webp" },
            items: [],
        },
    ],
    prevPage: "049",
    nextPage: "051",
};

export default page;
