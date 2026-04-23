'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Search } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(`/${newLocale}${pathname.replace(`/${locale}`, '')}`);
  };

  return (
    <div className="bg-white flex items-stretch">
      <button
        onClick={() => switchLocale('th')}
        className={`px-4 py-3 sm:px-6 sm:py-4 text-sm transition-colors cursor-pointer ${locale === 'th' ? 'bg-banpu-cyan text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
      >
        TH
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-4 py-3 sm:px-6 sm:py-4 text-sm transition-colors cursor-pointer ${locale === 'en' ? 'bg-banpu-cyan text-white' : 'text-gray-600 hover:bg-gray-100'
          }`}
      >
        EN
      </button>
      {/* <button className="px-4 py-3 sm:px-6 sm:py-4 text-gray-600 hover:bg-gray-100 transition-colors border-l border-gray-100">
        <Search size={18} className="sm:hidden" />
        <Search size={20} className="hidden sm:block" />
      </button> */}
    </div>
  );
}
