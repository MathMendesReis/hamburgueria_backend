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
exports.CheckoutController = void 0;
const CheckoutBusiness_1 = require("./../business/CheckoutBusiness");
const zod_1 = require("zod");
const BaseError_1 = require("../error/BaseError");
class CheckoutController {
    constructor() {
        this.CheckoutBusiness = new CheckoutBusiness_1.CheckoutBusiness();
        this.checkout = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cart, customer, payment } = req.body;
                const checkout = yield this.CheckoutBusiness.checkout(cart, customer, payment);
                res.status(200).send(checkout);
            }
            catch (error) {
                if (error instanceof zod_1.ZodError) {
                    res.status(400).send(error.issues);
                }
                else if (error instanceof BaseError_1.BaseError) {
                    res.status(error.statusCode).send(error.message);
                }
                else {
                    res.status(500).send("Erro inesperado: " + error);
                }
            }
        });
    }
}
exports.CheckoutController = CheckoutController;
