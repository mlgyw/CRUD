import Express from "express";
import con from "../repository/connector/index.js"
export const router = Express.Router();

router.get("/test", async (req, res) => {
res.end("helloWorld")
con.connectDB()
});
