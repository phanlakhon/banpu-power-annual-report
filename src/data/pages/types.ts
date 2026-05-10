export type BilingualText = { th: string; en: string };
export type BilingualSrc = string | { th: string; en: string };

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
    | { type: 'image'; src: BilingualSrc; alt?: string; caption?: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_banner'; src: BilingualSrc; mobileSrcs?: BilingualSrc[]; alt?: string; minWidth?: number; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_row'; items: Array<{ src: BilingualSrc; alt?: string; colSpan?: number }>; withGap?: boolean; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_page'; items: PageSection[]; backgroundColor?: string; noPadding?: boolean; noMinHeight?: boolean; pageNumber?: string; pageNumberAlign?: 'left' | 'right'; pageNumberColor?: string; desktopFullImage?: BilingualSrc; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_note'; text: BilingualText; hidePrefix?: boolean; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_header'; text: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_title'; text: BilingualText; large?: boolean; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_sub_title'; text: BilingualText; color?: string; size?: 'lg' | 'md' | 'sm'; weight?: 'bold' | 'semibold' | 'medium'; textAlign?: 'center'; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_gradient_text'; text: BilingualText; boldPhrase?: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_gradient_divider'; thin?: boolean; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_body_text'; text: BilingualText; paddingLeft?: string; colorPhrase?: BilingualText; boldPhrase?: BilingualText; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_list'; items: Array<BilingualText | { label: BilingualText; description: BilingualText }>; paddingLeft?: string; color?: string; labelColor?: string; itemSeparator?: string; visibility?: 'desktop-only' | 'mobile-only' }
    | { type: 'pdf_numbered_list'; items: Array<{ label: BilingualText; description: BilingualText; subItems?: BilingualText[] }>; paddingLeft?: string; startFrom?: number; visibility?: 'desktop-only' | 'mobile-only' }
    | {
          type: 'pdf_quote_block';
          text: BilingualText;
          signatureSrc: BilingualSrc;
          signatureName: BilingualText;
          signaturePosition: BilingualText;
          visibility?: 'desktop-only' | 'mobile-only';
      }
    | { type: 'pdf_text_columns'; columns: BilingualText[]; fontFamily?: string; visibility?: 'desktop-only' | 'mobile-only' }
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
