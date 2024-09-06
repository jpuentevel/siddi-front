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

const TableDetecciones = ({ infante, detecciones }) => {
    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState("")

    const columns = [
        {
            header: "ID",
            accessorKey: 'id',
        },
        {
            header: "Fecha",
            accessorKey: 'fecha',
        },
        {
            header: 'Ver',
            accessorKey: 'id',
            cell: info => {
                return (
                    <ButtonVerDeteccion infante={info.infante} deteccion={info.id} />
                )
            }
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering
    })

    return (
        <>
            <label className="block text-gray-700 text-2xl font-bold mb-2">
                Filtrar
            </label>
            <input
                className="border border-gray-300 p-2 w-full mb-6"
                type="text"
                value={filtering}
                onChange={e => setFiltering(e.target.value)}
            />
            <table className="bg-white table-fixed mx-auto w-full">
                <thead className="border-4 border-amber-500">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="text-xl w-96">
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {
                                                { asc: '👇', desc: '👆' }
                                                [header.column.getIsSorted() ?? null]
                                            }
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-4 border-amber-500">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="p-3 text-xl w-96 text-center">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className="justify-between">
                <button onClick={() => table.setPageIndex(0)} className="mr-5 mt-5 bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-2 px-4 rounded">
                    Primera página
                </button>
                <button onClick={() => table.nextPage()} className="mr-5 mt-5 bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-2 px-4 rounded">
                    Página siguiente
                </button>
                <button onClick={() => table.previousPage()} className="mr-5 mt-5 bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-2 px-4 rounded">
                    Página anterior
                </button>
                <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} className="mr-5 mt-5 bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-2 px-4 rounded">
                    Última página
                </button>
            </div>
        </>
    )
}

export default TableDetecciones