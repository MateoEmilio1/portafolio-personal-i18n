import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import CarruselWorkshops from "./components/carruselWorkshops";
import TextGenerateEffect from './components/textGenerateEffect';

// Imagenes
import Image from "next/image";
import tute from "../../public/tutedev.png";
import tute2 from "../../public/tutedev2.png";
import Proyects from './components/proyects';




export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <main className="bg-white px-10 dark:bg-slate-800">

      {/* Seccion principal */}
      <div className="min-h-screen">
      <div className='p-10 text-center'>
        <h2 className='py-2 text-5xl font-bold text-teal-500'>Mateo Emilio</h2>
        <h3 className='py-2 text-2xl font-semibold dark:text-white'>
        <TextGenerateEffect words={page.home.sysstudent} />
        </h3>
        
        <h3 className='py-2 text-xl font-semibold dark:text-white'>
        <TextGenerateEffect words="Frontend Developer" />
        </h3>
        <p className='text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-white md:text-xl'>
          {page.home.description}
        </p>
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
          <a
            href="https://linkedin.com/in/MateoEmilio1"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all hover:scale-125"
          >
            <AiFillLinkedin />
          </a>

          <a
            href="https://github.com/MateoEmilio1"
            rel="noopener noreferrer"
            target="_blank"
            className="transition-all hover:scale-125"
          >
            <AiFillGithub />
          </a>
        </div>


      </div>

      {/* PROYECTOS */}
      <div className="grid gap-8 min-h-screen py-52 justify-center text-center md:text-center">
        {/* PARTE DERECHA */}

        <div className=" text-black dark:text-white  ">
          <h2 className="text-6xl font-bold pb-10">{page.home.proyects}</h2>
          <p className="text-2xl pb-14 leading-8">
            {page.home.proyects_desc}
          </p>
          {/* PROYECTOS */}
          {/* CALCULADORA DE DOLARES */}
          <div>
            <Proyects params={{lang}} />
          </div>
          {/* termina calc */}
        </div>

        {/* Fin PROYECTOS */}

      </div>

      {/* SECTOR ABOUT ME */}

      <section className="grid gap-8 min-h-screen md:grid-cols-2 text-center md:text-left">
        <div className="py-20 text-black dark:text-white">
          <h2 className="text-5xl font-bold">{page.home.about}</h2>
          <p className="text-xl py-10 leading-8 ">
            {page.home.about_desc1}{" "}
            <a
              href="https://twitter.com/auroraisnear"
              className="text-green-600 font-bold bg-green-200  rounded-md px-2"
              target="_blank"
              rel="noopener"
            >
              Aurora
            </a>{" "}
            {page.home.about_desc2}{" "}
            <a
              href="https://seedlatam.org/"
              className="text-violet-700 font-bold bg-violet-200 rounded-md px-2"
              target="_blank"
              rel="noopener"
            >
              Seed Latam
            </a>
            &nbsp; {page.home.about_desc3}
           
          </p>
        </div>

        <div className="sm:items-center py-20">
          {/* Desktop */}
          <Image
            alt='tute'
            className="hidden md:block xl:max-h-fit md:float-right rounded-lg border-2 shadow-2xl"
            src={tute}
          />
          {/* Responsive */}
          <Image
            alt='tute2'
            className="md:hidden xl:max-h-fit md:float-right rounded-lg border-2 shadow-2xl"
            src={tute2}
          />
        </div>
      </section>

      {/* SECTOR WORKSHOP + CARRUSEL */}

      <section className="grid gap-8 min-h-screen md:grid-cols-2 py-52 text-center md:text-center">
        {/* Hacer en este div el Slider. */}
        <div id="Page" className="sm:items-center">
          {/* <Image className="xl:max-h-fit md:float-right  rounded-full border-8 shadow-2xl" src={charla1}/> */}
            <CarruselWorkshops/>
            
        </div>

        <div className="py-1s text-black dark:text-white">
          <h2 className="text-4xl font-bold">Workshops</h2>
          <p className="text-xl py-10 leading-8">
            {page.home.workshop_desc}
          </p>
        </div>
      </section>

      {/* SECTOR ARTICULOS */}

      <div className="min-h-screen md:grid-cols-2 text-center md:text-left">
        <div className="pt-20 pb-4 text-black dark:text-white">
          <h2 className="text-5xl font-bold e">{page.home.articulos}</h2>
          <p className="text-xl py-10 leading-8 ">
            {page.home.art_desc}
          </p>
        </div>
        {/* ARTICULOS */}
        <div className="grid lg:grid-cols-3 gap-4 py-4s">
          {/* Articulo ethereum */}
          <div className="max-w-md rounded overflow-hidden shadow-lg dark:bg-slate-500">
              <a href="https://mirror.xyz/seedlatam.eth/VpuKM5vy2uWpK-H-MVGcbZaCIlRVoC3iTsASDDXIhTY" rel="noopener noreferrer" target="_blank">
                <Image 
                  width="1280"
                  height="640" 
                  alt={`Article Image`} 
                  className="w-full" 
                  src="https://images.mirror-media.xyz/publication-images/2SnICBC1PfpM4qUr_-pmU.png?height=960&width=1920"></Image>
                <div className="px-6 py-4 text-left">
                  <h1 className="font-bold dark:text-white">
                    {page.home.articulo_title_ethereum}
                  </h1>
                  <p className="text-gray-700 text-base dark:text-gray-300">
                    {page.home.articulo_desc_ethereum}
                  </p>
                </div>
              </a>
            </div>

            {/* Articulo arbitrum */}
          <div className="max-w-md rounded overflow-hidden shadow-lg dark:bg-slate-500">
              <a href="https://mirror.xyz/layer2es.eth/J_kUr6roi4IVEuZXT44rfxO8L9n-yBZpPkOadrElPtw" rel="noopener noreferrer" target="_blank">
                <Image 
                  width="1280"
                  height="640" 
                  alt={`Article Image`} 
                  className="w-full" 
                  src="https://images.mirror-media.xyz/publication-images/lQLMnk4uGVTgWY-CPKEUd.jpg?height=640&width=1280"></Image>
                <div className="px-6 py-4 text-left">
                  <h1 className="font-bold dark:text-white">
                    {page.home.articulo_title_arbitrum}
                  </h1>
                  <p className="text-gray-700 text-base dark:text-gray-300">
                    {page.home.articulo_desc_ethereum}
                  </p>
                </div>
              </a>
            </div>

            {/* Articulo optimism */}
          <div className="max-w-md rounded overflow-hidden shadow-lg dark:bg-slate-500">
              <a href="https://mirror.xyz/seedlatam.eth/8jW2E12CajwBNWWLgFyvjg6X3YxZyIGkC4SYT7jdV8Q" rel="noopener noreferrer" target="_blank">
                <Image 
                  width="1280"
                  height="640" 
                  alt={`Article Image`} 
                  className="w-full" 
                  src="https://images.mirror-media.xyz/publication-images/oCx996LCPvCjkOyRc_pC1.jpeg?height=640&width=1280"></Image>
                <div className="px-6 py-4 text-left">
                  <h1 className="font-bold dark:text-white">
                    {page.home.articulo_title_op}
                  </h1>
                  <p className="text-gray-700 text-base dark:text-gray-300">
                    {page.home.articulo_desc_op}
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
