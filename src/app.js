const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('oioi')
})


app.listen(3000, ()=>{console.log('rodando..')})