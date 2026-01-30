const Cliente = require('../models/cliente.model');

// LISTAR PAGINADO
exports.listarPaginado = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10; // 👈 CLAVE
  const offset = (page - 1) * limit;

  Cliente.getPaginado(limit, offset, (err, data) => {
    if (err) {
      console.error('❌ ERROR MYSQL:', err);
      return res.status(500).json({
        mensaje: 'Error al listar',
        error: err
      });
    }

    res.json({
      clientes: data.clientes,
      total: data.total,
      page
    });
  });
};

// OBTENER
exports.obtener = (req, res) => {
  Cliente.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json({ mensaje: 'Error' });
    res.json(data);
  });
};

// CREAR
exports.crear = (req, res) => {
  Cliente.create(req.body, (err, data) => {
    if (err) {
      console.error('❌ ERROR AL CREAR CLIENTE:', err);
      return res.status(500).json({
        mensaje: 'Error al crear cliente',
        error: err
      });
    }

    res.json({
      mensaje: 'Cliente creado correctamente',
      id: data.insertId
    });
  });
};


// ACTUALIZAR
exports.actualizar = (req, res) => {
  Cliente.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ mensaje: 'Error al actualizar' });
    res.json({ mensaje: 'Cliente actualizado' });
  });
};

// ELIMINAR
exports.eliminar = (req, res) => {
  Cliente.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ mensaje: 'Error al eliminar' });
    res.json({ mensaje: 'Cliente eliminado' });
  });
};
