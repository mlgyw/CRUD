import Express from "express";
import Joi from "joi";
import DBconnector from "../../Repository/connector.js";
import orders from "../../UseCase/orders.js";
import validate from "../../validator/validator.js";

export const router = Express.Router();

const order = Joi.object().keys({
  name: Joi.string().required(),
  model: Joi.string().required(),
});

router.get("/createOrder", validate(order, "query"), async (req, res) => {
  let name = req.query.name;
  let model = req.query.model;
  let result = await orders.createOrder(name, model);
  res.send(result);
});

const watchStatus = Joi.object().keys({
  id: Joi.number().required(),
});

router.get("/watchStatus", validate(watchStatus, "query"), async (req, res) => {
  let id = parseInt(req.query.id);
  let result = await orders.watchStatus(id);
  res.send(result);
});

const status = Joi.object().keys({
  status: Joi.string().required(),
  id: Joi.number().required(),
});

router.get("/updateStatus", validate(status, "query"), async (req, res) => {
  let newStatus = req.query.status;
  let id = parseInt(req.query.id);
  let res1 = await orders.updateStatus(newStatus, id);
  res.send(res1);
});

const id = Joi.object().keys({
  id: Joi.number().required(),
});

router.get("/cancelOrder", async (req, res) => {
  let id = parseInt(req.query.id);
  let res1 = await orders.cancelOrder(id);
  res.send(res1);
});
