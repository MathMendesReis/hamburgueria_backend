import { SnackBusiness } from "../business/SnackBusiness";
import express, { Express, Request, Response } from "express"
import { BaseError } from "../error/BaseError";


export class SnackController{
  constructor(private snackBusiness: SnackBusiness){
  }
  public getAllSnacks = async (req: Request, res: Response) => {
    try {
      const { message } = req.body

      const snacks = await this.snackBusiness.getAllSnacks()

      res.send(snacks)
    } catch (error) {
      console.log(error)

     if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
     } else {
        res.status(500).send("Erro inesperado")
     }
    }
    }

}
