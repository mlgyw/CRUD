import graphql, { __InputValue } from "graphql";
import { gql } from "apollo-server";
import DBconnector from "../Repository/connector.js";
import orders from "../UseCase/orders.js";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  graphqlHTTP,
} = graphql;

const client = new PrismaClient();
client.$connect();

const typeDefs = gql`
  type Cars {
    id: Int!
    brandName: String!
    model: String
    fuelType: String
    bodyType: String
    puechases: Int
  }
  input task {
    id: Int!
  }
  input brand {
    brand: String!
  }
  input typeCars{
    id: Int!
    brandName: String!
    model: String
    fuelType: String
    bodyType: String
    puechases: Int
  }

  type Query {
    allCars: [Cars!]!
    filterCars(input: task): [Cars!]
    filterBrand(input: brand): [Cars!]
  }

  type Mutation {
    addCars(input: typeCars): [Cars!]
  }
`;

const resolvers = {
  Query: {
    allCars: () => {
      return client.auto.findMany();
    },
    filterCars: (context, id) => {
      let clear = 0;
      const id_ = Object.values(id);
      const iterator = id_.values();
      for (const value of iterator) {
        if (typeof value == "object") {
          clear = Object.values(value);
        }
      }
      const a = parseInt(clear);
      console.log(a);

      return client.auto.findMany({
        where: {
          id: a,
        },
      });
    },
    filterBrand: (context, brand) => {
      let clear = 0;
      const id_ = Object.values(brand);
      const iterator = id_.values();
      for (const value of iterator) {
        if (typeof value == "object") {
          clear = Object.values(value);
        }
      }
      const a = clear.toString();
      console.log(a);

      return client.auto.findMany({
        where: {
          brandName: a,
        },
      });
    },
  },
  Mutation: {
    addCars: (context, data,  ) => { 
      let clear=0;
      const id_ = Object.values(data);
      const iterator = id_.values();
      for (const value of iterator) {
        if (typeof value == "object") {
          clear = Object.values(value);
        }
      }
      //const a = clear.toString();
      //console.log(a);
      return client.auto.create({
        data: {
          brandName: clear[1],
          model: clear[2],
          fuelType: clear[3],
          bodyType: clear[4],
          puechases:clear[5]
        },
      });
    },
  },
};
const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default schema;
