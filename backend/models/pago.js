const db = require("../config/db");

class Pago {
    static getAll(callback) {
        db.query("SELECT * FROM pagos", callback);
    }
}

module.exports = Pago;
