import { Link, useNavigate } from 'react-router-dom'; // Importar useNavigate
import './Register.css'; 

const urlUsuarios = 'http://localhost:3000/users'; // URL del JSON Server o backend

const Register = () => {
    const navigate = useNavigate(); // Hook para redireccionar

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const email = formData.get('email');
        const name = formData.get('name');

        const newUser = {
            username,
            password,
            email,
            name,
        };

        console.log('Usuario:', newUser);

        // Enviar los datos al backend (o JSON Server)
        fetch(urlUsuarios, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        })
        .then((response) => {
            if (response.ok) {
                alert('¡Cuenta creada exitosamente!');
                navigate('/login'); // Redirigir al login
            } else {
                throw new Error('Error al crear la cuenta');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un problema al crear la cuenta.');
        });
    };

    return (
        <div className="register-container">
            <img 
                src="./public/Avatar.png" 
                alt="Avatar" 
                className="avatar" 
            />
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                        placeholder="Usuario" 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="Correo" 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Nombre" 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        placeholder="Contraseña" 
                    />
                </div>
                <button type="submit" className="btn-long">
                    <Link to="/login">Crear cuenta</Link>  
                </button>
            </form>
            <p className="tittle">
                <Link to="/login">¿Ya tiene cuenta?</Link>
            </p>
        </div>
    );
};

export default Register;
