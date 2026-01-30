import axios from 'axios';

const API_URL = 'http://localhost:3000/api/clientes';

//Conexiones de Apis
export const getClientes = () => axios.get(API_URL);
export const createCliente = data => axios.post(API_URL, data);
export const deleteCliente = id => axios.delete(`${API_URL}/${id}`);
