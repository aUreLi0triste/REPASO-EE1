import express from 'express';
import productoRouter from './src/routes/producto.js';

const app = express();

app.get('/', (req, resp) => { //si hay solo una barra es la raiz
    return resp.json({ mensaje: 'Hola mundo desde express', code: 200 });
});

app.use('/producto', productoRouter); //define un endpoint para productos


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});