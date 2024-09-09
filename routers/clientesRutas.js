const express = require('express');
const router = express.Router();
const clienteController = require('../controladores/clienteController');


//llamamos las rutas del CRUD

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.mostrarClientes);
router.get('/:id', clienteController.buscarCliente);
router.put('/:id', clienteController.modificarClientes);
//router.patch('/:id', clienteController.editarCliente);
router.delete('/:id', clienteController.eliminarClientes);


module.exports = router;