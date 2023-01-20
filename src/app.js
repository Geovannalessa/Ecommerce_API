import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
const app = express();
app.use(express.json());
// app.use(cors(opitions));
app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
},app).listen(3001, ()=> console.log("rodando em https"))

import routerUsuarios from './routers/UsuariosRouters.js';
import routerProdutos from './routers/ProdutosRouter.js';
import routerCarrinhos from './routers/CarrinhosRouter.js';

app.use(routerUsuarios);
app.use(routerProdutos);
app.use(routerCarrinhos);