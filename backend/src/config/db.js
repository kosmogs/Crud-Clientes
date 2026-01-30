const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'kosmolito',
  password: 'Terraria20233#',
  database: 'crud_clientes'
});

db.connect(err => {
  if (err) {
    console.error('Error conexión DB:', err);
    return;
  }
  console.log('MySQL conectado');
});

module.exports = db;
