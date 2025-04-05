const express = require("express");
const router = express.Router();
const Pago = require("../controllers/pagosController");

router.get("/", Pago.getPagos);
router.post("/", Pago.createPago);
router.put("/:id", Pago.updatePago);
router.delete("/:id", Pago.deletePago);

module.exports = router;