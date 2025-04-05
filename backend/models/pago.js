const db = require("../config/db");

class Pago {
    static getAll(callback) {
        db.query("SELECT * FROM pagos", callback);
    }

    static getById(id, callback) {
        db.query("SELECT * FROM pagos WHERE id = ?", [id], callback);
    }

    static create(data, callback) {
        const query = "INSERT INTO pagos (cita_id, monto, metodo_pago) VALUES (?, ?, ?)";
        db.query(query, [data.cita_id, data.monto, data.metodo_pago], callback);
    }

    static update(id, data, callback) {
        const query = "UPDATE pagos SET cita_id = ?, monto = ?, metodo_pago = ? WHERE id = ?";
        db.query(query, [data.cita_id, data.monto, data.metodo_pago, id], callback);
    }

    static delete(id, callback) {
        db.query("DELETE FROM pagos WHERE id = ?", [id], callback);
    }
}

module.exports = Pago;