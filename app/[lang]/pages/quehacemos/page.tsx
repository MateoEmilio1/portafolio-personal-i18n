import Image from 'next/image'
import logoL2 from '../../../../public/images/hero/logoL2.svg'
import styles from './hero.module.css'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function QueHacemos({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)

  return (
    <div
      id='#Nosotros'
      className=" flex  min-h-screen min-w-full items-center bg-[url('../../public/images/hero/background.png')] bg-cover  bg-center bg-no-repeat   "
    >
      <div className='flex min-h-screen min-w-full items-center bg-black bg-opacity-40 bg-cover bg-center bg-no-repeat'>
        <div className='px-auto mx-[40px] mt-14   h-[700px]  min-w-[300px] w-full items-center rounded-lg border-[2px] bg-white bg-opacity-10  pt-[40px]   '>
          <h1 className='px-auto font-inter mx-[24px] pb-10 text-left text-4xl font-bold leading-[58px] tracking-[-0.05em] text-white md:text-5xl lg:text-[48px] xl:text-[48px]'>
            {page.home.que_hacemos_l2}
          </h1>

          <p className='px-auto mx-[24px] max-w-[1050px]  font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
            {page.home.que_hacemos_l2_desc}
          </p>
          {/* Carrusel */}
          



        </div>
      </div>
    </div>
  )
}
