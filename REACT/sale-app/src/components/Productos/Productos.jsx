import './Productos.css';
import FormularioProducto from "./FormularioProducto/FormularioProducto";
import { useState, useEffect, use } from "react";
import productosApi from '../../api/productosApi';
import { useNavigate } from 'react-router-dom';

const Productos = () => {

    const productosOriginales = productosApi.getAll();

    const [showForm, setShowForm] = useState(false);
    const [productos, setProductos] = useState(productosOriginales);
    const navigate = useNavigate();
    
    const handleOnLoad = () => {
        const productosOriginales = productosApi.getAll()
        setProductos(productosOriginales)
    }

    useEffect(() => {
        handleOnLoad() 
    }, [])
    
    const handleSubmit = (producto) => {
        productosApi.insert(producto)
        alert('Producto Agregado!')
        handleOnLoad() 
        setShowForm(!showForm)
        
    }

    const handleRegresar = () =>{
        return(
            navigate('/inicio')
        )
    }
    return (
        <>
            <h1>Mantenimiento de productos</h1>
            <button onClick={() => setShowForm(!showForm)}> + Nuevo producto</button>
            <button onClick={()=>handleRegresar()}>Regresar</button>
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
                            return (
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

            {showForm && <FormularioProducto onSubmit={handleSubmit} />}

        </>

    )
}
export default Productos;