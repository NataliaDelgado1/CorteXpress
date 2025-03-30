const db = require("../config/db");

class Horario {
    static getAll(callback) {
        db.query("SELECT id, barbero_id, hora_inicio, hora_fin, DATE(fecha) AS fecha FROM horarios", callback);
    }
}

module.exports = Horario;
