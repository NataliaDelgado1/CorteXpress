const express = require("express");
const router = express.Router();
const Pago = require("../models/pago");

// Obtener todos los pagos
router.get("/", (req, res) => {
    Pago.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// Crear un nuevo pago 
router.post("/", (req, res) => {
    const { citaId, monto, metodo } = req.body;
    
    if (!citaId || !monto || !metodo) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const nuevoPago = { citaId, monto, metodo };

    Pago.create(nuevoPago, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ mensaje: "Pago registrado exitosamente", id: result.insertId });
    });
});

module.exports = router;
