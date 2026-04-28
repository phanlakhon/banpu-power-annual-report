import { PageData } from "../pages";

export const page003Data: PageData = {
  pageId: '003',
  title: { th: 'รายงานคณะกรรมการ', en: "Board of Directors' Review" },
  accentColor: '#311b92',
  backgroundColor: '#f0f8ff',
  layout: 'pdf_composition',
  sections: [
    {
      type: 'pdf_page',
      items: [
        { type: 'pdf_banner', src: { th: '/page_003/010_p01_full_th.webp', en: '/page_003/010_p01_full_en.webp' }, visibility: 'desktop-only' },
        { type: 'pdf_banner', src: { th: '/page_003/010_p01_mobile_body_th.webp', en: '/page_003/010_p01_mobile_body_en.webp' }, visibility: 'mobile-only' },
      ],
    },
    {
      type: 'pdf_page',
      items: [
        { type: 'pdf_banner', src: { th: '/page_003/010_p02_full_th.webp', en: '/page_003/010_p02_full_en.webp' }, visibility: 'desktop-only' },
        { type: 'pdf_banner', src: { th: '/page_003/010_p02_mobile_body_1_th.webp', en: '/page_003/010_p02_mobile_body_1_en.webp' }, visibility: 'mobile-only' },
        { type: 'pdf_banner', src: { th: '/page_003/010_p02_mobile_body_2_th.webp', en: '/page_003/010_p02_mobile_body_2_en.webp' }, visibility: 'mobile-only' },
      ],
    },
  ],
  prevPage: '002',
  nextPage: '004',
};
