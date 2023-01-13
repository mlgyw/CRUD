import Express from "express";
import Joi from "joi";
import UseCases from "../../UseCases/index.js";
import validate from "../../validator/validator.js";

const router = Express.Router();

const order = Joi.object().keys({
  name: Joi.string().required(),
  model: Joi.string().required(),
});

router.get("/createOrder", validate(order, "query"), async (req, res) => {
  const result = await UseCases.Orders.createOrder(req.query.name, req.query.model);
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
  let result = await UseCases.Orders.watchStatus(parseInt(req.query.id));
  if(result.error){
    res.sendStatus(500);
    }
    else {
      res.send(result.value)
    }
});

const status = Joi.object().keys({
  status: Joi.string().required(),
  id: Joi.number().required(),
});

router.get("/updateStatus", validate(status, "query"), async (req, res) => {
  let result = await UseCases.Orders.updateStatus(req.query.status, parseInt(req.query.id));
  if(result.error){
    res.sendStatus(500);
    }
    else {
      res.send(result.value)
    }
});

const id = Joi.object().keys({
  id: Joi.number().required(),
});

router.get("/cancelOrder",validate(id, "query"), async (req, res) => {
  let result = await UseCases.Orders.cancelOrder(parseInt(req.query.id));
  if(result.error){
    res.sendStatus(500);
    }
    else {
      res.send(result.value)
    }
});

export default router