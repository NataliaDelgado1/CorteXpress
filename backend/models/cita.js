const db = require("../config/db");

class Cita {
    static getAll(callback) {
        db.query("SELECT * FROM citas", callback);
    }

    static create(cita, callback) {
        const { cliente_id, barbero_id, fecha, hora, servicio_id } = cita;
        db.query(
            "INSERT INTO citas (cliente_id, barbero_id, fecha, hora, servicio_id) VALUES (?, ?, ?, ?, ?)",
            [cliente_id, barbero_id, fecha, hora, servicio_id],
            callback
        );
    }
}

module.exports = Cita;
