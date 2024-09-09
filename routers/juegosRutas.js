const express = require('express');
const router = express.Router();
const juegoController = require('../controladores/juegoController');


//llamamos las rutas del CRUD

router.post('/', juegoController.agregarJuegos);
router.get('/', juegoController.mostrarJuegos);
router.get('/:id', juegoController.buscarJuego);
router.put('/:id', juegoController.modificarJuegos);
//router.patch('/:id', juegoController.editarJuego);
router.delete('/:id', juegoController.eliminarJuegos);


module.exports = router;