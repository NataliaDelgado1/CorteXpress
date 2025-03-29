require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("¡Bienvenido a CorteXpres API!");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
