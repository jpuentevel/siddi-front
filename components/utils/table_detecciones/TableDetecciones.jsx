"use client"

import Link from "next/link";
import { useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from '@tanstack/react-table'
import ButtonVerDeteccion from "@/components/utils/button_ver_deteccion/ButtonVerDeteccion"
import { FormattingDate } from "@/functions/formatting_date/FormattingDate";

const TableDetecciones = ({ infante, detecciones }) => {

    const cols = [
        {
            header: "ID",
            accessorKey: 'id'
        },
        {
            header: "Fecha",
            accessorKey: 'fecha',
            cell: ({ getValue }) => FormattingDate(getValue()) // Aplica la función de formateo
        },
        {
            header: "Ver",
            cell: ({ row }) => <ButtonVerDeteccion infante={infante} deteccion={row.original.id} />
        }
    ]

    const table = useReactTable({
        data: detecciones,
        columns: cols,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
        <div className="w-3/5">
            <table className="table-auto overflow-x-auto mx-auto w-full">
                <thead className="bg-purple-300">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th className="py-2 px-4 sm:px-8 border-b border-gray-200 text-center text-black" key={header.id}>
                                    {header.column.columnDef.header}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr className="even:bg-gray-50" key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td className="py-4 px-4 sm:px-8 border-b border-gray-200 text-center text-black">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="grid sm:grid-cols-4 grid-cols-2 content-around my-5">
                <button 
                    onClick={() => table.setPageIndex(0)}
                    className="m-4 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center sm:text-lg text-base px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    Prim. página
                </button>
                <button 
                    onClick={() => table.previousPage()}
                    className="m-4 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center sm:text-lg text-base px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    Página ant.
                </button>
                <button 
                    onClick={() => table.nextPage()}
                    className="m-4 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center sm:text-lg text-base px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    Página sig.
                </button>
                <button 
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    className="m-4 focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center sm:text-lg text-base px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    Últ. página
                </button>
            </div>
        </div>
    )
}

export default TableDetecciones