'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const showPageIds = process.env.NODE_ENV === 'development';

type NavLinkProps = {
  href: string;
  pageId: string;
  label: string;
  pathname: string;
  onNavigate?: () => void;
};

function NavLink({ href, pageId, label, pathname, onNavigate }: NavLinkProps) {
  const isActive = pathname === href;
  return (
    <Link href={href} className="flex gap-3 group items-start" onClick={onNavigate}>
      {showPageIds && (
        <span className={`text-sm min-w-7.5 transition-colors font-bold ${isActive ? 'text-gradient-banpu' : 'text-banpu-cyan'}`}>
          {pageId}
        </span>
      )}
      <span className={`text-sm transition-colors ${isActive ? 'text-gradient-banpu font-bold' : 'text-gray-800 group-hover:text-banpu-cyan'}`}>
        {label}
      </span>
    </Link>
  );
}

type AccordionItemProps = {
  title: string;
  number: string;
  partPrefix: string;
  items: { label: string; page: string; href: string; isSection?: boolean }[];
  headerHref?: string;
  defaultOpen?: boolean;
  onNavigate?: () => void;
};

function AccordionItem({ title, number, partPrefix, items, headerHref, defaultOpen = true, onNavigate }: AccordionItemProps) {
  const pathname = usePathname();
  const hasActiveItem = items.some(item => pathname === item.href) || (headerHref && pathname === headerHref);
  const [isOpen, setIsOpen] = useState(defaultOpen || hasActiveItem);
  const open = hasActiveItem || isOpen;
  const navHref = headerHref || items[0]?.href;

  return (
    <div className="mb-4">
      <div className="flex w-full items-start gap-3">
        <Link
          href={navHref}
          onClick={onNavigate}
          className={`text-3xl font-light -mt-1.25 transition-colors ${hasActiveItem ? 'text-gradient-banpu' : 'text-banpu-cyan hover:text-banpu-purple'}`}
        >
          {number}
        </Link>
        <div className="flex-1">
          <div className="text-xs text-banpu-cyan font-medium mb-1">{partPrefix}</div>
          <div className={`font-semibold text-sm leading-tight flex items-center justify-between transition-colors ${hasActiveItem ? 'text-gradient-banpu' : 'text-banpu-purple'}`}>
            <Link href={navHref} onClick={onNavigate} className={`flex-1 transition-colors ${!hasActiveItem ? 'hover:text-banpu-cyan' : ''}`}>
              {title}
            </Link>
            <button onClick={() => { if (!hasActiveItem) setIsOpen(!isOpen); }} className="shrink-0 ml-1">
              {open ? (
                <ChevronDown size={14} className="text-gray-400" />
              ) : (
                <ChevronRight size={14} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mt-4 pl-10 space-y-3">
          {items.map((item, idx) => {
            const isActive = pathname === item.href;
            const isSection = item.isSection;
            return (
              <Link key={idx} href={item.href} className="flex gap-3 group/item items-start" onClick={onNavigate}>
                {showPageIds && (
                  <span className={`text-xs min-w-7.5 mt-px transition-colors font-bold ${isActive ? 'text-gradient-banpu' : isSection ? 'text-banpu-cyan' : 'text-banpu-cyan group-hover/item:text-banpu-purple'}`}>
                    {item.page}
                  </span>
                )}
                <span className={`leading-tight transition-colors ${isSection ? 'text-xs font-semibold' : 'text-xs'} ${isActive ? 'text-gradient-banpu font-bold' : isSection ? 'text-banpu-cyan group-hover/item:text-banpu-purple' : 'text-gray-700 group-hover/item:text-banpu-cyan'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations('Menu');
  const locale = useLocale();
  const pathname = usePathname();

  const p = (pageId: string) => `/${locale}/pages/${pageId}`;

  return (
    <aside className="w-72 h-full bg-[#f0f9fb] flex flex-col shadow-xl z-20 overflow-y-auto">
      <div className="p-6 shrink-0">
        <Link href={`/${locale}/`} className="flex justify-center mb-6" onClick={onNavigate}>
          <div className="text-center">
            <img src="/logo.webp?v=2" alt="BANPU POWER" className="h-14" />
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-6 pb-6 space-y-5">
        <h2 className="text-banpu-purple text-xl font-bold mb-4">สารบัญ</h2>

        <div className="space-y-3">
          <NavLink href={p('000')} pageId="000" label={t('intro')} pathname={pathname} onNavigate={onNavigate} />
          <NavLink href={p('001')} pageId="001" label={t('highlight')} pathname={pathname} onNavigate={onNavigate} />
          <NavLink href={p('002')} pageId="002" label={t('performance')} pathname={pathname} onNavigate={onNavigate} />
          <NavLink href={p('003')} pageId="003" label={t('board_report')} pathname={pathname} onNavigate={onNavigate} />
          <NavLink href={p('004')} pageId="004" label={t('ceo_message')} pathname={pathname} onNavigate={onNavigate} />
        </div>

        <div className="my-4 border-t border-banpu-cyan-20" />

        <AccordionItem
          number="1"
          title={t('part1')}
          partPrefix={t('part_prefix')}
          headerHref={p('005_cover')}
          onNavigate={onNavigate}
          items={[
            { page: '005', label: t('part1_1'), href: p('005'), isSection: true },
            { page: '005', label: t('part1_2'), href: p('005') },
            { page: '006', label: t('part1_3'), href: p('006') },
            { page: '007', label: t('part1_4'), href: p('007') },
            { page: '008', label: t('part1_5'), href: p('008') },
            { page: '009', label: t('part1_6'), href: p('009') },
            { page: '010', label: t('part1_7'), href: p('010') },
            { page: '011', label: t('part1_8'), href: p('011') },
            { page: '012', label: t('part1_9'), href: p('012') },
            { page: '013', label: t('part1_10'), href: p('013') },
            { page: '014', label: t('part1_11'), href: p('014') },
            { page: '015', label: t('part1_12'), href: p('015') },
            { page: '016', label: t('part1_13'), href: p('016') },
            { page: '017', label: t('part1_14'), href: p('017') },
            { page: '018', label: t('part1_15'), href: p('018') },
            { page: '019', label: t('part1_16'), href: p('019') },
            { page: '020', label: t('part1_17'), href: p('020'), isSection: true },
            { page: '020', label: t('part1_18'), href: p('020') },
            { page: '021', label: t('part1_19'), href: p('021') },
            { page: '022', label: t('part1_20'), href: p('022'), isSection: true },
            { page: '022', label: t('part1_21'), href: p('022') },
            { page: '023', label: t('part1_22'), href: p('023') },
            { page: '024', label: t('part1_23'), href: p('024') },
            { page: '025', label: t('part1_24'), href: p('025') },
            { page: '026', label: t('part1_25'), href: p('026') },
            { page: '027', label: t('part1_26'), href: p('027') },
            { page: '028', label: t('part1_27'), href: p('028'), isSection: true },
            { page: '028', label: t('part1_28'), href: p('028') },
            { page: '029', label: t('part1_29'), href: p('029') },
            { page: '030', label: t('part1_30'), href: p('030'), isSection: true },
            { page: '030', label: t('part1_31'), href: p('030') },
            { page: '031', label: t('part1_32'), href: p('031') },
          ]}
          defaultOpen={false}
        />

        <AccordionItem
          number="2"
          title={t('part2')}
          partPrefix={t('part_prefix')}
          headerHref={p('032_cover')}
          onNavigate={onNavigate}
          items={[
            { page: '032', label: t('part2_1'), href: p('032'), isSection: true },
            { page: '032', label: t('part2_2'), href: p('032') },
            { page: '033', label: t('part2_3'), href: p('033') },
            { page: '034', label: t('part2_4'), href: p('034') },
            { page: '035', label: t('part2_5'), href: p('035'), isSection: true },
            { page: '035', label: t('part2_6'), href: p('035') },
            { page: '036', label: t('part2_7'), href: p('036') },
            { page: '037', label: t('part2_8'), href: p('037') },
            { page: '038', label: t('part2_9'), href: p('038') },
            { page: '039', label: t('part2_10'), href: p('039') },
            { page: '040', label: t('part2_11'), href: p('040') },
            { page: '041', label: t('part2_12'), href: p('041'), isSection: true },
            { page: '041', label: t('part2_13'), href: p('041') },
            { page: '042', label: t('part2_14'), href: p('042') },
            { page: '043', label: t('part2_15'), href: p('043') },
            { page: '044', label: t('part2_16'), href: p('044') },
            { page: '045', label: t('part2_17'), href: p('045') },
            { page: '046', label: t('part2_18'), href: p('046') },
            { page: '047', label: t('part2_19'), href: p('047'), isSection: true },
            { page: '047', label: t('part2_20'), href: p('047') },
            { page: '048', label: t('part2_21'), href: p('048') },
          ]}
          defaultOpen={false}
        />

        <AccordionItem
          number="3"
          title={t('part3')}
          partPrefix={t('part_prefix')}
          onNavigate={onNavigate}
          items={[
            { page: '049', label: t('part3_1'), href: p('049') },
            { page: '050', label: t('part3_2'), href: p('050') },
            { page: '051', label: t('part3_3'), href: p('051') },
          ]}
          defaultOpen={false}
        />
      </nav>

    </aside>
  );
}
