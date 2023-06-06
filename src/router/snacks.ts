import express from "express";
import { SnackController } from "../controller/SnackController";
import { SnackBusiness } from "../business/SnackBusiness";
import { SnackDataBase } from "../database/SnackDataBase";


export const snacks_router = express.Router()

const snackController = new SnackController(
  new SnackBusiness()
)


snacks_router.get("/",snackController.getAllSnacks)
