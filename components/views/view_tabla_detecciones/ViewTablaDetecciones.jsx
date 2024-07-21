import ButtonVerDeteccion from "@/components/utils/button_ver_deteccion/ButtonVerDeteccion"

const ViewTablaDetecciones = (props) => {

    const cols = [
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
    ]

    return (
        <div className="flex min-h-screen flex-col items-center p-12 bg-purple-200">
            <div className="min-w-96">
                {props.infante}
            </div>
        </div>
    )
}

export default ViewTablaDetecciones