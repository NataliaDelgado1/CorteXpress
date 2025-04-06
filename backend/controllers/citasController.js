const db = require("../config/db");

exports.getCitas = (req, res) => {
    db.query("SELECT * FROM citas", (err, result) => {
        if (err) res.status(500).send("Error al obtener citas");
        else res.json(result);
    });
};

exports.createCita = (req, res) => {
    const { cliente_id, barbero_id, horario_id, servicio_id } = req.body;
    db.query("INSERT INTO citas (cliente_id, barbero_id, horario_id, servicio_id) VALUES (?, ?, ?, ?)",
        [cliente_id, barbero_id, horario_id, servicio_id],
        (err) => {
            if (err) res.status(500).send("Error al crear cita");
            else res.status(201).send("Cita creada exitosamente");
        });
};

exports.updateCita = (req, res) => {
    const { id } = req.params;
    const { cliente_id, barbero_id, horario_id, servicio_id } = req.body;
    db.query("UPDATE citas SET cliente_id = ?, barbero_id = ?, horario_id = ?, servicio_id = ? WHERE id = ?",
        [cliente_id, barbero_id, horario_id, servicio_id, id],
        (err) => {
            if (err) res.status(500).send("Error al actualizar cita");
            else res.send("Cita actualizada exitosamente");
        });
};

exports.deleteCita = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM citas WHERE id = ?", [id], (err) => {
        if (err) res.status(500).send("Error al eliminar cita");
        else res.send("Cita eliminada exitosamente");
    });
};