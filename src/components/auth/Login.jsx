import { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

    //State para el inicio de sesión
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    //Extraer email y password del usuario
    const { email, password } = usuario

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

        //Pasar el action
    }
    return (
        <div>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>Iniciar Sesión</h1>

                    <form onSubmit={onSubmit}>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Tu email" value={email} onChange={onChange} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Tu password" value={password} onChange={onChange} />
                        </div>

                        <div className="campo-form">
                            <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión" />
                        </div>
                    </form>

                    <Link
                        to={"/nueva-cuenta"}
                        className="enlace-cuenta">
                        Obtener cuenta
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
