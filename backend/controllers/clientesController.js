const db = require("../config/db");

exports.getClientes = (req, res) => {
    db.query("SELECT * FROM clientes", (err, result) => {
        if (err) res.status(500).send("Error al obtener clientes");
        else res.json(result);
    });
};

exports.createCliente = (req, res) => {
    const { nombre, telefono } = req.body;
    db.query("INSERT INTO clientes (nombre, telefono) VALUES (?, ?)", [nombre, telefono], (err) => {
        if (err) res.status(500).send("Error al crear cliente");
        else res.status(201).send("Cliente creado exitosamente");
    });
};

exports.updateCliente = (req, res) => {
    const { id } = req.params;
    const { nombre, telefono } = req.body;
    db.query("UPDATE clientes SET nombre=?, telefono=? WHERE id=?", [nombre, telefono, id], (err) => {
        if (err) res.status(500).send("Error al actualizar cliente");
        else res.send("Cliente actualizado exitosamente");
    });
};

exports.deleteCliente = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM clientes WHERE id=?", [id], (err) => {
        if (err) res.status(500).send("Error al eliminar cliente");
        else res.send("Cliente eliminado exitosamente");
    });
};
