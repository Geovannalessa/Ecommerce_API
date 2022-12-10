import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT)'
        )
    })
}

//rotas get checar se é com usuarios ou usuario////selectUsuarios pq essa função irá mostrar todos os usuarios da tabela
export async function selectUsuarios(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM Usuarios')
                .then(usuarios => res)
        })
}
//busca por id
export async function selectUsuario(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.all('SELECT * FROM Usuarios WHERE id=?', [id])
                .then(usuarios => res)
        })
}


//InsertUsuario está no singular porque vai adicionar um Usuario na tabela Usuarios.
export async function insertUsuario(usuarios) {
    // let usuarios = req.body;
    openDb()
        .then(db => {
            db.run('INSERT INTO Usuarios (nome, email, senha) VALUES (?,?,?)', [usuarios.nome, usuarios.email, usuarios.senha])
        });
    // res.json({
    //     "statuscode": 200
    // })
}
export async function updateUsuario(usuarios) {
    // let usuarios = req.body;
    openDb()
        .then(db => {
            db.run('UPDATE Usuarios SET nome=?, email=?, senha=? WHERE id=?', [usuarios.nome, usuarios.email, usuarios.senha, usuarios.id])
        });
   
}

export async function deleteUsuario(req, res) {
    let usuarios = req.body;
    openDb()
        .then(db => {
            db.all('DELETE * FROM Usuarios WHERE id=?', [id])
                .then(res => res)
        });
    res.json({
        "statuscode": 200
    })
}