const db = require("../config/db");

class Pago {
    // Obtener todos los pagos
    static getAll(callback) {
        db.query("SELECT * FROM pagos", (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }

    // Crear un nuevo pago 
    static create(nuevoPago, callback) {
        db.query("INSERT INTO pagos SET ?", nuevoPago, (err, result) => {
            if (err) return callback(err, null);
            callback(null, { id: result.insertId, ...nuevoPago });
        });
    }
}

module.exports = Pago;
