import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

//Imagenes
import Image from 'next/image'
import charla1 from '../../../public/images/charla1.png'
import charla2 from '../../../public/images/charla2.png'
import charla3 from '../../../public/images/charla3.png'
import charlaBitconf from '../../../public/images/charlaBitconf.jpg'
import charla5 from '../../../public/images/charla5.jpg'
import charlaColegioAbogados from '../../../public/images/charlaColegioAbogados.jpeg'

export default async function Modals({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)

  return (
    <div>
      {/* Modals */}

      {/* modal 1 */}
      <dialog
        id='my_modal_rosario'
        className='modal justify-center rounded-3xl dark:bg-slate-800 dark:text-white'
      >
        <form
          method='dialog'
          className='modal-box mx-auto my-4 flex max-w-4xl flex-col items-center text-center'
        >
          <div className='px-4 py-4 md:px-8'>
            <p className='mx-auto font-mono text-lg leading-normal tracking-wide md:max-w-4xl'>
              {page.home.modal_rosario_1} <br />
              <br /> {page.home.modal_rosario_2} <br />
              <br /> {page.home.modal_rosario_3}
            </p>
            <div className='my-4 flex justify-center'>
              <a
                target='_blank'
                rel='noopener'
                href='https://twitter.com/0xRoschain'
              >
                <Image
                  className='h-auto max-w-full rounded-lg object-contain'
                  alt='Logo'
                  src={charla1}
                ></Image>
              </a>
            </div>
          </div>
          <div className='my-4 flex justify-center'>
            <button className='rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 font-mono leading-normal tracking-wide text-white'>
              {page.home.button_close}
            </button>
          </div>
        </form>
      </dialog>

      {/* modal 2 */}
      <dialog
        id='my_modal_aurora_near'
        className='modal justify-center rounded-3xl dark:bg-slate-800 dark:text-white'
      >
        <form
          method='dialog'
          className='modal-box mx-auto my-4 flex max-w-5xl flex-col items-center text-center'
        >
          <div className='px-4 py-4 md:px-8'>
            <p className='mx-auto font-mono text-lg leading-normal tracking-wide md:max-w-4xl lg:px-0'>
              {page.home.modal_aurora_near}
              <br />
              <br /> Lima, Perú
            </p>
            <div className='my-4 flex justify-center'>
              <a
                target='_blank'
                rel='noopener'
                href='https://twitter.com/auroraisnear'
              >
                <Image
                  className='h-auto max-w-full rounded-lg object-contain'
                  alt='Logo'
                  src={charla2}
                ></Image>
              </a>
            </div>
          </div>
          <div className='my-4 flex justify-center'>
            <button className='rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 font-mono leading-normal tracking-wide text-white'>
              {page.home.button_close}
            </button>
          </div>
        </form>
      </dialog>

      {/* modal 3 */}
      <dialog
        id='my_modal_aurora_sc'
        className='modal justify-center rounded-3xl dark:bg-slate-800 dark:text-white'
      >
        <form
          method='dialog'
          className='modal-box mx-auto my-4 flex max-w-5xl flex-col items-center text-center'
        >
          <div className='px-4 py-4 md:px-8'>
            <p className='mx-auto font-mono text-lg leading-normal tracking-wide md:max-w-4xl lg:px-0'>
              {page.home.modal_aurora_sc}
              <br />
              <br /> Lima, Perú
            </p>
            <div className='my-4 flex justify-center'>
              <a
                target='_blank'
                rel='noopener'
                href='https://twitter.com/auroraisnear'
              >
                <Image
                  className='h-auto max-w-full rounded-lg object-contain'
                  alt='Logo'
                  src={charla3}
                ></Image>
              </a>
            </div>
          </div>
          <div className='my-4 flex justify-center'>
            <button className='rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 font-mono leading-normal tracking-wide text-white'>
              {page.home.button_close}
            </button>
          </div>
        </form>
      </dialog>

      {/* modal 5 */}
      <dialog
        id='my_modal_globant'
        className='modal justify-center rounded-3xl dark:bg-slate-800 dark:text-white'
      >
        <form
          method='dialog'
          className='modal-box mx-auto my-4 flex max-w-5xl flex-col items-center text-center'
        >
          <div className='px-4 py-4 md:px-8'>
            <p className='mx-auto font-mono text-lg leading-normal tracking-wide md:max-w-4xl'>
              {page.home.modal_globant_1} <br />
              <br />
              {page.home.modal_globant_2}
            </p>
            <div className='my-4 flex justify-center'>
              <a
                target='_blank'
                rel='noopener'
                href='https://mirror.xyz/seedlatam.eth/VpuKM5vy2uWpK-H-MVGcbZaCIlRVoC3iTsASDDXIhTY'
              >
                <Image
                  className='h-auto max-w-full rounded-lg object-contain'
                  alt='Logo'
                  src={charla5}
                ></Image>
              </a>
            </div>
          </div>
          <div className='my-4 flex justify-center'>
            <button className='rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 font-mono leading-normal tracking-wide text-white'>
              {page.home.button_close}
            </button>
          </div>
        </form>
      </dialog>

      {/* modal bitconf */}
      <dialog
        id='my_modal_bitconf'
        className='modal justify-center rounded-3xl dark:bg-slate-800 dark:text-white'
      >
        <form
          method='dialog'
          className='modal-box mx-auto my-4 flex max-w-5xl flex-col items-center text-center'
        >
          <div className='px-4 py-4 md:px-8'>
            <p className='mx-auto font-mono text-lg leading-normal tracking-wide md:max-w-4xl'>
              {page.home.modal_bitconf_1}{' '}
              <a
                href='https://www.youtube.com/watch?v=LOELy9Um5ek&t=628s'
                className='rounded-md bg-violet-200 px-2 font-bold text-violet-700'
                target='_blank'
                rel='noopener'
              >
                {page.home.modal_bitconf_2}
              </a>
              <br />
              <br /> LaBitconf, Buenos Aires.
            </p>
            <div className='my-4 flex justify-center'>
              <a
                target='_blank'
                rel='noopener'
                href='https://www.youtube.com/watch?v=LOELy9Um5ek&t=628s'
              >
                <Image
                  className='h-auto max-w-full rounded-lg object-contain'
                  alt='Logo'
                  src={charlaBitconf}
                ></Image>
              </a>
            </div>
          </div>
          <div className='my-4 flex justify-center'>
            <button className='rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 font-mono leading-normal tracking-wide text-white'>
              {page.home.button_close}
            </button>
          </div>
        </form>
      </dialog>

      {/* modal colegioAbogados */}
      <dialog
        id='my_modal_colegioAbogados'
        className='modal justify-center rounded-3xl dark:bg-slate-800 dark:text-white'
      >
        <form
          method='dialog'
          className='modal-box mx-auto my-4 flex max-w-5xl flex-col items-center text-center'
        >
          <div className='px-4 py-4 md:px-8'>
            <p className='mx-auto font-mono text-lg leading-normal tracking-wide md:max-w-4xl'>
              {page.home.modal_colegioAbogados}{' '}
              <a
                href='https://drive.google.com/drive/folders/1qFZ9mbz5SzEFpY1wlPpXyu0CuJpcPSDN?usp=sharing'
                className='rounded-md bg-violet-200 px-2 font-bold text-violet-700'
                target='_blank'
                rel='noopener'
              >
                {page.home.modal_colegioAbogados2}
              </a>
              <br />
              <br /> Colegio de Abogados, Rosario, Santa Fé.
            </p>
            <div className='my-4 flex justify-center'>
              <Image
                className='h-auto max-w-full rounded-lg object-contain'
                alt='Logo'
                src={charlaColegioAbogados}
              ></Image>
            </div>
          </div>
          <div className='my-4 flex justify-center'>
            <button className='rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 font-mono leading-normal tracking-wide text-white'>
              {page.home.button_close}
            </button>
          </div>
        </form>
      </dialog>
    </div>
  )
}
