import type { PageData } from './types';

const page: PageData = {
    pageId: "030",
    title: { th: "ข้อมูลทั่วไปและข้อมูลสำคัญอื่น ๆ", en: "General Information and Other Important Information" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_030/030_p01_full_th.webp", en: "/page_030/030_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "ข้อมูลทั่วไปและข้อมูลสำคัญอื่น ๆ",
                        en: "General Information and Other Important Information",
                    },
                    color: "#264897",
                    size: "lg",
                },
                {
                    type: "pdf_sub_title",
                    text: {
                        th: "บุคคลอ้างอิงอื่น ๆ",
                        en: "Other References",
                    },
                    color: "#6cc0b3",
                    size: "md",
                },
                {
                    type: "pdf_numbered_list",
                    labelColor: "#264897",
                    items: [
                        {
                            label: {
                                th: "นายทะเบียนหุ้นสามัญ",
                                en: "Ordinary Share Registrar",
                            },
                            description: {
                                th: "\nบริษัท ศูนย์รับฝากหลักทรัพย์ (ประเทศไทย) จำกัด\nชั้น 1 ตลาดหลักทรัพย์แห่งประเทศไทย\nเลขที่ 93 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง\nกรุงเทพมหานคร 10400\nโทรศัพท์ / ศูนย์บริการข้อมูล +66 (0) 2009 9999",
                                en: "\nThailand Securities Depository Company Limited\n1st Floor, The Stock Exchange of Thailand Building\n93 Ratchadapisek Road, Din Daeng, Din Daeng,\nBangkok 10400\nTel./Contact Center +66 2009 9999",
                            },
                        },
                        {
                            label: {
                                th: "นายทะเบียนหุ้นกู้",
                                en: "Debenture Registrar",
                            },
                            description: {
                                th: "\nธนาคาร กรุงเทพ จำกัด (มหาชน)\n333 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500\nโทรศัพท์ +66 (0) 2230 2895",
                                en: "\nBangkok Bank Public Company Limited\n333 Silom Road, Silom, Bangrak, Bangkok 10500\nTel. +66 2230 2895",
                            },
                        },
                        {
                            label: {
                                th: "ผู้แทนผู้ถือหุ้นกู้",
                                en: "Debenture Holders’ Representative",
                            },
                            description: {
                                th: "\nธนาคาร กรุงเทพ จำกัด (มหาชน)\n333 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500\nโทรศัพท์ +66 (0) 2230 2895",
                                en: "\nBangkok Bank Public Company Limited\n333 Silom Road, Silom, Bangrak, Bangkok 10500\nTel. +66 2230 2895",
                            },
                        },
                        {
                            label: {
                                th: "ผู้สอบบัญชี",
                                en: "Auditor",
                            },
                            description: {
                                th: "\nนางสาวอมรรัตน์ เพิ่มพูนวัฒนาสุข\nผู้สอบบัญชีรับอนุญาต เลขที่ 4599\nบริษัท ไพร้ซวอเตอร์เฮาส์คูเปอร์ส เอบีเอเอส จำกัด\nชั้น 15 อาคารบางกอกซิตี้ ทาวเวอร์\nเลขที่ 179/74-80 ถนนสาทรใต้ แขวงทุ่งมหาเมฆ เขตสาทร\nกรุงเทพมหานคร 10120\nโทรศัพท์ +66 (0) 2844 1000",
                                en: "\nMs. Amornrat Pearmpoonvatanasuk\nAuthorized Auditor No. 4599\nPricewaterhouseCoopers ABAS Ltd.\n15th Floor, Bangkok City Tower\n179/74-80 South Sathorn Road, Thung Maha Mek, Sathorn,\nBangkok 10120\nTel. +66 2844 1000",
                            },
                        },
                        {
                            label: {
                                th: "ที่ปรึกษาทางการเงิน",
                                en: "Financial Advisor",
                            },
                            description: {
                                th: "\n-ไม่มี-",
                                en: "\n-None-",
                            },
                        },
                        {
                            label: {
                                th: "ที่ปรึกษาหรือผู้จัดการภายใต้สัญญาการจัดการ",
                                en: "Advisor or Manager under Management Agreement",
                            },
                            description: {
                                th: "\nบริษัทฯ ไม่ได้ว่าจ้างที่ปรึกษา และ/หรือผู้จัดการ ภายใต้สัญญาการจัดการเป็นการประจำถาวร แต่จะมีการว่าจ้างที่ปรึกษา (เช่น ที่ปรึกษาทางการเงิน) เป็นการเฉพาะเรื่องเฉพาะกรณี ตามความจำเป็นในการดำเนินงานเป็นครั้งคราว การบริหารงาน บริษัทฯ จะดำเนินการภายใต้การกำกับดูแลของคณะกรรมการบริษัทเป็นสำคัญ",
                                en: "\nThe Company did not hire advisors and/or managers under any permanent management agreement. Advisors, including financial advisors, were hired on a case-by-case basis as necessary to support its operations from time to time. The Company’s management is mainly supervised by the Board of Directors.",
                            },
                        },
                        {
                            label: {
                                th: "สถาบันการเงินที่ติดต่อเป็นประจำ",
                                en: "Financial Institutions Regularly in Contact",
                            },
                            description: {
                                th: "\nธนาคารพาณิชย์และสถาบันการเงินทั้งในและต่างประเทศประมาณ 30 แห่ง",
                                en: "\nThe Company is regularly in contact with around 30 local and international commercial banks and financial institutions.",
                            },
                        },
                        {
                            label: {
                                th: "การออกหลักทรัพย์อื่น",
                                en: "Issuance of Other Securities",
                            },
                            description: {
                                th: "\n- ไม่มี -",
                                en: "\n-None-",
                            },
                        },
                    ],
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_030/030_p01_mobile_th.webp", en: "/page_030/030_p01_mobile_en.webp" },
                },
            ],
        },
    ],
    prevPage: "029",
    nextPage: "031",
};

export default page;
