import orders from "../Repository/orders.js";
class Orders {
  constructor() {}
  async createOrder(name, model) {
    return orders.createOrder(name, model);
  }
  async watchStatus() {
    return await orders.watchStatus();
  }
  async updateStatus(status, id) {
    return await orders.updateStatus(status, id);
  }
  async cancelOrder(id) {
    return await orders.cancelOrder(id);
  }
}
export default new Orders();
