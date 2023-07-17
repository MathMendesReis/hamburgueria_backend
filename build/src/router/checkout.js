"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout_router = void 0;
const express_1 = __importDefault(require("express"));
const CheckoutController_1 = require("../controller/CheckoutController");
exports.checkout_router = express_1.default.Router();
const checkoutController = new CheckoutController_1.CheckoutController();
exports.checkout_router.get("/", checkoutController.checkout);
