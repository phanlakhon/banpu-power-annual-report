import type { PageData } from './types';

const page: PageData = {
    pageId: "038",
    title: { th: "ข้อมูลเกี่ยวกับผู้บริหาร", en: "Details of the Management" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_038/038_p01_full_th.webp", en: "/page_038/038_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "ข้อมูลเกี่ยวกับผู้บริหาร",
                        en: "Details of the Management",
                    },
                    color: "#6cc0b3",
                    size: "lg",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ผู้บริหาร ณ วันที่ 31 ธันวาคม 2568 ประกอบด้วย",
                        en: "As of 31 December 2025, the management consists of:",
                    },
                    boldPhrase: { th: "ผู้บริหาร", en: "the management" },
                    colorPhrase: { th: "ผู้บริหาร", en: "the management" },
                },
                {
                    type: "pdf_numbered_list",
                    items: [
                        { label: { th: "", en: "" }, description: { th: " นายอิศรา นิโรภาส \n(ประธานเจ้าหน้าที่บริหาร)", en: "Mr. Issara Niropas \n(Chief Executive Officer)" } },
                        { label: { th: "", en: "" }, description: { th: "นายธีรภัทร์ วงศ์ระวีกุล \n(ประธานเจ้าหน้าที่บริหาร - การเงิน)", en: "Mr. Teerapat Wongraveekul \n(Chief Financial Officer)" } },
                        { label: { th: "", en: "" }, description: { th: "นายปิลันธน์ พจนารถ \n(ผู้อำนวยการสายอาวุโส - สายงานธุรกิจไฟฟ้าสาธารณรัฐประชาชนจีน)", en: "Mr. Pilun Pochanart \n(Senior Vice President - Power Business China)" } },
                        { label: { th: "", en: "" }, description: { th: "ดร.พรประนด ดิษยบุตร์ \n(ผู้อำนวยการสายอาวุโส - สายงานธุรกิจไฟฟ้าสหรัฐอเมริกา)", en: "Dr. Paul Didsayabutra \n(Senior Vice President - Power Business USA)" } },
                        { label: { th: "", en: "" }, description: { th: "นายภานุวัฒน์ พิทักษ์ธีระธรรม \n(ผู้อำนวยการสาย - สายงานปฏิบัติการธุรกิจไฟฟ้า)", en: "Mr. Panuwat Pitakteeratham \n(Vice President - Power Business)" } },
                    ],
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "การจ่ายค่าตอบแทนผู้บริหาร",
                        en: "Remuneration of the Management",
                    },
                    color: "#264897",
                    size: "md",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ค่าตอบแทนที่เป็นตัวเงินของผู้บริหารของบริษัทฯ ในรูปของเงินเดือนและโบนัส ซึ่งเชื่อมโยงกับผลการดำเนินการของบริษัทฯ ตามระบบ Key Performance Indicators และผลงานของแต่ละบุคคล",
                        en: "Cash remuneration of the Company's executives in the form of salary and bonus is rewarded based on performance against the pre-determined key performance indicators and individual achievement.",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_038/038_p01_mobile_1_table_th.webp", en: "/page_038/038_p01_mobile_1_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "ค่าตอบแทนอื่น ๆ",
                        en: "Other Remunerations",
                    },
                    color: "#6cc0b3",
                    size: "sm",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "เงินสมทบกองทุนสำรองเลี้ยงชีพ\n\nบริษัทฯ ได้สมทบเงินเข้ากองทุนสำรองเลี้ยงชีพให้แก่ผู้บริหารของบริษัทฯ ดังนี้",
                        en: "Contribution to Provident Fund\n\nDetails of the Company's contribution to the provident fund for executives are as follows:",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_038/038_p01_mobile_2_table_th.webp", en: "/page_038/038_p01_mobile_2_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "การรายงานการมีส่วนได้เสียของกรรมการและผู้บริหาร",
                        en: "Shareholdings of the Board of Directors and Management",
                    },
                    color: "#264897",
                    size: "md",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "เพื่อให้เป็นไปตามมาตรา 89/1/4 แห่งพระราชบัญญัติหลักทรัพย์และตลาดหลักทรัพย์ (ฉบับ 4) พ.ศ. 2551 และประกาศคณะกรรมการกำกับตลาดทุนที่ ทจ.2/2552 เรื่องการรายงานการมีส่วนได้เสียของกรรมการ ผู้บริหาร และบุคคลที่เกี่ยวข้อง ซึ่งคณะกรรมการบริษัทจะรายงานการถือครองหลักทรัพย์ บริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน) ของตนเอง คู่สมรส และบุตรที่ยังไม่บรรลุนิติภาวะ ต่อที่ประชุมคณะกรรมการบริษัททุกเดือน สำหรับการถือครองหุ้นของคณะกรรมการบริษัทและผู้บริหาร ณ วันที่ 31 ธันวาคม 2568 มีรายละเอียดดังต่อไปนี้",
                        en: "In compliance with Section 89/1/4 of the Securities and Exchange Act (No. 4) B.E. 2551 and Capital Market Supervisory Board Notice No. TorJor.2/2552 RE: Report on Interest of Directors, Executives, and Related Persons, the Board of Directors will report their shareholdings in Banpu Power Public Company Limited held by themselves, their spouses and minor children to the Board of Directors' meeting on a monthly basis. As of 31 December 2025, the shareholdings of the Board of Directors and the management are as follows:",
                    },
                },
            ],
        },
        // p02
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_038/038_p02_full_th.webp", en: "/page_038/038_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_038/038_p02_mobile_table_th.webp", en: "/page_038/038_p02_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
    ],
    prevPage: "037",
    nextPage: "039",
};

export default page;
