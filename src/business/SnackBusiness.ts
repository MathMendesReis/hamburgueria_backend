import { SnackDataBase } from "../database/SnackDataBase";

export class SnackBusiness{
  private snackDataBase = new SnackDataBase
  public async getAllSnacks(){
    return  await this.snackDataBase.getAllSnacks()
  }
}
