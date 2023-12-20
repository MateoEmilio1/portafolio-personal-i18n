import Image from 'next/image'
import logoL2 from '../../../../public/images/hero/logoL2.svg'
import styles from './hero.module.css'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../../components/ui/accordion'

export default async function Nosotros({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)

  return (
    <div
      id='#QueHacemos'
      className=" flex  min-h-screen min-w-full items-center bg-[url('../../public/images/hero/background.png')] bg-cover  bg-center bg-no-repeat   "
    >
      <div className='flex min-h-screen min-w-full items-center bg-black bg-opacity-40 bg-cover bg-center bg-no-repeat'>
        <div className='px-auto mx-[40px] my-6  h-[700px] min-w-[300px]  items-center rounded-lg border-[2px] bg-white bg-opacity-10 pt-6  sm:mt-14 sm:pt-[40px]   '>
          <h1 className='px-auto font-inter mx-[24px] text-left text-4xl font-bold leading-[58px] tracking-[-0.05em] text-white sm:pb-10 md:text-5xl lg:text-[48px] xl:text-[48px]'>
            {page.home.nosotros}
          </h1>

          <p className='px-auto mx-[24px] font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
            {page.home.nosotros_desc}
          </p>

          {/* VISION */}
          <div className='px-auto max-h-auto mx-[24px] mt-9 min-h-[127px] items-center rounded-lg border-[2px] bg-white bg-opacity-10 px-[24px] pb-4 sm:mt-14'>
            {/* VISION Accordion */}

            <Accordion className='text-white' type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  <h1 className='font-inter text-left text-3xl font-bold leading-[58px] tracking-[-0.05em] text-white sm:pb-3 sm:pt-3 sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[48px]'>
                    {page.home.vision}
                    <p className='mt-3 font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
                      {page.home.vision_desc}
                    </p>
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className='font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
                    {page.home.vision_desc_accordion}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* MISION */}
          <div className='px-auto max-h-auto mx-[24px] mt-9 min-h-[127px] items-center rounded-lg border-[2px] bg-white bg-opacity-10 px-[24px] pb-4 sm:mt-14'>
            <Accordion className='text-white' type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  <h1 className='font-inter text-left text-3xl font-bold leading-[58px] tracking-[-0.05em] text-white sm:pb-3 sm:pt-3 sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[48px]'>
                    {page.home.mision}
                    <p className='font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
                      {page.home.mision_desc}
                    </p>
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className='font-sans font-normal italic leading-normal tracking-tighter text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
                    {page.home.mision_desc_accordion}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
