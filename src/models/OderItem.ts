export class OrderMoldes {
  constructor(
  private status: string,
  private total: string,
  private transactionId: string,
  private createdAt: string,
  private updatedAt: Date,
  private customer: string,
  private customerId: string,
  private orderItems: string,
  ){

  }
}
