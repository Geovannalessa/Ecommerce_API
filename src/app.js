import { createTable, insertCarrinho } from './Controllers/Carrinhos.js';
import express from 'express';
const app = express();
app.use(express.json());

import routerUsuarios from './routers/UsuariosRouters.js';
import routerProdutos from './routers/ProdutosRouter.js';

app.use(routerUsuarios);
app.use(routerProdutos);

createTable()
app.post('/carrinho', (req,res)=>{
    insertCarrinho(req.body)
    res.json({
        "statuscode": 200
    })
    console.log(req.body)
})


app.listen(3000, () => { console.log('rodando..') });