import React from 'react'
import ViewTablaDetecciones from '@/components/views/view_tabla_detecciones/ViewTablaDetecciones'

const TablaDetecciones = (props) => {

    const docInfante = props.params.doc_infante;

    return (
        <ViewTablaDetecciones infante={docInfante} />
    )
}

export default TablaDetecciones