import type { PageData } from './types';

const page: PageData = {
    pageId: "048",
    title: { th: "รายการระหว่างกัน", en: "Connected Transactions" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        // p01
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_048/048_p01_full_th.webp", en: "/page_048/048_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "รายการระหว่างกัน",
                        en: "Connected Transactions",
                    },
                    color: "#6cc0b3",
                    size: "lg",
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "บุคคลที่อาจมีความขัดแย้ง",
                        en: "Connected Persons",
                    },
                    color: "#264897",
                    size: "md",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_048/048_p01_mobile_table_th.webp", en: "/page_048/048_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
        // p02
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_048/048_p02_full_th.webp", en: "/page_048/048_p02_full_en.webp" },
            items: [
                {
                    type: "pdf_body_text",
                    text: {
                        th: "รายการระหว่างกิจการที่เกี่ยวข้องกันโดยมีลักษณะความสัมพันธ์ ดังนี้",
                        en: "Connected transactions and relationships are as follows:",
                    },
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_048/048_p02_mobile_table_th.webp", en: "/page_048/048_p02_mobile_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
        // p03
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_048/048_p03_full_th.webp", en: "/page_048/048_p03_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_048/048_p03_mobile_1_table_th.webp", en: "/page_048/048_p03_mobile_1_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_048/048_p03_mobile_2_table_th.webp", en: "/page_048/048_p03_mobile_2_table_en.webp" },
                    minWidth: 800,
                },
            ],
        },
        // p04
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_048/048_p04_full_th.webp", en: "/page_048/048_p04_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_048/048_p04_mobile_table_th.webp", en: "/page_048/048_p04_mobile_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "ความจำเป็นและความสมเหตุสมผลของรายการระหว่างกัน",
                        en: "Necessity and Justification of Connected Transactions",
                    },
                    color: "#264897",
                    size: "md",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ในกรณีที่บริษัทฯ เข้าทำสัญญาใด ๆ ก็ตาม หรือมีการทำรายการระหว่างกันกับบริษัทฯ บริษัทย่อย บริษัทร่วม บริษัทที่เกี่ยวข้อง และ/หรือ บุคคลภายนอก บริษัทฯ จะพิจารณาถึงความจำเป็นและความเหมาะสมในการเข้าทำสัญญานั้น ๆ โดยคำนึงถึงผลประโยชน์ของบริษัทฯ เป็นหลัก",
                        en: "In the event that the Company enters into any agreements or there are any transactions between the Company and its subsidiaries, associated companies, related companies, and/or third parties, the Company will consider the necessity and justification for entering into such transactions for the sake of the Company's interests.",
                    },
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "มาตรการหรือขั้นตอนการอนุมัติการทำรายการระหว่างกัน",
                        en: "Measures or Approval Procedure of Connected Transactions",
                    },
                    color: "#6cc0b3",
                    size: "sm",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ในกรณีที่บริษัทฯ เข้าทำสัญญาใด ๆ ก็ตาม หรือมีการทำรายการระหว่างกันกับบริษัทย่อย บริษัทร่วม บริษัทที่เกี่ยวข้อง บุคคลภายนอก และ/หรือ บุคคลที่อาจมีความขัดแย้ง เพื่อประโยชน์ของบริษัทฯ คณะกรรมการบริษัทกำหนดให้ต้องปฏิบัติตามนโยบายของบริษัทฯ โดยสอดคล้อง กับหลักเกณฑ์ของประกาศคณะกรรมการตลาดหลักทรัพย์แห่งประเทศไทย เรื่องการเปิดเผยข้อมูลและการปฏิบัติการของบริษัทจดทะเบียนในรายการที่เกี่ยวโยงกัน และให้มีราคาและเงื่อนไขเสมือนการทำรายการกับบุคคลภายนอก โดยกรรมการหรือพนักงานที่มีส่วนได้เสียในรายการนั้นจะต้องไม่มีส่วนในการพิจารณาอนุมัติ",
                        en: "In the event that the Company enters into any agreements or there are any transactions between the Company and its subsidiaries, associated companies, related companies, third parties and/or those who may have a conflict of interest, for the interests of the Company, the Board of Directors requires such transactions to comply with the Company's policy and regulations prescribed in the Notification of the Board of Governors of the Stock Exchange of Thailand, Re: Disclosure of Information and Other Acts of Listed Companies Concerning the Connected Transactions. The prices and conditions must be similar to those in transactions on an arms' length basis. Directors or employees who may have a conflict of interest must not participate in the approval of such transactions.",
                    },
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "นโยบายหรือแนวโน้มการทำรายการระหว่างกันในอนาคต",
                        en: "Policy or Tendency of Future Connected Transactions",
                    },
                    color: "#264897",
                    size: "md",
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "(1) รายการเงินกู้ยืมจาก บมจ. บ้านปู",
                        en: "(a) Loans from Banpu Public Company Limited",
                    },
                    color: "#000000",
                    size: "sm",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "บริษัทฯ ไม่มีรายการกู้ยืมเงินจาก บมจ. บ้านปู อย่างไรก็ตาม บริษัทฯ และบริษัทย่อยของบริษัทฯ มีรายการให้ความช่วยเหลือทางการเงิน กับบริษัทที่เกี่ยวโยงกัน ซึ่งบริษัทฯ และบริษัทย่อยได้คำนึงถึงความสมเหตุสมผล ความเหมาะสม และประโยชน์ของบริษัทฯ และบริษัทย่อยเป็นสำคัญ ซึ่งได้รับการพิจารณาจากคณะกรรมการตรวจสอบในการทำรายการดังกล่าว สอดคล้องตามหลักเกณฑ์และกฎหมายที่เกี่ยวข้องกับการทำรายการเกี่ยวโยงกัน ทั้งนี้ รายการดังกล่าวมีลักษณะเป็นรายการที่มีลักษณะเป็นธรรมและไม่ก่อให้เกิดการถ่ายเทผลประโยชน์ บริษัทฯ จึงได้รับการยกเว้นไม่ต้องปฏิบัติหน้าที่ตามประกาศคณะกรรมการตลาดหลักทรัพย์แห่งประเทศไทย เรื่อง การเปิดเผยข้อมูลและการปฏิบัติการของบริษัทจดทะเบียนในรายการที่เกี่ยวโยงกัน พ.ศ. 2546 ตามนัยข้อ 7(5)\n\nทั้งนี้ รายการระหว่างกันที่อาจเกิดขึ้นในอนาคตนั้น คณะกรรมการบริษัทจะยึดถือและปฏิบัติตามกฎหมายและกฎระเบียบและข้อบังคับของบริษัท รวมทั้งประกาศข้อกำหนดของหน่วยงานกำกับดูแลที่เกี่ยวข้องในเรื่องรายการระหว่างกันอย่างเคร่งครัด โดยคำนึงถึงความสมเหตุสมผลความเหมาะสมในเงื่อนไขทางการค้า และเป็นไปตามหลักการกำกับดูแลกิจการที่ดีของบริษัทฯ",
                        en: "The Company had no loan transactions from BANPU. However, the Company and its subsidiaries had loan transactions to connected parties, for which the Company and subsidiaries prioritized the reasonableness, appropriateness, and benefits of the Company and its subsidiaries. All transactions were reviewed by the Audit Committee and were found to be compliant with relevant laws and regulations to connected transactions. Such transactions were carried out on a fair basis and did not result in any transfer of benefits. Accordingly, the Company was exempted from compliance with the Notification of the Board of Governors of the Stock Exchange of Thailand Re: Disclosure of Information and Other Acts of Listed Companies Concerning the Connected Transactions B.E. 2546, pursuant to Clause 7(5).\n\nFor any future connected transactions, the Board of Directors will strictly abide by laws and regulations and comply with practices of regulatory bodies governing connected transactions by taking into account the reasonableness, appropriateness of trade conditions, adequacy, and compliance with the Company's principles of good corporate governance.",
                    },
                    paddingLeft: "2rem",
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "(2) ค่าบริหารจัดการและการใช้บริการหน่วยงานสนับสนุนจาก บมจ. บ้านปู",
                        en: "(b) Management fees and use of BANPU's support services",
                    },
                    color: "#000000",
                    size: "sm",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "เมื่อปี 2568 บริษัทฯ และบริษัทย่อย ได้ใช้บริการตามสัญญาจ้างบริหารกับ บมจ. บ้านปู โดยมีค่าใช้จ่ายเป็นจำนวนเงินรวม 127.77 ล้านบาทโดยได้จ่ายชำระค่าบริการเป็นรายเดือน ซึ่งครอบคลุมบริการด้านการให้คำปรึกษาและความช่วยเหลือด้านบัญชีและการเงิน การตรวจสอบภายใน กฎหมาย หน่วยงานสนับสนุนกลาง เทคโนโลยีและสารสนเทศ ทรัพยากรบุคคล และการบริหารจัดการทรัพย์สิน ทั้งนี้ เป็นการ ต่ออายุสัญญาจ้างบริหารกับ บมจ. บ้านปู เมื่อวันที่ 30 กันยายน 2568 มีระยะเวลาสัญญา 2 ปี เริ่มตั้งแต่วันที่ 1 ตุลาคม 2568 สิ้นสุดวันที่ 30 กันยายน 2570 สำหรับการต่ออายุสัญญาต้องแจ้งล่วงหน้าภายใน 30 วัน ก่อนวันที่สัญญาจะสิ้นสุดลง",
                        en: "In 2025, BPP and its subsidiaries entered into a management service agreement with BANPU with total annual service fees of THB 127.77 million, paid on a monthly basis. The agreement covers advisory services and assistance relating to accounting and finance, internal audit, legal affairs, general administrative support, information technology, human resources, and asset management. The Company renewed the management service agreement with BANPU on 30 September 2025 for two years, from 1 October 2025 to 30 September 2027. A renewal of the agreement shall be notified at least 30 days prior to the end date of the agreement.",
                    },
                    paddingLeft: "2rem",
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "(3) การรับจ้างบริหารงานให้แก่กิจการที่เกี่ยวข้องกัน",
                        en: "(c) Management services for related parties",
                    },
                    color: "#000000",
                    size: "sm",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "BIC ซึ่งเป็นบริษัทย่อยของบริษัทฯ ดำเนินธุรกิจในสาธารณรัฐประชาชนจีน มีบุคลากรที่มีความเชี่ยวชาญด้านบริหารจัดการเป็นผู้ให้บริการแก่ บมจ. บ้านปูและบริษัทย่อย โดยสัญญามีอายุ 1 ปี เป็นสัญญาบริการให้คำปรึกษา มีขอบเขตเกี่ยวกับการให้คำปรึกษา การบริหารจัดการ ในเรื่องการดำเนิน ธุรกิจการเงิน การบริหารความเสี่ยงและเทคโนโลยีและสารสนเทศ การฝึกอบรมผู้บริหาร การบริหารจัดการและการบริหารทรัพย์สิน เป็นต้น",
                        en: "BIC, a subsidiary of BPP, operating in China with competent personnel in management, provides advisory services to BANPU. and its subsidiaries under a one-year agreement. The agreement covers advisory services and management of business operations, finance, risk and IT management, management training, asset management, etc.",
                    },
                    paddingLeft: "2rem",
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "(4) เงินทดรองจ่าย/รับ กิจการที่เกี่ยวข้องกัน",
                        en: "(d) Advance payable/receivable for related parties",
                    },
                    color: "#000000",
                    size: "sm",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "เงินทดรองจ่าย/รับ กิจการที่เกี่ยวข้องกันเป็นค่าใช้จ่ายที่เป็นไปตามปกติธุรกิจที่จ่ายแทนกัน ได้แก่ ค่าสำรวจโครงการ ค่าเดินทาง ค่าธรรมเนียมและค่าใช้จ่ายเบ็ดเตล็ด เป็นต้น โดยเงินทดรองที่บริษัทฯ จ่ายให้บริษัทที่เกี่ยวข้องกันมีกำหนดระยะเวลาชำระเงินภายใน 30 วันนับจาก วันที่ในใบแจ้งหนี้ และเงินทดรองรับจากบริษัทที่เกี่ยวข้องกันมีกำหนดระยะเวลาการรับชำระเงินภายใน 30 วันนับจากวันที่ในใบแจ้งหนี้โดยจะจ่ายชำระในราคาที่ทดรองจ่ายแทนกันตามมูลค่าที่เกิดขึ้นจริง",
                        en: "Advances paid to and received from related parties are expenses paid for each other on normal operations, such as feasibility expenditures, travel expenses, fees, miscellaneous expenses, etc. Advances paid to a related party are due 30 days after the invoice date, and advances received from a related party are due 30 days after the invoice date. Advance payable/receivable are to be paid back based on the actual amount originally paid.",
                    },
                    paddingLeft: "2rem",
                },
            ],
        },
        // p05
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_048/048_p05_full_th.webp", en: "/page_048/048_p05_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_048/048_p05_mobile.webp", en: "/page_048/048_p05_mobile.webp" },
                },
            ],
        },
    ],
    prevPage: "047",
    nextPage: "049_cover",
};

export default page;
