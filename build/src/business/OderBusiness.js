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
exports.OderBusiness = void 0;
const OderDataBase_1 = require("../database/OderDataBase");
const NotFoundError_1 = require("../error/NotFoundError");
class OderBusiness {
    constructor() {
        this.oderBusiness = new OderDataBase_1.OrderDataBase();
        this.checkout = (req, res) => __awaiter(this, void 0, void 0, function* () {
        });
    }
    getAllOderasync({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const intId = parseInt(id);
            const result = yield this.oderBusiness.getAllOderasync(intId);
            if (result.length === 0) {
                throw new NotFoundError_1.NotFoundError('Recurso nao econtrado.');
            }
            return result.length > 0 ? result : `Compra não encontrada`;
        });
    }
}
exports.OderBusiness = OderBusiness;
