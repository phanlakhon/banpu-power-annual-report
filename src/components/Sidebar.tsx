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
};

function NavLink({ href, pageId, label, pathname }: NavLinkProps) {
  const isActive = pathname === href;
  return (
    <Link href={href} className="flex gap-3 group items-start">
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
  items: { label: string; page: string; href: string }[];
  defaultOpen?: boolean;
};

function AccordionItem({ title, number, items, defaultOpen = true }: AccordionItemProps) {
  const pathname = usePathname();
  const hasActiveItem = items.some(item => pathname === item.href);
  const [isOpen, setIsOpen] = useState(defaultOpen || hasActiveItem);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start gap-3 text-left group"
      >
        <div className={`text-3xl font-light -mt-1.25 transition-colors ${hasActiveItem ? 'text-gradient-banpu' : 'text-banpu-cyan'}`}>{number}</div>
        <div className="flex-1">
          <div className="text-xs text-banpu-cyan font-medium mb-1">ส่วนที่</div>
          <div className={`font-semibold text-sm leading-tight flex items-center justify-between transition-colors ${hasActiveItem ? 'text-gradient-banpu' : 'text-banpu-purple'}`}>
            {title}
            {isOpen ? (
              <ChevronDown size={14} className="text-gray-400" />
            ) : (
              <ChevronRight size={14} className="text-gray-400" />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 pl-10 space-y-3">
          {items.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link key={idx} href={item.href} className="flex gap-3 group/item items-start">
                {showPageIds && (
                  <span className={`text-xs min-w-7.5 mt-px transition-colors font-bold ${isActive ? 'text-gradient-banpu' : 'text-banpu-cyan group-hover/item:text-banpu-purple'}`}>
                    {item.page}
                  </span>
                )}
                <span className={`text-xs leading-tight transition-colors ${isActive ? 'text-gradient-banpu font-bold' : 'text-gray-700 group-hover/item:text-banpu-cyan'}`}>
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

export default function Sidebar() {
  const t = useTranslations('Menu');
  const locale = useLocale();
  const pathname = usePathname();

  const p = (pageId: string) => `/${locale}/pages/${pageId}`;

  return (
    <aside className="w-72 h-full bg-[#f0f9fb] flex flex-col shadow-xl z-20 overflow-y-auto">
      <div className="p-6 shrink-0">
        <Link href={`/${locale}/`} className="flex justify-center mb-6">
          <div className="text-center">
            <img src="/logo.webp?v=2" alt="BANPU POWER" className="h-14" />
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-6 pb-6 space-y-5">
        <h2 className="text-banpu-purple text-xl font-bold mb-4">สารบัญ</h2>

        <div className="space-y-3">
          <NavLink href={p('000')} pageId="000" label={t('intro')} pathname={pathname} />
          <NavLink href={p('001')} pageId="001" label={t('highlight')} pathname={pathname} />
          <NavLink href={p('002')} pageId="002" label={t('performance')} pathname={pathname} />
          <NavLink href={p('003')} pageId="003" label={t('board_report')} pathname={pathname} />
          <NavLink href={p('004')} pageId="004" label={t('ceo_message')} pathname={pathname} />
        </div>

        <div className="my-4 border-t border-banpu-cyan-20" />

        <AccordionItem
          number="1"
          title={t('part1')}
          items={[
            { page: '005', label: t('part1_1'), href: p('005') },
            { page: '006', label: t('part1_2'), href: p('006') },
            { page: '007', label: t('part1_3'), href: p('007') },
            { page: '008', label: t('part1_4'), href: p('008') },
            { page: '009', label: t('part1_5'), href: p('009') },
            { page: '010', label: t('part1_6'), href: p('010') },
            { page: '011', label: t('part1_7'), href: p('011') },
            { page: '012', label: t('part1_8'), href: p('012') },
            { page: '013', label: t('part1_9'), href: p('013') },
            { page: '014', label: t('part1_10'), href: p('014') },
            { page: '015', label: t('part1_11'), href: p('015') },
            { page: '016', label: t('part1_12'), href: p('016') },
            { page: '017', label: t('part1_13'), href: p('017') },
          ]}
          defaultOpen={false}
        />

        <AccordionItem
          number="2"
          title={t('part2')}
          items={[
            { page: '018', label: t('part2_1'), href: p('018') },
            { page: '019', label: t('part2_2'), href: p('019') },
            { page: '020', label: t('part2_3'), href: p('020') },
            { page: '021', label: t('part2_4'), href: p('021') },
          ]}
          defaultOpen={false}
        />

        <AccordionItem
          number="3"
          title={t('part3')}
          items={[
            { page: '022', label: t('part3_1'), href: p('022') },
            { page: '023', label: t('part3_2'), href: p('023') },
            { page: '024', label: t('part3_3'), href: p('024') },
          ]}
          defaultOpen={false}
        />
      </nav>

    </aside>
  );
}
