import Image from 'next/image'
import logoL2 from '../../../../public/images/hero/logoL2.svg'
import styles from './hero.module.css'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Nosotros({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)

  return (
    <div
      id='#Nosotros'
      className=" flex  min-h-screen min-w-full items-center bg-[url('../../public/images/hero/background.png')] bg-cover  bg-center bg-no-repeat   "
    >
      <div className='flex min-h-screen min-w-full items-center bg-black bg-opacity-40 bg-cover bg-center bg-no-repeat'>
        
        <div className='mx-[40px] px-auto pt-[40px]   min-w-[300px]  mt-14 items-center rounded-lg border-[2px] bg-white bg-opacity-10  h-[700px]   '>
          <h1 className='mx-[24px] px-auto font-inter pb-10 text-left font-bold leading-[58px] tracking-[-0.05em] text-white text-4xl md:text-5xl lg:text-[48px] xl:text-[48px]'>
            Nosotros
          </h1>

          <p className='mx-[24px] px-auto font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
            Layer 2 en Español es una organización autogestionada para la
            investigación, el estudio y la difusión de soluciones de
            escalabilidad en Ethereum. Creemos que el ecosistema Ethereum tiene
            el potencial de transformar el mundo
          </p>
          {/* VISION */}
          <div className='mx-[24px] px-auto mt-14 pb-4 items-center rounded-lg border-[2px] bg-white bg-opacity-10 pl-[24px] min-h-[127px] max-h-auto'>
            <h1 className='font-inter pt-3 pb-3 text-left font-bold leading-[58px] tracking-[-0.05em] text-white text-4xl md:text-5xl lg:text-[48px] xl:text-[48px]'>
              Visión:
            </h1>

            <p className='font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
              Ser referentes en educación y difusión de contenido técnico en
              español dentro del ecosistema Ethereum.
            </p>
          </div>

          {/* MISION */}
          <div className='mx-[24px] px-auto mt-14 pb-4 items-center rounded-lg border-[2px] bg-white bg-opacity-10 pl-[24px] min-h-[127px] max-h-auto'>
            <h1 className='font-inter pt-3 pb-3 text-left font-bold leading-[58px] tracking-[-0.05em] text-white text-4xl md:text-5xl lg:text-[48px] xl:text-[48px]'>
              Misión:
            </h1>

            <p className='font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
            Dedicarnos a la investigación y difusión de las soluciones de escalabilidad en Ethereum, con un enfoque estríctamente técnico.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
