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
          const body = await response.json();
          setIdPrediccion(body.id);
          setIdInfante(body.infante_id);
          setFechaInfante(FormattingDate(body.fecha));
          setPesoInfante(body.peso);
          setTallaInfante(body.talla);
          setDesICBF(body.grado_desnutricion_icbf);
          setDesRed(body.grado_desnutricion_red);
          setNombreInfante(body.infante_nombre);
        }
      } catch (e) {
        console.error("Error Result: ", e);
      }
    };

    fetchData();
  }, []);

  const DesnutritionText = (des) => {
    console.log(des)
    return des == "1DS" ? "Riesgo de desnutrición aguda"
      : des == "2DS" ? "Desnutrición aguda moderada"
        : des == "3DS" ? "Desnutrición aguda severa"
          : "Peso adecuado para la talla";
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-4 bg-purple-100">
      <h1 className="sm:text-4xl text-2xl text-center max-w-3xl my-5 text-purple-700">
        <b>Resultados de la detección</b>
      </h1>
      <div className="max-w-2xl shadow-lg rounded-md my-3 bg-purple-50">
        <p className="p-3 sm:text-3xl text-center text-lg text-gray-900 leading-relaxed">
          <b className="text-purple-700">Fecha: </b>{fechaInfante}
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
      <div className="max-w-2xl shadow-lg rounded-md my-3 p-3 bg-purple-50">
        <h2 className="text-purple-700 font-semibold my-2 sm:text-3xl text-lg">
          Resultado del cálculo con valores numéricos:
        </h2>
        <p className="sm:text-3xl text-lg mt-5 text-gray-900 leading-relaxed text-justify">
          Según los indicadores establecidos por el Ministerio de Salud de Colombia la clasificación antropométrica es:
          <b className="text-purple-700 ml-2">{DesnutritionText(desICBF)}</b>
        </p>
      </div>
      <div className="max-w-2xl shadow-lg rounded-md my-3 p-3 bg-purple-50">
        <h2 className="text-purple-700 font-semibold my-2 sm:text-3xl text-lg">
          Resultado del cálculo con el modelo de IA:
        </h2>
        <p className="sm:text-3xl text-lg mt-5 text-gray-900 leading-relaxed text-justify">
          Según la evaluación realizada por el modelo de inteligencia artificial  la clasificación antropométrica es:
          <b className="text-purple-700 ml-2">{DesnutritionText(desRed)}</b>
        </p>
      </div>
      <div className="flex flex-col items-center my-3">
        <Link
          href="/"
          className="w-64 focus:outline-none text-purple-50 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center text-xl px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ViewResultado;
