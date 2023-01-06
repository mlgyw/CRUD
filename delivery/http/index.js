import Express from "express";
import orders from "./orders.js";
import {ApolloServer} from 'apollo-server';
import typeDefs from "../../schema/schema.js";
import schema from "../../schema/schema.js";
import { graphqlHTTP } from 'express-graphql'

const app = Express();

app.use("/api/orders", orders);

//const server = new ApolloServer({typeDefs});
// const server = new ApolloServer({
//     typeDefs,
//     mocks: true
//   });
// app.use(
//   "/",
//   graphql({
//     schema: schema,
//     graphiql: true, // TODO: Implement GraphQL schema
//   })
// );
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

export default app;
