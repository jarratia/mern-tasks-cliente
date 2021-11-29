import { useState } from 'react'
import { Link } from 'react-router-dom'


const NuevaCuenta = () => {

    //State para el inicio de sesión
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    //Extraer email y password del usuario
    const { nombre, email, password, confirmar } = usuario

    const onChange = ({ target }) => {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        })
    }

    //Función para el envío de formulario de inicio de sesión
    const onSubmit = (e) => {
        e.preventDefault()

        //Validar que no haya campos vacíos

        //Validar Password mínimo de 6 caracteres

        //Validar igualdad en los password

        //Pasar el action
    }
    return (
        <div>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>Obtener cuenta</h1>

                    <form onSubmit={onSubmit}>
                        <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="nombre" id="nombre" name="nombre" placeholder="Tu nombre" value={nombre} onChange={onChange} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Tu email" value={email} onChange={onChange} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="password"></label>
                            <input type="password" id="password" name="password" placeholder="Tu password" value={password} onChange={onChange} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="confirmar">Confirmar Password</label>
                            <input type="confirmar" id="confirmar" name="confirmar" placeholder="Confirmar password" value={confirmar} onChange={onChange} />
                        </div>

                        <div className="campo-form">
                            <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                        </div>
                    </form>

                    <Link
                        to={"/"}
                        className="enlace-cuenta">
                        Volver a iniciar sesión
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NuevaCuenta
