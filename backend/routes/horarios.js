const express = require("express");
const router = express.Router();
const Horario = require("../models/horario");

router.get("/", (req, res) => {
    Horario.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
