"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { usingDetectionModel } from '@/functions/using_detection_model/UsingDetectionModel';

const ViewDeteccion = () => {

  const router = useRouter();

  const [idInfante, setIdInfante] = useState("")
  const [nombreInfante, setNombreInfante] = useState("")
  const [edadInfante, setEdadInfante] = useState(0)
  const [sexoInfante, setSexoInfante] = useState("H")
  const [pesoInfante, setPesoInfante] = useState(0)
  const [tallaInfante, setTallaInfante] = useState(0)
  const [imagenInfante, setImagenInfante] = useState(null)
  const [prediction, setPrediction] = useState("")
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

  useEffect(() => {
    if (prediction) {
      const sendFormData = async () => {

        console.log("id", idInfante)
        console.log("nombre", nombreInfante)
        console.log("edad", edadInfante)
        console.log("sexo", sexoInfante)
        console.log("peso", pesoInfante)
        console.log("talla", tallaInfante)
        console.log("imagen_path", imagenInfante)
        console.log("grado_desnutricion_red", prediction)

        const formData = new FormData();
        formData.append("id", idInfante);
        formData.append("nombre", nombreInfante);
        formData.append("edad", edadInfante);
        formData.append("sexo", sexoInfante);
        formData.append("peso", pesoInfante);
        formData.append("talla", tallaInfante);
        formData.append("imagen_path", imagenInfante);
        formData.append("grado_desnutricion_red", prediction);

        console.log(formData);

        const isFetched = await FetchingData(formData);

        if (isFetched) {
          console.log("Entró a antes del router push: ", idDeteccion);
          router.push(`resultado/${idInfante}/${idDeteccion}`);
        }
      };

      sendFormData();
    }
  }, [prediction]);

  const blobToImage = async (imageBitmap) => {
    const canvas = document.createElement('canvas');
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageBitmap, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    return imageData
  }

  const GetPrediction = async (file) => {

    const formDataImg = new FormData()
    formDataImg.append("imagen_path", file)

    try {
      const response = await fetch('https://whale-app-cka7j.ondigitalocean.app/imagen', {
        method: 'POST',
        body: formDataImg
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const resultFetch = await response.blob();
      const imageBitmap = await createImageBitmap(resultFetch);
      const imgFromBlob = await blobToImage(imageBitmap)

      try {
        const result = await usingDetectionModel(imgFromBlob)
        setPrediction(result);
      } catch (error) {
        console.log('Error from GetPrediction:', error);
      }

    } catch (error) {
      console.error('Error GetPrediction: ', error);
    }
  }

  const FetchingData = async (data) => {

    const response = await fetch('https://whale-app-cka7j.ondigitalocean.app/infantes', {
      method: 'POST',
      body: data
    })

    if (!response.ok) {
      throw new Error('Network response was not ok on FetchingData');
    } else {
      response.json().then(body => setIdDeteccion(body.estado_id));
      console.log("Cambió idDeteccion")
    }

    return response.ok
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      await GetPrediction(imagenInfante)
    } catch (error) {
      console.log("Error img en handle submit: ", error)
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