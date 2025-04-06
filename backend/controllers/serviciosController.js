const db = require("../config/db");

exports.getServicios = (req, res) => {
    db.query("SELECT * FROM servicios", (err, result) => {
        if (err) res.status(500).send("Error al obtener servicios");
        else res.json(result);
    });
};

exports.createServicio = (req, res) => {
    const { nombre, precio } = req.body;
    db.query("INSERT INTO servicios (nombre, precio) VALUES (?, ?)", [nombre, precio], (err) => {
        if (err) res.status(500).send("Error al crear servicio");
        else res.status(201).send("Servicio creado exitosamente");
    });
};

exports.updateServicio = (req, res) => {
    const { id } = req.params;
    const { nombre, precio } = req.body;
    db.query("UPDATE servicios SET nombre = ?, precio = ? WHERE id = ?", [nombre, precio, id], (err) => {
        if (err) res.status(500).send("Error al actualizar servicio");
        else res.send("Servicio actualizado exitosamente");
    });
};

exports.deleteServicio = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM servicios WHERE id = ?", [id], (err) => {
        if (err) res.status(500).send("Error al eliminar servicio");
        else res.send("Servicio eliminado exitosamente");
    });
};