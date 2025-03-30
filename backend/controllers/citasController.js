exports.getCitas = (req, res) => {
    db.query("SELECT * FROM citas", (err, result) => {
        if (err) res.status(500).send("Error al obtener citas");
        else res.json(result);
    });
};

exports.createCita = (req, res) => {
    const { clienteId, barberoId, fecha } = req.body;
    db.query("INSERT INTO citas (clienteId, barberoId, fecha) VALUES (?, ?, ?)", [clienteId, barberoId, fecha], (err) => {
        if (err) res.status(500).send("Error al crear cita");
        else res.status(201).send("Cita creada exitosamente");
    });
};
