import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Produtos (id INTEGER PRIMARY KEY, titulo TEXT, descricao TEXT, valor REAL)'
        )
    })
}

export async function selectProdutos(req,res) {
    openDb().then(db => {
        db.all(
            'SELECT * FROM Produtos'
        ).then(produtos=> res.json(produtos))
    })
}
export async function selectProduto(req,res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Produtos WHERE id=?',[id])
        .then(produtos=> res.json(produtos))
    })
}
export async function insertProduto(req,res) {
    let produtos = req.body;
    openDb().then(db => {
        db.run(
            'INSERT INTO Produtos (titulo, descricao, valor) VALUES (?,?,?)', [produtos.titulo, produtos.descricao, produtos.valor]
        )
    })
    res.json({
        "statuscode": 200
    })
}
export async function updateProduto(req,res) {
    let produtos = req.body;
    openDb().then(db => {
        db.run(
            'UPDATE Produtos SET titulo=?, descricao=?, valor=? WHERE id=? ', [produtos.titulo, produtos.descricao, produtos.valor, produtos.id]
        )
    })
    res.json({
        "statuscode": 200
    })
}


export async function deleteProduto(req,res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Produtos WHERE id=?',[id])
        .then(res => res)
    })
    res.json({
        "statuscode": 200
    })
}