import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
import Logo from "../../../../public/images/logo.svg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "../locale-switcher";


const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Links",
    route: "/links",
  },
];

export default async function Navigation({ lang }: { lang: Locale }) {

    const { page } = await getDictionary(lang)

    
  return (
    <header className="flex justify-center  bg-[#222222] fixed z-10 top-0">
      <div className="">
        <div className={styles.navbarDesktop}>
          <div className="px-2 hidden  lg:flex ">
            <Link href="#Hero">
              <Image width={211} height={69} src={Logo} alt="logo"></Image>
            </Link>
          </div>

          <div className="lg:flex hidden px-2 ">
            <div className="flex items-center content-center ">
              <Link
                href="#Nosotros"
                className="p-2 text-lg font-bold  text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#017AD4]"
              >
                {page.home.nosotros}
              </Link>

              <Link
                href="#QueHacemos"
                className=" p-2  text-lg font-bold  text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#017AD4]"
              >
                {page.home.que_hacemos}
              </Link>

              <Link
                href="#Separte"
                className=" p-2  text-lg  font-bold text-white border-[#222222] border-b-4 hover:border-b-4 hover:border-[#017AD4]"
              >
                {page.home.contacto}
              </Link>

              <LocaleSwitcher/>
              

            </div>
          </div>
        </div>

        <div className={styles.navbar}>
          <div className="lg:hidden">
            <Link href="/">
              <Image width={150} height={75} src={Logo} alt="logo"></Image>{" "}
            </Link>
          </div>
          <div className="lg:hidden">
            <nav role="navigation" className="flex items-center">
              <div id={styles.menuToggle}>
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id={styles.menu}>
                  <li>
                    <Link href="#Nosotros">Nosotros </Link>
                  </li>
                  <li>
                    <Link href="#QueHacemos">Qué Hacemos</Link>
                  </li>
                  <li>
                    <Link href="#Contacto">Contacto</Link>
                  </li>
                 
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
