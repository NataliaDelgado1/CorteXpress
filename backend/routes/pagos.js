const express = require("express");
const router = express.Router();
const Pago = require("../models/pago");

router.get("/", (req, res) => {
    Pago.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
