import { PageData } from "../pages";

export const page000Data: PageData = {
    pageId: "000",
    title: { th: "บทนำ", en: "Introduction" },
    accentColor: "#6cc0b3",
    backgroundColor: "#f0f8ff",
    layout: "pdf_composition",
    sections: [
        {
            type: "pdf_page",
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p01_full_th.webp",
                        en: "/page_intro/intro_p01_full_en.webp",
                    },
                    mobileSrcs: [
                        {
                            th: "/page_intro/intro_p01_mobile_th.webp",
                            en: "/page_intro/intro_p01_mobile_en.webp",
                        },
                    ],
                },
            ],
        },
        {
            type: "pdf_page",
            items: [
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p02_full_th.webp",
                        en: "/page_intro/intro_p02_full_en.webp",
                    },
                    visibility: "desktop-only",
                },
                {
                    type: "pdf_banner",
                    src: {
                        th: "/page_intro/intro_p02_mobile_head_th.webp",
                        en: "/page_intro/intro_p02_mobile_head_en.webp",
                    },
                    visibility: "mobile-only",
                },
                {
                    type: "pdf_html",
                    visibility: "mobile-only",
                    content: {
                        th: `
              <div class="px-4 py-6 space-y-6 font-noto bg-white">
                <div class="text-banpu-cyan text-xl font-bold">
                  "Empowering Tomorrow"
                </div>
                <div class="text-gray-700 text-sm leading-relaxed space-y-4">
                  <p>นอกเหนือจากการบุกเบิกและพัฒนาด้านผลิตพลังงาน BPP ยังให้ความสำคัญกับการยกระดับคุณภาพชีวิตของผู้คน และสร้างผลกระทบเชิงบวกอย่างยั่งยืนต่อสังคมและสิ่งแวดล้อมในระยะยาว ดำเนินธุรกิจอย่างมีความรับผิดชอบ และมีส่วนร่วมในการพัฒนาชุมชนในประเทศที่ดำเนินธุรกิจอย่างต่อเนื่อง ทั้งด้านการศึกษา การดูแลสุขภาพ และกิจกรรมที่เป็นประโยชน์อื่น ๆ เพื่อให้การเติบโตของ BPP เกิดประโยชน์ต่อทุกภาคส่วนอย่างแท้จริง</p>
                  <p>ทั้งนี้ ที่ประชุมวิสามัญผู้ถือหุ้น ครั้งที่ 1/2569 ซึ่งจัดขึ้นเมื่อวันที่ 29 มกราคม 2569 ได้มีมติอนุมัติการควบบริษัทระหว่าง BPP และบริษัท บ้านปู จำกัด (มหาชน) หรือ BANPU เพื่อจัดตั้งบริษัทใหม่ และเตรียมนำเข้าจดทะเบียนในตลาดหลักทรัพย์แห่งประเทศไทยภายในไตรมาส 3/2569</p>
                </div>
              </div>
              <div class="px-4 py-8 bg-[#eaf6fb] space-y-4">
                <div class="text-gray-800 text-sm leading-relaxed">
                  การเปลี่ยนผ่านเชิงกลยุทธ์ครั้งนี้จะยกระดับบทบาทของ BPP สู่ผู้นำด้าน <strong class="">'Utility-scale Power and Integrated Businesses'</strong> ภายใต้ <strong class="">'Power+'</strong> (ไฟฟ้าและธุรกิจที่เกี่ยวเนื่อง) หนึ่งในกลุ่มธุรกิจหลักของกลุ่มบ้านปู ดำเนินธุรกิจไฟฟ้าเต็มรูปแบบ (Power Pure-play Platform) ครอบคลุมห่วงโซ่คุณค่าธุรกิจพลังงาน (Energy Value Chain) เพื่อเสริมสร้างศักยภาพการแข่งขัน และขับเคลื่อนการเติบโตทางธุรกิจ (Growth Engine) ของกลุ่มบ้านปูในระยะยาว
                </div>
              </div>
              <div class="px-4 py-8 bg-white space-y-6">
                <div class="text-gray-800 text-sm leading-relaxed">
                  การปรับโครงสร้างสู่กลุ่มธุรกิจ <strong class="">'Power+'</strong> จะผสานสินทรัพย์โรงไฟฟ้าพลังงานพื้นฐาน (Base Load Power Plant) ในภูมิภาคเอเชียแปซิฟิกและสหรัฐอเมริกา ครอบคลุมทั้ง
                </div>

                <div class="space-y-4">
                  <img src="/page_intro/intro_p02_mobile_icon_1_th.webp" class="w-full h-auto object-contain" />
                  <img src="/page_intro/intro_p02_mobile_icon_2_th.webp" class="w-full h-auto object-contain" />
                </div>
              </div>
            `,
                        en: `
              <div class="px-4 py-6 space-y-6 font-noto bg-white">
                <div class="text-banpu-cyan text-xl font-bold uppercase">
                  "Empowering Tomorrow"
                </div>
                <div class="text-gray-700 text-sm leading-relaxed space-y-4">
                  <p>Beyond pioneering and developing power generation, BPP prioritizes enhancing quality of life and creating long-term positive impacts on society and the environment. We conduct business responsibly and continuously participate in community development in countries where we operate, focusing on education, healthcare, and other beneficial activities, ensuring BPP's growth truly benefits all stakeholders.</p>
                  <p>On January 29, 2026, the Extraordinary General Meeting of Shareholders No. 1/2026 approved the merger between BPP and Banpu Public Company Limited (BANPU) to establish a new company, with registration on the Stock Exchange of Thailand expected within Q3/2026.</p>
                </div>
              </div>
              <div class="px-4 py-8 bg-[#eaf6fb] space-y-4">
                <div class="text-gray-800 text-sm leading-relaxed">
                  This strategic transition will elevate BPP's role to a leader in <strong class="">'Utility-scale Power and Integrated Businesses'</strong> under <strong class="">'Power+'</strong> (Power and related businesses), one of Banpu Group's core business units. As a Power Pure-play Platform covering the Energy Value Chain, we aim to enhance competitiveness and drive long-term business growth for Banpu Group.
                </div>
              </div>
              <div class="px-4 py-8 bg-white space-y-6">
                <div class="text-gray-800 text-sm leading-relaxed">
                  The restructuring into the <strong class="">'Power+'</strong> business group will integrate base load power plant assets in the Asia-Pacific region and the U.S., encompassing:
                </div>

                <div class="space-y-4">
                  <img src="/page_intro/intro_p02_mobile_icon_1_en.webp" class="w-full h-auto object-contain" />
                  <img src="/page_intro/intro_p02_mobile_icon_2_en.webp" class="w-full h-auto object-contain" />
                </div>
              </div>
            `,
                    },
                },
            ],
        },
    ],
    nextPage: "001",
};
