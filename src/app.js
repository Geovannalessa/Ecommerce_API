import { createTable, insertUsuario,updateUsuario,selectUsuarios,selectUsuario,deleteUsuario } from './Controllers/Usuarios.js';

import express from 'express';
const app = express();
app.use(express.json());

app.post('/usuario', function(req,res){
    insertUsuario(req.body)
    res.json({
        "statuscode":200
    })
})
app.put('/usuario', function(req,res){
    
    if(req.body && !req.body.id){
        res.json({
            "statuscode":400,
            "msg": "Você precisa informar um id"
        })
    }else{
        updateUsuario(req.body)
        res.json({
            "statuscode":200
        })
    }
})
// import router from './routers/UsuariosRouters.js';
// app.use(router);

app.listen(3000, ()=>{console.log('rodando..')});