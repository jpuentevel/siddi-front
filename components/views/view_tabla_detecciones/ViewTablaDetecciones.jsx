"use client"

import { useEffect, useState } from 'react';
import Link from "next/link";
import { FormattingDate } from '@/functions/formatting_date/FormattingDate';
import ButtonVerDeteccion from "@/components/utils/button_ver_deteccion/ButtonVerDeteccion"

const ViewTablaDetecciones = (props) => {

    const [detecciones, setDetecciones] = useState([])
    const [textTitulo, setTextTitulo] = useState("No hay datos disponibles para mostrar.")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://whale-app-cka7j.ondigitalocean.app/infantes/estados/${props.infante}`,
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

                    if (Object.keys(body).length > 0) {
                        setTextTitulo("Detecciones realizadas para el infante ")
                        setDetecciones(body)
                        console.log("body")
                        console.log(body);
                        console.log("detecciones");
                        console.log(detecciones);
                    }
                }
            } catch (e) {
                console.error("Error Result: ", e);
            }
        };

        fetchData();
    }, []);

    /* const cols = [
        {
            header: "ID",
            accessorKey: 'id',
        },
        {
            header: "Fecha",
            accessorKey: 'fecha',
        },
        {
            header: "Ver",
            accessorKey: 'ver'
        }
    ]

    const rows = [
        {
            id: "1",
            fecha: "20-07-2024",
            ver: <ButtonVerDeteccion infante={[]} deteccion={[]} />
        }
    ] */

    return (
        <div className="flex min-h-screen flex-col items-center p-12 bg-purple-200">
            <div>
                <div className="my-6">
                    <h1 className="sm:text-2xl text-xl text-center max-w-3xl my-5 text-gray-900">
                        {textTitulo} <b className="text-purple-700">{props.infante}</b>
                    </h1>
                </div>
                {detecciones.length > 0 ? (
                    detecciones.map((item) => (
                        <div key={item.id} className="flex justify-between">
                            <span>ID: {item.id}</span>
                            <span>Fecha: {FormattingDate(item.fecha)}</span>
                            <ButtonVerDeteccion infante={props.infante} deteccion={item.id} />
                        </div>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
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
    )
}

export default ViewTablaDetecciones