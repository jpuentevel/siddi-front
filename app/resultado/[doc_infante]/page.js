import React from 'react'
import ViewDetecciones from '@/components/views/view_detecciones/ViewDetecciones'

const Detecciones = (props) => {

    const docInfante = props.params.doc_infante;

    return (
        <ViewDetecciones infante={docInfante} />
    )
}

export default Detecciones