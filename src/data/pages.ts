import { page00Data } from "./pages/page-00";

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
  '00': page00Data,
  '006': {
    pageId: '006',
    title: { th: 'จุดเด่นในรอบปี', en: 'Highlights of the Year' },
    accentColor: '#6cc0b3',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '00',
    nextPage: '008',
  },
  '008': {
    pageId: '008',
    title: { th: 'ผลการดำเนินงานในรอบปีที่ผ่านมา', en: 'Performance in the Past Year' },
    accentColor: '#264897',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '006',
    nextPage: '010',
  },
  '010': {
    pageId: '010',
    title: { th: 'รายงานคณะกรรมการ', en: "Board of Directors' Report" },
    accentColor: '#311b92',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '008',
    nextPage: '012',
  },
  '012': {
    pageId: '012',
    title: { th: 'สารจากประธานเจ้าหน้าที่บริหาร', en: 'Message from the CEO' },
    accentColor: '#1565c0',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '010',
    nextPage: '016',
  },

  // ── ส่วนที่ 01 การประกอบธุรกิจและผลการดำเนินงาน ─────────────────────────
  '016': {
    pageId: '016',
    title: { th: 'โครงสร้างและการดำเนินงานของกลุ่มบริษัท', en: 'Group Structure and Operations' },
    accentColor: '#6cc0b3',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '012',
    nextPage: '026',
  },
  '026': {
    pageId: '026',
    title: { th: 'ข้อมูลกลุ่มธุรกิจ', en: 'Business Group Information' },
    accentColor: '#6cc0b3',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '016',
    nextPage: '038',
  },
  '038': {
    pageId: '038',
    title: { th: 'ภาวะตลาดและการแข่งขัน', en: 'Market Conditions and Competition' },
    accentColor: '#264897',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '026',
    nextPage: '060',
  },
  '060': {
    pageId: '060',
    title: { th: 'สินทรัพย์ที่ใช้ในการประกอบธุรกิจ', en: 'Assets Used in Business Operations' },
    accentColor: '#4b3fa7',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '038',
    nextPage: '062',
  },
  '062': {
    pageId: '062',
    title: { th: 'โครงสร้างกลุ่มบริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน)', en: 'Banpu Power Public Company Limited Group Structure' },
    accentColor: '#4b3fa7',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '060',
    nextPage: '064',
  },
  '064': {
    pageId: '064',
    title: { th: 'รายชื่อบริษัทย่อย และบริษัทร่วม และการร่วมค้า', en: 'Subsidiaries, Associates and Joint Ventures' },
    accentColor: '#4b3fa7',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '062',
    nextPage: '073',
  },
  '073': {
    pageId: '073',
    title: { th: 'ผู้ถือหุ้นรายใหญ่', en: 'Major Shareholders' },
    accentColor: '#264897',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '064',
    nextPage: '074',
  },
  '074': {
    pageId: '074',
    title: { th: 'หุ้นกู้', en: 'Debentures' },
    accentColor: '#264897',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '073',
    nextPage: '075',
  },
  '075': {
    pageId: '075',
    title: { th: 'นโยบายการจ่ายเงินปันผล', en: 'Dividend Policy' },
    accentColor: '#264897',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '074',
    nextPage: '076',
  },
  '076': {
    pageId: '076',
    title: { th: 'การบริหารจัดการความเสี่ยงและปัจจัยความเสี่ยง', en: 'Risk Management and Risk Factors' },
    accentColor: '#c62828',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '075',
    nextPage: '083',
  },
  '083': {
    pageId: '083',
    title: { th: 'การขับเคลื่อนธุรกิจเพื่อความยั่งยืน', en: 'Driving Business for Sustainability' },
    accentColor: '#2e7d32',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '076',
    nextPage: '116',
  },
  '116': {
    pageId: '116',
    title: { th: 'คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ', en: 'Management Discussion and Analysis' },
    accentColor: '#1565c0',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '083',
    nextPage: '127',
  },
  '127': {
    pageId: '127',
    title: { th: 'ข้อมูลทั่วไปและข้อมูลสำคัญอื่น ๆ', en: 'General and Other Important Information' },
    accentColor: '#455a64',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '116',
    nextPage: '130',
  },

  // ── ส่วนที่ 02 การกำกับดูแลกิจการ ───────────────────────────────────────
  '130': {
    pageId: '130',
    title: { th: 'นโยบายการกำกับดูแลกิจการ', en: 'Corporate Governance Policy' },
    accentColor: '#264897',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '127',
    nextPage: '158',
  },
  '158': {
    pageId: '158',
    title: { th: 'โครงสร้างการกำกับดูแลกิจการ', en: 'Corporate Governance Structure' },
    accentColor: '#311b92',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '130',
    nextPage: '182',
  },
  '182': {
    pageId: '182',
    title: { th: 'รายงานผลการดำเนินงานด้านการกำกับดูแลกิจการ', en: 'Corporate Governance Performance Report' },
    accentColor: '#311b92',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '158',
    nextPage: '198',
  },
  '198': {
    pageId: '198',
    title: { th: 'การควบคุมภายในและรายการระหว่างกัน', en: 'Internal Control and Related Party Transactions' },
    accentColor: '#264897',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '182',
    nextPage: '210',
  },

  // ── ส่วนที่ 03 การรับรองความถูกต้องของข้อมูล ────────────────────────────
  '210': {
    pageId: '210',
    title: { th: 'เอกสารแบบ 1 รายละเอียดเกี่ยวกับคณะกรรมการบริษัทและผู้บริหาร', en: 'Attachment 1: Board of Directors and Executives Details' },
    accentColor: '#6cc0b3',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '198',
    nextPage: '228',
  },
  '228': {
    pageId: '228',
    title: { th: 'เอกสารแนบ 2 รายละเอียดเกี่ยวกับกรรมการของบริษัทฯ บริษัทย่อย บริษัทร่วม และบริษัทร่วมค้า', en: 'Attachment 2: Directors of the Company, Subsidiaries, Associates and JVs' },
    accentColor: '#6cc0b3',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '210',
    nextPage: '230',
  },
  '230': {
    pageId: '230',
    title: { th: 'เอกสารแบบ 3 นโยบายและแนวปฏิบัติการกำกับดูแลกิจการ และจรรยาบรรณธุรกิจ', en: 'Attachment 3: Corporate Governance Policy and Business Ethics' },
    accentColor: '#6cc0b3',
    backgroundColor: '#ffffff',
    layout: 'pdf_composition',
    sections: [],
    prevPage: '228',
    nextPage: undefined,
  },
};

export const pageOrder = [
  '00','006', '008', '010', '012',
  '016', '026', '038', '060', '062', '064', '073', '074', '075', '076', '083', '116', '127',
  '130', '158', '182', '198',
  '210', '228', '230',
];
