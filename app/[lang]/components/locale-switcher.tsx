'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'


//Shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
import { HiLanguage } from "react-icons/hi2";


export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'

    const pathnameIsMissingLocale = i18n.locales.every(
      locale => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName
      return `/${locale}${pathName}`
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split('/')
        const isHome = segments.length === 2
        if (isHome) return '/'

        segments.splice(1, 1)
        return segments.join('/')
      }

      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }
  }

  return (
    <div>
      <Select>
        <SelectTrigger className='w-[60px]'>
          <HiLanguage />
        </SelectTrigger>
        <SelectContent>
          <ul className='font-mono leading-normal tracking-wide flex flex-col'>
            {i18n.locales.map(locale => {
              let languageName;
              switch (locale) {
                case 'en':
                  languageName = 'English';
                  break;
                case 'es':
                  languageName = 'Español';
                  break;
                case 'de':
                  languageName = 'Deutsch';
                  break;
                default:
                  languageName = locale; // Default case to handle other locales
              }
              return (
                <li key={locale} className=' pt-2 my-2 mb-8'>
                  <Link
                    href={redirectedPathName(locale)}
                    className=' rounded-md border px-3 py-3 gap-3 text-black dark:text-white'
                  >
                      {languageName}
                  </Link>
                </li>
              )
            })}
          </ul>
        </SelectContent>
      </Select>
    </div>
  )
}
