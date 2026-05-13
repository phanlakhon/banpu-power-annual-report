import type { PageData } from './types';

const page: PageData = {
    pageId: '004',
    title: { th: 'สารจากประธานเจ้าหน้าที่บริหาร', en: "Chief Executive Officer's Review" },
    accentColor: '#1565c0',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_composition',
    sections: [
        {
            type: 'pdf_page',
            desktopFullImage: { th: '/page_004/012_p01_full_th.webp', en: '/page_004/012_p01_full_en.webp' },
            items: [
                { type: 'pdf_banner', src: { th: '/page_004/012_p01_mobile_title_th.webp', en: '/page_004/012_p01_mobile_title_en.webp' } },
                { type: 'pdf_banner', src: { th: '/page_004/012_p01_mobile_detail_1_th.webp', en: '/page_004/012_p01_mobile_detail_1_en.webp' } },
                { type: 'pdf_banner', src: { th: '/page_004/012_p01_mobile_detail_2_th.webp', en: '/page_004/012_p01_mobile_detail_2_en.webp' } },
            ],
        },
        {
            type: 'pdf_page',
            desktopFullImage: { th: '/page_004/012_p02_full_th.webp', en: '/page_004/012_p02_full_en.webp' },
            items: [
                { type: 'pdf_banner', src: { th: '/page_004/012_p02_mobile_banner_th.webp', en: '/page_004/012_p02_mobile_banner_en.webp' } },
                { type: 'pdf_banner', src: { th: '/page_004/012_p02_mobile_detail_1_th.webp', en: '/page_004/012_p02_mobile_detail_1_en.webp' } },
                { type: 'pdf_banner', src: { th: '/page_004/012_p02_mobile_detail_2_th.webp', en: '/page_004/012_p02_mobile_detail_2_en.webp' } },
            ],
        },
    ],
    prevPage: '003',
    nextPage: '005_cover',
};

export default page;
