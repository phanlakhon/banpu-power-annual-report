import type { PageData } from './types';

const page: PageData = {
    pageId: "029",
    title: { th: "อัตราส่วนทางการเงิน", en: "Financial Ratios" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_029/029_p01_full_th.webp", en: "/page_029/029_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "อัตราส่วนทางการเงิน", en: "Financial Ratios" },
                    color: "#6cc0b3",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_029/029_p01_mobile_table_th.webp", en: "/page_029/029_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "028",
    nextPage: "030",
};

export default page;
