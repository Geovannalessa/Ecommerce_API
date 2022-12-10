import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Carrinhos (id INTEGER PRIMARY KEY, usuario_id INTEGER,produto_id INTEGER,  status TEXT, FOREIGN KEY(usuario_id) REFERENCES Usuarios(id),FOREIGN KEY(produto_id) REFERENCES Produtos(id))'
        )
    })
}
export async function selectCarrinhos() {
    return openDb().then(db => {
        return db.all(
            'SELECT * FROM Carrinhos'
        ).then(res=>res)
    });
}
export async function selectCarrinho(id) {
    return openDb().then(db => {
        return db.get(
            'SELECT * FROM Carrinhos WHERE id=?',[id]
        ).then(res=>res)
    });
}
export async function insertCarrinho(carrinhos) {
    openDb().then(db => {
        db.run(
            'INSERT INTO Carrinhos ( usuario_id, produto_id,status) VALUES (?,?,?)', [carrinhos.usuario_id,carrinhos.produto_id,carrinhos.status]
        )
    });
}
export async function updateCarrinho(carrinhos) {
    openDb().then(db => {
        db.run(
            'UPDATE Carrinhos SET usuario_id=?, produto_id=?,status=? WHERE id=?', [carrinhos.usuario_id,carrinhos.produto_id,carrinhos.status,carrinhos.id]
        )
    });
}
export async function deleteCarrinho(id) {
    return openDb().then(db => {
        return db.get(
            'DELETE FROM Carrinhos WHERE id=?',[id]
        ).then(res=>res)
    });
}