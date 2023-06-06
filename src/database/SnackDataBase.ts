import { BaseDatabase } from "./BaseDataBase";

export class SnackDataBase extends BaseDatabase {

  public async getAllSnacks(): Promise<any[]> {
    return await BaseDatabase.prisma.snack.findMany()
  }
}
