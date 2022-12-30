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
      return client.auto.findMany({
        where: {
          id: id.input.id,
        },
      });
    },
    filterBrand: (context, brand) => {
      return client.auto.findMany({
        where: {
          brandName: brand.input.brand,
        },
      });
    },
  },
  Mutation: {
    addCars: (context, data,  ) => { 
      return client.auto.create({
        data: {
          brandName: data.input.brandName,
          model:data.input.model ,
          fuelType: data.input.fuelType,
          bodyType: data.input.bodyType,
          puechases:data.input.puechases
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
