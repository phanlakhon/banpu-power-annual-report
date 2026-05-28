import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    const isEn = locale === "en";

    return (
        <div className="relative w-full bg-white min-h-screen flex items-center overflow-hidden">
            <img
                src="/homepage-bg.webp?v=2"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-white/10 z-0" />

            {/* Main content */}
            <div
                className="relative z-10 w-full max-w-7xl mx-auto
                   px-6 sm:px-10 md:px-10
                   py-12 md:py-14
                   flex flex-col lg:flex-row items-center
                   gap-10 md:gap-12 lg:gap-20"
            >
                {/* ── Left: Logo + Text + Buttons ── */}
                <div className="w-full min-w-1/2 md:flex-1 flex flex-col gap-4 md:gap-6 lg:gap-10">
                    {/* Logo */}
                    <div className="mb-1">
                        <img
                            src="/logo.webp?v=2"
                            alt="BANPU"
                            className="h-10 sm:h-12 md:h-18 w-auto"
                        />
                    </div>

                    {/* Headings */}
                    <div className="space-y-2">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight text-[#264997]">
                            {isEn ? "Pioneering Energy" : "บุกเบิกนวัตกรรมพลังงาน"}
                        </h1>
                        <h2 className="text-base md:text-xl lg:text-2xl font-normal tracking-tight text-[#6bbfb3]">
                            {isEn ? "Empowering Tomorrow" : "เพื่ออนาคตที่ยั่งยืน"}
                        </h2>
                        <div className="pt-2 space-y-1">
                            <p className="text-xs md:text-sm font-normal leading-snug text-[#6bbfb3]">
                                {isEn
                                    ? "Annual Report 2025 (Form 56-1 One Report)"
                                    : "รายงานประจำปี 2568 (แบบ 56-1 One Report)"}
                            </p>
                            <p className="text-xs md:text-sm font-normal leading-snug text-black">
                                {isEn
                                    ? "Banpu Power Public Company Limited"
                                    : "บริษัท บ้านปู เพาเวอร์ จำกัด (มหาชน)"}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    {/* <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-2xl">
                        {isEn
                            ? "Pioneering Energy for a Sustainable Future"
                            : "บุกเบิกนวัตกรรมพลังงาน เพื่ออนาคตที่ยั่งยืน"}
                    </p> */}

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        <Link
                            href={`/${locale}/pages/000`}
                            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm text-white shadow-md hover:opacity-90 transition-opacity"
                            style={{ background: "#264997" }}
                        >
                            {isEn ? "View Online" : "ดูออนไลน์"}
                            <span className="w-5 h-5 rounded-full border-2 border-white/50 flex items-center justify-center">
                                <ExternalLink size={9} />
                            </span>
                        </Link>
                        {/* <Link
                            href={`/${locale}/pages/001`}
                            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm text-white shadow-md hover:opacity-90 transition-opacity"
                            style={{ background: "#6bbfb3" }}
                        >
                            {isEn ? "Financial Highlights" : "จุดเด่นในรอบปี"}
                            <span className="w-5 h-5 rounded-full border-2 border-white/50 flex items-center justify-center">
                                <ExternalLink size={9} />
                            </span>
                        </Link> */}
                    </div>
                </div>

                {/* ── Right: Annual Report Cover ── */}
                <div className="shrink-0 flex items-center justify-center">
                    <div className="w-full max-w-sm mx-auto">
                        <Image
                            src={isEn ? "/page_1_en.webp" : "/page_1_th.webp"}
                            alt="page-1"
                            width={1240}
                            height={1754}
                            className="w-full h-auto rounded-sm shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
