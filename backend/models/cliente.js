const db = require("../config/db");

class Cliente {
    static getAll(callback) {
        db.query("SELECT * FROM clientes", callback);
    }

    
    static create(data, callback) {
        const query = "INSERT INTO clientes (nombre, telefono) VALUES (?, ?)";
        db.query(query, [data.nombre, data.telefono], callback);
    }
}

module.exports = Cliente;
