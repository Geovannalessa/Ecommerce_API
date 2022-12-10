import express from 'express';
const app = express();
app.use(express.json());

import routerUsuarios from './routers/UsuariosRouters.js';
import routerProdutos from './routers/ProdutosRouter.js';
import routerCarrinhos from './routers/CarrinhosRouter.js';
app.use(routerUsuarios);
app.use(routerProdutos);
app.use(routerCarrinhos);
// createTable()
// app.get('/carrinhos', async(req,res)=>{
//     let carrinhos = await selectCarrinhos();
//     res.json(carrinhos)
// })
// app.get('/carrinho', async(req,res)=>{
//     let carrinho = await selectCarrinho(req.body.id);
//     res.json(carrinho)
// })
// app.post('/carrinho', (req,res)=>{
//     insertCarrinho(req.body)
//     res.json({
//         "statuscode": 200
//     })
// })
// app.put('/carrinho', (req,res)=>{
//     if(req.body && !req.body.id){
//         res.json({
//             "statuscode": 400,
//             "msg": "Precisa informar um id"
//         })
//     }else{
//         updateCarrinho(req.body)
//         res.json({
//             "statuscode": 200
//         })
//     }
// })
// app.delete('/carrinho', async(req,res)=>{
//     let carrinho = await deleteCarrinho(req.body.id);
//     res.json(carrinho)
// })
app.listen(3000, () => { console.log('rodando..') });