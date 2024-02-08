import Image from "next/image"
//import proyecto1 from "@/public/images/screenCuantosDolares.png";
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'
import Card from "./3d-cardLive"

export default async function Proyects({
    params: { lang }
  }: {
    params: { lang: Locale }
  }){

    const { page } = await getDictionary(lang);


return(
<div>

    {/* Calculadora Dolares */}
    <Card  titulo={page.home.dolar_calc} desc={page.home.dolar_calc_desc} imageUrl="https://i.imgur.com/luwHTEH.jpeg" link="https://www.cuantosdolarestengo.com.ar/"/>
    {/* Blockchain explorer */}
    <Card  titulo={page.home.title_etherscan} desc={page.home.desc_etherscan} imageUrl="https://i.imgur.com/tw5nCNi.jpeg" link="https://frontend-etherscaneitor.vercel.app/"/>


</div>

)

}