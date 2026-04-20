import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { AppLayout } from '@/components/layout';
import { APP_NAME } from '@/constants';
import { plusJakarta } from '@/fonts';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'GTM Strategy, Sales Operations & Executive Advisory. Enterprise-grade advisory for mid-market and SMB leadership.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${plusJakarta.className}`}
    >
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
