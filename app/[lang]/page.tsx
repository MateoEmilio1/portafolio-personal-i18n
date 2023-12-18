import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import CarruselWorkshops from "./components/carruselWorkshops";

// Imagenes



export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <main className="bg-white dark:bg-slate-800">
        
      

      





    </main>
  )
}
