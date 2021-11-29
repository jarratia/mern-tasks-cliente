import { useState } from 'react'

const NuevoProyecto = () => {

    //State para nuevo proyecto
    const [proyecto, setProyecto] = useState({
        nombre: '',

    })

    //Extracción del nombre del proyecto
    const { nombre } = proyecto

    //Lectura de contenidos del input
    const onChangeProyecto = ({ target }) => {
        setProyecto({
            ...proyecto,
            [target.name]: target.value
        })
    }

    //Función cuando el usuario agrega un nuevo proyecto
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //Validar el nombre del proyecto

        //Agregar al state

        //Reiniciar el formulario
    }

    return (
        <>
            <button type="button" className="btn btn-block btn-primario">Nuevo Proyecto</button>

            <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
                <input type="text" className="input-text" placeholder="nombre-proyecto" name="nombre" value={nombre} onChange={onChangeProyecto} />
                <input type="submit" className="btn btn-primario btn-block" value="Agregar proyecto" />
            </form>
        </>
    )
}

export default NuevoProyecto
