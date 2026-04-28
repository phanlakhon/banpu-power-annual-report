import { PageData } from "../pages";

export const page004Data: PageData = {
  pageId: '004',
  title: { th: 'สารจากประธานเจ้าหน้าที่บริหาร', en: "Chief Executive Officer's Review" },
  accentColor: '#1565c0',
  backgroundColor: '#f0f8ff',
  layout: 'pdf_composition',
  sections: [
    {
      type: 'pdf_page',
      items: [
        { type: 'pdf_banner', src: { th: '/page_004/012_p01_full_th.webp', en: '/page_004/012_p01_full_en.webp' }, visibility: 'desktop-only' },
        { type: 'pdf_banner', src: { th: '/page_004/012_p01_mobile_title_th.webp', en: '/page_004/012_p01_mobile_title_en.webp' }, visibility: 'mobile-only' },
        { type: 'pdf_banner', src: { th: '/page_004/012_p01_mobile_detail_1_th.webp', en: '/page_004/012_p01_mobile_detail_1_en.webp' }, visibility: 'mobile-only' },
        { type: 'pdf_banner', src: { th: '/page_004/012_p01_mobile_detail_2_th.webp', en: '/page_004/012_p01_mobile_detail_2_en.webp' }, visibility: 'mobile-only' },
      ],
    },
    {
      type: 'pdf_page',
      items: [
        { type: 'pdf_banner', src: { th: '/page_004/012_p02_full_th.webp', en: '/page_004/012_p02_full_en.webp' }, visibility: 'desktop-only' },
        { type: 'pdf_banner', src: { th: '/page_004/012_p02_mobile_banner_th.webp', en: '/page_004/012_p02_mobile_banner_en.webp' }, visibility: 'mobile-only' },
        { type: 'pdf_banner', src: { th: '/page_004/012_p02_mobile_detail_1_th.webp', en: '/page_004/012_p02_mobile_detail_1_en.webp' }, visibility: 'mobile-only' },
        { type: 'pdf_banner', src: { th: '/page_004/012_p02_mobile_detail_2_th.webp', en: '/page_004/012_p02_mobile_detail_2_en.webp' }, visibility: 'mobile-only' },
      ],
    },
  ],
  prevPage: '003',
  nextPage: '005',
};
