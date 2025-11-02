import { createContext, useContext, useState } from "react";
import usuarios from '../../data/usuarios';



const UserContext = createContext();

export function UserProvider({ children, value }) {
    const [user, setUser] = useState(null);

    const login = ({ usuarioInput, contraseñaInput }) => {

        const usuarioEncontrado = usuarios.find(
            (usuario) =>
                usuario.nombre.toLowerCase() === usuarioInput.toLowerCase()
                && usuario.contraseña.toLowerCase() === contraseñaInput.toLowerCase()
        );

        if (usuarioEncontrado) {
            setUser(usuarioEncontrado);
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
            return true;
        } else {
            return false;
        }

        const logout = () => {
            setUser(null);
            localStorage.removeItem('usuarioLogueado');

        }

        const value = {
            user,
            login,
            logout
        };

        return <UserContext.Provider value={value}>
            {children}
            </UserContext.Provider>;
    }
    
}

export function useUser() {
    const context = useContext(UserContext);
    return context;
}