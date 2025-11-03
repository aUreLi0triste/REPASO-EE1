import repository from "../repositories/producto.js";

const findAll = (req, resp) => {
    const respuesta = repository.findAll();
    return resp.status(200).json(respuesta);
}

const controller = {
    findAll
}

export default controller;
