const express = require("express");
const router = express.Router();
const Barbero = require("../models/barbero");

router.get("/", (req, res) => {
    Barbero.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
