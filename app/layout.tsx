import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Meerkat Lending – A Smarter Way to Borrow',
  description: 'Get cash fast, deposited directly to your bank. Meerkat Lending helps you find the best loan options—fast approval, flexible terms, and competitive rates, no matter your credit score.',
  keywords: [
    'Meerkat Lending',
    'personal loans',
    'loan comparison',
    'fast approval loans',
    'cash advance',
    'loans for bad credit',
    'online loans',
    'flexible loan terms'
  ],
  authors: [{ name: 'Meerkat Lending' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Meerkat Lending – A Smarter Way to Borrow',
    description: 'Borrow smarter with Meerkat Lending. Get matched with top lenders for fast, flexible, and affordable loans.',
    url: 'https://meerkatlending.com',
    siteName: 'Meerkat Lending',
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de tener esta imagen en /public
        width: 1200,
        height: 630,
        alt: 'Meerkat Lending',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MeerkatLending',
    title: 'Meerkat Lending – A Smarter Way to Borrow',
    description: 'Compare top loan options and get funded fast with Meerkat Lending. Easy, secure, and no credit worries.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
