import graphql from "graphql";
import { gql } from "apollo-server";
import DBconnector from "../Repository/connector.js";
import orders from "../UseCase/orders.js";
import { PrismaClient } from '@prisma/client';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  graphqlHTTP
} = graphql;
// const client = DBconnector.client
// // const Cars = new GraphQLObjectType({
// //   name: "car",
// //   fields: () => ({
// //     id: { type: GraphQLID },
// //     brandName: { type: GraphQLString },
// //     model: { type: GraphQLString },
// //     fuelType: { type: GraphQLString },
// //     bodyType: { type: GraphQLString },
// //     puechases: { type: GraphQLInt },
// //   }),
// // });

// const query = new GraphQLObjectType({
//   name: "query",
//   cars: {
//     type: Cars,
//     args: { id: { type: GraphQLID } },
//     resolve(parent, args) {},
//   },
// });
// export default new GraphQLSchema({
//     query:query
// })

const client = new PrismaClient();
await client.$connect();
const status = await client.order.findMany({
  select: {
    id:true 
  },
}); 
//console.log(status)


const CarType = new GraphQLObjectType({
  name: "Cars",
  fields: () => ({
    id: { type: GraphQLID },
    brandName: { type: GraphQLString },
    model: { type: GraphQLString },
    fuelType: { type: GraphQLString },
    bodyType: { type: GraphQLString },
    puechases: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllCars: {
      type: CarType,
      //args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        const client = new PrismaClient();
        client.$connect();
        const status =  client.order.findMany({
          select: {
            args:true
          },
        }); 
        console.log(args)
        return status
      },
    },
    getCurrentUser: {
      type: new GraphQLList(CarType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, { id }) {
        return client.order.findMany({ where: args })
        return watchStatus()
        console.log(a.id)
        return a.id ;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createCar: {
      type: CarType,
      args: {
        id: { type: GraphQLID },
        brandName: { type: GraphQLString },
        model: { type: GraphQLString },
        fuelType: { type: GraphQLString },
        bodyType: { type: GraphQLString },
        puechases: { type: GraphQLInt },
      },
      resolve(parent, args) {
        CarsData.push({
          id: CarsData.length + 1,
          brandName: args.brandName,
          model: args.model,
          fuelType: args.fuelType,
          bodyType: args.bodyType,
          puechases: args.puechases,
        });
        return args;
      },
    },
  },
});
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
export default schema
// export default typeDefs
// const mocks = {
//     Query: () => ({
//       tracksForHome: () => [...new Array(6)]
//     }),
//     Track: () => ({
//       id: () => 'track_01',
//       title: () => 'Astro Kitty, Space Explorer',
//       author: () => {
//         return {
//           name: 'Grumpy Cat',
//           photo:
//             'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
//         };
//       },
//       thumbnail: () =>
//         'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
//       length: () => 1210,
//       modulesCount: () => 6
//     })
//   };
