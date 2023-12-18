import Image from 'next/image'
import logoL2 from '../../../../public/images/hero/logoL2.svg'
import styles from './hero.module.css'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Hero({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)

  return (
    <div className="mt-20  flex  min-h-screen min-w-full items-center  bg-[url('../../public/images/hero/background.png')] bg-cover  bg-center bg-no-repeat   ">
      <div className='mt-10 flex min-h-screen max-w-[800px] flex-wrap pl-[5vw] pr-[3vw]'>
        <div className='pt-20'>
          <Image
            width={657.08}
            height={226.13}
            alt='Logo Layer 2'
            src={logoL2}
          />

          <h2 className='font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-2xl'>
            {page.home.comunidad_1} <br /> {page.home.comunidad_2}
          </h2>

          {/* Boton gradiente - Desktop */}

          <button className='mt-20 hidden h-[56px] w-[266px] rounded-sm bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 p-[2px] hover:bg-blue-700 lg:block'>
            <div className='flex h-full w-full items-center justify-center bg-gray-700'>
              <h1 className='text-xl font-bold text-white'>{page.home.info}</h1>
            </div>
          </button>

          {/* Boton gradiente - Responsive */}

          <button className='mt-14 h-[42px] w-[176px] rounded-sm bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 p-[2px] hover:bg-blue-700 lg:hidden'>
            <div className='flex h-full w-full items-center justify-center bg-gray-700'>
              <h1 className='text-md font-bold text-white'>{page.home.info}</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
