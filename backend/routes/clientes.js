const express = require("express");
const router = express.Router();
const Cliente = require("../controllers/clientesController");

router.get("/", Cliente.getClientes);
router.post("/", Cliente.createCliente);
router.put("/:id", Cliente.updateCliente);
router.delete("/:id", Cliente.deleteCliente);

module.exports = router;