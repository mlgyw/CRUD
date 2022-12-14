import Express from "express";

export const router = Express.Router();

router.get("/getList", async (req, res) => {
res.end("helloWorld")
});
