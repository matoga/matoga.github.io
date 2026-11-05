import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Martin Gazo | Experimental physicist specialising in quantum gases',
  description:
    'Experimental physicist specialising in quantum gases.',
  openGraph: {
    title: 'Martin Gazo | Experimental physicist specialising in quantum gases',
    description:
      'Experimental physicist specialising in quantum gases.',
  },
  twitter: {
    card: 'summary',
    title: 'Martin Gazo | Experimental physicist specialising in quantum gases',
    description:
      'Experimental physicist specialising in quantum gases.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
