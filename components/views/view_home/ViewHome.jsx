import React from 'react'
import { Rosarivo } from 'next/font/google'
import Link from 'next/link'

const rosarivo = Rosarivo({
    subsets: ['latin'],
    weight: '400'
})

const ViewHome = () => {
    return (
        <main className="flex min-h-screen flex-col items-center p-12 bg-purple-200">

            <div className="flex flex-col items-center mb-5">
                <h1 className={`${rosarivo.className} text-9xl mb-5 text-purple-700`}>SIDDI</h1>
                <h2 className="text-4xl max-w-3xl mt-5 text-gray-900 text-center">El <b className="text-purple-700">Sistema de Detección de Desnutrición Infantil</b> especialmente diseñado para poblaciones rurales y alejadas.</h2>
            </div>

            <div className="flex flex-col items-center mt-5 mb-5">
                <h3 className="text-3xl max-w-3xl mt-5 text-gray-900">
                    Este sistema lo ayudará a detectar la desnutrición en infantes, clasificándola en las siguientes 4 categorías:
                </h3>
                <ol>
                    <li className="text-3xl mt-5 text-gray-900">
                        <b className="text-purple-700 mr-5">0.</b>
                        Peso normal.
                    </li>
                    <li className="text-3xl mt-5 text-gray-900">
                        <b className="text-purple-700 mr-5">1.</b>
                        Desnutrición leve.
                    </li>
                    <li className="text-3xl mt-5 text-gray-900">
                        <b className="text-purple-700 mr-5">2.</b>
                        Desnutrición moderada.
                    </li>
                    <li className="text-3xl mt-5 text-gray-900">
                        <b className="text-purple-700 mr-5">3.</b>
                        Desnutrición grave.
                    </li>
                </ol>
            </div>

            <div className="flex flex-col items-center mt-5">
                <Link
                    href="/aviso"
                    type="button"
                    className="w-64 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-2xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                    Realizar Detección
                </Link>
                <Link
                    href="/buscar"
                    type="button"
                    className="w-64 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-2xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                    Ver Registros
                </Link>
            </div>

        </main>
    )
}

export default ViewHome