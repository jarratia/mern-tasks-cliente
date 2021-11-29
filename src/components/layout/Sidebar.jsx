import ListadoProyectos from '../proyectos/ListadoProyectos'
import NuevoProyecto from '../proyectos/NuevoProyecto'

const Sidebar = () => {

    return (
        <div>
            <h1>Mern <span>Tasks</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListadoProyectos />
            </div>
        </div>
    )
}

export default Sidebar
