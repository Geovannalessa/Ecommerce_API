import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors('*'));

import routerUsuarios from './routers/UsuariosRouters.js';
import routerProdutos from './routers/ProdutosRouter.js';
import routerCarrinhos from './routers/CarrinhosRouter.js';

app.use(routerUsuarios);
app.use(routerProdutos);
app.use(routerCarrinhos);

app.listen(3000, () => { console.log('rodando..') });
https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key:fs.readFileSync('src/SSL/code.key')

}, app
).listen(443,()=> console.log("rodando em https"))