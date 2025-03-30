require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rutas para cada recurso
const clienteRoutes = require("./routes/clientes");
const barberoRoutes = require("./routes/barberos");
const servicioRoutes = require("./routes/servicios");
const citaRoutes = require("./routes/citas");
const pagoRoutes = require("./routes/pagos");
const horarioRoutes = require("./routes/horarios");

// Middleware para manejar las rutas
app.use("/clientes", clienteRoutes);
app.use("/barberos", barberoRoutes);
app.use("/servicios", servicioRoutes);
app.use("/citas", citaRoutes);
app.use("/pagos", pagoRoutes);
app.use("/horarios", horarioRoutes);

// Ruta principal
app.get("/", (req, res) => {
    res.send("¡Bienvenido a CorteXpres API!");
});

// Ruta de prueba para la base de datos
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

// Configuración para escuchar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
