import { type } from 'os'
import z from 'zod'

export type input = {
  snack:string
}

export const inputDTOGetAllSnacks = z.object({
  snack:z.string().nonempty()
}).transform((data) =>data as input)
