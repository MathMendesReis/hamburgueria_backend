import { Request } from "express";
import { PaymentData } from "./PaymentData";
import { CustomerData } from "./CustomerData";
import { SnackData } from "./SnackData";

export interface CheckoutRequest extends Request {
body:{
  cart:SnackData[],
  customer: CustomerData,
  payment: PaymentData
}
}
