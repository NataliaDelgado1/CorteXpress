const express = require("express");
const router = express.Router();
const Horario = require("../controllers/horariosController");

router.get("/", Horario.getHorarios);
router.post("/", Horario.createHorario);
router.put("/:id", Horario.updateHorario);
router.delete("/:id", Horario.deleteHorario);

module.exports = router;