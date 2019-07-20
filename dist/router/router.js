"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (request, response) => {
    const query = `
        select *
        from heroes
    `;
    mysql_1.default.query(query, (error, result) => {
        if (error) {
            return response.status(400).json({
                ok: false,
                error
            });
        }
        return response.json({
            ok: true,
            result
        });
    });
});
router.get('/heroes/:id', (request, response) => {
    const id = request.params.id;
    const id_escapado = mysql_1.default.instance.cnn.escape(id);
    const query = `
        select *
        from heroes
        where id = ${id_escapado}
    `;
    mysql_1.default.query(query, (error, result) => {
        if (error) {
            return response.status(400).json({
                ok: false,
                error
            });
        }
        return response.json({
            ok: true,
            result: result[0]
        });
    });
});
exports.default = router;
