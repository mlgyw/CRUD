import graphql, { __InputValue } from "graphql";
import { gql } from "apollo-server";
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
  input model {
    model: String!
  }
  input update {
    id: Int!
    puechases: Int!
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
    watchPuechases(input: model): [Cars!]
  }

  type Mutation {
    addCars(input: typeCars): [Cars!]
    deleteCars(input: task): [Cars!]
    updateCars(input: update): [Cars!]
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
    watchPuechases: (context, model) => {
      return client.auto.findMany({
        where: {
          model: model.input.model,
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
    deleteCars: (context, id) => {
      return client.auto.deleteMany({
        where: {
          id: id.input.id,
        },
      });
    },
    updateCars: (context, data) => {
      return client.auto.update({
        where: {
          id: data.input.id,
        },
        data:{
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
