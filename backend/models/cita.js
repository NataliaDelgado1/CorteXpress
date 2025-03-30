const db = require("../config/db");

class Cita {
    static getAll(callback) {
        db.query("SELECT * FROM citas", callback);
    }
}

module.exports = Cita;
