exports.getServicios = (req, res) => {
    db.query("SELECT * FROM servicios", (err, result) => {
        if (err) res.status(500).send("Error al obtener servicios");
        else res.json(result);
    });
};
