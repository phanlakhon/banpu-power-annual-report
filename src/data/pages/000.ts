import type { PageData } from './types';

const page: PageData = {
    pageId: "000",
    title: { th: "บทนำ", en: "Introduction" },
    accentColor: "#6cc0b3",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_intro/intro_p01_full_th.webp",
                en: "/page_intro/intro_p01_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p01_mobile_th.webp",
                        en: "/page_intro/intro_p01_mobile_en.webp",
                    },
                },
            ],
        },
        {
            type: "pdf_page",
            desktopFullImage: {
                th: "/page_intro/intro_p02_full_th.webp",
                en: "/page_intro/intro_p02_full_en.webp",
            },
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p02_mobile_head_th.webp",
                        en: "/page_intro/intro_p02_mobile_head_en.webp",
                    },
                },
                {
                    type: "pdf_sub_title",
                    text: { th: '"Empowering Tomorrow"', en: '"Empowering Tomorrow"' },
                    color: "#6cc0b3",
                    size: "md",
                    weight: "bold",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "นอกเหนือจากการบุกเบิกและพัฒนาด้านผลิตพลังงาน BPP ยังให้ความสำคัญกับการยกระดับคุณภาพชีวิตของผู้คน และสร้างผลกระทบเชิงบวกอย่างยั่งยืนต่อสังคมและสิ่งแวดล้อมในระยะยาว ดำเนินธุรกิจอย่างมีความรับผิดชอบ และมีส่วนร่วมในการพัฒนาชุมชนในประเทศที่ดำเนินธุรกิจอย่างต่อเนื่อง ทั้งด้านการศึกษา การดูแลสุขภาพ และกิจกรรมที่เป็นประโยชน์อื่น ๆ เพื่อให้การเติบโตของ BPP เกิดประโยชน์ต่อทุกภาคส่วนอย่างแท้จริง\n\nทั้งนี้ ที่ประชุมวิสามัญผู้ถือหุ้น ครั้งที่ 1/2569 ซึ่งจัดขึ้นเมื่อวันที่ 29 มกราคม 2569 ได้มีมติอนุมัติการควบบริษัทระหว่าง BPP และบริษัท บ้านปู จำกัด (มหาชน) หรือ BANPU เพื่อจัดตั้งบริษัทใหม่ และเตรียมนำเข้าจดทะเบียนในตลาดหลักทรัพย์แห่งประเทศไทยภายในไตรมาส 3/2569",
                        en: "Beyond pioneering and developing power generation, BPP prioritizes enhancing quality of life and creating long-term positive impacts on society and the environment. We conduct business responsibly and continuously participate in community development in countries where we operate, focusing on education, healthcare, and other beneficial activities, ensuring BPP's growth truly benefits all stakeholders.\n\nOn January 29, 2026, the Extraordinary General Meeting of Shareholders No. 1/2026 approved the merger between BPP and Banpu Public Company Limited (BANPU) to establish a new company, with registration on the Stock Exchange of Thailand expected within Q3/2026.",
                    },
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "การเปลี่ยนผ่านเชิงกลยุทธ์ครั้งนี้จะยกระดับบทบาทของ BPP สู่ผู้นำด้าน 'Utility-scale Power and Integrated Businesses' ภายใต้ 'Power+' (ไฟฟ้าและธุรกิจที่เกี่ยวเนื่อง) หนึ่งในกลุ่มธุรกิจหลักของกลุ่มบ้านปู ดำเนินธุรกิจไฟฟ้าเต็มรูปแบบ (Power Pure-play Platform) ครอบคลุมห่วงโซ่คุณค่าธุรกิจพลังงาน (Energy Value Chain) เพื่อเสริมสร้างศักยภาพการแข่งขัน และขับเคลื่อนการเติบโตทางธุรกิจ (Growth Engine) ของกลุ่มบ้านปูในระยะยาว",
                        en: "This strategic transition will elevate BPP's role to a leader in 'Utility-scale Power and Integrated Businesses' under 'Power+' (Power and related businesses), one of Banpu Group's core business units. As a Power Pure-play Platform covering the Energy Value Chain, we aim to enhance competitiveness and drive long-term business growth for Banpu Group.",
                    },
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "การปรับโครงสร้างสู่กลุ่มธุรกิจ 'Power+' จะผสานสินทรัพย์โรงไฟฟ้าพลังงานพื้นฐาน (Base Load Power Plant) ในภูมิภาคเอเชียแปซิฟิกและสหรัฐอเมริกา ครอบคลุมทั้ง",
                        en: "The restructuring into the 'Power+' business group will integrate base load power plant assets in the Asia-Pacific region and the U.S., encompassing:",
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p02_mobile_icon_1_th.webp",
                        en: "/page_intro/intro_p02_mobile_icon_1_en.webp",
                    },
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p02_mobile_icon_2_th.webp",
                        en: "/page_intro/intro_p02_mobile_icon_2_en.webp",
                    },
                },
            ],
        },
    ],
    nextPage: "001",
};

export default page;
