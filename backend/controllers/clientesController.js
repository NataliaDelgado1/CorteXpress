const db = require("../config/db");

// Obtener todos los clientes
exports.getClientes = (req, res) => {
    db.query("SELECT * FROM clientes", (err, result) => {
        if (err) return res.status(500).send("Error al obtener los clientes");
        res.json(result);
    });
};

// Obtener un cliente por ID
exports.getClienteById = (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM clientes WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).send("Error al obtener el cliente");
        if (result.length === 0) return res.status(404).send("Cliente no encontrado");
        res.json(result[0]);
    });
};

// Crear un nuevo cliente
exports.createCliente = (req, res) => {
    const { nombre, telefono } = req.body;
    if (!nombre || !telefono) return res.status(400).send("Faltan campos requeridos");

    db.query("INSERT INTO clientes (nombre, telefono) VALUES (?, ?)", [nombre, telefono], (err, result) => {
        if (err) return res.status(500).send("Error al crear el cliente");
        res.status(201).json({ message: "Cliente creado exitosamente", id: result.insertId });
    });
};

// Actualizar un cliente existente
exports.updateCliente = (req, res) => {
    const { id } = req.params;
    const { nombre, telefono } = req.body;

    db.query("UPDATE clientes SET nombre = ?, telefono = ? WHERE id = ?", [nombre, telefono, id], (err, result) => {
        if (err) return res.status(500).send("Error al actualizar el cliente");
        if (result.affectedRows === 0) return res.status(404).send("Cliente no encontrado");
        res.send("Cliente actualizado exitosamente");
    });
};

// Eliminar un cliente
exports.deleteCliente = (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM clientes WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).send("Error al eliminar el cliente");
        if (result.affectedRows === 0) return res.status(404).send("Cliente no encontrado");
        res.send("Cliente eliminado exitosamente");
    });
};