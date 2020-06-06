// importar a dependencia do SQLite3
const sqlite3 = require("sqlite3").verbose()

// criar objetco que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*
utilizado no inicio da criacao do banco
// utilizar o objeto de banco de dados para nossas operações
db.serialize( () => {

     // teste update
     db.all(`UPDATE places set image = "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 where id=3"`, function(err, rows) {
    if(err) {
        return console.log(err)
    }

    console.log("Aqui estão seus registros: ")
    console.log(rows)
    })

    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );      
    `)

    // inserir dados na  tabela
    const query = `
        INSERT INTO places (
           image,
           name,
           address,
           address2,
           state,
           city,
           items
        ) VALUES (?,?,?,?,?,?,?)
    `
const values = [
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "Papersider",
    "Guilherme Gemballa, Jardim América",
    "N. 260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis e Papelão"
]
    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    // db.run(query, values, afterInsertData)    

    // consultar dados na tabela
    db.all(`select * from places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })

    // deletar um dado na tabela
    
    db.run(`DELETE FROM places WHERE ID = ?`, [1], function(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso!")
    })
    

})

*/