import { CheckoutBusiness } from './../business/CheckoutBusiness';
import { Response } from "express"
import { CheckoutRequest } from "../interfaces/CheckoutRequest"
import { ZodError } from "zod"
import { BaseError } from "../error/BaseError"

export class CheckoutController {

  private CheckoutBusiness= new CheckoutBusiness()
  public checkout =async (req:CheckoutRequest, res:Response) => {
    try {
      const {cart,customer,payment} =req.body

      const checkout = await this.CheckoutBusiness.checkout(cart,customer,payment)

      res.status(200).send(checkout)

    } catch (error) {

      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
     } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
     } else {
        res.status(500).send("Erro inesperado: " + error)
     }
    }
    }


}
