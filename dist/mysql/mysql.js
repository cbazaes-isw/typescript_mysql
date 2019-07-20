"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class DbContext {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'c1340393',
            password: 'wakaLA75bi',
            database: 'node_db'
        });
        this.conectarDb();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static query(query, callback) {
        this.instance.cnn.query(query, (error, results, fields) => {
            if (error) {
                console.error(error);
                return callback(error);
            }
            callback(null, results);
        });
    }
    conectarDb() {
        this.cnn.connect((err) => {
            if (err) {
                console.error(err);
            }
            this.conectado = true;
            console.log('Base de datos online.');
        });
    }
}
exports.default = DbContext;
