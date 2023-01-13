import DBconnector from "./connector.js";
import orders from "./orders.js";
class Repository {
  DBconnector;
  Orders
  constructor() {
    this.DBconnector = DBconnector;
    this.Orders=orders;
  }
}
export default new Repository();