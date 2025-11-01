import productos from "../../data/productosData";
import './Productos.css';
import FormularioProducto from "./FormularioProducto/FormularioProducto";
import { useState } from "react";

const Productos = () => {

    const [showForm,setShowForm] = useState(false);
    return (
        <>
            <h1>Mantenimiento de productos</h1>
            <button onClick={()=>setShowForm(!showForm)}>Nuevo producto</button>
            <br />
            <br />

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((p) => {
                            return(
                                <tr>
                                    <td>{p.id}</td>
                                    <td>{p.nombre}</td>
                                    <td>{p.descripcion}</td>
                                    <td>{p.categoria}</td>
                                    <td>{p.precio}</td>
                                </tr>
                            )
                        }

                        )
                    }
                </tbody>

            </table>

            {showForm && <FormularioProducto />}

        </>

    )
}
export default Productos;