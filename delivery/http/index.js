import Express from "express";
import orders from "./orders.js";
import schema from "../../schema/schema.js";
import { graphqlHTTP } from 'express-graphql'

const app = Express();

app.use("/api/orders", orders);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

export default app;
