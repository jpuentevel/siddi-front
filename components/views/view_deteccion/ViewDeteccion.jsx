"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { usingDetectionModel } from '@/functions/using_detection_model/UsingDetectionModel';
import Image from 'next/image';

const ViewDeteccion = () => {

  const router = useRouter();

  const [idInfante, setIdInfante] = useState("");
  const [nombreInfante, setNombreInfante] = useState("");
  const [edadInfante, setEdadInfante] = useState(0);
  const [sexoInfante, setSexoInfante] = useState("H");
  const [pesoInfante, setPesoInfante] = useState(0);
  const [tallaInfante, setTallaInfante] = useState(0);
  const [imagenInfante, setImagenInfante] = useState(null);
  const [proccessedImage, setProcessedImage] = useState()
  const [prediction, setPrediction] = useState("");
  const [idDeteccion, setIdDeteccion] = useState(0)

  const HandleIdInfanteChange = (e) => {
    setIdInfante(e.target.value);
  }
  const HandleNombreInfanteChange = (e) => {
    setNombreInfante(e.target.value);
  }
  const HandleEdadInfanteChange = (e) => {
    setEdadInfante(e.target.value);
  }
  const HandleSexoInfanteChange = (e) => {
    setSexoInfante(e.target.value);
  }
  const HandlePesoInfanteChange = (e) => {
    setPesoInfante(e.target.value);
  }
  const HandleTallaInfanteChange = (e) => {
    setTallaInfante(e.target.value);
  }
  const HandleImagenInfanteChange = (e) => {
    setImagenInfante(e.target.files[0]);
  }

  const FetchingData = (data) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    //Falta que Ele ajuste la API para seguir con fetch
    return true
  }

  const GetImageProcessed = async (file) => {

    const formDataImg = new FormData()
    formDataImg.append("imagen_path", file)

    try {
      const response = await axios.post("https://whale-app-cka7j.ondigitalocean.app/imagen", formDataImg, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log("Respuesta API imagen proccess: ", response.data)
      setProcessedImage(response.data)

    } catch (error) {
      console.error('Error API imagen:', error);
    }
  }

  /* const GetModelResult = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          const base64String = reader.result.split(',')[1]
          const imgpro = GetImageProcessed(`data:image/jpeg;base64,${base64String}`)
          console.log("Resultado de llamada a GetImageProcessed: ", imgpro)
          setProcessedImage(imgpro)
          const result = await usingDetectionModel(proccessedImage)
          setPrediction(result);
          console.log("Predicción from GetModelResult: ", result);
          resolve(result);
        } catch (error) {
          console.log('Error durante la predicción:', error);
          reject(error);
        }
      };
      reader.onerror = (error) => {
        console.log('Error al leer el archivo:', error);
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }; */

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await GetImageProcessed(imagenInfante)
      console.log("Imagen procesada handle submit: ", proccessedImage)
    } catch (error) {
      console.log("Error en handle submit: ", error)
    }


    /* if (imagenInfante) {
      try {
        await GetModelResult(imagenInfante);
      } catch (error) {
        console.log('Error durante el procesamiento de la imagen:', error);
        return;
      }
    } else {
      console.log("No se ha seleccionado ninguna imagen.");
      return;
    } */

    setIdDeteccion(Math.random() * (100 - 0) + 0)

    /* if (imagenInfante) {
      await ProccessImage(imagenInfante, setPrediction)
      console.log("Dio Click")
    } else {
      console.log("No hay imagen")
      return
    } */

    /* const data = {
      id: idInfante,
      nombre: nombreInfante,
      edad: edadInfante,
      sexo: sexoInfante,
      peso: pesoInfante,
      talla: tallaInfante,
      imagen: imagenInfante,
      estado: prediction
    } */

    const data = {
      id: idInfante,
      nombre: nombreInfante,
      edad: edadInfante,
      sexo: sexoInfante,
      peso: pesoInfante,
      talla: tallaInfante,
      imagen: imagenInfante,
      estado: prediction
    };

    if (FetchingData(data)) {
      setIdDeteccion(Math.random() * (100 - 0) + 0)
      router.push(`resultado/${idInfante}/${idDeteccion}`)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-4 bg-purple-200">
      <h1 className="sm:text-4xl text-2xl text-center max-w-3xl my-5 text-purple-700">
        <b>Datos básicos del infante</b>
      </h1>

      <div className="flex flex-col my-3">
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3">
            Identificación
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="id_infante"
            type="text"
            placeholder="0123456789"
            value={idInfante}
            onChange={HandleIdInfanteChange}
            required
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3">
            Nombre
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="nombre_infante"
            type="text"
            placeholder="Jorge Pérez"
            value={nombreInfante}
            onChange={HandleNombreInfanteChange}
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3">
            Edad
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="edad_infante"
            type="number"
            placeholder="5"
            value={edadInfante}
            onChange={HandleEdadInfanteChange}
            required
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3">
            Sexo
          </label>
          <select
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="sexo_infante"
            value={sexoInfante}
            onChange={HandleSexoInfanteChange}
            required
          >
            <option value="H">Hombre</option>
            <option value="M">Mujer</option>
          </select>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3">
            Peso (kg)
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="peso_infante"
            type="number"
            placeholder="30"
            value={pesoInfante}
            onChange={HandlePesoInfanteChange}
            required
          ></input>
        </div>
        <div className="my-3 content-start">
          <label className="text-purple-700 sm:text-xl text-lg font-bold mb-3">
            Talla (cm)
          </label>
          <input
            className="border rounded w-full mt-3 py-2 px-3 text-purple-700 sm:text-xl text-lg leading-tight focus:outline-none focus:shadow-outline"
            id="talla_infante"
            type="number"
            placeholder="100"
            value={tallaInfante}
            onChange={HandleTallaInfanteChange}
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
            /* value={imagenInfante} */
            onChange={HandleImagenInfanteChange}
            required
          />
          <p className="sm:text-lg text-base leading-tight text-purple-700 mt-2">Sólo se permiten archivos PNG y JPG.</p>
        </div>
        {/* <div className="flex flex-col items-center mt-3">
          <Image
            src={proccessedImage}
            width={500}
            height={500}
            alt="Imagen procesada"
          />
        </div> */}
        <div className="flex flex-col items-center mt-3">
          <button
            href="#"
            className="w-64 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={HandleSubmit}
          >
            Realizar Deteccion
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewDeteccion