import type { PageData } from './types';

const page: PageData = {
    pageId: "005",
    title: { th: "โครงสร้างและการดำเนินงานของกลุ่มบริษัท", en: "Group Structure and Business Operations" },
    accentColor: "#6cc0b3",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: "/page_005/005_p01_full.webp",
            items: [],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_005/005_p02_full_th.webp", en: "/page_005/005_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_005/005_p02_mobile_th.webp", en: "/page_005/005_p02_mobile_en.webp" },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_005/005_p03_full_th.webp", en: "/page_005/005_p03_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "โครงสร้างและการดำเนินงาน ของกลุ่มบริษัท", en: "Group Structure and Business Operations" },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_sub_title",
                    text: { th: "นโยบายการประกอบธุรกิจ", en: "Policy and Business Overview" },
                    color: "#6cc0b3",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_005/005_p03_mobile_th.webp", en: "/page_005/005_p03_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "004",
    nextPage: "006",
};

export default page;
