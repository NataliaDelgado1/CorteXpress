const express = require("express");
const router = express.Router();
const Servicio = require("../controllers/serviciosController");

router.get("/", Servicio.getServicios);
router.post("/", Servicio.createServicio);
router.put("/:id", Servicio.updateServicio);
router.delete("/:id", Servicio.deleteServicio);

module.exports = router;