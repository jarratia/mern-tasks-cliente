import React from 'react'
import Barra from '../layout/Barra'
import Sidebar from '../layout/Sidebar'
import FormTarea from '../tareas/FormTarea'

const Proyectos = () => {
    return (
        <div>
            <div className="contenedor-app">
                <aside>
                    {/* Sección para agregar proyectos y listarlos */}
                    <Sidebar />
                </aside>

                <div className="seccion-principal">
                    <Barra />
                    <main>
                        <div className="contenedor-tareas">
                            {/* Sección para administrar las tareas */}
                            <FormTarea />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Proyectos
