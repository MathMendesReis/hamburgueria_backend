import { input } from "../DTOs/inputGetAllSnaks.DTO";
import { SnackDataBase } from "../database/SnackDataBase";
import { outputSnacks } from "../models/SnackModels";

export class SnackBusiness{
  private snackDataBase = new SnackDataBase()
  public async getAllSnacks(input:input):Promise<outputSnacks[]>{
    const result = await this.snackDataBase.getAllSnacks(input)
    return result
  }
}
