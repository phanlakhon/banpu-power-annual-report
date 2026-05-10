import type { PageData } from './types';

const page: PageData = {
    pageId: "007",
    title: { th: "สรุปการเปลี่ยนแปลงและพัฒนาการที่สำคัญในรอบปีที่ผ่านมา", en: "Summary of Significant Changes and Developments during the Year" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_007/007_p01_full_th.webp", en: "/page_007/007_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "สรุปการเปลี่ยนแปลงและพัฒนาการ ที่สำคัญในรอบปีที่ผ่านมา", en: "Summary of Major Changes and Developments in the Past Year" },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_007/007_p01_mobile_th.webp", en: "/page_007/007_p01_mobile_en.webp" },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_007/007_p02_full_th.webp", en: "/page_007/007_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_007/007_p02_mobile_th.webp", en: "/page_007/007_p02_mobile_en.webp" },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_007/007_p03_full_th.webp", en: "/page_007/007_p03_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_007/007_p03_mobile_th.webp", en: "/page_007/007_p03_mobile_en.webp" },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_007/007_p04_full_th.webp", en: "/page_007/007_p04_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_007/007_p04_mobile_th.webp", en: "/page_007/007_p04_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "006",
    nextPage: "008",
};

export default page;
