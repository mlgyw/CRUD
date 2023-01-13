import DBconnector from "./connector.js";

class orders {
  async createOrder(name, model) {
    let result = {
      value: null,
      error: null,
    };
    try {
      const client = await DBconnector.client;
      const newOrder = await client.order.create({
        data: {
          creationTime: "2022-12-26 15.02",
          name: name,
          status: "created",
          product: {
            connect: { model: model },
          },
        },
      });
      result.value = newOrder;
    } catch (error) {
      result.error = error || new Error("repository error");
    }
    return result;
  }
  async watchStatus(id) {
    let result = {
      value: null,
      error: null,
    };
    try {
      const client = await DBconnector.client;
      const status = await client.order.findMany({
        where: {
          id: id,
        },
      });
      result.value = status;
    } catch (error) {
      result.error = error || new Error("repository error");
    }
    return result;
  }
  async updateStatus(newStatus, id) {
    let result = {
      value: null,
      error: null,
    };
    try {
      const client = await DBconnector.client;
      const status = await client.order.update({
        where: {
          id: id,
        },
        data: {
          status: newStatus,
        },
      });
      result.value = status;
    } catch (error) {
      result.error = error || new Error("repository error");
    }
    return result;
  }
  async cancelOrder(id) {
    let result = {
      value: null,
      error: null,
    };
    try{
    const client = await DBconnector.client;
    const status = await client.order.update({
      where: {
        id: id,
      },
      data: {
        status: "cancelled",
      },
    });
    result.value = status
  }catch(error){
    result.error = error || new Error("repository error");
  }
    return result;
  }
}
export default new orders();

