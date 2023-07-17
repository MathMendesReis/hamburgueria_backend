"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oder_router = void 0;
const express_1 = __importDefault(require("express"));
const OderController_1 = require("../controller/OderController");
exports.oder_router = express_1.default.Router();
const oderController = new OderController_1.OderController();
exports.oder_router.get("/:id", oderController.getAllOderasync);
