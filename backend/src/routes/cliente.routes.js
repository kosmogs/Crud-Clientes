const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

const { clienteValidationRules, validar } = require('../middlewares/validator');

// Listar con paginación
router.get('/', clienteController.listarPaginado);

// Obtener uno
router.get('/:id', clienteController.obtener);

//Validaciones de campos
router.post('/', clienteValidationRules, validar, clienteController.crear);
router.put('/:id', clienteValidationRules, validar, clienteController.actualizar);

// Crear
router.post('/', clienteController.crear);

// Actualizar
router.put('/:id', clienteController.actualizar);

// Eliminar
router.delete('/:id', clienteController.eliminar);

module.exports = router;
