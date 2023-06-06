import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

export abstract class BaseDatabase {
  protected static prisma = new PrismaClient();
}
