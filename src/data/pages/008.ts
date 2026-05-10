import type { PageData } from './types';

const page: PageData = {
    pageId: "008",
    title: { th: "ชื่อ สถานที่ตั้งสำนักงานใหญ่ ประเภทธุรกิจ เลขทะเบียนบริษัท และจำนวนหุ้น", en: "Name, Registered Office, Type of Business, Company Registration Number, and Number of Shares" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_008/008_p01_full_th.webp", en: "/page_008/008_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "ชื่อ สถานที่ตั้งสำนักงานใหญ่ประเภทธุรกิจ เลขทะเบียนบริษัท และจำนวนหุ้น", en: "Name, Headquarters Location, Type of Business, Registration Number, and Number of Shares" },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_008/008_p01_mobile_table_th.webp", en: "/page_008/008_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_note",
                    text: {
                        th: "¹ ที่ประชุมวิสามัญผู้ถือหุ้น ครั้งที่ 1/2569 วันที่ 29 มกราคม 2569 ได้อนุมัติการลดทุนจดทะเบียนของบริษัทฯ จากจำนวน 31,012,020,000.00 บาท เป็นจำนวน 30,477,317,000.00 บาทโดยการตัดหุ้นสามัญที่ยังมิได้นำออกจำหน่ายจำนวน 53,470,300 หุ้น มูลค่าที่ตราไว้หุ้นละ 10.00 บาท และดำเนินการลดทุนจดทะเบียนแล้วเสร็จเมื่อวันที่ 5 กุมภาพันธ์ 2569",
                        en: "¹ The Extraordinary General Meeting of Shareholders No. 1/2026, held on 29 January 2026, approved the reduction of the Company's registered capital from Baht 31,012,020,000 to Baht 30,477,317,000, by cancelling 53,470,300 unissued ordinary shares at par value of Baht 10 per share. BPP completed the registration of the reduction of its registered capital on 5 February 2026.",
                    },
                },
            ],
        },
    ],
    prevPage: "007",
    nextPage: "009",
};

export default page;
