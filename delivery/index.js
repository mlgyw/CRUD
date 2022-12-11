import Express from "express";
//import con from "../repository/connector/index.js"
import {auto} from "../repository/connector/index.js"
export const router = Express.Router();

router.get("/getList", async (req, res) => {
//res.end("helloWorld")
//con.connectDB()
//con.con()
//var psql = 'SELECT * FROM autos'

const collection = await auto.findAll()
const Auto = collection
res.send(Auto)
//res.boby =Auto //vozmoszhno res
});
