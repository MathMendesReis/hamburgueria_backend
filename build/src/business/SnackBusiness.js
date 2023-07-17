"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackBusiness = void 0;
const SnackDataBase_1 = require("../database/SnackDataBase");
const NotFoundError_1 = require("../error/NotFoundError");
class SnackBusiness {
    constructor() {
        this.snackDataBase = new SnackDataBase_1.SnackDataBase();
    }
    getAllSnacks(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.snackDataBase.getAllSnacks(input);
            if (result.length === 0) {
                throw new NotFoundError_1.NotFoundError("Recurso não encontrado.");
            }
            return result;
        });
    }
}
exports.SnackBusiness = SnackBusiness;
