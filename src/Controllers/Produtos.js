import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Produtos (id INTEGER PRIMARY KEY, titulo TEXT, descricao TEXT, valor REAL)'
        )
    })
}

export async function insertProduto(produtos) {
    return openDb().then(db => {
        return db.run(
            'INSERT INTO Produtos (titulo, descricao, valor) VALUES (?,?,?)', [produtos.titulo, produtos.descricao, produtos.valor]
        )
    })
}
export async function updateProduto(produtos) {
    return openDb().then(db => {
        return db.run(
            'UPDATE Produtos SET titulo=?, descricao=?, valor=? WHERE id=? ', [produtos.titulo, produtos.descricao, produtos.valor, produtos.id]
        )
    })
}
export async function selectProdutos(produtos) {
    return openDb().then(db => {
        return db.all(
            'SELECT * FROM Produtos'
        ).then(res =>res)
    })
}
export async function selectProduto(id) {
    return openDb().then(db => {
        return db.all('SELECT * FROM Produtos WHERE id=?',[id])
        .then(res => res)
    })
}