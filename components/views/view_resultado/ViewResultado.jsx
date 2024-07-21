"use client"

import React from 'react'
import { useState } from 'react';
import Link from 'next/link'

const ViewResultado = () => {

  const FECHA = "18-07-2024"
  const ID = "1007968652"
  const NOMBRE = "José Alejandro Puente Velásquez"
  const PESO = 90
  const TALLA = 180

  const [idInfante, setIdInfante] = useState(ID);
  const [nombreInfante, setNombreInfante] = useState(NOMBRE);
  const [pesoInfante, setPesoInfante] = useState(PESO);
  const [tallaInfante, setTallaInfante] = useState(TALLA);
  const [fechaInfante, setFechaInfante] = useState(FECHA);


  return (
    <div className="flex min-h-screen flex-col items-center p-4 bg-purple-200">
      <h1 className="sm:text-4xl text-2xl text-center max-w-3xl my-5 text-purple-700">
        <b>Resultados de la detección</b>
      </h1>
      <div className="max-w-2xl shadow-lg rounded-md my-3 bg-purple-100">
        <p className="p-3 sm:text-3xl text-center text-lg text-gray-900 leading-relaxed">
          {fechaInfante}
        </p>
        <div className="grid grid-cols-2">
          <div className="border-t border-r border-purple-700 text-center sm:text-3xl text-lg text-gray-900 leading-relaxed p-3">
            {nombreInfante}
          </div>
          <div className="border-t border-purple-700 text-center sm:text-3xl text-lg text-gray-900 leading-relaxed p-3">
            {idInfante}
          </div>
          <div className="border-t border-r border-purple-700 text-center sm:text-3xl text-lg text-gray-900 leading-relaxed p-3">
            {pesoInfante} kg
          </div>
          <div className="border-t  border-purple-700 text-center sm:text-3xl text-lg text-gray-900 leading-relaxed p-3">
            {tallaInfante} cm
          </div>
        </div>
      </div>
      <div className="max-w-2xl shadow-lg rounded-md my-3 p-3 bg-purple-100">
        <h2 className="text-purple-700 font-semibold my-2 sm:text-3xl text-lg">
          Resultado vaina ICBF
        </h2>
        <p className="sm:text-3xl text-lg mt-5 text-gray-900 leading-relaxed text-justify">
          Según la vaina vieja del ICBF, el resultado de la predicción del
          estado de desnutrición del infante es:
          <b className="text-purple-700 ml-2">
            Desnutrición media
          </b>
        </p>
      </div>
      <div className="max-w-2xl shadow-lg rounded-md my-3 p-3 bg-purple-100">
        <h2 className="text-purple-700 font-semibold my-2 sm:text-3xl text-lg">
          Resultado Modelo IA
        </h2>
        <p className="sm:text-3xl text-lg mt-5 text-gray-900 leading-relaxed text-justify">
          Según la evaluación realizada por el modelo avanzando de Inteligencia
          Artificial, el resultado de la predicción del estado de desnutrición
          del infante es:
          <b className="text-purple-700 ml-2">
            Desnutrición media
          </b>
        </p>
      </div>
      <div className="flex flex-col items-center my-3">
        {/* <button
            href="#"
            type="submit"
            className="w-64 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onSubmit={handleSubmit}
          >
            Realizar Deteccion
          </button> */}
        <Link
          href="/"
          className="w-64 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default ViewResultado