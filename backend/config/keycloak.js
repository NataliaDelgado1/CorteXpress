const session = require('express-session');
const Keycloak = require('keycloak-connect');

// Configuración de sesión para Express
const memoryStore = new session.MemoryStore();

// Configuración del cliente Keycloak
const keycloak = new Keycloak({ store: memoryStore }, {
  clientId: 'my-client', // ID del cliente en Keycloak
  bearerOnly: true,
  serverUrl: 'http://localhost:8080/', // URL de tu Keycloak
  realm: 'CorteXpress',               // Nombre del realm
  credentials: {
    secret: '88BmvdJfTdOV8qARqWZVKnQefHLWXZVi'          // Lo encuentras en la pestaña "Credentials" del cliente
  }
});

module.exports = { keycloak, memoryStore };