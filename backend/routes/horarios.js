const express = require("express");
const router = express.Router();
const Horario = require("../models/horario");

router.get("/", (req, res) => {
    Horario.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        // Formatear fecha antes de enviarla al cliente
        const formattedResults = results.map(horario => ({
            ...horario,
            fecha: horario.fecha.toISOString().split("T")[0] // Convierte la fecha a YYYY-MM-DD
        }));

        res.json(formattedResults);
    });
});

module.exports = router;
