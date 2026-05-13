import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pagesData, type PageSection, type BilingualSrc } from "@/data/pages";
import FadeImage from "@/components/FadeImage";
import PrevNextNav from "@/components/PrevNextNav";
import React from "react";

type Props = {
    params: Promise<{ locale: string; pageId: string }>;
};

export function generateStaticParams() {
    return Object.keys(pagesData).map((pageId) => ({ pageId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, pageId } = await params;
    const page = pagesData[pageId];
    if (!page) return {};
    const title = locale === "th" ? page.title.th : page.title.en;
    return { title: `${title} | Banpu Power Annual Report 2025` };
}

function getFirstImageSrc(sections: PageSection[], locale: string): string | null {
    const getImg = (s: BilingualSrc) =>
        typeof s === "string" ? s : locale === "th" ? s.th : s.en;
    for (const section of sections) {
        if (section.type === "pdf_page") {
            if (section.desktopFullImage) return getImg(section.desktopFullImage);
            for (const item of section.items) {
                if (item.type === "pdf_banner") return getImg(item.src);
            }
        }
        if (section.type === "pdf_banner") return getImg(section.src);
        if (section.type === "pdf_row" && section.items.length > 0) return getImg(section.items[0].src);
    }
    return null;
}

function renderSection(
    section: PageSection,
    locale: string,
    accentColor: string,
    isFirst = false,
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
                    {section.items.map((item, i) => {
                        const itemText = t(item);
                        if (!itemText) return null;
                        return (
                            <li key={i} className="flex gap-2 md:gap-3 items-start">
                                <span
                                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                    style={{ background: accentColor }}
                                />
                                <span className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                    {itemText}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else if (section.type === "pdf_banner") {
        const bannerSrc = img(section.src);
        if (!bannerSrc) return null;
        const imgClass = `h-auto object-contain ${section.mobileSrcs?.length ? 'sm:block hidden' : ''} ${section.minWidth ? '' : 'w-full'}`;
        const imgStyle = section.minWidth ? { minWidth: section.minWidth, width: '100%' } : undefined;
        
        const bannerImage = (
            <>
                <FadeImage
                    src={bannerSrc}
                    alt={section.alt || "banner"}
                    className={imgClass}
                    style={imgStyle}
                    loading={isFirst ? "eager" : "lazy"}
                    fetchPriority={isFirst ? "high" : "auto"}
                />
                {section.mobileSrcs?.map((src, i) => (
                    <FadeImage key={`mob-${i}`} src={img(src)} alt="" className="w-full h-auto object-contain sm:hidden block" loading="lazy" />
                ))}
            </>
        );

        content = (
            <div className={section.minWidth ? 'w-full overflow-x-auto custom-scrollbar' : 'w-full'}>
                {section.href ? (
                    <a href={section.href} target="_blank" rel="noopener noreferrer" className="block w-full">
                        {bannerImage}
                    </a>
                ) : (
                    bannerImage
                )}
            </div>
        );
    } else if (section.type === "pdf_row") {
        const gapClasses = section.withGap ? "gap-6 sm:gap-[2%]" : "gap-6 sm:gap-0";
        content = (
            <div className={`flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start ${gapClasses} my-8 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-[6%]`}>
                {section.items.map((item, idx) => (
                    <FadeImage
                        key={idx}
                        src={img(item.src)}
                        alt={item.alt || `column-${idx}`}
                        wrapperClassName="w-full max-w-[300px] sm:max-w-none sm:flex-1 min-w-0 shrink"
                        className="h-auto object-contain"
                        loading={isFirst && idx === 0 ? "eager" : "lazy"}
                        fetchPriority={isFirst && idx === 0 ? "high" : "auto"}
                    />
                ))}
            </div>
        );
    } else if (section.type === "pdf_page") {
        content = (
            <div className="w-full relative" style={{ backgroundColor: section.backgroundColor || '#ffffff' }}>
                {section.desktopFullImage && (
                    <div className="hidden sm:block w-full relative" style={{ aspectRatio: '1 / 1.4142' }}>
                        <FadeImage
                            src={img(section.desktopFullImage)}
                            alt={section.pageNumber ? `Page ${section.pageNumber}` : "PDF Page"}
                            className="object-contain"
                            wrapperClassName="w-full h-full"
                            fill
                            sizes="(max-width: 1280px) 100vw, 50vw"
                            loading={isFirst ? "eager" : "lazy"}
                            fetchPriority={isFirst ? "high" : "auto"}
                        />
                        {section.hotspots && (
                            <div className="absolute inset-0 pointer-events-none">
                                {section.hotspots.map((hotspot, idx) => (
                                    <a
                                        key={idx}
                                        href={hotspot.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute pointer-events-auto hover:bg-white/10 transition-colors"
                                        style={{
                                            top: hotspot.top,
                                            left: hotspot.left,
                                            width: hotspot.width,
                                            height: hotspot.height,
                                        }}
                                        title="Click to open link"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
                <div className={`${section.desktopFullImage ? 'sm:hidden max-w-[410px]' : 'max-w-275'} mx-auto w-full`}>
                    {section.items.map((subSection, i) => (
                        <div key={i}>
                            {renderSection(subSection, locale, accentColor, isFirst && i === 0)}
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
                                            <td className="pt-4 pb-2 px-2 text-banpu-cyan text-[11px] md:text-[11px] font-bold">
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
                <h2 className={`font-medium text-gradient-banpu leading-tight ${section.large ? 'text-xl sm:text-2xl md:text-3xl' : 'text-2xl'}`}>
                    {t(section.text)}
                </h2>
            </div>
        );
    } else if (section.type === "pdf_sub_title") {
        const subTitleText = t(section.text);
        if (!subTitleText) return null;
        const weightClass = section.weight === 'semibold' ? 'font-semibold' : section.weight === 'bold' ? 'font-bold' : 'font-medium';
        const sizeClass = section.size === 'sm' ? `text-[15px] ${weightClass}`
            : section.size === 'md' ? `text-base sm:text-lg ${weightClass}`
            : `text-lg sm:text-xl ${weightClass}`;
        content = (
            <div className={`w-full pt-3 pb-3 pr-4 sm:pr-8 md:pr-[6%] ${section.textAlign === 'center' ? 'text-center' : ''}`} style={{ paddingLeft: '1.4rem' }}>
                <h3
                    className={sizeClass}
                    style={{ color: section.color ?? 'var(--color-banpu-cyan)' }}
                >
                    {subTitleText}
                </h3>
            </div>
        );
    } else if (section.type === "pdf_gradient_divider") {
        content = (
            <div className="px-4 sm:px-8 md:px-[2%] py-2">
                <div
                    className={section.thin ? "h-px" : "h-0.5"}
                    style={{ backgroundImage: 'linear-gradient(to right, var(--color-banpu-cyan), var(--color-banpu-purple))' }}
                />
            </div>
        );
    } else if (section.type === "pdf_gradient_text") {
        const fullText = t(section.text);
        const phrase = section.boldPhrase ? t(section.boldPhrase) : null;
        const parts = phrase && fullText.includes(phrase) ? fullText.split(phrase) : null;
        content = (
            <div className="px-4 sm:px-8 md:px-[2%] py-4">
                <p className="text-sm leading-relaxed text-gradient-banpu whitespace-pre-line">
                    {parts
                        ? parts.flatMap((part, i) =>
                            i < parts.length - 1 ? [part, <strong key={i}>{phrase}</strong>] : [part]
                        )
                        : fullText}
                </p>
            </div>
        );
    } else if (section.type === "pdf_body_text") {
        const bodyText = t(section.text);
        if (!bodyText) return null;
        const boldPhraseText = section.boldPhrase ? t(section.boldPhrase) : null;
        const colorPhraseText = section.colorPhrase ? t(section.colorPhrase) : null;
        const boldParts = boldPhraseText && bodyText.includes(boldPhraseText) ? bodyText.split(boldPhraseText) : null;
        const colorParts = colorPhraseText && bodyText.includes(colorPhraseText) ? bodyText.split(colorPhraseText) : null;
        content = (
            <div className="pr-4 sm:pr-8 md:pr-[2%] py-1" style={{ paddingLeft: section.paddingLeft ?? '1.4rem' }}>
                <p className="font-sarabun font-light text-[0.9rem] text-gray-800 leading-relaxed whitespace-pre-line">
                    {boldParts
                        ? boldParts.flatMap((part, i) =>
                            i < boldParts.length - 1 ? [part, <strong key={i}>{boldPhraseText}</strong>] : [part]
                        )
                        : colorParts
                        ? colorParts.flatMap((part, i) =>
                            i < colorParts.length - 1 ? [part, <span key={i} style={{ color: '#00a6f4' }}>{colorPhraseText}</span>] : [part]
                        )
                        : bodyText}
                </p>
            </div>
        );
    } else if (section.type === "pdf_numbered_list") {
        content = (
            <div className="pr-4 sm:pr-8 md:pr-[2%] py-2" style={{ paddingLeft: section.paddingLeft ?? '1.4rem' }}>
                <ol className="space-y-4">
                    {section.items.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start font-sarabun font-light text-[0.9rem] text-gray-800 leading-relaxed">
                            <span className="shrink-0" style={{ color: section.labelColor }}>{(section.startFrom ?? 1) + i}.</span>
                            <div>
                                <span className="whitespace-pre-line">
                                    {t(item.description) ? (
                                        <>
                                            <span className="font-bold mr-1" style={{ color: section.labelColor }}>{t(item.label)}</span>
                                            <span>{t(item.description)}</span>
                                        </>
                                    ) : (
                                        <span style={{ color: section.labelColor }}>{t(item.label)}</span>
                                    )}
                                </span>
                                {item.subItems && item.subItems.length > 0 && (
                                    <ul className="mt-2 space-y-1 ml-4">
                                        {item.subItems.map((sub, j) => (
                                            <li key={j} className="flex gap-2 items-start font-sarabun font-light">
                                                <span className="shrink-0" style={{ color: 'var(--color-banpu-purple)' }}>•</span>
                                                <span>{t(sub)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        );
    } else if (section.type === "pdf_list") {
        const listColor = section.color ?? '#000000';
        const labelColor = section.labelColor ?? listColor;
        const itemSep = section.itemSeparator ?? ' – ';
        content = (
            <div className="pr-4 sm:pr-8 md:pr-[2%] py-2" style={{ paddingLeft: section.paddingLeft ?? '1.4rem' }}>
                <ul className="space-y-2">
                    {section.items.map((item, i) => {
                        const content = 'label' in item ? t(item.description) : t(item);
                        if (!content) return null;
                        
                        return (
                            <li key={i} className="flex gap-2 items-start text-[0.9rem] text-gray-800 leading-relaxed">
                                <span className="shrink-0 font-sarabun font-light" style={{ color: listColor }}>•</span>
                                {'label' in item ? (
                                    <span><span className="font-medium" style={{ color: labelColor }}>{t(item.label)}</span><span className="font-sarabun font-light whitespace-pre-line">{itemSep}{content}</span></span>
                                ) : (
                                    <span className="font-sarabun font-light whitespace-pre-line">{content}</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else if (section.type === "pdf_quote_block") {
        content = (
            <div className="w-full px-4 sm:px-[10%] py-8 md:py-12 flex flex-col items-center text-center relative mt-2 mb-6">
                <div className="absolute inset-0 bg-banpu-cyan-20 -z-10 rounded-2xl mx-2 sm:mx-8 md:mx-[2%]"></div>
                <div className="text-banpu-cyan opacity-60 mb-4">
                    <svg width="36" height="28" viewBox="0 0 40 30" fill="currentColor">
                        <path d="M0 15V0H15V15H8C8 20 10 22 15 22V30C5 30 0 25 0 15ZM25 15V0H40V15H33C33 20 35 22 40 22V30C30 30 25 25 25 15Z" />
                    </svg>
                </div>
                <p className="text-lg sm:text-xl md:text-[22px] font-bold text-gray-700 leading-snug max-w-3xl tracking-tight">
                    {t(section.text)}
                </p>
                <div className="text-banpu-cyan opacity-60 mt-6 rotate-180">
                    <svg width="36" height="28" viewBox="0 0 40 30" fill="currentColor">
                        <path d="M0 15V0H15V15H8C8 20 10 22 15 22V30C5 30 0 25 0 15ZM25 15V0H40V15H33C33 20 35 22 40 22V30C30 30 25 25 25 15Z" />
                    </svg>
                </div>
                <div className="mt-8 md:mt-10 self-end mr-10 md:mr-20 flex flex-col items-center gap-0.5">
                    <FadeImage
                        src={img(section.signatureSrc)}
                        alt="Signature"
                        className="object-contain"
                        style={{ width: 'auto', height: '2.5rem' }}
                        loading="lazy"
                    />
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
            <div className={`px-4 sm:px-8 md:px-[6%] py-4 md:py-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${
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
            <div className="font-sarabun px-4 sm:px-8 md:px-[2%] py-4 text-[10px] sm:text-[11px] xl:text-xs text-gray-800 font-medium leading-relaxed">
                <div className="flex gap-1 items-start">
                    {!section.hidePrefix && <strong className="shrink-0">{locale === 'th' ? 'หมายเหตุ :' : 'Note :'}</strong>}
                    <span className="whitespace-pre-line">{t(section.text)}</span>
                </div>
            </div>
        );
    } else if (section.type === "pdf_disclaimer") {
        content = (
            <div className="px-4 sm:px-8 md:px-[6%] py-5 md:py-7 my-6 md:my-10" style={{ backgroundColor: section.backgroundColor || '#f0f9f8' }}>
                <h4 className="text-[12px] md:text-[13px] font-semibold mb-2 text-gray-800">
                    {t(section.title)}
                </h4>
                <div className="text-[12px] md:text-[13px] text-gray-600 leading-relaxed text-justify whitespace-pre-line font-sarabun">
                    {t(section.text)}
                </div>
            </div>
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
    setRequestLocale(locale);
    const page = pagesData[pageId];
    if (!page) notFound();

    const t = (text: { th: string; en: string }) =>
        locale === "th" ? text.th : text.en;

    const firstImageSrc = getFirstImageSrc(page.sections, locale);

    return (
        <div 
            className="min-h-screen flex flex-col transition-colors duration-300 page-container" 
            style={{ backgroundColor: page.backgroundColor || '#f5f9fb' }}
        >
            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 640px) {
                    .page-container { background-color: white !important; }
                }
            `}} />
            {firstImageSrc && <link rel="preload" as="image" href={firstImageSrc} />}
            <div className={`flex-grow ${page.layout === 'pdf_composition' ? "w-full max-w-360 mx-auto lg:p-2 p-1" : page.layout === 'pdf_single_full' ? "w-full max-w-275 mx-auto lg:p-2 p-1" : "px-4 sm:px-6 md:px-10 py-4 md:py-6"}`}>
                <div className={page.layout === 'pdf_composition' ? "grid grid-cols-1 xl:grid-cols-2 w-full md:gap-y-2" : page.layout === 'pdf_single_full' ? "flex flex-col w-full" : "max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 lg:p-8"}>
                    {page.sections.length > 0 ? (
                        page.sections.map((section, i) => (
                            <div key={i}>
                                {renderSection(
                                    section,
                                    locale,
                                    page.accentColor,
                                    i === 0,
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

            <PrevNextNav
                locale={locale}
                prevPage={page.prevPage ? { id: page.prevPage, title: t(pagesData[page.prevPage].title) } : undefined}
                nextPage={page.nextPage ? { id: page.nextPage, title: t(pagesData[page.nextPage].title) } : undefined}
            />
        </div>
    );
}
