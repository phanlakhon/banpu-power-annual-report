import { page000Data } from "./pages/page-000";
import { page001Data } from "./pages/page-001";
import { page002Data } from "./pages/page-002";

export type BilingualText = { th: string; en: string };

export type TableRowData = {
  label: BilingualText;
  unit?: BilingualText;
  values: string[];
  isBold?: boolean;
};

export type TableSectionData = {
  title?: BilingualText;
  unit?: BilingualText;
  rows: TableRowData[];
};

export type PageSection =
  | { type: 'text'; title?: BilingualText; content: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'highlights'; title?: BilingualText; content: BilingualText; items: Array<{ label: BilingualText; value: string }>; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'quote'; content: BilingualText; attribution?: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'list'; title?: BilingualText; items: BilingualText[]; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'image'; src: string; alt?: string; caption?: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_banner'; src: string; mobileSrcs?: string[]; alt?: string; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_row'; items: Array<{ src: string; alt?: string; colSpan?: number }>; withGap?: boolean; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_page'; items: PageSection[]; backgroundColor?: string; noPadding?: boolean; noMinHeight?: boolean; pageNumber?: string; pageNumberAlign?: 'left' | 'right'; pageNumberColor?: string; desktopFullImage?: string; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_note'; text: BilingualText; hidePrefix?: boolean; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_header'; text: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_title'; text: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_sub_title'; text: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
  | {
    type: 'pdf_quote_block';
    text: BilingualText;
    signatureSrc: string;
    signatureName: BilingualText;
    signaturePosition: BilingualText;
    visibility?: 'desktop-only' | 'mobile-only';
  }
  | { type: 'pdf_text_columns'; columns: BilingualText[]; fontFamily?: string; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_html'; content: BilingualText; className?: string; visibility?: 'desktop-only' | 'mobile-only' }
  | {
    type: 'pdf_table';
    headerTitle?: BilingualText;
    columns: BilingualText[];
    sections: TableSectionData[];
    highlightColumnIndex?: number;
    visibility?: 'desktop-only' | 'mobile-only';
  };

export type PageData = {
  pageId: string;
  title: BilingualText;
  subtitle?: BilingualText;
  accentColor: string;
  backgroundColor?: string;
  layout?: 'article' | 'pdf_composition' | 'pdf_single_full';
  sections: PageSection[];
  prevPage?: string;
  nextPage?: string;
};

export const pagesData: Record<string, PageData> = {
  '000': page000Data,
  '001': page001Data,
  '002': page002Data,

  '003': {
    pageId: '003',
    title: { th: 'รายงานคณะกรรมการ', en: "Board of Directors' Review" },
    accentColor: '#311b92',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_composition',
    sections: [
      {
        type: 'pdf_page',
        items: [
          { type: 'pdf_banner', src: '/page-010/010_p01_full.webp', visibility: 'desktop-only' },
          { type: 'pdf_banner', src: '/page-010/010_p01_mobile_head_1.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-010/010_p01_mobile_head_2.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-010/010_p01_mobile_body.webp', visibility: 'mobile-only' },
        ]
      },
      {
        type: 'pdf_page',
        items: [
          { type: 'pdf_banner', src: '/page-010/010_p02_full.webp', visibility: 'desktop-only' },
          { type: 'pdf_banner', src: '/page-010/010_p02_mobile_head.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-010/010_p02_mobile_body_1.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-010/010_p02_mobile_body_2.webp', visibility: 'mobile-only' },
        ]
      }
    ],
    prevPage: '002',
    nextPage: '004',
  },

  '004': {
    pageId: '004',
    title: { th: 'สารจากประธานเจ้าหน้าที่บริหาร', en: "Chief Executive Officer's Review" },
    accentColor: '#1565c0',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_composition',
    sections: [
      {
        type: 'pdf_page',
        items: [
          { type: 'pdf_banner', src: '/page-012/012_p01_full.webp', visibility: 'desktop-only' },
          { type: 'pdf_banner', src: '/page-012/012_p01_mobile_head_1.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-012/012_p01_mobile_head_2.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-012/012_p01_mobile_title.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-012/012_p01_mobile_detail_1.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-012/012_p01_mobile_detail_2.webp', visibility: 'mobile-only' },
        ]
      },
      {
        type: 'pdf_page',
        items: [
          { type: 'pdf_banner', src: '/page-012/012_p02_full.webp', visibility: 'desktop-only' },
          { type: 'pdf_banner', src: '/page-012/012_p02_mobile_head.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-012/012_p02_mobile_banner.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-012/012_p02_mobile_detail_1.webp', visibility: 'mobile-only' },
          { type: 'pdf_banner', src: '/page-012/012_p02_mobile_detail_2.webp', visibility: 'mobile-only' },
        ]
      }
    ],
    prevPage: '003',
    nextPage: '005',
  },

  // ── ส่วนที่ 01 การประกอบธุรกิจและผลการดำเนินงาน ─────────────────────────
  '005': {
    pageId: '005',
    title: { th: 'โครงสร้างและการดำเนินงานของกลุ่มบริษัท', en: 'Group Structure and Business Operations' },
    accentColor: '#6cc0b3',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '004',
    nextPage: '006',
  },
  '006': {
    pageId: '006',
    title: { th: 'ข้อมูลกลุ่มธุรกิจ', en: 'Information of Business Group' },
    accentColor: '#6cc0b3',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '005',
    nextPage: '007',
  },
  '007': {
    pageId: '007',
    title: { th: 'ภาวะตลาดและการแข่งขัน', en: 'Market and Competition' },
    accentColor: '#264897',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '006',
    nextPage: '008',
  },
  '008': {
    pageId: '008',
    title: { th: 'สินทรัพย์ที่ใช้ในการประกอบธุรกิจ', en: 'Assets for Business Operations' },
    accentColor: '#4b3fa7',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '007',
    nextPage: '009',
  },
  '009': {
    pageId: '009',
    title: { th: 'โครงสร้างกลุ่มบริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน)', en: 'Banpu Power Public Company Limited Group Structure' },
    accentColor: '#4b3fa7',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '008',
    nextPage: '010',
  },
  '010': {
    pageId: '010',
    title: { th: 'รายชื่อบริษัทย่อย และบริษัทร่วม และการร่วมค้า', en: 'Details of the Company, Its Subsidiaries, Associated Companies and Joint Ventures' },
    accentColor: '#4b3fa7',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '009',
    nextPage: '011',
  },
  '011': {
    pageId: '011',
    title: { th: 'ผู้ถือหุ้นรายใหญ่', en: 'Major Shareholders' },
    accentColor: '#264897',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '010',
    nextPage: '012',
  },
  '012': {
    pageId: '012',
    title: { th: 'หุ้นกู้', en: 'Debenture' },
    accentColor: '#264897',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '011',
    nextPage: '013',
  },
  '013': {
    pageId: '013',
    title: { th: 'นโยบายการจ่ายเงินปันผล', en: 'Dividend Policy' },
    accentColor: '#264897',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '012',
    nextPage: '014',
  },
  '014': {
    pageId: '014',
    title: { th: 'การบริหารจัดการความเสี่ยงและปัจจัยความเสี่ยง', en: 'Risk Management and Risk Factors' },
    accentColor: '#c62828',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '013',
    nextPage: '015',
  },
  '015': {
    pageId: '015',
    title: { th: 'การขับเคลื่อนธุรกิจเพื่อความยั่งยืน', en: 'Driving Business Sustainability' },
    accentColor: '#2e7d32',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '014',
    nextPage: '016',
  },
  '016': {
    pageId: '016',
    title: { th: 'คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ และอัตราส่วนทางการเงิน', en: "Management's Discussion and Analysis and Financial Ratios" },
    accentColor: '#1565c0',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '015',
    nextPage: '017',
  },
  '017': {
    pageId: '017',
    title: { th: 'ข้อมูลทั่วไปและข้อมูลสำคัญอื่น ๆ', en: 'General Information and Other Important Information' },
    accentColor: '#455a64',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '016',
    nextPage: '018',
  },

  // ── ส่วนที่ 02 การกำกับดูแลกิจการ ───────────────────────────────────────
  '018': {
    pageId: '018',
    title: { th: 'นโยบายการกำกับดูแลกิจการ', en: 'Corporate Governance Policy' },
    accentColor: '#264897',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '017',
    nextPage: '019',
  },
  '019': {
    pageId: '019',
    title: { th: 'โครงสร้างการกำกับดูแลกิจการ และข้อมูลสำคัญเกี่ยวกับคณะกรรมการ คณะกรรมการชุดย่อย ผู้บริหาร พนักงาน และอื่น ๆ', en: 'Corporate Governance Structure and Details of the Board of Directors, Sub-Committees, the Management, Employees, and Others' },
    accentColor: '#311b92',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '018',
    nextPage: '020',
  },
  '020': {
    pageId: '020',
    title: { th: 'รายงานผลการดำเนินงานด้านการกำกับดูแลกิจการ', en: 'Corporate Governance Performance' },
    accentColor: '#311b92',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '019',
    nextPage: '021',
  },
  '021': {
    pageId: '021',
    title: { th: 'การควบคุมภายในและรายการระหว่างกัน', en: 'Internal Control and Connected Transactions' },
    accentColor: '#264897',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '020',
    nextPage: '022',
  },

  // ── ส่วนที่ 03 การรับรองความถูกต้องของข้อมูล ────────────────────────────
  '022': {
    pageId: '022',
    title: { th: 'เอกสารแบบ 1 รายละเอียดเกี่ยวกับคณะกรรมการบริษัทและผู้บริหาร', en: 'Attachment 1 Details about the Board of Directors and Management' },
    accentColor: '#6cc0b3',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '021',
    nextPage: '023',
  },
  '023': {
    pageId: '023',
    title: { th: 'เอกสารแนบ 2 รายละเอียดเกี่ยวกับกรรมการของบริษัทฯ บริษัทย่อย บริษัทร่วม และบริษัทร่วมค้า', en: 'Attachment 2 Details of Directors of BPP and Its Subsidiaries, Associated Companies, and Joint Ventures' },
    accentColor: '#6cc0b3',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '022',
    nextPage: '024',
  },
  '024': {
    pageId: '024',
    title: { th: 'เอกสารแบบ 3 นโยบายและแนวปฏิบัติการกำกับดูแลกิจการ และจรรยาบรรณธุรกิจ', en: 'Attachment 3 Corporate Governance Policy and Practices and Code of Conduct' },
    accentColor: '#6cc0b3',
    backgroundColor: '#f0f8ff',
    layout: 'pdf_single_full',
    sections: [],
    prevPage: '023',
    nextPage: undefined,
  },
};

export const pageOrder = [
  '000', '001', '002', '003', '004',
  '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017',
  '018', '019', '020', '021',
  '022', '023', '024',
];
