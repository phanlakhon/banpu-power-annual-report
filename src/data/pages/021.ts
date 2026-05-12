import type { PageData } from './types';

const page: PageData = {
    pageId: "021",
    title: { th: "ปัจจัยความเสี่ยง", en: "Risk Factors" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_021/021_p01_full_th.webp", en: "/page_021/021_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_021/021_p01_mobile_th.webp", en: "/page_021/021_p01_mobile_en.webp" },
                },
            ],
        },
        // p02
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_021/021_p02_full_th.webp", en: "/page_021/021_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_021/021_p02_mobile_th.webp", en: "/page_021/021_p02_mobile_en.webp" },
                },
            ],
        },
        // p03
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_021/021_p03_full_th.webp", en: "/page_021/021_p03_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_021/021_p03_mobile_th.webp", en: "/page_021/021_p03_mobile_en.webp" },
                },
            ],
        },
        // p04
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_021/021_p04_full_th.webp", en: "/page_021/021_p04_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_021/021_p04_mobile_th.webp", en: "/page_021/021_p04_mobile_en.webp" },
                },
            ],
        },
        // p05
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_021/021_p05_full_th.webp", en: "/page_021/021_p05_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_021/021_p05_mobile_th.webp", en: "/page_021/021_p05_mobile_en.webp" },
                },
            ],
        },
        // p06
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_021/021_p06_full_th.webp", en: "/page_021/021_p06_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_021/021_p06_mobile_th.webp", en: "/page_021/021_p06_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "020",
    nextPage: "022",
};

export default page;
