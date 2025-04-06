const db = require("../config/db");

exports.getPagos = (req, res) => {
    db.query("SELECT * FROM pagos", (err, result) => {
        if (err) res.status(500).send("Error al obtener pagos");
        else res.json(result);
    });
};

exports.createPago = (req, res) => {
    const { cita_id, monto, metodo } = req.body;
    db.query("INSERT INTO pagos (cita_id, monto, metodo) VALUES (?, ?, ?)",
        [cita_id, monto, metodo],
        (err) => {
            if (err) res.status(500).send("Error al crear pago");
            else res.status(201).send("Pago creado exitosamente");
        });
};

exports.updatePago = (req, res) => {
    const { id } = req.params;
    const { cita_id, monto, metodo } = req.body;
    db.query("UPDATE pagos SET cita_id = ?, monto = ?, metodo = ? WHERE id = ?",
        [cita_id, monto, metodo, id],
        (err) => {
            if (err) res.status(500).send("Error al actualizar pago");
            else res.send("Pago actualizado exitosamente");
        });
};

exports.deletePago = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM pagos WHERE id = ?", [id], (err) => {
        if (err) res.status(500).send("Error al eliminar pago");
        else res.send("Pago eliminado exitosamente");
    });
};