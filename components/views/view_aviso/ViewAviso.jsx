import React from 'react'
import Link from 'next/link'

const ViewAviso = () => {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center p-12 bg-purple-100">
                <div className="flex flex-col items-center mb-5">
                    <h1 className="sm:text-5xl text-3xl text-center max-w-3xl mt-5 text-purple-700">
                        <b>Autorización de uso de datos</b>
                    </h1>
                    <p className="sm:leading-relaxed sm:text-3xl text-2xl text-justify max-w-3xl mt-10 text-gray-900">
                        El Sistema de Detección de Desnutrición Infantil ha sido desarrollado mediante el entrenamiento de una red neuronal. ¿Autoriza usted que la imagen sea usada por el sistema y almacenada para mejorar su desempeño? Las imágenes almacenadas serán usadas exclusivamente para el funcionamiento del sistema.
                    </p>
                    <p className="sm:leading-relaxed sm:text-3xl text-2xl text-left max-w-3xl w-full mt-4 text-gray-900">
                        Agradecemos su apoyo.
                    </p>
                </div>
                <div className="sm:grid sm:grid-cols-2 sm:justify-items-center flex flex-col items-center mt-4 w-3xl">
                    <Link
                        href="/deteccion"
                        type="button"
                        className="w-52 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-2xl px-3 py-2.5 mt-3 sm:mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                        Aceptar
                    </Link>
                    <Link
                        href="/"
                        type="button"
                        className="w-52 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-2xl px-3 py-2.5 mt-3 sm:ml-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                        Rechazar
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ViewAviso