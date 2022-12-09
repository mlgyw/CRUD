import Sequelize from "sequelize";

class con {
  sequelize;
  constructor() {}
  user = "postgres";
  host = "localhost";
  database = "auto";
  port = "5432";
  DBPASS = "7938";
  connectDB = async () => {
    const sequelize = new Sequelize(this.database, this.user, this.DBPASS, {
      host: this.host,
      port: this.port,
      dialect: "postgres",
      logging: false,
    });
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
}

export default new con();
