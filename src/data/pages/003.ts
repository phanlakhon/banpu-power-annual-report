import type { PageData } from './types';

const page: PageData = {
    pageId: '003',
    title: { th: 'รายงานคณะกรรมการ', en: "Board of Directors' Review" },
    accentColor: '#311b92',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_composition',
    sections: [
        {
            type: 'pdf_page',
            desktopFullImage: { th: '/page_003/010_p01_full_th.webp', en: '/page_003/010_p01_full_en.webp' },
            items: [
                { type: 'pdf_banner', src: { th: '/page_003/010_p01_mobile_body_th.webp', en: '/page_003/010_p01_mobile_body_en.webp' } },
            ],
        },
        {
            type: 'pdf_page',
            desktopFullImage: { th: '/page_003/010_p02_full_th.webp', en: '/page_003/010_p02_full_en.webp' },
            items: [
                { type: 'pdf_banner', src: { th: '/page_003/010_p02_mobile_body_1_th.webp', en: '/page_003/010_p02_mobile_body_1_en.webp' } },
                { type: 'pdf_banner', src: { th: '/page_003/010_p02_mobile_body_2_th.webp', en: '/page_003/010_p02_mobile_body_2_en.webp' } },
            ],
        },
    ],
    prevPage: '002',
    nextPage: '004',
};

export default page;
