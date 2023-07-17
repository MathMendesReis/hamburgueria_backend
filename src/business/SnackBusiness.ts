import { input } from "../DTOs/inputGetAllSnaks.DTO";
import { SnackDataBase } from "../database/SnackDataBase";
import { NotFoundError } from "../error/NotFoundError";
import { outputSnacks } from "../models/SnackModels";

export class SnackBusiness{
  private snackDataBase = new SnackDataBase()
  public async getAllSnacks(input:input):Promise<outputSnacks[]>{
    const result = await this.snackDataBase.getAllSnacks(input)
    if (result.length === 0) {
      throw new NotFoundError("Recurso não encontrado.")
    }
    return result
  }
}
