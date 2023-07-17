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
exports.CheckoutBusiness = void 0;
const CheckoutDataBase_1 = require("../database/CheckoutDataBase");
class CheckoutBusiness {
    constructor() {
        this.checkDataBase = new CheckoutDataBase_1.CheckoutBaseDataBase();
        this.checkout = (cart, customer, payment) => __awaiter(this, void 0, void 0, function* () {
            const checkoutSnacks = yield this.checkDataBase.checkoutSnacks(cart);
            const newSnacks = checkoutSnacks.map((snack) => {
                const cartItem = cart.find((item) => item.id === snack.id);
                const quantity = cartItem ? cartItem.quantity : 0;
                const price = Number(snack.price);
                const subTotal = quantity * price;
                return Object.assign(Object.assign({}, snack), { price,
                    quantity,
                    subTotal });
            });
            const createCustomer = yield this.createCustomer(customer);
            const createOrder = yield this.createOder(newSnacks, createCustomer);
            return {
                message: `Checkout completed`
            };
        });
        this.createCustomer = (customer) => __awaiter(this, void 0, void 0, function* () {
            return yield this.checkDataBase.createCustomer(customer);
        });
        this.createOder = (cart, customer) => __awaiter(this, void 0, void 0, function* () {
            return yield this.checkDataBase.createOrder(cart, customer);
        });
    }
}
exports.CheckoutBusiness = CheckoutBusiness;
