const express = require("express");
const router = express.Router();
const Cita = require("../controllers/citasController");

router.get("/", Cita.getCitas);
router.post("/", Cita.createCita);
router.put("/:id", Cita.updateCita);
router.delete("/:id", Cita.deleteCita);

module.exports = router;