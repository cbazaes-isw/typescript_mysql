"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    static init(puerto) {
        return new Server(puerto);
    }
    public_folder() {
        const public_path = path.resolve(__dirname, '../public');
        this.app.use(express.static(public_path));
    }
    start(callback) {
        this.app.listen(this.port, callback());
        this.public_folder();
    }
}
exports.default = Server;
