const db = require("../config/db");

class Cliente {
    // Obtener todos los clientes
    static getAll(callback) {
        db.query("SELECT * FROM clientes", callback);
    }

    // Obtener un cliente por ID
    static getById(id, callback) {
        db.query("SELECT * FROM clientes WHERE id = ?", [id], callback);
    }

    // Crear un nuevo cliente
    static create(data, callback) {
        const query = "INSERT INTO clientes (nombre, telefono) VALUES (?, ?)";
        db.query(query, [data.nombre, data.telefono], callback);
    }

    // Actualizar un cliente existente
    static update(id, data, callback) {
        const query = "UPDATE clientes SET nombre = ?, telefono = ? WHERE id = ?";
        db.query(query, [data.nombre, data.telefono, id], callback);
    }

    // Eliminar un cliente
    static delete(id, callback) {
        db.query("DELETE FROM clientes WHERE id = ?", [id], callback);
    }
}

module.exports = Cliente;