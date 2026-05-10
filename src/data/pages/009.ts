import type { PageData } from './types';

const page: PageData = {
    pageId: "009",
    title: { th: "โครงสร้างรายได้", en: "Revenue Structure" },
    accentColor: "#264897",
    backgroundColor: "#f0f8ff",
    layout: "pdf_single_full",
    sections: [
        {
            type: "pdf_page",
            desktopFullImage: { th: "/page_009/009_p01_full_th.webp", en: "/page_009/009_p01_full_en.webp" },
            items: [
                {
                    type: "pdf_sub_title",
                    text: { th: "โครงสร้างรายได้", en: "Revenue Structure" },
                    color: "#264897",
                    size: "lg",
                    weight: "bold",
                },
                {
                    type: "pdf_body_text",
                    text: {
                        th: "ในระยะ 3 ปีที่ผ่านมา สำหรับปีสิ้นสุดวันที่ 31 ธันวาคม",
                        en: "For the previous three years ended 31 December",
                    },
                },
                {
                    type: "pdf_sub_title",
                    text: { th: "บริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน) และบริษัทย่อย", en: "Banpu Power Public Company Limited and Its Subsidiaries" },
                    color: "#6cc0b3",
                    size: "md",
                    weight: "medium",
                },
                {
                    type: "pdf_banner",
                    src: { th: "/page_009/009_p01_mobile_table_th.webp", en: "/page_009/009_p01_mobile_table_en.webp" },
                    minWidth: 800,
                },
                {
                    type: "pdf_note",
                    text: {
                        th: "¹ รายได้จากการขายอื่นของบริษัทฯ ส่วนใหญ่เป็นรายได้จากการขายน้ำร้อนและน้ำเย็น\n² บริษัทฯ มิได้รับรู้รายได้สำหรับโรงไฟฟ้าที่บริษัทฯ มีสัดส่วนการถือหุ้นทีน้อยกว่าหรือเท่ากับร้อยละ 50 ในรายได้รวมของบริษัทฯ แต่รับรู้เป็นส่วนแบ่งกำไร (ขาดทุน) จากเงินลงทุนในบริษัทร่วมตามวิธีส่วนได้เสีย อันได้แก่ โรงไฟฟ้าบีแอลซีพี โรงไฟฟ้าเอชพีซี โรงไฟฟ้าซานซีลู่กวง และธุรกิจพลังงานหมุนเวียนและเทคโนโลยีพลังงานภายใต้บริษัท บ้านปู เน็กซ์ จำกัด",
                        en: "¹ Other revenues primarily comprise revenue from hot water and cold water.\n² The Company does not recognize revenues from the power plants in which its shareholding is less than or equal to 50% in its consolidated revenue, but report as Share of profit (loss) of an associate and joint ventures (Equity Method), namely BLCP Power Plant, HPC Power Plant, Shanxi Lu Guang Power Plant and Banpu NEXT Co., Ltd.",
                    },
                },
            ],
        },
    ],
    prevPage: "008",
    nextPage: "010",
};

export default page;
