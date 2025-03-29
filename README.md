CorteXpress

CorteXpres es un sistema de reservas para barberías, desarrollado como una API REST con microservicios.
La aplicación permite gestionar clientes, citas, barberos y servicios, asegurando una experiencia eficiente
 para usuarios y administradores.

En esta primera fase, me encargué de configurar el entorno inicial del backend para el sistema CorteXpres, 
asegurando que el servidor estuviera listo para su desarrollo y conexión con la base de datos.

1.Creación del Repositorio y Configuración Inicial
Lo primero que hice fue clonar el repositorio y crear una nueva rama para trabajar de manera organizada.
Para ello, ejecuté los siguientes comandos:

git clone https://github.com/usuario/cortexpres.git
cd cortexpres
git checkout -b backend-setup
Con esto, garantizamos que cada integrante trabaje en su parte sin interferir en el código de los demás.

2.Instalación del Backend con Node.js y Express
Después, configuré un proyecto en Node.js e instalé los paquetes necesarios:

npm init -y  # Creación del package.json
npm install express dotenv cors
Express: Framework para manejar las rutas y peticiones.
Dotenv: Permite gestionar variables de entorno.
Cors: Maneja las restricciones de acceso entre dominios.

3.Creación del Servidor en Express
Luego, dentro de la carpeta src/, creé un archivo index.js con la configuración del servidor:

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
Con esto, el servidor queda configurado y listo para ejecutar.

4.Configuración del Archivo .env
Para manejar la configuración de la base de datos sin exponer datos sensibles, 
creé un archivo llamado .env dentro del proyecto con la siguiente configuración:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=cortexpres_db
También agregué .env al archivo .gitignore para evitar subirlo al repositorio.

5.Prueba del Servidor
Para verificar que todo funcionara correctamente, ejecuté:

npm start
El mensaje esperado en la terminal fue:
Servidor corriendo en http://localhost:3000

Para conectar el backend con MariaDB, creé un archivo db.js dentro de src/ con la siguiente configuración:

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.error("Error de conexión a MariaDB:", err);
        return;
    }
    console.log("Conectado a MariaDB");
});

module.exports = connection;
Esto permite que el backend pueda interactuar con la base de datos.

6.Creación de la Base de Datos en MariaDB
Para crear la base de datos, ejecuté los siguientes comandos en MariaDB:

CREATE DATABASE cortexpres_db;
USE cortexpres_db;

7.Prueba del Servidor y la Base de Datos
Para verificar que todo funcionara correctamente, ejecuté:
npm start
El mensaje en la terminal fue:
Servidor corriendo en http://localhost:3000
Conectado a MariaDB 
