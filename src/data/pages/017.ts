import type { PageData } from './types';

const page: PageData = {
    pageId: "017",
    title: { th: "ผู้ถือหุ้นรายใหญ่", en: "Major Shareholders" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_017/017_p01_full_th.webp", en: "/page_017/017_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "ผู้ถือหุ้นรายใหญ่", en: "Major Shareholders" },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ผู้ถือหุ้นสูงสุด 10 รายแรก ณ วันที่ 30 ธันวาคม 2568 มีดังนี้",
                        en: "Ten Major Shareholders as of 30 December 2025",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_017/017_p01_mobile_table_th.webp", en: "/page_017/017_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "016",
    nextPage: "018",
};

export default page;
