const express = require("express");
const router = express.Router();
const Cita = require("../models/cita");

// Obtener todas las citas
router.get("/", (req, res) => {
    Cita.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Insertar una nueva cita
router.post("/", (req, res) => {
    const nuevaCita = req.body;
    const { cliente_id, barbero_id, fecha, hora, servicio_id } = nuevaCita;

    if (!cliente_id || !barbero_id || !fecha || !hora || !servicio_id) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    Cita.create(nuevaCita, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Cita creada con éxito", id: result.insertId });
    });
});

module.exports = router;
