require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const schemaPath = "./schema/index.graphql";
const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
});

const port = process.env.APP_SERVER_PORT || 3333;

server
  .listen(port)
  .then(({ url }) => {
    console.log(`Running Server on ${port} in ${url} `);
  })
  .catch((err) => {
    console.log(`Error executing server: ${err}`);
  });
