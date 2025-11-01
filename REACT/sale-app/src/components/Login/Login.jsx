import './Login.css'
import usuarios from '../../data/usuarios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [usuarioInput, setUsuarioInput] = useState('');
    const [contraseñaInput, setContraseñaInput] = useState('');

    const handleLogin = () => {
        const usuarioEncontrado = usuarios.find(
            (usuario) =>
                usuario.nombre.toLowerCase() === usuarioInput.toLowerCase() 
            && usuario.contraseña.toLowerCase() === contraseñaInput.toLowerCase()
        );
        if (usuarioEncontrado) {
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
            alert(`Bienvenido, ${usuarioEncontrado.nombre}!`);
            navigate('/inicio');
        } else {
            alert('Usuario o contraseña incorrectos.');
        }   
    };
    return (
        <>
            <div className="Login">
                <h1>Login Page</h1>
                <h2>Inicio de sesion</h2>
                <label>Usuario</label>
                <input type="text" placeholder="Ingrese su usuario" value={usuarioInput} onChange={(e) => setUsuarioInput(e.target.value)} />
                <br />
                <label>Contraseña</label>
                <input type="password" placeholder="Ingrese su contraseña" value={contraseñaInput} onChange={(e) => setContraseñaInput(e.target.value)}/>
                <br />
                <button onClick={()=>handleLogin()}>Iniciar Sesion</button>

            </div>


        </>

    )
}
export default Login;