import type { PageData } from './types';

const page: PageData = {
    pageId: "049_cover",
    title: { th: "การรับรองความถูกต้องของข้อมูล", en: "Certification of Information and Data Accuracy" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_049_cover/049_cover_p01_full_th.webp", en: "/page_049_cover/049_cover_p01_full_en.webp" },
            items: [],
            visibility: "desktop-only",
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_049_cover/049_cover_p02_full_th.webp", en: "/page_049_cover/049_cover_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_049_cover/049_cover_p02_mobile_th.webp", en: "/page_049_cover/049_cover_p02_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "048",
    nextPage: "049",
};

export default page;
