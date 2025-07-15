import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meerkat Lending - Broker de Préstamos',
  description: 'Compara los mejores préstamos del mercado con Meerkat Lending. Encuentra las opciones de financiamiento más convenientes para tus necesidades.',
  keywords: ['préstamos', 'broker de préstamos', 'financiamiento', 'comparador de préstamos', 'préstamos personales', 'préstamos para empresas'],
  authors: [{ name: 'Meerkat Lending' }],  // Ahora es un objeto dentro de un array
  generator: 'Next.js',
  openGraph: {
    title: 'Meerkat Lending - Broker de Préstamos',
    description: 'Compara los mejores préstamos del mercado con Meerkat Lending.',
    url: 'https://meerkatlending.com', // Asegúrate de actualizar esta URL con la correcta
    siteName: 'Meerkat Lending',
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de tener una imagen adecuada para la vista previa
        width: 1200,
        height: 630,
        alt: 'Meerkat Lending',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MeerkatLending', // Asegúrate de tener la cuenta de Twitter si la tienes
    title: 'Meerkat Lending - Broker de Préstamos',
    description: 'Compara los mejores préstamos del mercado con Meerkat Lending.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
