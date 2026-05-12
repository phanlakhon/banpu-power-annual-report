import type { PageData } from './types';

const page: PageData = {
    pageId: "020",
    title: { th: "การบริหารจัดการความเสี่ยงและปัจจัยความเสี่ยง", en: "Risk Management and Risk Factors" },
    accentColor: "#6cc0b3",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_020/020_p01_full_th.webp", en: "/page_020/020_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "การบริหารจัดการความเสี่ยงและปัจจัยความเสียง", en: "Risk Management and Risk Factors" },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_020/020_p01_mobile_1_th.webp", en: "/page_020/020_p01_mobile_1_en.webp" },
                },
                {
                    type: "pdf_sub_title",
                    text: { th: "โครงสร้างการบริหารจัดการความเสี่ยง", en: "Risk Management Structure" },
                    color: "#264897",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_020/020_p01_mobile_2_table_th.webp", en: "/page_020/020_p01_mobile_2_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
        // p02
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_020/020_p02_full_th.webp", en: "/page_020/020_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_020/020_p02_mobile_th.webp", en: "/page_020/020_p02_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "019",
    nextPage: "021",
};

export default page;
