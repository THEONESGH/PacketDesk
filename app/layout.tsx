import './globals.css';
import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL('https://laindustrialready.com'),
  title: {
    default: 'PacketDesk',
    template: '%s | PacketDesk',
  },
  description:
    'Qualification audits, proof packs, and bid invite response services for industrial-support companies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
      >
        <Providers>
          <SiteHeader />
          <main className="min-h-[calc(100vh-200px)]">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
