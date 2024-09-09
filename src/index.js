const express = require('express');
const conectarDB = require('../configdb/db');
const cors = require('cors');



const app = express();
const puerto =  process.env.PORT || 5000;

//llamamos a nuestra funcion conectarBD

conectarDB();
app.use(cors());
app.use(express.json());

//rutas del proyecto

app.use('/api/juegos',require('../routers/juegosRutas'));
app.use('/api/clientes',require('../routers/clientesRutas'));

//ruta desde la web

app.get('/',(req, res) => {
    res.send('bienvenidos estamos desde el navegador');
});

app.listen(puerto,()=> console.log('estamos conectados desde el servidor', puerto));