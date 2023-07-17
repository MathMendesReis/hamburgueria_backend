"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snacks_router = void 0;
const express_1 = __importDefault(require("express"));
const SnackController_1 = require("../controller/SnackController");
const SnackBusiness_1 = require("../business/SnackBusiness");
exports.snacks_router = express_1.default.Router();
const snackController = new SnackController_1.SnackController(new SnackBusiness_1.SnackBusiness());
exports.snacks_router.get("/", snackController.getAllSnacks);
