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
node index.js 
El mensaje en la terminal fue:
Servidor corriendo en http://localhost:3000
Conectado a MariaDB 
---------------------------------------------------------------------
Documentacion Edith
1.Ingrese a la base de datos corteXpres con su respectiva contraseña y agregue 
las 6 tablas requeridas:
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL
);

CREATE TABLE barberos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL
);

CREATE TABLE servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    barbero_id INT,
    servicio_id INT,
    fecha DATETIME NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (barbero_id) REFERENCES barberos(id),
    FOREIGN KEY (servicio_id) REFERENCES servicios(id)
);

CREATE TABLE pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cita_id INT,
    monto DECIMAL(10,2) NOT NULL,
    metodo_pago VARCHAR(50) NOT NULL,
    FOREIGN KEY (cita_id) REFERENCES citas(id)
);

CREATE TABLE horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    barbero_id INT,
    dia VARCHAR(20) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    FOREIGN KEY (barbero_id) REFERENCES barberos(id)
);

2. 
Implemente los modelos en Node.js para que interactuen con la base de datos, para esto
en la carpeta backend cree una carpeta llama models.
Dentro de la carpeta models cree archivos para cada usando el comando: touch cliente.js barbero.js servicio.js cita.js pago.js horario.js
Posteriormente agregué codigo a los diferentes archivos creados anteriormente para cada tabla.
3. implementar los endpoints rest

 Cree rutas en Express para manejar las solicitudes HTTP, por lo cual dentro de la carpeta
backend creo otra carpeta llamada routes.
Creo archivos de rutas con el comando: touch clientes.js barberos.js servicios.js citas.js pagos.js horarios.js

Agrego codigo base a cada archivo creado anteriormente, modifico index.js paraa incluir
las rutas: const clienteRoutes = require("./routes/clientes");
app.use("/clientes", clienteRoutes);

4. documentacion api con swagger

configuro Swagger para documentar los endpoints
debo instalar Swagger con el comando: npm install swagger-ui-express
DEntro de la carpeta backend/config creo un archivo llamado swagger.json en donde le agrego
la documentacion de todaas las tablas correspondientes.

Modifico el archivo index.js para incluir swagger con estas lineas de coodigo:
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Documentacion Santiago Urbano


1-Para manejar la lógica de negocio de la API, creé los controllers en la carpeta backend/controllers/. 
Aquí están las funciones que interactúan con la base de datos.

Por ejemplo, en clientesController.js, definí un método para obtener los clientes de la base de datos:

const db = require("../config/db");

exports.obtenerClientes = (req, res) => {
    db.query("SELECT * FROM clientes", (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
};
Hice lo mismo para los demás recursos, como barberos, citas, servicios y pagos.
2-Para que el backend funcione en un contenedor Docker, creé el archivo Dockerfile dentro de la carpeta backend/.

Este es el contenido del archivo:

# Imagen base de Node.js
FROM node:18  

# Establecer directorio de trabajo
WORKDIR /app  

# Copiar dependencias
COPY package*.json ./  
RUN npm install  

# Copiar el resto de los archivos
COPY . .  

# Exponer el puerto de la API
# EXPOSE 3000  

Comando para iniciar el servidor
CMD ["node", "index.js"]
Con esto, el backend puede ejecutarse en Docker de manera aislada.
Para comprobar que los endpoints funcionaban correctamente, usé la documentación en Swagger, que ya estaba configurada.

Ingresé a:
http://localhost:3000/api-docs

Desde ahí, pude probar las solicitudes y asegurarme de que el backend estaba respondiendo bien.
3- realice algunos cambios dentro de las tablas de la base de datos , como 
el nombre de la columna dia y tipo de dato tambien de la tabla citas el nombre de la columna metodo_pago
a metodo de la tabla pagos.
4-Agregue algunas configuraciones necesarias de POST , en los archivos models y routes
5-por último probe en la direccion de pagina y los resultados fueron satisfactorios. 
------------------------------------------------------------------------------------------------------------------
SEGUNDA ENTREGA 
Natalia Arcos Delgado
cree una nueva rama, y realicé algunos cambios como:
1-Eliminé la carpeta docker, y moví sus archicos a la carpeta backend ya que en él tenia el archivo docker compose y en el archivo 
backend estaba dockerfile y env. entonces decidimos unirlos.
2-De esta manera continué configurando entonces docker-compose.yml ya que necesitaba unir al docker la api.
3-Configuré el docker,cambiando su nombre. 
4-luego eliminé algunos datos que habiamos ingresado a la base de datos como prueba y exporté. 
5-Por último agregué las configuraciones necesarias en el archivo swagger para poder agregar put,delete y post en algunas tablas como también organizarlas.
6-comprobe su funcionamiento y la respuesta fue satisfactoria.
