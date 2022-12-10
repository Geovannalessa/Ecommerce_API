import { createTable, insertCarrinho,updateCarrinho,selectCarrinhos,selectCarrinho,deleteCarrinho } from './Controllers/Carrinhos.js';
import express from 'express';
const app = express();
app.use(express.json());

import routerUsuarios from './routers/UsuariosRouters.js';
import routerProdutos from './routers/ProdutosRouter.js';

app.use(routerUsuarios);
app.use(routerProdutos);

createTable()
app.get('/carrinhos', async(req,res)=>{
    let carrinhos = await selectCarrinhos();
    res.json(carrinhos)
})
app.get('/carrinho', async(req,res)=>{
    let carrinho = await selectCarrinho(req.body.id);
    res.json(carrinho)
})
app.post('/carrinho', (req,res)=>{
    insertCarrinho(req.body)
    res.json({
        "statuscode": 200
    })
})
app.put('/carrinho', (req,res)=>{
    if(req.body && !req.body.id){
        res.json({
            "statuscode": 400,
            "msg": "Precisa informar um id"
        })
    }else{
        updateCarrinho(req.body)
        res.json({
            "statuscode": 200
        })
    }
})
app.delete('/carrinho', async(req,res)=>{
    let carrinho = await deleteCarrinho(req.body.id);
    res.json(carrinho)
})
app.listen(3000, () => { console.log('rodando..') });