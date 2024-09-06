"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation'

const ViewRegistros = () => {

  const [docInfante, setDocInfante] = useState("");

  const router = useRouter()

  const HandleDocInfanteChange = (e) => {
    setDocInfante(e.target.value);
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/resultado/${docInfante}`)
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-12 bg-purple-100">
      <h1 className="sm:text-4xl text-2xl text-center max-w-3xl my-5 text-purple-700">
        <b>Buscar Infante</b>
      </h1>
      <form className="flex flex-col py-3 w-full sm:px-20">
        <div className="my-3 content-start w-full">
          <label className="text-purple-700 sm:text-2xl text-xl font-bold mb-3" for="id_infante">
            Identificación
          </label>
          <input
            className="border rounded w-full h-16 my-5 py-2 px-3 text-gray-900 sm:text-2xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="id_infante"
            type="text"
            placeholder="0123456789"
            value={docInfante}
            onChange={HandleDocInfanteChange}
            required
          ></input>
          <div className="flex flex-col items-center mt-5">
            <button
              onClick={HandleSubmit}
              type="submit"
              className="w-52 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center sm:text-2xl text-lg px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ViewRegistros