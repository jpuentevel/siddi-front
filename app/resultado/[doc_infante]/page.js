import React from 'react'
import ViewTablaDetecciones from '@/components/views/view_tabla_detecciones/ViewTablaDetecciones'

const TablaDetecciones = (props) => {

    console.log(props);

    const docInfante = props.infante;

    return (
        <ViewTablaDetecciones infante={docInfante} />
    )
}

export default TablaDetecciones