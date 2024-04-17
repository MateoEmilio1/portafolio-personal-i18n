import Image from 'next/image'
//import proyecto1 from "@/public/images/screenCuantosDolares.png";
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'
import Card from './3d-cardLive'
import { Badge } from '@/app/[lang]/components/ui/ui/badge'
import { badgeVariants } from '@/app/[lang]/components/ui/ui/badge'
import Link from 'next/link'
import CSSIcon from '@/app/[lang]/components/tags/css'
import Html from '@/app/[lang]/components/tags/html'
import Javascript from '@/app/[lang]/components/tags/javascript'
import Nextjs from '@/app/[lang]/components/tags/nextjs'
import Nodejs from '@/app/[lang]/components/tags/nodejs'
import React from '@/app/[lang]/components/tags/react'
import Shadcn from '@/app/[lang]/components/tags/shadcn-ui'
import Tailwind from '@/app/[lang]/components/tags/tailwind-css'
import Typescript from '@/app/[lang]/components/tags/typescript'
import Postgresql from './tags/postgresql'
import NextAuth from './tags/nextauth'
import Prisma from './tags/prisma'
import Ethereum from './tags/ethereum'
import Pyth from './tags/pythNetwork'

export default async function Proyects({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  // Elementos <div> con fotos específicas para cada proyecto
  const proyecto1Techs = (
    <div className='pt-4 '>
      <ul className='grid grid-cols-3 gap-2  lg:grid-cols-3 xl:grid-cols-4'>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <Postgresql />
              <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Postgresql</p>
            </div>
          </Badge>
        </li>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <Nextjs />
              <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Next.js</p>
            </div>
          </Badge>
        </li>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <Javascript />
              <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Javascript</p>
            </div>
          </Badge>
        </li>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <NextAuth />
              <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>NextAuth</p>
            </div>
          </Badge>
        </li>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <Prisma />
              <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Prisma</p>
            </div>
          </Badge>
        </li>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <Ethereum />
              <p className='ml-1 text-white  dark:text-black whitespace-nowrap sm:break-all'>Ethereum</p>
            </div>
          </Badge>
        </li>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <Tailwind />
              <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Tailwind</p>
            </div>
          </Badge>
        </li>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <Pyth />
              <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Pyth</p>
            </div>
          </Badge>
        </li>
        <li className='flex w-full'>
          <Badge variant='default'>
            <div className='flex max-h-7 w-full items-center'>
              <Shadcn />
              <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Shadcn</p>
            </div>
          </Badge>
        </li>
      </ul>
    </div>
  )

  const proyecto2Techs = <div className='pt-4'>
  <ul className='grid grid-cols-3 gap-2  lg:grid-cols-3 xl:grid-cols-4'>
    
    <li className='flex w-full'>
      <Badge variant='default'>
        <div className='flex max-h-7 w-full items-center'>
          <Nextjs />
          <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Next.js</p>
        </div>
      </Badge>
    </li>
    <li className='flex w-full'>
      <Badge variant='default'>
        <div className='flex max-h-7 w-full items-center'>
          <Typescript />
          <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Typescript</p>
        </div>
      </Badge>
    </li>
    
    
    <li className='flex w-full'>
      <Badge variant='default'>
        <div className='flex max-h-7 w-full items-center'>
          <Tailwind />
          <p className='ml-1 text-white dark:text-black whitespace-nowrap sm:break-all'>Tailwind</p>
        </div>
      </Badge>
    </li>
  
   
  </ul>
</div>

  return (
    <div>
      {/* Blockchain explorer */}
      <Card
        titulo={page.home.title_etherscan}
        desc={page.home.desc_etherscan}
        imageUrl='https://i.imgur.com/tw5nCNi.jpeg'
        link='https://frontend-etherscaneitor-production.up.railway.app/'
        tecnologias={proyecto1Techs}
      />

      {/* Calculadora Dolares */}
      <Card
        titulo={page.home.dolar_calc}
        desc={page.home.dolar_calc_desc}
        imageUrl='https://i.imgur.com/luwHTEH.jpeg'
        link='https://www.cuantosdolarestengo.com.ar/'
        tecnologias={proyecto2Techs}
      />
    </div>
  )
}
