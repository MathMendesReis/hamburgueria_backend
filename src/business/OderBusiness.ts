import { InputOrder } from "../DTOs/inputGetOrder.DTO";
import { OrderDataBase } from "../database/OderDataBase";
import { NotFoundError } from "../error/NotFoundError";

export class OderBusiness{

  private oderBusiness = new OrderDataBase()
  public async getAllOderasync({id}:InputOrder) {
    const intId = parseInt(id)
    const result = await this.oderBusiness.getAllOderasync(intId)
    if(result.length === 0){
      throw new NotFoundError('Recurso nao econtrado.')
    }
    return result.length > 0? result: `Compra não encontrada`
  }

  public checkout =async (req:Request, res:Response) => {

  }
}
