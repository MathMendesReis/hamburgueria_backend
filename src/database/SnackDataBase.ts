import { BaseDatabase } from "./BaseDataBase";
import { input } from "../DTOs/inputGetAllSnaks.DTO";


export class SnackDataBase extends BaseDatabase {

  public async getAllSnacks({snack}:input): Promise<any[]> {
    return await BaseDatabase.prisma.snack.findMany({
       where:{
         snack:{
           equals:snack as string
         }
       }
    })
  }
}
