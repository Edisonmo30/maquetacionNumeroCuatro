import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="encabezado">
            <div className="buttons-container">
                <Link className='enlaceUno' to="/login">Iniciar Sesión</Link>
                <Link className='enlaceUno' to="/register">Registrarse</Link>
            </div>
        </header>
    )
}

export default Header