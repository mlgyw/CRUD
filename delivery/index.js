import { PrismaClient } from "@prisma/client";
import Express from "express";
import Joi from "joi";
import validate from "../validator/validator.js";

export const router = Express.Router();

const order = Joi.object().keys({
  name: Joi.string().required(),
  model: Joi.string().required(),
});

router.get("/createOrder", validate(order, "query"), async (req, res) => {
  let name = req.query.name;
  let model = req.query.model;
  const client = new PrismaClient();
  await client.$connect();
  const autosData = await client.auto.findMany();
  const res1 = await client.order.create({
    data: {
      creationTime: "2022-12-16 15:25",
      name: name,
      status: "created",
      product: {
        connect: { model: model },
      },
    },
  });
  // const res2 = await client.order.deleteMany({
  // });
  //res.send(autosData);
  res.send(res1);
});

router.get("/watchStatus", async (req, res) => {
  const client = new PrismaClient();
  await client.$connect();
  const res2 = await client.order.findMany({
    where: {
      status: {},
    },
  });
  res.send(res2);
});

const status = Joi.object().keys({
  status: Joi.string().required(),
  id: Joi.number().required(),
});

router.get("/updateStatus", validate(status, "query"), async (req, res) => {
  let status = req.query.status;
  let id = parseInt(req.query.id)
  const client = new PrismaClient();
  await client.$connect();
  const res1 = await client.order.update({
    where: { 
      id: id 
    },
    data:{ 
        status:status 
     }
  });
  res.send(res1);
});

const id = Joi.object().keys({
  id: Joi.number().required(),
});

router.get("/cancelOrder", async (req, res) => {
  let id = parseInt(req.query.id)
  const client = new PrismaClient();
  await client.$connect();
  const res1 = await client.order.update({
    where: { 
      id: id 
    },
    data:{ 
        status:'cancelled' 
     }
  });
  res.send(res1);
});