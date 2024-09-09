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

    const cols = [
        {
            header: "ID",
            accessorKey: 'id'
        },
        {
            header: "Fecha",
            accessorKey: 'fecha' //falta formatear la fecha
        },
        {
            header: "Ver",
            cell: ({ row }) => <ButtonVerDeteccion infante={infante} deteccion={row.original.id} />
        }
    ]

    const table = useReactTable({
        data: detecciones,
        columns: cols,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div>
            <table className="table-auto">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.column.columnDef.header}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableDetecciones