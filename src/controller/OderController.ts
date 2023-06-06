import {Request,Response} from 'express'
import { ZodError } from 'zod'
import { BaseError } from '../error/BaseError'
import { OderBusiness } from '../business/OderBusiness'
import { inputOrderSchemma } from '../DTOs/inputGetOrder.DTO'
import { CheckoutRequest } from '../interfaces/CheckoutRequest'

export class OderController {
  private oderBusiness=new OderBusiness()

  public getAllOderasync = async (req:Request, res:Response) => {
    try {
      const input = inputOrderSchemma.parse({
        id:req.params.id
      })

      const response = await this.oderBusiness.getAllOderasync(input)

      res.status(200).send(response)
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
     } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
     } else {
        res.status(500).send("Erro inesperado")
     }
    }
    }

  public checkout =async (req:CheckoutRequest, res:Response) => {
    try {
      const {cart,customer,payment} =req.body

    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
     } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
     } else {
        res.status(500).send("Erro inesperado")
     }
    }
    }
  }
