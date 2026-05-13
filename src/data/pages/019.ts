import type { PageData } from './types';

const page: PageData = {
    pageId: "019",
    title: { th: "นโยบายการจ่ายเงินปันผล", en: "Dividend Policy" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_019/019_p01_full_th.webp", en: "/page_019/019_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "นโยบายการจ่ายเงินปันผล", en: "Dividend Policy" },
                    color: "#264897",
                    size: "lg",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "บริษัทฯ มีนโยบายที่จะจ่ายเงินปันผลประมาณร้อยละ 50 ของกำไรสุทธิของงบการเงินรวม หลังหักเงินสำรองต่าง ๆ ทุกประเภทตามที่กฎหมายและบริษัทฯ ได้กำหนดไว้ อย่างไรก็ตาม อัตราการจ่ายเงินปันผลดังกล่าวจะขึ้นอยู่กับกระแสเงินสดและภาระการลงทุนของบริษัทฯ และบริษัทในเครือ รวมถึงข้อกำหนดทางกฎหมายและความจำเป็นอื่น ๆ",
                        en: "The Company has a policy to pay dividends at the rate of approximately 50% of net profit on the consolidated financial statements after deduction of any legal and corporate reserves. However, the dividend payout ratio will be dependent on cash flows, future investments of the Company and its affiliates as well as legal requirements and other requirements.",
                    },
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ใน 5 ปีที่ผ่านมา บริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน) มีการจ่ายเงินปันผลตามรายละเอียดดังต่อไปนี้",
                        en: "In the past five years, Banpu Power Public Company Limited has paid out dividends as detailed below.",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_019/019_p01_mobile_table_th.webp", en: "/page_019/019_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_note",
                    hidePrefix: true,
                    text: {
                        th: "* บริษัทฯ กำหนดการจ่ายเงินปันผลสำหรับผลการดำเนินงานประจำปี 2568 งวดวันที่ 1 มกราคม 2568 ถึงวันที่ 31ธันวาคม 2568 ในอัตราหุ้นละ 0.60 บาท ซึ่งได้จ่ายเงินปันผลระหว่างกาลไปแล้วหุ้นละ 0.25 บาท เมื่อวันที่ 23 กันยายน 2568 คงเหลือจ่ายเงินปันผลสำหรับงวดที่เหลืออีกหุ้นละ 0.35 บาท ทั้งนี้ บริษัทฯ กำหนดจ่ายเงินปันผลในวันที่ 28 เมษายน 2569",
                        en: "* The Company announced a total dividend of THB 0.60 per share with respect to the operating results for the period from 1 January 2025 to 31 December 2025, of which THB 0.25 was paid on 23 September 2025. The remaining dividend of THB 0.35 per share will be paid on 28 April 2026.",
                    },
                },
            ],
        },
    ],
    prevPage: "018",
    nextPage: "020",
};

export default page;
