import React from 'react'
import Proyecto from './Proyecto'

const ListadoProyectos = () => {

    const proyectos = [
        { nombre: 'Tienda Virtual' },
        { nombre: 'Intranet' },
        { nombre: 'Diseño de sitio web' }
    ]

    return (
        <div>
            <ul className="listado-proyectos">

                {
                    proyectos.map(proyecto => (
                        <Proyecto proyecto={proyecto} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ListadoProyectos
