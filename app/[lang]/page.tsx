import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import CarruselWorkshops from './components/carruselWorkshops'
import TextGenerateEffect from './components/textGenerateEffect'

// Imagenes
import Image from 'next/image'
import tute from '../../public/tutedev.png'
import tute2 from '../../public/tutedev2.png'
import Proyects from './components/proyects'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <main className='bg-white px-10 dark:bg-slate-800'>
      {/* Seccion principal */}
      <div className='min-h-screen'>
        <div className='p-10 text-center'>
          <h2 className='py-2 font-mono text-5xl font-bold leading-normal tracking-wide text-teal-500'>
            Mateo Emilio
          </h2>
          <h3 className='py-2 text-2xl font-semibold dark:text-white'>
            <TextGenerateEffect words={page.home.sysstudent} />
          </h3>

          <h3 className='py-2 text-xl font-semibold dark:text-white'>
            <TextGenerateEffect words='Frontend Developer' />
          </h3>
          <p className='text-md mx-auto max-w-xl py-5 font-mono text-lg leading-normal tracking-wide text-gray-800 dark:text-white md:text-xl'>
            {page.home.description}
          </p>
        </div>

        <div className='flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-white'>
          <a
            href='https://linkedin.com/in/MateoEmilio1'
            rel='noopener noreferrer'
            target='_blank'
            className='transition-all hover:scale-125'
          >
            <AiFillLinkedin />
          </a>

          <a
            href='https://github.com/MateoEmilio1'
            rel='noopener noreferrer'
            target='_blank'
            className='transition-all hover:scale-125'
          >
            <AiFillGithub />
          </a>
        </div>
      </div>

      {/* PROYECTOS */}
      <div className='grid min-h-screen justify-center gap-8 py-52 text-center md:text-center'>
        {/* PARTE DERECHA */}

        <div className=' text-black dark:text-white  '>
          <h2 className='pb-10 font-mono text-6xl font-bold leading-normal tracking-wide'>
            {page.home.proyects}
          </h2>
          <p className='pb-14 font-mono text-2xl leading-normal tracking-wide'>
            {page.home.proyects_desc}
          </p>
          {/* PROYECTOS */}
          {/* CALCULADORA DE DOLARES */}
          <div>
            <Proyects params={{ lang }} />
          </div>
          {/* termina calc */}
        </div>

        {/* Fin PROYECTOS */}
      </div>

      {/* SECTOR ABOUT ME */}

      <section className='grid min-h-screen gap-8 text-center md:grid-cols-2 md:text-left'>
        <div className='py-20 text-black dark:text-white'>
          <h2 className='font-mono text-5xl font-bold leading-normal tracking-wide'>
            {page.home.about}
          </h2>
          <p className='py-10 font-mono text-xl leading-normal tracking-wide'>
            {page.home.about_desc1}{' '}
            <a
              href='https://twitter.com/auroraisnear'
              className='rounded-md bg-green-200 px-2  font-bold text-green-600'
              target='_blank'
              rel='noopener'
            >
              Aurora
            </a>{' '}
            {page.home.about_desc2}{' '}
            <a
              href='https://seedlatam.org/'
              className='rounded-md bg-violet-200 px-2 font-bold text-violet-700'
              target='_blank'
              rel='noopener'
            >
              Seed Latam
            </a>
            &nbsp; {page.home.about_desc3}
          </p>
        </div>

        <div className='py-20 sm:items-center'>
          {/* Desktop */}
          <Image
            alt='tute'
            className='hidden rounded-lg border-2 shadow-2xl md:float-right md:block xl:max-h-fit'
            src={tute}
          />
          {/* Responsive */}
          <Image
            alt='tute2'
            className='rounded-lg border-2 shadow-2xl md:float-right md:hidden xl:max-h-fit'
            src={tute2}
          />
        </div>
      </section>

      {/* SECTOR WORKSHOP + CARRUSEL */}

      <section className='grid min-h-screen gap-8 py-52 text-center md:grid-cols-2 md:text-center'>
        {/* Hacer en este div el Slider. */}
        <div id='Page' className='sm:items-center'>
          {/* <Image className="xl:max-h-fit md:float-right  rounded-full border-8 shadow-2xl" src={charla1}/> */}
          <CarruselWorkshops />
        </div>

        <div className='py-1s text-black dark:text-white'>
          <h2 className='font-mono text-4xl font-bold leading-normal tracking-wide'>
            Workshops
          </h2>
          <p className='py-10 font-mono text-xl leading-normal tracking-wide'>
            {page.home.workshop_desc}
          </p>
        </div>
      </section>

      {/* SECTOR ARTICULOS */}

      <div className='min-h-screen text-center md:grid-cols-2 md:text-left'>
        <div className='pb-4 pt-20 text-black dark:text-white'>
          <h2 className='e font-mono text-5xl font-bold leading-normal tracking-wide'>
            {page.home.articulos}
          </h2>
          <p className='py-10 font-mono text-xl leading-normal tracking-wide'>
            {page.home.art_desc}
          </p>
        </div>
        {/* ARTICULOS */}
        <div className='py-4s grid gap-4 pb-10 lg:grid-cols-3 lg:pb-20'>
          {/* Articulo ethereum */}
          <div className='max-w-md overflow-hidden rounded shadow-lg dark:bg-slate-500'>
            <a
              href='https://mirror.xyz/seedlatam.eth/VpuKM5vy2uWpK-H-MVGcbZaCIlRVoC3iTsASDDXIhTY'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                width='1280'
                height='640'
                alt={`Article Image`}
                className='w-full'
                src='https://images.mirror-media.xyz/publication-images/2SnICBC1PfpM4qUr_-pmU.png?height=960&width=1920'
              ></Image>
              <div className='px-6 py-4 text-left'>
                <h1 className='font-mono font-bold leading-normal tracking-wide dark:text-white'>
                  {page.home.articulo_title_ethereum}
                </h1>
                <p className='font-mono text-base leading-normal tracking-wide text-gray-700 dark:text-gray-300'>
                  {page.home.articulo_desc_ethereum}
                </p>
              </div>
            </a>
          </div>

          {/* Articulo arbitrum */}
          <div className='max-w-md overflow-hidden rounded shadow-lg dark:bg-slate-500'>
            <a
              href='https://mirror.xyz/layer2es.eth/J_kUr6roi4IVEuZXT44rfxO8L9n-yBZpPkOadrElPtw'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                width='1280'
                height='640'
                alt={`Article Image`}
                className='w-full'
                src='https://images.mirror-media.xyz/publication-images/lQLMnk4uGVTgWY-CPKEUd.jpg?height=640&width=1280'
              ></Image>
              <div className='px-6 py-4 text-left'>
                <h1 className='font-mono font-bold leading-normal tracking-wide dark:text-white'>
                  {page.home.articulo_title_arbitrum}
                </h1>
                <p className='font-mono text-base leading-normal tracking-wide text-gray-700 dark:text-gray-300'>
                  {page.home.articulo_desc_ethereum}
                </p>
              </div>
            </a>
          </div>

          {/* Articulo optimism */}
          <div className='max-w-md overflow-hidden rounded shadow-lg dark:bg-slate-500'>
            <a
              href='https://mirror.xyz/seedlatam.eth/8jW2E12CajwBNWWLgFyvjg6X3YxZyIGkC4SYT7jdV8Q'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                width='1280'
                height='640'
                alt={`Article Image`}
                className='w-full'
                src='https://images.mirror-media.xyz/publication-images/oCx996LCPvCjkOyRc_pC1.jpeg?height=640&width=1280'
              ></Image>
              <div className='px-6 py-4 text-left font-mono leading-normal tracking-wide'>
                <h1 className='font-bold dark:text-white'>
                  {page.home.articulo_title_op}
                </h1>
                <p className='font-mono text-base leading-normal tracking-wide text-gray-700 dark:text-gray-300'>
                  {page.home.articulo_desc_op}
                </p>
              </div>
            </a>
          </div>

          {/* Articulo Ethereum Clients */}
          <div className='max-w-md overflow-hidden rounded shadow-lg dark:bg-slate-500'>
            <a
              href='https://mirror.xyz/seedlatam.eth/9KSXm8Ai9f8LUOyMBBeJFiCMFc82mGUWUg_bGaE1bLY'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image
                width='1280'
                height='640'
                alt={`Article Image`}
                className='w-full'
                src='https://images.mirror-media.xyz/publication-images/Z11EEOlR6PEAePInVqOQO.png?height=640&width=1280'
              ></Image>
              <div className='px-6 py-4 text-left font-mono leading-normal tracking-wide'>
                <h1 className='font-bold dark:text-white'>
                  {page.home.articulo_title_eth_clients}
                </h1>
                <p className='font-mono text-base leading-normal tracking-wide text-gray-700 dark:text-gray-300'>
                  {page.home.articulo_desc_eth_clients}
                </p>
              </div>
            </a>
          </div>

          {/* Fin articulos */}
        </div>
      </div>
    </main>
  )
}
