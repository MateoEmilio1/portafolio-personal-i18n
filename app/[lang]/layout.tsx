import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/header'

import { Inter } from 'next/font/google'
import Modals from './components/modals'

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mateo Emilio',
  description: 'Gracias por visitar mi pagina! :)'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
        <Modals lang={params.lang}/>
        <Analytics />
      </body>
    </html>
  )
}
