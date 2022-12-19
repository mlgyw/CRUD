import connector from "./connector.js";

class orders {
  constructor() {}
  async createOrder(name, model) {
    const client = await connector.client;
    const autosData = await client.auto.findMany();
    const res1 = await client.order.create({
      data: {
        creationTime: "2022-12-16 15:45",
        name: name,
        status: "created",
        product: {
          connect: { model: model },
        },
      },
    });
    return res1;
  }
  async watchStatus() {
    const client = await connector.client;
    const res2 = await client.order.findMany({
      where: {
        status: {},
      },
    });
    return res2;
  }
  async updateStatus(status, id) {
    const client = await connector.client;
    const res1 = await client.order.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });
    return res1;
  }
  async cancelOrder(id) {
    const client = await connector.client;
    const res1 = await client.order.update({
      where: {
        id: id,
      },
      data: {
        status: "cancelled",
      },
    });
    return res1;
  }
}
export default new orders();
