const express = require("express");
const router = express.Router();
const Barbero = require("../controllers/barberosController");

router.get("/", Barbero.getBarberos);
router.post("/", Barbero.createBarbero);
router.put("/:id", Barbero.updateBarbero);
router.delete("/:id", Barbero.deleteBarbero);

module.exports = router;