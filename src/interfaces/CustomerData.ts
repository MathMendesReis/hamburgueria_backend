import { z } from "zod"

export interface CustomerData {
  fullName: string
  email: string
  mobile: string
  document: string
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export const  CustomerDataDTO = z.object({
  fullName: z.string().nonempty(),
  email: z.string().nonempty(),
  mobile: z.string().nonempty(),
  document: z.string().nonempty(),
  zipCode: z.string(),
  street: z.string().nonempty(),
  number: z.string().nonempty(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
}).transform((data)=>data as CustomerData)
