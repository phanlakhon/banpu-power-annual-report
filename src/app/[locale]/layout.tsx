import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import localFont from 'next/font/local';
import { Sarabun } from 'next/font/google';
import './globals.css';

const banpuFont = localFont({
  src: [
    {
      path: '../../../public/fonts/BANPU/Banpu-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/BANPU/Banpu-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/BANPU/Banpu-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/BANPU/Banpu-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/BANPU/Banpu-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/BANPU/Banpu-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
});

const sarabun = Sarabun({
  weight: ['300', '400', '500', '700'],
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-sarabun',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${banpuFont.className} ${sarabun.variable}`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
