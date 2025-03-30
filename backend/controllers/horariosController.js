exports.getHorarios = (req, res) => {
    db.query("SELECT * FROM horarios", (err, result) => {
        if (err) res.status(500).send("Error al obtener horarios");
        else res.json(result);
    });
};

exports.createHorario = (req, res) => {
    const { barberoId, dia, horaInicio, horaFin } = req.body;
    db.query("INSERT INTO horarios (barberoId, dia, horaInicio, horaFin) VALUES (?, ?, ?, ?)", [barberoId, dia, horaInicio, horaFin], (err) => {
        if (err) res.status(500).send("Error al crear horario");
        else res.status(201).send("Horario creado exitosamente");
    });
};
