const db = require("../config/db");

class Servicio {
    static getAll(callback) {
        db.query("SELECT * FROM servicios", callback);
    }

    static getById(id, callback) {
        db.query("SELECT * FROM servicios WHERE id = ?", [id], callback);
    }

    static create(data, callback) {
        const query = "INSERT INTO servicios (nombre, precio) VALUES (?, ?)";
        db.query(query, [data.nombre, data.precio], callback);
    }

    static update(id, data, callback) {
        const query = "UPDATE servicios SET nombre = ?, precio = ? WHERE id = ?";
        db.query(query, [data.nombre, data.precio, id], callback);
    }

    static delete(id, callback) {
        db.query("DELETE FROM servicios WHERE id = ?", [id], callback);
    }
}

module.exports = Servicio;