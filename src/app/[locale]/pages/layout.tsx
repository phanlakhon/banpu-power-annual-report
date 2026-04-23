import PagesShell from '@/components/PagesShell';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return <PagesShell>{children}</PagesShell>;
}
