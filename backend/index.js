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
const db = require("./config/db");

app.get("/test-db", (req, res) => {
    db.query("SELECT 1", (err, result) => {
        if (err) {
            res.status(500).send("Error conectando a la base de datos");
        } else {
            res.send("Conexión exitosa a la base de datos");
        }
    });
});

