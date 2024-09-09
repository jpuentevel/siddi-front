import ViewResultado from '@/components/views/view_resultado/ViewResultado'
import React from 'react'

const ResultadoDeteccion = (props) => {
    const docInfante = props.params.doc_infante;
    const idDeteccion = props.params.id_deteccion;
    
    return (
        <ViewResultado
            docInfante={docInfante}
            idDeteccion={idDeteccion}
        />
    )
}

export default ResultadoDeteccion