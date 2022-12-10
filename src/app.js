import express from 'express';
const app = express();
app.use(express.json());

import routerUsuarios from './routers/UsuariosRouters.js';
import routerProdutos from './routers/ProdutosRouter.js';

app.use(routerUsuarios);
app.use(routerProdutos);
// createTable();
// app.get('/produtos', async (req,res)=>{
//    let produtos = await selectProdutos();
//     res.json(produtos)
// })
// app.get('/produto', async (req,res)=>{
//     let produto = await selectProduto(req.body.id);
//      res.json(produto)
//  })
// //adicionar um produto
// app.post('/produto', (req,res)=>{
//     insertProduto(req.body)
//     res.json({
//         "statusCode":200
//     })
// })
// //alterando produto pelo id
// app.put('/produto', (req,res)=>{
//     if(req.body && !req.body.id){
//         res.json({
//             "statusCode":400,
//             "msg": "precisa informar o id"

//         })
//     }else{
//         updateProduto(req.body)
//         res.json({
//             "statusCode":200
//         })
//     }
// })
// //remover produto pelo id
// app.delete('/produto', async (req,res)=>{
//     let produto = await deleteProduto(req.body.id);
//      res.json(produto)
//  })
app.listen(3000, ()=>{console.log('rodando..')});