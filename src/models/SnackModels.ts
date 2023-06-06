export interface outputSnacks{
    id: string,
    snack: string,
    name: string,
    description: string,
    price: number,
    image: string,
    createdAt: Date,
    updatedAt: Date
}

export class SnackModels {
  constructor(
    id: string,
    snack: string,
    name: string,
    description: string,
    price: number,
    image: string,
    createdAt: Date,
    updatedAt: Date
  ){}
}
