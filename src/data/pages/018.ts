import type { PageData } from './types';

const page: PageData = {
    pageId: "018",
    title: { th: "หุ้นกู้", en: "Debenture" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_018/018_p01_full_th.webp", en: "/page_018/018_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "หุ้นกู้", en: "Debenture" },
                    color: "#264897",
                    size: "lg",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_018/018_p01_mobile_table_th.webp", en: "/page_018/018_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "017",
    nextPage: "019",
};

export default page;
