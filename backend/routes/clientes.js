const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente");

router.get("/", (req, res) => {
    Cliente.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
