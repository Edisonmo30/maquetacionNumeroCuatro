import { Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
    };

    return (
        <div className="contenedor">
            <img 
                src="./public/Avatar.png" 
                alt="Avatar" 
                className="avatar" 
            />
            <form onSubmit={handleSubmit} className='formulario'>
                <div className="inputs">
                    <input type="text" id="username" name="username" required placeholder='Usuario' />
                </div>
                <div className="inputs">
                    <input type="password" id="password" name="password" required placeholder='Contraseña' />
                </div>
                <button type="submit" className="login-boton">
                    <Link to="/Panel">Iniciar Sesión</Link>  
                    </button>
            </form>
            <p className="registro">
                <Link to="/register">¿No tiene cuenta?</Link>
            </p>
        </div>
    );
}

export default Login;
