const db = require('../config/db');

const Cliente = {};

Cliente.getPaginado = (limit, offset, result) => {
  db.query(
    'SELECT * FROM cliente LIMIT ? OFFSET ?',
    [limit, offset],
    (err, rows) => {
      if (err) return result(err);

      db.query(
        'SELECT COUNT(*) AS total FROM cliente',
        (err2, total) => {
          if (err2) return result(err2);

          result(null, {
            clientes: rows,
            total: total[0].total
          });
        }
      );
    }
  );
};

Cliente.getById = (id, result) => {
  db.query('SELECT * FROM cliente WHERE id = ?', [id], (err, res) => {
    if (err) return result(err);
    result(null, res[0]);
  });
};

Cliente.create = (data, result) => {
  db.query('INSERT INTO cliente SET ?', data, result);
};

Cliente.update = (id, data, result) => {
  db.query('UPDATE cliente SET ? WHERE id = ?', [data, id], result);
};

Cliente.delete = (id, result) => {
  db.query('DELETE FROM cliente WHERE id = ?', [id], result);
};

module.exports = Cliente;
