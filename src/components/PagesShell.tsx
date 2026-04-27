'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { usePathname } from 'next/navigation';

export default function PagesShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar
          — mobile/tablet : fixed overlay, off-screen by default
          — desktop (lg+) : static, part of flex row, always visible
      */}
      <div
        className={[
          'fixed inset-y-0 left-0 z-40 transition-transform duration-200 ease-in-out',
          'lg:static lg:inset-auto lg:z-auto lg:transition-none lg:shrink-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        <Sidebar onNavigate={() => setSidebarOpen(false)} />
      </div>

      {/* Main column */}
      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="shrink-0 flex items-center bg-white shadow-sm z-20">
          {/* Hamburger — hidden on lg+ */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className="flex-1" />
          <LanguageSwitcher />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
