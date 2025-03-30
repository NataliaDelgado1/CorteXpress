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
