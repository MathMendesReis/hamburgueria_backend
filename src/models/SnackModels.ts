export interface outputSnacks{
    id: number,
    snack: string,
    name: string,
    description: string,
    price: any,
    image: string,
    createdAt: Date,
    updatedAt: Date
}

export class SnackModels {
  constructor(
    private snack: string,
    private name: string,
    private description: string,
    private price: number,
    private image: string,
    private createdAt: Date,
    private updatedAt: Date
  ){

  }

  public getSnack(): string {
    return this.snack;
  }
  public getName(): string {
    return this.name;
  }
  public getDescription(): string {
    return this.description;
  } public getPrice(): number {
    return this.price;
  } public getImage(): string {
    return this.image;
  } public getCreatedAt(): Date {
    return this.createdAt;
  } public getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
