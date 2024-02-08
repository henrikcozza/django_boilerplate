import React from "react";
import Image from "next/image";
import Link from "next/link";

import facilParticipar from "@/public/assets/images/facil-participar.png";
import compre from "@/public/assets/images/compre-oetker.png";
import participe from "@/public/assets/images/participar.png";
import ganhe from "@/public/assets/images/ganhe-oetker.png";
import como from "@/public/assets/images/como-participar.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section data-name="banner"
        className="bg-promo-banner-mobile  w-full 
        bg-[length:100vw_75vw] bg-no-repeat bg-top h-[75vw]
        md:bg-promo-banner md:h-[50vw] md:bg-[length:100vw_50vw] mt-16 md:mt-20"
      >
      </section>
      <section data-name="banner-02"
        className="flex items-center justify-center flex-wrap w-full bg-blue-500 h-full
        pt-8
        "
      >
        <div className="w-[100%] m-8 my-18 flex justify-center">
          <Image className="w-100" src={facilParticipar} alt="É muito facil participar!" />
        </div >
        <div className="w-[70%] md:w-[50%] pt-6 md:pt-15 flex justify-center">
          <Image className="w-100" src={compre} alt="Compre uma gelatina e mais 2 produtos Dr. Oetker" />
        </div>
        <div className="w-[70%] md:w-[50%] pt-6 md:pt-15 flex justify-center">
          <Image className="w-100" src={ganhe} alt="Ganhe supermercado para vida toda" />
        </div>
        <div className="w-[60%] pt-6 md:pt-0 flex justify-center m-8 z-0">
          <Link href={'cadastrar'}>
            <Image className="w-100  drop-shadow-[0_8px_4px_rgba(0,0,0,0.75)]" src={participe} alt="Participe clicando aqui" />
          </Link>
        </div>
      </section>
      <section data-name="how-to"
        className="  flex items-center justify-center flex-wrap w-full bg-blue-500 
        pt-8 bg-indigo-500  h-[75vw]
        "
      >
        <div className="w-[100%] m-8 my-18 flex justify-center">
          <Image className="w-100" src={como} alt="como participar" />
        </div >
      </section>
    </main>
  );
}
