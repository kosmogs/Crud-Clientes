require('dotenv').config(); // ⬅️ 1️⃣ cargar variables de entorno

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/clientes', require('./routes/cliente.routes'));

// ⬅️ 2️⃣ usar el puerto desde .env
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
