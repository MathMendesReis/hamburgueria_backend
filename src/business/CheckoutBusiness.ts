import { Customer, Order } from "@prisma/client";
import { CheckoutBaseDataBase } from "../database/CheckoutDataBase";
import { CustomerData } from "../interfaces/CustomerData";
import { PaymentData } from "../interfaces/PaymentData";
import { SnackData } from "../interfaces/SnackData";
import { MessageSucess } from "../interfaces/MessageSucces";

export class CheckoutBusiness {
  private checkDataBase = new CheckoutBaseDataBase()

  public checkout =async (cart:SnackData[],customer:CustomerData,payment:PaymentData):Promise<MessageSucess>=> {
    const checkoutSnacks = await this.checkDataBase.checkoutSnacks(cart)
    const newSnacks: SnackData[] = checkoutSnacks.map((snack) => {
      const cartItem = cart.find((item) => item.id === snack.id);
      const quantity = cartItem ? cartItem.quantity : 0;
      const price = Number(snack.price);
      const subTotal = quantity * price;
      return {
        ...snack,
        price,
        quantity,
        subTotal,
      };
    });
    const createCustomer = await this.createCustomer(customer)
    const createOrder = await this.createOder(newSnacks,createCustomer)

  return {
    message:`Checkout completed`
  }

  }

  public createCustomer =async (customer:CustomerData):Promise<Customer> => {
    return await this.checkDataBase.createCustomer(customer)
  }

  public createOder =async (cart:SnackData[],customer:Customer) => {
    return await this.checkDataBase.createOrder(cart,customer)
  }
}
