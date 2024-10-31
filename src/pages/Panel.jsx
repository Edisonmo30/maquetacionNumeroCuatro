import { Link } from "react-router-dom"
import './Panel.css'

const Panel = () => {
  return (
      <main className="container">
            <header className="encabezado">
                <div className="buttons-container">
                    <Link className='enlace' to="/login">Cerrar Sesión</Link>
                </div>
            </header>
            
            <div className="right-container">
                <aside className="lateral-aside">
                    <button className="lateral-btn">Servicios</button>
                    <button className="lateral-btn">Contactos</button>
                </aside>
            </div>
            
            <h2 className="title-panel">Este es el panel principal</h2>
            <div className="container-panel-wrapper">
                <aside className="container-panel">
                </aside>
                <aside className="container-panel">
                </aside>
                <aside className="container-panel">
                </aside>
            </div>
      </main>
  )
}

export default Panel