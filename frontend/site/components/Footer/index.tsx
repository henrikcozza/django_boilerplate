import React, { useState } from "react";
import Link from "next/link";


export default () => {
    return (
        <footer
            className="flex flex-wrap items-center justify-center p-10 md:p-20 w-full "
        >
            <ul
                className="flex justify-center text-center gap-2 my-10 md:text-2xl flex-wrap font-bold underline"
            >
                <Link
                    href={"#"}
                    className="uppercase md:p-5"
                >
                    fale conosco
                </Link>
                <Link
                    href={"#"}
                    className="uppercase md:p-5"
                >
                    política de privacidade
                </Link>
                <Link
                    href={"#"}
                    className="uppercase md:p-5"
                >
                    FAQ - perguntas frequentes
                </Link>
            </ul>
            <p className="md:text-lg">
                PARTICIPAÇÃO: DE 22/01/2024 A 05/05/2024. *PREMIAÇÕES CONSTITUÍDAS POR
                CRÉDITOS NO APLICATIVO PICPAY. CERTIFICADOS DE AUTORIZAÇÃO SRE/MF
                Nº 05.032098/2024 E Nº 04.032099/2024. CONSULTE AS CONDIÇÕES DE
                PARTICIPAÇÃO NOS REGULAMENTOS. GUARDE TODOS OS COMPROVANTES FISCAIS
                ORIGINAIS CADASTRADOS. IMAGENS MERAMENTE ILUSTRATIVAS.
            </p>

        </footer>
    )
}