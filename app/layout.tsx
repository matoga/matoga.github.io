import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Martin Gazo | Experimental quantum physics',
  description:
    'Martin Gazo is an experimental physicist who recently finished a PhD in quantum gases at the University of Cambridge, now looking for work outside academia.',
  openGraph: {
    title: 'Martin Gazo | Experimental quantum physics',
    description:
      'Research on turbulence and universal dynamics in homogeneous quantum gases.',
  },
  twitter: {
    card: 'summary',
    title: 'Martin Gazo | Experimental quantum physics',
    description:
      'Research on turbulence and universal dynamics in homogeneous quantum gases.',
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
