import type { PageData } from './types';

const page: PageData = {
    pageId: "032_cover",
    title: { th: "การกำกับดูแลกิจการ", en: "Corporate Governance" },
    accentColor: "#6cc0b3",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_032_cover/032_cover_p01_full_th.webp", en: "/page_032_cover/032_cover_p01_full_en.webp" },
            items: [],
            visibility: "desktop-only",
        },
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_032_cover/032_cover_p02_full_th.webp", en: "/page_032_cover/032_cover_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_032_cover/032_cover_p02_mobile_th.webp", en: "/page_032_cover/032_cover_p02_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "031",
    nextPage: "032",
};

export default page;
