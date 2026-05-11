import type { PageData } from './types';

const page: PageData = {
    pageId: "015",
    title: { th: "โครงสร้างกลุ่มบริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน)", en: "Banpu Power Public Company Limited Group Structure" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_015/015_p01_full_th.webp", en: "/page_015/015_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "โครงสร้างกลุ่ม บริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน)", en: "Banpu Power Group Structure" },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_015/015_p01_mobile_table_th.webp", en: "/page_015/015_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
        // p02
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_015/015_p02_full_th.webp", en: "/page_015/015_p02_full_en.webp" },
            items: [],
        },
    ],
    prevPage: "014",
    nextPage: "016",
};

export default page;
