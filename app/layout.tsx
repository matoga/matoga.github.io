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
    'Martin Gazo is a PhD researcher in experimental quantum physics at the University of Cambridge.',
  openGraph: {
    title: 'Martin Gazo | Experimental quantum physics',
    description:
      'Research on turbulence and universal dynamics in homogeneous quantum gases.',
    images: ['https://matoga.github.io/website/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Gazo | Experimental quantum physics',
    description:
      'Research on turbulence and universal dynamics in homogeneous quantum gases.',
    images: ['https://matoga.github.io/website/og.png'],
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
