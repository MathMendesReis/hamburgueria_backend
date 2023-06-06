import { z } from "zod"

export interface InputOrder{
  id:string
}

export const inputOrderSchemma = z.object({
  id:z.string().nonempty()
})
