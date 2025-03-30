const db = require("../config/db");

class Barbero {
    static getAll(callback) {
        db.query("SELECT * FROM barberos", callback);
    }
}

module.exports = Barbero;
