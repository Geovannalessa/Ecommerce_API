// import { createTable, insertUsuario,updateUsuario,selectUsuarios,selectUsuario,deleteUsuario } from './Controllers/Usuarios.js';

import express from 'express';
const app = express();
app.use(express.json());

import routerUsuarios from './routers/UsuariosRouters.js';
app.use(routerUsuarios);

app.listen(3000, ()=>{console.log('rodando..')});