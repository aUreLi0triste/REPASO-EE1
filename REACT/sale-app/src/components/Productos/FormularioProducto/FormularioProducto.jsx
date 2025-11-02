import './FormularioProducto.css';
import { useState } from 'react';

const FormularioProducto = ({onSubmit}) => {
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
        e.preventDefault();
        onSubmit(producto);
    }

    return (
        <form className='FormProducto'>
            <h2>Nuevo producto</h2>
            <label htmlFor="nombre" className='LabelProd'>Nombre:</label>
            <input className="inputProd" type="text" id="nombre" name="nombre" value={producto.nombre} onChange={(e) => setProducto({ ...producto, nombre: e.target.value })} />
            <br />
            <label htmlFor="descripcion" className='LabelProd'>Descripcion:</label>
            <input className="inputProd" type="text" id="descripcion" name="descripcion" value={producto.descripcion} onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })} />
            <br />
            <label htmlFor="categoria" className='LabelProd'>Categoria:</label>
            <input className="inputProd" type="text" id="categoria" name="categoria" value={producto.categoria} onChange={(e) => setProducto({ ...producto, categoria: e.target.value })} />
            <br />
            <label htmlFor="precio" className='LabelProd'>Precio:</label>
            <input className="inputProd" type="number" id="precio" name="precio" value={producto.precio} onChange={(e) => setProducto({ ...producto, precio: e.target.value })} />
            <br />
            <label htmlFor="imagen" className='LabelProd'>Imagen (URL):</label>
            <input className="inputProd" type="text" id="imagen" name="imagen" value={producto.imagen} onChange={(e) => setProducto({ ...producto, imagen: e.target.value })} />
            <br />
            <button onClick={(e) => handleSubmit(e)} className='botonProd'>Guardar producto</button>
        </form>
    )
}

export default FormularioProducto;