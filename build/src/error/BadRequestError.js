"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const BaseError_1 = require("./BaseError");
class BadRequestError extends BaseError_1.BaseError {
    constructor(message = "Requisição inválida" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
        super(400, message);
    }
}
exports.BadRequestError = BadRequestError;
