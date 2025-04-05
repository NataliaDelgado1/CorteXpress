const db = require("../config/db");

class Horario {
    static getAll(callback) {
        db.query("SELECT * FROM horarios", callback);
    }

    static getById(id, callback) {
        db.query("SELECT * FROM horarios WHERE id = ?", [id], callback);
    }

    static create(data, callback) {
        const query = "INSERT INTO horarios (barbero_id, hora_inicio, hora_fin, fecha) VALUES (?, ?, ?, ?)";
        db.query(query, [data.barbero_id, data.hora_inicio, data.hora_fin, data.fecha], callback);
    }

    static update(id, data, callback) {
        const query = "UPDATE horarios SET barbero_id = ?, hora_inicio = ?, hora_fin = ?, fecha = ? WHERE id = ?";
        db.query(query, [data.barbero_id, data.hora_inicio, data.hora_fin, data.fecha, id], callback);
    }

    static delete(id, callback) {
        db.query("DELETE FROM horarios WHERE id = ?", [id], callback);
    }
}

module.exports = Horario;