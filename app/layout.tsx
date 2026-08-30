import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Martin Gazo — Computational Physics',
  description:
    'Martin Gazo studies quantum gases and turbulence, and builds numerical tools for exploring complex physical systems.',
  openGraph: {
    title: 'Martin Gazo — Computational Physics',
    description:
      'Research in quantum gases and turbulence, alongside numerical tools for exploring complex physical systems.',
    images: ['https://matoga.github.io/website/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Gazo — Computational Physics',
    description:
      'Research in quantum gases and turbulence, alongside numerical tools for exploring complex physical systems.',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
