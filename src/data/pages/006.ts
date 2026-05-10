import type { PageData } from './types';

const page: PageData = {
    pageId: "006",
    title: { th: "ข้อมูลกลุ่มธุรกิจ", en: "Information of Business Group" },
    accentColor: "#6cc0b3",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_006/006_p01_full_th.webp", en: "/page_006/006_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_006/006_p01_mobile_th.webp", en: "/page_006/006_p01_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "005",
    nextPage: "007",
};

export default page;
