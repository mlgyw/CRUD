import Repository from "../Repository/index.js";
class Orders {
  async createOrder(name, model) {
    return Repository.Orders.createOrder(name, model);
  }
  async watchStatus(id) {
    return await Repository.Orders.watchStatus(id);
  }
  async updateStatus(newStatus, id) {
    return await Repository.Orders.updateStatus(newStatus, id);
  }
  async cancelOrder(id) {
    return await Repository.Orders.cancelOrder(id);
  }
}
export default new Orders();
