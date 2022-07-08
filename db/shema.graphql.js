const { gql } = require("apollo-server");

//Shchema
const typeDefs = gql`
  type Query {
    obtenerCursos: String
  }
`;
module.exports = typeDefs;
