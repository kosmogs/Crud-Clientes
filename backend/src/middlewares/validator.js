// src/middlewares/validator.js
const { body, validationResult } = require('express-validator');

const clienteValidationRules = [
    body('nombre').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
    body('correo').isEmail().withMessage('Correo inválido'),
    body('documento').isNumeric().isLength({ min: 6 }).withMessage('Mínimo 6 dígitos')
];

const validar = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();
    return res.status(400).json({ errores: errors.array() });
};

// IMPORTANTE: Los nombres aquí deben ser exactos
module.exports = {
    clienteValidationRules,
    validar
};