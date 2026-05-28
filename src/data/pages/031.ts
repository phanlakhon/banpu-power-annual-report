import type { PageData } from './types';

const page: PageData = {
    pageId: "031",
    title: { th: "ข้อพิพาททางกฎหมาย", en: "Legal Disputes" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_031/031_p01_full_th.webp", en: "/page_031/031_p01_full_en.webp" },
            desktopAspectRatio: "2481 / 3485",
            // backgroundColor: "#f0f8ff",
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_031/031_p01_mobile_th.webp", en: "/page_031/031_p01_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "030",
    nextPage: "032_cover",
};

export default page;
