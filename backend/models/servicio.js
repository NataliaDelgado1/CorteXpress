const db = require("../config/db");

class Servicio {
    static getAll(callback) {
        db.query("SELECT * FROM servicios", callback);
    }
}

module.exports = Servicio;
