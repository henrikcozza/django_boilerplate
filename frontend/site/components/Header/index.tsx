import React from "react";
import Image from "next/image";

import Logo from "@/assets/images/Dr._Oetker-Logo.svg";
import ItemMenu from "@/components/ItemMenu";

import { Navbar } from "flowbite-react";

export default function Header() {
    return (
        <header className="flex items-center w-full  bg-white justify-center">
            <div className="w-full max-w-[1246] px-4 mx-auto">
                <div className="flex items-center gap-14 justify-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="w-[80px] pl-1 pt-1 justify-start"
                    />
                    <ul className="flex items-center gap-2">
                        <ItemMenu
                            label="Home"
                            className="hover:bg-cyan-600 p-4 border-r-3 hover:text-white"
                        />
                        <ItemMenu
                            label="Como participar"
                            className="hover:bg-cyan-600 p-4 border-r-3 hover:text-white"
                        />
                        <ItemMenu
                            label="Produtos participantes"
                            className="hover:bg-cyan-600 p-4 border-r-3 hover:text-white"
                        />
                        <ItemMenu
                            label="Regulamento"
                            className="hover:bg-cyan-600 p-4 border-r-3 hover:text-white"
                        />
                        <ItemMenu
                            label="CADASTRE-SE"
                            className="hover:bg-cyan-600 p-4 border-r-3 hover:text-white"
                        />
                        <ItemMenu
                            label="Entrar"
                            className="bg-blue-500 hover:bg-cyan-600 p-4 border-r-20 text-white"
                        />
                    </ul>
                </div>
            </div>
        </header>
    )
}