import { page000Data } from "./pages/page-000";
import { page001Data } from "./pages/page-001";
import { page002Data } from "./pages/page-002";
import { page003Data } from "./pages/page-003";
import { page004Data } from "./pages/page-004";
import { page005Data } from "./pages/page-005";
import { page006Data } from "./pages/page-006";
import { page007Data } from "./pages/page-007";
import { page008Data } from "./pages/page-008";
import { page009Data } from "./pages/page-009";
import { page010Data } from "./pages/page-010";
import { page011Data } from "./pages/page-011";
import { page012Data } from "./pages/page-012";
import { page013Data } from "./pages/page-013";
import { page014Data } from "./pages/page-014";
import { page015Data } from "./pages/page-015";
import { page016Data } from "./pages/page-016";
import { page017Data } from "./pages/page-017";
import { page018Data } from "./pages/page-018";
import { page019Data } from "./pages/page-019";
import { page020Data } from "./pages/page-020";
import { page021Data } from "./pages/page-021";
import { page022Data } from "./pages/page-022";
import { page023Data } from "./pages/page-023";
import { page024Data } from "./pages/page-024";

export type BilingualText = { th: string; en: string };

// src can be a plain string (same image for both locales) or locale-specific { th, en }
export type LocalizedSrc = string | { th: string; en: string };

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
  | { type: 'image'; src: LocalizedSrc; alt?: string; caption?: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_banner'; src: LocalizedSrc; mobileSrcs?: LocalizedSrc[]; alt?: string; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_row'; items: Array<{ src: LocalizedSrc; alt?: string; colSpan?: number }>; withGap?: boolean; visibility?: 'desktop-only' | 'mobile-only' }
  | { type: 'pdf_page'; items: PageSection[]; backgroundColor?: string; noPadding?: boolean; noMinHeight?: boolean; pageNumber?: string; pageNumberAlign?: 'left' | 'right'; pageNumberColor?: string; desktopFullImage?: LocalizedSrc; visibility?: 'desktop-only' | 'mobile-only' }
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
  '003': page003Data,
  '004': page004Data,
  '005': page005Data,
  '006': page006Data,
  '007': page007Data,
  '008': page008Data,
  '009': page009Data,
  '010': page010Data,
  '011': page011Data,
  '012': page012Data,
  '013': page013Data,
  '014': page014Data,
  '015': page015Data,
  '016': page016Data,
  '017': page017Data,
  '018': page018Data,
  '019': page019Data,
  '020': page020Data,
  '021': page021Data,
  '022': page022Data,
  '023': page023Data,
  '024': page024Data,
};

export const pageOrder = [
  '000', '001', '002', '003', '004',
  '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017',
  '018', '019', '020', '021',
  '022', '023', '024',
];
