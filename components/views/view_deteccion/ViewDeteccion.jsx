"use client"

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ViewDeteccion = () => {

  const router = useRouter();

  const [idInfante, setIdInfante] = useState("");
  const [nombreInfante, setNombreInfante] = useState("");
  const [edadInfante, setEdadInfante] = useState(0);
  const [sexoInfante, setSexoInfante] = useState("H");
  const [pesoInfante, setPesoInfante] = useState(0);
  const [tallaInfante, setTallaInfante] = useState(0);
  const [imagenInfante, setImagenInfante] = useState(null);

  const handleIdInfanteChange = (e) => {
    setIdInfante(e.target.value);
  }
  const handleNombreInfanteChange = (e) => {
    setNombreInfante(e.target.value);
  }
  const handleEdadInfanteChange = (e) => {
    setEdadInfante(e.target.value);
  }
  const handleSexoInfanteChange = (e) => {
    setSexoInfante(e.target.value);
  }
  const handlePesoInfanteChange = (e) => {
    setPesoInfante(e.target.value);
  }
  const handleTallaInfanteChange = (e) => {
    setTallaInfante(e.target.value);
  }
  const handleImagenInfanteChange = (e) => {
    setImagenInfante(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: idInfante,
      nombre: nombreInfante,
      edad: edadInfante,
      sexo: sexoInfante,
      peso: pesoInfante,
      talla: tallaInfante,
      imagen: imagenInfante
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    //Falta que Ele ajuste la API para seguir con fetch
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-4 bg-purple-200">
      <h1 className="sm:text-4xl text-2xl text-center max-w-3xl my-5 text-purple-700">
        <b>Datos básicos del infante</b>
      </h1>

      <form className="flex flex-col my-3">
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3" for="id_infante">
            Identificación
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="id_infante"
            type="text"
            placeholder="0123456789"
            value={idInfante}
            onChange={handleIdInfanteChange}
            required
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3" for="nombre_infante">
            Nombre
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="nombre_infante"
            type="text"
            placeholder="Jorge Pérez"
            value={nombreInfante}
            onChange={handleNombreInfanteChange}
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3" for="edad_infante">
            Edad
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="edad_infante"
            type="number"
            placeholder="5"
            value={edadInfante}
            onChange={handleEdadInfanteChange}
            required
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3" for="sexo_infante">
            Sexo
          </label>
          <select
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="sexo_infante"
            value={sexoInfante}
            onChange={handleSexoInfanteChange}
            required
          >
            <option value="H">Hombre</option>
            <option value="M">Mujer</option>
          </select>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3" for="peso_infante">
            Peso (kg)
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="peso_infante"
            type="number"
            placeholder="30"
            value={pesoInfante}
            onChange={handlePesoInfanteChange}
            required
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3" for="talla_infante">
            Talla (cm)
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="talla_infante"
            type="number"
            placeholder="100"
            value={tallaInfante}
            onChange={handleTallaInfanteChange}
            required
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3">
            Imagen para predicción
          </label>
          <input
            type="file"
            accept=".png,.jpg"
            className="text-purple-700 mt-3 w-full font-semibold sm:text-lg text-base bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-purple-700 rounded"
            value={imagenInfante}
            onChange={handleImagenInfanteChange}
            required
          />
          <p className="sm:text-lg text-base leading-tight text-purple-700 mt-2">Sólo se permiten archivos PNG y JPG.</p>
        </div>
        <div className="flex flex-col items-center mt-3">
          {/* <button
            href="#"
            type="submit"
            className="w-64 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onSubmit={handleSubmit}
          >
            Realizar Deteccion
          </button> */}
          <Link
            href="/resultado"
            className="w-64 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Realizar Deteccion
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ViewDeteccion