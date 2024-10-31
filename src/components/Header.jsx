import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="encabezado">
            <div className="buttons-container">
                <Link className='enlace' to="/login">Iniciar Sesión</Link>
                <Link className='enlace' to="/register">Registrarse</Link>
            </div>
        </header>
    )
}

export default Header