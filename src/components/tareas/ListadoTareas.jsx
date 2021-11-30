import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Elegir plataforma de pago', estado: true },
        { nombre: 'Elegir colores', estado: true },
        { nombre: 'Elegir hosting', estado: false },
        { nombre: 'Elegir productos', estado: false },

    ]

    return (
        <>
            <h2>Proyecto: Tienda virtual</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : tareasProyecto.map(tarea => (
                    <Tarea tarea={tarea} />
                ))
                }

                <button type="button" className="btn btn-eliminar">Eliminar proyecto &times;</button>
            </ul>

        </>
    )
}

export default ListadoTareas
