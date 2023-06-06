import { BaseDatabase } from "./BaseDataBase";

export class OrderDataBase extends BaseDatabase{
  public async getAllOderasync(intId:number) {
    return BaseDatabase.prisma.order.findMany({
      where: {
        id:intId
      }
    })
  }

  public checkout =async (req:Request, res:Response) => {

  }
}
