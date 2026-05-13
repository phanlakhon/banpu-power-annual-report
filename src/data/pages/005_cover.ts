import type { PageData } from './types';

const page: PageData = {
    pageId: "005_cover",
    title: { th: "การประกอบธุรกิจและผลการดำเนินงาน", en: "Group Structure and Business Operations" },
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
    ],
    prevPage: "004",
    nextPage: "005",
};

export default page;
