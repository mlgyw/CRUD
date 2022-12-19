import { PrismaClient } from "@prisma/client";
class connector {
  client;
  constructor() {
    this.client = new PrismaClient();
  }
  async DBconnector() {
    this.client = new PrismaClient();
    await this.client.$connect();
  }
}
export default new connector();
