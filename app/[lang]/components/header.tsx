import LocaleSwitcher from './locale-switcher'
import CustomLink from './custom-link'

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { Button } from '../components/ui/button'
import Link from 'next/link'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>

        {/* <ul className='flex gap-x-8'>
          <li>
            <CustomLink href='/' lang={lang}>
              {navigation.home}
            </CustomLink>
          </li>
          <li>
            <CustomLink href='/about' lang={lang}>
              {navigation.about}
            </CustomLink>
          </li>
        </ul> */}

        <a
          className='ml-2 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white'
          href='https://drive.google.com/drive/folders/1mVeYA3crYMvmJnp3LlYqR3O9F-67vzk_?usp=drive_link'
          rel='noopener noreferrer'
          target='_blank'
        >
          {' '}
          Curriculum
        </a>


        <div>

        <LocaleSwitcher />

        </div>
      </nav>
    </header>
  )
}
