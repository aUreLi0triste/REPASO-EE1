import './FormularioProducto.css';
import { useState } from 'react';

const FormularioProducto = () => { 
    const productoDefault = {
        id: 0,
        nombre: "",
        descripcion: "",
        categoria: "",
        precio: 0,
        imagen: ""
    }

    const [producto, setProducto] = useState(productoDefault);

    const handleSubmit = (e) => {
        alert(JSON.stringify(producto));
        e.preventDefault();


    }

    return(
        <form action="">
            <h2>Nuevo producto</h2>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={producto.nombre} onChange={(e) => setProducto({...producto, nombre: e.target.value})}/>
            <br />
            <label htmlFor="descripcion">Descripcion:</label>
            <input type="text" id="descripcion" name="descripcion" value={producto.descripcion} onChange={(e) => setProducto({...producto, descripcion: e.target.value})} />
            <br />
            <label htmlFor="categoria">Categoria:</label>
            <input type="text" id="categoria" name="categoria" value={producto.categoria} onChange={(e) => setProducto({...producto, categoria: e.target.value})}/>
            <br />
            <label htmlFor="precio">Precio:</label>
            <input type="number" id="precio" name="precio" value={producto.precio}  onChange={(e) => setProducto({...producto, precio: e.target.value})}/>
            <br />
            <label htmlFor="imagen">Imagen (URL):</label>
            <input type="text" id="imagen" name="imagen" value={producto.imagen} onChange={(e) => setProducto({...producto, imagen: e.target.value})}/>
            <br />
            <button onClick={()=>handleSubmit()}>Guardar producto</button>
        </form>
    )
}

export default FormularioProducto;