import Express from "express";
import Joi from "joi";
import DBconnector from "../../Repository/connector.js";
import orders from "../../UseCase/orders.js";
import validate from "../../validator/validator.js";

const router = Express.Router();

const order = Joi.object().keys({
  name: Joi.string().required(),
  model: Joi.string().required(),
});

router.get("/createOrder", validate(order, "query"), async (req, res) => {
  const result = await orders.createOrder(req.query.name, req.query.model);
  if(result.error){
  res.sendStatus(500);
  }
  else {
    res.send(result.value)
  }
});

const watchStatus = Joi.object().keys({
  id: Joi.number().required(),
});

router.get("/watchStatus", validate(watchStatus, "query"), async (req, res) => {
  let result = await orders.watchStatus(parseInt(req.query.id));
  res.send(result);
});

const status = Joi.object().keys({
  status: Joi.string().required(),
  id: Joi.number().required(),
});

router.get("/updateStatus", validate(status, "query"), async (req, res) => {
  let res1 = await orders.updateStatus(req.query.status, parseInt(req.query.id));
  res.send(res1);
});

const id = Joi.object().keys({
  id: Joi.number().required(),
});

router.get("/cancelOrder",validate(id, "query"), async (req, res) => {
  let res1 = await orders.cancelOrder(parseInt(req.query.id));
  res.send(res1);
});

export default router