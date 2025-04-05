const db = require("../config/db");

class Barbero {
    static getAll(callback) {
        db.query("SELECT * FROM barberos", callback);
    }

    static getById(id, callback) {
        db.query("SELECT * FROM barberos WHERE id = ?", [id], callback);
    }

    static create(data, callback) {
        const query = "INSERT INTO barberos (nombre, especialidad) VALUES (?, ?)";
        db.query(query, [data.nombre, data.especialidad], callback);
    }

    static update(id, data, callback) {
        const query = "UPDATE barberos SET nombre = ?, especialidad = ? WHERE id = ?";
        db.query(query, [data.nombre, data.especialidad, id], callback);
    }

    static delete(id, callback) {
        db.query("DELETE FROM barberos WHERE id = ?", [id], callback);
    }
}

module.exports = Barbero;