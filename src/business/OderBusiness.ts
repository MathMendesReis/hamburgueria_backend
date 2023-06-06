import { InputOrder } from "../DTOs/inputGetOrder.DTO";
import { OrderDataBase } from "../database/OderDataBase";

export class OderBusiness{

  private oderBusiness = new OrderDataBase()
  public async getAllOderasync({id}:InputOrder) {
    const intId = parseInt(id)
    const result = await this.oderBusiness.getAllOderasync(intId)
    return result.length > 0? result: `Compra não encontrada`
  }

  public checkout =async (req:Request, res:Response) => {

  }
}
