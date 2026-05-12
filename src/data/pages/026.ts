import type { PageData } from './types';

const page: PageData = {
    pageId: "026",
    title: { th: "รางวัลแห่งความสำเร็จ", en: "Achievement Awards" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_026/026_p01_full_th.webp", en: "/page_026/026_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_banner",
                    src: { th: "/page_026/026_p01_mobile_th.webp", en: "/page_026/026_p01_mobile_en.webp" },
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "BPP โอบรับการเปลี่ยนแปลงในช่วงการเปลี่ยนผ่านด้านพลังงาน มุ่งมั่นที่จะขยายการเติบโตอย่างยั่งยืนด้วยกลยุทธ์ Pioneering Energy, Empowering Tomorrow ส่งมอบพลังงานที่ใช้ในการขับเคลื่อนเศรษฐกิจและสังคม โดยใช้เทคโนโลยีการผลิตไฟฟ้าที่มีประสิทธิภาพสูง เป็นมิตรต่อสิ่งแวดล้อมและสร้างความมั่นคงทางพลังงานให้แก่สังคม รวมถึงมองหาโอกาสในการลงทุนในธุรกิจใหม่นอกเหนือไปจากการผลิตไฟฟ้า เช่น การลงทุนในระบบกักเก็บพลังงานด้วยแบตเตอรี่ (Battery Energy Storage System: BESS) เชื้อเพลิงชีวมวล ธุรกิจค้าปลีกไฟฟ้า ธุรกิจซื้อขายไฟฟ้าผ่านแพลตฟอร์ม เทคโนโลยีการดักจับและกักเก็บคาร์บอน (Carbon Capture, Utilization and Storage: CCUS) เป็นต้น เพื่อตอบสนองต่อการเปลี่ยนผ่านด้านพลังงานและการเปลี่ยนแปลงสภาพภูมิอากาศอย่างสมดุล",
                        en: "BPP embraces change amid the energy transition and remains committed to expanding sustainable growth under its “Pioneering Energy, Empowering Tomorrow” strategy. The Company delivers energy that drives economic and social development through high-efficiency, environmentally friendly power generation technologies, while strengthening energy security for society. In addition, BPP actively explores investment opportunities beyond conventional power generation, including Battery Energy Storage Systems (BESS), biomass fuel, electricity retail business, electricity trading platforms, and Carbon Capture, Utilization and Storage (CCUS), to support a balanced energy transition and address climate change.",
                    },
                },
            ],
        },
    ],
    prevPage: "025",
    nextPage: "027",
};

export default page;
