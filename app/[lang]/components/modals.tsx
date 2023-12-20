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
      {/* Modals */}

      {/* modal 1 */}
      <dialog id='my_modal_bibliotecaL2' className='modal'>
        <form method='dialog' className='modal-box bg-bg-card'>
          <div className={styles.headerModal_opes}>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-none text-black outline-none'>
              ✕
            </button>
          </div>
          <div className='px-4 '>
            <p className='py-4 text-lg text-white'>
              It is a community focused on providing information about the
              Optimism ecosystem. Its main focus is on protocol updates and
              documentation translation.
            </p>
            <div className='flex gap-2 md:justify-end '>
              <div>
                {' '}
                <Link
                  target='_blank'
                  rel='noopener'
                  href='https://comunidad.seedlatam.org'
                >
                  {/* Boton gradiente - Responsive */}

                  <button className='mt-14 h-[42px] w-[176px] rounded-sm bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 p-[2px] hover:bg-blue-700 lg:hidden'>
                    <div className='flex h-full w-full items-center justify-center bg-gray-700'>
                      <h1 className='text-md font-bold text-white'>
                        {page.home.info}
                      </h1>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}
