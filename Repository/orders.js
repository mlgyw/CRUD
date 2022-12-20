import DBconnector from "./connector.js";

class orders {
  async createOrder(name, model) {
    const client = await DBconnector.client;
    const autosData = await client.auto.findMany();
    const newOrder = await client.order.create({
      data: {
        creationTime: "2022-12-16 15:45",
        name: name,
        status: "created",
        product: {
          connect: { model: model },
        },
      },
    });
    return newOrder;
  }
  async watchStatus(id) {
    const client = await DBconnector.client;
    const status = await client.order.findMany({
      where: {
        id: id,
        // status: {},
      },
    });
    return status;
  }
  async updateStatus(newStatus, id) {
    const client = await DBconnector.client;
    const status = await client.order.update({
      where: {
        id: id,
      },
      data: {
        status: newStatus,
      },
    });
    return status;
  }
  async cancelOrder(id) {
    const client = await DBconnector.client;
    const status = await client.order.update({
      where: {
        id: id,
      },
      data: {
        status: "cancelled",
      },
    });
    return status;
  }
}
export default new orders();
