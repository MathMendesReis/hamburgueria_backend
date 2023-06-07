export class Customer {
  constructor(
  private fullName: string,
  private email: string,
  private mobile: string,
  private document: string,
  private zipCode: string,
  private street: string,
  private number: string,
  private complement: string | undefined,
  private neighborhood: string,
  private city: string,
  private state: string,
  private createdAt: Date,
  private updatedAt: Date,
  private orders: []
  ){

  }
}
