
import Sequelize from "sequelize";
import { DataTypes } from "sequelize";

// class con {
  // sequelize;
  // constructor() {}
  // user = "postgres";
  // host = "localhost";
  // database = "auto";
  // port = "5432";
   const DBPASS = "7938";
  // connectDB = async () => {
  //   const sequelize = new Sequelize(this.database, this.user, this.DBPASS, {
  //     host: this.host,
  //     port: this.port,
  //     dialect: "postgres",
  //     logging: false,
  //   });
  //   try {
  //     await sequelize.authenticate();
  //     console.log("Connection has been established successfully.");
  //   } catch (error) {
  //     console.error("Unable to connect to the database:", error);
  //   }
  // };
  // async con(){
   const sequelize = new Sequelize('postgres://postgres:'+DBPASS+'@localhost:5432/auto')
   try {
    await sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
  }
  
  export const auto = sequelize.define(
    'auto',
    {
      // Здесь определяются атрибуты модели
      brandName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fuelType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bodyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Purchases: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // Здесь определяются другие настройки модели
    }
  )
  sequelize.sync().then(()=>{//result=>{
    // auto.create({
    //   brandName:"volvo",
    //   ID:0,
    //   model:"s40",
    //   fuelType:"a95",
    //   bodyType:"universal",
    //   Purchases:2,
    // })
  })
  .catch(err=> console.log(err));
  // `sequelize.define` возвращает модель
  //console.log(auto === sequelize.models.autos)
  //return sequelize.models.User

//   const sql = `INSERT INTO autos(brandName) VALUES('Volvo')`
//   sequelize.query(sql, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
//     sequelize.end()
//     return sequelize.models.autos
// });
// }
// }
// export default new con()

