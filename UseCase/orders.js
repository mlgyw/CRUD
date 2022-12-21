import orders from "../Repository/orders.js";
class Orders {
  async createOrder(name, model) {
    return orders.createOrder(name, model);
  }
  async watchStatus(id) {
    return await orders.watchStatus(id);
  }
  async updateStatus(newStatus, id) {
    return await orders.updateStatus(newStatus, id);
  }
  async cancelOrder(id) {
    return await orders.cancelOrder(id);
  }
}
export default new Orders();
