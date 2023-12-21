import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

//Imagenes
import Image from 'next/image'

import styles from './modals.module.css'
import Link from 'next/link'

export default async function Modals({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)

  return (
    <div>
      {/* Modal deepResearch */}
      <dialog id='my_modal_deepResearch' className='modal'>
        <form
          method='dialog'
          className='modal-box max-w-xl bg-[#4F4F4F] lg:max-w-[810px]'
        >
          <div className={styles.headerModal}>
            <h1 className='pl-4 text-4xl font-extrabold text-white sm:pl-20 sm:text-5xl'>
              Deep Research
            </h1>
          </div>
          <div className='px-4 '>
            <p className='font-inter text-custom leading-custom justify py-4 text-lg font-medium tracking-tighter text-white'>
              Nos dedicamos publicar artículos de investigación completos que
              descifran conceptos complejos tras los desafíos de escalar
              Ethereum y su potencial. Espera de nosotros revisiones detalladas,
              análisis y comparaciones de tecnologías existentes y diseños
              propuestos
            </p>
            {/* BOTONES */}

            <div className='flex min-w-[400px]  justify-end '>
              {' '}
              {/* BOTONES DESKTOP*/}
              <div className='mb-4 flex gap-2 bg-[#4F4F4F] md:justify-end'>
                {/* boton Volver DESKTOP*/}
                <div className='md:w-max-90vw hidden text-9xl md:block md:justify-end'>
                  <form method='dialog' className='modal-backdrop'>
                    <button className='mt-20 hidden h-[47px] w-[124px] rounded-sm  p-[2px] hover:bg-blue-700 lg:block'>
                      <div className='flex h-full w-full items-center justify-center'>
                        <h1 className='text-xl font-bold text-white'>Volver</h1>
                      </div>
                    </button>
                  </form>
                </div>

                {/* boton PLAT ACTIVAS */}
                <div className='md:w-max-90vw hidden text-9xl md:block md:justify-end'>
                  <Link href='/gobernanzas/#PlataformasActivas'>
                    <button className='mt-20 hidden h-[47px] w-[189px] rounded-sm bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 p-[2px] hover:bg-blue-700 lg:block'>
                      <div className='flex h-full w-full items-center justify-center bg-gray-700'>
                        <h1 className='text-xl font-bold text-white'>
                          Ir a Artículos
                        </h1>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
              {/* BOTONES RESPONSIVE */}
              <div className='mb-4 flex gap-0 bg-[#4F4F4F] pr-5 sm:gap-2 md:justify-end'>
                {/* BOTON RETURN */}
                <div className='md:w-max-90vw pb-6 pl-6 text-9xl  md:hidden md:justify-end'>
                  <form method='dialog' className='modal-backdrop'>
                    <button className='mt-14 h-[42px] w-[176px] rounded-sm bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 p-[2px] hover:bg-blue-700 lg:hidden'>
                      <div className='flex h-full w-full items-center justify-center bg-gray-700'>
                        <h1 className='text-md font-bold text-white'>Return</h1>
                      </div>
                    </button>
                  </form>
                </div>

                {/* boton PLAT ACTIVAS */}
                <div className='md:w-max-90vw pr-4 text-9xl  md:hidden md:justify-end'>
                  <Link href='/gobernanzas/#PlataformasActivas'>
                    <button className='mt-14 h-[42px] w-[176px] rounded-sm bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 p-[2px] hover:bg-blue-700 lg:hidden'>
                      <div className='flex h-full w-full items-center justify-center bg-gray-700'>
                        <h1 className='text-md font-bold text-white'>
                          View active platforms
                        </h1>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </dialog>

    </div>
  )
}
