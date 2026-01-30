# 📦 Proyecto Full Stack: Express.js + React + MySQL

Este proyecto es una **aplicación web full stack** construida con **Express.js** en el backend, **React** en el frontend y **MySQL** como base de datos. El foco principal fue el **módulo de Clientes**, resolviendo problemas reales de listado, creación y **paginación correcta**.

---

## 🎯 Objetivo del Proyecto

* Crear una API REST con Express
* Conectar MySQL usando una capa de base de datos
* Consumir la API desde React con Axios
* Implementar un CRUD de Clientes
* Resolver errores de paginación y renderizado
* Mantener una estructura clara y escalable

---

## 🧠 Tecnologías Utilizadas

### Backend

* Node.js
* Express.js
* MySQL
* mysql2
* CORS

### Frontend

* React
* Axios
* Bootstrap
* Hooks (`useState`, `useEffect`, `useCallback`)

---

## 🗂️ Estructura del Proyecto

### 📁 Backend (Express)

```
backend/
│── src/
│   │── controllers/
│   │   └── cliente.controller.js
│   │── routes/
│   │   └── cliente.routes.js
│   │── models/
│   │   └── cliente.model.js
│   │── database/
│   │   └── db.js
│   │── app.js
│── server.js
│── package.json
```

### 📁 Frontend (React)

```
frontend/
│── src/
│   │── api/
│   │   └── clientes.api.js
│   │── components/
│   │   └── Clientes.jsx
│   │── App.jsx
│   │── main.jsx
│── package.json
```

---

## 🔌 Backend – API de Clientes

### Rutas

| Método | Endpoint            | Descripción                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/clientes`     | Obtener clientes paginados |
| POST   | `/api/clientes`     | Crear cliente              |
| DELETE | `/api/clientes/:id` | Eliminar cliente           |

---

### 📄 Controlador (`cliente.controller.js`)

* Maneja la lógica del negocio
* Recibe `page` y `limit` por query
* Calcula `offset`
* Retorna datos + total de registros

La paginación **se hace en el backend**, evitando errores en React.

Respuesta de la API:

```json
{
  "data": [...],
  "total": 25,
  "page": 1,
  "lastPage": 3
}
```

---

## 🎨 Frontend – React

### 📄 Archivo API (`clientes.api.js`)

Centraliza todas las llamadas HTTP:

```js
import axios from 'axios';

const API = 'http://localhost:3001/api/clientes';

export const getClientes = (page, limit) =>
  axios.get(`${API}?page=${page}&limit=${limit}`);

export const createCliente = (cliente) =>
  axios.post(API, cliente);

export const deleteCliente = (id) =>
  axios.delete(`${API}/${id}`);
```

---

### 📄 Componente `Clientes.jsx`

Estado manejado:

* `clientes`
* `page`
* `lastPage`
* `loading`

Funcionalidades:

* Carga inicial de clientes
* Recarga automática al crear o eliminar
* Botones de paginación dinámicos

---

## 🐞 Problemas que se Resolvieron

✔ Los clientes nuevos no aparecían en la tabla
✔ La paginación mostraba solo 5 registros
✔ El botón "Siguiente" no aparecía
✔ URLs inconsistentes en Axios
✔ Estados desincronizados entre backend y frontend

La solución fue **unificar la paginación en backend** y consumir correctamente `total` y `lastPage`.

---

## ▶️ Cómo Ejecutar el Proyecto

### Backend

```bash
cd backend
npm install
npm run dev
```

Servidor:

```
http://localhost:3001
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```
http://localhost:3000
```

---

## 📌 Buenas Prácticas Aplicadas

* Separación por capas (routes, controllers, models)
* Axios centralizado
* Paginación desde backend
* Uso correcto de hooks
* Código limpio y reutilizable

---

## 🚀 Próximas Mejoras

* ✏️ Editar clientes estado
* 🔍 Buscador por filtros
* 🔐 Autenticación y roles

---

## 👨‍💻 Juan Jose Gomez Quintero

Proyecto desarrollado como práctica **Full Stack con Express, React y MySQL**, resolviendo problemas reales de desarrollo.

