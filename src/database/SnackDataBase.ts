import { BaseDatabase } from "./BaseDataBase";
import { input } from "../DTOs/inputGetAllSnaks.DTO";
import { outputSnacks } from "../models/SnackModels";



export class SnackDataBase extends BaseDatabase {

  public async getAllSnacks({snack}:input):Promise<outputSnacks[]>{
    return await BaseDatabase.prisma.snack.findMany({
        where:{
          snack:{
            equals:snack as string
          }
      }
    })
  }
}
