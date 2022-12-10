import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Carrinhos (id INTEGER PRIMARY KEY, usuario_id INTEGER,produto_id INTEGER,  status TEXT, FOREIGN KEY(usuario_id) REFERENCES Usuarios(id),FOREIGN KEY(produto_id) REFERENCES Produtos(id))'
        )
    })
}
export async function insertCarrinho(carrinhos) {
    openDb().then(db => {
        db.run(
            'INSERT INTO Carrinhos ( usuario_id, produto_id,status) VALUES (?,?,?)', [carrinhos.usuario_id,carrinhos.produto_id,carrinhos.status]
        )
    });
}