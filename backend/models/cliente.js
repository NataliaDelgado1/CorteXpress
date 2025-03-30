const db = require("../config/db");

class Cliente {
    static getAll(callback) {
        db.query("SELECT * FROM clientes", callback);
    }
}

module.exports = Cliente;
