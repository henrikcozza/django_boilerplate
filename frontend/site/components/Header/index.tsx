'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faRectangleXmark,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "@/public/assets/images/Dr._Oetker-Logo.svg";
import ItemMenu from "@/components/ItemMenu";


export default () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "/",
            label: "Home",
        },
        {
            id: 2,
            link: "participar",
            label: "Como participar",
        },
        {
            id: 3,
            link: "produtos",
            label: "Produtos participantes",
        },
        {
            id: 4,
            link: "regulamento",
            label: "Regulamento",
        },
    ]
    return (
        <header
            className="fixed flex items-center w-full h-30 justify-around aligns-center bg-[#17469d] z-10"
        >
            <div>
                <Image
                    src={Logo}
                    alt="logo"
                    className="w-[100px] md:m-3 lg:m-5 md:pt-2"
                    priority={true}
                />
            </div>
            <ul className="hidden md:flex items-center">
                {links.map(({ id, link, label }) => (
                    <li
                        key={id}
                        className="m-1 xl:m-4 nav-links lg:px-4 cursor-pointer capitalize font-medium xl:text-xl text-sm
                        text-gray-200 text-center  hover:bg-[#ed143d] md:p-1 rounded-md  hover:scale-105 hover:text-white duration-200 link-underline"
                    >
                        <Link href={link}>{label}</Link>
                    </li>
                ))}
            </ul>
            <div className="hidden md:flex flex items-center justify-center gap-10 lg:gap-20 md:gap-12 m-2 p-2">
                <button className="uppercase underline text-white xl:text-xl text-[18px]">
                    Cadastre-se
                </button>
                <button
                    className="flex max-w-25  w-20 items-center justify-center rounded-md border 
                        border-transparent bg-green-600 px-2 py-2 text-base font-medium text-white 
                        hover:bg-green-500  focus:outline-none focus:ring-2 focus:ring-indigo-500 
                        focus:ring-offset-2 uppercase"
                >
                    Entrar
                </button>
            </div>


            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-1m text-gray-200 md:hidden min-w-[50px]"
            >
                {!nav ? <FontAwesomeIcon size="2xl" icon={faBars} /> : <FontAwesomeIcon size="2xl" icon={faTimes} />}
            </div>
            {nav && (

                <ul className="flex flex-col justify-center items-center absolute top-[64px] 
                left-0 w-full uppercase z-15 bg-[#17469d] text-gray-200
                transition-[opacity,margin] duration-200 hs-dropdown-open:opacity-0 opacity-100">


                    {links.map(({ id, link, label }) => (
                        <li
                            key={id}
                            className="px-4 w-full cursor-pointer py-6 font-bold text-lg"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {label}
                            </Link>
                        </li>
                    ))}

                    <div className="flex items-center justify-center gap-14 m-2 mt-8 p-2">
                        <button className="uppercase text-white">
                            Cadastre-se
                        </button>
                        <button
                            className="flex max-w-25  w-20 items-center justify-center rounded-md border 
                            border-transparent bg-green-600 px-2 py-2 text-base font-medium text-white 
                            hover:bg-green-500  focus:outline-none focus:ring-2 focus:ring-indigo-500 
                            focus:ring-offset-2"
                        >
                            Entrar
                        </button>
                    </div>
                </ul>
            )}

        </header>
    )
}