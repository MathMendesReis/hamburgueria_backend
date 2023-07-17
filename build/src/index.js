"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const snacks_1 = require("./router/snacks");
const oder_1 = require("./router/oder");
const checkout_1 = require("./router/checkout");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.get("/", (req, res) => {
    res.status(200).send("ola mundo");
});
app.use("/snacks", snacks_1.snacks_router);
app.use("/oders", oder_1.oder_router);
app.use('/checkout', checkout_1.checkout_router);
