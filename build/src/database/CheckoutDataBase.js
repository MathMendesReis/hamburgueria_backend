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
exports.CheckoutBaseDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class CheckoutBaseDataBase extends BaseDataBase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.checkout = () => __awaiter(this, void 0, void 0, function* () {
        });
        this.checkoutSnacks = (cart) => __awaiter(this, void 0, void 0, function* () {
            return yield BaseDataBase_1.BaseDatabase.prisma.snack.findMany({
                where: {
                    id: {
                        in: cart.map((snack) => snack.id)
                    }
                }
            });
        });
        this.createCustomer = (customer) => __awaiter(this, void 0, void 0, function* () {
            return yield BaseDataBase_1.BaseDatabase.prisma.customer.upsert({
                where: { email: customer.email },
                update: customer,
                create: customer,
            });
        });
        this.createOrder = (snacksInCart, customer) => __awaiter(this, void 0, void 0, function* () {
            const total = snacksInCart.reduce((acc, snack) => acc + snack.subTotal, 0);
            const orderCreated = yield BaseDataBase_1.BaseDatabase.prisma.order.create({
                data: {
                    total,
                    customer: {
                        connect: { id: customer.id },
                    },
                    orderItems: {
                        createMany: {
                            data: snacksInCart.map((snack) => ({
                                snackId: snack.id,
                                quantity: snack.quantity,
                                subTotal: snack.subTotal,
                            })),
                        },
                    },
                },
                include: {
                    customer: true,
                    orderItems: { include: { snack: true } },
                },
            });
            return orderCreated;
        });
    }
}
exports.CheckoutBaseDataBase = CheckoutBaseDataBase;
