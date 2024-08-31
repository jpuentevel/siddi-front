"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FormattingDate } from "@/functions/formatting_date/FormattingDate";

const ViewResultado = (props) => {
  const [idInfante, setIdInfante] = useState(props.docInfante);
  const [idPrediccion, setIdPrediccion] = useState(props.idDeteccion);
  const [nombreInfante, setNombreInfante] = useState("");
  const [pesoInfante, setPesoInfante] = useState(0);
  const [tallaInfante, setTallaInfante] = useState(0);
  const [fechaInfante, setFechaInfante] = useState("");
  const [desICBF, setDesICBF] = useState("");
  const [desRed, setDesRed] = useState("");

  /* "id": 2,
  "infante_id": 123,
  "fecha": "2024-07-18 00:00:00",
  "peso": 80.0,
  "talla": 1.69,
  "edad": 22,
  "grado_desnutricion_icbf": "0",
  "grado_desnutricion_red": "0",
  "imagen_path": "http://whale-app-cka7j.ondigitalocean.app/uploads/1f8bc2a9a2d2ea6f007b4100dd3e5f73--kid-goku-anime-motivational-posters.jpg",
  "infante_nombre": "ele",
  "infante_sexo": "M" */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://whale-app-cka7j.ondigitalocean.app/estado/${idPrediccion}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Network response was not ok at Result: " + response.status
          );
        } else {
          const body = await response.json(); // Aquí se consume la respuesta una sola vez
          console.log("Response Result: ", body);
          setIdPrediccion(body.id);
          setIdInfante(body.infante_id);
          setFechaInfante(FormattingDate(body.fecha));
          setPesoInfante(body.peso);
          setTallaInfante(body.talla);
          setDesICBF(DesnutritionText(body.grado_desnutricion_icbf));
          setDesRed(DesnutritionText(body.grado_desnutricion_red));
          setNombreInfante(body.infante_nombre);
        }
      } catch (e) {
        console.error("Error Result: ", e);
      }
    };

    fetchData();
  }, []);

  const DesnutritionText = (des) => {
    console.log("des: " + des)
    return des == "1DS" ? "DESNUTRICIÓN BAJA" : desICBF == "2DS" ? "DESNUTRICIÓN MEDIA" : desICBF == "3DS" ? "DESNUTRICIÓN ALTA" : "PESO NORMAL";
  }

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
            <b className="text-purple-700">Nombre: </b> {nombreInfante}
          </div>
          <div className="border-t border-purple-700 text-center sm:text-3xl text-lg text-gray-900 leading-relaxed p-3">
            <b className="text-purple-700">Documento: </b> {idInfante}
          </div>
          <div className="border-t border-r border-purple-700 text-center sm:text-3xl text-lg text-gray-900 leading-relaxed p-3">
            <b className="text-purple-700">Peso: </b> {pesoInfante} kg
          </div>
          <div className="border-t  border-purple-700 text-center sm:text-3xl text-lg text-gray-900 leading-relaxed p-3">
            <b className="text-purple-700">Talla: </b> {tallaInfante} cm
          </div>
        </div>
      </div>
      <div className="max-w-2xl shadow-lg rounded-md my-3 p-3 bg-purple-100">
        <h2 className="text-purple-700 font-semibold my-2 sm:text-3xl text-lg">
          Resultado cálculo de Peso para la Talla ICBF
        </h2>
        <p className="sm:text-3xl text-lg mt-5 text-gray-900 leading-relaxed text-justify">
          Según el cálculo del estado de desnutrición del infante, según el peso 
          para la talla del mismo, y realizado bajo la metodología de la tabla 
          del ICBF correspondiente, el resultado de la predicción del estado de 
          desnutrición del infante es:
          <b className="text-purple-700 ml-2">{desICBF}</b>
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
          <b className="text-purple-700 ml-2">{desRed}</b>
        </p>
      </div>
      <div className="flex flex-col items-center my-3">
        <Link
          href="/"
          className="w-64 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ViewResultado;
