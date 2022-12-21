import orders from "./orders.js";
class UseCases {
  orders;
  constructor() {
    this.orders = orders;
  }
}
export default new UseCases();
