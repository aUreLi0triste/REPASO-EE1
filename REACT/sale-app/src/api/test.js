// let listaPrincipal = []

// const getObjeto = () => {
//     return listaPrincipal;
// }

// const addObjeto = (objeto) => {
//     listaPrincipal.push(objeto);
// }

// export default {getObjeto, addObjeto};

let contador = 0;
const getObjeto = () => {
    return contador;
}   
const addObjeto = () => {
    contador++;
}

const objeto = {getObjeto, addObjeto};

export default objeto