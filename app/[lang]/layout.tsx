import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import NavBar from './components/navbar/navigation'

import { Inter } from 'next/font/google'
import Modals from './components/modals'
import Hero from './pages/hero/hero'
import Nosotros from './pages/nosotros/page'
import QueHacemos from './pages/quehacemos/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Layer 2 en Español',
  description: 'Comunidad dedicada al estudio de soluciones de escalabilidad en Ethereum.'
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
        <NavBar lang={params.lang}/>
        <main>
          <Hero lang={params.lang}/>
          <Nosotros lang={params.lang}/>
          <QueHacemos lang={params.lang}/>
          {children}
        </main>
        {/* <Modals lang={params.lang} /> */}
      </body>
    </html>
  )
}
