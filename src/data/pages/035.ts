import type { PageData } from './types';

const page: PageData = {
    pageId: "035",
    title: { th: "โครงสร้างการกำกับดูแลกิจการและข้อมูลสำคัญเกี่ยวกับคณะกรรมการ คณะกรรมการชุดย่อย ผู้บริหาร พนักงาน และอื่น ๆ", en: "Corporate Governance Structure and Details of the Board of Directors, Sub-Committees, the Management, Employees, and Others" },
    accentColor: "#6cc0b3",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_035/035_p01_full_th.webp", en: "/page_035/035_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "โครงสร้างการกำกับดูแลกิจการและข้อมูลสำคัญ เกี่ยวกับคณะกรรมการ คณะกรรมการชุดย่อย ผู้บริหาร พนักงานและอิน ๆ",
                        en: "Corporate Governance Structure and Details of the Board of Directors, Sub-Committees, the Management, Employees, and Others",
                    },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "โครงสร้างการกำกับดูแลกิจการ",
                        en: "Corporate Governance Structure",
                    },
                    color: "#6cc0b3",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ณ วันที่ 1 มกราคม 2569",
                        en: "As of 1 January 2026",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_035/035_p01_mobile_table_th.webp", en: "/page_035/035_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "034",
    nextPage: "036",
};

export default page;
