const express = require("express");
const router = express.Router();
const Cita = require("../models/cita");

router.get("/", (req, res) => {
    Cita.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
