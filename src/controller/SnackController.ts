import { input, inputDTOGetAllSnacks } from './../DTOs/inputGetAllSnaks.DTO';
import { SnackBusiness } from "../business/SnackBusiness";
import express, { Express, Request, Response } from "express"
import { BaseError } from "../error/BaseError";
import { ZodError } from "zod";


export class SnackController{
  constructor(private snackBusiness: SnackBusiness){
  }
  public getAllSnacks = async (req: Request, res: Response) => {
    try {
      const input = inputDTOGetAllSnacks.parse({
        snack: req.query.snack
      })

      const snacks = await this.snackBusiness.getAllSnacks(input)

      res.send(snacks)
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
