const db = require("../config/db");

exports.getHorarios = (req, res) => {
    db.query("SELECT * FROM horarios", (err, result) => {
        if (err) res.status(500).send("Error al obtener horarios");
        else res.json(result);
    });
};

exports.createHorario = (req, res) => {
    const { dia, hora_inicio, hora_fin } = req.body;
    db.query("INSERT INTO horarios (dia, hora_inicio, hora_fin) VALUES (?, ?, ?)",
        [dia, hora_inicio, hora_fin],
        (err) => {
            if (err) res.status(500).send("Error al crear horario");
            else res.status(201).send("Horario creado exitosamente");
        });
};

exports.updateHorario = (req, res) => {
    const { id } = req.params;
    const { dia, hora_inicio, hora_fin } = req.body;
    db.query("UPDATE horarios SET dia = ?, hora_inicio = ?, hora_fin = ? WHERE id = ?",
        [dia, hora_inicio, hora_fin, id],
        (err) => {
            if (err) res.status(500).send("Error al actualizar horario");
            else res.send("Horario actualizado exitosamente");
        });
};

exports.deleteHorario = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM horarios WHERE id = ?", [id], (err) => {
        if (err) res.status(500).send("Error al eliminar horario");
        else res.send("Horario eliminado exitosamente");
    });
};