import './Login.css'
import usuarios from '../../data/usuarios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const [usuarioInput, setUsuarioInput] = useState('');
    const [contraseñaInput, setContraseñaInput] = useState('');
    const [user, login] = useUser();
    
    const handleLogin = () => {
    
        if (login(usuarioInput, contraseñaInput)) {
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