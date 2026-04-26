import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pagesData, type PageSection } from "@/data/pages";
import React from "react";

type Props = {
    params: Promise<{ locale: string; pageId: string }>;
};

export function generateStaticParams() {
    return Object.keys(pagesData).map((pageId) => ({ pageId }));
}

function renderSection(
    section: PageSection,
    locale: string,
    accentColor: string,
) {
    const t = (text: { th: string; en: string }) =>
        locale === "th" ? text.th : text.en;

    const img = (src: string | { th: string; en: string }) =>
        typeof src === "string" ? src : locale === "th" ? src.th : src.en;

    let content: React.ReactNode = null;

    if (section.type === "text") {
        content = (
            <div className="mb-6 md:mb-8">
                {section.title && (
                    <h3
                        className="text-base md:text-lg font-bold mb-2 md:mb-3"
                        style={{ color: accentColor }}
                    >
                        {t(section.title)}
                    </h3>
                )}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {t(section.content)}
                </p>
            </div>
        );
    } else if (section.type === "highlights") {
        content = (
            <div className="mb-6 md:mb-8">
                {section.title && (
                    <h3
                        className="text-base md:text-lg font-bold mb-2 md:mb-3"
                        style={{ color: accentColor }}
                    >
                        {t(section.title)}
                    </h3>
                )}
                <p className="text-gray-600 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                    {t(section.content)}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {section.items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-3 md:p-5 shadow-sm border border-gray-100 flex flex-col gap-1"
                        >
                            <div
                                className="text-lg md:text-2xl font-bold"
                                style={{ color: accentColor }}
                            >
                                {item.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-500">
                                {t(item.label)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else if (section.type === "quote") {
        content = (
            <div className="mb-6 md:mb-8">
                <blockquote
                    className="border-l-4 pl-4 md:pl-6 py-2 italic text-gray-800 text-sm md:text-base leading-relaxed"
                    style={{ borderColor: accentColor }}
                >
                    {t(section.content)}
                </blockquote>
                {section.attribution && (
                    <p
                        className="mt-2 md:mt-3 ml-4 md:ml-6 text-xs md:text-sm font-medium"
                        style={{ color: accentColor }}
                    >
                        — {t(section.attribution)}
                    </p>
                )}
            </div>
        );
    } else if (section.type === "list") {
        content = (
            <div className="mb-6 md:mb-8">
                {section.title && (
                    <h3
                        className="text-base md:text-lg font-bold mb-3 md:mb-4"
                        style={{ color: accentColor }}
                    >
                        {t(section.title)}
                    </h3>
                )}
                <ul className="space-y-2 md:space-y-3">
                    {section.items.map((item, i) => (
                        <li key={i} className="flex gap-2 md:gap-3 items-start">
                            <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: accentColor }}
                            />
                            <span className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                {t(item)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else if (section.type === "pdf_banner") {
        content = (
            <div className="w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={img(section.src)}
                    alt={section.alt || "banner"}
                    className={`w-full h-auto object-contain ${section.mobileSrcs?.length ? 'sm:block hidden' : ''}`}
                />
                {section.mobileSrcs?.map((src, i) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img key={`mob-${i}`} src={img(src)} alt="" className="w-full h-auto object-contain sm:hidden block" />
                ))}
            </div>
        );
    } else if (section.type === "pdf_row") {
        const gapClasses = section.withGap ? "gap-6 sm:gap-[2%]" : "gap-6 sm:gap-0";

        content = (
            <div className={`flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start ${gapClasses} my-8 sm:my-12 md:my-16 lg:my-20 px-8 sm:px-[6%]`}>
                {section.items.map((item, idx) => {
                    return (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            key={idx}
                            src={img(item.src)}
                            alt={item.alt || `column-${idx}`}
                            className="w-full max-w-[300px] sm:max-w-none sm:w-auto h-auto object-contain min-w-0 shrink"
                        />
                    );
                })}
            </div>
        );
    } else if (section.type === "pdf_page") {
        content = (
            <div className="w-full relative" style={{ backgroundColor: section.backgroundColor || '#f5f9fb' }}>
                {section.desktopFullImage && (
                    <div className="hidden sm:block w-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={img(section.desktopFullImage)}
                            alt={section.pageNumber ? `Page ${section.pageNumber}` : "PDF Page"}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                )}
                <div className={`${section.desktopFullImage ? 'sm:hidden' : ''} max-w-[1100px] mx-auto w-full`}>
                    {section.items.map((subSection, i) => (
                        <div key={i}>
                            {renderSection(subSection, locale, accentColor)}
                        </div>
                    ))}
                </div>
                {section.pageNumber && (
                    <div className={`${section.desktopFullImage ? 'sm:hidden' : ''} w-full px-4 pt-2 pb-4 flex items-center pointer-events-none`}>
                        <div 
                            className={`text-xs md:text-sm font-bold ${
                                section.pageNumberAlign 
                                    ? (section.pageNumberAlign === 'left' ? 'mr-auto' : 'ml-auto')
                                    : (parseInt(section.pageNumber) % 2 === 0 ? 'mr-auto' : 'ml-auto')
                            }`} 
                            style={{ color: section.pageNumberColor || '#264997' }}
                        >
                            {section.pageNumber}
                        </div>
                    </div>
                )}
            </div>
        );
    } else if (section.type === "pdf_table") {
        content = (
            <div className="w-full px-4 sm:px-8 md:px-[2%] mb-10 md:mb-16">
                <div className="overflow-x-auto pb-4 custom-scrollbar">
                    <table className="w-full min-w-[600px] xl:min-w-full text-left border-collapse border-t-2 border-b-2 border-banpu-purple">
                        <thead>
                            {section.headerTitle && (
                                <tr>
                                    <th colSpan={2}></th>
                                    <th
                                        colSpan={section.columns.length}
                                        className="text-center text-banpu-purple text-[11px] md:text-[11px] font-bold pt-4 pb-2 border-b border-banpu-purple"
                                    >
                                        {t(section.headerTitle)}
                                    </th>
                                </tr>
                            )}
                            <tr className="border-b-2 border-banpu-purple">
                                <th className="py-2 px-2 w-[45%] lg:w-[50%] min-w-[180px]"></th>
                                <th className="py-2 px-2"></th>
                                {section.columns.map((col, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-2 px-2 text-center text-banpu-purple text-[11px] md:text-[11px] font-bold whitespace-nowrap ${section.highlightColumnIndex === idx ? 'bg-banpu-cyan-20' : ''}`}
                                    >
                                        {t(col)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {section.sections.map((sec, secIdx) => (
                                <React.Fragment key={secIdx}>
                                    {sec.title && (
                                        <tr className={secIdx > 0 ? "border-t border-banpu-cyan-40" : ""}>
                                            <td
                                                className="pt-4 pb-2 px-2 text-banpu-cyan text-[11px] md:text-[11px] font-bold"
                                            >
                                                {t(sec.title)}
                                            </td>
                                            <td className="pt-4 pb-2 px-2 text-banpu-cyan text-[11px] md:text-[11px] font-bold text-center whitespace-nowrap">
                                                {sec.unit ? t(sec.unit) : ''}
                                            </td>
                                            <td colSpan={section.columns.length}></td>
                                        </tr>
                                    )}
                                    {sec.rows.map((row, rowIdx) => (
                                        <tr key={rowIdx} className="hover:bg-[#f8fcfd] transition-colors">
                                            <td className={`py-1.5 px-2 text-[11px] md:text-[11px] text-gray-800 leading-tight ${row.isBold ? 'font-bold' : ''}`}>
                                                {t(row.label)}
                                            </td>
                                            <td className={`py-1.5 px-2 text-[11px] md:text-[11px] text-gray-800 text-center whitespace-nowrap ${row.isBold ? 'font-bold' : ''}`}>
                                                {row.unit ? t(row.unit) : ''}
                                            </td>
                                            {row.values.map((val, valIdx) => (
                                                <td
                                                    key={valIdx}
                                                    className={`py-1.5 px-2 text-[11px] md:text-[11px] text-gray-800 text-right whitespace-nowrap ${row.isBold ? 'font-bold' : ''} ${section.highlightColumnIndex === valIdx ? 'bg-banpu-cyan-20' : ''}`}
                                                >
                                                    {val}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    {/* Add a tiny spacing row at the end of each section for breathing room */}
                                    <tr><td colSpan={section.columns.length + 2} className="h-2"></td></tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else if (section.type === "pdf_title") {
        content = (
            <div className="px-4 sm:px-8 md:px-[2%] py-6 sm:py-8 md:py-10">
                <h2 className="text-2xl font-medium text-gradient-banpu leading-tight">
                    {t(section.text)}
                </h2>
            </div>
        );
    } else if (section.type === "pdf_sub_title") {
        content = (
            <div className="w-full text-center mt-8 mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    {t(section.text)}
                </h3>
            </div>
        );
    } else if (section.type === "pdf_quote_block") {
        content = (
            <div className="w-full px-8 sm:px-[10%] py-8 md:py-12 flex flex-col items-center text-center relative mt-2 mb-6">
                {/* Solid light blue container with rounded feel */}
                <div className="absolute inset-0 bg-banpu-cyan-20 -z-10 rounded-2xl mx-4 sm:mx-8 md:mx-[2%]"></div>
                
                {/* Opening Quote */}
                <div className="text-banpu-cyan opacity-60 mb-4">
                    <svg width="36" height="28" viewBox="0 0 40 30" fill="currentColor">
                        <path d="M0 15V0H15V15H8C8 20 10 22 15 22V30C5 30 0 25 0 15ZM25 15V0H40V15H33C33 20 35 22 40 22V30C30 30 25 25 25 15Z" />
                    </svg>
                </div>

                <p className="text-lg sm:text-xl md:text-[22px] font-bold text-gray-700 leading-snug max-w-3xl tracking-tight">
                    {t(section.text)}
                </p>

                {/* Closing Quote */}
                <div className="text-banpu-cyan opacity-60 mt-6 rotate-180">
                    <svg width="36" height="28" viewBox="0 0 40 30" fill="currentColor">
                        <path d="M0 15V0H15V15H8C8 20 10 22 15 22V30C5 30 0 25 0 15ZM25 15V0H40V15H33C33 20 35 22 40 22V30C30 30 25 25 25 15Z" />
                    </svg>
                </div>

                {/* Signature area */}
                <div className="mt-8 md:mt-10 self-end mr-10 md:mr-20 flex flex-col items-center gap-0.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={section.signatureSrc} alt="Signature" className="h-10 md:h-12 object-contain" />
                    <div className="text-sm md:text-base font-bold text-banpu-purple mt-2">
                        {t(section.signatureName)}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-500 font-medium">
                        {t(section.signaturePosition)}
                    </div>
                </div>
            </div>
        );
    } else if (section.type === "pdf_text_columns") {
        content = (
            <div className={`px-8 sm:px-[6%] py-4 md:py-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${
                section.fontFamily === 'sarabun' ? 'font-sarabun' : ''
            }`}>
                {section.columns.map((col, i) => (
                    <div key={i} className="text-[13px] md:text-[14px] text-gray-800 leading-[1.6] text-justify whitespace-pre-line">
                        {t(col)}
                    </div>
                ))}
            </div>
        );
    } else if (section.type === "pdf_note") {
        content = (
            <div className="px-4 sm:px-8 md:px-[2%] mt-4 sm:mt-6 mb-6 text-[10px] sm:text-[11px] xl:text-xs text-gray-800 font-medium leading-relaxed whitespace-pre-line">
                {!section.hidePrefix && <strong>{locale === 'th' ? 'หมายเหตุ :' : 'Note :'} </strong>}{t(section.text)}
            </div>
        );
    } else if (section.type === "pdf_html") {
        content = (
            <div 
                className={section.className}
                dangerouslySetInnerHTML={{ __html: t(section.content) }}
            />
        );
    }

    if (!content) return null;

    if (section.visibility === 'desktop-only') {
        return <div className="hidden lg:block">{content}</div>;
    }
    if (section.visibility === 'mobile-only') {
        return <div className="lg:hidden block">{content}</div>;
    }

    return content;
}

export default async function PageDetail({ params }: Props) {
    const { locale, pageId } = await params;
    const page = pagesData[pageId];
    if (!page) notFound();

    const t = (text: { th: string; en: string }) =>
        locale === "th" ? text.th : text.en;

    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300" style={{ backgroundColor: page.backgroundColor || '#f5f9fb' }}>
            {/* Page content */}
            <div className={(page.layout === 'pdf_composition' ? "w-full max-w-[1320px] mx-auto lg:p-2 p-1" : page.layout === 'pdf_single_full' ? "w-full max-w-[660px] mx-auto" : "px-4 sm:px-6 md:px-10 py-4 md:py-6") + " flex-grow"}>
                <div className={page.layout === 'pdf_composition' ? "grid grid-cols-1 xl:grid-cols-2 w-full gap-y-2" : page.layout === 'pdf_single_full' ? "flex flex-col w-full" : "max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 lg:p-8"}>
                    {page.sections.length > 0 ? (
                        page.sections.map((section, i) => (
                            <div key={i}>
                                {renderSection(
                                    section,
                                    locale,
                                    page.accentColor,
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center gap-4">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center"
                                style={{ background: `${page.accentColor}18` }}
                            >
                                <span
                                    className="text-2xl font-bold"
                                    style={{ color: page.accentColor }}
                                >
                                    {page.pageId}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                        {locale === "th"
                                    ? "กำลังเตรียมเนื้อหา"
                                    : "Content in preparation"}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="shrink-0 border-t border-gray-100 bg-white/80 backdrop-blur-md px-4 sm:px-6 md:px-10 py-3 md:py-4 bottom-0 z-20">
                <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-4">
                    {page.prevPage ? (
                        <Link
                            href={`/${locale}/pages/${page.prevPage}`}
                            className="group flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-600 hover:text-banpu-purple transition-all max-w-[40%]"
                        >
                            <div className="w-8 h-8 shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-banpu-purple group-hover:bg-banpu-cyan-20 transition-all">
                                <ChevronLeft size={18} />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-[10px] text-gray-400 font-normal uppercase tracking-wider">{locale === "th" ? "ก่อนหน้า" : "Previous"}</span>
                                <span className="truncate text-banpu-purple">
                                    {pagesData[page.prevPage] ? t(pagesData[page.prevPage].title) : `${locale === "th" ? "หน้า" : "Page"} ${page.prevPage}`}
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <Link
                            href={`/${locale}`}
                            className="group flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-600 hover:text-banpu-purple transition-all"
                        >
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-banpu-purple group-hover:bg-banpu-cyan-20 transition-all">
                                <ChevronLeft size={18} />
                            </div>
                            <span>{locale === "th" ? "หน้าหลัก" : "Home"}</span>
                        </Link>
                    )}

                    <div className="hidden md:flex flex-col items-center">
                        <span className="text-[10px] font-bold text-banpu-purple tracking-[0.2em] uppercase">Banpu Power</span>
                        <span className="text-[9px] text-gray-400 mt-0.5">
                            {locale === "th" ? "รายงานประจำปี 2568" : "Annual Report 2025"}
                        </span>
                    </div>

                    {page.nextPage ? (
                        <Link
                            href={`/${locale}/pages/${page.nextPage}`}
                            className="group flex items-center gap-2 text-right text-xs md:text-sm font-semibold text-gray-600 hover:text-banpu-purple transition-all max-w-[40%]"
                        >
                            <div className="flex flex-col min-w-0">
                                <span className="text-[10px] text-gray-400 font-normal uppercase tracking-wider">{locale === "th" ? "ถัดไป" : "Next"}</span>
                                <span className="truncate text-banpu-purple">
                                    {pagesData[page.nextPage] ? t(pagesData[page.nextPage].title) : `${locale === "th" ? "หน้า" : "Page"} ${page.nextPage}`}
                                </span>
                            </div>
                            <div className="w-8 h-8 shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-banpu-purple group-hover:bg-banpu-cyan-20 transition-all">
                                <ChevronRight size={18} />
                            </div>
                        </Link>
                    ) : (
                        <div className="w-[80px]"></div>
                    )}
                </div>
            </div>
        </div>
    );
}
