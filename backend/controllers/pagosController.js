exports.getPagos = (req, res) => {
    db.query("SELECT * FROM pagos", (err, result) => {
        if (err) res.status(500).send("Error al obtener pagos");
        else res.json(result);
    });
};

exports.createPago = (req, res) => {
    const { citaId, monto, metodo } = req.body;
    db.query("INSERT INTO pagos (citaId, monto, metodo) VALUES (?, ?, ?)", [citaId, monto, metodo], (err) => {
        if (err) res.status(500).send("Error al registrar pago");
        else res.status(201).send("Pago registrado exitosamente");
    });
};
