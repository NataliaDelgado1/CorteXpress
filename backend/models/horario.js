const db = require("../config/db");

class Horario {
    static getAll(callback) {
        db.query("SELECT * FROM horarios", callback);
    }
}

module.exports = Horario;
