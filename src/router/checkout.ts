import express from "express";
import { SnackController } from "../controller/SnackController";
import { SnackBusiness } from "../business/SnackBusiness";
import { SnackDataBase } from "../database/SnackDataBase";
import { CheckoutController } from "../controller/CheckoutController";


export const checkout_router = express.Router()

const checkoutController = new CheckoutController(

)


checkout_router.get("/",checkoutController.checkout)
