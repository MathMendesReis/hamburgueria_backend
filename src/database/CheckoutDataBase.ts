import { Customer, Order, Snack } from "@prisma/client"
import { CustomerData } from "../interfaces/CustomerData"
import { SnackData } from "../interfaces/SnackData"
import { BaseDatabase } from "./BaseDataBase"
import { connect } from "http2"

export class CheckoutBaseDataBase extends BaseDatabase {

  public checkout =async () => {

  }

  public checkoutSnacks =async (cart:SnackData[]):Promise<Snack[]> => {
    return await BaseDatabase.prisma.snack.findMany({
      where: {
        id:{
          in:cart.map((snack)=>snack.id)
        }
      }
    })
  }


  public createCustomer =async (customer:CustomerData):Promise<Customer> => {
    return await BaseDatabase.prisma.customer.upsert({
      where:{ email:customer.email},
      update:customer,
      create:customer,
    })
  }

  public createOrder = async (snacksInCart: SnackData[], customer: Customer):Promise<Order> => {

    const total = snacksInCart.reduce((acc, snack) => acc + snack.subTotal, 0)
    const orderCreated = await BaseDatabase.prisma.order.create({
      data: {
        total,
        customer: {
          connect: { id: customer.id },
        },
        orderItems: {
          createMany: {
            data: snacksInCart.map((snack) => ({
              snackId: snack.id,
              quantity: snack.quantity,
              subTotal: snack.subTotal,
            })),
          },
        },
      },
      include: {
        customer: true,
        orderItems: { include: { snack: true } },
      },
    })

    return orderCreated
  }


}
