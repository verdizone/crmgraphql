const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/shema.graphql");
const resolvers = require("./db/resolvers");
const conectarDB = require("./config/db")

//Conectar la base de Datos
conectarDB();

//servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: () =>{
  //   const miContext = 'Hola';
  //   return{
  //     miContext
  //   }
  // }
});

//arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL: ${url}`);
});
