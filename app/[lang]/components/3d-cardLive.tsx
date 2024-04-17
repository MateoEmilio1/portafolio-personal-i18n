"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";


export default function ThreeDCard({ titulo, desc, imageUrl, link, tecnologias}: { titulo: string; desc: string; imageUrl: string; link:string, tecnologias:React.ReactNode}) {
    

  return (
    <div>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-600 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {titulo}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <a href={link} rel="noopener noreferrer" target="_blank"> 
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          </a>
          <div>
            {tecnologias}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
    </div>
  );
}
