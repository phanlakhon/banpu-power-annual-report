import type { PageData } from './types';

const page: PageData = {
    pageId: "010",
    title: { th: "แผนที่แสดงธุรกิจบริษัทและกำลังผลิตตามสัดส่วนการลงทุน", en: "Map Showing Business Locations and Production Capacity by Investment Proportion" },
    accentColor: "#6cc0b3",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_010/010_p01_full_th.webp", en: "/page_010/010_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "แผนที่แสดงธุรกิจบริษัทฯ และกำลังผลิตตามสัดส่วนการลงทุน", en: "Operation Map and Equity-based Power Capacity" },
                    color: "#6cc0b3",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_010/010_p01_mobile_th.webp", en: "/page_010/010_p01_mobile_en.webp" },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_010/010_p02_full_th.webp", en: "/page_010/010_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_010/010_p02_mobile_1_table_th.webp", en: "/page_010/010_p02_mobile_1_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_010/010_p02_mobile_2_th.webp", en: "/page_010/010_p02_mobile_2_en.webp" },
                },
            ],
        },
    ],
    prevPage: "009",
    nextPage: "011",
};

export default page;
