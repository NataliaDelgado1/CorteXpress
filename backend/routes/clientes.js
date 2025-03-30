const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente");

// 🔹 Obtener todos los clientes
router.get("/", (req, res) => {
    Cliente.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// 🔹 Insertar un nuevo cliente
router.post("/", (req, res) => {
    const { nombre, telefono } = req.body;
    
    if (!nombre || !telefono) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    Cliente.create({ nombre, telefono }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Cliente agregado con éxito", id: result.insertId });
    });
});

module.exports = router;
