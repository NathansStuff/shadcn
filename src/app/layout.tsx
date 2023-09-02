import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';

import ClientProvider from '@/components/providers/Providers';
import SessionProvider from '@/components/providers/SessionProvider';
import { authConfig } from '@/lib/auth/authConfig';

import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }): Promise<JSX.Element> {
  const session = await getServerSession(authConfig);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ClientProvider>{children}</ClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
