"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";


export default function TextGenerateEffectDemo({words} : {words: string}) {
  return <TextGenerateEffect words={words} />;
}
