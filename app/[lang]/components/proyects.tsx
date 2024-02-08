import Image from "next/image"
import proyecto1 from "@/public/images/screenCuantosDolares.png";
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'

export default async function Proyects({
    params: { lang }
  }: {
    params: { lang: Locale }
  }){

    const { page } = await getDictionary(lang)


return(
<div>
<div className="sm:items-center md:mx-20 xl:mx-40 border-2 border-gray-400 dark:border-white rounded-md">
            <div className="grid md:justify-center mx-10 py-10">
              <h4 className="text-3xl font-bold">{page.home.dolar_calc}</h4>
              <p className="text-lg py-10 leading-8">
                {page.home.dolar_calc_desc}
              </p>
              <div className=" ">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.cuantosdolarestengo.com.ar/"
                >
                  <Image
                    className="xl:max-h-fit md:float-right rounded shadow-lg "
                    alt="Logo"
                    src={proyecto1}
                  ></Image>
                </a>
              </div>
            </div>
          </div>

</div>

)

}