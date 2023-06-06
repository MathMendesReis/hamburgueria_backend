import express from "express";
import { OderController } from "../controller/OderController";
import { OderBusiness } from "../business/OderBusiness";


export const oder_router = express.Router()

const oderController = new OderController(
)


oder_router.get("/:id",oderController.getAllOderasync)
