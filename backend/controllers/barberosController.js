const db = require("../config/db");

exports.getBarberos = (req, res) => {
    db.query("SELECT * FROM barberos", (err, result) => {
        if (err) res.status(500).send("Error al obtener barberos");
        else res.json(result);
    });
};

exports.createBarbero = (req, res) => {
    const { nombre, experiencia } = req.body;
    db.query("INSERT INTO barberos (nombre, experiencia) VALUES (?, ?)", [nombre, experiencia], (err) => {
        if (err) res.status(500).send("Error al crear barbero");
        else res.status(201).send("Barbero creado exitosamente");
    });
};

exports.updateBarbero = (req, res) => {
    const { id } = req.params;
    const { nombre, experiencia } = req.body;
    db.query("UPDATE barberos SET nombre = ?, experiencia = ? WHERE id = ?", [nombre, experiencia, id], (err) => {
        if (err) res.status(500).send("Error al actualizar barbero");
        else res.send("Barbero actualizado exitosamente");
    });
};

exports.deleteBarbero = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM barberos WHERE id = ?", [id], (err) => {
        if (err) res.status(500).send("Error al eliminar barbero");
        else res.send("Barbero eliminado exitosamente");
    });
};