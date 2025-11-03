import oProductos from "../models/producto.js";

let productos = [...oProductos];

const findAll = () => {
    return productos;
}

const repository = {
    findAll
}

export default repository;