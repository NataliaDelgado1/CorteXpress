const express = require("express");
const router = express.Router();
const Servicio = require("../models/servicio");

router.get("/", (req, res) => {
    Servicio.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
