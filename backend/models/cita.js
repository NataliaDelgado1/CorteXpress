const db = require("../config/db");

class Cita {
    static getAll(callback) {
        db.query("SELECT * FROM citas", callback);
    }

    static getById(id, callback) {
        db.query("SELECT * FROM citas WHERE id = ?", [id], callback);
    }

    static create(data, callback) {
        const query = "INSERT INTO citas (cliente_id, barbero_id, fecha, hora) VALUES (?, ?, ?, ?)";
        db.query(query, [data.cliente_id, data.barbero_id, data.fecha, data.hora], callback);
    }

    static update(id, data, callback) {
        const query = "UPDATE citas SET cliente_id = ?, barbero_id = ?, fecha = ?, hora = ? WHERE id = ?";
        db.query(query, [data.cliente_id, data.barbero_id, data.fecha, data.hora, id], callback);
    }

    static delete(id, callback) {
        db.query("DELETE FROM citas WHERE id = ?", [id], callback);
    }
}

module.exports = Cita;