import { PrismaClient } from "@prisma/client";
class DBconnector {
    client = new PrismaClient();
  async createConnection() {
    this.client = new PrismaClient();
    await this.client.$connect();
  }
}
export default new DBconnector();
