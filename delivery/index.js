import Express from "express";

export const router = Express.Router();

router.get("/test", async (req, res) => {
res.end("helloWorld")
});
